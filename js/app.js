(function(app, document){
	var mui = null;
	var popover = null;
	function PlayerItem(options){
		_init_(options);
	}
	PlayerItem.prototype = {
		_init_:function(options){
			this.id = options.id;
			this.time = options.time;
			this.name = options.name;
			//当前第几局
			this.round = options.round;
			this.isWin = options.isWin;
			
			this.isLandowner = options.isLandowner;
			this.money = options.money;//赢钱的数量
			this.bones = options.bones;//该局多少炸
		}
		showDetail:function(){
			var role = this.isLandowner ? "地主" : "农民";
			var result = this.isWin ? "赢" : "输";
			return this.name + "在" + this.time + "第" + this.round + "局为" + role + "并" + result + "了" + this.money;
		}
	}
	
	app.init = function($mui){
		mui = $mui;
		popover = mui("#middlePopover");
		initItemProp();
	}
	var initItemProp = function(){
		dataItem.id = 0;
		dataItem.name = 0;
		dataItem.type = "";
		dataItem.picUrl = "";
	}
	
	app.addItem = function(e){
		
	}
	app.sureClick = function(e){
		popover.popover('hide');
		alert("sure");
	}
	app.cancelClick = function(){
		popover.popover('hide');
	}
	
	app.getListDatas = function(){
		var listDatas = localStorage.getItem("list");
		return JSON.parse(listDatas);
	}
	//获取Item数据
	app.getItemData = function(id){
		var item = localStorage.getItem(id);
		return JSON.parse(item);
	}
	
	app.updateItem = function(item){
		localStorage.setItem(item.id, JSON.stringify(item))
	}
	
	app.setLocalDatas = function(key, targets){
		var datas = localStorage.getItem(key);
		if(datas == null){
			localStorage.setItem(key, JSON.stringify(targets));
		}
		else{
			var objDatas = JSON.parse(datas);
			var len = targets.length;
			for(var i = 0;i < len;i ++){
				var obj = targets[i];
				objDatas[obj.id] = obj;
			}
			localStorage.setItem(key, JSON.stringify(objDatas));
		}
	}
	
	
	
})(window.app = {}, document)
