/**
 *
 * @authors Eric Hsiao
 *
 */
var stage;
var onSelectObject = null;

main = function (){

	//private menbers
	var group;
	var mousedownInterval;

	var textField;

	//private methods
	function init () {
		console.log('main is loaded.');

		initCanvas();

		///////////////////////
		//TOOLS

		$('.btn-upGroup').click(function(event) {
			doUpGroup();
		});

		$('.btn-clone').click(function(event) {
			onSelectObject.cloneToStage();
		});

		$('.btn-remove').click(function(event) {
			onSelectObject.remove();
		});

		$('.btn-load').click(function(event) {
			loadJSON();
		});

		$('.btn-save').click(function(event) {
			saveAsJSON();
		});

		$('.btn-png').click(function(event) {
			var canvas = document.getElementById('mainCanvas');
			Canvas2Image.saveAsImage(canvas, 1080, 660, 'png');
		});

		$('.btn-jpg').click(function(event) {
			var canvas = document.getElementById('mainCanvas');
			Canvas2Image.saveAsImage(canvas, 540, 330, 'png');
		});

		/////////////////////
		var _t = 1/60*1000;

		$('.btn-upScale').mousedown(function(event) {
			mousedownInterval = setInterval(function() {
				onSelectObject.addScale(0.01,0.01);
			},_t);
		});

		$('.btn-downScale').mousedown(function(event) {
			mousedownInterval = setInterval(function() {
				onSelectObject.addScale(-0.01,-0.01);
			},_t);
		});

		$('.btn-upScaleX').mousedown(function(event) {
			mousedownInterval = setInterval(function() {
				onSelectObject.addScale(0.01,0);
			},_t);
		});

		$('.btn-downScaleX').mousedown(function(event) {
			mousedownInterval = setInterval(function() {
				onSelectObject.addScale(-0.01,0);
			},_t);
		});

		$('.btn-upScaleY').mousedown(function(event) {
			mousedownInterval = setInterval(function() {
				onSelectObject.addScale(0,0.01);
			},_t);
		});

		$('.btn-downScaleY').mousedown(function(event) {
			mousedownInterval = setInterval(function() {
				onSelectObject.addScale(0,-0.01);
			},_t);
		});

		$('.btn-upRotate').mousedown(function(event) {
			mousedownInterval = setInterval(function() {
				onSelectObject.addRotate(1);
			},_t);
		});


		$('.btn-downRotate').mousedown(function(event) {
			mousedownInterval = setInterval(function() {
				onSelectObject.addRotate(-1);
			},_t);
		});

		$('body').mouseup(function(event) {
			clearInterval(mousedownInterval);
		});

		/////////////////////////
		//ADD

		$('.btn-addImageObj-1').click(function(event) {
			addImageObj(1);
		});

		$('.btn-addImageObj-2').click(function(event) {
			addImageObj(2);
		});

		/////////////////////////

		$('.btn-addShapeObj-1').click(function(event) {
			addShapeObj(1);
		});

		$('.btn-addShapeObj-2').click(function(event) {
			addShapeObj(2);
		});

		$('.btn-shapeColor-1').click(function(event) {
			onSelectObject.changeShapeColor("#CCC");
		});

		$('.btn-shapeColor-2').click(function(event) {
			onSelectObject.changeShapeColor("#666");
		});

		$('.btn-shapeColor-3').click(function(event) {
			onSelectObject.changeShapeColor("#000");
		});

		/////////////////////////

		$('.btn-addTextObj').click(function(event) {
			addTextObj();
		});

		$('.btn-fontWeight-100').click(function(event) {
			onSelectObject.textField.setFontWeight("100");
		});

		$('.btn-fontWeight-400').click(function(event) {
			onSelectObject.textField.setFontWeight("400");
		});

		$('.btn-fontWeight-700').click(function(event) {
			onSelectObject.textField.setFontWeight("700");
		});

		$('.btn-fontSize-20').click(function(event) {
			onSelectObject.textField.setFontSize(20);
		});

		$('.btn-fontSize-40').click(function(event) {
			onSelectObject.textField.setFontSize(40);
		});

		$('.btn-fontSize-60').click(function(event) {
			onSelectObject.textField.setFontSize(60);
		});

		$('.btn-textAlign-left').click(function(event) {
			onSelectObject.textField.setTextAlign('left');
		});

		$('.btn-textAlign-center').click(function(event) {
			onSelectObject.textField.setTextAlign('center');
		});

		$('.btn-fontColor-1').click(function(event) {
			onSelectObject.textField.setTextColor("#CCC");
		});

		$('.btn-fontColor-2').click(function(event) {
			onSelectObject.textField.setTextColor("#666");
		});

		$('.btn-fontColor-3').click(function(event) {
			onSelectObject.textField.setTextColor("#000");
		});
	}

	function initCanvas() {
		stage = new createjs.Stage("mainCanvas");

		var shape = new createjs.Shape();
		shape.graphics.beginFill("#fff").drawRect(0, 0, 1080, 660);
		stage.addChild(shape);

		/////////////////
		//群組
		/*group = new createjs.Container();
		group.mouseChildren = false;
		stage.addChild(group);

		onSelectObject = group;

		var shape = new createjs.Shape();
		shape.graphics.beginFill("rgba(255,0,0,.3)").drawRect(0, 0, 400, 400);
		group.addChild(shape);
		group.regX = 200;
		group.regY = 200;
		group.x = 50 + 200;
		group.y = 50 + 200;
		group.rotation = groupRotation;

		///////////////////////////////

		var obj = group.addChild(new simpleObject(100,100,"images/miku.jpg"));
		obj.setRotate(30);
		obj.setScale(1);
		obj.setX(30);
		obj.setY(60);

		var obj2 = group.addChild(new simpleObject(150,80,"images/miku2.jpg"));
		obj2.setRotate(20);
		obj2.setScale(1);
		obj2.setX(230);
		obj2.setY(160);*/

		////////////////////////////////

		stage.enableMouseOver();
		createjs.Ticker.setFPS(60);
		createjs.Ticker.on("tick", stage);
	}

	var groupRotation = 30;

	function doUpGroup() {

		for (var i = 0; i < 2; i++) {
			var _child = group.getChildAt(1);
			var _rotation = groupRotation;
			var _matrix = _child.getConcatenatedMatrix();
			stage.addChild(_child);
			_child.transformMatrix = _matrix;
		};

		stage.removeChild(group);
	}

	//////////////////////////////

	function addImageObj(_count) {

		var _imageObj;

		if(_count == 1){
			_imageObj = stage.addChild(new simpleObject("image",560,566,{image_url:"images/cat.jpg"}));
		}else if(_count == 2){
			_imageObj = stage.addChild(new simpleObject("image",200,150,{image_url:"images/miku2.jpg"}));
		}

		_imageObj.setX(540);
		_imageObj.setY(330);
	}

	function addShapeObj(_count) {
		var _shapeObj;

		if(_count == 1){
			_shapeObj = stage.addChild(new simpleObject("shape",200,200,{style:"circle",color:"#ccc"}));
		}else if(_count == 2){
			_shapeObj = stage.addChild(new simpleObject("shape",200,200,{style:"rectangle",color:"#ccc"}));
		}

		_shapeObj.setX(540);
		_shapeObj.setY(330);
	}

	function addTextObj() {
		var _textObj = stage.addChild(new simpleObject("text",200,60));
		_textObj.setX(540);
		_textObj.setY(330);
	}

	function saveAsJSON() {
		var _JSON = {
			child:[],
		};

		//find all child from stage;
		var _length = stage.numChildren;

		for (var i = 0; i < _length; i++) {
			var _child = stage.getChildAt(i);
			var _data = _child.getSaveData();
			_JSON.child.push(_data);
		};

		var stringJSON = JSON.stringify(_JSON);

		var url = 'data:text/json;charset=utf8,' + encodeURIComponent(stringJSON);
		window.open(url, '_blank');
		window.focus();
	}

	function loadJSON () {
		var _json = mySave;

		for (var i = 0; i < mySave.child.length; i++) {
			var _data = mySave.child[i];

			//loadData
			var _load = stage.addChild(new simpleObject(_data.objType,_data.originWidth,_data.originHeight,_data.option,_data.status));
			_load.transformMatrix = _data.status.transformMatrixInfo;
		};
	}

	//constructor

	{
		$(document).ready(function() {
			init();
		});
	}

	//public

	return {
		saveAsJSON : function () {
			saveAsJSON();
		},

		loadJSON : function () {
			loadJSON();
		}
	}
}

main = new main();

var mySave = {"child":[{"objType":"image","originWidth":560,"originHeight":566,"option":{"image_url":"images/cat.jpg"},"status":{"originRotation":0,"originScaleX":0.6399999999999997,"originScaleY":0.6399999999999997,"transformMatrixInfo":{"a":1,"b":0,"c":0,"d":1,"tx":137,"ty":351}}},{"objType":"shape","originWidth":200,"originHeight":200,"option":{"style":"rectangle","color":"#666"},"status":{"originRotation":0,"originScaleX":2.6699999999999866,"originScaleY":0.019999999999999997,"transformMatrixInfo":{"a":1,"b":0,"c":0,"d":1,"tx":592,"ty":343}}},{"objType":"text","originWidth":200,"originHeight":60,"option":{"fontSize":60,"fontFamily":"Noto Sans TC","fontWeight":"700","fontOffset":"0.3","textAlign":"left","minWidth":200,"width":200,"height":96,"inputText":"PROTOTYPE"},"status":{"originRotation":0,"originScaleX":1.5300000000000005,"originScaleY":1.5300000000000005,"transformMatrixInfo":{"a":1,"b":0,"c":0,"d":1,"tx":471,"ty":274}}},{"objType":"shape","originWidth":200,"originHeight":200,"option":{"style":"circle","color":"#ccc"},"status":{"originRotation":0,"originScaleX":2.7699999999999845,"originScaleY":2.7699999999999845,"transformMatrixInfo":{"a":1,"b":0,"c":0,"d":1,"tx":977,"ty":677}}},{"objType":"shape","originWidth":200,"originHeight":200,"option":{"style":"circle","color":"#ccc"},"status":{"originRotation":0,"originScaleX":2.7699999999999845,"originScaleY":2.7699999999999845,"transformMatrixInfo":{"a":1,"b":0,"c":0,"d":1,"tx":43,"ty":-113}}},{"objType":"shape","originWidth":200,"originHeight":200,"option":{"style":"rectangle","color":"#666"},"status":{"originRotation":0,"originScaleX":2.6699999999999866,"originScaleY":0.019999999999999997,"transformMatrixInfo":{"a":1,"b":0,"c":0,"d":1,"tx":591,"ty":256}}},{"objType":"text","originWidth":200,"originHeight":60,"option":{"fontSize":20,"fontFamily":"Noto Sans TC","fontWeight":"400","fontOffset":"0.3","textAlign":"center","minWidth":200,"width":200,"height":32,"inputText":"思源黑體"},"status":{"originRotation":-811,"originScaleX":1,"originScaleY":1.2700000000000002,"transformMatrixInfo":{"a":1,"b":0,"c":0,"d":1,"tx":897,"ty":198}}},{"objType":"text","originWidth":200,"originHeight":60,"option":{"fontSize":20,"fontFamily":"Noto Sans TC","fontWeight":"100","fontOffset":"0.3","textAlign":"left","minWidth":200,"width":209.43359375,"height":64,"inputText":"PRESENT BY Eric Hsiao"},"status":{"originRotation":0,"originScaleX":1,"originScaleY":0.8499999999999999,"transformMatrixInfo":{"a":1,"b":0,"c":0,"d":1,"tx":968,"ty":654}}}]}