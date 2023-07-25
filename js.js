function display(value){
    document.getElementById('result').value+=value
}
function Clear(){
    document.getElementById("result").value="";
}
function cal(value){
var x=document.getElementById("result").value
var z=eval(x)
document.getElementById("result").value=z
}
