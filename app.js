const axios = require('axios')
const express = require('express')

const app = express()

app.use(express.json())


setInterval(()=>{
  
 let kucoinApi="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=BTC-USDT"

  axios.get(kucoinApi)
    .then( function(response) {
         price1 = response.data.data.price
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
         price2 = response.data.data.price
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
         price3 = response.data.data.price
        // console.log("ETH:" ,price);
    })
    .catch(error => {
     console.log("err: " +error)
    }) 
},2500)


 setInterval(()=>{

   let path = `https://api.telegram.org/bot6775787608:AAF2d7l05TtGQTXL12dTyhPyKjFqr9fuIvc/sendMessage\?chat_id\=-1002136043768\&text\= BTC : ${price1} , TRX :${price2} , ETH :${price3} `

   axios.get(path)
     .then( function(response) {
     })
     .catch(error => {
      console.log("err: " +error)
     })
 },3000)














