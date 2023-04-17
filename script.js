function displayNumber(num){
    // let resultBox=document.querySelector('#id_result')
    // resultBox.value+=num
    id_result.value+=num
}  

function clearBox(){
    id_result.value=""
}

function evaluateExpression(){
    let currentExpression=id_result.value
    let out=eval(currentExpression)
    id_result.value=out
}

function backSpace(){
    let currenValue=id_result.value
    let out=currenValue.slice(0,-1)
    id_result.value=out

}
