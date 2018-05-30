var  Debutdephrase = "Aujourd'hui";
var  DateDuJour = new Date ();
var  SuiteDePhrase = ", sont presents : ";
var  NombreDeStagiare = 15;
var  FinDePhrase = " aprenants.<br>" ;

document.write ( Debutdephrase + '/'+ DateDuJour.getDate() + '/' + DateDuJour.getMonth() + '/' + DateDuJour.getFullYear() +
SuiteDePhrase + NombreDeStagiare + FinDePhrase );