let variableLet = "globale";
if(true){
  let variableLet = "locale";
  console.log("Let :" + variableLet);
}
  console.log("Let :" + variableLet);


function direBonjour(prenom){
  console.log("bonjour " + prenom);
}

 // fonction fléché

let direBonsoir = function(){
  console.log("saluuuuuuuuuut");
}
direBonsoir();
direBonjour('oliviacheri')

let direAurevoir = ()=> "au revoir";
console.log(direAurevoir());

let Addition = (nbreA,nbreB) => nbreA+nbreB;
console.log(Addition(3,8));

const prices = [1,3,8,20,30,17,38,19];
let plusgrand = prices.filter(p => p >10);

console.log(plusgrand);

const user = {
  prenom: "olivia",
  age: 19,
  presentation: function() {
    return `bonjour, je m'appelle ${this.prenom} et j'ai ${this.age} ans.`;
  }
};

console.log(user.presentation());

// les objets

/*let utilisateur = {
  nom : "oli",
  prenom : "edina",
  adresse : {
    rue : "etoiles ",
    pays : "togo",
    eta : "confo"
}
}
console.log(utilisateur['nom']);

let article = {
  articleA : {
    titre : "mon article ",
    descript : "voici l'article de l'année"
  },
  articleB :{
    titre : "mon article B",
    descript : "voici l'article de l'année"
  }
}
console.log(article['articleA']['titre']);*/


class utilisateur {
  constructor (prenom,nom){
   this.prenom = prenom;
   this.nom = nom;
 }
 
 sePresenter(){
   console.log(`je m'appelle ${this.prenom} ${this.nom}.`);
 }
}

let elon = new utilisateur ('elon','musk');
let archie = new utilisateur ('marie','madelaine');

elon.sePresenter();
archie.sePresenter();




//affectation par décomposition

const nombres = ["un", "deux", "trois", "quatre"];

// const [nbreA,nbreB,nbreC] = nombres;
// console.log(nbreB);

// le rest parameter

const [nbreA, nbreB, ...nbreC] = nombres;
console.log(nbreC);

// challenge

const nbres = ["un", "deux", "trois"];

// const [...nbreH] = nbres;
// console.log(nbreH);

const nbreAmeliores = [...nbres, "quatre", "cinq"];

console.log(nbreAmeliores);


// les types primitifs
 
/*  type primitif 
null
undefined
boolean

type par référence
array
object
function*/



let monObjet = {
  voiture : 'tesla'
  
};
 console.log(monObjet.voiture); // creer un pointeur
let monAutreObjet = monObjet;
console.log(monAutreObjet.voiture);




