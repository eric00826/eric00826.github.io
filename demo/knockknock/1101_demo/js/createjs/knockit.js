(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 86,
	height: 86,
	fps: 22,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAtQgDgDAAgEQAAgFADgDQAEgDAEAAQADAAACADQAEADAAAFQAAAEgEADQgCADgDAAQgEAAgEgDgAgKATIAKhCIAPAAIgJBCg");
	this.shape.setTransform(65.3,38.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAvIAIg1IgJAAIACgOIAJAAIAEgaIAPAAIgEAaIAKAAIgCAOIgKAAIgGA1g");
	this.shape_1.setTransform(61,38.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAwIAJhDIAPAAIgJBDgAAAgdQgDgDAAgFQAAgEADgDQABgDAEAAQAEAAADADQADADAAAEQAAAFgDADQgDADgEAAQgEAAgBgDg");
	this.shape_2.setTransform(56.8,38.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AALAwIgZgiIgEAiIgRAAIANheIARAAIgHAwIAZgVIAXAAIgjAcIAfAng");
	this.shape_3.setTransform(46.6,38.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAbQgJgIAAgPQAAgPALgMQAMgMAQAAQAUAAAKAQIgOAIQgGgIgLAAQgEAAgGADQgFADgDAGQgDAGAAAEQAAAIAFAEQAEAFAIAAQAMAAAGgIIANAKQgGAHgIADQgHAEgKAAQgPAAgKgJg");
	this.shape_4.setTransform(37.7,39.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAbQgJgIAAgPQAAgQAMgLQANgMANAAQAJAAAIAFQAIAEADAIQAFAHAAAKQAAANgMANQgLALgPAAQgPAAgJgJgAgMgLQgGAIAAAGQAAAIAFAEQAEAFAIAAQAJAAAFgHQAGgGAAgJQAAgHgFgFQgFgFgHAAQgIAAgGAIg");
	this.shape_5.setTransform(28.7,39.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAJAjIAHgsQgBgEgCgDQgCgDgFABQgEAAgCACQgFAEgCAFQgDAGgBALIgEAZIgRAAIAKhDIARAAIgBAHQAIgJAKAAQAIAAAHAGQAGAFAAAJIgBAMIgGAlg");
	this.shape_6.setTransform(19.9,39.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAMAwIgagiIgFAiIgQAAIANheIARAAIgHAwIAZgVIAXAAIgjAcIAfAng");
	this.shape_7.setTransform(12.1,38.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#444444").s().p("AgbgjIA3AAIgIBHg");
	this.shape_8.setTransform(38.7,76.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444444").s().p("AkJEKQhuhvAAibQAAibBuhuQBuhuCbAAQCbAABvBuQBuBuAACbQAACbhuBvQhvBuibAAQibAAhuhug");
	this.shape_9.setTransform(37.6,37.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75.3,80.4);


// stage content:
(lib.knockit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.frame();
	this.instance.setTransform(46.3,82.9,0.915,0.915,0,0,0,40.6,79.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:79.7,scaleX:1,scaleY:1,y:82.8},11,cjs.Ease.get(1)).to({regY:79.8,scaleX:0.92,scaleY:0.92,y:82.9},11,cjs.Ease.get(1)).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52.1,52.8,68.9,73.6);

})(knockit = knockit||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var knockit, images, createjs, ss;