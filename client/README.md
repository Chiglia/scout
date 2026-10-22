# Client

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.6.

## Importazione locale degli impegni da Google Fogli

Questo strumento e solo locale: non aggiunge controlli o funzioni al sito.

1. Copia le otto colonne da Google Fogli e incollale in `members-input.tsv`.
2. Salva il file ed esegui dalla cartella `client`:

```bash
npm run import:members
```

L'ordine delle colonne deve essere: **Nome completo, Lunedi, Martedi,
Mercoledi, Giovedi, Venerdi, Sabato, Domenica**. Le colonne sono separate
da tabulazioni, come quando si copiano celle da Google Fogli. Non includere
timestamp, email o altre colonne. Puoi includere l'intestazione se le prime
due celle sono `Nome completo` (oppure `Nome`) e `Lunedi`.

Ogni riga rappresenta una persona. Ogni cella giornaliera contiene gli
orari in cui la persona e **impegnata**, ad esempio
`07:00-07:30, 07:30-08:00, 18:00-19:00`. Una cella vuota o `LIBERO`
indica nessun impegno. Conserva tutte le celle vuote, anche quelle finali:
ogni riga deve avere esattamente otto colonne.

Lo script ordina le fasce e unisce quelle sovrapposte, consecutive o
separate da esattamente 30 minuti, solo all'interno dello stesso giorno.
Richiede orari `HH:mm` validi e
inizio precedente alla fine; accetta `24:00` solo come fine giornata.
Gli impegni che attraversano la mezzanotte vanno divisi tra due giorni.
Il primo elemento del nome completo diventa `name`; il resto diventa
`surname`. Eventuali nomi propri composti vanno corretti nel JSON.
I nomi completi duplicati sono segnalati come errore.

Il risultato e un array di oggetti `ScoutMember`, con i relativi
`commitments[]`, salvato in `members-output.json`. Questo file viene
sostituito a ogni importazione riuscita: non e un aggiornamento cumulativo.
Gli ID sono progressivi: `m_01`, `m_02` per le persone e `c_01_01`,
`c_01_02` per gli impegni della prima persona. Cambiando l'ordine delle
persone cambiano anche gli ID: non usarli per mantenere collegamenti
con assegnazioni di importazioni precedenti.
Il file di ingresso viene svuotato solo dopo il salvataggio del JSON.
Se i dati non sono validi, ingresso e risultato precedente restano intatti;
se l'ingresso e vuoto, il risultato precedente non viene modificato.
In caso di errore di scrittura, l'ingresso non viene svuotato.

Non vengono modificati `public/data/sample-members.json`, i dati salvati
nel browser o i file pubblicati. Puoi verificare e utilizzare il JSON
generato separatamente. Per percorsi personalizzati:

```bash
npm run import:members -- ./altro-input.tsv ./altro-output.json
```

Per verificare il convertitore con test che usano solo file temporanei:

```bash
npm run test:import
```

### Importazione nel sito

Il pulsante esistente **Importa impegni** accetta le stesse otto colonne
del file TSV. La conversione usa lo stesso parser dello script locale.
**Elabora e importa** salva i membri nel browser e svuota il campo dopo
il successo, senza leggere o modificare i file locali.

Le persone vengono riconosciute per nome completo, ignorando maiuscole
e spazi superflui. Per le persone esistenti vengono sostituiti gli impegni,
conservando ID, note e assegnazione; gli altri membri restano invariati.
I nuovi membri ricevono ID brevi non ancora utilizzati. Se una riga
settimanale non e valida, non viene importato nulla e il testo resta disponibile.
Resta supportato il vecchio formato con una riga per singolo impegno.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
