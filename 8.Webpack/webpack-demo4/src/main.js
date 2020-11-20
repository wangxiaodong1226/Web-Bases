// var bar  = require("./bar.js");
// bar();

// ES6 导入成员

// import bar from './bar.js'
// // bar()
// console.log(bar);


/* import {x,y,add} from './bar';
console.log(x,y,add(5,6)); */

import * as bar2 from './bar.js';

console.log(bar2.x);
