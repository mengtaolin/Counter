(function(app, document){
	var mui = null;
	var popover = null;
	var dataItem = function(){return new Object()}
	
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
