/***
 * xiao ming chi fan
 * naf gnim oaix
 * */
// 第一种
/*
export default (str)=>{
    const arr = str.split(' ');
    let newArr = arr.map(item=>{
        return item.split('').reverse().join('');
    });
    newArr = newArr.reverse();
    return newArr.join(' ')
}*/
// 第二种
/*export default (str)=> {
  return str.split(' ').reverse().map((item)=>{
      return item.split('').reverse().join('');
  }).join(' ')
}*/
// 第三种 通过\s 空格 匹配
/*
export default (str) => {
    return str.split(/\s/g).reverse().map(item => {
        return item.split('').reverse().join('')
    }).join(' ')
}
*/
export default (str) => {
    return str.length ? str.match(/[\S]+/g).reverse().map(item=>{
        return item.split('').reverse().join('')
    }).join(' ') : ''
}
