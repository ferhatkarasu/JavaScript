function hesapla(){

    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var num3=document.getElementById("num3").value;

    if(num1 >= num2 && num1 >= num3) {
        alert("The largest Number is "+num1)
    }
    else if (num2 >= num1 && num2 >= num3) {
        alert("The largest Number is "+num2)
    }
    else {
         alert("The largest Number is "+num3)
    }

}

var calculateButton=document.getElementById("calculate");
calculateButton.onclick=hesapla;
