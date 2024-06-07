let prevNumber="";
let crntNumber="";
let operator="";

window.addEventListener('keydown',handleKeyPress)

const previousDisplayNumber=document.querySelector(".previousNumber");
const currentDisplayNumber= document.querySelector(".currentNumber");

const decimalPoint=document.querySelector(".decimal");

decimalPoint.addEventListener('click',()=>{
    addDecimalPoint();
})

const operatorButtonList =document.querySelectorAll(".operator");

const equalsButton =document.querySelector(".equals");

equalsButton.addEventListener('click',()=>{
    if(prevNumber!==""&&crntNumber!==""&&operator!=="")
        operate();
})

const clearButton=document.querySelector(".clear");

clearButton.addEventListener(`click`,()=>{
    allClear();
})

const deleteButton=document.querySelector(".delete");

deleteButton.addEventListener('click',()=>{
    deleteNum();
})

const numberButtonsList=document.querySelectorAll(".number")

numberButtonsList.forEach((btn)=>{                  // button event handlers
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

operatorButtonList.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        handleOperator(btn.textContent);
    })
})

function handleOperator(op){
    if(prevNumber===""){
        prevNumber=crntNumber;
        operator=op;
        previousDisplayNumber.textContent=prevNumber.slice(0,19)+" "+ operator;                 //slicing to avoid number being too big, and changing size of calc
        currentDisplayNumber.textContent="0";
        crntNumber="";
    }
    if(crntNumber===""){
        operator=op;
        previousDisplayNumber.textContent=prevNumber.slice(0,19)+" "+ operator;
        currentDisplayNumber.textContent="0";
        crntNumber="";
    }
    else{
        operate();
        operator=op;
        previousDisplayNumber.textContent=prevNumber.slice(0,19)+" "+ operator;
        currentDisplayNumber.textContent="0";
    }
}

function operate(){
    prevNumber=Number(prevNumber);
    crntNumber=Number(crntNumber);
    
    if (operator === "+") {
        prevNumber += crntNumber;
    } else if (operator === "-") {
        prevNumber -= crntNumber;
    } else if (operator === "x") {
        prevNumber *= crntNumber;
    }
    else if(operator==="/"){
        if(crntNumber<=0){
            prevNumber="ERROR";
            displayOutput();
            return;
        }
            prevNumber/= crntNumber;
    }
    prevNumber=roundNumber(prevNumber);
    prevNumber=prevNumber.toString();
    operator="";
    displayOutput();
}

function roundNumber(num) {
    return Math.round(num * 10000000) / 10000000;
  }


function displayOutput(){
    if (prevNumber.length <= 11) {
        currentDisplayNumber.textContent = prevNumber;
      } else {
        currentDisplayNumber.textContent = prevNumber.slice(0, 11) + "...";
      }
      previousDisplayNumber.textContent = "";
      operator = "";
      crntNumber = "";
}

function allClear(){
    prevNumber="";
    crntNumber="";
    operator="";
    previousDisplayNumber.textContent="";
    currentDisplayNumber.textContent="0";
}

function addDecimalPoint(){
    if(!crntNumber.includes(".")){
        crntNumber+=".";
    }
}

function handleKeyPress(e){
    e.preventDefault();

    if(e.key>=0 && e.key<=9){
        handleNumber(e.key);
    }
    else if(e.key==='+' || e.key==='-' || e.key==='/'){
        handleOperator(e.key);
    }
    else if(e.key==='*'){
        handleOperator("x");
    }
    else if(e.key==="Enter"||(e.key==="=" && prevNumber!==""&& crntNumber!=="")){
        operate();
    }
    else if(e.key==="."){
        addDecimalPoint();
    }
    else if(e.key==="Backspace"){
        deleteNum();
    }
    else if(e.key==="Escape"){
        allClear();
    }
}

function deleteNum(){           
    if(crntNumber!==""){    
        crntNumber=crntNumber.slice(0,-1)
        currentDisplayNumber.textContent=crntNumber;
    }
    if(crntNumber===""){                                  // resets result to 0 after computation if bckspc pressed          
        currentDisplayNumber.textContent="0";
    }
    if (crntNumber === "" && prevNumber !== "" && operator !== "") {            // we can backspace and delete stuff from the prev number
        prevNumber = prevNumber.slice(0, -1);
        currentDisplayNumber.textContent = prevNumber;
      }
}