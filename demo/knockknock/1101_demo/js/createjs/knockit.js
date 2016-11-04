(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 86,
	height: 86,
	fps: 24,
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 圖層 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#444444").s().p("AgJFbQiXgEhqhsQhqhtAAiWQAAiaBuhtQBthuCZAAQCaAABtBuQBuBtAACaQAACQhjBrQhjBriQAMIgFA0g");
	this.shape_8.setTransform(37.6,40.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,0.3,74.7,79.7);


// stage content:
(lib.knockit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_42 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(1));

	// 圖層 2
	this.instance = new lib.frame();
	this.instance.setTransform(46.2,83.3,0.058,0.058,0,0,0,40.6,79.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:79.7,scaleX:1,scaleY:1,x:46.3,y:82.8,alpha:1},7,cjs.Ease.get(1)).to({regY:79.8,scaleX:0.92,scaleY:0.92,y:82.9},3,cjs.Ease.get(1)).to({regY:79.7,scaleX:1,scaleY:1,y:82.8},3).wait(20).to({regY:79.5,scaleX:0.09,scaleY:0.09,alpha:0},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(86.9,121.7,4.4,4.6);

})(knockit = knockit||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var knockit, images, createjs, ss;