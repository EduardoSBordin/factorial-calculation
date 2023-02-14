// let c = 5 * (5-1) * (5-2) * (5-3) * (5-4);

// console.log(c);

const num = document.querySelector('#num');
const btnResult = document.querySelector('#btnResult');
const resultTxt = document.querySelector('#resultTxt');


function factorialCalculation(){
    
}
btnResult.addEventListener('click', () => {
    
    let factorial = num.value;
    // let result = factorial;
    let getFirstNum = factorial - 1;
    for(var i = getFirstNum; i > 1; i--){
     factorial *= i;
    }
    console.log(factorial);
    resultTxt.innerHTML = factorial;
});
