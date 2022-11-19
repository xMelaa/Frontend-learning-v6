let count=0;

document.getElementById("counterDown").onclick = function (){
    count -= 1;
    document.getElementById("number").innerHTML = count;
}

document.getElementById("counterReset").onclick = function (){
    count = 0;
    document.getElementById("number").innerHTML = count;
}

document.getElementById("counterUp").onclick = function (){
    count += 1;
    document.getElementById("number").innerHTML = count;
}