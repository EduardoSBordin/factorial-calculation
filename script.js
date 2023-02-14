// let c = 5 * (5-1) * (5-2) * (5-3) * (5-4);

// console.log(c);

const num = document.querySelector('#num');
const btnResult = document.querySelector('#btnResult');
const btnRemove = document.querySelector('#btnRemove');
const resultTxt1 = document.querySelector('#resultTxt1');
const resultTxt2 = document.querySelector('#resultTxt2');
const resultTxt3 = document.querySelector('#resultTxt3');

btnResult.addEventListener('click', () => {
    
    let result = num.value;
    let getFirstNum = result - 1;

    let getRes = result * getFirstNum;

    for(var i = getFirstNum; i > 1; i--){

        result *= i;
        console.log('Teste: ' + i);
        
        let getI = i - 1;
        console.log(getI + 'x' + result + ' : ' + getI * result);
        console.log(`O resultado de: ${i+1} x ${getFirstNum} : ${result}`);

        getFirstNum--;
        resultTxt1.innerHTML = `<br>Expressao: ${i}<br>`;
        resultTxt3.innerHTML += `<br> O resultado de: ${getFirstNum} x ${result} : ${getI * result} <br>`;
        
    }
    resultTxt2.innerHTML = `<br> O primeiro resultado de: ${num.value} x ${num.value - 1} : ${getRes} <br>`;
    // //-------------------------------------
    // // localStorage.setItem('num', result);
    // // resultTxt.innerHTML = localStorage.getItem('num');

   
});
resultTxt1.innerHTML = localStorage.getItem('num');

btnRemove.addEventListener('click', () => {

    localStorage.removeItem('num');
    resultTxt1.innerHTML = '0';
});