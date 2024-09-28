import { IPartecipante, ICorso, IAzienda } from "./Interface";

export class Partecipante implements IPartecipante {
    nome: string;
    cognome: string;
    paeseDiOrigine: string;
    livelloIstruzione: string;
    competenzeLinguistiche: string[];
    ambitoFormazione: string;

    constructor(nome: string, cognome: string, paeseDiOrigine: string, livelloIstruzione: string, competenzeLinguistiche: string[], ambitoFormazione: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.paeseDiOrigine = paeseDiOrigine;
        this.livelloIstruzione = livelloIstruzione;
        this.competenzeLinguistiche = competenzeLinguistiche;
        this.ambitoFormazione = ambitoFormazione;
    }

    iscrivitiCorso(corso: ICorso): void {
        corso.aggiungiPartecipante(this);
        console.log(`${this.nome} ${this.cognome} si è iscritto al corso ${corso.titolo}.`);
    }
}

export class Corso implements ICorso {
    titolo: string;
    descrizione: string;
    settoreProfessionale: string;
    durata: number;
    iscritti: IPartecipante[];

    constructor(titolo: string, descrizione: string, settoreProfessionale: string, durata: number) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.settoreProfessionale = settoreProfessionale;
        this.durata = durata;
        this.iscritti = [];
    }

    aggiungiPartecipante(partecipante: IPartecipante): void {
        this.iscritti.push(partecipante);
        console.log(`Partecipante ${partecipante.nome} ${partecipante.cognome} aggiunto al corso ${this.titolo}.`);
    }
}

export class Azienda implements IAzienda {
    nome: string;
    settoreAttivita: string;
    descrizione: string;
    posizioniAperte: string[];

    constructor(nome: string, settoreAttivita: string, descrizione: string) {
        this.nome = nome;
        this.settoreAttivita = settoreAttivita;
        this.descrizione = descrizione;
        this.posizioniAperte = [];
    }

    offriPosizione(partecipante: IPartecipante, posizione: string): void {
        console.log(`${this.nome} ha offerto la posizione di ${posizione} a ${partecipante.nome} ${partecipante.cognome}.`);
    }
}