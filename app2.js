const axios = require('axios')
const express = require('express')

const app = express()

app.use(express.json())


setInterval(()=>{
  
 let kucoinApi="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=BTC-USDT"

  axios.get(kucoinApi)
    .then( function(response) {
         BTC_price = response.data.data.price
        // console.log("BTC:" ,price);
    })
    .catch(error => {
     console.log("err: " +error)
    }) 
  },2500)


setInterval(()=>{
  
 let kucoinApi="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=TRX-USDT"

  axios.get(kucoinApi)
    .then( function(response) {
         TRX_price = response.data.data.price
        // console.log("TRX:" ,price);
    })
    .catch(error => {
     console.log("err: " +error)
    }) 
  },2500)


setInterval(()=>{
  
 let kucoinApi="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=ETH-USDT"

  axios.get(kucoinApi)
    .then( function(response) {
         ETH_price = response.data.data.price
        // console.log("ETH:" ,price);
    })
    .catch(error => {
     console.log("err: " +error)
    }) 
  },2500)

  // \uD83D\uDE0D

 setInterval(()=>{

  let text =  `%0D%0A%0D%0A[BTC-USDT]%0D%0A%0D%0A▪  بیتکوین  : ${BTC_price}%0D%0A%0D%0A[TRX-USDT]%0D%0A%0D%0A▪  ترون : ${TRX_price}%0D%0A%0D%0A[ETH-USDT]%0D%0A%0D%0A▪  اتریوم : ${ETH_price}%0D%0A%0D%0A`
 
   let path = `https://api.telegram.org/bot6775787608:AAF2d7l05TtGQTXL12dTyhPyKjFqr9fuIvc/sendMessage\?chat_id\=-1002136043768\&text\= ${text}`

   axios.get(path)
     .then( function(response) {
     })
     .catch(error => {
      console.log("err: " +error)
     })
 },10000)











