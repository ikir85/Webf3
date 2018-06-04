
var InputPseudo = document.getElementById('pseudo');
var InputAge= document.getElementById('age')
var Titre = document.getElementById('Bienvenue');
var Agelegale=18;


function Comparevalue(){
    var MsgError = document.getElementsByClassName('pseudoError')[0];
    MsgError.style.display = "none";
    document.getElementById("submit").disabled = false;
    
    for( let i = 0; i < membres.length; i++){
        console.log(InputPseudo.value);
        console.log(membres[i].pseudo);
        console.log(MsgError);
        if ( InputPseudo.value == membres[i].pseudo){
            MsgError.style.display = "block";
            document.getElementById("submit").disabled = true;
            Titre.textContent =  "";
            break;
        }
        else{
            Titre.textContent =  "Bienvenue : Bonjour " + InputPseudo.value;
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

}

InputPseudo.addEventListener('change', Comparevalue);
InputAge.addEventListener('change', CompareAge);



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