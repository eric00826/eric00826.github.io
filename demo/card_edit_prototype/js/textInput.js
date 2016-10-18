/**
 * Created by Andrew on 3/19/16.
 */
class textInput extends createjs.Container {
  constructor(_option) {
    super();
    
    console.log(_option);

    // Text Settings
    this.placeHolder = '文字';
    this.placeHolderTextColor = '#999';
    this.textColor = '#222';

    this.cursorWidth = 2;

    this.option = {
      fontSize : 40,
      fontFamily : 'Noto Sans TC',
      fontWeight : '100',
      fontOffset : '0.3',
      textAlign : 'left',
      minWidth : 200,
      width : 200,
      height : 50,
      inputText : ''
    }

    if(_option != null){
      this.option = _option;
    }

    this.option.width = this.option.minWidth;
    this.option.height = this.option.fontSize*1.6;

    /*
    this.option.fontSize = 40;
    this.option.fontFamily = 'Noto Sans TC';
    this.option.fontWeight = '100';
    this.option.fontOffset = '0.3';
    this.option.textAlign = 'left';

    this.option.minWidth = 200;
    this.option.width = this.option.minWidth;
    this.option.height = this.option.fontSize*1.6;
    */

    // Private Settings
    this._hiddenInput = null;
    this._bg = null;
    this._placeHolderText = null;
    this._visiblePreCursorText = null;
    this._visiblePostCursorText = null;
    this._preCursorText = "";
    this._postCursorText = "";
    this._cursor = null;
    this._padding = 0;
    this._focused = false;
    this._selectedDuration = 0;

    this._setupDomNode();
    this._setupField();
    this._setupListeners();
  }

  update() {
    this._setupField();

    this.parent.parent.option = this.getOption();
  }

  _getFontStyle() {
    return this.option.fontWeight + ' ' + this.option.fontSize + 'px' + ' ' + this.option.fontFamily;
  }

  _setupDomNode() {
    this._hiddenInput = document.createElement('input');
    this._hiddenInput.type = 'text';
    this._hiddenInput.style.display = 'none';
    this._hiddenInput.style.position = 'absolute';
    this._hiddenInput.style.zIndex = -100;
    document.body.appendChild(this._hiddenInput);
  }

  _setupField() {
    this._setupVariables();
    this._setupBg();
    this._setupPlaceHolderText();
    this._setupVisibleText();
    this._setupCursor();
  }

  _setupVariables() {
    console.log('_setupVariables');
    this._padding = 0;
  }

  _setupBg() {
    if (this._bg === null) {
      this._bg = new createjs.Shape();
      this.addChild(this._bg);
    } else {
      this._bg.graphics.clear();
    }

    this._bg.graphics.setStrokeStyle(3).beginStroke("#666").drawRect(0, 0, this.option.width, this.option.fontSize* (1 + this.option.fontOffset*2));
  }

  _setupPlaceHolderText() {
    if (this._placeHolderText === null) {
      this._placeHolderText = new createjs.Text(
        this.placeHolder,
        this._getFontStyle(),
        this.placeHolderTextColor
      );
      this._placeHolderText.y = this._placeHolderText.x = this._padding;

      this._placeHolderText.textAlign = this.option.textAlign;
      this.addChild(this._placeHolderText);
    } else {
      this._placeHolderText.text = this.placeHolder;

      //update style
      this._placeHolderText.textAlign = this.option.textAlign;
      this._placeHolderText.font = this._getFontStyle();
    }
  }

  _setupVisibleText() {
    if (this._visiblePreCursorText === null) {
      this._visiblePreCursorText = new createjs.Text(
        this._preCursorText,
        this._getFontStyle(),
        this.textColor
      );
      this._visiblePreCursorText.y = this._visiblePreCursorText.x = this._padding;
      this._visiblePreCursorText.textAlign = this.option.textAlign;

      this.addChild(this._visiblePreCursorText);
    } else {
      this._visiblePreCursorText.text = this._preCursorText;

      //update style
      this._visiblePreCursorText.textAlign = this.option.textAlign;
      this._visiblePreCursorText.color = this.textColor;
      this._visiblePreCursorText.font = this._getFontStyle();
    }

    /*if (this._visiblePostCursorText === null) {
      this._visiblePostCursorText = new createjs.Text(
        this._postCursorText,
        this._getFontStyle(),
        this.textColor
      );
      this._visiblePostCursorText.y = this._visiblePostCursorText.x = this._padding;
      this.addChild(this._visiblePostCursorText);
    } else {
      this._visiblePostCursorText.text = this._postCursorText;

      //update style
      this._visiblePreCursorText.color = this.textColor;
      this._visiblePreCursorText.font = this._getFontStyle();
    }*/
  }

  updateTextarea(){
    if(this.option.textAlign == 'left'){

      //更新畫布範圍
      this._cursor.x = this._visiblePreCursorText.getMeasuredWidth();

      var _w = this._visiblePreCursorText.getMeasuredWidth();
      if(_w > this.option.minWidth){
        this.option.width = _w;
      }

      this._bg.x = 0;
      this._setupBg();

    }else if(this.option.textAlign == 'center'){
      this._cursor.x = this._visiblePreCursorText.getMeasuredWidth()*.5;

      var _w = this._visiblePreCursorText.getMeasuredWidth();
      if(_w > this.option.minWidth){
        this.option.width = _w;
      }else{
        _w = this.option.minWidth;
      }

      this._bg.x = -_w*.5;
      this._setupBg();
    }
  }

  _setupCursor() {
    if (this._cursor === null) {
      this._cursor = new createjs.Shape();
      this._cursor.graphics
        .beginFill(this.textColor)
        .drawRect(this._padding, 0, this.cursorWidth, this.option.fontSize);
      this._cursor.y = this.option.fontSize*this.option.fontOffset;
      this._cursor.visible = false;
      this.addChild(this._cursor);
    } else {
      this.removeChild(this._cursor);

      this._cursor = new createjs.Shape();
      this._cursor.graphics
        .beginFill(this.textColor)
        .drawRect(this._padding, 0, this.cursorWidth, this.option.fontSize);
      this._cursor.y = this.option.fontSize*this.option.fontOffset;
      this._cursor.visible = false;
      this.addChild(this._cursor);
    }
  }

  _setupListeners() {
    window.addEventListener('click', (e) => {
      // Page
      const pX = e.pageX;
      const pY = e.pageY;
      // Canvas
      if (this.stage === null) return;
      const cX = this.stage.canvas.offsetLeft;
      const cY = this.stage.canvas.offsetTop;
      // Local
      const lX = pX - cX - this.x;
      const lY = pY - cY - this.y;

      this._click({x: lX, y: lY});
    });
    this._hiddenInput.addEventListener('input', (e) => {
      if (this._focused) {
        e.preventDefault();
        this._preCursorText = this._hiddenInput.value;
        this.option.inputText = this._preCursorText;
        this.update();
        this.updateTextarea();
      }
    });

    this.on('tick', () => this._tick);
  }

  _click(localXY) {
    // alert('click');

    this._focused = (
      /*localXY.x > 0 &&
      localXY.y > 0 &&
      localXY.x < this.option.width &&
      localXY.y < this.option.height*/
      this.parent.parent === onSelectObject
    );

    this._selectedDuration = 0;

    this._placeHolderText.visible = !this._focused && this._hiddenInput.value === "";
    this._focused && this._hiddenInput.value === "";

    if (this._focused) {
      this._selectInput();
      this._bg.alpha = 1;
    } else {
      this._deSelectInput();
      this._cursor.visible = false;
      this._bg.alpha = 0.05;
    }
  }

  _tick() {
    if (this._focused) {
      if (this._selectedDuration % 8 === 0) {
        this._cursor.visible = !this._cursor.visible;
      }
      this._selectedDuration++;
    }
  }

  _selectInput() {
    this._hiddenInput.style.display = 'block';
    this._hiddenInput.style.left = (this.x + this.stage.canvas.offsetLeft + this._padding) + 'px';
    this._hiddenInput.style.top = (this.y + this.stage.canvas.offsetTop + this._padding) + 'px';
    this._hiddenInput.focus();
  }

  _deSelectInput() {
    this._hiddenInput.style.display = 'none';
  }

  setFontSize(_fontSize){
    this.option.fontSize = _fontSize;
    this.update();
    this.updateTextarea();
  }

  setTextAlign(_textAlign){
    this.option.textAlign = _textAlign;
    this.update();
    this.updateTextarea();
  }

  setTextColor(_textColor){
    this.textColor = _textColor;
    this.update();
    this.updateTextarea();
  }

  setFontWeight(_fontWeight){
    this.option.fontWeight = _fontWeight;
    this.update();
    this.updateTextarea();
  }

  getOption(){
    var _settings = Object.assign({}, this.option);
    return _settings;
  }

  updateText(){
    // this.option = _settings;

    if(this.option.inputText != ''){
      this._hiddenInput.value = this.option.inputText;
      this._preCursorText = this._hiddenInput.value;
      this.option.inputText = this._preCursorText;
      this.update();
      this.updateTextarea();
    }
  }
}