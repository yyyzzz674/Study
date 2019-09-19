const removeStr = str => str.replace(/\t|\n|\r/g, '')
console.log(
  removeStr('\t11122233\n_aaaaaaa\r\n_bbbbbb\t_3333333\r_4444444\n_555555')
)
