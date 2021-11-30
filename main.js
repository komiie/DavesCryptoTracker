//widget från CoinMC rullande lista
/* <script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/coinMarquee.js%22%3E</script>
<div id="coinmarketcap-widget-marquee" coins="1,1027,2010,6636,3513,5994,5426,52,3783,5805,1082,3220,4172,7080,3890,2496" currency="SEK" theme="light" transparent="false" show-symbol-logo="true"></div> */
//Coinranking:
//API key: coinranking275216714701ea4bafba4bceeaef0aa5a544540c0cd9ae5d  
//CoinMC:
//2199e89c-42b9-4a0e-a5d6-9cc8ef079721

//Coingecko seems to work eller? JSON format
//add these: symbol, name, image, current price, market cap, total_supply, 
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false

// static eller inte...
// return <table> innerHTML =  onclick = loop ?!v `

//             <tr> 
//                 <td>{data.market_cap_rank}</td>
//                 <td>{data.image}</td>
//                 <td>{data.name}</td>
//                 <td>"$"+{data.market_cap}</td>
//                 <td>{data.current_price}</td>
//     
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
const response = await fetch(apiLink) //använde objektet ist för en hel URLstring
const getData =  await response.json()
    dropdownList(getData);        
    }
   
//2. Table function generator


//3. Dropdown-list items generator function
async function dropdownList(getData) {
const select = document.getElementById('cryptodropdown');
const cryptoNames = getData.map(data  => {
const option = document.createElement('option');
option.text = data.name;

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

