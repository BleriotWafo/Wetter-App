const joursSemaine = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];


let ajd = new Date();
let options = {weekday: 'long'};
let jourActuel = ajd.toLocaleDateString('de-DE', options);


jourActuel = jourActuel.charAt(0).toUpperCase() + jourActuel.slice(1);

let tabJoursEnOrdre = joursSemaine.slice(joursSemaine.indexOf(jourActuel)).concat(joursSemaine.slice(0, joursSemaine.indexOf(jourActuel)));


export default tabJoursEnOrdre;
