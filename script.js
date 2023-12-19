//1 Display number in text box
function displayNumber(num){
    //result.value=num //result.value=7
    result.value+=num  //result.value=777
    //result.value=result.vlue+7
}

//2 clear text box
function clearText(){
    result.value=''
}

//3 evaluate expression
function evaluateExpression(){
    result.value=eval(result.value)
    //result.value=7*8
    //7*8=eval(7*8)=56
}

//remove last item from the textbox

function removeLastItem(){
    result.value=result.value.slice(0,-1)
}