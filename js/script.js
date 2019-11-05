//création des tableaux avec morceaux de phrase
var debut = [
    "Alors comme ça vous êtes acteur ?",
    "Ah oui. Les relations ça sert… Moi je connais personne…",
    "Et vous êtes ?",
    "J’ai l’annonce pour engager le nouveau projectionniste,",
    "On n'attend pas votre sœur ?",
    "Elle est morte ?!",
    "Je crois que nous avons affaire à un serial killer,",
    "À votre avis : c'est qui le plus fort, l'hippopotame ou l'éléphant ?",
    "Commissaire, commissaire, commissaire, que s'est-il passé ?",
    "Cannes, troisième jour,"
];

var milieu = [
    "non, je suis le pape et j'attends ma sœur",
    "genre heu… Bah heu… Genre des phrases choc, quoi…",
    "ça va trancher chérie,",
    "oh, juste un doigt,",
    "Odile. Moi, c'est Odile. Pluto, c'est l'ami de Mickey,",
    "pardon, du sucre ?",
    "oh merde, qu'est-ce qu'il y a, vous êtes malade en voiture ?",
    "c'est bien ça. Et vous avez fait comment pour entrer dans le cinéma ?",
    "la victime a été tuée à la saucisse et au marteau,",
    "sécurité je passe en premier,"
];

var fin = [
    "ça fait trois fois qu'il est mort ton chien.",
    "Deray, Odile Deray !",
    "mais il a beaucoup souffert !",
    "genre des phrases choc !",
    "oh ben ça, ça tombe bien alors !",
    "Madame, je n'écrirai rien sur ce film c'est une merde !",
    "c'est parce que je connais l'ouvreuse.",
    "ça fait trois fois qu'il est mort ton chien.",
    "non, je suis le pape et j'attends ma sœur.",
    "vous ne voulez pas un whisky ?"
];

var debut2 = [
    "Dis donc, t'essaierais pas de nous faire porter le chapeau, des fois ?",
    "On vous apprend quoi à l'école, mon petit chat ?",
    "Dis donc, elle est maquée à un jaloux ta nièce ?",
    "Vous avez quand même pas besoin de moi pour aligner 10 tracteurs dans un stand, non ?",
    "J'ai une santé de fer,",
    "Ça va changer vite, c'est moi qui vous le dis,",
    "C'est jamais bon de laisser dormir les créances,",
    "On ne devrait jamais quitter Montauban,",
    "J'ai connu une Polonaise qu'en prenait au p'tit déjeuner,",
    "C'est curieux chez les marins ce besoin de faire des phrases,"
];

var milieu2 = [
     "on a dû arrêter la fabrication, y a des clients qui devenaient aveugles,",
     "tiens, vous avez sorti le vitriol ?",
     "au fond maintenant, les diplomates prendraient plutôt le pas sur les hommes d'action,",
     "vous avez beau dire, y a pas seulement que d'la pomme,",
     "les cons, ça ose tout !",
     "trois morts subites en moins d'une demi-heure,",
     "si ces messieurs veulent bien me les confier,",
     "je préfère m'en tenir à Freud, c'est plus rigolo,",
     "le Mexicain l'avait achetée en viager à un procureur à la retraite,",
     "foutaise"
];

var fin2 = [
    "si ces messieurs veulent bien me les confier !",
    "your room is ready sir !",
    "nous venons déjà de frôler l'incident.",
    "faut jamais se laisser démonter.",
    "la bave du crapaud n'empêche pas la caravane de passer !",
    "touche pas au grisbi !",
    "ça doit tomber comme à Stalingrad.",
    "je suis revenu pour caner ici, et pour me faire enterrer à Pantin avec mes vioques.",
    "moi, quand on m'en fait trop, je correctionne plus : je dynamite, je disperse, je ventile !",
    "si on bricolait plus souvent, on aurait moins la tête aux bêtises."
];

//Création de l'objet Citation avec 2 méthodes (init et decrire)
var Citation = {
    init: function (phraseDebut, phraseMilieu, phraseFin) {
        this.phraseDebut = phraseDebut;
        this.phraseMilieu = phraseMilieu;
        this.phraseFin = phraseFin;
    },

    decrire: function () {
        var decrire = this.phraseDebut + " " + this.phraseMilieu + " " + this.phraseFin;
        return decrire;
    }
};

//fonction pour générer un nombre entier aléatoire
function generer_nombre(max) {
    return Math.floor((Math.random() * max) + 1);
}

//fonction pour générer la citation selon choix du film et nombre de citations voulues
function generer_citation(nombre, film) { 
    var tab = [];
    for (let i = 0; i < nombre; i++) {
        var citation = Object.create(Citation);//création d'un objet selon le prototype Citation
        if (film == 1) { //condition si choix film = 1
            citation.init(debut[generer_nombre(9)], milieu[[generer_nombre(9)]], fin[[generer_nombre(9)]]);
        } else if (film == 2) { //condition si choix film = 2
            citation.init(debut2[generer_nombre(9)], milieu2[[generer_nombre(9)]], fin2[[generer_nombre(9)]]);
        }
        tab[i] = citation; //incrémente le tableau
    }
    return tab;
};

//-------------Affichage---------------//
var form = document.querySelector("form");

//action au clic du submit
form.addEventListener("submit", function (e) {

    e.preventDefault();
    
    var choixFilm = form.elements.choixfilm.value;
    var nombreCitation = form.elements.nombrecitation.value;
    var tableauCitation = generer_citation(nombreCitation, choixFilm);//application de la fonction generer avec en paramètre les value du formulaire
    
    var description = document.getElementById("description");
    
    description.innerHTML = '';
    
    for (let i = 0; i < nombreCitation; i++) {//boucle qui parcours le tableau pour créer les éléments html
        var citation = tableauCitation[i];
        
        var span = document.createElement("span");
        var citationElt = document.createElement("div");
        
        citationElt.classList.add("citation");
        span.textContent = "Voici la citation n° " + (i + 1);
        citationElt.textContent = citation.decrire();
        
        description.appendChild(span);
        description.appendChild(citationElt);
    }
});

