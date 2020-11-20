const Author = require('../model/author.js')

//数据库的相关操作
//增加
async function addAuthor() {
        try {
            const author = new Author({
                name: 'wangwu',
                sex: 1,
                age: 28
            })
            let result = await author.save()
            // console.log('保存成功',result)
            return result
        } catch (error) {
            console.log(error);
        }
    }

module.exports=addAuthor()