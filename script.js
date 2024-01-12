

let display = document.getElementById('display');
    let appendtoprocess = (input)=>{
        display.value+= input;
    }
    let cleardisplay = ()=>{
        display.value = "";
    }
    let calculate = ()=>{
        try{
            display.value = eval(display.value)
        }
        catch(error){
            display.value = "Error"
        }
        
    }















//guess the number
//increase and decrease the number
//get two number and display with addition
//check property 
//guess the number with only js 
//temperatur conversion
//Roll the dice 
//digital clock
//stopwatch
//calculator


