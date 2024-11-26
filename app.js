const axios = require('axios');
require('dotenv').config()
let TOKEN = process.env.BOT_TOKEN

//date
const moment = require('jalali-moment');
const date = moment().locale('fa').format('YYYY/M/D hh:mm');


//get crypto prices
const coins = ["BTC","ETH","XRP","AVAX","TRX","SOL","BNB","ADA","SHIB","TON","USDC","DOGE"]
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
  },2 * 1000)
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

//get coin prices
const coinMappings = {
  retail_sekee: ['sekeEm', 'sekeEm_max', 'sekeEm_min', 'sekeEm_s'],
  retail_sekeb: ['sekeB', 'sekeB_max', 'sekeB_min', 'sekeB_s'],
  retail_nim: ['sekeNim', 'sekeNim_max', 'sekeNim_min', 'sekeNim_s'],
  retail_rob: ['sekeRob', 'sekeRob_max', 'sekeRob_min', 'sekeRob_s'],
  retail_gerami: ['sekeGer', 'sekeGer_max', 'sekeGer_min', 'sekeGer_s'],
};

function fetchCoinPrice(key) {
  const coinPriceUrl = `https://raw.githubusercontent.com/margani/pricedb/main/tgju/current/${key}/latest.json`;
  axios.get(coinPriceUrl)
    .then(response => {
      const { p, h, l, t } = response.data; // Destructure response data
      const [priceVar, maxVar, minVar, timeVar] = coinMappings[key];
      global[priceVar] = p;
      global[maxVar] = h;
      global[minVar] = l;
      global[timeVar] = t;
    })
    .catch(error => {
      console.log("err: " + error);
    });
}

const coinKeys = Object.keys(coinMappings);
setInterval(() => {
  coinKeys.forEach(fetchCoinPrice);
}, 3 * 1000);

//get dollar,eur,gbp prices
function fetchCurrencyPrices(key) {
  const dprice = `https://raw.githubusercontent.com/margani/pricedb/main/tgju/current/${key}/latest.json`;
  axios.get(dprice)
    .then(response => {
      const { p, h, l, d, dp, dt, t } = response.data;
      if (key === 'price_dollar_rl') {
        global.dollar = p; global.dollar_max = h; global.dollar_min = l; global.dollar_swing = d; global.dollar_Percent = dp; global.dollar_dt = dt; global.dollar_s = t;
      } else if (key === 'price_gbp') {
        global.gbp = p; global.gbp_max = h; global.gbp_min = l; global.gbp_swing = d; global.gbp_Percent = dp; global.gbp_dt = dt; global.gbp_s = t;
      } else if (key === 'price_eur') {
        global.eur = p; global.eur_max = h; global.eur_min = l; global.eur_swing = d; global.eur_Percent = dp; global.eur_dt = dt; global.eur_s = t;
      }
    })
    .catch(error => {
      console.log("err: " + error);
    });
}

const allKeys = ['price_dollar_rl', 'price_gbp', 'price_eur'];
setInterval(() => {
  allKeys.forEach(fetchCurrencyPrices);
}, 3 * 1000);

//sending to telegram
hr = `ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ`
function createPriceMessage(coinName, currentPrice, maxPrice, minPrice, lastUpdate) {
  return `◽️ ${coinName} : %0D%0A ▪ قیمت کنونی : ${currentPrice}%0D%0A ▪ بیشترین قیمت : ${maxPrice}%0D%0A ▪ کمترین قیمت : ${minPrice}%0D%0A ▪ زمان ثبت آخرین نرخ : ${lastUpdate}%0D%0A`;
}

const coinOrder = ["BTC", "ETH", "SOL", "BNB", "XRP", "DOGE", "USDC", "ADA", "TRX", "AVAX", "SHIB", "TON"];
setInterval(() => {
  let msg = `قیمت ارز های دیجیتال : %0D%0A%0D%0A ◽️ USDT-IRR : ${global.USDT_price}  %0D%0A%0D%0A`;
  coinOrder.forEach(coin => {
    if (prices[coin]) {
      msg += `▪ ${coin}-USDT : ${prices[coin]} %0D%0A%0D%0A`;
    }
  });

  msg += `${hr}%0D%0A%0D%0A🔸 قیمت ها به ریال است %0D%0A%0D%0A`;

  msg += createPriceMessage("سکه امامی", global.sekeEm, global.sekeEm_max, global.sekeEm_min, global.sekeEm_s);
  msg += `%0D%0A`;
  
  msg += createPriceMessage("سکه بهار آزادی", global.sekeB, global.sekeB_max, global.sekeB_min, global.sekeB_s);
  msg += `%0D%0A`;
  
  msg += createPriceMessage("نیم سکه بهار آزادی", global.sekeNim, global.sekeNim_max, global.sekeNim_min, global.sekeNim_s);
  msg += `%0D%0A`;
  
  msg += createPriceMessage("ربع سکه بهار آزادی", global.sekeRob, global.sekeRob_max, global.sekeRob_min, global.sekeRob_s);
  msg += `%0D%0A`;
  
  msg += createPriceMessage("سکه گرمی", global.sekeGer, global.sekeGer_max, global.sekeGer_min, global.sekeGer_s);
  msg += `%0D%0A`;

  msg += `${hr}%0D%0A%0D%0Aقیمت دلار-یورو-پوند : %0D%0A%0D%0A🔸 قیمت ها به ریال است%0D%0A%0D%0A`;
  
  msg += createPriceMessage("دلار", global.dollar, global.dollar_max, global.dollar_min, global.dollar_s);
  msg += `%0D%0A`;

  msg += createPriceMessage("یورو", global.eur, global.eur_max, global.eur_min, global.eur_s);
  msg += `%0D%0A`;

  msg += createPriceMessage("پوند", global.gbp, global.gbp_max, global.gbp_min, global.gbp_s);
  msg += `%0D%0A`;

  msg += `%0D%0A🗓 ${date}`;
  
  let path = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=-1002136043768&text=${msg}`;
  axios.get(path)
    .then(response => {})
    .catch(error => {
      console.log("err: " + error);
    });
}, 6 * 1000);