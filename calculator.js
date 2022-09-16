let x = document.getElementById('result').value 

// write a function to display values
function display(val){
    document.getElementById('result').value += val

    return val
}

//write a function to perform arithmetic operations
function solve (){
    let y = eval(x);
    document.getElementById('result').value = y
    return y
}

function clearScreen() {
    document.getElementById('result').value = ''
}

function sqrt() {
    let y = Math.sqrt(x);
    document.getElementById('result').value = y
    return y
}

function mathcos() {
    let y = Math.cos(x);
    document.getElementById('result').value = y
    return y
}

function mathsin() {
    let y = Math.sin(x);
    document.getElementById('result').value = y
    return y
}

function Mathtan() {
    let y = Math.tan(x);
    document.getElementById('result').value = y
    return y
}

function mathlog() {
    let y = Math.log(x)
    document.getElementById("result").value = y
    return y
}
