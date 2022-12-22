var voornaam = "Jan"; // wijzig dit in jouw eigen voornaam
var tussenvoegsel = "van"; // wijzig dit in jouw eigen eventuele tussenvoegsel
var achternaam = "Os"; // wijzig dit in jouw eigen achternaam
var volledigeNaam = "Maurits Ruiter"; // plak hier de 3 bovenstaande variabelen aan elkaar, met spaties
var geboortedag = "01"; // je geboortedag
var geboortemaand = "09"; // je geboortemaand
var geboortejaar = "2005"; // je geboortejaar
var huidig_jaartal = "2022"// het huidige jaar;
var leeftijd = 15; // bereken hier jouw leeftijd op basis van de eerder ingevulde geboortegegevens.
var dag_van_het_jaar = 6; // bereken hier hoeveelste dag van dit kalenderjaar het is
var straat = "Wielewaallaan"; // je straat;
var huisnummer = "39"; // je huisnummer;
var woonplaats = "Bussum"; // je woonplaats;
var woonachtig_in_utrecht = "False"; // check hier dmv een boolean of jouw woonplaats gelijk is aan "Utrecht"
var aantal_studenten_in_deze_klas = 31;
var kosten_van_frikandelbroodje = 1.76;
var totale_lunchkosten = 0; // bereken hier het totaalbedrag als iedere student 2 frikandelbroodjes zou kopen

/* toon de waardes hieronder op het scherm gescheiden door het html: '<br>' element voor een nieuwe-regel
  bijvoorbeeld:
  document.write("Voornaam: " + voornaam);
  document.write("<br>");
  document.write("Achternaam: " + achternaam);
  enzovoorts, zorg dat alle bovenstaande variabelen op het scherm komen
*/



// var volledigeNaam = (voornaam + tussenvoegsel + achternaam)
document.write(volledigeNaam);
//hieronder voeg ik twee keer een break row toe om de text onder elkaar te zetten
document.write("<br>");
document.write("<br>");
// hieronder haal ik de geboortedag -maan en -jaar op vervolgens schrijf ik het naar het html document door document.write te gebruiken. Hetzelfde gebeurt bij adres en lunchkosten
var geboortegegevens = (geboortedag +-+ geboortemaand +-+ geboortejaar)
document.write(geboortegegevens);

document.write("<br>");
document.write("<br>");
//                                                                                              hier voeg ik twee keer een break row toe om de regel te splitsen
var adres = (woonplaats +" "+ straat +" "+ huisnummer +"<br><br>"+ "Woont in Utrecht?" +" "+ woonachtig_in_utrecht)
document.write (adres);

document.write("<br>");
document.write("<br>");

var totale_lunchkosten = ("Het subtotaal frikandelbroodjes is " + aantal_studenten_in_deze_klas * kosten_van_frikandelbroodje);
document.write (totale_lunchkosten);