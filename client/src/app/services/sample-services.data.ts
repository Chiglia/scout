import { SocialService } from '../models/scout.models';

export const SAMPLE_SERVICES: SocialService[] = [
  {
    id: 's_mensa_caritas',
    name: 'Mensa dei Poveri Caritas',
    organization: 'Caritas Diocesana - San Francesco',
    category: 'poverty',
    description: 'Distribuzione pasti caldi serali per persone senza dimora.',
    location: 'Via San Francesco 14',
    contactPerson: 'Don Paolo / Suor Angela',
    contactPhone: '+39 02 87654321',
    requiredCapacity: 3,
    color: '#EA580C',
    scheduleSlots: [{ day: 'tuesday', startTime: '18:30', endTime: '20:30', notes: 'Servizio cena' }]
  },
  {
    id: 's_doposcuola',
    name: 'Doposcuola Popolare Ragazzi',
    organization: 'Centro Giovanile Don Bosco',
    category: 'children',
    description: 'Supporto compiti e attività educative per ragazzi delle scuole medie.',
    location: 'Piazza Don Bosco 2',
    contactPerson: 'Marco Valenti (Educatore)',
    contactPhone: '+39 347 1234567',
    requiredCapacity: 2,
    color: '#2563EB',
    scheduleSlots: [
      { day: 'monday', startTime: '16:30', endTime: '18:30', notes: 'Aiuto compiti medie' },
      { day: 'thursday', startTime: '16:30', endTime: '18:30', notes: 'Giochi di gruppo' }
    ]
  },
  {
    id: 's_disabili_germoglio',
    name: 'Attività con Ragazzi Disabili',
    organization: 'Associazione "Il Germoglio"',
    category: 'disability',
    description: 'Animazione e merenda con giovani con disabilità cognitiva.',
    location: 'Via dei Tigli 8',
    contactPerson: 'Chiara B.',
    contactPhone: '+39 333 9988776',
    requiredCapacity: 3,
    color: '#7C3AED',
    scheduleSlots: [{ day: 'saturday', startTime: '15:30', endTime: '18:00', notes: 'Laboratori' }]
  },
  {
    id: 's_anziani_auser',
    name: 'Spesa e Compagnia Anziani Soli',
    organization: 'Auser Solidarietà Territoriale',
    category: 'elderly',
    description: 'Visite a domicilio, lettura giornale e consegna spesa ad anziani soli.',
    location: 'Zona Centro / Domiciliare',
    contactPerson: 'Sig.ra Maria Rosa',
    contactPhone: '+39 02 11223344',
    requiredCapacity: 2,
    color: '#0D9488',
    scheduleSlots: [{ day: 'friday', startTime: '16:00', endTime: '18:30', notes: 'Spesa e visite' }]
  },
  {
    id: 's_banco_alimentare',
    name: 'Emporio della Solidarietà',
    organization: 'Banco Alimentare Regionale',
    category: 'poverty',
    description: 'Stoccaggio scatolame e confezionamento pacchi spesa settimanali.',
    location: 'Via dell’Artigianato 5',
    contactPerson: 'Roberto G.',
    contactPhone: '+39 328 5544332',
    requiredCapacity: 2,
    color: '#D97706',
    scheduleSlots: [{ day: 'saturday', startTime: '09:30', endTime: '12:30', notes: 'Smistamento' }]
  },
  {
    id: 's_aiuto_reparto',
    name: 'Servizio Associativo: Branco/Reparto',
    organization: 'Gruppo Scout FSE / AGESCI',
    category: 'parish',
    description: 'Affiancamento ai Capi Reparto e Lupetti durante le attività del sabato.',
    location: 'Sede Scout di Gruppo',
    contactPerson: 'Capo Gruppo / Akela',
    contactPhone: '+39 349 7766554',
    requiredCapacity: 2,
    color: '#16A34A',
    scheduleSlots: [{ day: 'saturday', startTime: '15:00', endTime: '18:30', notes: 'Riunione ragazzi' }]
  }
];
