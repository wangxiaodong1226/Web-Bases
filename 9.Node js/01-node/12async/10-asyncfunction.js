async function readFile1(){
    return "file1"
}
async function readFile2(){
    return "file2"
}
async function readFile3(){
    return "file3"
}

//await is only vaild in async function
async function run(){
    let file1 =await  readFile1//await 后面只能是promise对象
    let file2 =await readFile2
    let file3 =await readFile3
    console.log(file1);
    console.log(file2);
    console.log(file3);
}
run()