  const result_of_calculation = document.getElementById('result_of_calculation');
    result_of_calculation.innerHTML = 0;


document.getElementById("clear_button").addEventListener('click', function(){
 
    const result_of_calculation = document.getElementById('result_of_calculation');
       result_of_calculation.innerHTML = '';

})



function backspace_button_of_js(){

    result_of_calculation.innerHTML = (result_of_calculation.innerHTML.slice(0,-1)); 
    
}



document.getElementById('+').addEventListener('click',function(){
    result_of_calculation.innerHTML +=   '+';
    

    })
document.getElementById('-').addEventListener('click',function(){
    result_of_calculation.innerHTML += '-';

    
    })
document.getElementById('x').addEventListener('click',function(){
    result_of_calculation.innerHTML += '*';


    
    })
document.getElementById('/').addEventListener('click',function(){
    result_of_calculation.innerHTML += '/';


    
    })
document.getElementById('1').addEventListener('click',function(){
    result_of_calculation.innerHTML += 1;

    
    })
document.getElementById('2').addEventListener('click',function(){
    result_of_calculation.innerHTML += 2;


    
    })
document.getElementById('3').addEventListener('click',function(){
    result_of_calculation.innerHTML += 3;

    })
document.getElementById('4').addEventListener('click',function(){
    result_of_calculation.innerHTML += 4;


    })
document.getElementById('5').addEventListener('click',function(){
    result_of_calculation.innerHTML += 5;

    
    })
document.getElementById('6').addEventListener('click',function(){
    result_of_calculation.innerHTML += 6;


 })
 document.getElementById('7').addEventListener('click',function(){
    result_of_calculation.innerHTML += 7;

    })
document.getElementById('8').addEventListener('click',function(){
    result_of_calculation.innerHTML += 8;

    
    })
document.getElementById('9').addEventListener('click',function(){
    result_of_calculation.innerHTML += 9;

    
    })
document.getElementById('0').addEventListener('click',function(){
    result_of_calculation.innerHTML += 0;


 })
 document.getElementById('.').addEventListener('click',function(){
    result_of_calculation.innerHTML += '.';
  
    
    
    })
document.getElementById('=').addEventListener('click',function(){

    result_of_calculation.innerHTML = eval(result_of_calculation.innerHTML);
    console.log(eval(result_of_calculation.innerHTML));
   

 })


function submit_button_of_js(){
    result_of_calculation.innerHTML = eval(result_of_calculation.innerHTML);
    console.log(eval(result_of_calculation.innerHTML));
}


