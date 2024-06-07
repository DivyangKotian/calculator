const bodyClass = "bg-blue-900 bg-gradient-to-br from-green-300 bg-opacity-95";
const bdy = document.querySelector("body");
bodyClass.split(" ").forEach((cls) => bdy.classList.add(cls));

const calcBodyClass="max-w-lg overflow-hidden rounded showdow-2xl bg-teal-800 opacity-85 bg-gradient-to-tl from-green-300 flex";
const calcBody= document.querySelector(".calc-body");
calcBodyClass.split(" ").forEach((cls)=> calcBody.classList.add(cls));

const displayClass ="flex flex-col w-3/4 h-12 justify-center items-end m-1 bg-gray-300 text-gray-900 font-semibold px-2 border border-black hover:border-gray-500 rounded";
const display = document.querySelector(".display");
displayClass.split(" ").forEach((cls) => display.classList.add(cls));

const previousNumberClass= "flex max-w-lg h-1/3 pb-5 pt-1 text-gray-600 text-xs";
const previousNumber= document.querySelector(".previousNumber");
previousNumberClass.split(" ").forEach((cls)=> previousNumber.classList.add(cls));

const currentNumberClass= "flex max-w-lg h-2/3 pb-2 text-xl";
const currentNumber= document.querySelector(".currentNumber");
currentNumberClass.split(" ").forEach((cls)=> currentNumber.classList.add(cls));

const buttons=document.querySelectorAll("button");
buttons.forEach((btn)=>{
    addClasses(btn);
});

function addClasses(button){
    btnNumberClass="hover:bg-blue-500 border-blue-500";
    btnClearClass="hover:bg-red-500 border-red-500";
    btnOperatorClass="hover:bg-orange-500 border-orange-500";
    btnDecimalClass="hover:bg-yellow-500 border-yellow-500";
    btnEqualsClass="hover:bg-green-500 border-green-500";

    if(button.classList.value==="number"){
       btnNumberClass.split(" ").forEach((cls)=> button.classList.add(cls)); 
    }
    else if(button.classList.value==="operator"){
        btnOperatorClass.split(" ").forEach((cls)=> button.classList.add(cls));
    }
    else if(button.classList.value==="equals"){
        btnEqualsClass.split(" ").forEach((cls)=> button.classList.add(cls));
    }
    else if(button.classList.value==="decimal"){
        btnDecimalClass.split(" ").forEach((cls)=> button.classList.add(cls));
    }
    else if(button.classList.value==="clear"){
        btnClearClass.split(" ").forEach((cls)=> button.classList.add(cls));
    }
    const buttonClass="number flex w-12 h-12 justify-center items-center m-1 font-bold py-2 px-2 border hover:border-transparent rounded text-white border-2 text-2xl";
  buttonClass.split(" ").forEach((cls) => button.classList.add(cls));
}