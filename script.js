// let c = 5 * (5-1) * (5-2) * (5-3) * (5-4);

// console.log(c);

const num = document.querySelector('#num');
const btnResult = document.querySelector('#btnResult');
const btnRemove = document.querySelector('#btnRemove');
const resultTxt0 = document.querySelector('#resultTxt0');
const resultTxt1 = document.querySelector('#resultTxt1');
const resultTxt2 = document.querySelector('#resultTxt2');
const resultTxt3 = document.querySelector('#resultTxt3');

function calc(){

    let result = num.value;
    let getFirstNum = result - 1;

    let getRes = result * getFirstNum;

    for(var i = getFirstNum; i > 1; i--){

        resultTxt0.innerHTML = `N! = ${num.value}`;
        resultTxt1.innerHTML += `x ${getFirstNum} `;
        result *= i;
        
        let getI = i - 1;
        console.log(getI + 'x' + result + ' : ' + getI * result);
        console.log(`O resultado de: ${i+1} x ${getFirstNum} : ${result}`);

        getFirstNum--;
        resultTxt3.innerHTML += `<br>Resultado de: ${getFirstNum} x ${result} = ${getI * result} <br>`;
        
    }
    
   let getRes2 = resultTxt2.innerHTML = `<br><br>Resultado de: ${num.value} x ${num.value - 1} = ${getRes} <br>`;
    // //-------------------------------------
    localStorage.setItem('res2', getRes2);
    let loGet = localStorage.getItem('res2');
    resultTxt2.innerHTML = loGet;
}

btnResult.addEventListener('click', () => {
    
calc();
   
});


btnRemove.addEventListener('click', () => {

    localStorage.removeItem('num');
    resultTxt0.innerHTML = '';
    resultTxt1.innerHTML = '';
    resultTxt2.innerHTML = '';
    resultTxt3.innerHTML = '';
    num.value = '';
});