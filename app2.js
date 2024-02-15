const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config()
let TOKEN = process.env.BOT_TOKEN
app.use(express.json())

const moment = require('jalali-moment');
const date = moment().locale('fa').format('YYYY/M/D hh:mm');

setInterval(()=>{

  let kucoinApi_BTC="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=BTC-USDT"
  axios.get(kucoinApi_BTC)
    .then( function(response) {
      global.BTC_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_ETH="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=ETH-USDT"
  axios.get(kucoinApi_ETH)
    .then( function(response) {
      global.ETH_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_BNB="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=BNB-USDT"
  axios.get(kucoinApi_BNB)
    .then( function(response) {
      global.BNB_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    })

    let kucoinApi_XRP="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=XRP-USDT"
  axios.get(kucoinApi_XRP)
    .then( function(response) {
      global.XRP_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    })

    let kucoinApi_SOL="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=SOL-USDT"
  axios.get(kucoinApi_SOL)
    .then( function(response) {
      global.SOL_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_USDC="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=USDC-USDT"
  axios.get(kucoinApi_USDC)
    .then( function(response) {
      global.USDC_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_ADA="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=ADA-USDT"
  axios.get(kucoinApi_ADA)
    .then( function(response) {
      global.ADA_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    })

    let kucoinApi_DOGE="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=DOGE-USDT"
  axios.get(kucoinApi_DOGE)
    .then( function(response) {
      global.DOGE_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_TRX="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=TRX-USDT"
  axios.get(kucoinApi_TRX)
    .then( function(response) {
      global.TRX_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_TON="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=TON-USDT"
  axios.get(kucoinApi_TON)
    .then( function(response) {
      global.TON_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_LINK="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=LINK-USDT"
  axios.get(kucoinApi_LINK)
    .then( function(response) {
      global.LINK_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    })

    let kucoinApi_AVAX="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=AVAX-USDT"
  axios.get(kucoinApi_AVAX)
    .then( function(response) {
      global.AVAX_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_MATIC="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=MATIC-USDT"
  axios.get(kucoinApi_MATIC)
    .then( function(response) {
      global.MATIC_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_DOT="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=DOT-USDT"
  axios.get(kucoinApi_DOT)
    .then( function(response) {
      global.DOT_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    })

    let kucoinApi_LTC="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=LTC-USDT"
  axios.get(kucoinApi_LTC)
    .then( function(response) {
      global.LTC_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    })

    let kucoinApi_SHIB="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=SHIB-USDT"
  axios.get(kucoinApi_SHIB)
    .then( function(response) {
      global.SHIB_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_BCH="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=BCH-USDT"
  axios.get(kucoinApi_BCH)
    .then( function(response) {
      global.BCH_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_UNI="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=UNI-USDT"
  axios.get(kucoinApi_UNI)
    .then( function(response) {
      global.UNI_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    })

    let kucoinApi_ATOM="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=ATOM-USDT"
  axios.get(kucoinApi_ATOM)
    .then( function(response) {
      global.ATOM_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_XLM="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=XLM-USDT"
  axios.get(kucoinApi_XLM)
    .then( function(response) {
      global.XLM_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_XMR="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=XMR-USDT"
  axios.get(kucoinApi_XMR)
    .then( function(response) {
      global.XMR_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    })

    let kucoinApi_KAS="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=KAS-USDT"
  axios.get(kucoinApi_KAS)
    .then( function(response) {
      global.KAS_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    })

    let kucoinApi_ETC="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=ETC-USDT"
  axios.get(kucoinApi_ETC)
    .then( function(response) {
      global.ETC_price = response.data.data.price
    })
    .catch(error => { 
     console.log("err: " +error)
    }) 

    let kucoinApi_RUNE="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=RUNE-USDT"
  axios.get(kucoinApi_RUNE)
    .then( function(response) {
      global.RUNE_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_ICP="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=ICP-USDT"
  axios.get(kucoinApi_ICP)
    .then( function(response) {
      global.ICP_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_LDO="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=LDO-USDT"
  axios.get(kucoinApi_LDO)
    .then( function(response) {
      global.LDO_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_FIL="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=FIL-USDT"
  axios.get(kucoinApi_FIL)
    .then( function(response) {
      global.FIL_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    })

    let kucoinApi_HBAR="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=HBAR-USDT"
  axios.get(kucoinApi_HBAR)
    .then( function(response) {
      global.HBAR_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_APT="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=APT-USDT"
  axios.get(kucoinApi_APT)
    .then( function(response) {
      global.APT_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_NEAR="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=NEAR-USDT"
  axios.get(kucoinApi_NEAR)
    .then( function(response) {
      global.NEAR_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

  },2500)

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


  setInterval(()=>{

    let text = `◽️ تتر [USDT-IRT] : ${global.USDT_price} %0D%0A%0D%0A ▪ بیتکوین [BTC-USDT] : ${global.BTC_price} %0D%0A%0D%0A ▪ اتریوم [ETH-USDT] : ${global.ETH_price} 
    %0D%0A%0D%0A ▪ بایننس [BNB-USDT] : ${global.BNB_price} %0D%0A%0D%0A ▪ ریپل [XRP-USDT] : ${global.XRP_price}
    %0D%0A%0D%0A ▪ سولانا [SOL-USDT] : ${global.SOL_price} %0D%0A%0D%0A ▪ یو اس دی سی [USDC-USDT] : ${global.USDC_price}
    %0D%0A%0D%0A ▪ کاردانو [ADA-USDT] : ${global.ADA_price} %0D%0A%0D%0A ▪ دوج کوین [DOGE-USDT] : ${global.DOGE_price}
    %0D%0A%0D%0A ▪ ترون [TRX-USDT] : ${global.TRX_price} %0D%0A%0D%0A ▪ تن کوین [TON-USDT] : ${global.TON_price}
    %0D%0A%0D%0A ▪ چین لینک [LINK-USDT] : ${global.LINK_price} %0D%0A%0D%0A ▪ آوالانچ [AVAX-USDT] : ${global.AVAX_price}
    %0D%0A%0D%0A ▪ پالیگان(متیک) [MATIC-USDT] : ${global.MATIC_price} %0D%0A%0D%0A ▪ پولکادات [DOT-USDT] : ${global.DOT_price}
    %0D%0A%0D%0A ▪ لایت کوین [LTC-USDT] : ${global.LTC_price} %0D%0A%0D%0A ▪ شیبا اینو [SHIB-USDT] : ${global.SHIB_price}
    %0D%0A%0D%0A ▪ بیت کوین کش [BCH-USDT] : ${global.BCH_price} %0D%0A%0D%0A ▪ یونی سواپ [UNI-USDT] : ${global.UNI_price}
    %0D%0A%0D%0A ▪ کازماس [ATOM-USDT] : ${global.ATOM_price} %0D%0A%0D%0A ▪ استلار [XLM-USDT] : ${global.XLM_price}
    %0D%0A%0D%0A ▪ مونرو [XMR-USDT] : ${global.XMR_price} %0D%0A%0D%0A ▪ کسپا [KAS-USDT] : ${global.KAS_price}
    %0D%0A%0D%0A ▪ اتریوم کلاسیک [ETC-USDT] : ${global.ETC_price} %0D%0A%0D%0A ▪ ثورچین [RUNE-USDT] : ${global.RUNE_price}
    %0D%0A%0D%0A ▪ اینترنت کامپیوتر [ICP-USDT] : ${global.ICP_price} %0D%0A%0D%0A ▪ لیدو داو [LDO-USDT] : ${global.LDO_price}
    %0D%0A%0D%0A ▪ فایل کوین [FIL-USDT] : ${global.FIL_price} %0D%0A%0D%0A ▪ هدرا هشگراف [HBAR-USDT] : ${global.HBAR_price}
    %0D%0A%0D%0A ▪ اپتوس [APT-USDT] : ${global.APT_price} %0D%0A%0D%0A ▪ نیر پروتکل [NEAR-USDT] : ${global.NEAR_price}
    %0D%0A%0D%0A 🗓 ${date}`

   let path = `https://api.telegram.org/bot${TOKEN}/sendMessage\?chat_id\=-1002136043768\&text\= ${text}`

   axios.get(path)
     .then( function(response) {
     })
     .catch(error => {
      console.log("err: " +error)
     })
 },300 * 1000)