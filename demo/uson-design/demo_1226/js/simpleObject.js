(function() {

function simpleObject(_type,_width,_height,_option,_status) {
	this.Container_constructor();

	this.objType = _type;
	this.originWidth = _width;
	this.originHeight = _height;
	this.localX = 0;
	this.localY = 0;

	//for shape
	this.fillCommand;

	// this.transformMatrixInfo = _mtx;

	//option
	this.option = _option;

	//status
	var _mtx = new createjs.Matrix2D();
	

	if(_status != null){
		this.status = _status;
	}else{
		this.status = {
			originAlpha:1,
			originRotation:0,
			originScaleX:1,
			originScaleY:1,
			transformMatrixInfo:_mtx
		}
	}

	//event
	this.isSelected = false;

	this.setup();
}
var obj = createjs.extend(simpleObject, createjs.Container);

obj.setup = function() {

	var width = this.originWidth;
	var height = this.originHeight;

	var containerLayer = new createjs.Container();
	containerLayer.name = "containerLayer";
	
	containerLayer.regX = width*.5;
	containerLayer.regY = height*.5;

	///////////////////
	// containerLayer.x = width*.5;
	// containerLayer.y = height*.5;

	containerLayer.x = 0;
	containerLayer.y = 0;

	this.setBounds(0,0,width,height);
	this.addChild(containerLayer);

	////////////////////////
	//座標中心

	var circle = new createjs.Shape();
	circle.name = "containerCenter";
	circle.alpha = 0;
	circle.mouseEnabled = false;

	var _r = 5;

  circle.graphics.setStrokeStyle(1).beginStroke("rgba(0,0,0,.5)").beginFill("rgba(255,255,255,1)").drawCircle(0, 0, _r);
  circle.regX = circle.regY = _r*.5;
  circle.x = containerLayer.x + _r*.5;
  circle.y = containerLayer.y + _r*.5;
  this.addChild(circle);

  /////////////////////////////

	this.on("click", this.handleClick);
	this.on("rollover", this.handleRollOver);
	this.on("rollout", this.handleRollOver);

	////////////////////////////

	containerLayer.on("pressmove", this.handlePressmove);
	containerLayer.on("mousedown", this.handleMousedown);
	// containerLayer.cursor = "move";

	////////////////////////////

	//建立UI Layer
	var containerLayerUI = new createjs.Container();
	containerLayerUI.name = "containerLayerUI";
	this.addChild(containerLayerUI);

	containerLayerUI.regX = width*.5;
	containerLayerUI.regY = height*.5;

	containerLayerUI.setBounds(0,0,width,height);

 	var UI_border = new createjs.Container();
 	UI_border.name = "UI_border";
 	UI_border.mouseEnabled = false;
 	containerLayerUI.addChild(UI_border);

	//建立4控制點
	for (var i = 0; i < 4; i++) {
		var UI_scalePoint = new createjs.Container();
		UI_scalePoint.name = "UI_scalePoint_" + i;
		UI_scalePoint.containerTarget = this;
		UI_scalePoint.count = i;

		/*var circle = new createjs.Shape();
		var _r = 10;
	  circle.graphics.setStrokeStyle(1).beginStroke("rgba(0,0,0,.5)").beginFill("rgba(255,255,255,.2)").drawCircle(0, 0, _r);
	  UI_scalePoint.addChild(circle);*/
	  containerLayerUI.addChild(UI_scalePoint);
		UI_scalePoint.addEventListener("pressmove", scalePointPressmove);
	
		var UI_scalePointImg = new Image();
		UI_scalePointImg.src = 'images/ui-scalePoint.png';
		UI_scalePointImg.containerTarget = UI_scalePoint;
		UI_scalePointImg.count = i;

		UI_scalePointImg.onload = function () {
			var shape = new createjs.Shape();
			var mtx = new createjs.Matrix2D().translate(0,0);
			shape.graphics.beginBitmapFill(UI_scalePointImg, "no-repeat", mtx).drawRect(0, 0, 13, 13);
			shape.regX = shape.regY = 3;
			this.containerTarget.addChild(shape);

			
			switch(this.count){
		  	case 0: 
		  			shape.rotation = 0;
		  		break;
		  	case 1: 
		  			shape.rotation = -90;
		  		break;
		  	case 2: 
		  			shape.rotation = 90;
		  		break;
		  	case 3: 
		  			shape.rotation = -180;
		  		break;
		  }
		}

	};

	//建立旋轉控制點
	var UI_rotatePoint = new createjs.Container();
	UI_rotatePoint.name = "UI_rotatePoint";
	UI_rotatePoint.containerTarget = this;
	containerLayerUI.addChild(UI_rotatePoint);

	/*var circle = new createjs.Shape();
	var _r = 20;
	circle.graphics.setStrokeStyle(1).beginStroke("rgba(0,0,0,.5)").beginFill("rgba(255,255,255,.5)").drawCircle(0, 0, _r);
	UI_rotatePoint.addChild(circle);*/

	var UI_rotatePointImg = new Image();
	UI_rotatePointImg.src = 'images/ui-rotate.png';

	UI_rotatePointImg.onload = function () {
		var shape = new createjs.Shape();
		var mtx = new createjs.Matrix2D().translate(0,0);
		shape.graphics.beginBitmapFill(UI_rotatePointImg, "no-repeat", mtx).drawRect(0, 0, 36, 36);
		shape.regX = shape.regY = 18;
		UI_rotatePoint.addChild(shape);
	}

	UI_rotatePoint.x = 0;
	UI_rotatePoint.y = this.originHeight/2;

	UI_rotatePoint.addEventListener("pressmove", rotatePointPressmove);

	//////////////////////////
	//讀取狀態

	//共用
	this.setRotate(this.status.originRotation);
	this.setScale(this.status.originScaleX,this.status.originScaleY);

	if(this.status.originAlpha == undefined) this.status.originAlpha = 1;
	this.setAlpha(this.status.originAlpha);

	if(this.objType == "image"){
		this.createImageByURL();
	}else if(this.objType == "shape"){
		this.createShape();
	}else if(this.objType == "text"){
		this.createText();
	}

	this.updateUI();

	///////////////////////
	//焦點設為自己
	this.setSelect();
} ;

///////////////////
obj.updateUI = function () {
	var _this = this;
	var _containerLayerUI = this.getChildByName("containerLayerUI");
	
	//UI整體旋轉
	_containerLayerUI.rotation = this.status.originRotation;

	//UI底面積縮放
	var _w = this.originWidth * this.status.originScaleX;
	var _h = this.originHeight * this.status.originScaleY;

	//重設旋轉中心
	_containerLayerUI.regX = _w*.5;
	_containerLayerUI.regY = _h*.5;

	//四縮放控制點
	for (var i = 0; i < 4; i++) {
		var UI_scalePoint = _containerLayerUI.getChildByName("UI_scalePoint_" + i);

		switch(i){
	  	case 0: 
	  		UI_scalePoint.x = 0;
	  		UI_scalePoint.y = 0;
	  		break;
	  	case 1: 
	  		UI_scalePoint.x = 0;
	  		UI_scalePoint.y = _h;
	  		break;
	  	case 2: 
	  		UI_scalePoint.x = _w;
	  		UI_scalePoint.y = 0;
	  		break;
	  	case 3: 
	  		UI_scalePoint.x = _w;
	  		UI_scalePoint.y = _h;
	  		break;
	  }
	}

	//重繪框線UI_border
	var UI_border = _containerLayerUI.getChildByName("UI_border");
	UI_border.removeAllChildren();

	//框線Style
	var containerLayerUIBG = new createjs.Shape();
 	containerLayerUIBG.graphics.setStrokeStyle(1).setStrokeDash([3, 2], 0).beginStroke("rgba(0,0,0,.3)").drawRect(0, 0, _w, _h);
 	UI_border.addChild(containerLayerUIBG);

 	//移動旋轉點
 	var UI_rotatePoint = _containerLayerUI.getChildByName("UI_rotatePoint");
 	UI_rotatePoint.x = 0;
	UI_rotatePoint.y = _h/2;
}


function scalePointPressmove(event) {
	// console.log(event.stageX);

	var UI_scalePointCircle = event.target;
	var UI_scalePoint = event.target.parent;
	var containerTarget = UI_scalePoint.containerTarget;

	var point = UI_scalePoint.globalToLocal(event.stageX, event.stageY);
 	UI_scalePointCircle.x = point.x;
	UI_scalePointCircle.y = point.y;

	var count = UI_scalePoint.count;
	var dx;
	var dy;

	switch(count){
  	case 0: 
  		dx = 0 - UI_scalePointCircle.x;
			dy = 0 - UI_scalePointCircle.y;
  		break;
  	case 1: 
			dx = 0 - UI_scalePointCircle.x;
			dy = UI_scalePointCircle.y;
  		break;
  	case 2: 
  		dx = UI_scalePointCircle.x;
			dy = 0 - UI_scalePointCircle.y;
  		break;
  	case 3: 
  		dx = UI_scalePointCircle.x;
			dy = UI_scalePointCircle.y;
  		break;
  }

	var pWidth = UI_scalePoint.containerTarget.originWidth*containerTarget.status.originScaleX;
	var pHeight = UI_scalePoint.containerTarget.originHeight*containerTarget.status.originScaleY;

	var dWidth = pWidth + dx*2;
	var dHeight = pHeight + dy*2;

	var _scaleX = dWidth/UI_scalePoint.containerTarget.originWidth;
	var _scaleY = dHeight/UI_scalePoint.containerTarget.originHeight;


	if(_scaleX > 0 &&  _scaleY > 0){
	containerTarget.status.originScaleX = _scaleX;
	containerTarget.status.originScaleY = _scaleY;

	containerTarget.getChildByName("containerLayer").scaleX = containerTarget.status.originScaleX;
	containerTarget.getChildByName("containerLayer").scaleY = containerTarget.status.originScaleY;
	}

	UI_scalePointCircle.x = 0;
	UI_scalePointCircle.y = 0;

	containerTarget.updateUI();
}

function rotatePointPressmove(event) {
	var UI_rotatePointCircle = event.target;
	var UI_rotatePoint = event.target.parent;
	var containerTarget = UI_rotatePoint.containerTarget;

	var point = UI_rotatePoint.globalToLocal(event.stageX, event.stageY);
	var pWidth = containerTarget.originWidth*containerTarget.status.originScaleX;
	var pHeight = containerTarget.originHeight*containerTarget.status.originScaleY;

	var dx = point.x - (pWidth/2);
	var dy = point.y;

	var _rotate = Math.atan2(dy,dx) / (Math.PI) * 180 + 180;

	containerTarget.addRotate(_rotate);
}


///////////////////////////////////
//imge function

obj.createImageByURL = function () {
	var _this = this;
	var img = new Image();
	img.src = this.option.image_url;

	console.log(this.option.image_url);

	img.onload = function () {
		var shape = new createjs.Shape();
		var mtx = new createjs.Matrix2D().translate(0,0);
		shape.graphics.beginBitmapFill(img, "no-repeat", mtx).drawRect(0, 0, _this.originWidth, _this.originHeight);
		_this.getChildByName("containerLayer").addChild(shape);
	}
}

///////////////////////////////////
//shape function

obj.createShape = function () {
	var _this = this;
	var shape = new createjs.Shape();
	var _style = this.option.style;
	var _color = this.option.color;

	console.log(_color);

	this.fillCommand = shape.graphics.beginFill(_color).command;

	if(_style == "circle"){
		shape.graphics.drawCircle(_this.originWidth*.5, _this.originWidth*.5, _this.originWidth*.5);
	}else if(_style == "rectangle"){
		shape.graphics.drawRect(0, 0, _this.originWidth, _this.originHeight);
	}
	
	this.getChildByName("containerLayer").addChild(shape);
}

obj.changeShapeColor = function (_color) {
	this.option.color = _color;
	this.fillCommand.style = this.option.color;
}

///////////////////////////////////

obj.createText = function () {
	var _option = this.option;
	var textField = new textInput(_option);
	textField.name = 'textField';
  this.getChildByName("containerLayer").addChild(textField);
  textField.update();
  textField.updateText();

  this.textField = textField;
}

////////////////////////////////////////////

obj.handleClick = function (event) {
	this.setSelect();
	// console.log(this.status);
}

//////////////////////////////////////////

obj.handleRollOver = function(event) {
	// this.getChildByName("containerLayerUI").alpha = event.type == "rollover" ? 1 : 0.7;
	// this.getChildByName("containerCenter").alpha = event.type == "rollover" ? 1 : 0;
};

obj.handlePressmove = function(event) {
	var _parent = this.parent;
	var dx = event.stageX - _parent.mouseX;
	var dy = event.stageY - _parent.mouseY;

	var _centerMtx = _parent.getChildByName("containerCenter").getConcatenatedMatrix();

	var _mtx = _parent.getConcatenatedMatrix();
	var _tx = _mtx.tx;
	_mtx.tx = _parent.pX + dx;
	_mtx.ty = _parent.pY + dy;
	_parent.transformMatrix = _mtx;

	_parent.status.transformMatrixInfo = _mtx;
}

obj.handleMousedown = function(event) {
	var _parent = this.parent;

	if(!_parent.isSelected) _parent.setSelect();

	_parent.mouseX = stage.mouseX;
	_parent.mouseY = stage.mouseY;

	var _centerMtx = _parent.getChildByName("containerCenter").getConcatenatedMatrix();

	var _mtx = _parent.getConcatenatedMatrix();
	var _tx = _mtx.tx;
	_parent.pX = _mtx.tx;
	_parent.pY = _mtx.ty;
}


////////////////////////////////////////////
//setter

obj.setRotate = function(_rotation) {
	this.status.originRotation = _rotation;
	this.getChildByName("containerLayer").rotation = this.status.originRotation;

	this.updateUI();
};

obj.addRotate = function(_rotation) {
	this.status.originRotation += _rotation;
	this.getChildByName("containerLayer").rotation = this.status.originRotation;

	this.updateUI();
};

obj.setScale = function(_scaleX,_scaleY) {
	
	this.status.originScaleX = _scaleX;
	this.status.originScaleY = _scaleY;

	this.getChildByName("containerLayer").scaleX = this.status.originScaleX;
	this.getChildByName("containerLayer").scaleY = this.status.originScaleY;

	this.updateUI();
};

obj.addScale = function(_scaleX,_scaleY) {
	
	this.status.originScaleX += _scaleX;
	this.status.originScaleY += _scaleY;

	if(this.status.originScaleX < 0) this.status.originScaleX = 0;
	if(this.status.originScaleY < 0) this.status.originScaleY = 0;

	this.getChildByName("containerLayer").scaleX = this.status.originScaleX;
	this.getChildByName("containerLayer").scaleY = this.status.originScaleY;

	this.updateUI();
};

obj.setAlpha = function(_alpha) {
	this.status.originAlpha = _alpha;
	this.getChildByName("containerLayer").alpha = this.status.originAlpha;
	this.updateUI();
};

obj.setX = function(_x) {
	this.localX = _x;
	this.x = this.localX;

	var _mtx = this.getConcatenatedMatrix();
	this.status.transformMatrixInfo = _mtx;
};

obj.setY = function(_y) {
	this.localY = _y;
	this.y = this.localY;

	var _mtx = this.getConcatenatedMatrix();
	this.status.transformMatrixInfo = _mtx;
};

obj.setLock = function() {
	this.mouseEnabled = false;
	this.disSelect();
};

/////////////////////////////////////
//Methods

obj.setSelect = function () {
	if(this.isSelected == false){

		//未實裝群組
		if(onSelectObject !== this && onSelectObject != null){
			onSelectObject.disSelect();
		}

		onSelectObject = this;
		this.getChildByName("containerCenter").alpha = 1;
		this.getChildByName("containerLayerUI").alpha = 1;
		this.getChildByName("containerLayer").cursor = "move";

		//enable UI
		$('.tools-simple').css('display', 'inline-block');

		if(this.objType == "image"){
			
		}else if(this.objType == "shape"){
			$('.tools-shape').css('display', 'inline-block');
		}else if(this.objType == "text"){
			$('.tools-text').css('display', 'inline-block');
		}

		this.isSelected = true;
		customEditor.onObjSelected();
	}
}

obj.disSelect = function () {
	this.getChildByName("containerCenter").alpha = 0;
	this.getChildByName("containerLayerUI").alpha = 0;
	this.getChildByName("containerLayer").cursor = "default";
	onSelectObject = null;

	//disable UI
	$('.tools-option').css('display', 'none');
	this.isSelected = false;
}

obj.remove = function () {
	this.disSelect();
	this.parent.removeChild(this);
}

obj.cloneToStage = function () {
	var _status = Object.assign({}, this.status);

	var _clone = stage.addChild(new simpleObject(this.objType,this.originWidth,this.originHeight,this.option,_status));
	_clone.setX(540);
	_clone.setY(330);
}

obj.getSaveData = function () {
	var _status = Object.assign({}, this.status);
	var _data = {};

	_data.objType = this.objType;
	_data.originWidth = this.originWidth;
	_data.originHeight = this.originHeight;
	_data.option = this.option;
	_data.status = _status;
	// _data.status.transformMatrixInfo = this.getConcatenatedMatrix();

	return _data;
}

////////////////////////////////////////////

obj.drawPoint = function(_x, _y) {
	var circle = new createjs.Shape();
  circle.graphics.setStrokeStyle(1).beginStroke("rgba(0,0,0,.5)").beginFill("rgba(255,0,0,.7)").drawCircle(0, 0, 2);
  circle.x = _x;
  circle.y = _y;
  stage.addChild(circle);
}

window.simpleObject = createjs.promote(simpleObject, "Container");
}());