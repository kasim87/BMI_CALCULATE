const urlParams = new URLSearchParams(window.Location.search);

const resultText = urlParams.get('resultText');
const bmi = urlParams.get('bmi');
const intText = urlParams.get('intText');

document.getElementById('resultText').innerHTML = resultText;
document.getElementById('bmi').innerHTML = bmi;
document.getElementById('intText').innerHTML = intText;