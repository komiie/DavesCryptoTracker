//

//fetch listan för select: https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false

let apiLink =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=40&page=1&sparkline=false";
let submitBTN = document.getElementById("submitbutton");
let cryptodropdown = document.getElementById("cryptodropdown");
let cryptodropdownNew = document.getElementById("cryptodropdown2");
let cryptotable = document.getElementById("cryptotable");
let sendBTN = document.getElementById("sendBTN");

//1. Anrop function, fetcha datan från JSON

async function loadAPI() {
  const response = await fetch(apiLink); //använde objektet ist för en hel URLstring
  const getData = await response.json(); //döper till getData
  dropdownList(getData);
  console.log(getData);
}

//2.- Table function generator, använder funktionen/eller data för att hämta datan som genereras i dropdownList
submitBTN.addEventListener("click", async function () {
  const response = await fetch(apiLink); //använde objektet ist för en hel URLstring
  const coinInfo = await response.json();
  let name = coinInfo[7].name;
  console.log(name);

  // data.symbol
  // data.name
  // data.current_price
  // data.market_cap

  cryptotable.style.display = "block";
  cryptotable.innerHTML = `
        <h1>${name}!</h1>.
        
    `;
});

//3. Dropdown-list items generator function
async function dropdownList(getData) {
  //infon kallas getData
  const select = document.getElementById("cryptodropdown"); //hämta listan/select
  const cryptoNames = getData.map((data) => {
    //kör map-funktion, data heter datan från API
    const option = document.createElement("option"); //gör option
    option.text = data.name; //lägger in värdet från datan, väljer name, attachar till varje option
    return option;
  });
  cryptoNames.forEach((cryptoName) => {
    select.appendChild(cryptoName);
  });
}

//4. Dropdown-list items generator function - funkade förut
// async function dropdownList2(getData) {                          //infon kallas getData
//     const select = document.getElementById('cryptodropdownNew');   //hämta listan/select
//     const cryptoNames = getData.map(data  => {              //kör map-funktion, data heter datan från API
//     const option = document.createElement('option');        //gör option
//     option.text = data.market_cap;                                //lägger in värdet från datan, väljer name, attachar till varje option
//     return option;

//     })
//     cryptoNames.forEach(cryptoName => {
//     select.appendChild(cryptoName);

//     })

//     }

sendBTN.addEventListener("click", (e) => {
  alert(
    "Uh-oh, you just transfered all of your coins to us! Sorry mate, but I really need that lambo"
  );
});

//5. Funktion-lista ordning
loadAPI();
// data funk
dropdownList();
// dropdownList2()
