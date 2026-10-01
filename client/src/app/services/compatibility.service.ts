import { Injectable } from '@angular/core';
import { ScoutMember, SocialService, CompatibilityResult, SlotConflict } from '../models/scout.models';
import { TimeUtils, DAYS_METADATA } from './time-utils';

@Injectable({
  providedIn: 'root'
})
export class CompatibilityService {
  check(member: ScoutMember, service: SocialService, bufferMin = 15): CompatibilityResult {
    const conflicts: SlotConflict[] = [];

    for (const serviceSlot of service.scheduleSlots) {
      for (const commitment of member.commitments) {
        if (TimeUtils.doSlotsOverlap(serviceSlot, commitment, bufferMin)) {
          const dayLabel = DAYS_METADATA.find(d => d.id === serviceSlot.day)?.labelIt || serviceSlot.day;
          conflicts.push({
            serviceSlot,
            commitment,
            reason: `${dayLabel} (${commitment.startTime}-${commitment.endTime}): ${commitment.name}`
          });
        }
      }
    }

    return {
      isCompatible: conflicts.length === 0,
      conflicts,
      bufferMinutes: bufferMin
    };
  }

  computeOptimalAssignments(
    members: ScoutMember[], 
    services: SocialService[], 
    bufferMin = 15
  ): { [memberId: string]: string } {
    const mems = [...members];
    const servs = [...services];
    const serviceCounts: { [serviceId: string]: number } = {};
    servs.forEach(s => { serviceCounts[s.id] = 0; });

    const memberCompatMap = new Map<string, string[]>();
    for (const m of mems) {
      const compatibleServiceIds: string[] = [];
      for (const s of servs) {
        if (this.check(m, s, bufferMin).isCompatible) {
          compatibleServiceIds.push(s.id);
        }
      }
      memberCompatMap.set(m.id, compatibleServiceIds);
    }

    // Minimum Remaining Values heuristic (most constrained scout first)
    mems.sort((a, b) => {
      const compatA = memberCompatMap.get(a.id)?.length || 0;
      const compatB = memberCompatMap.get(b.id)?.length || 0;
      return compatA - compatB;
    });

    const finalAssignments: { [memberId: string]: string } = {};

    for (const member of mems) {
      const compatibleIds = memberCompatMap.get(member.id) || [];
      if (compatibleIds.length === 0) continue;

      let chosenServiceId: string | null = null;
      let minAssigned = 9999;

      for (const sId of compatibleIds) {
        const s = servs.find(item => item.id === sId)!;
        const currentCount = serviceCounts[sId] || 0;
        if (currentCount < s.requiredCapacity && currentCount < minAssigned) {
          minAssigned = currentCount;
          chosenServiceId = sId;
        }
      }

      if (!chosenServiceId) {
        let minOverall = 9999;
        for (const sId of compatibleIds) {
          const currentCount = serviceCounts[sId] || 0;
          if (currentCount < minOverall) {
            minOverall = currentCount;
            chosenServiceId = sId;
          }
        }
      }

      if (chosenServiceId) {
        serviceCounts[chosenServiceId] = (serviceCounts[chosenServiceId] || 0) + 1;
        finalAssignments[member.id] = chosenServiceId;
      }
    }

    return finalAssignments;
  }
}
