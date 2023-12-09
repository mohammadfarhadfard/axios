const axios = require('axios')
const express = require('express')
const app = express()
require('dotenv').config()
let TOKEN = process.env.BOT_TOKEN
app.use(express.json())

setInterval(()=>{

  let kucoinApi_BTC="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=BTC-USDT"
  axios.get(kucoinApi_BTC)
    .then( function(response) {
         BTC_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_ETH="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=ETH-USDT"
  axios.get(kucoinApi_ETH)
    .then( function(response) {
         ETH_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_BNB="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=BNB-USDT"
  axios.get(kucoinApi_BNB)
    .then( function(response) {
         BNB_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    })

    let kucoinApi_XRP="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=XRP-USDT"
  axios.get(kucoinApi_XRP)
    .then( function(response) {
         XRP_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    })

    let kucoinApi_SOL="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=SOL-USDT"
  axios.get(kucoinApi_SOL)
    .then( function(response) {
         SOL_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_USDC="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=USDC-USDT"
  axios.get(kucoinApi_USDC)
    .then( function(response) {
         USDC_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_ADA="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=ADA-USDT"
  axios.get(kucoinApi_ADA)
    .then( function(response) {
         ADA_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    })

    let kucoinApi_DOGE="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=DOGE-USDT"
  axios.get(kucoinApi_DOGE)
    .then( function(response) {
         DOGE_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_TRX="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=TRX-USDT"
  axios.get(kucoinApi_TRX)
    .then( function(response) {
         TRX_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_TON="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=TON-USDT"
  axios.get(kucoinApi_TON)
    .then( function(response) {
         TON_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_LINK="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=LINK-USDT"
  axios.get(kucoinApi_LINK)
    .then( function(response) {
         LINK_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    })

    let kucoinApi_AVAX="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=AVAX-USDT"
  axios.get(kucoinApi_AVAX)
    .then( function(response) {
         AVAX_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_MATIC="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=MATIC-USDT"
  axios.get(kucoinApi_MATIC)
    .then( function(response) {
         MATIC_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_DOT="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=DOT-USDT"
  axios.get(kucoinApi_DOT)
    .then( function(response) {
         DOT_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    })

    let kucoinApi_LTC="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=LTC-USDT"
  axios.get(kucoinApi_LTC)
    .then( function(response) {
         LTC_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    })

    let kucoinApi_SHIB="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=SHIB-USDT"
  axios.get(kucoinApi_SHIB)
    .then( function(response) {
         SHIB_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_BCH="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=BCH-USDT"
  axios.get(kucoinApi_BCH)
    .then( function(response) {
         BCH_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_UNI="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=UNI-USDT"
  axios.get(kucoinApi_UNI)
    .then( function(response) {
         UNI_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    })

    let kucoinApi_ATOM="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=ATOM-USDT"
  axios.get(kucoinApi_ATOM)
    .then( function(response) {
         ATOM_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_XLM="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=XLM-USDT"
  axios.get(kucoinApi_XLM)
    .then( function(response) {
         XLM_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_XMR="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=XMR-USDT"
  axios.get(kucoinApi_XMR)
    .then( function(response) {
         XMR_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    })

    let kucoinApi_KAS="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=KAS-USDT"
  axios.get(kucoinApi_KAS)
    .then( function(response) {
         KAS_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    })

    let kucoinApi_ETC="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=ETC-USDT"
  axios.get(kucoinApi_ETC)
    .then( function(response) {
         ETC_price = response.data.data.price
    })
    .catch(error => { 
     console.log("err: " +error)
    }) 

    let kucoinApi_RUNE="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=RUNE-USDT"
  axios.get(kucoinApi_RUNE)
    .then( function(response) {
         RUNE_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_ICP="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=ICP-USDT"
  axios.get(kucoinApi_ICP)
    .then( function(response) {
         ICP_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_LDO="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=LDO-USDT"
  axios.get(kucoinApi_LDO)
    .then( function(response) {
         LDO_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_FIL="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=FIL-USDT"
  axios.get(kucoinApi_FIL)
    .then( function(response) {
         FIL_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    })

    let kucoinApi_HBAR="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=HBAR-USDT"
  axios.get(kucoinApi_HBAR)
    .then( function(response) {
         HBAR_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_APT="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=APT-USDT"
  axios.get(kucoinApi_APT)
    .then( function(response) {
         APT_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

    let kucoinApi_NEAR="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=NEAR-USDT"
  axios.get(kucoinApi_NEAR)
    .then( function(response) {
         NEAR_price = response.data.data.price
    })
    .catch(error => {
     console.log("err: " +error)
    }) 

  },2500)

  setInterval(() =>{

    let nobitex='https://api.nobitex.ir/v2/orderbook/USDTIRT'

      axios.get(nobitex)
      .then( function(response) {
         USDT_price = response.data.lastTradePrice
       })
      .catch(error => {
      console.log("err: " +error)
      })
  } , 2500)


  setInterval(()=>{

  let text =`%0D%0A%0D%0A[BTC-USDT]%0D%0A%0D%0A▪  بیتکوین  : ${BTC_price}%0D%0A%0D%0A[ETH-USDT]%0D%0A%0D%0A▪  اتریوم : ${ETH_price}%0D%0A%0D%0A[BNB-USDT]%0D%0A%0D%0A▪  بایننس : ${BNB_price}%0D%0A%0D%0A[XRP-USDT]%0D%0A%0D%0A▪ ریپل : ${XRP_price}%0D%0A%0D%0A[SOL-USDT]%0D%0A%0D%0A▪  سولانا : ${SOL_price}%0D%0A%0D%0A[USDC-USDT]%0D%0A%0D%0A▪  یو اس دی سی : ${USDC_price}%0D%0A%0D%0A[ADA-USDT]%0D%0A%0D%0A▪ کاردانو : ${ADA_price}%0D%0A%0D%0A[DOGE-USDT]%0D%0A%0D%0A▪ دوج کوین : ${DOGE_price}%0D%0A%0D%0A[TRX-USDT]%0D%0A%0D%0A▪ ترون : ${TRX_price}%0D%0A%0D%0A[TON-USDT]%0D%0A%0D%0A▪ تن کوین : ${TON_price}%0D%0A%0D%0A[LINK-USDT]%0D%0A%0D%0A▪ چین لینک : ${LINK_price}%0D%0A%0D%0A[AVAX-USDT]%0D%0A%0D%0A▪ آوالانچ : ${AVAX_price}%0D%0A%0D%0A[MATIC-USDT]%0D%0A%0D%0A▪ پالیگان(متیک) : ${MATIC_price}%0D%0A%0D%0A[DOT-USDT]%0D%0A%0D%0A▪ پولکادات : ${DOT_price}%0D%0A%0D%0A[LTC-USDT]%0D%0A%0D%0A▪ لایت کوین : ${LTC_price}%0D%0A%0D%0A[SHIB-USDT]%0D%0A%0D%0A▪ شیبا اینو : ${SHIB_price}%0D%0A%0D%0A[BCH-USDT]%0D%0A%0D%0A▪ بیت کوین کش : ${BCH_price}%0D%0A%0D%0A[UNI-USDT]%0D%0A%0D%0A▪ یونی سواپ : ${UNI_price}%0D%0A%0D%0A[ATOM-USDT]%0D%0A%0D%0A▪ کازماس : ${ATOM_price}%0D%0A%0D%0A[XLM-USDT]%0D%0A%0D%0A▪ استلار : ${XLM_price}%0D%0A%0D%0A[XMR-USDT]%0D%0A%0D%0A▪ مونرو : ${XMR_price}%0D%0A%0D%0A[KAS-USDT]%0D%0A%0D%0A▪ کسپا : ${KAS_price}%0D%0A%0D%0A[ETC-USDT]%0D%0A%0D%0A▪ اتریوم کلاسیک : ${ETC_price}%0D%0A%0D%0A[RUNE-USDT]%0D%0A%0D%0A▪ ثورچین : ${RUNE_price}%0D%0A%0D%0A[ICP-USDT]%0D%0A%0D%0A▪ اینترنت کامپیوتر : ${ICP_price}%0D%0A%0D%0A[LDO-USDT]%0D%0A%0D%0A▪ لیدو داو : ${LDO_price}%0D%0A%0D%0A[FIL-USDT]%0D%0A%0D%0A▪ فایل کوین : ${FIL_price}%0D%0A%0D%0A[HBAR-USDT]%0D%0A%0D%0A▪ هدرا هشگراف : ${HBAR_price}%0D%0A%0D%0A[APT-USDT]%0D%0A%0D%0A▪ اپتوس : ${APT_price}%0D%0A%0D%0A[NEAR-USDT]%0D%0A%0D%0A▪ نیر پروتکل : ${NEAR_price}`
 
   let path = `https://api.telegram.org/bot${TOKEN}/sendMessage\?chat_id\=-1002136043768\&text\= ${text}`

   axios.get(path)
     .then( function(response) {
     })
     .catch(error => {
      console.log("err: " +error)
     })
 },120 * 1000)


  setInterval(() => {

    let text = `%0D%0A%0D%0A[USDT-IRT]%0D%0A%0D%0A▪  تتر  : ${USDT_price}`


    let path = `https://api.telegram.org/bot${TOKEN}/sendMessage\?chat_id\=-1002136043768\&text\= ${text}`

    axios.get(path)
     .then( function(response) {
     })
     .catch(error => {
      console.log("err: " +error)
     })
  }, 120 * 1000);