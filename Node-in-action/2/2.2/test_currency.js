const Currency = require('./currency') // 指向 c:/Users/Zhuo/Desktop/Study/Node-in-action/2/2.2/currency
// 若未找到,则指向c:/Users/Zhuo/Desktop/Study/Node-in-action/2/2.2/currency/index

// const Currency = require('currency') // 指向 c:/Users/Zhuo/Desktop/Study/Node-in-action/2/2.2/node_modules/currency/index
// 将node_module改为node_modules才可运行

const canadianDollar = 0.91
const currency = new Currency(canadianDollar)
console.log('50 Canadian dollars equals this amount of US dollars:')
console.log(currency.canadianToUS(50))
console.log('30 US dollars equals this amount of Canadian dollars:')
console.log(currency.USToCanadian(30))
