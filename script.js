const bill=document.getElementById("bill");
const people=document.getElementById("people");
const customTip=document.getElementById("customTip");

const tipBtns=document.querySelectorAll(".tip-btn");

let selectedTip=15;

tipBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

tipBtns.forEach(b=>b.classList.remove("active"));

btn.classList.add("active");

selectedTip=Number(btn.dataset.tip);

customTip.value="";

calculate();

});

});


[bill,people,customTip].forEach(input=>{

input.addEventListener("input",calculate);

});


function calculate(){

clearErrors();

const billValue=parseFloat(bill.value);

const peopleValue=parseInt(people.value);

if(
!Number.isInteger(peopleValue)
|| peopleValue<1
){

peopleError.textContent=
"Enter whole number ≥1";

valid=false;

}

let tipValue=customTip.value
? parseFloat(customTip.value)
: selectedTip;


let valid=true;


if(isNaN(billValue)||billValue<=0){

billError.textContent=
"Bill must be greater than 0";

valid=false;
}


if(tipValue<0||tipValue>100){

tipError.textContent=
"Tip range:0-100";

valid=false;
}

if(
isNaN(peopleValue)
||peopleValue<1
){

peopleError.textContent=
"Minimum 1 person";

valid=false;

}


if(!valid){

update(0,0,0);

return;
}


const tipAmount=
(billValue*tipValue)/100;

const total=
billValue+tipAmount;

const per=
total/peopleValue;

update(
tipAmount,
total,
per
);

}


function update(
tip,
total,
person
){

tipAmount.textContent=
`Rs ${tip.toFixed(2)}`;

grandTotal.textContent=
`Rs ${total.toFixed(2)}`;

perPerson.textContent=
`Rs ${person.toFixed(2)}`;

}

function clearErrors(){

billError.textContent="";
tipError.textContent="";
peopleError.textContent="";

}

reset.addEventListener(
"click",
()=>{

bill.value="";
people.value="";
customTip.value="";

selectedTip=15;

tipBtns.forEach(
b=>b.classList.remove("active")
);

tipBtns[1].classList.add("active");

update(0,0,0);

clearErrors();

});