import { ScoutMember } from '../models/scout.models';

export function parseMembers(text: string): ScoutMember[];
export function mergeMembers(importedMembers: ScoutMember[], existingMembers: ScoutMember[]): ScoutMember[];