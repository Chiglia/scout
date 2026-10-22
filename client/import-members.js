import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseMembers } from './src/app/services/members-tsv.js';

export { parseMembers } from './src/app/services/members-tsv.js';

const scriptPath = fileURLToPath(import.meta.url);
const scriptDirectory = path.dirname(scriptPath);

export function formatMembers(members) {
  if (!members.length) return '[]\n';
  const formatted = members.map(({ commitments, ...details }) => {
    const fields = Object.entries(details).map(
      ([key, value]) => `    ${JSON.stringify(key)}: ${JSON.stringify(value)}`,
    );
    const slots = commitments.map((commitment) => `      ${JSON.stringify(commitment)}`);
    fields.push(
      slots.length ? `    "commitments": [\n${slots.join(',\n')}\n    ]` : '    "commitments": []',
    );
    return `  {\n${fields.join(',\n')}\n  }`;
  });
  return `[\n${formatted.join(',\n')}\n]\n`;
}

function compactCommitments(members) {
  return members.map((member) => {
    const commitments = [];
    for (const commitment of member.commitments) {
      const previous = commitments.at(-1);
      const start = toMinutes(commitment.startTime);
      const previousEnd = previous ? toMinutes(previous.endTime) : 0;
      if (
        previous &&
        previous.day === commitment.day &&
        start - previousEnd === 30
      ) {
        previous.endTime = commitment.endTime;
      } else {
        commitments.push({ ...commitment });
      }
    }
    return {
      ...member,
      commitments: commitments.map((commitment, index) => ({
        ...commitment,
        id: `c_${member.id.replace(/^m_/, '')}_${String(index + 1).padStart(2, '0')}`,
      })),
    };
  });
}

function toMinutes(time) {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

export function importMembers(inputPath, outputPath) {
  if (path.resolve(inputPath) === path.resolve(outputPath)) {
    throw new Error('Il file di ingresso e quello di uscita devono essere diversi.');
  }
  const text = fs.readFileSync(inputPath, 'utf8');
  const members = compactCommitments(parseMembers(text));
  if (!members.length) return members;
  const temporaryPath = `${outputPath}.${process.pid}.tmp`;
  try {
    fs.writeFileSync(temporaryPath, formatMembers(members), {
      encoding: 'utf8',
      flag: 'wx',
    });
    if (fs.readFileSync(inputPath, 'utf8') !== text) {
      throw new Error('Il file di ingresso e stato modificato: operazione annullata.');
    }
    fs.renameSync(temporaryPath, outputPath);
  } finally {
    if (fs.existsSync(temporaryPath)) fs.unlinkSync(temporaryPath);
  }
  if (fs.readFileSync(inputPath, 'utf8') !== text) {
    throw new Error('JSON salvato, ma il file di ingresso e cambiato e non e stato svuotato.');
  }
  fs.writeFileSync(inputPath, '', 'utf8');
  return members;
}

if (process.argv[1] && path.resolve(process.argv[1]) === scriptPath) {
  try {
    const inputPath = path.resolve(
      process.argv[2] || path.join(scriptDirectory, 'members-input.tsv'),
    );
    const outputPath = path.resolve(
      process.argv[3] || path.join(scriptDirectory, 'members-output.json'),
    );
    const members = importMembers(inputPath, outputPath);
    if (!members.length) {
      console.log('Nessun membro da importare. Il risultato precedente non e stato modificato.');
    } else {
      const count = members.reduce((total, member) => total + member.commitments.length, 0);
      console.log(`Salvati ${members.length} membri e ${count} impegni in ${outputPath}.`);
      console.log(`File di ingresso svuotato: ${inputPath}`);
    }
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
