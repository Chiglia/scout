import { Injectable, inject } from '@angular/core';
import { ClanDataService } from './clan-data.service';
import { DAYS_METADATA } from './time-utils';

export const DAYS_OF_WEEK = DAYS_METADATA;

@Injectable({
  providedIn: 'root'
})
export class ClanService extends ClanDataService {}
