let prevNumber="";
let crntNumber="";
let operator="";

const disply=document.querySelector(".display");

const previousDisplayNumber=document.querySelector(".previousNumber");
const currentDisplayNumber= document.querySelector(".currentNumber");


const operatorButtonList =document.querySelectorAll(".operator");

const equalsButton =document.querySelector(".equals");

const clearButton=document.querySelector(".clear");

const numberButtonsList=document.querySelectorAll(".number")

numberButtonsList.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        handleNumber(btn.textContent);
    })  
});

function handleNumber(number){
    if(prevNumber!=="" && crntNumber!==""&& operator===""){
        prevNumber="";
        currentDisplayNumber.textContent=crntNumber;
    }

   if(crntNumber.length<=11){
       crntNumber += number;
       currentDisplayNumber.textContent=crntNumber;
    }
}