const button = document.querySelector('#btn');
const text = document.querySelector('#advice');
const id = document.querySelector('#adviceID');

let url = 'https://api.adviceslip.com/advice';

button.addEventListener('click', () => {
    getNewAdvice();
    // window.location.reload();
}); 
window.onload = () => {
    getNewAdvice();
    // window.location.reload();
};
function getNewAdvice() {
    fetch(url).then(response => {
        return response.json();
    }).then(adviceData => {
        const adviceObj = adviceData.slip;
        text.innerHTML = `<p id="adviceTxt">"${adviceObj.advice}"</p>`;
        id.innerHTML = `<p id="adviceID">ADVICE #${adviceObj.id}</p>`;
        console.log(adviceObj);
    }).catch(error => {
        console.log(error);
    });
}
