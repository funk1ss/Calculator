let buttons = document.querySelectorAll("button")
let input = document.querySelector("input")
function addDigitToInput(digit){
    if (digit == "Сброс"){
        input.value = ""
        return
    }
    if (digit == "="){
        input.value = eval(input.value)
        return
    }
    if (digit == "<-"){
        input.value = input.value.slice(0, -1)
    }
    else{
        input.value = input.value + digit
    }
    
}

