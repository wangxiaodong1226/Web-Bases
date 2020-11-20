(function (Vue) {
	const STORAGE_KEY = "items-vue"
	//进行本地数据存储/获取
	const itemStorage = {
		//获取数据
		fetch(){
			return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

		}, 
		//保存数据
		save(items){
			localStorage.setItem(STORAGE_KEY,JSON.stringify(items));
		}
	}
	/* const items = [
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
	]; */
	Vue.directive('app-focus',{
		inserted(el,binding){
			el.focus();
		},
		update(el,binding) {
			el.focus();
		},
	})
	const vm = new Vue({
		el: "#todoapp",
		data: {
			//items, // 相当于items:items这个写法，ES6中对象属性的简写方式（如果对象中的key和value名字一样，就可以简写成一个）
			items:itemStorage.fetch(),
			currentItem:null,//记录被双击的任务项
			filterStatus:'all'//接收变化的状态值
		},
		watch: {
			/* items:function(newValue,old){
				console.log("watch",newValue);
				
			} */
			items:{
				deep:true,
				handler:function(newValue,old){
					// console.log("watch",newValue);
					itemStorage.save(newValue)
				}
			}
		},
		//定义计算属性
		computed: {
			//剩余未完成任务数量
			remaining() { //remaining function(){}
				//item.completed代表的是已完成 ，取反就代表是未完成的了
				//filter方法会把数组中满足completed为false的元素一个一个的拿出来，添加到unItems数组中，这样当filter方法执行完毕之后就得到了所有未完成的元素，最后将所有未完成的数量返回出去显示在页面中
				const unItems = this.items.filter(function (item) {
					return !item.completed
				})
				return unItems.length;
			},
			//切换所有状态，控制全选按钮是否勾选
			toggleAll: {
				get() {
					// console.log("get",this.remaining);
					return this.remaining === 0;

				},
				set(newStatus) {
					// console.log("set",newStatus);
					// this.items.forEach(function(item){

					// })
					//ES6简写方式
					/* this.items.forEach((item)=>{
						item.completed = newStatus;
					}) */
					//更加简写
					this.items.forEach(item => item.completed = newStatus)

				}
			},
			filterItems(){
				switch (this.filterStatus) {
					case 'active':
						return this.items.filter(item => !item.completed);
						break;
					case 'completed':
						return this.items.filter(item => item.completed);
						break;
				
					default:
						return this.items;
						break;
				}
			}

		},
		methods: {
			//添加任务项
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
			},
			//删除任务项
			removeItem(index){
				this.items.splice(index,1);
			},
			//移除所有已完成任务项
			removeCompleted(){
				//返回的是未完成任务项数组
				const unItems = this.items.filter(item => !item.completed);
				//将过滤出来的所有未完成任务项的这个数组重新赋值给数据列表（this.items）
				this.items = unItems;
			},
			//定位要编辑的是哪一条
			toEdit(item){
				this.currentItem = item;
			},
			//取消编辑状态
			canceEdit(){
				this.currentItem = null;
			},
			//完成编辑保存数据
			finishEdit(item,index,event){
				//1，获取当前输入框中输入的内容
				const content = event.target.value.trim();
				//2，判断输入框中的内容是否为空，如果为空则进行删除任务项
				if(!content){
					this.removeItem(index);
					return;
				}
				//3，如果不为空，则添加到原有任务项中，（更新操作）
				item.content = content;
				//4，移除编辑模式
				this.currentItem = null;
			}
		},
	})

	window.onhashchange = function(){
		const hash = window.location.hash.substr(2) || "all";
		console.log(hash);
		vm.filterStatus = hash;
		
	}
	window.onhashchange();

})(Vue);
