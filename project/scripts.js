const textBox = document.getElementById("textBox");
const toFar = document.getElementById("toFar");
const toCel = document.getElementById("toCel");
const result = document.getElementById("result");
const resetBtn = document.getElementById("resetBtn");
let temp;

function convert(){
    if(toFar.checked){
        temp = Number(textBox.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp + " ℉";
    }
    else if(toCel.checked){
        temp = (temp-32) * (5/9);
        result.textContent = temp + " ℃";
    }
    else{
        result.textContent = "Select a unit for conversion.";
    }
}

resetBtn.onclick = function(){
    result.textContent = " ";
    textBox.value = 0;
}
