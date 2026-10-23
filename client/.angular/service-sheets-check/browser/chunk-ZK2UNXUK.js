import {
  Injectable,
  __objRest,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-KBN2KVTI.js";

// src/app/services/time-utils.ts
var DAYS_METADATA = [
  { id: "monday", labelIt: "Luned\xEC", labelEn: "Monday", shortIt: "Lun", shortEn: "Mon" },
  { id: "tuesday", labelIt: "Marted\xEC", labelEn: "Tuesday", shortIt: "Mar", shortEn: "Tue" },
  { id: "wednesday", labelIt: "Mercoled\xEC", labelEn: "Wednesday", shortIt: "Mer", shortEn: "Wed" },
  { id: "thursday", labelIt: "Gioved\xEC", labelEn: "Thursday", shortIt: "Gio", shortEn: "Thu" },
  { id: "friday", labelIt: "Venerd\xEC", labelEn: "Friday", shortIt: "Ven", shortEn: "Fri" },
  { id: "saturday", labelIt: "Sabato", labelEn: "Saturday", shortIt: "Sab", shortEn: "Sat" },
  { id: "sunday", labelIt: "Domenica", labelEn: "Sunday", shortIt: "Dom", shortEn: "Sun" }
];
var TimeUtils = class {
  static timeToMinutes(timeStr) {
    if (!timeStr)
      return 0;
    const parts = timeStr.trim().split(":");
    const hours = parseInt(parts[0] || "0", 10);
    const minutes = parseInt(parts[1] || "0", 10);
    return hours * 60 + minutes;
  }
  static minutesToTime(totalMins) {
    const bounded = Math.max(0, Math.min(24 * 60 - 1, totalMins));
    const h = Math.floor(bounded / 60);
    const m = bounded % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
  }
  static doSlotsOverlap(slotA, slotB, bufferMin = 0) {
    if (slotA.day !== slotB.day)
      return false;
    const startA = this.timeToMinutes(slotA.startTime);
    const endA = this.timeToMinutes(slotA.endTime);
    const startB = this.timeToMinutes(slotB.startTime);
    const endB = this.timeToMinutes(slotB.endTime);
    const bufferedStartA = Math.max(0, startA - bufferMin);
    const bufferedEndA = Math.min(24 * 60, endA + bufferMin);
    return bufferedStartA < endB && startB < bufferedEndA;
  }
  static normalizeDay(raw) {
    const s = raw.toLowerCase().trim();
    if (s.startsWith("lun") || s.startsWith("mon"))
      return "monday";
    if (s.startsWith("mar") || s.startsWith("tue"))
      return "tuesday";
    if (s.startsWith("mer") || s.startsWith("wed"))
      return "wednesday";
    if (s.startsWith("gio") || s.startsWith("thu"))
      return "thursday";
    if (s.startsWith("ven") || s.startsWith("fri"))
      return "friday";
    if (s.startsWith("sab") || s.startsWith("sat"))
      return "saturday";
    if (s.startsWith("dom") || s.startsWith("sun"))
      return "sunday";
    return null;
  }
  static normalizeTime(raw) {
    if (!raw)
      return null;
    const clean = raw.trim().replace(".", ":");
    const match = clean.match(/^(\d{1,2}):?(\d{2})?$/);
    if (!match)
      return null;
    const h = parseInt(match[1], 10);
    const m = match[2] ? parseInt(match[2], 10) : 0;
    if (h < 0 || h > 23 || m < 0 || m > 59)
      return null;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
  }
};

// src/app/services/compatibility.service.ts
var CompatibilityService = class _CompatibilityService {
  check(member, service, bufferMin = 15) {
    const conflicts = [];
    let hasAvailableSlot = false;
    for (const serviceSlot of service.scheduleSlots) {
      let slotHasConflict = false;
      for (const commitment of member.commitments) {
        if (TimeUtils.doSlotsOverlap(serviceSlot, commitment, bufferMin)) {
          slotHasConflict = true;
          const dayLabel = DAYS_METADATA.find((d) => d.id === serviceSlot.day)?.labelIt || serviceSlot.day;
          conflicts.push({
            serviceSlot,
            commitment,
            reason: `${dayLabel} (${commitment.startTime}-${commitment.endTime})`
          });
        }
      }
      if (!slotHasConflict)
        hasAvailableSlot = true;
    }
    return {
      isCompatible: hasAvailableSlot,
      conflicts,
      bufferMinutes: bufferMin
    };
  }
  computeOptimalAssignments(members, services, bufferMin = 15) {
    const mems = [...members];
    const servs = [...services];
    const serviceCounts = {};
    servs.forEach((s) => {
      serviceCounts[s.id] = 0;
    });
    const memberCompatMap = /* @__PURE__ */ new Map();
    for (const m of mems) {
      const compatibleServiceIds = [];
      for (const s of servs) {
        if (this.check(m, s, bufferMin).isCompatible) {
          compatibleServiceIds.push(s.id);
        }
      }
      memberCompatMap.set(m.id, compatibleServiceIds);
    }
    mems.sort((a, b) => {
      const compatA = memberCompatMap.get(a.id)?.length || 0;
      const compatB = memberCompatMap.get(b.id)?.length || 0;
      return compatA - compatB;
    });
    const finalAssignments = {};
    for (const member of mems) {
      const compatibleIds = memberCompatMap.get(member.id) || [];
      if (compatibleIds.length === 0)
        continue;
      let chosenServiceId = null;
      let minAssigned = 9999;
      for (const sId of compatibleIds) {
        const currentCount = serviceCounts[sId] || 0;
        if (currentCount < minAssigned) {
          minAssigned = currentCount;
          chosenServiceId = sId;
        }
      }
      if (chosenServiceId) {
        serviceCounts[chosenServiceId] = (serviceCounts[chosenServiceId] || 0) + 1;
        finalAssignments[member.id] = chosenServiceId;
      }
    }
    return finalAssignments;
  }
  static \u0275fac = function CompatibilityService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompatibilityService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CompatibilityService, factory: _CompatibilityService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompatibilityService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/services/members-tsv.js
var days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
var dayLabels = ["Lunedi", "Martedi", "Mercoledi", "Giovedi", "Venerdi", "Sabato", "Domenica"];
function parseTime(value, allowMidnight = false) {
  if (allowMidnight && value === "24:00") return 1440;
  if (!/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(value)) return null;
  const [hours, minutes] = value.split(":").map(Number);
  return hours * 60 + minutes;
}
function formatTime(minutes) {
  return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
}
function parseIntervals(cell, context) {
  if (!cell || cell.toUpperCase() === "LIBERO") return [];
  const intervals = cell.split(",").map((value) => {
    const match = value.trim().match(/^(\d{2}:\d{2})\s*-\s*(\d{2}:\d{2})$/);
    if (!match) throw new Error(`${context}: fascia non valida "${value.trim()}".`);
    const start = parseTime(match[1]);
    const end = parseTime(match[2], true);
    if (start === null || end === null || start >= end) {
      throw new Error(
        `${context}: orari non validi "${value.trim()}". La fine deve seguire l'inizio nello stesso giorno.`
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
      merged.push(__spreadValues({}, interval));
    }
  }
  return merged;
}
function parseMembers(text) {
  const members = [];
  const errors = [];
  const names = /* @__PURE__ */ new Set();
  const lines = text.replace(/^\uFEFF/, "").split(/\r?\n/);
  lines.forEach((line, index) => {
    if (!line.trim()) return;
    const cells = line.split("	").map((cell) => cell.trim());
    if (/^nome(?: completo)?$/i.test(cells[0]) && /^lun/i.test(cells[1] || "")) return;
    const context = `Riga ${index + 1}`;
    try {
      if (cells.length !== 8) {
        throw new Error(
          `${context}: servono 8 colonne separate da tabulazioni (nome completo e 7 giorni); trovate ${cells.length}.`
        );
      }
      const fullName = cells[0].replace(/\s+/g, " ");
      const [name, ...surnameParts] = fullName.split(" ");
      if (!name || surnameParts.length === 0) {
        throw new Error(`${context}: inserire nome e cognome nella prima colonna.`);
      }
      const key = fullName.normalize("NFC").toLowerCase();
      if (names.has(key)) throw new Error(`${context}: nome duplicato "${fullName}".`);
      const memberNumber = String(members.length + 1).padStart(2, "0");
      const memberId = `m_${memberNumber}`;
      let commitmentNumber = 0;
      const commitments = days.flatMap((day, dayIndex) => {
        const intervals = parseIntervals(cells[dayIndex + 1], `${context}, ${dayLabels[dayIndex]}`);
        return intervals.map(({ start, end }) => ({
          id: `c_${memberNumber}_${String(++commitmentNumber).padStart(2, "0")}`,
          day,
          startTime: formatTime(start),
          endTime: formatTime(end)
        }));
      });
      names.add(key);
      members.push({ id: memberId, name, surname: surnameParts.join(" "), commitments });
    } catch (error) {
      errors.push(error.message);
    }
  });
  if (errors.length) throw new Error(errors.join("\n"));
  return members;
}
function mergeMembers(importedMembers, existingMembers) {
  const keyOf = (member) => `${member.name} ${member.surname}`.normalize("NFC").trim().replace(/\s+/g, " ").toLowerCase();
  const members = [...existingMembers];
  const usedIds = new Set(existingMembers.map((member) => member.id));
  let nextNumber = 1;
  for (const imported of importedMembers) {
    const matches = members.filter((member) => keyOf(member) === keyOf(imported));
    if (matches.length > 1) {
      throw new Error(
        `Nome ambiguo tra i membri esistenti: "${imported.name} ${imported.surname}".`
      );
    }
    const existing = matches[0];
    let id = existing?.id;
    if (!id) {
      do {
        id = `m_${String(nextNumber++).padStart(2, "0")}`;
      } while (usedIds.has(id));
      usedIds.add(id);
    }
    const updated = __spreadProps(__spreadValues(__spreadValues({}, imported), existing), {
      id,
      commitments: imported.commitments.map((commitment, index) => __spreadProps(__spreadValues({}, commitment), {
        id: `c_${id.replace(/^m_/, "")}_${String(index + 1).padStart(2, "0")}`
      }))
    });
    if (existing) members[members.indexOf(existing)] = updated;
    else members.push(updated);
  }
  return members;
}

// src/app/services/csv-import.service.ts
var CsvImportService = class _CsvImportService {
  parse(csvText, existingMembers) {
    if (csvText.split(/\r?\n/).some((line) => line.split("	").length >= 6)) {
      try {
        const imported = parseMembers(csvText);
        if (!imported.length)
          throw new Error("Nessun membro da importare.");
        const updatedMembers2 = mergeMembers(imported, existingMembers);
        return {
          importedMembersCount: imported.length,
          importedCommitmentsCount: imported.reduce((total, member) => total + member.commitments.length, 0),
          errors: [],
          updatedMembers: updatedMembers2
        };
      } catch (error) {
        return {
          importedMembersCount: 0,
          importedCommitmentsCount: 0,
          errors: [error instanceof Error ? error.message : String(error)],
          updatedMembers: existingMembers
        };
      }
    }
    const lines = csvText.trim().split(/\r?\n/);
    const errors = [];
    if (lines.length === 0) {
      return { importedMembersCount: 0, importedCommitmentsCount: 0, errors: ["Testo vuoto"], updatedMembers: existingMembers };
    }
    const memberMap = /* @__PURE__ */ new Map();
    for (const m of existingMembers) {
      const key = `${m.name.trim().toLowerCase()} ${m.surname.trim().toLowerCase()}`;
      memberMap.set(key, { member: __spreadValues({}, m), commitments: [...m.commitments] });
    }
    let importedCommitmentsCount = 0;
    let newMembersCount = 0;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line || line.toLowerCase().startsWith("nome") || line.toLowerCase().startsWith("name")) {
        continue;
      }
      let delimiter = ",";
      if (line.includes("	"))
        delimiter = "	";
      else if (line.includes(";"))
        delimiter = ";";
      const parts = line.split(delimiter).map((p) => p.trim());
      if (parts.length < 4) {
        errors.push(`Riga ${i + 1} ignorata: servono almeno 4 colonne.`);
        continue;
      }
      const name = parts[0];
      const surname = parts.length >= 5 ? parts[1] : "";
      const rawDay = parts.length >= 5 ? parts[2] : parts[1];
      const rawStart = parts.length >= 5 ? parts[3] : parts[2];
      const rawEnd = parts.length >= 5 ? parts[4] : parts[3];
      const parsedDay = TimeUtils.normalizeDay(rawDay);
      if (!parsedDay) {
        errors.push(`Riga ${i + 1}: Giorno "${rawDay}" non riconosciuto.`);
        continue;
      }
      const startTime = TimeUtils.normalizeTime(rawStart);
      const endTime = TimeUtils.normalizeTime(rawEnd);
      if (!startTime || !endTime) {
        errors.push(`Riga ${i + 1}: Orari non validi (${rawStart} - ${rawEnd}).`);
        continue;
      }
      const key = `${name.toLowerCase()} ${surname.toLowerCase()}`.trim();
      let record = memberMap.get(key);
      if (!record) {
        const newM = {
          id: "m_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
          name,
          surname,
          commitments: []
        };
        record = { member: newM, commitments: [] };
        memberMap.set(key, record);
        newMembersCount++;
      }
      record.commitments.push({
        id: "c_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6),
        day: parsedDay,
        startTime,
        endTime
      });
      importedCommitmentsCount++;
    }
    const updatedMembers = Array.from(memberMap.values()).map((r) => __spreadProps(__spreadValues({}, r.member), {
      commitments: r.commitments
    }));
    return {
      importedMembersCount: newMembersCount,
      importedCommitmentsCount,
      errors,
      updatedMembers
    };
  }
  static \u0275fac = function CsvImportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CsvImportService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CsvImportService, factory: _CsvImportService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CsvImportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/services/clan-data.service.ts
var STORAGE_MEMBERS_KEY = "scout_clan_members_v3";
var STORAGE_SERVICES_KEY = "scout_clan_services_v3";
var STORAGE_BUFFER_KEY = "scout_clan_buffer_v3";
var DAY_START_MINUTES = 7 * 60;
var DAY_END_MINUTES = 22 * 60 + 30;
var ClanDataService = class _ClanDataService {
  compatService = inject(CompatibilityService);
  csvService = inject(CsvImportService);
  members = signal([], ...ngDevMode ? [{ debugName: "members" }] : (
    /* istanbul ignore next */
    []
  ));
  services = signal([], ...ngDevMode ? [{ debugName: "services" }] : (
    /* istanbul ignore next */
    []
  ));
  bufferMinutes = signal(15, ...ngDevMode ? [{ debugName: "bufferMinutes" }] : (
    /* istanbul ignore next */
    []
  ));
  statistics = computed(() => {
    const mems = this.members();
    const servs = this.services();
    const buffer = this.bufferMinutes();
    const assignedCount = mems.filter((m) => !!m.assignedServiceId).length;
    const unassignedCount = mems.length - assignedCount;
    let totalPairs = 0;
    let compatiblePairs = 0;
    for (const m of mems) {
      for (const s of servs) {
        totalPairs++;
        if (this.compatService.check(m, s, buffer).isCompatible)
          compatiblePairs++;
      }
    }
    return {
      totalMembers: mems.length,
      totalServices: servs.length,
      assignedCount,
      unassignedCount,
      averageCompatibilityRate: totalPairs > 0 ? Math.round(compatiblePairs / totalPairs * 100) : 0
    };
  }, ...ngDevMode ? [{ debugName: "statistics" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.loadFromStorage();
  }
  loadFromStorage() {
    try {
      const savedMembers = localStorage.getItem(STORAGE_MEMBERS_KEY);
      const savedServices = localStorage.getItem(STORAGE_SERVICES_KEY);
      const savedBuffer = localStorage.getItem(STORAGE_BUFFER_KEY);
      if (savedBuffer)
        this.bufferMinutes.set(parseInt(savedBuffer, 10) || 15);
      if (savedMembers && savedServices) {
        const normalizedMembers = this.normalizeMembers(JSON.parse(savedMembers));
        const normalizedServices = JSON.parse(savedServices);
        normalizedServices.forEach((service) => Reflect.deleteProperty(service, "requiredCapacity"));
        this.members.set(normalizedMembers);
        this.services.set(normalizedServices);
        localStorage.setItem(STORAGE_MEMBERS_KEY, JSON.stringify(normalizedMembers));
        localStorage.setItem(STORAGE_SERVICES_KEY, JSON.stringify(normalizedServices));
      } else {
        this.members.set([]);
        this.services.set([]);
      }
    } catch {
      this.members.set([]);
      this.services.set([]);
    }
  }
  saveToStorage() {
    try {
      localStorage.setItem(STORAGE_MEMBERS_KEY, JSON.stringify(this.members()));
      localStorage.setItem(STORAGE_SERVICES_KEY, JSON.stringify(this.services()));
      localStorage.setItem(STORAGE_BUFFER_KEY, this.bufferMinutes().toString());
    } catch (e) {
      console.error("Storage error:", e);
    }
  }
  setBuffer(mins) {
    this.bufferMinutes.set(mins);
    this.saveToStorage();
  }
  addMember(member) {
    const newMember = __spreadProps(__spreadValues({}, member), {
      id: "m_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6)
    });
    this.members.update((l) => [...l, newMember]);
    this.saveToStorage();
    return newMember;
  }
  updateMember(id, updates) {
    this.members.update((l) => l.map((m) => m.id === id ? __spreadValues(__spreadValues({}, m), updates) : m));
    this.saveToStorage();
  }
  deleteMember(id) {
    this.members.update((l) => l.filter((m) => m.id !== id));
    this.saveToStorage();
  }
  addCommitment(memberId, commitment) {
    const c = __spreadProps(__spreadValues({}, commitment), {
      id: "c_" + Date.now() + "_" + Math.random().toString(36).substring(2, 5)
    });
    this.members.update((l) => l.map((m) => m.id === memberId ? __spreadProps(__spreadValues({}, m), { commitments: [...m.commitments, c] }) : m));
    this.saveToStorage();
  }
  removeCommitment(memberId, commitmentId) {
    this.members.update((l) => l.map((m) => m.id === memberId ? __spreadProps(__spreadValues({}, m), { commitments: m.commitments.filter((c) => c.id !== commitmentId) }) : m));
    this.saveToStorage();
  }
  invertAllMembersCommitments() {
    this.members.update((members) => members.map((member) => {
      let invertedMember = member;
      for (const { id: day } of DAYS_METADATA) {
        invertedMember = this.invertMemberDay(invertedMember, day);
      }
      return invertedMember;
    }));
    this.saveToStorage();
  }
  invertMemberDay(member, day) {
    const dayCommitments = member.commitments.filter((commitment) => commitment.day === day);
    const outsideCommitments = [];
    const busySlots = [];
    for (const commitment of dayCommitments) {
      const start = TimeUtils.timeToMinutes(commitment.startTime);
      const end = TimeUtils.timeToMinutes(commitment.endTime);
      if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) {
        outsideCommitments.push(commitment);
        continue;
      }
      if (end <= DAY_START_MINUTES || start >= DAY_END_MINUTES) {
        outsideCommitments.push(commitment);
        continue;
      }
      if (start < DAY_START_MINUTES) {
        const outsideEnd = Math.min(end, DAY_START_MINUTES);
        if (outsideEnd > start) {
          outsideCommitments.push(__spreadProps(__spreadValues({}, commitment), {
            id: this.createCommitmentId(),
            endTime: this.minutesToCommitmentTime(outsideEnd)
          }));
        }
      }
      if (end > DAY_END_MINUTES) {
        const outsideStart = Math.max(start, DAY_END_MINUTES);
        if (end > outsideStart) {
          outsideCommitments.push(__spreadProps(__spreadValues({}, commitment), {
            id: this.createCommitmentId(),
            startTime: this.minutesToCommitmentTime(outsideStart)
          }));
        }
      }
      const busyStart = Math.max(start, DAY_START_MINUTES);
      const busyEnd = Math.min(end, DAY_END_MINUTES);
      if (busyEnd > busyStart)
        busySlots.push({ start: busyStart, end: busyEnd });
    }
    busySlots.sort((a, b) => a.start - b.start);
    const mergedSlots = [];
    for (const slot of busySlots) {
      const previous = mergedSlots[mergedSlots.length - 1];
      if (previous && slot.start <= previous.end) {
        previous.end = Math.max(previous.end, slot.end);
      } else {
        mergedSlots.push(__spreadValues({}, slot));
      }
    }
    const invertedCommitments = [];
    let freeStart = DAY_START_MINUTES;
    for (const slot of mergedSlots) {
      if (slot.start > freeStart) {
        invertedCommitments.push(this.createInvertedCommitment(day, freeStart, slot.start));
      }
      freeStart = Math.max(freeStart, slot.end);
    }
    if (freeStart < DAY_END_MINUTES) {
      invertedCommitments.push(this.createInvertedCommitment(day, freeStart, DAY_END_MINUTES));
    }
    const firstDayIndex = member.commitments.findIndex((commitment) => commitment.day === day);
    const insertAt = firstDayIndex < 0 ? member.commitments.length : member.commitments.slice(0, firstDayIndex).filter((commitment) => commitment.day !== day).length;
    const commitments = member.commitments.filter((commitment) => commitment.day !== day);
    commitments.splice(insertAt, 0, ...outsideCommitments, ...invertedCommitments);
    return __spreadProps(__spreadValues({}, member), { commitments });
  }
  createInvertedCommitment(day, start, end) {
    return {
      id: this.createCommitmentId("c_inv"),
      day,
      startTime: TimeUtils.minutesToTime(start),
      endTime: TimeUtils.minutesToTime(end)
    };
  }
  minutesToCommitmentTime(minutes) {
    return minutes === 24 * 60 ? "24:00" : TimeUtils.minutesToTime(minutes);
  }
  createCommitmentId(prefix = "c") {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  }
  normalizeMembers(members) {
    return members.map((member) => ({
      id: member.id,
      name: member.name,
      surname: member.surname,
      notes: member.notes,
      commitments: member.commitments.map((commitment) => {
        const _a = commitment, { name: _name, category: _category } = _a, normalizedCommitment = __objRest(_a, ["name", "category"]);
        return normalizedCommitment;
      }),
      assignedServiceId: member.assignedServiceId
    }));
  }
  addService(service) {
    const s = __spreadProps(__spreadValues({}, service), {
      id: "s_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6)
    });
    this.services.update((l) => [...l, s]);
    this.saveToStorage();
    return s;
  }
  updateService(id, updates) {
    this.services.update((l) => l.map((s) => s.id === id ? __spreadValues(__spreadValues({}, s), updates) : s));
    this.saveToStorage();
  }
  deleteService(id) {
    this.members.update((l) => l.map((m) => m.assignedServiceId === id ? __spreadProps(__spreadValues({}, m), { assignedServiceId: void 0 }) : m));
    this.services.update((l) => l.filter((s) => s.id !== id));
    this.saveToStorage();
  }
  assignMember(memberId, serviceId) {
    this.members.update((l) => l.map((m) => m.id === memberId ? __spreadProps(__spreadValues({}, m), { assignedServiceId: serviceId }) : m));
    this.saveToStorage();
  }
  unassignAll() {
    this.members.update((l) => l.map((m) => __spreadProps(__spreadValues({}, m), { assignedServiceId: void 0 })));
    this.saveToStorage();
  }
  autoAssign() {
    const plan = this.compatService.computeOptimalAssignments(this.members(), this.services(), this.bufferMinutes());
    this.members.update((l) => l.map((m) => __spreadProps(__spreadValues({}, m), { assignedServiceId: plan[m.id] || void 0 })));
    this.saveToStorage();
    const assignedCount = Object.keys(plan).length;
    return { assignedCount, unassignedCount: this.members().length - assignedCount };
  }
  importCsv(text) {
    const res = this.csvService.parse(text, this.members());
    this.members.set(res.updatedMembers);
    this.saveToStorage();
    return res;
  }
  async fetchSampleData(path) {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load ${path}: ${response.status} ${response.statusText}`);
    }
    return response.json();
  }
  async loadSampleMembers() {
    const members = await this.fetchSampleData("data/sample-members.json");
    this.members.set(this.normalizeMembers(members));
    this.saveToStorage();
  }
  async loadSampleServices() {
    const services = await this.fetchSampleData("data/sample-services.json");
    this.services.set(services);
    this.saveToStorage();
  }
  async loadSampleData() {
    const [members, services] = await Promise.all([
      this.fetchSampleData("data/sample-members.json"),
      this.fetchSampleData("data/sample-services.json")
    ]);
    this.members.set(this.normalizeMembers(members));
    this.services.set(services);
    this.bufferMinutes.set(15);
    this.saveToStorage();
  }
  resetAll() {
    this.members.set([]);
    this.services.set([]);
    this.saveToStorage();
  }
  static \u0275fac = function ClanDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClanDataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClanDataService, factory: _ClanDataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClanDataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  DAYS_METADATA,
  CompatibilityService,
  ClanDataService
};
//# sourceMappingURL=chunk-ZK2UNXUK.js.map
