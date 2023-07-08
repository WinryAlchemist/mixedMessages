/*
In this project, we will create random oracle message each time user launch the script
*/
const messages = {
    workMessages : [
        "Le Bateleur : Ressourcez votre énergie",
        "La Papesse : La Richesse interieure est synonyme de fécondité",
        "L'Impératrice : Le dynamisme c'est le pouvoir.",
        "L'Empeureur : L'autorité demande responsabilité",
        "Le Pape : La clairvoyance est synonyme de sagesse.",
        "L'Amoureux : Vos décisions auront des conséquences.",
        "Le Chariot : Votre détermination est mère de stabilité.",
        "La Force : Volonté de force tranquille.",
        "L'Hermite : Patience dans les recherches.",
        "La Roue de Fortune : Hasard et destin.",
        "La Justice : Votre droiture remarquable révèle la vérité.",
        "Le Pendu : Attente d'intuition.",
        "La Mort : Le deuil de la fin du cycle.",
        "Tempérance : Transmission de l'harmonie.",
        "Le Diable : La vitalité de la gloire.",
        "La Maison Dieu : Changement de la remise en question.",
        "L'Etoile : Acceptation de l'espoir.",
        "La Lune : Receptivité du passé.",
        "Le Soleil : L'épanouissement de l'estime.",
        "Le Jugement : Inspiration de prise de conscience.",
        "Le Monde : L'harmonie de l'accomplissement.",
        "Le Mat : Libre d'être libre."
    ],
    loveMessages : [
        "Le Bateleur : La motivation est propice au commencement.",
        "La Papesse : La patience mêne à l'amour",
        "L'Impératrice : Créativité et intelligence",
        "L'Empeureur : La construction demande de l'action",
        "Le Pape : La sagesse demande de la vertu.",
        "L'Amoureux : Le choix du désir",
        "Le Chariot : Le succès de l'action",
        "La Force : Maitrise de la volonté.",
        "L'Hermite : La sagesse de l'introspection.",
        "La Roue de Fortune : Transformation cyclique.",
        "La Justice : La vérité est toujours la bonne voie vers l'équilibre.",
        "Le Pendu : L'attente de la gestation.",
        "La Mort : la transformation du changement.",
        "Tempérance : Le réconfort de la douceur.",
        "Le Diable : L'ardeur du plaisir.",
        "La Maison Dieu : Recontruction du changement.",
        "L'Etoile : Sérénité de l'élévation.",
        "La Lune : Inconsciente intuition.",
        "Le Soleil : La paix clarifiée.",
        "Le Jugement : Inspiration de renaissance.",
        "Le Monde : Réussite de pleinitude.",
        "Le Mat : Départ de la décision."
    ],
    healthMessages : [
        "Le Bateleur : L'enthousiasme est votre ressource.",
        "La Papesse : Un corps sain dans un esprit sain.",
        "L'Impératrice : La compréhention est source de pouvoir.",
        "L'Empeureur : La stabilité est source de construction.",
        "Le Pape : Voici son conseil : spiritualité.",
        "L'Amoureux : L'amour des conséquences",
        "Le Chariot : Détermination et abnegation",
        "La Force : Détermination du courage.",
        "L'Hermite : Recherche de l'intériorisation.",
        "La Roue de Fortune : Déplacement du destin.",
        "La Justice : Votre maitrise favorise l'ordre.",
        "Le Pendu : Prévoyance du sacrifice.",
        "La Mort : Boulversement et changement de fin de cycle.",
        "Tempérance : Transmission de la patience.",
        "Le Diable : L'instinct de la vitalité.",
        "La Maison Dieu : Régénération des remises en questions.",
        "L'Etoile : Amour de l'espoir.",
        "La Lune : Le passé du psychisme.",
        "Le Soleil : Epanouissement du succès.",
        "Le Jugement : Nouveau départ de la lucidité.",
        "Le Monde : Harmonie de l'accomplissement.",
        "Le Mat : Indépendance de la spontanéité."
    ]
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function getPart(subject) {
    return messages[subject + 'Messages'][getRandomNumber(messages[subject + 'Messages'].length)];
}

function getMessage() {
    const workPart = getPart('work');
    const lovePart = getPart('love');
    const healthPart = getPart('health');
    return '<h2>Travail</h2><p>' + workPart + '<h2>Amour</h2></p>' + '<p>' + lovePart + '</p>' + '<h2>Santé</h2><p>' + healthPart + '</p>';
}

function printMessage(){
    button.innerHTML = getMessage();
}

const button = document.getElementById('button');
button.addEventListener('click', printMessage);