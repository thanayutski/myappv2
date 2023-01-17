document.getElementById("calculator").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)+parseInt(num2);
    document.getElementById("result").innerHTML = " SUM : " +sum;
});
document.getElementById("calculator2").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum2 = parseInt(num1)-parseInt(num2);
    document.getElementById("result").innerHTML = " SUM : " +sum2;
}); 
document.getElementById("calculator3").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum3 = parseInt(num1)*parseInt(num2);
    document.getElementById("result").innerHTML = " SUM : " +sum3;
}); 
document.getElementById("calculator4").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum4 = parseInt(num1)/parseInt(num2);
    document.getElementById("result").innerHTML = " SUM : " +sum4;
}); 
function myalert1(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)+parseInt(num2);
    document.getElementById("result").innerHTML = " SUM : " +sum;
    alert("result = "+sum)
}
function myalert2(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum2 = parseInt(num1)-parseInt(num2);
    document.getElementById("result").innerHTML = " SUM : " +sum2;
    alert("result = "+sum2)
}
function myalert3(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum3 = parseInt(num1)*parseInt(num2);
    document.getElementById("result").innerHTML = " SUM : " +sum3;
    alert("result = "+sum3)
}
function myalert4(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum4 = parseInt(num1)/parseInt(num2);
    document.getElementById("result").innerHTML = " SUM : " +sum4;
    alert("result = "+sum4)
}
const img = document.createElement("img");
img.src = "img/1.jpg"
img.style.width = "200px"

document.getElementById("myDiv").appendChild(img);