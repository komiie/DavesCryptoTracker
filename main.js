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
// return <table> 

//             <tr> 
//                 <td>{data.market_cap_rank}</td>
//                 <td>{data.image}</td>
//                 <td>{data.name}</td>
//                 <td>"$"+{data.market_cap}</td>
//                 <td>{data.current_price}</td>
//                 <td>"$"+{data.ath}</td>
//                 <td>{data.total_supply}</td>
//             </tr> 
//         </table>

fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false").then(function(response){
    return response.json()
    }).then(function(data) {
        console.log(data)        
    })
