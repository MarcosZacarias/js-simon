# Boom Countdown

## Traccia

Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

### Consigli

Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:

- Da quante ore è composto un giorno?
- Da quanti minuti è composta un'ora?
- Da quanti secondi è composto un minuto?
- Da quanti millisecondi è composto un secondo?
- Quanti millisecondi mi separano da domani alle 9:30?
- Esiste un oggetto JS in grado di gestire le date?
- Esistono dei metodi per trasformare una data in millisecondi?

## Istruzioni

- Calcolo il tempo (i millisecondi da 01/01/1970 a 24/08/2023 alle 09.30 )

  - Creo un valore _Data fine countdown_

- Calcolo il tempo di adesso

  - creo un valore _tempo attuale_

- Calcolo _Data fine countdown_ - _tempo attuale_

  - Creo un valore _tempo countdown_

- Creo un intervallo

  - diminuisco il valore di _tempo countdown_ di uno per ogni secondo che passa
  - **SE** _tempo countdown_ == 0
    - Stoppo l'intervallo e non diminuisco più _tempo countdown_

- **TODO**

  - Transformare tempo di countdown in giorni, ore, minuti e secondi
