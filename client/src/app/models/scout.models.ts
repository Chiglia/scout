export type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export interface TimeSlot {
    day: DayOfWeek;
    startTime: string; // "HH:mm" (24h)
    endTime: string;   // "HH:mm" (24h)
    notes?: string;
}

export interface Commitment {
    id: string;
    day: DayOfWeek;
    startTime: string;
    endTime: string;
}

export interface ScoutMember {
    id: string;
    name: string;
    surname: string;
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
    assignedCount: number;
    unassignedCount: number;
    averageCompatibilityRate: number;
}
