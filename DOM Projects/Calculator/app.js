const form = document.querySelector('.calculate-form');
const num7 = document.getElementById('operand7'),
      num8 = document.getElementById('operand8'),
      num9 = document.getElementById('operand9'),
      num6 = document.getElementById('operand6'), 
      num5 = document.getElementById('operand5'),
      num4 = document.getElementById('operand4'),
      num3 = document.getElementById('operand3'),
      num2 = document.getElementById('operand2'),
      num1 = document.getElementById('operand1'),
      num0 = document.getElementById('operand0'),
      add = document.getElementById('operatorP'),
      sub = document.getElementById('operatorS'),
      mul = document.getElementById('operatorM'),
      div = document.getElementById('operatorD'),
      dot = document.getElementById('dot'),
      equal = document.getElementById('equal')
      cl = document.getElementById('operatorC');
var exp ;
var op ;
var val ="" ; 
loadAllEventListener();

function loadAllEventListener(){
    num7.addEventListener('click', function(){
        document.getElementById('result').value+=num7.value;
        if(exp === undefined){
            exp = num7.value;
        } else{
            exp+= num7.value;
        }
    })
    num8.addEventListener('click', function(){
        document.getElementById('result').value+=num8.value;
        if(exp === undefined){
            exp = num8.value;
        } else{
            exp+= num8.value;
        }
    })
    num9.addEventListener('click', function(){
        document.getElementById('result').value+=num9.value;
        if(exp === undefined){
            exp = num9.value;
        } else{
            exp+= num9.value;
        }
    })
    num6.addEventListener('click', function(){
        document.getElementById('result').value+=num6.value;
        if(exp === undefined){
            exp = num6.value;
        } else{
            exp+= num6.value;
        }
    })
    num5.addEventListener('click', function(){
        document.getElementById('result').value+=num5.value;
        if(exp === undefined){
            exp = num5.value;
        } else{
            exp+= num5.value;
        }
    })
    num4.addEventListener('click', function(){
        document.getElementById('result').value+=num4.value;
        if(exp === undefined){
            exp = num4.value;
        } else{
            exp+= num4.value;
        }
    })
    num3.addEventListener('click', function(){
        document.getElementById('result').value+=num3.value;
        if(exp === undefined){
            exp = num3.value;
        } else{
            exp+= num3.value;
        }
    })
    num2.addEventListener('click', function(){
        document.getElementById('result').value+=num2.value;
        if(exp === undefined){
            exp = num2.value;
        } else{
            exp+= num2.value;
        }
    })
    num1.addEventListener('click', function(){
        document.getElementById('result').value+=num1.value;
        if(exp === undefined){
            exp = num1.value;
        } else{
            exp+= num1.value;
        }
    })
    num0.addEventListener('click', function(){
        document.getElementById('result').value+=num0.value;
        if(exp === undefined){
            exp = num0.value;
        } else{
            exp+= num0.value;
        }
    })
    
    add.addEventListener('click', function(){
        document.getElementById('result').value+=add.value;
        // if(exp === undefined){
        //     op = '+' ;
        //     unOperator(op);
        // } else{
            exp+=add.value;
            // biOperator();
        // }
    })
    sub.addEventListener('click', function(){
        document.getElementById('result').value+=sub.value;
        exp+=sub.value;
    })
    mul.addEventListener('click', function(){
        document.getElementById('result').value+=mul.value;
        exp+=mul.value;
    })
    div.addEventListener('click', function(){
        document.getElementById('result').value+=div.value;
        exp+=div.value;
    })
    dot.addEventListener('click', function(){
        document.getElementById('result').value+=dot.value;
        exp+=dot.value;
    })
    cl.addEventListener('click', function(){
        document.getElementById('result').value= val;
        exp= undefined;
    })
    
    equal.addEventListener('click' , function(){
        if(exp === undefined ){
            document.getElementById('result').value+=val;
            console.log("no expression");
        } else{
            solve(exp);
        }
    })
}

function unOperator(){
    
}

function biOperator(op){

}

function solve(){
    console.log(exp);
    r = eval(exp);
    // if(isNaN(r)){
    //     document.getElementById('result').value = exp;
    // }else{
        document.getElementById('result').value = r;
        console.log(r);
    // }
}