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

//gettin coin prices
let coinKey = ['retail_sekee','retail_sekeb','retail_nim','retail_rob','retail_gerami']
coinKey.forEach((key) => {
  setInterval(() => {
    let coinPrice = `https://raw.githubusercontent.com/margani/pricedb/main/tgju/current/${key}/latest.json`
    axios.get(coinPrice)
    .then(function(response){
      if(coinPrice == `https://raw.githubusercontent.com/margani/pricedb/main/tgju/current/retail_sekee/latest.json`){
        global.sekeEm = response.data.p
        global.sekeEm_max = response.data.h
        global.sekeEm_min = response.data.l
        global.sekeEm_s= response.data.t
      }else if (coinPrice == `https://raw.githubusercontent.com/margani/pricedb/main/tgju/current/retail_sekeb/latest.json`){
        global.sekeB = response.data.p
        global.sekeB_max = response.data.h
        global.sekeB_min = response.data.l
        global.sekeB_s= response.data.t
      }else if(coinPrice == `https://raw.githubusercontent.com/margani/pricedb/main/tgju/current/retail_nim/latest.json`){
        global.sekeNim = response.data.p
        global.sekeNim_max = response.data.h
        global.sekeNim_min = response.data.l
        global.sekeNim_s= response.data.t
      }else if(coinPrice == `https://raw.githubusercontent.com/margani/pricedb/main/tgju/current/retail_rob/latest.json`){
        global.sekeRob = response.data.p
        global.sekeRob_max = response.data.h
        global.sekeRob_min = response.data.l
        global.sekeRob_s= response.data.t
      }else{
        global.sekeGer = response.data.p
        global.sekeGer_max = response.data.h
        global.sekeGer_min = response.data.l
        global.sekeGer_s= response.data.t
      }
    })
    .catch(error => {
      console.log("err :" + error);
    })
  }, 3*1000);
})


//getting dollar,eur,gbp prices
let allKey = ['price_dollar_rl','price_gbp','price_eur']
allKey.forEach((key) => {
  setInterval(() => {
    let dprice = `https://raw.githubusercontent.com/margani/pricedb/main/tgju/current/${key}/latest.json`
    axios.get(dprice)
    .then(function(response){
      if(dprice == `https://raw.githubusercontent.com/margani/pricedb/main/tgju/current/price_dollar_rl/latest.json`){
        global.dollar = response.data.p
        global.dollar_max = response.data.h
        global.dollar_min = response.data.l
        global.dollar_swing = response.data.d
        global.dollar_Percent = response.data.dp
        global.dollar_dt = response.data.dt
        global.dollar_s= response.data.t
      }else if (dprice == `https://raw.githubusercontent.com/margani/pricedb/main/tgju/current/price_gbp/latest.json`){
        global.gbp = response.data.p
        global.gbp_max = response.data.h
        global.gbp_min = response.data.l
        global.gbp_swing = response.data.d
        global.gbp_Percent = response.data.dp
        global.gbp_dt = response.data.dt
        global.gbp_s= response.data.t
      }else{
        global.eur = response.data.p
        global.eur_max = response.data.h
        global.eur_min = response.data.l
        global.eur_swing = response.data.d
        global.eur_Percent = response.data.dp
        global.eur_dt = response.data.dt
        global.eur_s= response.data.t
      }
    })
    .catch(error => {
      console.log("err :" + error);
    })
  }, 3*1000);
})

hr = `ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ`
// sending to telegram
setInterval(()=> {
  msg = `قیمت ارز های دیجیتال : %0D%0A%0D%0A ◽️ USDT-IRR : ${global.USDT_price}  %0D%0A%0D%0A`
  Object.entries(prices).sort().forEach(entry => {
     const [key,value] = entry;
    msg += `▪ ${key}-USDT : ${value} %0D%0A%0D%0A`
  })
  msg += `${hr}%0D%0A%0D%0A`
  msg += `قیمت سکه : %0D%0A%0D%0A🔸 قیمت ها به ریال است %0D%0A%0D%0A%0D%0A%0D%0A🌕 سکه امامی : %0D%0A%0D%0A 💵 قیمت کنونی : ${global.sekeEm}%0D%0A%0D%0A 📉 بیشترین قیمت : ${global.sekeEm_max}%0D%0A%0D%0A
 📈 کمترین قیمت : ${global.sekeEm_min}%0D%0A%0D%0A ⏰ زمان ثبت آخرین نرخ : ${global.sekeEm_s}%0D%0A%0D%0A%0D%0A%0D%0A
🌕 سکه بهار آزادی : %0D%0A%0D%0A 💵 قیمت کنونی : ${global.sekeB}%0D%0A%0D%0A 📉 بیشترین قیمت : ${global.sekeB_max}%0D%0A%0D%0A 📈 کمترین قیمت : ${global.sekeB_min}%0D%0A%0D%0A ⏰ زمان ثبت آخرین نرخ : ${global.sekeB_s}%0D%0A%0D%0A%0D%0A%0D%0A
🌕 نیم سکه بهار آزادی : %0D%0A%0D%0A 💵 قیمت کنونی : ${global.sekeNim}%0D%0A%0D%0A 📉 بیشترین قیمت : ${global.sekeNim_max}%0D%0A%0D%0A 📈 کمترین قیمت : ${global.sekeNim_min}%0D%0A%0D%0A ⏰ زمان ثبت آخرین نرخ : ${global.sekeNim_s}%0D%0A%0D%0A%0D%0A%0D%0A
🌕 ربع سکه بهار آزادی : %0D%0A%0D%0A 💵 قیمت کنونی : ${global.sekeRob}%0D%0A%0D%0A 📉 بیشترین قیمت : ${global.sekeRob_max}%0D%0A%0D%0A 📈 کمترین قیمت : ${global.sekeRob_min}%0D%0A%0D%0A ⏰ زمان ثبت آخرین نرخ : ${global.sekeRob_s}%0D%0A%0D%0A%0D%0A%0D%0A
🌕 سکه گرمی  : %0D%0A%0D%0A 💵 قیمت کنونی : ${global.sekeGer}%0D%0A%0D%0A 📉 بیشترین قیمت : ${global.sekeGer_max}%0D%0A%0D%0A 📈 کمترین قیمت : ${global.sekeGer_min}%0D%0A%0D%0A ⏰ زمان ثبت آخرین نرخ : ${global.sekeGer_s}%0D%0A%0D%0A`
  msg += `${hr}%0D%0A%0D%0A`
  msg += `قیمت دلار-یورو-پوند : %0D%0A%0D%0A🔸 قیمت ها به ریال است%0D%0A%0D%0A%0D%0A%0D%0A💵 دلار : %0D%0A%0D%0A 💵 قیمت کنونی : ${global.dollar}%0D%0A%0D%0A 📉 بیشترین قیمت : ${global.dollar_max}%0D%0A%0D%0A
 📈 کمترین قیمت : ${global.dollar_min}%0D%0A%0D%0A ⏰ زمان ثبت آخرین نرخ : ${global.dollar_s}%0D%0A%0D%0A%0D%0A%0D%0A
💵 یورو : %0D%0A%0D%0A 💵 قیمت کنونی : ${global.eur}%0D%0A%0D%0A 📉 بیشترین قیمت : ${global.eur_max}%0D%0A%0D%0A
 📈 کمترین قیمت : ${global.eur_min}%0D%0A%0D%0A ⏰ زمان ثبت آخرین نرخ : ${global.eur_s}%0D%0A%0D%0A%0D%0A%0D%0A
💵 پوند : %0D%0A%0D%0A 💵 قیمت کنونی : ${global.gbp}%0D%0A%0D%0A 📉 بیشترین قیمت : ${global.gbp_max}%0D%0A%0D%0A
 📈 کمترین قیمت : ${global.gbp_min}%0D%0A%0D%0A ⏰ زمان ثبت آخرین نرخ : ${global.gbp_s}`  
  msg += `%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A🗓 ${date}`
  let path = `https://api.telegram.org/bot${TOKEN}/sendMessage\?chat_id\=-1002136043768\&text\=${msg}`
     axios.get(path)
       .then( function(response) {
       })
       .catch(error => {
        console.log("err: " +error)
       })
},6* 1000)