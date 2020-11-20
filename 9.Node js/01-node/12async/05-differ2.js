// for(let i=0;i<100000;i++){
//     console.log(i);
// }

// console.log('aaaa');

console.log('logic a');
setTimeout(()=>{
    console.log('logic b');
},2000);
setTimeout(()=>{
    console.log('logic b');
},0);
console.log('d');