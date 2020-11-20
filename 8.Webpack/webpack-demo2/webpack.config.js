const path = require("path");
module.exports = {
    mode:'none',//"development" | "production" | "none"
    entry:"./src/main.js",
    output:{
        path:path.join(__dirname,'./dist/'),
        filename:'bundle.js'
    }
}

