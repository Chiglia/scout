const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const dayLabels = ['Lunedi', 'Martedi', 'Mercoledi', 'Giovedi', 'Venerdi', 'Sabato', 'Domenica'];

function parseTime(value, allowMidnight = false) {
  if (allowMidnight && value === '24:00') return 1440;
  if (!/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(value)) return null;
  const [hours, minutes] = value.split(':').map(Number);
  return hours * 60 + minutes;
}

function formatTime(minutes) {
  return `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;
}

function parseIntervals(cell, context) {
  if (!cell || cell.toUpperCase() === 'LIBERO') return [];
  const intervals = cell.split(',').map((value) => {
    const match = value.trim().match(/^(\d{2}:\d{2})\s*-\s*(\d{2}:\d{2})$/);
    if (!match) throw new Error(`${context}: fascia non valida "${value.trim()}".`);
    const start = parseTime(match[1]);
    const end = parseTime(match[2], true);
    if (start === null || end === null || start >= end) {
      throw new Error(
        `${context}: orari non validi "${value.trim()}". La fine deve seguire l'inizio nello stesso giorno.`,
      );
    }
    return { start, end };
  });

  intervals.sort((first, second) => first.start - second.start || first.end - second.end);
  const merged = [];
  for (const interval of intervals) {
    const previous = merged.at(-1);
    if (previous && interval.start <= previous.end) {
      previous.end = Math.max(previous.end, interval.end);
    } else {
      merged.push({ ...interval });
    }
  }
  return merged;
}

export function parseMembers(text) {
  const members = [];
  const errors = [];
  const names = new Set();
  const lines = text.replace(/^\uFEFF/, '').split(/\r?\n/);

  lines.forEach((line, index) => {
    if (!line.trim()) return;
    const cells = line.split('\t').map((cell) => cell.trim());
    if (/^nome(?: completo)?$/i.test(cells[0]) && /^lun/i.test(cells[1] || '')) return;
    const context = `Riga ${index + 1}`;
    try {
      if (cells.length !== 8) {
        throw new Error(
          `${context}: servono 8 colonne separate da tabulazioni (nome completo e 7 giorni); trovate ${cells.length}.`,
        );
      }
      const fullName = cells[0].replace(/\s+/g, ' ');
      const [name, ...surnameParts] = fullName.split(' ');
      if (!name || surnameParts.length === 0) {
        throw new Error(`${context}: inserire nome e cognome nella prima colonna.`);
      }
      const key = fullName.normalize('NFC').toLowerCase();
      if (names.has(key)) throw new Error(`${context}: nome duplicato "${fullName}".`);
      const memberNumber = String(members.length + 1).padStart(2, '0');
      const memberId = `m_${memberNumber}`;
      let commitmentNumber = 0;
      const commitments = days.flatMap((day, dayIndex) => {
        const intervals = parseIntervals(cells[dayIndex + 1], `${context}, ${dayLabels[dayIndex]}`);
        return intervals.map(({ start, end }) => ({
          id: `c_${memberNumber}_${String(++commitmentNumber).padStart(2, '0')}`,
          day,
          startTime: formatTime(start),
          endTime: formatTime(end),
        }));
      });
      names.add(key);
      members.push({ id: memberId, name, surname: surnameParts.join(' '), commitments });
    } catch (error) {
      errors.push(error.message);
    }
  });

  if (errors.length) throw new Error(errors.join('\n'));
  return members;
}

export function mergeMembers(importedMembers, existingMembers) {
  const keyOf = (member) =>
    `${member.name} ${member.surname}`.normalize('NFC').trim().replace(/\s+/g, ' ').toLowerCase();
  const members = [...existingMembers];
  const usedIds = new Set(existingMembers.map((member) => member.id));
  let nextNumber = 1;
  for (const imported of importedMembers) {
    const matches = members.filter((member) => keyOf(member) === keyOf(imported));
    if (matches.length > 1) {
      throw new Error(
        `Nome ambiguo tra i membri esistenti: "${imported.name} ${imported.surname}".`,
      );
    }
    const existing = matches[0];
    let id = existing?.id;
    if (!id) {
      do {
        id = `m_${String(nextNumber++).padStart(2, '0')}`;
      } while (usedIds.has(id));
      usedIds.add(id);
    }
    const updated = {
      ...imported,
      ...existing,
      id,
      commitments: imported.commitments.map((commitment, index) => ({
        ...commitment,
        id: `c_${id.replace(/^m_/, '')}_${String(index + 1).padStart(2, '0')}`,
      })),
    };
    if (existing) members[members.indexOf(existing)] = updated;
    else members.push(updated);
  }
  return members;
}
