const bank = [];
const oddBankNum = [];
const evenBankNum = [];
let randomNum = 1;

function bankForm(){
    const $form = document.createElement("form");
    $form.innerHTML = `
     <label>Add a number to the BANK:</label>
        <input id="userInput" type="number" />
        <button id="addBtn">Add Number</button>
        <button id="sort1Btn">Sort 1</button>
        <button id="sortAllBtn">Sort All</button>
        <button id="randomNumber">Add Random Number</button>
    `;

    let $userInput = $form.querySelector('#userInput');


    const $addBtn = $form.querySelector("#addBtn");
    $addBtn.addEventListener("click", (event)=>{
        event.preventDefault();
        console.log($userInput.value, "Abutton clicked!");
        pushNumToBank(Number(userInput.value));
        $userInput.value = "";

    });

    const $sort1Btn = $form.querySelector('#sort1Btn');
    $sort1Btn.addEventListener("click", (event)=>{
        event.preventDefault();
        console.log("sort1Btn button clicked!");
        sorNumber(bank[0]);

    });

    const $sortAllBtn = $form.querySelector('#sortAllBtn');
    $sortAllBtn.addEventListener("click", (event)=>{
        event.preventDefault();
        console.log("sortAllBtn button clicked!");
        sortAllNumbers(bank);

    });

    const $addRandomNum = $form.querySelector('#randomNumber');
    $addRandomNum.addEventListener("click", (event)=>{
        event.preventDefault();
        console.log("Random numbers button clicked!", bank);
        randomNum += Math.floor(Math.random() *1000);
        bank.push(randomNum);
        render();

    });

    

    return $form;
}
function pushNumToBank(input){
    bank.push(input);
    console.log(bank);
    render();

}


function bankComp(){
    const $numberBank = document.createElement("section");
    $numberBank.innerHTML = `
    <h3>Number Bank:</h3>
    <p>${bank.map(num => `<span>${num}</span>`).join(' ')}</p>
    `;
return $numberBank;
}

function oddBank(){
    const $oddBank = document.createElement("section");
    $oddBank.innerHTML = `
    <h3>Odd Number Bank:</h3>
    <p>${oddBankNum.map(num => `<span>${num}</span>`).join(' ')}</p>
    `;
    return $oddBank;
};

function evenBank(){
    const $evenBank = document.createElement("section");

    $evenBank.innerHTML = `
    <h3>Even Number Bank:</h3>
    <p>${evenBankNum.map(num => `<span>${num}</span>`).join(' ')}</p>
    `;
    return $evenBank;
};

function sorNumber(num){
    if(num % 2 ===0) {
        evenBankNum.push(num);
    } else {
        oddBankNum.push(num)
    }
    bank.shift();
    render();

}

function sortAllNumbers(numbers) {
   for(let num of numbers){
    if(num % 2 ===0) evenBankNum.push(num)
    else oddBankNum.push(num);
   }
   bank.length = 0;
   render();
}

// render 
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Odds And Events</h1>
    <main>
       <bankForm></bankForm>
        <bankComp></bankComp>
        <oddbank></oddbank>
        <evenbank></evenbank>
    </main>
  `;
  $app.querySelector("bankForm").replaceWith(bankForm());
  $app.querySelector("bankComp").replaceWith(bankComp());
  $app.querySelector("oddbank").replaceWith(oddBank());
  $app.querySelector("evenbank").replaceWith(evenBank());
  
}
render();
