/**
 *
 * @authors Eric Hsiao
 *
 */
var stage;
var onSelectObject = null;

customEditor = function (){

	//private menbers
	var group;
	var mousedownInterval;

	var textField;
	var toolsAlphaSlider;

	//private methods
	function init () {
		console.log('main is loaded.');

		///////////////////////
		//TOOLS

		$('.btn-upGroup').click(function(event) {
			doUpGroup();
		});

		$('.btn-tools-copy').click(function(event) {
			onSelectObject.cloneToStage();
		});

		$('.btn-tools-delete').click(function(event) {
			onSelectObject.remove();
		});

		$('.btn-load').click(function(event) {
			loadJSON(mySave);
		});

		$('.btn-load-2').click(function(event) {
			loadJSON(mySave2);
		});

		$('.btn-save').click(function(event) {
			saveAsJSON();
		});

		/*

		function downloadLarge() {
			$('#DLImg').empty();
			var canvas = document.getElementById('mainCanvas');
	    var $imgs = document.getElementById('DLImg');
	    $imgs.appendChild(Canvas2Image.convertToImage(canvas, 1080, 660, 'png'));
			this.href = $('#DLImg').find('img').prop('src');
		}

		document.getElementById('download-large').addEventListener('click', downloadLarge, false);

		function downloadSmall() {
			$('#DLImg').empty();
			var canvas = document.getElementById('mainCanvas');
	    var $imgs = document.getElementById('DLImg');
	    $imgs.appendChild(Canvas2Image.convertToImage(canvas, 540, 330, 'jpg'));
			this.href = $('#DLImg').find('img').prop('src');
		}

		document.getElementById('download-small').addEventListener('click', downloadSmall, false);

		*/

		//禁用右鍵
		$('#mainCanvas').bind('contextmenu', function(e){
		    return false;
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

		///////////////

		//init Slider
		toolsAlphaSlider = $( "#alpha-slider-plugun" ).slider({
      value: 100,
      min: 1,
      max: 100,
      slide: function( event, ui ) {
        var _alpha = ui.value/100;
        onSelectObject.setAlpha(_alpha);
      }
    });

    /////////////////
    initColorPick();

    //////////////////////////

    initCanvas();
	}

	function updateToolsBar() {

		toolsAlphaSlider.slider( "value", onSelectObject.status.originAlpha*100 );
		$('.btn-tools-color-pick').find('.color-pick-selected').css('background-color', onSelectObject.option.color);
	}

	var customColor_list = ['fff','ec1c24','c1ba7d','65b0cf','cfd0d2','87898b',];
	var defaultColor_list = ['ec1c24','f48120','ffc10e','fff100','bed630','8bc53f','73c59f','00aaaa','00adee','0080c7','094ca0','211d70','231f20','58595b','808184','929497','a6a8ab','bbbdbf'];
	var isColorPickMenuOpen = false;

	function initColorPick() {

		for (var j = 0; j < customColor_list.length; j++) {
			addColorPickBtn($('.color-pick-menu-custom'),customColor_list[j]);
		};
		
		for (var j = 0; j < defaultColor_list.length; j++) {
			addColorPickBtn($('.color-pick-menu-default'),defaultColor_list[j]);
		};

		$('.color-pick-selected').click(function(event) {
			if(!isColorPickMenuOpen){
				isColorPickMenuOpen = true;
				$('.color-pick-menu').css('display', 'block');

			}else{
				isColorPickMenuOpen = false;
				$('.color-pick-menu').css('display', 'none');
			}
		});
	}

	function addColorPickBtn ($parent, _color) {
		var _btn = $('<button></<button>>').addClass('btn-tools-color-pick-list').html('<div class="color-pick"></div>')
		.appendTo($parent);
		_btn.data('value',_color);
		_btn.find('.color-pick').css('background-color', '#' + _color);
		
		_btn.click(function(event) {
			var _color = $(this).data('value');
			onSelectObject.changeShapeColor("#" + _color);
			updateToolsBar();
		});
	}

	////////////////////////////////////////////

	function initCanvas() {
		stage = new createjs.Stage("mainCanvas");

		/*var shape = new createjs.Shape();
		shape.graphics.beginFill("#fff").drawRect(0, 0, 1080, 660);
		stage.addChild(shape);*/

		var bg = stage.addChild(new simpleObject("shape",1080,660,{style:"rectangle",color:"#fff"}));
		bg.setX(540);
		bg.setY(330);
		bg.setLock();

		/////////////////

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

	function loadJSON (_save) {
		// var _json = mySave;

		console.log(_save);

		for (var i = 0; i < _save.child.length; i++) {
			var _data = _save.child[i];

			//loadData
			var _load = stage.addChild(new simpleObject(_data.objType,_data.originWidth,_data.originHeight,_data.option,_data.status));
			_load.transformMatrix = _data.status.transformMatrixInfo;

			console.log('child[' + i + '] = ' + _data.objType)
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
		},

		onObjSelected : function () {
			updateToolsBar();
		},
	}
}

customEditor = new customEditor();

var mySave = {"child":[{"objType":"image","originWidth":560,"originHeight":566,"option":{"image_url":"images/cat.jpg"},"status":{"originRotation":0,"originScaleX":0.6399999999999997,"originScaleY":0.6399999999999997,"transformMatrixInfo":{"a":1,"b":0,"c":0,"d":1,"tx":137,"ty":351}}},{"objType":"shape","originWidth":200,"originHeight":200,"option":{"style":"rectangle","color":"#666"},"status":{"originRotation":0,"originScaleX":2.6699999999999866,"originScaleY":0.019999999999999997,"transformMatrixInfo":{"a":1,"b":0,"c":0,"d":1,"tx":592,"ty":343}}},{"objType":"text","originWidth":200,"originHeight":60,"option":{"fontSize":60,"fontFamily":"Noto Sans TC","fontWeight":"700","fontOffset":"0.3","textAlign":"left","minWidth":200,"width":200,"height":96,"inputText":"PROTOTYPE"},"status":{"originRotation":0,"originScaleX":1.5300000000000005,"originScaleY":1.5300000000000005,"transformMatrixInfo":{"a":1,"b":0,"c":0,"d":1,"tx":471,"ty":274}}},{"objType":"shape","originWidth":200,"originHeight":200,"option":{"style":"circle","color":"#ccc"},"status":{"originRotation":0,"originScaleX":2.7699999999999845,"originScaleY":2.7699999999999845,"transformMatrixInfo":{"a":1,"b":0,"c":0,"d":1,"tx":977,"ty":677}}},{"objType":"shape","originWidth":200,"originHeight":200,"option":{"style":"circle","color":"#ccc"},"status":{"originRotation":0,"originScaleX":2.7699999999999845,"originScaleY":2.7699999999999845,"transformMatrixInfo":{"a":1,"b":0,"c":0,"d":1,"tx":43,"ty":-113}}},{"objType":"shape","originWidth":200,"originHeight":200,"option":{"style":"rectangle","color":"#666"},"status":{"originRotation":0,"originScaleX":2.6699999999999866,"originScaleY":0.019999999999999997,"transformMatrixInfo":{"a":1,"b":0,"c":0,"d":1,"tx":591,"ty":256}}},{"objType":"text","originWidth":200,"originHeight":60,"option":{"fontSize":20,"fontFamily":"Noto Sans TC","fontWeight":"400","fontOffset":"0.3","textAlign":"center","minWidth":200,"width":200,"height":32,"inputText":"思源黑體"},"status":{"originRotation":-811,"originScaleX":1,"originScaleY":1.2700000000000002,"transformMatrixInfo":{"a":1,"b":0,"c":0,"d":1,"tx":897,"ty":198}}},{"objType":"text","originWidth":200,"originHeight":60,"option":{"fontSize":20,"fontFamily":"Noto Sans TC","fontWeight":"100","fontOffset":"0.3","textAlign":"left","minWidth":200,"width":209.43359375,"height":64,"inputText":"PRESENT BY Eric Hsiao"},"status":{"originRotation":0,"originScaleX":1,"originScaleY":0.8499999999999999,"transformMatrixInfo":{"a":1,"b":0,"c":0,"d":1,"tx":968,"ty":654}}}]}
var mySave2 = {"child":[{"objType":"image","originWidth":420,"originHeight":660,"option":{"image_url":"images/demo2/demo-2-bg.jpg"},"status":{"originRotation":180,"originScaleX":1,"originScaleY":1,"transformMatrixInfo":{"a":1,"b":0,"c":0,"d":1,"tx":870,"ty":332}}},{"objType":"image","originWidth":420,"originHeight":660,"option":{"image_url":"images/demo2/demo-2-bg.jpg"},"status":{"originRotation":0,"originScaleX":1.03,"originScaleY":1.03,"transformMatrixInfo":{"a":1,"b":0,"c":0,"d":1,"tx":211,"ty":329}}},{"objType":"image","originWidth":346,"originHeight":55,"option":{"image_url":"images/demo2/demo-2-logo.png"},"status":{"originRotation":0,"originScaleX":1,"originScaleY":1,"transformMatrixInfo":{"a":1,"b":0,"c":0,"d":1,"tx":566,"ty":127}}},{"objType":"image","originWidth":382,"originHeight":111,"option":{"image_url":"images/demo2/demo-2-title.png"},"status":{"originRotation":0,"originScaleX":0.97,"originScaleY":0.97,"transformMatrixInfo":{"a":1,"b":0,"c":0,"d":1,"tx":555,"ty":307}}},{"objType":"text","originWidth":200,"originHeight":60,"option":{"fontSize":40,"fontFamily":"Noto Sans TC","fontWeight":"100","fontOffset":"0.3","textAlign":"left","minWidth":200,"width":200,"height":64,"inputText":"Tel | 886 0000000000"},"status":{"originRotation":0,"originScaleX":0.5999999999999996,"originScaleY":0.5999999999999996,"transformMatrixInfo":{"a":1,"b":0,"c":0,"d":1,"tx":486,"ty":410}}},{"objType":"text","originWidth":200,"originHeight":60,"option":{"fontSize":40,"fontFamily":"Noto Sans TC","fontWeight":"100","fontOffset":"0.3","textAlign":"left","minWidth":200,"width":358.639892578125,"height":64,"inputText":"Tel | 886 0000009999"},"status":{"originRotation":0,"originScaleX":0.5999999999999996,"originScaleY":0.5999999999999996,"transformMatrixInfo":{"a":1,"b":0,"c":0,"d":1,"tx":485,"ty":446}}},{"objType":"text","originWidth":200,"originHeight":60,"option":{"fontSize":40,"fontFamily":"Noto Sans TC","fontWeight":"100","fontOffset":"0.3","textAlign":"left","minWidth":200,"width":200,"height":64,"inputText":"OOOOOOOOOOOOOOOOOOOOO, Taiwan(R.O.C.)"},"status":{"originRotation":0,"originScaleX":0.5999999999999996,"originScaleY":0.5999999999999996,"transformMatrixInfo":{"a":1,"b":0,"c":0,"d":1,"tx":313,"ty":616}}},{"objType":"text","originWidth":200,"originHeight":60,"option":{"fontSize":40,"fontFamily":"Noto Sans TC","fontWeight":"100","fontOffset":"0.3","textAlign":"left","minWidth":200,"width":200,"height":64,"inputText":"No. 123 OOOOOOOOOOOOOOOOOOOOOOO"},"status":{"originRotation":0,"originScaleX":0.5999999999999996,"originScaleY":0.5999999999999996,"transformMatrixInfo":{"a":1,"b":0,"c":0,"d":1,"tx":312,"ty":583}}},{"objType":"text","originWidth":200,"originHeight":60,"option":{"fontSize":40,"fontFamily":"Noto Sans TC","fontWeight":"100","fontOffset":"0.3","textAlign":"left","minWidth":200,"width":337.79986572265625,"height":64,"inputText":"Tel | 886 0000009999"},"status":{"originRotation":0,"originScaleX":0.5999999999999996,"originScaleY":0.5999999999999996,"transformMatrixInfo":{"a":1,"b":0,"c":0,"d":1,"tx":485,"ty":487}}}]}