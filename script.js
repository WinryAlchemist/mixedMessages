/*
In this project, we will create random oracle message each time user launch the script
*/
const messages = {
    workMessages : [
        'Vous allez avoir une promotion',
        'Collaborez plus, vos collègues ont beaucoup de choses à vous apprendre',
        'Ralentissez, pensez à vous.'
    ],
    loveMessages : [
        "Vous vivez l'instant présent et c'est apprécié par votre entourage",
        "Recentrez vous sur vous même. A vous forcer, vous risquez de faire du mal à votre entourage",
        "Il est temps de vous mettre à l'écoute des personnes qui vous entourent. Ies ne doivent pas être les seuls·es à faire des efforts"
    ],
    healthMessages : [
        "Votre santé est comme la pierre : dure et immuable",
        "Pensez à consulter vos medecins régulièrement. Vaut mieux prévenir que guerir",
        "Oui, le dentiste c'est une fois par an"
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
    return '<p>' + workPart + '</p>' + '<p>' + lovePart + '</p>' + '<p>' + healthPart + '</p>';
}

function printMessage(){
    button.innerHTML = getMessage();
}

const button = document.getElementById('button');
button.addEventListener('click', printMessage);