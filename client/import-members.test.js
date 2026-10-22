import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { formatMembers, importMembers, parseMembers } from './import-members.js';
import * as weeklyImport from './src/app/services/members-tsv.js';

const { mergeMembers } = weeklyImport;

function row(name, cells = []) {
  return [name, ...Array.from({ length: 7 }, (_, index) => cells[index] || '')].join('\t');
}

function halfHours(endMinutes) {
  const time = (minutes) =>
    `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;
  return Array.from({ length: (endMinutes - 420) / 30 }, (_, index) => {
    const start = 420 + index * 30;
    return `${time(start)}-${time(start + 30)}`;
  }).join(', ');
}

test('converts the supplied weekly layout, preserving the empty Saturday', () => {
  const text = row('Maddalena Pagano', [
    halfHours(990),
    halfHours(900),
    halfHours(990),
    halfHours(990),
    halfHours(990),
    '',
    '12:00-12:30, 12:30-13:00, 13:00-13:30, 13:30-14:00, 14:00-14:30',
  ]);
  const [member] = parseMembers(text);
  assert.equal(member.name, 'Maddalena');
  assert.equal(member.surname, 'Pagano');
  assert.deepEqual(
    member.commitments.map(({ day, startTime, endTime }) => ({ day, startTime, endTime })),
    [
      { day: 'monday', startTime: '07:00', endTime: '16:30' },
      { day: 'tuesday', startTime: '07:00', endTime: '15:00' },
      { day: 'wednesday', startTime: '07:00', endTime: '16:30' },
      { day: 'thursday', startTime: '07:00', endTime: '16:30' },
      { day: 'friday', startTime: '07:00', endTime: '16:30' },
      { day: 'sunday', startTime: '12:00', endTime: '14:30' },
    ],
  );
  assert.deepEqual(parseMembers(text), [member]);
});

test('merges unordered, duplicate and overlapping slots without filling gaps', () => {
  const [member] = parseMembers(
    row('Mario De Rossi', ['18:00-19:00, 08:30-09:00, 08:00-09:00, 08:00-08:30, 18:30-20:00']),
  );
  assert.equal(member.surname, 'De Rossi');
  assert.deepEqual(
    member.commitments.map((slot) => [slot.startTime, slot.endTime]),
    [
      ['08:00', '09:00'],
      ['18:00', '20:00'],
    ],
  );
});

test('supports headers, CRLF, BOM, multiple people and fully free members', () => {
  const header = [
    'Nome completo',
    'Lunedi',
    'Martedi',
    'Mercoledi',
    'Giovedi',
    'Venerdi',
    'Sabato',
    'Domenica',
  ].join('\t');
  const members = parseMembers(
    `\uFEFF${header}\r\n${row('Mario Rossi', ['LIBERO'])}\r\n${row('Anna Verdi', ['23:00-24:00'])}\r\n`,
  );
  assert.equal(members.length, 2);
  assert.deepEqual(members[0].commitments, []);
  assert.equal(members[1].commitments[0].endTime, '24:00');
});

test('uses short sequential IDs that remain unique beyond 99 members and commitments', () => {
  const slots = Array.from({ length: 24 }, (_, hour) => {
    const time = String(hour).padStart(2, '0');
    return `${time}:00-${time}:15`;
  }).join(', ');
  const text = Array.from({ length: 101 }, (_, index) =>
    row(`Persona Cognome${index}`, Array(7).fill(slots)),
  ).join('\n');
  const members = parseMembers(`Nome completo\tLunedi\n\n${text}`);
  assert.equal(members[0].id, 'm_01');
  assert.equal(members[100].id, 'm_101');
  assert.equal(members[0].commitments[0].id, 'c_01_01');
  assert.equal(members[0].commitments[100].id, 'c_01_101');
  assert.equal(members[100].commitments[0].id, 'c_101_01');
  const ids = members.flatMap((member) => [
    member.id,
    ...member.commitments.map((slot) => slot.id),
  ]);
  assert.equal(new Set(ids).size, ids.length);
});

test('rejects malformed rows, invalid hours, overnight intervals and duplicate names', () => {
  for (const text of [
    'Mario Rossi\t08:00-09:00',
    row('Mario'),
    row('Mario Rossi', ['25:00-26:00']),
    row('Mario Rossi', ['08:60-09:00']),
    row('Mario Rossi', ['10:00-09:00']),
    row('Mario Rossi', ['08:00-08:00']),
    row('Mario Rossi', ['testo']),
    `${row('Mario Rossi')}\n${row('mario rossi')}`,
  ]) {
    assert.throws(() => parseMembers(text), /Riga/);
  }
});

test('weekly import replaces commitments, keeps metadata and avoids ID collisions and duplicates', () => {
  const existing = parseMembers(`${row('Mario Rossi', ['08:00-09:00'])}\n${row('Anna Verdi')}`);
  existing[0].notes = 'Nota da conservare';
  existing[0].assignedServiceId = 's_01';
  const snapshot = structuredClone(existing);
  const imported = parseMembers(
    `${row('Paola Bianchi', ['', '10:00-11:00'])}\n${row('mario rossi')}`,
  );
  const updated = mergeMembers(imported, existing);
  assert.deepEqual(existing, snapshot);
  assert.equal(updated.length, 3);
  assert.deepEqual(updated[0], { ...snapshot[0], commitments: [] });
  assert.deepEqual(updated[1], snapshot[1]);
  assert.equal(updated[2].id, 'm_03');
  assert.equal(updated[2].commitments[0].id, 'c_03_01');
  assert.deepEqual(mergeMembers(imported, updated), updated);
  assert.deepEqual(mergeMembers(imported, []), imported);
});

test('weekly import rejects ambiguous existing names without mutating data', () => {
  const imported = parseMembers(row('Mario Rossi'));
  const existing = [imported[0], { ...imported[0], id: 'm_02' }];
  const snapshot = structuredClone(existing);
  assert.throws(() => mergeMembers(imported, existing), /ambiguo/);
  assert.deepEqual(existing, snapshot);
});

test('the website import service accepts weekly rows atomically and preserves the legacy format', async () => {
  const { default: typescript } = await import('typescript');
  const angular = await import('@angular/core');
  const loadService = (file, dependencies) => {
    const source = fs.readFileSync(new URL(file, import.meta.url), 'utf8');
    const compiled = typescript.transpileModule(source, {
      compilerOptions: {
        target: typescript.ScriptTarget.ES2022,
        module: typescript.ModuleKind.CommonJS,
        experimentalDecorators: true,
      },
    }).outputText;
    const exports = {};
    new Function('require', 'exports', compiled)((specifier) => {
      assert.ok(Object.hasOwn(dependencies, specifier), `Unexpected dependency: ${specifier}`);
      return dependencies[specifier];
    }, exports);
    return exports;
  };
  const timeUtils = loadService('./src/app/services/time-utils.ts', {});
  const { CsvImportService } = loadService('./src/app/services/csv-import.service.ts', {
    '@angular/core': angular,
    './time-utils': timeUtils,
    './members-tsv.js': weeklyImport,
  });
  const service = new CsvImportService();
  const text = row('Maddalena Pagano', [
    '07:00-07:30, 07:30-08:00',
    '',
    '',
    '',
    '',
    '',
    '12:00-14:30',
  ]);
  const result = service.parse(text, []);
  assert.deepEqual(result.updatedMembers, parseMembers(text));
  assert.equal(result.importedMembersCount, 1);
  assert.equal(result.importedCommitmentsCount, 2);
  assert.deepEqual(
    service.parse(text, result.updatedMembers).updatedMembers,
    result.updatedMembers,
  );
  const free = service.parse(row('Maddalena Pagano'), result.updatedMembers);
  assert.equal(free.importedMembersCount, 1);
  assert.deepEqual(free.errors, []);
  assert.deepEqual(free.updatedMembers[0].commitments, []);
  const invalid = service.parse(
    `${text}\n${row('Mario Rossi', ['errore'])}`,
    result.updatedMembers,
  );
  assert.strictEqual(invalid.updatedMembers, result.updatedMembers);
  assert.match(invalid.errors[0], /Riga 2/);
  const legacy = service.parse(
    'Nome,Cognome,Giorno,Dalle,Alle\nMario,Rossi,Lunedi,08:00,09:00',
    [],
  );
  assert.deepEqual(legacy.errors, []);
  assert.equal(legacy.updatedMembers[0].commitments[0].day, 'monday');
});

test('formats each commitment on one line without changing JSON data', () => {
  const members = parseMembers(
    `${row('Mario "De Rossi"', ['08:00-09:00, 18:00-19:00'])}\n${row('Anna Verdi')}`,
  );
  const formatted = formatMembers(members);
  assert.deepEqual(JSON.parse(formatted), members);
  const slotLines = formatted.split('\n').filter((line) => line.includes('"day":'));
  assert.equal(slotLines.length, 2);
  slotLines.forEach((line, index) => {
    assert.deepEqual(JSON.parse(line.trim().replace(/,$/, '')), members[0].commitments[index]);
  });
  assert.ok(formatted.includes('    "commitments": []'));
  assert.equal(formatMembers([]), '[]\n');
});

test('generated JSON merges commitments separated by exactly 30 minutes on the same day', (context) => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'scout-import-'));
  context.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  const input = path.join(directory, 'input.tsv');
  const output = path.join(directory, 'output.json');
  fs.writeFileSync(
    input,
    row('Mario Rossi', [
      '08:00-09:00, 09:30-10:00, 10:30-11:00, 11:15-11:30, 12:15-13:00',
      '08:00-09:00, 09:30-10:00',
    ]),
  );

  const members = importMembers(input, output);
  assert.deepEqual(
    members[0].commitments.map(({ id, day, startTime, endTime }) => ({
      id,
      day,
      startTime,
      endTime,
    })),
    [
      { id: 'c_01_01', day: 'monday', startTime: '08:00', endTime: '11:00' },
      { id: 'c_01_02', day: 'monday', startTime: '11:15', endTime: '11:30' },
      { id: 'c_01_03', day: 'monday', startTime: '12:15', endTime: '13:00' },
      { id: 'c_01_04', day: 'tuesday', startTime: '08:00', endTime: '10:00' },
    ],
  );
  assert.deepEqual(JSON.parse(fs.readFileSync(output, 'utf8')), members);
});

test('CLI saves JSON before clearing input and a second empty run preserves output', (context) => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'scout-import-'));
  context.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  const input = path.join(directory, 'input.tsv');
  const output = path.join(directory, 'output.json');
  fs.writeFileSync(input, row('Mario Rossi', ['08:00-08:30, 08:30-09:00']));
  const script = fileURLToPath(new URL('./import-members.js', import.meta.url));
  const result = spawnSync(process.execPath, [script, input, output], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  assert.equal(fs.readFileSync(input, 'utf8'), '');
  const saved = fs.readFileSync(output, 'utf8');
  assert.equal(JSON.parse(saved)[0].commitments[0].endTime, '09:00');
  assert.equal(saved, formatMembers(JSON.parse(saved)));
  assert.deepEqual(importMembers(input, output), []);
  assert.equal(fs.readFileSync(output, 'utf8'), saved);
});

test('validation and output failures preserve the original input and previous output', (context) => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'scout-import-'));
  context.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  const input = path.join(directory, 'input.tsv');
  const output = path.join(directory, 'output.json');
  const invalid = `${row('Mario Rossi')}\n${row('Anna Verdi', ['09:00-08:00'])}`;
  fs.writeFileSync(input, invalid);
  fs.writeFileSync(output, 'previous output');
  assert.throws(() => importMembers(input, output), /Riga 2/);
  assert.equal(fs.readFileSync(input, 'utf8'), invalid);
  assert.equal(fs.readFileSync(output, 'utf8'), 'previous output');
  const valid = row('Mario Rossi');
  fs.writeFileSync(input, valid);
  assert.throws(() => importMembers(input, path.join(directory, 'missing', 'output.json')));
  assert.equal(fs.readFileSync(input, 'utf8'), valid);
  assert.throws(() => importMembers(input, input), /diversi/);
  assert.equal(fs.readFileSync(input, 'utf8'), valid);
});
