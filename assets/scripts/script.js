'use strict';

// Récuperation des elements du DOM
const displayTab = document.getElementById('display-tab');
const inputNb = document.getElementById('input-number');
const btnAdd = document.getElementById('btn-add');
const btnClear = document.getElementById('btn-clear');
const btnDisplay = document.getElementById('btn-display');
const btnSomme = document.getElementById('btn-somme');
const btnMoy = document.getElementById('btn-moy');
const btnMin = document.getElementById('btn-min');
const btnMax = document.getElementById('btn-max');
const btnTrie1 = document.getElementById('btn-trie1');
const btnTrie2 = document.getElementById('btn-trie2');
const btnDoublon = document.getElementById('btn-doublon');
const btnLength = document.getElementById('btn-length');
const btnDoublonLength = document.getElementById('btn-doublon-length');
const containerResult = document.getElementById('display-result');

// TODO Ajouter le tableau dynamiquement
const tab = [5, 10, 2, 9, 10, -1, 7, 2, 10, 5];


// Créer une fonction pour eviter la répétition de code
// → La théorie sera vu par la suite ;)
function ajouterResultat(resultat) {

    // Création de la balise "P"
    const result = document.createElement('p');
    result.innerText = resultat;

    // L'ajout dans le DOM
    containerResult.appendChild(result);
}


btnDisplay.addEventListener('click', () => {
    // Valeurs : 5 > 10 > 2 > 9 > 10 > -1 > 7 > 2 > 10 > 5

    // Formattage "a la main"
    let tabAffichage = '';
    tabAffichage += tab[0];
    for (let i = 1; i < tab.length; i++) {
        tabAffichage += ' > ' + tab[i];
    }

    // Formattage avec les méthodes "join"
    const tabAffichage2 = tab.join(' > ');

    // Ajout dans le DOM
    ajouterResultat(`Valeurs : ${tabAffichage2}`);
});


btnSomme.addEventListener('click', () => {

    // Initialiser le total (à zero)
    let total = 0;

    for (const val of tab) {

        // Addition de chaque élément du tableau dans le total
        total += val;
    }

    // Ajout dans le DOM
    ajouterResultat(`Somme du tableau est de ${total}`);
});


btnMoy.addEventListener('click', () => {

    // Calcul de la moyenne 
    let moyenne = 0;

    // - Addition de tout les valeurs
    for (const val of tab) {
        moyenne += val;
    }

    // - Division par le nombre d'element
    moyenne = moyenne / tab.length;

    // Ajout dans le DOM
    ajouterResultat(`Moyenne du tableau est de ${moyenne}`);
});


btnMin.addEventListener('click', () => {

    // Initialisation d'une valeur minimum initial
    let resultat = tab[0];

    for (let i = 1; i < tab.length; i++) {

        // Test si la valeur du tableau est plus petite
        if (resultat > tab[i]) {

            // Si c'est le cas -> Il remplace la variable "result"
            resultat = tab[i];
        }
    }

    ajouterResultat(`La valeur la plus petite est ${resultat}`);
});


btnMax.addEventListener('click', () => {

    // Initialisation d'une valeur minimum initial
    let resultat = tab[0];

    for (let i = 1; i < tab.length; i++) {

        // Test si la valeur du tableau est plus grande
        if (resultat < tab[i]) {

            // Si c'est le cas -> Il remplace la variable "result"
            resultat = tab[i];
        }
    }

    ajouterResultat(`La valeur la plus grande est ${resultat}`);
});


btnTrie1.addEventListener('click', () => {

    // Copie du tableau
    const tabBulle = [...tab];
    console.log('Bulle Initial', tabBulle);

    for (let k = 0; k < tabBulle.length - 1; k++) {

        console.log(`Passage ${k}`, tabBulle);

        for (let i = 0; i < (tabBulle.length - 1 - k); i++) {

            if (tabBulle[i] > tabBulle[i + 1]) {
                // Inversion des 2 cases du tableau
                const temp = tabBulle[i];
                tabBulle[i] = tabBulle[i + 1];
                tabBulle[i + 1] = temp;
            }

            console.log('Etape', tabBulle);
        }
    }

    console.log('Final', tabBulle);

    ajouterResultat('Trie à bulle : ' + tabBulle.join(' > '));
});

btnDoublon.addEventListener('click', () => {

    // Création d'un tableau sans doublon
    const tabNoDoublon = [];

    for (const val of tab) {

        // Test si la valeur n'est pas dans le tableau 'no-doublon'
        if (!tabNoDoublon.includes(val)) {

            // si c'est le cas, on ajout la valeur
            tabNoDoublon.push(val);
        }
    }

    ajouterResultat('Tableau sans doublon : ' + tabNoDoublon.join(' > '));
});

btnLength.addEventListener('click', () => {

    ajouterResultat('Le nombre d\'élément est de ' + tab.length);
});

btnDoublonLength.addEventListener('click', () => {

    // Création d'un tableau sans doublon

    // - Utiliser une collection de type "Set" pour exclure les doublons
    const set = new Set(tab);

    // - Convertir le "Set" en tableau
    const tabNoDoublon = [...set];

    ajouterResultat('Le nombre d\'élément (hors doublon) est de ' + tabNoDoublon.length);
});