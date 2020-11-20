/* // node 模块化编程
module.exports = function(){
    console.log('我是bar模块123');
    
} */

// ES6语法，导出一个默认成员（任意类型），一个js中只能有一个默认成语
/* export default function(){
    console.log('我是bar模块----ES6***');
} */
export default "xxx"
// ES6导出非默认成员
export const a = "aaa" //导出变量时，必须要通过var/let/const进行声明
export const b = "bbbb"
// 导出的函数也不能为匿名函数
export function add(x, y) {
    return x + y
}