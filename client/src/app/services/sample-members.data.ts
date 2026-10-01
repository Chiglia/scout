import { ScoutMember } from '../models/scout.models';

export const SAMPLE_MEMBERS: ScoutMember[] = [
  {
    id: 'm_matteo',
    name: 'Matteo',
    surname: 'Rossi',
    role: 'rover',
    year: 2,
    phone: '+39 340 1234001',
    commitments: [
      { id: 'c1', name: 'Lezioni Università', day: 'monday', startTime: '09:00', endTime: '17:00', category: 'university' },
      { id: 'c2', name: 'Lezioni Università', day: 'tuesday', startTime: '09:00', endTime: '16:00', category: 'university' },
      { id: 'c3', name: 'Basket', day: 'tuesday', startTime: '19:00', endTime: '21:00', category: 'sport' },
      { id: 'c4', name: 'Laboratorio Uni', day: 'thursday', startTime: '14:00', endTime: '18:00', category: 'university' }
    ]
  },
  {
    id: 'm_sofia',
    name: 'Sofia',
    surname: 'Bianchi',
    role: 'scolta',
    year: 3,
    phone: '+39 340 1234002',
    commitments: [
      { id: 'c6', name: 'Liceo Classico', day: 'monday', startTime: '08:00', endTime: '13:30', category: 'school' },
      { id: 'c8', name: 'Violino', day: 'wednesday', startTime: '16:00', endTime: '18:00', category: 'other' },
      { id: 'c9', name: 'Volley', day: 'monday', startTime: '18:30', endTime: '20:30', category: 'sport' },
      { id: 'c10', name: 'Volley', day: 'thursday', startTime: '18:30', endTime: '20:30', category: 'sport' }
    ]
  },
  {
    id: 'm_lorenzo',
    name: 'Lorenzo',
    surname: 'Ferrari',
    role: 'rover',
    year: 1,
    phone: '+39 340 1234003',
    commitments: [
      { id: 'c11', name: 'Scuola', day: 'monday', startTime: '08:00', endTime: '14:00', category: 'school' },
      { id: 'c12', name: 'Scuola Guida', day: 'tuesday', startTime: '17:00', endTime: '18:30', category: 'other' },
      { id: 'c13', name: 'Scuola Guida', day: 'thursday', startTime: '17:00', endTime: '18:30', category: 'other' }
    ]
  },
  {
    id: 'm_chiara',
    name: 'Chiara',
    surname: 'Esposito',
    role: 'scolta',
    year: 2,
    phone: '+39 340 1234004',
    commitments: [
      { id: 'c15', name: 'Medicina', day: 'tuesday', startTime: '09:00', endTime: '18:00', category: 'university' },
      { id: 'c16', name: 'Tirocinio', day: 'wednesday', startTime: '08:00', endTime: '14:00', category: 'university' }
    ]
  },
  {
    id: 'm_davide',
    name: 'Davide',
    surname: 'Chigliaro',
    role: 'rover',
    year: 4,
    phone: '+39 340 1234005',
    commitments: [
      { id: 'c19', name: 'Tesi Magistrale', day: 'monday', startTime: '14:00', endTime: '18:00', category: 'university' },
      { id: 'c20', name: 'Arrampicata', day: 'wednesday', startTime: '19:00', endTime: '21:30', category: 'sport' }
    ]
  },
  {
    id: 'm_elena',
    name: 'Elena',
    surname: 'Galli',
    role: 'novizio',
    year: 1,
    phone: '+39 340 1234006',
    commitments: [
      { id: 'c22', name: 'Liceo', day: 'monday', startTime: '08:00', endTime: '14:00', category: 'school' },
      { id: 'c24', name: 'Inglese', day: 'tuesday', startTime: '16:00', endTime: '18:00', category: 'school' }
    ]
  },
  {
    id: 'm_francesco',
    name: 'Francesco',
    surname: 'Romano',
    role: 'rover',
    year: 3,
    phone: '+39 340 1234007',
    commitments: [
      { id: 'c26', name: 'Economia', day: 'monday', startTime: '10:00', endTime: '16:00', category: 'university' },
      { id: 'c28', name: 'Gruppo Parrocchia', day: 'tuesday', startTime: '21:00', endTime: '23:00', category: 'parish' }
    ]
  },
  {
    id: 'm_giulia',
    name: 'Giulia',
    surname: 'Ricci',
    role: 'scolta',
    year: 2,
    phone: '+39 340 1234008',
    commitments: [
      { id: 'c29', name: 'Lettere Moderne', day: 'tuesday', startTime: '14:00', endTime: '18:30', category: 'university' },
      { id: 'c30', name: 'Lettere Moderne', day: 'thursday', startTime: '14:00', endTime: '18:30', category: 'university' }
    ]
  }
];
