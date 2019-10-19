var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');

var resultField=document.getElementById('resultField');

//alert(numField1.value);

//numField1.value="Test";
//resultField.innerText= ""

var form = document.getElementById('xIsWhatPercentageofY');

form.addEventListener("submit",function(event){

    
    if(!numField1.value || !numField2.value){
        alert("Please enter values");
    }else{
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        
        
        var result =x/y;
        var percent = result *100;
        resultField.innerText = "Answer: " + percent+" %" ;
        event.preventDefault(); // turn off the refreshing of the listener
    }
});