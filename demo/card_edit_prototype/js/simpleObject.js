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

	var _r = 5;

  circle.graphics.setStrokeStyle(1).beginStroke("rgba(0,0,0,.5)").beginFill("rgba(255,255,255,.7)").drawCircle(0, 0, _r);
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
	containerLayer.on("mousedown", this.startDrag);
	containerLayer.cursor = "move";

	//////////////////////////
	//讀取狀態

	//共用
	this.setRotate(this.status.originRotation);
	this.setScale(this.status.originScaleX,this.status.originScaleY);

	if(this.objType == "image"){
		this.createImageByURL();
	}else if(this.objType == "shape"){
		this.createShape();
	}else if(this.objType == "text"){
		this.createText();
	}

	//焦點設為自己
	this.setSelect();

} ;

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

	console.log(this.status);
}

//////////////////////////////////////////

obj.handleRollOver = function(event) {
	this.getChildByName("containerLayer").alpha = event.type == "rollover" ? 0.7 : 1;
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

obj.startDrag = function(event) {
	var _parent = this.parent;
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
};

obj.addRotate = function(_rotation) {
	this.status.originRotation += _rotation;
	this.getChildByName("containerLayer").rotation = this.status.originRotation;
};

obj.setScale = function(_scaleX,_scaleY) {
	
	this.status.originScaleX = _scaleX;
	this.status.originScaleY = _scaleY;

	this.getChildByName("containerLayer").scaleX = this.status.originScaleX;
	this.getChildByName("containerLayer").scaleY = this.status.originScaleY;
};

obj.addScale = function(_scaleX,_scaleY) {
	
	this.status.originScaleX += _scaleX;
	this.status.originScaleY += _scaleY;

	if(this.status.originScaleX < 0) this.status.originScaleX = 0;
	if(this.status.originScaleY < 0) this.status.originScaleY = 0;

	this.getChildByName("containerLayer").scaleX = this.status.originScaleX;
	this.getChildByName("containerLayer").scaleY = this.status.originScaleY;
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

		//enable UI
		$('.tools-simple').css('display', 'block');

		if(this.objType == "image"){
			
		}else if(this.objType == "shape"){
			$('.tools-shape').css('display', 'block');
		}else if(this.objType == "text"){
			$('.tools-text').css('display', 'block');
		}
	}
}

obj.disSelect = function () {
	this.getChildByName("containerCenter").alpha = 0;
	onSelectObject = null;

	//disable UI
	$('.tools-option').css('display', 'none');
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