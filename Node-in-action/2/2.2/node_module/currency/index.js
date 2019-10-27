class Currency {
  constructor(canadianDollar) {
    this.canadianDollar = canadianDollar
  }
  roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100
  }
  canadianToUS(canadian) {
    return this.roundTwoDecimals(canadian * this.canadianDollar)
  }
  USToCanadian(us) {
    return this.roundTwoDecimals(us / this.canadianDollar)
  }
}
// exports = Currency 报错
// exports只是module.exports的一个全局引用
// 所以不可直接用对象、函数、变量给exports赋值
module.exports = exports = Currency
