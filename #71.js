/* 

#71 不重复数字

Q:
编写一个 JavaScript 函数 uniqueNums，该函数有一个参数 n（一个不大 31 的整数），其返回值是一个数组，该数组内是 n 个随机且不重复的整数，且整数取值范围是[2, 32]。
请你完成`uniqueNums` 的编写。

*/

// es6
const uniqueNumsES6 = (n) => {
  let mSet = new Set()
  while (mSet.size < n) {

    mSet.add(2 + ~~(Math.random() * 30))
  }
  return [...mSet]
}

// es5
function uniqueNumsES5(n) {
  if (n === 0) return
  var temp = []
  while (temp.length < 31) temp.push(temp.length + 2)
  var arr = []
  while (arr.length < n) {
    var num = null
    while (!num) {
      num = temp[~~(Math.random() * 30)]
    }
    arr.push(num)
    temp[num - 1] = null
  }
  return arr
}