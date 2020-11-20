$.fn.extend({
	"waterFall":function(){
		var $_this = $(this);
		//总宽
		var totalWidth = $_this.width();
		//个宽
		var itemWidth = $_this.children(".item").width();

		// 每行个数
		var count = Math.floor(totalWidth / itemWidth);

		var margin = (totalWidth - itemWidth * count) / (count + 1);
		//记录每一行累加的高度
		var heightArr = [];
		for(var i = 0 ; i < count ;i ++){
			heightArr.push(margin);
		}
		$_this.children(".item").each(function(index,element){
			var $_item = $(element);
			var minIndex = 0;
			var minHeight = heightArr[0];
			for(var i = 0 ; i < heightArr.length;i++){
				if(heightArr[i] < minHeight){
					minIndex = i;
					minHeight = heightArr[i];
				}
			}
			$_item.css({
				top:minHeight,
				left:margin + (itemWidth + margin) * minIndex
			})
			heightArr[minIndex] += (margin + $_item.height());
		})

		var maxHeight = heightArr[0];
		for(var i = 0 ; i < heightArr.length;i++){
			if(heightArr[i] > maxHeight){
				maxHeight = heightArr[i];
			}
			
		}
		$_this.height(maxHeight);
	}
})