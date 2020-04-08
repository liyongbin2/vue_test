export function formatDate (date, fmt) {
  // 获取年份
  if (/(y+)/.test(fmt)) {
    // 将匹配到的y替换成字符串，后面拼接的+''就是转换为字符串,比如匹配到了yyyy，则RegExp.$1就是yyyy，
    // 而后面的(date.getFullYear() + ''))就是将yyyy替换成类似2019
    // substr() 截取作用,因为年份是4位，如果传入的yyy则将2019截取掉2，然后代替yyy，也就是019
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  // 获取
  // M+ 正则表达式的规则，表示匹配1个或多个M
  let O = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in O) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = O[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))

    }
  }
  return fmt
}
// padLeftZero()对不足两位的补充00，也就是防止出现4:5:1(4小时5分钟1秒)的情况
function padLeftZero (str) {
  // 将匹配到的时分秒截取，比如输入的时MM（05）,则变成0005，然后截取两位00变成05,如果是传入1位，就是005，截取1位变成05
  return ('00' + str).substr(str.length)
}