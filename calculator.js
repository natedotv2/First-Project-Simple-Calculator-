 // write a function to display values
function display(val){
    document.getElementById('result').value += val

    return val
}

//write a function to perform arithmetic operations
function solve (){
    let x = document.getElementById('result').value
    let y = eval(x);
    document.getElementById('result').value = y
    return y
}

function clearScreen() {
    document.getElementById('result').value = ''
}

function sqrt() {
    let x = document.getElementById('result').value
    let y = Math.sqrt('result');
    document.getElementById('result').value = y
    return y
}

function mathcos() {
    document.getElementById("result").value
    let y = Math.cos(0 * result / 180);
    document.getElementById('result').value = y
    return y
}

function mathsin() {
    let x = document.getElementById('result').value
    let y = x * Math.PI / 180;
    screen.value = Math.sin(x);
    document.getElementById('result').value = y
    return y
}

function mathlog() {
    document.getElementById("result").innerHTML = Math.log(1);
}
