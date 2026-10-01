export type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export interface TimeSlot {
  day: DayOfWeek;
  startTime: string; // "HH:mm" (24h)
  endTime: string;   // "HH:mm" (24h)
  notes?: string;
}

export type CommitmentCategory = 
  | 'school' 
  | 'university' 
  | 'sport' 
  | 'family' 
  | 'work' 
  | 'scout' 
  | 'health' 
  | 'parish'
  | 'other';

export interface Commitment {
  id: string;
  name: string;
  day: DayOfWeek;
  startTime: string;
  endTime: string;
  category: CommitmentCategory;
  notes?: string;
}

export type ScoutRole = 'novizio' | 'rover' | 'scolta';

export interface ScoutMember {
  id: string;
  name: string;
  surname: string;
  role: ScoutRole;
  year?: number; // 1, 2, 3, 4
  phone?: string;
  email?: string;
  notes?: string;
  commitments: Commitment[];
  assignedServiceId?: string; // id of assigned social service
}

export type ServiceCategory = 
  | 'children' 
  | 'elderly' 
  | 'poverty' 
  | 'disability' 
  | 'health' 
  | 'environment' 
  | 'parish' 
  | 'other';

export interface SocialService {
  id: string;
  name: string;
  organization: string;
  category: ServiceCategory;
  description: string;
  location: string;
  contactPerson?: string;
  contactPhone?: string;
  requiredCapacity: number; // number of scouts needed (e.g. 2)
  scheduleSlots: TimeSlot[];
  color?: string; // HEX or tailwind tag
}

export interface SlotConflict {
  serviceSlot: TimeSlot;
  commitment: Commitment;
  reason: string;
}

export interface CompatibilityResult {
  isCompatible: boolean;
  conflicts: SlotConflict[];
  bufferMinutes: number;
}

export interface ClanStatistics {
  totalMembers: number;
  totalServices: number;
  totalCapacityNeeded: number;
  assignedCount: number;
  unassignedCount: number;
  averageCompatibilityRate: number;
}
