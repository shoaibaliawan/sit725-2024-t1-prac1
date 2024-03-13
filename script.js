function Cities(){
    let potentialTexts=['Melbourne','Sydney','Brisbane','Bendigo'];
    let randomNumber = getRandomNumber(0, potentialTexts.length - 1);
    let textToChangeTo = potentialTexts[randomNumber];
    document.getElementById('text').innerHTML = textToChangeTo;
}

function getRandomNumber(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}