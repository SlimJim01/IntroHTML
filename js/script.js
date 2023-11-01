//Corriger les réponses fournies

const corriger = function () {
  var texte = window.location.search;
  //Obtenir les réponses fournies dans la barre URL de la page Web
  //La méthode window.location.search nous donne les réponses inscrite dane le formulaire.
  //Voici l'info dans ma barre URL à moi: "?question1=1972-04-17&question2=Thierry&question3=David&question4=volley&question5=Yukon&question5=Italie&question6=Candiac&question7=bleu&question8=Chien&question8=Serpent&question9=Honda"

  var tmp = texte.slice(1, texte.length);
  //slice permet de supprimer des caractères dans un string. Ici on veut supprimer le premier caractère ? pour obtenir :
  //"question1=1972-04-17&question2=Thierry&question3=David&question4=volley&question5=Yukon&question5=Italie&question6=Candiac&question7=bleu&question8=Chien&question8=Serpent&question9=Honda"

  infos = tmp.split("&");
  //split permet de séparer un string. Ici on sépare quand on rencontre le caractère "&" pour obtenir :
  //infos[0] = "question1=1972-04-17"
  //infos[1] = "question2=Thierry"
  //infos[2] = "question3=David"
  //...

  var reponses = infos.map((x) => x.split("=")[1]);
  // for (let i =0; i<infos.length; i++){

  //  reponses[i] = infos.split("=")[1];

  //Recueillir les réponses avec map et split
  // reponses[0] = "1972-04-17"
  // reponses[1] = "Thierry"
  // reponses[2] = "David"

  // Ici, la méthode map est une boucle qui traite chaque élément du Array infos.
  // boucle 1 : element = "question1=1972-04-17"
  // boucle 2 : element = "question2=Thierry"
  // boucle 3 : element = "question3=David"

  // La méthode split sépare chaque element x selon le caractère =
  // Nous gardons seulement l'information ayant l'index 1
  // La vidéo explique cette ligne davantage

  var retroaction = "";

  //Q1
  element = document.getElementById("pets");
  //La méthode document.getElementById obtient l'élément HTML qui porte le id spécifié.
  //Dans ce cas, nous voulons l'élement HTML qui porte le id "Q1"

  //Comparons les réponses fournis avec les bonnes réponses.
  if (reponses[0] === "Lapin") {
    retroaction = "Bien!";
    //La méthode style modifie l'attribut spécifié. Ici, nous fixons color à Green
    element.style.color = "Green";
  } else {
    retroaction = "Erreur!";
    //La méthode style modifie l'attribut spécifié. Ici, nous fixons color à Red
    element.style.color = "Red";
  }
  // La méthode innerHTML remplace le code HTML de element par le nouveau code HTML fourni.
  element.innerHTML = reponses[0] + " : " + retroaction;

  //Q2
  element = document.getElementById("season");
  if (reponses[1] === "Hiver") {
    retroaction = "Bien!";
    element.style.color = "Green";
  } else {
    retroaction = "Erreur!";
    element.style.color = "Red";
  }
  element.innerHTML = reponses[1] + " : " + retroaction;

  //Q3
  element = document.getElementById("fête");
  if (reponses[2] === "2007-10-26") {
    retroaction = "Bien!";
    element.style.color = "Green";
  } else {
    retroaction = "Erreur!";
    element.style.color = "Red";
  }
  element.innerHTML = reponses[2] + " : " + retroaction;

  //Q4
  element = document.getElementById("noël");
  if (reponses[3] === "2023-12-25") {
    retroaction = "Bien!";
    element.style.color = "Green";
  } else {
    retroaction = "Erreur!";
    element.style.color = "Red";
  }
  element.innerHTML = reponses[3] + " : " + retroaction;

  //Q5
  element = document.getElementById("fname");
  if (reponses[4] === "Alexandre") {
    retroaction = "Bien!";
    element.style.color = "Green";
  } else {
    retroaction = "Erreur!";
    element.style.color = "Red";
  }
  element.innerHTML = reponses[4] + " : " + retroaction;

  //Q6
  element = document.getElementById("f_name");
  if (reponses[5] === "Philip") {
    retroaction = "Bien!";
    element.style.color = "Green";
  } else {
    retroaction = "Erreur!";
    element.style.color = "Red";
  }
  element.innerHTML = reponses[5] + " : " + retroaction;

  //Q7
  element = document.getElementById("Quel âge a Kevin");
  if (reponses[6] === "16") {
    retroaction = "Bien!";
    element.style.color = "Green";
  } else {
    retroaction = "Erreur!";
    element.style.color = "Red";
  }
  element.innerHTML = reponses[6] + " : " + retroaction;

  //Q8
  element = document.getElementById("games");
  if (reponses[7] === "Fortnite") {
    retroaction = "Bien!";
    element.style.color = "Green";
  } else {
    retroaction = "Erreur!";
    element.style.color = "Red";
  }
  element.innerHTML = reponses[7] + " : " + retroaction;
};
