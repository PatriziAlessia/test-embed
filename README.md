# vite-styled-starter

Vite + React + Styled Components

## General Structure

Lo starter è stato creato con Create React app e successivamente adattato alla nostra struttura di base:

-   `src`
    -   `assets`
    -   `components`
    -   `containers`
    -   `hooks`
    -   `route-guards`
    -   `store`
    -   `theme`
    -   `translations`
    -   `utilities`

La configurazione di base include i seguenti pacchetti essenziali nel nostro stack:

-   React Router v6
-   React Hook form 7
-   Redux, Bootstrap only grid system
-   Axios
-   React Select
-   Styled Components
-   dayjs

Prima di spiegare dettagliatamente il contenuto delle singole cartelle, vorrei menzionare due file importanti all'interno della cartella `src`:

-   il file`i18n.js`, che contiene le configurazioni della libreria di traduzione
-   il file `routes.js` che contiene la nuova struttura per la gestione del routing

---

### Assets

In questa cartella troviamo suddivisi per sottocartelle tutti i file come immagini e video che vengono richiamati ed utilizzati all'interno delle pagine.

---

### Components

Qui troviamo tutti i componenti comuni al progetto. Per componente comune intendiamo un'unità atomica dei componenti che rappresenta un elemento dell'UI comune a molte pagine o componenti più grandi.

---

### Containers

Questa cartella contiene due componenti wrapper layout. Essi rappresentano la struttura esterna di base di ogni pagina, con componenti comuni alla navigazione.
Essi si dividono in **private** e **public**, esprimono due diversi layout che garantiscono diverse visualizzazioni in base ai permessi.

---

### Hooks

In questa cartella andremo ad inserire i custom hooks che ci troveremo a scrivere ed utilizzare durante il progetto.

---

### Http Requests

Qui come da titolo avremo divise per cartelle inerenti alle sezioni dell'applicativo, la definizione delle API call con Axios.

---

### Pages

Le pagine dell'applicativo sono raccolte qui nelle omonime cartelle. Esse conterranno un file `index.js` che sarà il main della pagina, ed altre cartelle che andranno ad identificare i macro componenti che la compongono.

Eccezione per le pagine relative al modulo di autenticazione che sono raccolte a loro volta nella cartella `authentication`.

---

### Route guards

Similmente a quanto visto nella cartella containers, qui troviamo la suddivisione in **private** e **public**. Essi sono due tipi di wrapper di navigazione, attraverso i quali gestiiamo il redirect e la permanenza dell'utente in una view.

---

### Store

Lo stato interno dell'applicazione come di consueto è gestito con redux. Nella nostra gestione di redux ottimizzata utilizziamo slice, AsyncThunk, e CreateSelector ai fini di ottimizzare il codice.
[Riferimento](https://redux.js.org/introduction/why-rtk-is-redux-today)

---

### Theme

Qui organizziamo il fulcro dello stile dell'intera applicazione. Troviamo file che racchiudono le palette, i colori, le dichiarazioni dei font i reset e nel file `index.js` dove configuriamo il nostro theme in jss e definiamo centralizzando lo stile dell'intera applicazione.
[Riferimento](https://cssinjs.org/react-jss/?v=v10.9.1-alpha.2)

---

### Translations

In questa folder sono raccolte le traduzione nei file JSON. La suddivisione è per cartella identificante la lingua. All'interno di essa, i file JSON sono divisi per pagina.
[Riferimento](https://www.i18next.com/overview/getting-started)

---

### Utilities

In questa cartella andremo ad inserire le utility functions che ci troveremo a scrivere ed utilizzare durante il progetto.
