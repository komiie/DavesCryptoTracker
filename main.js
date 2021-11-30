// return <table> innerHTML =  onclick = loop ?!v `

//             <tr> 
//                 <td>{data.market_cap_rank}</td>
//                 <td>{data.image}</td>
//                 <td>{data.name}</td>
//                 <td>"$"+{data.market_cap}</td>
//                 <td>{data.current_price}</td>
//             </tr> 
//         </table>`

//fetch listan för select: https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false

let apiLink = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=17&page=1&sparkline=false"
let submitBTN = document.getElementById('submitbutton');
let cryptodropdown = document.getElementById('cryptodropdown');
let cryptotable = document.querySelector('.cryptotable');
let sendBTN = document.getElementById('sendBTN');

 //1. Anrop function, fetcha datan från JSON
async function loadAPI() { 
const response = await fetch(apiLink)       //använde objektet ist för en hel URLstring
const getData =  await response.json()      //döper till getData
    dropdownList(getData);        
    }
   
//2. Table function generator



//3. Dropdown-list items generator function
async function dropdownList(getData) {                          //infon kallas getData
const select = document.getElementById('cryptodropdown');   //hämta listan/select
const cryptoNames = getData.map(data  => {              //kör map-funktion, data heter datan från API
const option = document.createElement('option');        //gör option
option.text = data.name;                                //lägger in värdet från datan, väljer name, attachar till varje option
return option;
})
cryptoNames.forEach(cryptoName => {
select.appendChild(cryptoName);
})
}

sendBTN.addEventListener('click',(e) => {
alert("Uh-oh, you just transfered all of your coins to us! Sorry mate, but I really need that lambo");

})

//4. Funktion-lista ordning
loadAPI()

dropdownList()

