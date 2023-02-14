// let c = 5 * (5-1) * (5-2) * (5-3) * (5-4);

// console.log(c);

const num = document.querySelector('#num');
const btnResult = document.querySelector('#btnResult');
const btnRemove = document.querySelector('#btnRemove');
const resultTxt = document.querySelector('#resultTxt');

btnResult.addEventListener('click', () => {

    
    let result = num.value;
    // let getFirstNum = result - 1;
    // for(var i = getFirstNum; i >= 1; i--){
    //     result *= i;
    // }
    // console.log('2-' + result);
    //-------------------------------------
    // localStorage.setItem('num', result);
    // resultTxt.innerHTML = localStorage.getItem('num');
    // resultTxt.innerHTML = rf;

    for(let i = result; i >= 1; i--){

        let getResult = (result - 1) * result;
        
        console.log('For: ' + getResult); 

    }

    // if(result >= 1){
    //     result = (result - 1) * result;
    //     console.log('IF: ' + result); 

    // }
});
resultTxt.innerHTML = localStorage.getItem('num');

btnRemove.addEventListener('click', () => {

    localStorage.removeItem('num');
    resultTxt.innerHTML = '0';
});