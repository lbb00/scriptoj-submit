/* 

#33 数组拍平

Q:
编写一个 JavaScript 函数，接受一个仅包含数字的 *多维数组* ，返回拍平以后的结果。例如传入：`[1, [[2], 3, 4], 5]`，返回 `[1, 2, 3, 4, 5]`。
（本题来源：阿里巴巴前端笔试题）

*/

// 这个题要注意空数组[]的测试用例

const flatten_1 = arr => JSON.parse('[' + arr.toString() + ']')

const flatten_2 = arr => JSON.parse('[' + JSON.stringify(arr).replace(/[\[\]]/g, '') + ']')