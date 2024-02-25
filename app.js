const axios = require('axios');
require('dotenv').config()
let TOKEN = process.env.BOT_TOKEN


//date
const moment = require('jalali-moment');
const date = moment().locale('fa').format('YYYY/M/D hh:mm');


//get crypto prices
const coins = ["BTC","ETH","XRP","TRX","LTC","SOL","TON","SHIB","USDC"]
const prices = []
coins.forEach((coin)=>{
  setInterval(()=>{
    let kucoinApi = `https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=${coin}-USDT`
    axios.get(kucoinApi)
    .then(function(response){
      prices[coin] = response.data.data.price
    })
    .catch(error => {
      console.log("err : " +error);
    }) 
  },2500)
})


//get tether price
setInterval(() =>{
      let nobitex='https://api.nobitex.ir/v2/orderbook/USDTIRT'
        axios.get(nobitex)
        .then( function(response) {
          global.USDT_price = response.data.lastTradePrice
         })
        .catch(error => {
        console.log("err: " +error)
        })
} , 2500)

hr = `ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ`
//crypto sending to telegram
setInterval(()=> {
  msg = `قیمت ارز های دیجیتال : %0D%0A%0D%0A %0D%0A%0D%0A ◽️ USDT-IRT : ${global.USDT_price} %0D%0A%0D%0A %0D%0A%0D%0A`
  Object.entries(prices).sort().forEach(entry => {
     const [key,value] = entry;
    msg += `▪ ${key}-USDT : ${value} %0D%0A%0D%0A`
  })
  msg += ` %0D%0A%0D%0A 🗓 ${date}`
  let path = `https://api.telegram.org/bot${TOKEN}/sendMessage\?chat_id\=-1002136043768\&text\=${msg}`
     axios.get(path)
       .then( function(response) {
       })
       .catch(error => {
        console.log("err: " +error)
       })
},6* 1000)