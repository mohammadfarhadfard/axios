const axios = require('axios')
const express = require('express')

const app = express()

app.use(express.json())


setInterval(()=>{
  
 let kucoinApi="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=BTC-USDT"

  axios.get(kucoinApi)
    .then( function(response) {
         price = response.data.data.price
        console.log("BTC:" ,price);
    })
    .catch(error => {
     console.log("err: " +error)
    }) 
},2000)


 setInterval(()=>{

   let path = `https://api.telegram.org/bot6775787608:AAF2d7l05TtGQTXL12dTyhPyKjFqr9fuIvc/sendMessage\?chat_id\=-1002136043768\&text\= BTC :${price}`

   axios.get(path)
     .then( function(response) {
     })
     .catch(error => {
      console.log("err: " +error)
     })
 },3500)














