
function l(e) {
    console.log(e);
}
function w(e) {
    document.write(e);
}

var InputPseudo = document.getElementById('pseudo');
var InputAge= document.getElementById('age');
var InputEmail= document.getElementById('email');
var InputMdp = document.getElementById('mdp');
var Titre = document.getElementById('Bienvenue');
var Agelegale=18;


var pseudoValid = false;
var AgeValid = false;
var EmailValid= false;


function Comparevalue(){
    var MsgError = document.getElementsByClassName('pseudoError')[0];
    MsgError.style.display = "none";
    document.getElementById("submit").disabled = false;
    
    for( let i = 0; i < membres.length; i++){
        console.log(InputPseudo.value);
        if ( InputPseudo.value == membres[i].pseudo){
            MsgError.style.display = "block";
            document.getElementById("submit").disabled = true;
            Titre.textContent =  "";
            break;
        }
        else{
            Titre.textContent =  "Bienvenue : Bonjour " + InputPseudo.value;
            pseudoValid = true;
        }
           
    }
}


function CompareAge(){
    var MsgErrorAge = document.getElementsByClassName('ageError')[0];
    MsgErrorAge.style.display = "none";
    document.getElementById("submit").disabled = false;

    if(InputAge.value < Agelegale || (isNaN(InputAge.value))  ){
        console.log(12);
        MsgErrorAge.style.display = "block";
        document.getElementById("submit").disabled = true;
    }
    else{
        AgeValid = true;
    }

}

InputPseudo.addEventListener('change', Comparevalue);
InputAge.addEventListener('change', CompareAge);


function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
    console.log(re.test(email));
    console.log(12);
}

function ValiderEmail(){
    var MsgErrorEmail = document.getElementsByClassName('EmailError')[0];
    document.getElementById("submit").disabled = false;
    MsgErrorEmail.style.display = "none";

    if (!validateEmail(InputEmail.value)){
        document.getElementById("submit").disabled = true;
        MsgErrorEmail.style.display = "block";
        InputEmail.value ="";
    }
    else{
        EmailValid= true;
    }
}

InputEmail.addEventListener('change', ValiderEmail);

function handle_form_submission()
{  
  var newUser = {};  
  var welcomeUser = document.createElement('p');
  var br = document.createElement('br');
  var listeTitle = document.createElement('p');  
  var ulMembres = document.createElement('ul');
  

  if( pseudoValid && AgeValid && EmailValid ){  

  newUser["pseudo"] = InputPseudo.value;
  newUser["age"] = InputAge.value;
  newUser["email"] = InputEmail.value;
  newUser["mdp"] = InputMdp.value;
  membres.push(newUser);
  console.log(membres);

  welcomeUser.textContent = "Merci " + InputPseudo.value + "! Tu es maintenant inscrit.";
  document.body.appendChild(welcomeUser);
  //document.body.appendChild(br);
  listeTitle.textContent = "Voici la liste de nos Membres :";
  document.body.appendChild(listeTitle);
  document.body.appendChild(ulMembres);

  for( let i = 0; i < membres.length; i++){
   var liMembres = document.createElement('li');
   liMembres.textContent = membres[i].pseudo + " : " + membres[i].age + "ans";   
   ulMembres.appendChild(liMembres);
   }

  InputEmail.value ="";
  InputAge.value ="";
  InputPseudo.value ="";
  InputMdp.value="";
  InputMdp.value = InputMdp.getAttribute("value");
 

  document.getElementById("pseudo").disabled = true;
  document.getElementById("age").disabled = true;
  document.getElementById("email").disabled = true;
  document.getElementById("mdp").disabled = true;
  document.getElementById("submit").disabled = true;

  //pseudoValid=false;
  return false; //do not submit the form
  }
  else{
    return false;
  }
}








/** 
 * 
 * 
 *    for(i = 0; i < membre.lenght; i++){
       if ( inputValue.localeCompare(membre[i]) = 0){
        alert('user exist');
       }
       else{
        alert('Okurrrr');
       }
   }
 */