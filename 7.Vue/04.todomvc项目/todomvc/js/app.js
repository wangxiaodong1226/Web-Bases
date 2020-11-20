(function (Vue) {

	const items = [
		{
			id: 1,//主键id
			content: "HTML",//输入的内容
			completed: false//是否完成
		},
		{
			id: 2,//主键id
			content: "CSS",//输入的内容
			completed: false//是否完成
		},
		{
			id: 3,//主键id
			content: "JS",//输入的内容
			completed: true//是否完成
		}
	]
	new Vue({
		el: "#todoapp",
		data: {
			items // 相当于items:items这个写法，ES6中对象属性的简写方式（如果对象中的key和value名字一样，就可以简写成一个）
		},
		//定义计算属性
		computed:{
			remaining(){ //remaining function(){}
				//item.completed代表的是已完成 ，取反就代表是未完成的了
				//filter方法会把数组中满足completed为false的元素一个一个的拿出来，添加到unItems数组中，这样当filter方法执行完毕之后就得到了所有未完成的元素，最后将所有未完成的数量返回出去显示在页面中
				const unItems = this.items.filter(function(item){
					return !item.completed
				})
				return unItems.length;
			}
		},
		methods: {
			addItem(event) {//ES6语法相当于addItem:function(){
				//1，获取输入框输入的内容
				// console.log(event.target.value);

				const content = event.target.value.trim();

				//2，判断内容是否为空
				if (!content.length) {
					return;
				}

				//3，如果不为空，就添加数据到items数组中
				const id = this.items.length + 1;
				this.items.push(
					{
						id,//es6语法相当于id: id,//主键id
						content,//content: content,//输入的内容
						completed: false//是否完成
					}
				)
				//4，清空输入框内容
				event.target.value = "";
			}
		},
	})

})(Vue);
