import { Partecipante, Corso, Azienda } from "./Class";

const partecipante1 = new Partecipante("Ahmed", "Ali", "Egitto", "Laurea", ["Arabo", "Inglese"], "Artigianato");
const partecipante2 = new Partecipante("Fatima", "Zahra", "Marocco", "Diploma", ["Francese", "Italiano"], "Cucina");

const corso1 = new Corso("Cucina Mediterranea", "Corso per imparare le basi della cucina mediterranea.", "Cucina", 6);
const corso2 = new Corso("Artigianato Tradizionale", "Corso per apprendere le tecniche dell'artigianato locale.", "Artigianato", 12);

partecipante1.iscrivitiCorso(corso2);
partecipante2.iscrivitiCorso(corso1);

const azienda1 = new Azienda("Gusto Locale", "Ristorazione", "Ristorante tipico che offre cucina tradizionale.");

azienda1.offriPosizione(partecipante2, "Apprendista Cuoco");

const azienda2 = new Azienda("Mani d'Oro", "Artigianato", "Laboratorio artigianale specializzato in prodotti fatti a mano.");

azienda2.offriPosizione(partecipante1, "Assistente Artigiano");