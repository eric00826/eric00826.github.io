(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 400,
	height: 200,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.補間動畫6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AABAEQgMgRgEgDIAPAKQARAKgBAKQgBABAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQgEAAgJgNg");
	this.shape.setTransform(8,-5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AATABQgYgJgXAIIgSAHQAUgKAUgFQAVgFAOAKQASAKAAADIgCABQgFAAgVgKg");
	this.shape_1.setTransform(-2.2,-3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AA/ARIgugMQgegHgLACQgMAAgZABIgWABIAbgDQAegEARACQAGABAoAJQAcAIADgIIAHgTQAEgJAEAKQADAIgEAJQgDALgMAAIgEAAg");
	this.shape_2.setTransform(2.7,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#444444").p("ACfgiQgGgdgRgRQgYgWgmAKQgSAGgMgFQgYgKgFgBQgFgCAAgEQAAgXgOgQQgQgQgXAAQgUAAgPANQgPAMgEAUQgBAFgFgBIgCAAQgWAAgPAQQgQAPAAAWQAAASAKANQADAEgDAEQgMANAAAQQAAAYAVAOQADACAAADQADAxAQAjQANAdALABQARADAAggQAAgwARgcQASgdAvAKQAbAFAtAOQAgADAOgJQASgMgKghQgCgIARgEQARgFgFgZg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhdCkQgLgBgNgdQgQgjgDgxQAAgDgDgCQgVgOAAgYQAAgQAMgNQADgEgDgEQgKgNAAgSQAAgWAQgPQAPgQAWAAIACAAQAFABABgFQAEgUAPgMQAPgNAUAAQAXAAAQAQQAOAQAAAXQAAAEAFACQAFABAYAKQAMAFASgGQAmgKAYAWQARARAGAdQAFAZgRAFQgRAEACAIQAKAhgSAMQgOAJgggDQgtgOgbgFQgvgKgSAdQgRAcAAAwQAAAdgOAAIgDAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.1,-17.5,36.7,35.7);


(lib.補間動畫5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AABAEQgMgRgEgDIAPAKQARAKgBAKQgBABAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQgEAAgJgNg");
	this.shape.setTransform(8,-5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AATABQgYgJgXAIIgSAHQAUgKAUgFQAVgFAOAKQASAKAAADIgCABQgFAAgVgKg");
	this.shape_1.setTransform(-2.2,-3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AA/ARIgugMQgegHgLACQgMAAgZABIgWABIAbgDQAegEARACQAGABAoAJQAcAIADgIIAHgTQAEgJAEAKQADAIgEAJQgDALgMAAIgEAAg");
	this.shape_2.setTransform(2.7,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#444444").p("ACfgiQgGgdgRgRQgYgWgmAKQgSAGgMgFQgYgKgFgBQgFgCAAgEQAAgXgOgQQgQgQgXAAQgUAAgPANQgPAMgEAUQgBAFgFgBIgCAAQgWAAgPAQQgQAPAAAWQAAASAKANQADAEgDAEQgMANAAAQQAAAYAVAOQADACAAADQADAxAQAjQANAdALABQARADAAggQAAgwARgcQASgdAvAKQAbAFAtAOQAgADAOgJQASgMgKghQgCgIARgEQARgFgFgZg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhdCkQgLgBgNgdQgQgjgDgxQAAgDgDgCQgVgOAAgYQAAgQAMgNQADgEgDgEQgKgNAAgSQAAgWAQgPQAPgQAWAAIACAAQAFABABgFQAEgUAPgMQAPgNAUAAQAXAAAQAQQAOAQAAAXQAAAEAFACQAFABAYAKQAMAFASgGQAmgKAYAWQARARAGAdQAFAZgRAFQgRAEACAIQAKAhgSAMQgOAJgggDQgtgOgbgFQgvgKgSAdQgRAcAAAwQAAAdgOAAIgDAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.1,-17.5,36.7,35.7);


(lib.泡泡03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgCAAQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQABABAAAAQAAAAABABQAAAAAAAAQAAAAAAABQgBAAAAABQAAAAgBABQgBAAAAAAQAAAAAAAAQAAgBgBAAQAAgBgBAAQAAgBAAAAg");
	this.shape.setTransform(1.1,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgKACQAKADAEgFIABgDQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQAEgBgDAGQgCAEgFACIgDACQgFAAgEgFg");
	this.shape_1.setTransform(1.8,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJAKQgEgEgBgGQABgFAEgEQAEgEAFgBQAGABAEAEQAFAEgBAFQABAGgFAEQgEAFgGgBQgFABgEgFg");
	this.shape_2.setTransform(1.5,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3,3);


(lib.泡泡01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AABAEQgMgRgEgDIAPAKQARAKgBAKQgBABAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQgEAAgJgNg");
	this.shape.setTransform(24.1,10.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AATABQgYgJgXAIIgSAHQAUgKAUgFQAVgFAOAKQASAKAAADIgCABQgFAAgVgKg");
	this.shape_1.setTransform(13.9,12.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AA/ARIgugMQgegHgLACQgMAAgZABIgWABIAbgDQAegEARACQAGABAoAJQAcAIADgIIAHgTQAEgJAEAKQADAIgEAJQgDALgMAAIgEAAg");
	this.shape_2.setTransform(18.8,17.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#444444").p("ACfAKQgGgbgRgRQgYgWgmAKQgSAGgMgFQgYgKgFgBQgFgCAAgEQAAgXgOgQQgQgQgXAAQgUAAgPANQgPAMgEAUQgBAFgFgBIgCAAQgWAAgPAQQgQAPAAAWQAAAQAKANQADAEgDAEQgMANAAASQAAAYAVAOQACABABAEQAFAGAGAGQAJAHAHABQAWAEAMgEQAFgCALgJQAbgWArAIQAZADAqALQAgADAOgJQASgMgKghQgCgIARgGQARgFgFgZg");
	this.shape_3.setTransform(16.1,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhtB0QgHgBgJgHQgGgGgFgGQgBgEgCgBQgVgOAAgYQAAgSAMgNQADgEgDgEQgKgNAAgQQAAgWAQgPQAPgQAWAAIACAAQAFABABgFQAEgUAPgMQAPgNAUAAQAXAAAQAQQAOAQAAAXQAAAEAFACQAFABAYAKQAMAFASgGQAmgKAYAWQARARAGAbQAFAZgRAFQgRAGACAIQAKAhgSAMQgOAJgggDQgqgLgZgDQgrgIgbAWQgLAJgFACQgGACgJAAQgIAAgLgCg");
	this.shape_4.setTransform(16.1,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,36.7,27.3);


(lib.把手 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").p("AgKAOQAFAEAFgCQAGgCAFgGQAEgGABgEQAAgHgFgEQgEgDgHABQgEACgFAGQgFAGAAAFQAAAGAEAEg");
	this.shape.setTransform(1.6,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAOQgEgEgBgGQAAgFAGgGQAEgGAFgCQAGgBAFADQAEAEABAHQgBAEgFAGQgEAGgGACIgDAAQgEAAgDgCg");
	this.shape_1.setTransform(1.6,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,5.2,5.4);


(lib.酒滴01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBAAIgIAAIgEAAQAAAAAAAAQgBAAAAAAQAAAAABAAQAAgBAAAAQACgCADAAQAFgBACACIAFACIALAEg");
	this.shape.setTransform(11.6,7.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAlAhIgBgCQgDgIgBgOIgBgVQgBgGgCgCIgDgDQgGgEgFAAQgGAAgIAHIgHAIIgNANQgGAHgHACQgHACABgDQABgCAGgEIAIgKQANgRAUgIQAIgCADABQAGABAFAEQAFAEABAGQABAFgEAOQgCAMADALQABAHAEADIgBAAIgCgBg");
	this.shape_1.setTransform(12.5,4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AhyAyQgFgCgCgEQgCgFACgEIAEgGQAJgGATgEQAVgEAIgEQALgGALgOQAOgUAFgFQAOgOASgDQANgCAHAGQAMAJgDAaQgEAYAGALQAJAOAVABQAMABANgGIAYgJQgEAIgXAHQgVAGgWgDQgLgCgUgGQgVgHgIgBQgpgHggAVIgQAKQgGACgEAAQgFAAgDgCg");
	this.shape_2.setTransform(12.4,5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.7,10.6);


(lib.酒滴_09 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHACIgCgBIAAgBIACAAIADAAQAGABAIgDQgGAFgHAAIgEgBg");
	this.shape.setTransform(1.5,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgJAHQgFgEACgDQABgGAFgCQAEgCAFACQAIADACADQACACgEAEQgDADgFACIgEABQgFAAgDgDg");
	this.shape_1.setTransform(1.4,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.9,2.1);


(lib.酒滴_08 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAAQADgEAJADIACABIgEAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIAAAAQgBADgDAAQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBABAAg");
	this.shape.setTransform(1.2,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgCALQgFgCgCgEQgDgFACgDIAAAAIAAgCQAFgHAJAEQAEABACACQADADgBAEQgCAFgEACQgEACgCAAIgCAAg");
	this.shape_1.setTransform(1.2,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.5,2.3);


(lib.酒滴_07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAIQgEgCgEgFQgFgDACgFQACgEAEAEIAJAHIADAEQAGADAKgCQAAACgEABQgGACgGAAQgDAAgEgCg");
	this.shape.setTransform(2.5,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGASIADgEIACgGIADgMQACgGgDgDQgCgBgDABQgDAAgDADIgFAFQgHAEgHgCQAJgBAIgHIAGgHQAFgDAFADQACADAAAFQAAAKgEAKIgGAKIgCAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_1.setTransform(4.9,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AgPAcQgSgLgBgPQAAgDABgCIAGgEQAEgCANgDQAKgCAEgEIAHgHQAEgEAGgCQAIgCADADQAGAFgFAUQgEAQgFAIQgKAOgOAAQgGAAgJgFg");
	this.shape_2.setTransform(3.6,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.2,6.7);


(lib.酒滴_06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDADQgEgBAAgCIAAgBQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABABIABACQACACACgBIAJgBQgCADgEAAIgDABIgDgBg");
	this.shape.setTransform(1.2,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgOAJQgBgDACgEIACgEQADgCAHgCQAGgCADgCQAGgEABACIgBAKQgCAHgEADQgFAEgGABIgDABQgGAAgCgFg");
	this.shape_1.setTransform(1.6,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.2,2.9);


(lib.酒滴_05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAEQgIgCAAgCQABgDAEACIAGABQADAAAEAAIAGgCQAHgCAHACIABACIAAAAIgEADIgBgEQgEAAgHABQgHAEgGAAIgCAAg");
	this.shape.setTransform(3.6,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgKAZQgPgEgGgRQgDgLAGgJQAHgLANACIALAFIAIAAIAIgDQAFgBAEACQAFACAAAEQABADgDAEIgFAGQgDADgDAGIgFAKQgJAKgJAAIgHgBg");
	this.shape_1.setTransform(3.4,2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.8,5.4);


(lib.酒滴_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHANQgKgEAFgBIAFABIAGgBQAGgCADgEQAIgFgFgJQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAABIACACIABAGQABAKgOAGQgCACgEAAIgDgBg");
	this.shape.setTransform(2.4,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgLARQgHgGgCgIQgBgHAFgHQAGgHAIgCQAHgBAHAFQAHAGACAIQABAHgFAHQgGAHgIACIgDAAQgFAAgGgEg");
	this.shape_1.setTransform(2.1,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,4.3);


(lib.酒滴_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDAcQgEgBgCgDQgCgFACgFIAFgIQAEgGAFgKIAFgRQADARgNARQgDAFAAAEQgBACACADQAAAAABABQAAAAAAABQABAAAAAAQAAAAAAAAIACAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIgBABQgDACgBAAIgCAAg");
	this.shape.setTransform(1.6,12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgKBPQgEAAgEgCQgHgHAIgNIANgWQAKgYgGgXIgOghQgIgVAMgKQAHgFACAFQABAEgBAHQgFAOAFATQADAUAGAMIAMAdQAFARgFAOQgEAJgJAFQgHAFgIAAIgCAAg");
	this.shape_1.setTransform(2.3,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.7,16);


(lib.酒滴_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQASQgDgDAFgJIAKgHQAKgKAMgGQgLAGgNAWQgEAHgEAAIgCAAg");
	this.shape.setTransform(2.3,9.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AhYA9QgDgEABgFQABgKAJgJQAKgKASgIIAggMQAngMALgYIABgCIADgFQAGgIAJgFQAHgDALgCIATgDQABAAABgBQAAAAABAAQAAAAABAAQAAABAAAAQACACgCADIgFACQglAJgOAOIgEAGIgBAAIgIAKQgJALgUALQgaAPgIAHIgQAPQgKAKgGAFQgFAEgEAAQgDAAgCgCg");
	this.shape_1.setTransform(9.2,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.4,12.7);


(lib.酒液_滿 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AABBbQgTgBgCgJQgCgOAFiRIAEgKQAEgHgBANIgGBIQgDBHALAJIAMAPQAFAFANAAIgQACIgFgBg");
	this.shape.setTransform(10,39.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgBBcQAPgJgFgUQgJgygEgzQgGhKATAVIAAA8QABA/AFATQAGAXgHALQgJAMgWAAQAJAAAHgFg");
	this.shape_1.setTransform(13.8,39.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZCHQgBgCgCggQAAgOgDgMIgtjGQADgUADAOIAPBAQAIAmADASIAJAfQAHAZADAVQACAVgBAMQAAAjgBAAIAAgBg");
	this.shape_2.setTransform(5.9,16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444444").s().p("AgiD5QgYgGAIgIQAKgKADhjQAEhogLgxQgIgmgbhbQgYhRgBgOQCqALAYgHQARgNgCAPQgCAPgOBFQgOBLgHAXQgUBGACAsQABAiAXCPQAIAHgMAEIgbAJQgVAGgPAAQgUAAgVgFg");
	this.shape_3.setTransform(10.6,25.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.2,50.9);


(lib.酒液 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOgdQALkvAYA8IgJATQgKAbgBAlIgVHYQAAijAGiVg");
	this.shape.setTransform(12,37.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AhXHjQgbgGABgHQADgVAOgDQASgEAKgYQAPgkAKhVQAQiaAFlHQACiaAMgnQAXhLBjgiIgFAPQgXAQgXAeQgvA9gDBMQgLDtgREgQgCApAEAmIALBeQAFAwADAGQAFAIgKAFQgLAFgjAEIgJABQgOAAgTgEg");
	this.shape_1.setTransform(11.5,48.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23,97.5);


(lib.酒杯 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgJAAQgOgCATgGQARgGADAGIgEACQgBABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAFACAAABQAAADgHACIgaAGQAYgHgRgFg");
	this.shape.setTransform(19.7,65.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("Ag6gEIAxADQAxACALgBQAPgBgKACQgKADgLAAIgkABQhBAAAIgJg");
	this.shape_1.setTransform(12.4,62.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AhBAAQAAAAAAAAQABgBAAAAQABAAAAgBQABAAABAAIAwAAIA3ACQAQAAAIABIh/ACQgFgBABgCg");
	this.shape_2.setTransform(12.2,60.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444444").s().p("AADAGQgEgDgCgDIAAgDIADgDIAAAFQABADACABQAAAAAAAAQABABAAAAQAAABAAAAQABAAAAABIgBABIgBgBg");
	this.shape_3.setTransform(6.2,59.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#444444").s().p("AACgDQAEgCADABQABABAAAAQABABAAAAQAAABAAABQAAAAAAAAQgBAAgTAFIgBAAQgBAAANgIg");
	this.shape_4.setTransform(18.2,59);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444444").s().p("AgiAQIgsgBQgCgBgEgFQgEgFABgCIABgCQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABAAIAJAAQAFAAABAAQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBgBgBgBIgDgCQgIgGAAgBIgCgDIAGADQALAGAMAFIAeADQAiAEAdgFQANgCAggOQAEAIgFACIgHAEQgEABgBABQAAAAAAAAQAAABABAAQAAAAABABQABAAABAAIAGgBIAHAAQAAABAAAAQAAABAAAAQAAABgBAAQgBABAAAAQgGAAgCACIgHABQgEABAEAAQAHABAIADIhIAEIgJAAIgngBg");
	this.shape_5.setTransform(12.7,64.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#444444").s().p("AhhE/QgHgJAFgWQAEgOALgbIAGgPQANgigBiMQgBhVgpiJQgLghgCg/QgDgyADgPIAAgBIABgJQACgHAGAAIAIABIBhAEQBhAAASgCQAFgBADAEQADADABAFIAAAAQAHBFgHAsQgEAagRBMQgTBSgHAnQgLBAAZCmIAGAPQAJASAEAKQAFASgDANQgEAUgeAGQgWAFgyAAQhSAAgRgYgAhtlEIAAABQgCANACAyQACA9AKAgQAqCHABBaQABCMgOAmIgGAQQgVAzAHAJQANATBMAAQAtAAATgDQAbgFAEgOQADgPgRgkQgGgLgBgFQgairALhBQAFgbAVheIAWhmQAGgpgHhEIAAgBIhzACIhigEIgDgBg");
	this.shape_6.setTransform(12.4,34.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.9,68.7);


(lib.happy_monday = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAlQgDgDAAgDQAAgEADgDQACgCAEAAQACAAACACQACACAAAFQAAAEgCACQgCACgCABQgEgBgCgCgAgIAPIAIg1IAMAAIgHA1g");
	this.shape.setTransform(67.4,28.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAmIAEgfIgSgsIAPAAIALAfIAVgfIAQAAIggAsIgDAfg");
	this.shape_1.setTransform(62.9,28.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWAmIgEgRIgdAAIgJARIgOAAIAmhLIAMAAIAUBLgAgEAIIASAAIgGgXg");
	this.shape_2.setTransform(54.9,28.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggAmIALhLIAMAAQAOAAAJAEQAIAEAGAJQAFAIAAAMQAAAKgGAJQgFAKgJAEQgIAFgNAAgAgPAYIAEAAQALAAADgBQAHgDAEgGQAEgHAAgHQAAgHgDgGQgDgFgFgDQgGgCgGAAIgEAAg");
	this.shape_3.setTransform(47.7,28.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMAmIgZgzIgIAzIgNAAIAKhLIAMAAIAaAyIAIgyIAOAAIgLBLg");
	this.shape_4.setTransform(40.1,28.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAeQgKgJAAgRQAAgQALgMQANgPATAAQAQAAAKAKQAKALAAAPQAAAKgGALQgGAKgKAGQgKAGgLAAQgRAAgJgKgAgKgVQgGADgFAIQgEAIAAAGQAAAJAGAHQAFAGAMAAQALAAAHgJQAKgJgBgKQABgLgHgGQgGgGgKAAQgGAAgHAEg");
	this.shape_5.setTransform(31.7,28.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdAmIgBgsIgXAsIgIAAIgMguIgMAuIgOAAIAThLIANAAIALA0IAbg0IAMAAIABBLg");
	this.shape_6.setTransform(21.8,28.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAmIAEgfIgSgsIAPAAIALAfIAVgfIAQAAIggAsIgDAfg");
	this.shape_7.setTransform(48.2,19.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAmIAKhLIANAAQALAAAFACQAFADAEAFQADAEAAAHQAAAHgDAFQgEAEgHADQgGACgNAAIgEAhgAgFgGQALAAACgDQAEgCAAgFIgBgEQgCgCgDgBIgIAAg");
	this.shape_8.setTransform(41.7,19.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAmIAKhLIANAAQAMAAAEACQAGADADAFQADAEABAHQAAAHgFAFQgDAEgHADQgGACgMAAIgFAhgAgFgGQAKAAAEgDQADgCAAgFIgCgEIgDgDIgKAAg");
	this.shape_9.setTransform(35.8,19.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAWAmIgEgRIgdAAIgIARIgQAAIAnhLIANAAIATBLgAgEAIIASAAIgGgXg");
	this.shape_10.setTransform(28.3,19.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAIAmIAEgjIgYAAIgFAjIgOAAIAKhLIAPAAIgEAdIAYAAIAEgdIAOAAIgKBLg");
	this.shape_11.setTransform(21.2,19.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#444444").ss(1,0,1).p("AloApQAWgSAlgJQAGgCAGAEQAGAEAAAGQAOBeBdA/QBdBAB9AAQCIAABghJQBghIAAhmQAAhlhghIQhghJiIAAQieAAhsBXQhRBDg/B/QgCAEAEACQADADADgDg");
	this.shape_12.setTransform(37,24.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#444444").s().p("AiwC3QhdhAgOhdQAAgGgGgEQgGgEgGACQglAIgWATQgDACgDgCQgEgCACgEQA/h/BRhDQBshWCeAAQCIAABgBIQBgBIAABlQAABmhgBIQhgBIiIAAQh9ABhdhAg");
	this.shape_13.setTransform(37,24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,76.1,51.4);


(lib.door_close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(1,0,1).p("Ak4BhIDpDnIGImwIjhjfg");
	this.shape.setTransform(31.4,32.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("Ak4BhIGQmoIDhDgImIGug");
	this.shape_1.setTransform(31.4,32.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,64.8,67.6);


(lib.beer_蓋子 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AAiAKIhGAAQgXgBgCgJIABgDQAEgEAXgDIABAAQBMAAAIACQAHACADAGIAAAAIgBACIgDAEQgGAFgJAAIgJgBgAgBAFIgFgCQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQABgBAGAAIA0gBIABABQACACgCACIAAAAIABgBIACgCQgBgCgEgBIhTgCQgTACgEADQABABAGACIgBgBQABgCAFgBIAAAAIAAAAQAagCADADQAFABAAAEIAAAAIAIAAg");
	this.shape.setTransform(6.2,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkAIQgUgCgCgGQAAgFAagCQBOAAAGACQAGACABADQAAAGgMACIgNgBIg5ABIgNAAgAgqAAQgGACAEABIAQACIARAAQgBgDgDgCQgCAAgNAAIgMAAgAgEABIALADIAogCQAGABgCgDIgzAAIgCAAQgBAAgBAAQAAAAgBABQAAAAAAAAQABAAAAAAg");
	this.shape_1.setTransform(6.2,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.4,2.3);


(lib.beer_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgNAOIgBgBIACgJIAAgPIADAAIAAAHIACAAIACgHIABAAIAAAHIADAAIAAgGIADAAIAAgDIAEAAIAAACIAIAAIABALIgFABIAAADIAEABIAAACIgDAAIAAAFIgFAAIABgEIgKAAIAAAFIgEAAIAAgKIgBgBIgBAMgAgDAAIAAAFIADAAIAAgDIgBgBIAAgCIgIABIABAAIADAAIACAAIAAAAgAADAEIAEAAIAAgDIgEAAgAAAgBIAAABIAEAAIAAgCgAAHAAIAEAAIAAgCIgEAAgAAAgEIAEgBIAAgCIgEAAgAAHgFIAEAAIAAgDIgEAAg");
	this.shape.setTransform(-15,13.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgNANIgBgCIABgCQAFABAAgCIgBgEIgEgBIAAgDIANAAIAAgBIgHAAIAAgBIgGABIgBgEIANgHIAEABIAMAHIAAACIgNABIAAABIAMABIgBADIgCAAIgDAFIAGABIgBADgAACAKIADAAIACgGIgFAAgAgDAKIADAAQAAAAAAgGIgGAAgAADgEIgDgDIgCADIAFAAg");
	this.shape_1.setTransform(-19.9,13.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AgDARQgCgBgEgEQgEgEgBgGQgBgHAIgIQAEgEALACIAAAAIAAADIgBAAQgIgCgEADQgGAHAAAGQABAEADAEIAFAEIAHgBIAIgCIACACQgCABgHACIgIABg");
	this.shape_2.setTransform(-21.7,9.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444444").s().p("AgCAFIgFgDIgBgCIADgEIAEgCIADAAIAFACIAAADQAAACACACQAAAAAAAAQAAABAAAAQgBAAAAABQgBAAgBAAIgEACg");
	this.shape_3.setTransform(-21.6,9.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#444444").s().p("AADAVQgIAAgGgGQgGgHAAgHQAAgKAHgGQAJgHANADIgBADQgLgDgIAGQgGAGAAAIQAAAHAFAEQAHAHAGgBQAHgBAFgDIACACQgFAEgIABg");
	this.shape_4.setTransform(-21.8,9.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444444").s().p("AgIAEQADgCACgFIADgCIAFAAQADAAABADQABACgDACQAAABAAABQgBAAAAAAQAAABgBAAQAAAAAAgBIgFACg");
	this.shape_5.setTransform(-13.4,9.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#444444").s().p("AABAUIgBgBQgMAAgBgBIgBAAIgCgCIAAgCIADABIgBAAIACABIAAAAIAMAAIABABQAMAAABgRQABgHgFgEQgEgFgIAAIgIAAIAAgDIAJAAQAIABAFAFQAGAEgBAJQgBAUgPAAg");
	this.shape_6.setTransform(-13.1,9.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444444").s().p("AgGAHIgGgDIgFgEIAGgGQACgCAEAAIAHABIAFgBQAFgBABACIACAFIAAgCQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAABQACADgBABIgCAEIgEADIgFABIgHACg");
	this.shape_7.setTransform(-17.6,8.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#444444").s().p("AgRAQQgIgHAAgHQgCgRAQgFQALgEAHABIABAAQABAAALAIIgCACIgKgHIgBAAQgHgBgKAEQgNAEABAPQAAAFAHAHQAHAHAIAAQAJAAAHgHQAFgFACgGQABgDgEgKIACgBIADAGQACAFgBAEQgCAGgGAGQgIAIgKAAQgJAAgIgIg");
	this.shape_8.setTransform(-17.4,8.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444444").s().p("AgaAPIgGgOIABgGQADgJAFgFQAJgJAOAAQARAAAJAJQAGAHAAAIIgDAAQAAgHgGgGQgHgIgQAAQgNAAgHAIQgFAFgCAHIgCAGIAGANQAJAMAPAAQAOAAAGgHQAJgIgBgLIADAAQABAMgJAJQgIAIgPAAQgRAAgKgOg");
	this.shape_9.setTransform(-17.5,8.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKgKQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAFAAQACgBAEACQAEABAAAEQAAAEgDACIAHAJIgHABIgFgKIgCAAIAAAMIgIABgAgCgCQADAAAAgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIgCAAg");
	this.shape_10.setTransform(-13.1,33.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIAQAAIAAACIgIAAIAAAHIAGABIAAABIgGAAIAAAKIAJAAIAAACg");
	this.shape_11.setTransform(-15.7,33.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIAQAAIAAACIgIAAIAAAIIAHAAIAAABIgHAAIAAAJIAJAAIAAADg");
	this.shape_12.setTransform(-18.2,33.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKANIAAgYQATgCAAAIQAAAEgEABIADABQADACAAADQAAAFgGACgAgCABIAAAIQAFABAAgFQAAgFgDAAIgCABgAgCgBQAEAAAAgEQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAgBAAAAIgCAAg");
	this.shape_13.setTransform(-20.7,33.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHANIAAgWIAEgCIAJAMIAAgNIACAAIAAAXIgGgBIgIgKIACANg");
	this.shape_14.setTransform(-11.7,30.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgCAEIACgHIADAHg");
	this.shape_15.setTransform(-14.4,30.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgBgLIAEABIAIAUIgHABIgDgFIgHABIgBAFIgDAAg");
	this.shape_16.setTransform(-14,30.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPgLIAIAAIAEALIADgLIAEABIAFAKIAFgLIACAAIgHAWIgGAAIgDgLIgDALIgEACg");
	this.shape_17.setTransform(-16.7,30.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgDAMIABgXIAFAAIAAAXgAADgLIAAAAg");
	this.shape_18.setTransform(-19.1,30.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AACAMIgBgGIgGABIgCAFIgDgBIAIgWIAFAAIAIAXgAAAAEIgCgIIgCAIIAEAAg");
	this.shape_19.setTransform(-21,30.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgCAMIgCgVIgFgCIATAAIAAADIgGABIAAATg");
	this.shape_20.setTransform(-23.2,30.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgKgRIAGgBIAAgGIgGABIAAgJIAWgFIAAAIIgHADIAAAEIAHgBIAAA3IgXAGgAgHAVIAAADIAQgDIAAgDgAAAgLIAAARIgIACIAAAEIARgEIAAgFIgHABIAAgQgAgDgBIgBgJIgEgBIAAAKIAFAAgAAFgNIAAAJIAEgBIAAgIgAAAgZIAAAFIACgBIAAgFg");
	this.shape_21.setTransform(-8.4,20);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEASIAFgkIAEAAIgFAlg");
	this.shape_22.setTransform(-10.5,22.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgEgEIADgDIAGAMIgCADg");
	this.shape_23.setTransform(-10.5,19.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEgDIADgDIAGALIgCACg");
	this.shape_24.setTransform(-10.5,17.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAAAkIAAgEIgMAAIAAgMIAIgIIgJABIAAgrIANgBIAEgEIAHAAIgDAEIAGAAIgBApIgJAAIgKAJIAGAAIAAgDIAGAAIAAACIAHAAIgBAMIgGAAIABAGgAgJgCIAAADIAHABIAAgFgAABABIAHAAIAAgEIgHAAgAABgTIAAAGIAHgBIAAgGgAgJgOIAHAAIAAgFIgHAAg");
	this.shape_25.setTransform(-13.5,20.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEgjIAJAAIAABGIgJAAgAAAAWIACAAIAAgvIgCAAg");
	this.shape_26.setTransform(-16,21);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgEACIAFgEIAEABIgFAEg");
	this.shape_27.setTransform(-21.2,19.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAAAlQgEAAAAgBIABgBQADgCAAgEIAAgCIgDAAIgMgBIAAgFIAXAAIgBgFIgWAAIgBgQIAXAAIAAgGIgXgBIAAgFIAJgBIAAgLIgKAAIAAgJIANAAIABgCIADgBIAAADIAMAAIAAAKIgKAAIABAKIAHAAIgFgFIACgDIAKAHIgEADIAAARIgYgBIAAAEIAaABIgCATQgGAIgHAAIAAAAgAAAgNIAAgKIgDAAIAAAKIADAAg");
	this.shape_28.setTransform(-19.5,21);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgDASIADgjIAFABIgFAig");
	this.shape_29.setTransform(-22.2,22.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgGgGIAGgBIAHAOIgEABg");
	this.shape_30.setTransform(-22.5,19.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgFgGIAFAAIAGAMIgDABg");
	this.shape_31.setTransform(-22.6,18);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgTAKIAAgcIAmAGIABAfgAAOAGIgCgIIgYgDIAAAGIAaAFg");
	this.shape_32.setTransform(-26.1,22.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgSALIAAgLIAPgRIAGADIgLAQIAQAEIgIgLIAGgBIANAMIAAAMg");
	this.shape_33.setTransform(-26.1,18.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AB4AUIgFgSIgFgLQgEgIgEgFQgGgIgFgDIgNgKQgPgHgSgDIgkgCIgJABIgVACIgCAAIglAJQgQAFgMAJQgMAJgIAMIgEAFIgFAJIgCAGQgEAJgBAJIAAARIgCgRQgBgJADgLIABgDIADgHIADgGIAEgGQAHgMAOgKQAOgJAQgGIAFgCIAfgHIACAAIACAAIAWgCIAJgBIAlACQAWAEANAHQAIAEAGAGQAHAFAFAIQADADAFAKIAGAMIACAHIACAMIACAmIgBAFg");
	this.shape_34.setTransform(-18.2,6.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag2AMIgtgHIgPgFIgNgGIgCgCIAAAAIAKAEIAZAEIA6AHIBJgBIA2gGIAFgBIAYgHIAIgDIADgBIgDACIgBAAIgDADIgLAGIgMACIg5AKIhEADg");
	this.shape_35.setTransform(-17.7,25.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgIA9IhGgJIgDgBIgCAAIgLgFIgJgHQgEgFgCgFIgDgLIgBgJIABgDIADg6IADA7IgBADIAAACIACAKIABAFQAFAIAIAGIAMAFIANADIA6AHIAUAAIAKAAIAggEIASgDIADgBQALgEAHgGQAIgGAEgKQADgJAAgLIAAgOIADgwIADA/QAAAMgEAJIgFAKIgIAJIgKAGIgQAGIgQADIggADg");
	this.shape_36.setTransform(-17.7,31.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhKAyIghgFIABgCQAEg4AggZQARgNAPgBIATgCQAZgCAqAEQArAEAMArQAHAUgDAVIABAHQguALg8ABIgEAAQgiAAgmgFg");
	this.shape_37.setTransform(-18,9.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#444444").s().p("Ag+DJQgegFgTgVQgUgVgEgjQgEgdAChlIAChhIAKglQASgnAqgLQAqgKApABQAVABAMACIAmAKQAnARAEAmIAHBCIAAC4IgKAnQgOAngYAFQgeAHgwABIgNAAQgmAAgYgEg");
	this.shape_38.setTransform(-17.9,20.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#444444").s().p("AgNAUQAEgDAAgFIAMAAQABAAAAAAQABAAAAAAQAAgBAAAAQABgBAAAAIAAgNQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBAAAAAAIgFAAIAAAFIgKgKIAKgJIAAAFIADAAIAHABQAFACAAAFIAAATQAAAHgIAAg");
	this.shape_39.setTransform(6.3,20.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#444444").s().p("AACAPIgDAAQgHAAgCgCQgDgBAAgEIAAgUQAAgCACgDQACgCADAAIAUAAQgEADAAAFIgMAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAABAAAAIAAANQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIAFAAIAAgFIAKAKIgKAJg");
	this.shape_40.setTransform(2.8,17.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#444444").s().p("AARALIgFgBIAAgMQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAAAIgNgBQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAAAABIAAAEIAFAAIgJAKIgKgKIAFAAIAAgDQAAgHACgCQADgDACAAIAUAAQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQACACAAADIAAAUg");
	this.shape_41.setTransform(5.7,17.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#444444").s().p("AgMAOQgBAAAAAAQgBAAAAgBQgBAAgBAAQAAgBgBAAQgCgDAAgDIAAgTIACACIAFACIABABIAAALQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAIANABQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIAAgEIgFAAIAJgKIAKAKIgGAAIABAHQAAADgCADQgDACgDAAg");
	this.shape_42.setTransform(3.5,20.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#444444").s().p("AgqBfIAAi9IBVAAIAAC9gAgjBZIBHAAIAAiyIhHAAg");
	this.shape_43.setTransform(4.5,32.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#444444").s().p("AgcAAIAAAAIA5AAIAAAAg");
	this.shape_44.setTransform(4.9,37.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#444444").s().p("AgcAAIAAAAIA5AAIAAAAg");
	this.shape_45.setTransform(4.9,29.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#444444").s().p("AgcAAIABAAIA4AAIAAAAg");
	this.shape_46.setTransform(4.9,25.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#444444").s().p("AgcAAIAAAAIA5AAIAAAAg");
	this.shape_47.setTransform(4.9,34.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#444444").s().p("AgcAAIAAAAIA5AAIAAAAg");
	this.shape_48.setTransform(4.9,33.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#444444").s().p("AgcAAIAAAAIA5AAIAAAAg");
	this.shape_49.setTransform(4.9,37.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#444444").s().p("AgfAAIAAAAIA/AAIAAAAg");
	this.shape_50.setTransform(4.6,24.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#444444").s().p("AgdABQACgBAbAAQAbAAADABg");
	this.shape_51.setTransform(4.9,35.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#444444").s().p("AgcAAIAAAAIADAAIA0AAIACAAIAAAAg");
	this.shape_52.setTransform(4.9,33.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#444444").s().p("AgaABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIAAAAIA5AAQAAAAAAAAQABAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_53.setTransform(4.9,39);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#444444").s().p("AgcABQgBgBAEAAIA0AAIADAAIgBABg");
	this.shape_54.setTransform(4.9,24.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#444444").s().p("AgaABQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAIA5AAQACABgEAAIg1AAg");
	this.shape_55.setTransform(4.9,26.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#444444").s().p("AgaABQAAAAgBAAQgBAAAAgBQAAAAAAAAQAAAAAAAAIA5AAQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_56.setTransform(4.9,31.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#444444").s().p("AgcABQgBgBAAAAQAAAAAAAAQABAAAAAAQABAAABAAIA1AAIADAAIgBABg");
	this.shape_57.setTransform(4.9,39.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#444444").s().p("AgcABQAAgBAAAAQAAAAAAAAQAAAAABAAQABAAAAAAIA1AAQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABg");
	this.shape_58.setTransform(4.9,34);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#444444").s().p("AgcABQgCgBAEAAIA1AAQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABg");
	this.shape_59.setTransform(4.9,31.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#444444").s().p("AgcABIAAgBIA5AAIAAABg");
	this.shape_60.setTransform(4.9,36.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#444444").s().p("AgZABIgDgBIACAAIA3AAQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_61.setTransform(4.8,25.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#444444").s().p("AgcACIAAgDIA5AAIAAADg");
	this.shape_62.setTransform(4.9,28.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#444444").s().p("AgcACIAAgDIA5AAIAAADg");
	this.shape_63.setTransform(4.9,28.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#444444").s().p("AgcACIAAgDIA5AAIAAADg");
	this.shape_64.setTransform(4.9,30.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#444444").s().p("Ag5BdIAAi5IB0AAIAAC5gAg0BXIBoAAIAAitIhoAAg");
	this.shape_65.setTransform(49.4,10.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#444444").s().p("AAAAFIAAgBIAAAAIAAgCIAAAAIAAgBIAFAAIAAABIgEAAIAAACIAEAAIAAAAIAAABgAgCAFIAAgFIgBABIgBgBIACAAIABgBIABAAIAAABIgBAAIAAAFgAABAAIgBAAIAAAAIAAAAIABgCIABAAIgBACIAAAAIABAAIAAAAIAAAAgAAAAAIAAAAIAAgCIAAAAIAAAAIAAABIAAABIAAAAIAAAAIAAAAgAgEgBIAAAAIABgBIABgBIABgBIABABIgDADgAAAgDIAAAAIAAgBIAFAAIAAABIAAAAg");
	this.shape_66.setTransform(0.6,14.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#444444").s().p("AAEAFIAAAAIgEAAIAAAAIAAAAIAAgEIAEAAIAAAEgAAAAEIAEAAIAAgCIgEAAgAgEAEIABAAIAAgEIABAAIAAAEIAAAAIAAgEIgBAAIAAgDIADAAIAAADIgBAAIAAAAIABAAIAAACIgBAAIAAACIABgBIAAABIgDABgAgCAAIACAAIAAgCIgCAAgAAEAAIgCAAIAAAAIgCAAIAAAAIAAAAIAAAAIABAAIAAAAIAAAAIgBgBIAAAAIAAAAIAAABIAAAAIAAAAIAAgCIAAgBIAAgBIABABIAAAAIAAAAIAAAAIAAABIADAAIABAAIgBABIgBABIgBAAIACAAIABAAIAAAAgAACAAIAAAAIABgBIAAgBIgCAAg");
	this.shape_67.setTransform(0.6,12.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#444444").s().p("AAAAFIAAgEIgBACIgCABIgBAAIACgBIACgDIAAgCIgDAAIAAgBIADAAIAAgBIAAAAIAAABIAFAAIAAABIgFAAIAAACIABACIABABIADAAIAAABIAAAAIgDgBIgCgBIAAgBIAAAEgAAEABIgCgBIgBABIgBgBIABAAIABAAIAAgBIACAAIgBAAIgBABIADAAIgBABgAAAAAIgCAAIgBABIAAgBIAAAAIABAAIABgBIABAAIgBAAIAAABIABAAIAAAAIAAABg");
	this.shape_68.setTransform(0.6,10.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#444444").s().p("AAEAEIgDgCIgBgBIAAgBIAAAAIAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBABIgCABIAAAAIgBAAIAAgBIACAAIABgBIABgBIAAgBIAAAAIgDAAIAAAAIADAAIAAgDIgDAAIAAgBIAHAAIAAABIgEAAIAAAAIAAADIAFAAIAAAAIgFAAIAAAAIABABIACABIABABIABAAIAAABIAAAAg");
	this.shape_69.setTransform(0.6,9.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#444444").s().p("AgEACIAAgBIAJAAIAAABIAAAAgAgCAAIAAgBIAFAAIABAAIgBABg");
	this.shape_70.setTransform(0.6,8.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#444444").s().p("AgDAFIgBgBIACgBIABgDIABAAIAAAAIAAABIgBACIABAAIAAAAIgDACgAAAgBIAAgCIAAAAIAAABIAAABIABAAIAAgCIABAAIAAACIACAAIAAgCIABAAIAAACgAgEgBIAAAAIACAAIAAgCIABAAIAAACIABAAIAAAAg");
	this.shape_71.setTransform(0.5,5.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#444444").s().p("AgDACIAAAAIACgBIABAAIgBgBIABAAIAAAAIAAAAIADAAIgDAAIAAAAIgCAAIAAAAIAAAAIgBAAIACAAIABgBIAAgBIABAAIAAABIgBABIAEAAIgCAAIgCACIgDABg");
	this.shape_72.setTransform(0.5,4.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#444444").s().p("AAAAFIAAgFIAAAAIAAAAIgBAAIABgCIAAgCIABAAIAAABIgBACIAAAGg");
	this.shape_73.setTransform(0.2,3.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#444444").s().p("AAEACIAAgBIABAAIAAABIAAAAIAAABgAAAADIAAgBIAAgBIABAAIAAABIgBABgAAAACIAAAAIAAgBIAAAAgAABACIAAAAIAAgBIABAAIAAAAIAAABgAABACgAgCACIAAgBIAAgBIgBAAIgBAAIAAAAIABAAIABAAIgBAAIgBgBIABAAIAAAAIABgBIABAAIAAABIAAAAIgBABIAAAAIABgBIABABIgBAAIgBAAIABAAIAAAAIAAAAIABAAIAAAAIAAAAIgBAAIAAAAIAAABIAAABIAAAAgAgEACIAAAAIABgBIAAgBIABABIgBAAIAAABIAAAAgAAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAgBIABAAIAAABIgBAAIAAAAgAADAAIABAAIAAAAgAACAAIgBgBIABAAIAAAAIAAAAIACgBIAAAAIAAABIAAAAIgCABIABAAg");
	this.shape_74.setTransform(0.6,1.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#444444").s().p("AgCACIAAgDIAFAAIAAADgAgBABIADAAIAAgBIgDAAg");
	this.shape_75.setTransform(0.6,0.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#444444").s().p("AACAFIgBgBIABAAIABAAIAAgFIABAAIAAABIAAAEIgCABgAgEgCIAAAAIAEAAIgBgCIAAAAIABACIABAAIAAgBIABgBIAAAAIABABIgBAAIAAABIADAAIAAAAg");
	this.shape_76.setTransform(2.2,11.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#444444").s().p("AABAEIgBAAIgBgBIgBAAIgBAAIgBACIAAgBIAAAAIABgDIACAAIAAACIAAAAIACgDIABgBIgFAAIAAgBIADAAIAAgCIAAAAIAAACIADAAIAAABIgBABIgCACIAAABIAAAAIAAAAIADABIACgBIAAABIgBAAIAAABg");
	this.shape_77.setTransform(2.2,10.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#444444").s().p("AAAAFIAAgEIgBADIgDABIAAgBIABgBIADgDIAAgCIgEAAIAAAAIAEAAIAAgCIAAABIAAABIAEAAIAAAAIgEAAIAAACIABACIABABIACABIABAAIgBABIgCgBIgCgCIAAgBIAAAEgAADAAIgBAAIgBAAIgBAAIABAAIABAAIAAgBIABAAIAAAAIgBABIACAAIAAAAgAAAAAIgCAAIgBAAIgBAAIABAAIABAAIABgBIABAAIgBAAIAAABIABAAIAAAAIAAAAg");
	this.shape_78.setTransform(2.2,9.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#444444").s().p("AAAACIAAgBIACAAIAAgBIAAAAIgCAAIAAAAIgBABIAAABIgBAAIAAAAIABgCIAAAAIABgBIAAAAIAAAAIAAABIAAAAIADAAIAAABIgBABIgBAAg");
	this.shape_79.setTransform(2.3,7.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#444444").s().p("AABADIgBAAIAAgBIACAAIAAABgAgBAAIgBAAIAAgCIAFAAIAAACIgBAAgAABgBIABAAIAAgBIgBAAgAAAgBIAAAAIAAgBIAAAAgAgBgBIABAAIAAgBIgBAAg");
	this.shape_80.setTransform(2.3,6.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#444444").s().p("AAAADIAAAAIAAAAIAAgBIAAgEIABAAIAAAAIAAAFIgBAAgAgBABIAAgCIABgBIAAABIAAAAIAAACg");
	this.shape_81.setTransform(2.5,5.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#444444").s().p("AABAFIgBAAIgBgCIgBgBIgBABIgBACIAAAAIAAgBIABgDIACAAIAAABIAAAAIACgCIABgBIgFAAIAAAAIADAAIAAgDIAAAAIAAADIADAAIAAAAIgBABIgCABIAAACIAAAAIAAAAIADABIACgBIAAABIgBABIAAAAg");
	this.shape_82.setTransform(2.2,4.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#444444").s().p("AAAAFIAAgEIgBACIgDABIAAAAIABgBIADgDIAAgCIgEAAIAAgBIAEAAIAAgBIAAAAIAAABIAEAAIAAABIgEAAIAAACIABACIABAAIACABIABABIgBAAIgCgBIgCgBIAAgBIAAAEgAADABIgBgBIgBABIgBgBIABAAIABAAIAAgBIABAAIAAAAIgBABIACAAIAAABg");
	this.shape_83.setTransform(2.2,3.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#444444").s().p("AAAACIAAgBIACAAIAAgBIAAAAIgCAAIAAAAIgBABIAAABIgBAAIAAgBIABgBIAAAAIABAAIAAgBIAAABIAAAAIAAAAIADAAIAAAAIgBABIgBABg");
	this.shape_84.setTransform(2.3,1.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#444444").s().p("AABADIgBAAIAAgBIACAAIAAABgAgBAAIgBAAIAAgCIAFAAIAAACIgBAAgAABgBIABAAIAAgBIgBAAgAAAgBIAAAAIAAgBIAAAAgAgBgBIABAAIAAgBIgBAAg");
	this.shape_85.setTransform(2.3,0.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#444444").s().p("AAEAFIgBgBIgBgEIABgDIgFAAIAAADIgBACIAAACIgBABIAAAAIAAgBIAAgBIABgCIAAgFIAGAAIAAAHIABABIAAAAIAAgCIABABIgBACg");
	this.shape_86.setTransform(3.8,11.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#444444").s().p("AAAAAIAAAAIAAAAg");
	this.shape_87.setTransform(3.7,10.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#444444").s().p("AAAAAIAAAAIgBABIgBAAIAAgBIACAAIAAAAIAAAAIAAAAIACAAIABAAIgBAAIgBAAIAAABIgBAAg");
	this.shape_88.setTransform(4,6.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#444444").s().p("AAAAFIAAgDIgEAAIAAgBIACAAIAAgBIACAAIAAgCIgBAAIgBABIgBABIgBgBIABAAIABgCIABgBIABABIgBAAIAAAAIAFAAIAAABIgDAAIAAACIADAAIAAAAIgDAAIAAABIADAAIABABIAAAAIgEAAIAAADgAgBABIABAAIAAgBIgBAAg");
	this.shape_89.setTransform(3.8,5.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#444444").s().p("AAAABIAAAAIAAgBIACAAIgFAAIAAAAIABgBIAFAAIAAABIgDABIAAABg");
	this.shape_90.setTransform(3.8,4.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#444444").s().p("AAAAFIAAgBIAAAAIAAABIAAAAIAAgEIABAAIAAAAIAAAEgAAAADIAAAAIAAgBIAAAAgAAAgDIAAgBIABAAIAAABIAAAAg");
	this.shape_91.setTransform(3.4,2.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#444444").s().p("AAEAFIAAgBIgBgEIAAgDIgFAAIAAADIgBACIAAACIAAABIgBAAIAAgBIABgBIAAgCIAAgFIAHAAIAAAHIAAABIAAAAIAAgCIABABIgBACg");
	this.shape_92.setTransform(5.4,14.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#444444").s().p("AAAAAIAAAAIAAAAg");
	this.shape_93.setTransform(5.3,12.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#444444").s().p("AADAFIAAgBIgGAAIAAABIAAAAIAAgFIABAAIgBABIAAACIADAAIAAgDIgCAAIAAAAIgBAAIAAgDIAAAAIABAAIAAADIACAAIAAgEIAAAAIAAAEIADAAIAAgDIABAAIgBABIAAACIAAAAIAAAAIgDAAIAAADIADAAIAAgDIABAAIAAABIAAAEg");
	this.shape_94.setTransform(5.4,10.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#444444").s().p("AgBACIAAgCIAAAAIABgBIACABIAAAAIgBACIgBAAgAAAAAIgBAAIABABIAAABIABgBIAAgBIAAAAIgBgBg");
	this.shape_95.setTransform(5.4,9.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#444444").s().p("AgCAFIAAgEIAFAAIAAAEgAgBAEIAEAAIAAgBIgEAAgAgEABIAAgBIAEAAIAAAAIgDAAIAAAAIADAAIAAAAIgDAAIAAgBIADAAIAAgBIgEAAIAAAAIAEAAIAAgBIgDAAIAAgBIADAAIAAAAIAAAAIAAAAIAEAAIAAACIABAAIAAAAIgBAAIAAACIgEAAIAAAAIAEAAIAAAAIgEAAIAAAAIAEAAIAAABgAAAgBIADAAIAAgBIgDAAgAAAgCIADAAIAAgBIgDAAg");
	this.shape_96.setTransform(5.4,6.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#444444").s().p("AADAFIgCgBIAAAAIgBABIAAAAIAAgBIAAgBIABAAIAAgBIABAAIAAABIgBAAIACACIAAAAgAgCAFIAAAAIAAgBIABAAIAAgBIABgBIAAAAIAAABIAAAAIAAAAIAAABIAAABIAAAAIAAgBIgBAAIAAABgAABgBIAAAAIgBgBIgBABIgBABIAAgBIAAAAIAAAAIABAAIABgBIAAgBIAAgBIAAAAIAAABIAAAAIABABIABABIABAAIAAAAIAAABg");
	this.shape_97.setTransform(5.5,5.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#444444").s().p("AgCADIAAgBIACAAIAAgCIgBAAIAAAAIABAAIAAgCIAAAAIAAACIACAAIAAAAIgCAAIAAACIADAAIAAABg");
	this.shape_98.setTransform(5.5,4.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#444444").s().p("AAAADIAAgBIAAgCIAAAAIAAAAIAAAAIAAgDIAAABIAAAAIAAACIABAAIAAAAIAAAAIgBAAIAAACIABgBIAAABIgBACIAAAAg");
	this.shape_99.setTransform(5,3.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#444444").s().p("AADAFIAAAAIgFAAIAAAAIAAAAIAAgEIAGAAIAAAEgAAAAEIADAAIAAgBIgDAAgAgCAEIACAAIAAgBIgCAAgAAAADIADAAIAAgBIgDAAgAgCADIACAAIAAgBIgCAAgAAEAAIAAgCIgHAAIAAACIgBAAIAAgCIABgBIADAAIAAgBIAAABIAAAAIAFAAIAAADgAgCgBIAAgBIAFAAIAAABg");
	this.shape_100.setTransform(5.3,2.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#444444").s().p("AgBAFIAAAAIABAAIAAgBIAAgBIgDAAIgBgBIABAAIADAAIAAgBIAAAAIABgBIgDAAIAAAAIAEAAIABAAIgDABIAAABIAEAAIAAABIgEAAIAAACIAAAAgAACAAIgCgBIAAABIAAAAIAAgBIAAABIgCAAIgBAAIAAAAIgBAAIAAAAIABAAIACAAIABgCIgDAAIAAAAIADAAIAAgCIAAAAIAAACIAEAAIAAAAIgEAAIACACIABAAIACAAIgBAAIAAAAg");
	this.shape_101.setTransform(5.4,0.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#444444").s().p("AAAAFIAAgBIACAAIAAAAIAAABgAgEAEIABgCIAAgFIADAAIAAgBIABAAIAAABIAEAAIAAABIgHAAIAAACIgBAEIAAABg");
	this.shape_102.setTransform(6.9,14.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#444444").s().p("AgBAFIAAgDIAAgBIgBAAIABgBIABAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIABAAIAAAAIAAAAIACAAIAAAAIgCAAIAAABIACAAIAAABIgCAAIAAAAIACAAIAAABIgCAAIAAABIACAAIAAAAIgDAAIAAABgAAAAEIAAAAIAAgBIAAAAgAAAACIAAAAIAAAAIAAAAgAgBAAIAAgCIABAAIAAgBIgBAAIAAAAIABAAIAAgBIAAAAIAAACIAAABIAAABgAABAAIAAgBIABAAIAAABgAAAgCIAAgCIABAAIAAABIACAAIAAAAIgCAAIAAABg");
	this.shape_103.setTransform(7.1,12.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#444444").s().p("AgCACIAAgDIAFAAIAAADgAgBABIADAAIAAgBIgDAAg");
	this.shape_104.setTransform(7,11.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#444444").s().p("AAAAFIAAgBIAAAAIABAAIAAgCIgBAAIAAgBIAFAAIAAABIgDAAIAAACIgBABgAgCAFIAAgEIgBABIgBAAIACgDIgCAAIAAAAIACAAIAAgDIABAAIAAADIABAAIAAAAIgBAAIAAABIABAAIAAABIgBgBIAAAFg");
	this.shape_105.setTransform(6.9,10.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#444444").s().p("AADAFIAAgBIABAAIAAgBIAAgCIgCAAIAAABIgBACIAAABIgBAAIAAgBIABgBIAAgCIAAgFIAEAAIAAAIIgBABgAACAAIAAAAIACAAIAAAAIgCAAgAACgBIACAAIAAgCIgCAAgAgDAFIgBgBIABgBIABgBIAAAAIABABIAAAAIgCACg");
	this.shape_106.setTransform(6.9,9.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#444444").s().p("AADAEIAAAAIgEAAIAAAAIgBAAIAAgHIAGAAIAAAHgAgBADIAEAAIAAgDIgEAAgAgBAAIAEAAIAAgDIgEAAg");
	this.shape_107.setTransform(7,8.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#444444").s().p("AADAEIAAgBIgCABIgBABIAAgBIAAAAIACgCIgBAAIAAgCIAAAAIAAAAIAAAAIABABIABABIABgDIgDAAIAAABIgBAAIAAAAIAAAAIAAgBIABgBIAAgCIABAAIAAABIgBABIAEAAIAAABIgBAAIAAABIgBACIACACIAAABgAgEAAIABAAIABgBIABABIgBAAIAAAAIgBAAg");
	this.shape_108.setTransform(7,6.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#444444").s().p("AADAFIAAgBIABAAIAAgBIAAgCIgCAAIAAABIgBACIAAABIgBAAIAAgBIABgBIAAgCIAAgFIAEAAIAAAIIgBABgAACAAIAAAAIACAAIAAAAIgCAAgAACgBIACAAIAAgCIgCAAgAgDAFIgBgBIABgBIABgBIAAAAIABABIAAAAIgCACg");
	this.shape_109.setTransform(6.9,3.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#444444").s().p("AADAEIAAAAIgEAAIAAAAIgBAAIAAgIIAGAAIAAAIgAgBADIAEAAIAAgDIgEAAgAgBAAIAEAAIAAgDIgEAAg");
	this.shape_110.setTransform(7,2.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#444444").s().p("AgCAFIAAgBIACAAIAAgBIgBAAIAAgBIABAAIAAgBIgBAAIAAABIAAAAIAAAAIgBAAIABgBIAAgBIABAAIAAAAIAAAAIAAAAIABAAIAAAAIADAAIAAABIgDAAIAAABIADAAIAAABIgDAAIAAABIAEAAIAAABgAACAAIgCAAIAAAAIgBAAIAAAAIgBAAIABAAIABAAIAAAAIgBgBIAAgBIgCAAIAAAAIADAAIAAgCIAAAAIAAAAIAAAAIAAACIAFAAIAAAAIgDAAIABABIAAAAIgBAAIAAAAIgBABIAAAAIACAAIAAAAg");
	this.shape_111.setTransform(7,0.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#444444").s().p("AgBACIAAAAIABgBIAAgBIAAAAIgBAAIAAAAIABAAIAAgBIAAAAIAAAAIAAABIACAAIAAAAIAAAAIgCAAIABAAIABABIgBABIgBgCIAAAAIAAABIgBABg");
	this.shape_112.setTransform(8.3,9.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#444444").s().p("AACAFIAAgBIgDAAIAAABIgBAAIAAgGIAAAAIACAAIAAgCIgCAAIAAgBIAFAAIAAABIAAAAIgDAAIAAACIACAAIABAAIAAAGgAgBADIADAAIAAgBIgDAAgAgBABIADAAIAAAAQgBAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAAAIAAAAIAAAAIgBABIAAgBgAAAAAIACAAIAAAAIgCAAgAAAgBIAAAAIAAgCIAAAAg");
	this.shape_113.setTransform(8.7,8.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#444444").s().p("AAAACIAAgCIgCAAIAAAAIAAAAIACAAIAAgBIABAAIAAABIAAAAIACAAIAAAAIgCAAIAAACg");
	this.shape_114.setTransform(8.7,7.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#444444").s().p("AAAADIAAgCIAAAAIAAACgAAAAAIAAgCIAAAAIAAACg");
	this.shape_115.setTransform(8.5,5.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#444444").s().p("AAAACIAAAAIABgCIAAAAIABAAIAAABIgBAAIgBABIAAAAgAgBAAIAAgBIABAAIAAABg");
	this.shape_116.setTransform(8.5,4.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#444444").s().p("AAAAFIAAgFIAAABIAAABIAAAAIAAgCIAAAAIAAAAIAAgBIAAAAIAAgCIAAABIAAgBIAAAAIAAAAIABgBIAAABIAAAAIAAAAIgBAAIAAACIABAAIAAABIgBAAIAAAAIABAAIAAABIAAAAIgBgBIAAAFg");
	this.shape_117.setTransform(8.2,3.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#444444").s().p("AABACIAAAAIgBAAIAAAAIgBAAIAAgDIADAAIAAADgAAAABIABAAIAAgBIgBAAg");
	this.shape_118.setTransform(8.3,2.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#444444").s().p("AgCAFIAAgBIACAAIAAgBIgBAAIAAgBIABAAIAAgBIAAAAIgBABIAAAAIAAAAIgBAAIABgBIABgBIAAAAIAAAAIAAAAIAAAAIABAAIAAAAIADAAIAAABIgDAAIAAABIACAAIAAABIgCAAIAAABIAEAAIAAABgAACAAIgCAAIAAAAIgBAAIAAAAIgBAAIABAAIABAAIAAAAIgBgBIAAgBIgDAAIAAAAIAEAAIAAgCIAAAAIAAAAIAAAAIAAACIAFAAIAAAAIgDAAIAAABIAAAAIAAAAIAAAAIgBABIAAAAIACAAIAAAAg");
	this.shape_119.setTransform(8.6,0.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#444444").s().p("AABAFIAAgDIgBABIAAAAIgBgBIABgBIABAAIAAgBIgBAAIgBgBIABAAIABAAIAAgDIABAAIAAAJg");
	this.shape_120.setTransform(44.9,41.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#444444").s().p("AACAFIAAgBIABAAIAAgBIAAgEIgGAAIAAAGIAAAAIAAgHIADAAIAAgBIAAgBIAAABIAAAAIAAAAIAAABIAEAAIAAAAIAAAGIgBABg");
	this.shape_121.setTransform(45.2,39.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#444444").s().p("AAAACQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIAAgCIABAAIAAABIAAAAIAAAAIABAAIABAAIgBAAIgBAAIAAAAIAAAAIAAABIABAAIABgBIAAAAIAAAAIAAABIgBABg");
	this.shape_122.setTransform(45.5,38.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#444444").s().p("AAAAFIgBgBIAAgBIgBABIgBABIgBAAIAAgBIABAAIABgBIAAgCIABAAIAAAAIAAAAIAAABIAAABIABABIAAAAIAAgEIgEAAIAAAAIAIAAIAAAAIgEAAIAAACIADAAIAAAAIgDAAIAAACIAFAAIgBABgAgCAAIAAgEIAFAAIAAAEgAgBAAIADAAIAAgBIgDAAgAgBgCIADAAIAAgBIgDAAg");
	this.shape_123.setTransform(45.2,37.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#444444").s().p("AgBAFIAAgIIABgBIABAAIABABIAAAAIgCADIACAAIAAADIgCABIAAgBIAAAAIAAAAIABgBIAAAAIAAgCIgBAAIAAAAIABgDIgBAAIAAAIg");
	this.shape_124.setTransform(45.5,36.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#444444").s().p("AAAAFIAAgDIgBABIAAgBIABgBIAAgFIABAAIAAAFIABgBIAAAAIAAABIAAAAIgBAAIAAAEg");
	this.shape_125.setTransform(45.5,35.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#444444").s().p("AACABIgBgBIAAAAIgBAAIAAABIAAAAIAAABIAAgBIAAgBIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIgBAAIAAAAIABAAIAAAAIAAgBIAAAAIAAABIAEAAIABAAIgCAAIAAAAIAAAAIgCAAIAAAAIACAAIABABIABAAIgBABgAgEACIABgBIABgBIABAAIAAAAIgBACIgBAAg");
	this.shape_126.setTransform(45.2,33.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#444444").s().p("AAAAFIAAgBIABAAIAAgBIABgEIgCAAIAAAAIAAABIgBAAIAAAAIABgBIAAgBIAAgBIAAgBIAAABIAAAAIAAABIACAAIAAAEIAAACIgBABg");
	this.shape_127.setTransform(45.4,32.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#444444").s().p("AAAACIAAgBIAAgBIAAAAIAAAAIAAgBIABAAIAAAAIAAABIgBACIAAAAg");
	this.shape_128.setTransform(45.3,31.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#444444").s().p("AAAABIAAgBIAAAAIABAAIAAABg");
	this.shape_129.setTransform(45.6,30.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#444444").s().p("AACAAIABAAIAAACIAAABIABABIgBAAIgBABgAAAAAIAAAAIAAAAIgBAAIAAAAIAAAAIAAAAIgBAAIgBAAIAAgBIADAAIAAgBIgCAAIAAAAIACAAIAAgBIAAAAIAAAAIAAABIAAAAIAAAAIAAAAIAAABIABAAIAAABIgBAAIAAAAIAAAAg");
	this.shape_130.setTransform(45.1,29.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#444444").s().p("AAAAEIAAgBIABAAIgBAAIAAAAIAAABIAAAAIAAAAIgBAAIgBAAIAAAAIABAAIABAAIAAgBIgBAAIAAgFIABAAIAAgBIAAAAIgBAAIAAgBIAEAAIAAABIgDAAIAAABIACAAIAAAFIgBAAIABABIABAAIgBABgAAAACIABAAIAAgBIgBAAgAAAAAIABAAIAAAAIgBAAgAAAAAIABAAIAAgBIgBAAg");
	this.shape_131.setTransform(45.4,28);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#444444").s().p("AgCABIAAgBIAFAAIAAABgAgEABIAAAAIABgBIAAAAIABAAIABAAIAAAAIAFAAIAAAAIgGAAIAAABIgBAAg");
	this.shape_132.setTransform(45.2,26.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#444444").s().p("AAEAEIgDgCIgBgBIAAgBIAAAAIAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIAAABIgCABIAAAAIgBAAIAAgBIACAAIABgBIABgBIAAgBIAAAAIgDAAIAAAAIADAAIAAgDIgDAAIAAgBIAHAAIAAABIgEAAIAAAAIAAADIAFAAIAAAAIgFAAIAAAAIABABIACABIABABIABAAIAAABIAAAAg");
	this.shape_133.setTransform(45.2,25.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#444444").s().p("AgDAFIAAgBIADAAIAAgCIgCAAIAAgBIAAAAIACAAIAAgBIgCAAIAAAAIgBAAIAAAAIgBAAIAAAAIACAAIACgDIgBAAIAAgBIABAAIABADIAEABIAAAAIgCAAIAAAAIgDAAIAAABIADAAIAAABIgDAAIAAACIAFAAIAAABgAAAgCIgBACIgBAAIAFAAIgCgBIgBgCg");
	this.shape_134.setTransform(45.2,23.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#444444").s().p("AgEACIAAAAIAAgCIACgBIAAAAIABABIgBAAIAAAAIgBACgAACAAIgBAAIABgBIABABIACAAIAAAAIAAABg");
	this.shape_135.setTransform(46.8,40);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#444444").s().p("AAAAFIAAgCIgDAAIAAgBIADAAIAAgBIgCAAIAAgBIABAAIABAAIABAAIAAABIgBAAIAAABIABAAIAAABIgBAAIAAACgAACAAIABAAIAAABIAAACIABAAIgBABIgBAAgAAAAAIAAAAIAAAAIgBAAIAAAAIAAAAIAAAAIgBAAIgBAAIAAgBIADAAIAAgBIgCAAIAAgBIACAAIAAgBIAAAAIAAABIAAAAIAAAAIAAABIAAAAIAAABIABAAIAAABIgBAAIAAAAIAAAAg");
	this.shape_136.setTransform(46.7,37.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#444444").s().p("AAAADIAAAAIABgBIgBAAIAAABIAAAAIAAAAIAAABIgBAAIgBAAIAAAAIABAAIABgBIAAgBIgBAAIAAgEIABAAIAAgBIAAAAIgBAAIAAgBIAEAAIAAABIgDAAIAAABIACAAIAAAEIgBAAIABABIABABIgBABgAAAACIABAAIAAgBIgBAAgAAAAAIABAAIAAAAIgBAAgAAAAAIABAAIAAgBIgBAAg");
	this.shape_137.setTransform(47,36.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#444444").s().p("AgCABIAAgBIAGAAIAAABgAgDABIAAAAIAAgBIAAAAIABAAIABAAIAAAAIAGAAIAAAAIgHAAIAAABIgBAAg");
	this.shape_138.setTransform(46.8,34.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#444444").s().p("AAEAFIgDgCIgBgCIAAgBIAAAAIAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgCABIgBAAIAAgBIAAAAIACgBIABgBIABgBIAAgBIAAAAIgEAAIAAAAIAEAAIAAgDIgDAAIAAAAIAHAAIAAAAIgEAAIAAABIAAACIAFAAIAAAAIgFAAIAAAAIABABIACACIABABIABAAIAAAAIAAABg");
	this.shape_139.setTransform(46.8,34);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#444444").s().p("AACAFIAAgBIABAAIABgBIAAgCIgDAAIAAABIAAACIgBABIAAAAIAAgBIAAgBIABgCIAAgFIAEAAIAAAIIgBABgAACAAIACAAIAAAAIgCAAgAACgBIACAAIAAgCIgCAAgAgEAEIABgBIABgBIABABIAAAAIgCACg");
	this.shape_140.setTransform(46.8,32.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#444444").s().p("AAEAFIAAgFIAAgEIABAAIAAABIAAAIgAABAFIAAgBIAAgIIABAAIAAADIAAAAIACABIgBAAIgBAAIAAAFgAgEAEIAAgBIACgBIAAgBIABAAIAAABIgBABIgBABIAAABg");
	this.shape_141.setTransform(46.8,30.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#444444").s().p("AAEAFIgBgCIgBAAIAAAAIgCACIAAAAIgDAAIAAAAIgBAAIAAgIIAEAAIAAABIgDAAIAAAGIADAAIAAAAIABAAIAAgBIABgCIAAgCIABAAIAAACIAAABIABACIABABIgBAAgAADAAIABgBIgDAAIAAABIAAAAIgBAAIAAAAIABgBIAAgBIAAgBIAAgBIABABIAAABIADAAIAAAAIgBACg");
	this.shape_142.setTransform(46.8,29.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#444444").s().p("AAAACIAAAAIAAAAIAAAAIAAAAIAAgCIABAAIAAAAIAAACgAAAABIAAAAIAAgBIAAAAgAAAAAIAAgBIABAAIAAAAIAAABg");
	this.shape_143.setTransform(46.5,24.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#444444").s().p("AgDAFIgBAAIAAgGIAEAAIAAgBIgEAAIAAgBIAEAAIAAgBIAAAAIAAABIAEAAIAAABIgEAAIAAABIAEAAIAAAFIgBABIgBAAIAAgBIABAAIAAgEIgCAAIABAAIgBAAIABAAIAAAAIgCAAIAAABIADAAIAAABIgBABIgCAAIAAACIAAAAIAAgCIgCAAIAAgCIACAAIAAgBIgCAAIAAAAIACAAIgBAAIABAAIAAAAIAAAAIAAAAIABAAIAAAAIgBAAIgDAAIAAAFg");
	this.shape_144.setTransform(48.4,34);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#444444").s().p("AAAAFIAAgFIAAAAIAAAAIAAgCIAAgCIAAAAIABABIgBACIAAAGg");
	this.shape_145.setTransform(48,32.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#444444").s().p("AACAEIgCgCIAAABIAAABIgDAAIAAAAIgBAAIAAAAIADgBIABgBIAAgCIgCgCIABAAIABACIAAABIAAAAIABgBIABAAIABgDIgFAAIAAgBIAFAAIABABIgCADIgBABIgBABIABAAIAEACIAAAAg");
	this.shape_146.setTransform(48.4,31.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#444444").s().p("AACAFIAAgBIAAgDIgBAAIAAABIgBACIAAABIAAAAIgBgBIABAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAgFIAEAAIAAAFIgBAAIAAADIABAAIAAgBIABAAIgBACgAAAAAIADAAIAAAAIgDAAgAAAAAIADAAIAAgBIgDAAgAAAgCIADAAIAAgBIgDAAgAgEADIAAgBIACAAIAAgCIgCAAIAAAAIACAAIAAgCIgCAAIAAgBIAEAAIAAAAIAAABIgCAAIAAACIACAAIAAAAIgCAAIAAACIACgBIAAAAIAAABIgDABg");
	this.shape_147.setTransform(48.4,29.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#444444").s().p("AAAAFQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIAAgIIABAAIAAAEIAAgBIABgBIABABIgBAAIgBABIAAADIAAABIABAAIAAgCIABAAIAAABIgBABIAAABg");
	this.shape_148.setTransform(48.7,26.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#444444").s().p("AgCAFIAAgFIgBAAIAAAAIABgCIABgCIAAAAIAAABIAAACIAAAGgAAEAEIAAgBIABAAIAAABg");
	this.shape_149.setTransform(48.4,25.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#444444").s().p("AgCAEIAAgDIAAAAIAFAAIAAADgAgBADIADAAIAAAAIgDAAgAAAgCIAAgBIAAAAIABABg");
	this.shape_150.setTransform(48.4,24.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#444444").s().p("AABADIgCABIAAAAIgBgBIABAAIABgCIAAgBIgCAAIABgBIABABIAAgEIABABIgBAAIAAADIAAAAIABgBIABABIgBAAIgBADIABgBIAAAAIAAgBIABACIABABIgBABg");
	this.shape_151.setTransform(49.8,41.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#444444").s().p("AADACIAAgBIAAAAIAAABIABAAIgBABgAgBADIAAgCIABAAIAAABIAAABgAAAACIAAgBIABAAIAAAAIgBABIAAAAgAgCABIAAgBIAAABIABABIgBAAgAABAAIABAAIABAAgAgBAAIAAAAIAAAAIAAgBIABAAIAAABIAAAAIAAAAIAAAAgAgBgBIAAgBIABAAIAAABg");
	this.shape_152.setTransform(50.2,39.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#444444").s().p("AAAAFIgBgBIAAgBIgBABIgBABIgBAAIAAgBIABAAIABgBIAAgCIABAAIAAAAIAAAAIAAABIAAABIABABIAAAAIAAgEIgEAAIAAAAIAIAAIAAAAIgEAAIAAACIADAAIAAAAIgDAAIAAACIAFAAIgBABgAgCAAIAAgEIAFAAIAAAEgAgBAAIADAAIAAgBIgDAAg");
	this.shape_153.setTransform(50,38.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#444444").s().p("AAAAFIAAgCIgDAAIAAgBIADAAIAAgBIgCAAIAAgBIABAAIABAAIABAAIAAABIgBAAIAAABIABAAIAAABIgBAAIAAACgAACAAIABAAIAAABIAAACIABAAIgBABIgBAAgAAAAAIAAAAIAAAAIgBAAIAAAAIAAAAIAAAAIgBAAIgBAAIAAgBIADAAIAAgBIgCAAIAAgBIACAAIAAgBIAAAAIAAABIAAAAIAAAAIAAABIAAAAIAAABIABAAIAAABIgBAAIAAAAIAAAAg");
	this.shape_154.setTransform(49.9,35.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#444444").s().p("AgCAFIAAgBIABAAIABAAIAAgBIgBAAIAAgFIABAAIAAAAIAAgBIgBAAIAAgBIAEAAIAAABIgDAAIAAABIACAAIAAAFIgCAAIAAAAIAAABIAAAAIAAAAIgBABgAAAACIABAAIAAgBIgBAAgAAAAAIABAAIAAAAIgBAAgAAAAAIABAAIAAgBIgBAAg");
	this.shape_155.setTransform(50.2,33.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#444444").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_156.setTransform(49.7,31.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#444444").s().p("AAAAFIAAgBIABAAIAAgBIABgEIgCAAIAAAAIAAABIgBAAIAAAAIABgBIAAgBIAAgCIAAAAIAAAAIAAABIAAABIACAAIAAAEIAAACIgBABg");
	this.shape_157.setTransform(50.2,30.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#444444").s().p("AADAFIAAgBIgGAAIAAABIAAAAIAAgFIABAAIAAABIgBAAIAAACIADAAIAAgDIgCAAIAAAAIgBAAIAAgDIAAAAIABAAIAAAAIAAADIACAAIAAgEIAAAAIAAAEIADAAIAAgDIABAAIAAADIgBAAIAAAAIgDAAIAAADIADAAIAAgDIABAAIAAABIAAAEg");
	this.shape_158.setTransform(50,27.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#444444").s().p("AAAABIAAgBIAAAAIABAAIABAAIAAAAIADAAIAAAAIgCAAIAAAAIAAABgAgBAAIgBAAIgBABIgBAAIAAgBIACAAIAAAAIABAAIAAAAIABAAIAAAAIAAAAIAAAAIAAABg");
	this.shape_159.setTransform(50,26.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#444444").s().p("AABADIgBAAIABgBIABAAIAAACgAABAAIAAgBIABgCIAAAAIABABIgBAAIAAABIgBAAIABABIABAAIgBAAgAAAAAIgCAAIAAgBIABgCIABAAIAAABIAAAAIgBABIAAABIABAAIAAAAg");
	this.shape_160.setTransform(50.2,25.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#444444").s().p("AAAACQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgBIgDAAIAAgBIAGAAIAAABIgDAAIAAACIACAAIABgBIABgBIAAAAIAAACgAAAAAIACAAIAAAAIgCAAgAAAAAIACAAIAAgBIgCAAgAgCAAIACAAIAAgBIgCAAg");
	this.shape_161.setTransform(50.1,24.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#444444").s().p("AADAFIAAgBIgGAAIAAABIAAAAIAAgHIADAAIAAgCIAAAAIAAACIAEAAIAAAHgAAAADIADAAIAAgCIgDAAgAgDADIADAAIAAgCIgDAAgAAAAAIADAAIAAgBIgDAAgAgDAAIADAAIAAgBIgDAAg");
	this.shape_162.setTransform(50,23.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#444444").s().p("AAEAFIgBgCIgFACIgBAAIAAgBIABAAIACgDIAAgBIgEAAIAAAAIAEAAIAAgBIgDAAIAAgBIADAAIAAgCIAAAAIAAACIAEAAIAAABIgEAAIAAABIAFAAIAAAAIgFAAIgBAEIAEgBIgBgCIAAAAIADADIAAABg");
	this.shape_163.setTransform(51.6,41.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#444444").s().p("AACACIAAgBIABAAIAAABIAAAAIAAABgAAAACIAAgBIABAAIAAAAIgBABIAAAAgAgCABIAAgBIAAABIABABIgBAAgAAAACIAAgBIAAAAIAAABgAgBAAIAAAAIAAAAIAAgBIABAAIAAABIAAAAIAAAAIAAAAIAAAAIAAAAgAABAAIABAAIAAAAgAAAAAIAAgBIAAAAIABAAIABgBIAAAAIAAABIgBABIAAAAgAgBgBIAAgBIABAAIAAABg");
	this.shape_164.setTransform(51.8,39.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#444444").s().p("AAEACIAAgBIABAAIAAABIAAAAIAAABgAACACIAAgBIABAAIAAAAIgBABIAAAAgAgBABIAAgBIAAABIABABIgBAAgAgEACIABAAIAAgCIABABIgBAAIAAABIAAAAgAAAAAIAAAAIAAAAIAAgBIABAAIAAABIgBAAIABAAIgBAAIABAAIgBAAgAADAAIABAAIAAAAgAAAgBIAAgBIABAAIAAABg");
	this.shape_165.setTransform(51.6,37.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#444444").s().p("AgBAEIAAgBIACAAIAAgCIgBAAIAAgBIAFAAIAAABIgDAAIAAACIADAAIAAABIAAAAgAgCAEIAAgEIgBAAIgBAAIACgBIABgBIAAAAIABAAIgBABIgBABIAAAEgAAEAAIgBgBIAAAAIABgCIAAAAIABAAIgBABIAAABIABABIAAAAgAAAAAIAAgBIAAAAIAAgCIAAAAIAAAAIAAABIAAABIAAAAIAAABIAAAAg");
	this.shape_166.setTransform(51.6,36.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#444444").s().p("AAEAFIAAAAIgEAAIAAAAIAAAAIAAgEIAEAAIAAAEgAAAADIAEAAIAAgCIgEAAgAgDAFIgBgBIABAAIAAgEIABAAIAAAEIAAgBIAAgDIgBAAIAAgDIADAAIAAADIgBAAIAAAAIABAAIAAABIgBAAIAAACIABAAIAAABIgDABgAgCAAIABAAIAAgCIgBAAgAAEAAIgBAAIgBAAIgCAAIAAAAIAAAAIAAAAIACAAIAAAAIgBAAIgBgBIAAABIAAAAIAAAAIAAgBIAAgDIAAAAIACAAIAAABIgBAAIAAABIADAAIABAAIgBACIgBAAIAAAAIABAAIABAAIAAAAgAACAAIABAAIABgCIgDAAg");
	this.shape_167.setTransform(51.6,35.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#444444").s().p("AABABIgBgBIAAAAIAAABIAAAAIAAgBIAAAAIAAAAIABAAIgBAAIAAAAIABAAIAAABIAAAAg");
	this.shape_168.setTransform(51.3,32.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#444444").s().p("AAEAEIgDgBIgBgCIAAgBIAAAAIAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAIgBABIgBAAIAAAAIgBAAIAAAAIACgBIABgBIABgBIAAgBIAAAAIgDAAIAAAAIADAAIAAgDIgDAAIAAgBIAHAAIAAABIgEAAIAAAAIAAADIAFAAIAAAAIgFAAIAAABIACABIABABIABABIABAAIAAAAIAAAAg");
	this.shape_169.setTransform(51.6,31.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#444444").s().p("AgCAAIAAAAIAFAAIABAAIgBAAg");
	this.shape_170.setTransform(51.6,30.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#444444").s().p("AgDAFIgBgCIACAAIACgDIAAAAIAAAAIAAABIAAABIAAAAIAAABIgDACgAADAEIAAgDIABAAIAAADgAgEAAIAAgBIACAAIAAgDIACAAIAAADIAAAAIAAABg");
	this.shape_171.setTransform(51.6,27.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#444444").s().p("AAAAFIAAgFIAAAAIAAAAIgBAAIABgCIAAgCIABAAIABABIgBAAIgBACIAAAGg");
	this.shape_172.setTransform(51.3,25.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#444444").s().p("AAEACIAAgBIABAAIAAABIAAAAIAAABgAACACIAAgBIABAAIAAAAIgBABIAAAAgAgBABIAAgBIAAABIABABIgBAAgAgEACIABAAIAAgCIABABIgBAAIAAABIAAAAgAAAACIAAgBIAAAAIAAABgAAAAAIAAAAIAAAAIAAgBIABAAIAAABIgBAAIABAAIgBAAIABAAIgBAAgAADAAIABAAIAAAAgAAAgBIAAgBIABAAIAAABg");
	this.shape_173.setTransform(51.6,24.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#444444").s().p("AgCACIAAgDIAFAAIAAADgAgBABIAEAAIAAgBIgEAAg");
	this.shape_174.setTransform(51.6,22.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#444444").s().p("AABABIgBgBIAAAAIAAABIAAAAIAAgBIAAAAIAAAAIABAAIgBAAIAAAAIABAAIAAABIAAAAg");
	this.shape_175.setTransform(52.9,38.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#444444").s().p("AgEAEIAAAAIABgBIABgBIABgBIABAAIgCACIgBABIAAABgAACAAIgBAAIACAAIABgBIAAgBIgEAAIAAAAIAAACIAAAAIAAAAIAAAAIAAgBIAAgBIAAgCIAAAAIABAAIAAABIgBAAIAFAAIgBACIAAABIgBAAg");
	this.shape_176.setTransform(53.2,37.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#444444").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_177.setTransform(53.2,35.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#444444").s().p("AAEAFIAAgBIgCgEIABgDIgFAAIAAAFIgBACIAAABIgBAAIAAgBIABgBIAAgCIAAgFIAHAAIAAAHIAAABIABAAIAAgCIAAAAIAAABIAAACgAAAACIABAAIAAAAIAAABIgBAAg");
	this.shape_178.setTransform(53.2,33.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#444444").s().p("AACAFIgBgBIgBgBIAAgBIAAgCIAAAAIAAgDIAAAAIgCAAIAAABIAAABIgBACIAAACIAAACIgBgBIAAgBIABgDIAAgEIADAAIAAAEIAAACIABACIABAAIACAAIAAAAIABgBIAAAAIAAABIgBABgAAAAEIAAgBIAAAAIgCABIAAAAIABgBIAAgCIgBAAIAAgBIAAAAIABAAIAAgBIgBAAIAAgBIABAAIABAAIAAgBIAAABIAAAAIAAAAIAAABIAAABIAAAAIAAAAIAAABIAAAAIAAACIAAAAIAAgBIAAAAIAAABIAAABg");
	this.shape_179.setTransform(53.2,32.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#444444").s().p("AgCAFIAAgBIAAAAIAAgBIABgBIAAgDIAAgBIABAAIAAgCIAAAAIAAABIADAAIAAABIgDAAIAAAAIADAAIAAABIAAABIgBAAIAAgBIgCAAIAAAAIAAABIAAAAIAAAAIAAgBIAAABIAAAAIACAAIAAAAIgCAAIAAAAIACAAIAAAAIABAAIgBABIgCAAIAAgBIAAAAIAAAAIAAACIgBACIAAABg");
	this.shape_180.setTransform(53.4,31.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#444444").s().p("AAAACIAAAAIAAgBIACgBIgEAAIAAgBIAAAAIAFAAIABAAIgEADIAAAAg");
	this.shape_181.setTransform(53.2,27.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#444444").s().p("AAAACIAAAAIAAAAIAAAAIAAAAIAAgCIABAAIAAAAIAAACgAAAABIAAAAIAAgBIAAAAgAAAAAIAAgBIABAAIAAAAIAAABg");
	this.shape_182.setTransform(52.9,24.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#444444").s().p("AgCAFIAAgFIgBAAIgBAAIAAAAIABAAIACgEIABAAIAAABIAAAAIgBACIAAAGgAAAAEIAAAAIAAgEIAAAAIgBAAIABAAIAAgDIAAAAIAAADIABgBIAAgDIABAAIgBABIAAACIADgBIABAAIAAABIgBACIAAABIgCAAIAAgBIABAAIABAAIAAgCIgDABIAAACIAAAAIAAgCIgBAAIAAADIAAABIADAAIABgBIABgBIAAAAIAAABIAAABg");
	this.shape_183.setTransform(53.2,23.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#444444").s().p("AADAEIgBgBIABgBIABABIAAABIAAABgAAAAFIAAgCIAAAAIAAABIAAABgAAAACIAAgBIgDAAIAAABIgBAAIAAgFIABgBIADAAIAAABIAAAEIAAABgAgDAAIADAAIAAAAIgDAAgAgDgBIADAAIAAgCIgDAAg");
	this.shape_184.setTransform(54.8,39.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#444444").s().p("AAAAFIAAgBIABAAIAAgCIABgDIgCAAIAAABIAAAAIgBAAIAAAAIABgBIAAgBIAAgCIAAAAIAAAAIAAABIAAABIACAAIAAAEIAAACIgBABg");
	this.shape_185.setTransform(55,38.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#444444").s().p("AABAFIgBgBIAAgEIAAAAIAAABIAAABIgBABIgBABIgBABIgBAAIAAgBIACAAIABgCIAAgCIgDAAIAAAAIAEAAIAAgEIAAAAIAAAEIAEAAIAAAAIgDAAIAAADIABABIABAAIABgBIAAgBIABABIgBABIgBABgAABAAIABgCIABgBIABAAIgBABIgBACg");
	this.shape_186.setTransform(54.8,37.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#444444").s().p("AAEAFIgBgBIgBgEIABgDIgFAAIAAAFIgBACIgBABIAAAAIAAgBIAAgBIABgCIAAgFIAGAAIAAAHIABABIAAAAIAAgCIABAAIAAABIgBACgAAAACIABAAIAAAAIAAABIgBAAg");
	this.shape_187.setTransform(54.8,36.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#444444").s().p("AAAABIAAgBIAAAAIAAABg");
	this.shape_188.setTransform(54.5,35.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#444444").s().p("AADAFIAAgBIgGAAIAAABIAAAAIAAgFIABAAIAAABIgBAAIAAACIADAAIAAgDIgCAAIAAAAIgBAAIAAgDIAAAAIABAAIAAAAIAAADIACAAIAAgEIAAAAIAAAEIADAAIAAgDIABAAIAAADIgBAAIAAAAIgDAAIAAADIADAAIAAgDIABAAIAAABIAAAEg");
	this.shape_189.setTransform(54.8,32.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#444444").s().p("AAAACIgBgCIABgBIAAgBIABABIABABIgBACIgBABgAAAAAIAAAAIAAABIAAABIAAgBIABgBIgBAAIAAgBg");
	this.shape_190.setTransform(54.8,31.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#444444").s().p("AgBAEIAAgHIABAAIAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIABABIABACIgBABIgBABIAAgBIAAADgAAAgBIAAABIAAAAIAAABIAAAAIABgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAg");
	this.shape_191.setTransform(54.8,30.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#444444").s().p("AgBAEIAAAAIADAAIAAAAgAgEABIAAAAIAEAAIAAgBIgDAAIAAAAIADAAIAAAAIgDAAIAAAAIADAAIAAgBIgEAAIAAgBIAEAAIAAAAIgDAAIAAgBIADAAIAAgBIAAAAIAAABIADAAIAAABIACAAIAAABIgCAAIAAABIgDAAIAAAAIADAAIAAAAIgDAAIAAABIAFAAIAAAAgAAAAAIACAAIAAgBIgCAAgAAAgCIACAAIAAAAIgCAAg");
	this.shape_192.setTransform(54.8,29.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#444444").s().p("AgCAFIAAAAIAAAAIAAgBIABgBIAAgBIABAAIAAAAIAAAAIAAAAIAAABIAAABIAAABIAAAAIAAgCIgBABIAAABgAABgBIgBgBIAAAAIgBACIgBAAIAAAAIAAAAIAAgBIABAAIABgBIAAgBIAAgBIAAAAIAAAAIAAABIABABIABABIABAAIAAABIAAAAg");
	this.shape_193.setTransform(55,27.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#444444").s().p("AgCADIAAgBIAAAAIACAAIAAgCIgCAAIAAAAIACAAIAAgCIABAAIgBABIAAABIADAAIAAAAIgDAAIAAACIADAAIAAABg");
	this.shape_194.setTransform(55,26.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#444444").s().p("AACAFIgBgBIAAAAIgBABIAAAAIAAAAIAAgBIABgBIgBgDIAAgBIgBAAIAAABIABAAIAAACIAAABIAAABIAAgBIAAAAIAAAAIAAgBIAAgCIgBAAIAAADIAAABIgBABIgBAAIABgBIAAgCIABgCIAAgCIABAAIAAgCIABABIAAABIACAAIABAAIAAABIgDAAIAAADIABgCIAAAAIABAAIABAAIgBAAIgBADIAAABIABAAIAAAAIAAgBIABAAIgBACIAAAAg");
	this.shape_195.setTransform(54.9,25.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#444444").s().p("AADAFIAAAAIgFAAIAAAAIAAAAIAAgEIAGAAIAAAEgAAAAEIADAAIAAgBIgDAAgAgCAEIACAAIAAgBIgCAAgAAAACIADAAIAAgBIgDAAgAgCACIACAAIAAgBIgCAAgAAEAAIAAgCIgHAAIAAACIgBAAIAAgCIABgBIADAAIAAgBIAAAAIAAABIAFAAIAAADg");
	this.shape_196.setTransform(54.8,24.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#444444").s().p("AAAAFIAAgBIAAAAIAAAAIAAgBIgEAAIAAgBIAAAAIAEAAIAAgBIAAAAIAAAAIgBAAIAAgBIADAAIAAAAIgCACIAAAAIAEAAIABAAIgBABIgEAAIAAABIAAABgAACAAIgCgBIAAABIAAAAIAAgBIAAABIgBAAIgDAAIAAAAIAAAAIAAAAIABAAIACgBIABgBIgEAAIAAgBIAEAAIAAgBIAAAAIAAABIAEAAIAAABIgEAAIABABIACABIACAAIgBAAIAAAAg");
	this.shape_197.setTransform(54.8,23.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#444444").s().p("AAAAFIAAgBIACAAIAAABIAAAAgAgEAFIABgDIAAgEIADAAIAAgCIABAAIAAACIAEAAIAAABIgHAAIAAABIgBAEIAAABg");
	this.shape_198.setTransform(56.4,36.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#444444").s().p("AgBAFIAAgDIgBgBIABgBIABAAIAAAAIAAAAIAAAAIAAAAIAAAAIABAAIAAAAIABAAIAAAAIgCAAIAAABIACAAIAAABIgCAAIAAAAIACAAIAAABIgCAAIAAABIADAAIAAAAIgDAAIAAABgAAAAEIAAAAIAAgBIAAAAgAAAACIAAAAIAAAAIAAAAgAAAABIAAAAIAAgBIAAAAgAAAAAIAAgBIAAgBIAAAAIAAgCIABAAIAAABIABAAIAAAAIgBAAIAAABIABAAIAAACgAABAAIABAAIAAgBIgBAAgAgBAAIAAgBIABAAIAAABgAAAgCIAAgBIgCAAIAAAAIACAAIAAgBIAAAAIAAACg");
	this.shape_199.setTransform(56.6,35.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#444444").s().p("AgCACIAAgDIAFAAIAAADgAgBABIAEAAIAAgBIgEAAg");
	this.shape_200.setTransform(56.4,33.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#444444").s().p("AgBAFIAAgEIgBABIAAAAIABgDIgBAAIAAAAIABAAIAAgDIABAAIAAADIAAAAIAAAAIAAAAIAAABIAAAAIAAABIAAgBIAAAFgAAAAEIAAAAIAAAAIAAgBIAAgBIABAAIAAABIgBABIAAAAgAACgCIAAgBIABAAIAAABg");
	this.shape_201.setTransform(56.3,32.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#444444").s().p("AADAFIAAgBIAAAAIABgBIAAgCIgCAAIAAABIgBACIAAABIgBAAIAAgBIABgBIAAgCIAAgFIADAAIAAAIIAAABgAACAAIACAAIAAAAIgCAAgAACgBIACAAIAAgCIgCAAgAgEAEIABgBIABgBIAAABIAAAAIgBACg");
	this.shape_202.setTransform(56.4,31.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#444444").s().p("AADAFIAAgBIgBAAIgCABIAAAAIABgBIABgBIAAgBIgBgCIAAAAIABAAIAAAAIAAACIABAAIAAgDIgBAAIgBABIAAAAIgBAAIAAAAIABgBIAAgBIABgBIABAAIgBAAIAAABIADAAIAAABIgBAAIAAABIgBADIACACIgBAAgAgEAFIAAAAIABgBIABgBIABgBIgCgCIABAAIABAAIAAAAIABAAIAAAAIAAAAIAAACIAAAAIAAACIAAAAIgBgCIgBACIgBABgAAAAAIgBgBIABAAIAAABIAAAAIAAAAgAgEgCIAAAAIACAAIAAgBIABgBIAAABIAAABIABAAIAAAAg");
	this.shape_203.setTransform(56.4,29.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#444444").s().p("AADAFIAAgBIAAAAIABgBIAAgCIgCAAIAAABIgBACIAAABIgBAAIAAgBIABgBIAAgCIAAgFIADAAIAAAIIAAABgAACAAIACAAIAAAAIgCAAgAACgBIACAAIAAgCIgCAAgAgEAEIABgBIABgBIAAABIAAAAIgBACg");
	this.shape_204.setTransform(56.4,25.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#444444").s().p("AACAEIAAAAIgEAAIAAAAIAAAAIAAgHIAFAAIAAAHgAgCADIAEAAIAAgDIgEAAgAgCAAIAEAAIAAgDIgEAAg");
	this.shape_205.setTransform(56.4,24.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#444444").s().p("AgCAFIAAgBIAAAAIACAAIAAgBIgBAAIAAgBIABAAIAAAAIgBAAIAAAAIAAAAIgBAAIAAAAIABgBIAAgBIABAAIAAABIAAAAIAAgBIAAAAIAAABIAEAAIAAABIgEAAIAAAAIAEAAIAAABIgEAAIAAABIAEAAIABAAIAAABgAABAAIgBAAIAAAAIgBAAIgBAAIAAAAIABAAIAAgBIABAAIgCAAIABgBIgCAAIAAgBIADAAIAAgBIAAAAIAAAAIAAABIAEAAIAAABIgDAAIABAAIgBABIgBAAIABAAIACABIAAAAg");
	this.shape_206.setTransform(56.5,23.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#444444").s().p("AAAAEIAAAAIABgBIgBAAIAAgFIABAAIABgBIgCAAIAAgBIAFAAIAAABIgCAAIgBABIADAAIAAAFIgBAAIgDAAIABAAIAAABIgCAAIAAABgAABACIADAAIAAgBIgDAAgAABAAIADAAIAAAAIgDAAgAABAAIADAAIAAgCIgDAAgAgEAEIAAAAIABAAIABgCIAAAAIgCAAIAAgBIACAAIAAgBIABAAIAAAAIAAABIABAAIAAABIgBAAIABAAIAAACIAAAAIgBgBIAAgBIgBAAIAAACIgBAAgAgDgDIgBgBIABAAIAAABIAAAAIAAABg");
	this.shape_207.setTransform(58,31.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#444444").s().p("AACAFIAAgBIgDAAIAAABIgBAAIAAgGIACAAIAAgCIgCAAIAAgBIAFAAIAAABIAAAAIgDAAIAAACIADAAIAAAGgAgBADIADAAIAAgBIgDAAgAgBABIADAAIAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAIAAAAIAAAAIAAAAIAAAAIgBABIAAgBgAAAAAIACAAIAAAAIgCAAgAAAgBIAAAAIAAgCIAAAAg");
	this.shape_208.setTransform(58.2,30.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#444444").s().p("AAAADIAAgCIAAAAIAAACgAAAAAIAAgCIAAAAIAAACg");
	this.shape_209.setTransform(58,28);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#444444").s().p("AAAAFIAAAAIABgCIgBAAIAAgFIABAAIABgBIgCAAIAAgBIAFAAIAAABIgCAAIgBABIADAAIAAAFIgBAAIAAABIABAAIAAABIgCgBIAAgBIABAAIgDAAIABAAIAAABIgCABIAAAAgAABACIADAAIAAgCIgDAAgAABAAIADAAIAAAAIgDAAgAABAAIADAAIAAgBIgDAAgAgEAFIAAgBIABAAIABgCIAAgBIgCAAIAAgBIACAAIAAAAIABAAIAAAAIAAAAIABAAIAAABIgBAAIABABIAAACIAAAAIgBgBIAAgBIgBAAIAAACIgBABg");
	this.shape_210.setTransform(58,26.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#444444").s().p("AAAAFIAAgFIAAABIAAABIgBAAIABgCIAAAAIgBAAIAAgBIABAAIAAAAIAAgCIAAABIAAgBIgBAAIABAAIABgBIABABIgCAAIAAACIACAAIAAABIgBAAIAAAAIABAAIAAABIgBAAIAAgBIgBAAIAAAFg");
	this.shape_211.setTransform(57.7,25.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#444444").s().p("AAEACIAAAAIgDAAIAAAAIgBAAIAAgDIAFAAIAAADgAABAAIADAAIAAAAIgDAAgAAAACIAAAAIgDAAIAAAAIAAAAIAAgDIADAAIAAADgAgDAAIADAAIAAAAIgDAAg");
	this.shape_212.setTransform(58,24.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#444444").s().p("AgCAFIAAgBIAAAAIACAAIAAgBIgBAAIAAgBIABAAIAAAAIgBAAIAAAAIAAAAIgBAAIAAAAIABgBIAAgBIABAAIAAABIAAAAIAAgBIAAAAIAAABIADAAIAAABIgDAAIAAAAIADAAIAAABIgDAAIAAABIAEAAIABAAIAAABgAABAAIgBAAIAAAAIgBAAIgBAAIAAAAIABAAIABgBIAAAAIgCAAIABgBIgDAAIAAgBIAEAAIAAgBIAAAAIAAAAIAAABIAEAAIAAABIgDAAIABAAIgBABIgBAAIABAAIABABIAAAAg");
	this.shape_213.setTransform(58.1,23.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#444444").s().p("AAAADIAAAAIAAgBIAAABIAAgBIAAgEIABAAIAAAEQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAgAAAABIAAgCIAAgBIAAABIAAACg");
	this.shape_214.setTransform(45.7,9.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#444444").s().p("AgDAFIgBAAIAAgBIABgBIABgCIAAAAIABABIAAAAIADgCIABgBIgGAAIAAAAIADAAIAAgDIAAABIAAAAIAAACIAEAAIAAAAIgCABIgCABIAAACIAAABIABAAIADAAIABAAIAAAAIAAABIgFAAIgBgBIgBgCIAAABIgBACg");
	this.shape_215.setTransform(45.4,8.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#444444").s().p("AABABIgBgBIAAAAIAAABIAAAAIAAgBIAAAAIAAAAIAAAAIAAAAIABABIAAAAg");
	this.shape_216.setTransform(45.7,6.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#444444").s().p("AAEAFIgBgBIgCAAIAAAAIAAAAIgBABIgBgBIABAAIAAgBIAAgBIAAgBIAAAAIAAgBIADAAIABAAIgCADIABABIACAAIAAABgAAAABIABACIAAAAIABgCIABAAIgDAAgAgEAFIAAgBIAAAAIABgBIABgBIABgCIAAAAIAAABIgBADIgBAAIAAABgAABAAIAAAAIACAAIAAgBIAAgBIgDAAIAAAAIAAACIAAAAIAAAAIAAgBIAAgBIAAgBIAAgBIAAABIAAAAIAAAAIAAABIAEAAIAAABIgBABIgBAAg");
	this.shape_217.setTransform(45.5,5.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#444444").s().p("AgBADIAAAAIgBgBIAAAAIgBABIgBAAIAAAAIACgCIAAgBIgCAAIAAAAIADAAIAAACIAAAAIABAAIAAABIACAAIADgBIAAAAIAAABgAAAAAIAAAAIADAAIAAAAgAgDgCIgBAAIAAAAIABgBIACABIAAABIgBABg");
	this.shape_218.setTransform(45.4,4.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#444444").s().p("AAEAFIgBgBIgBgCIAAgCIABgDIgFAAIAAADIgBAEIgBABIAAAAIAAgBIAAgBIABgCIAAgFIAGAAIAAAHIABABIAAgCIABABIgBACg");
	this.shape_219.setTransform(47.1,14.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#444444").s().p("AABAEIAAgBIgBABIAAAAIgBgBIABAAIAAgCIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAABIABAAIgBABIAAABIABAAIAAABIgBAAIAAABIABAAIgBAAIABgBIAAABIABACg");
	this.shape_220.setTransform(46.8,13.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#444444").s().p("AABAFIgBAAIAAgEIABAAIAAAAIAAADIABAAIABgBIAAABIgBABgAgCAFIAAgBIABgCIAAgDIABAAIAAgDIAAABIAAAAIADAAIAAABIgDAAIAAABIADAAIAAABIgBAAIAAAAIgCAAIAAAAIAAAAIACAAIAAAAIgCAAIAAAAIACAAIAAAAIABAAIgBAAIgCAAIAAAAIAAAAIAAAAIgBACIAAACIgBABg");
	this.shape_221.setTransform(47.2,11.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#444444").s().p("AADACIgCgCIgBAAIAAAAIgBABIgBABIgBAAIgBAAIAAAAIACgBIACgBIAAgBIAAAAIAAAAIABABIACABIACABIAAAAg");
	this.shape_222.setTransform(47,6.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#444444").s().p("AAAAAIAAAAIABAAIAAAAIAAAAg");
	this.shape_223.setTransform(46.7,4.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#444444").s().p("AgCAFIAAgFIgBAAIgBAAIAAAAIABAAIABgCIABgCIABAAIAAABIgBACIAAAGgAAAAEIAAAAIAAgEIAAAAIgBAAIAAAAIABAAIAAgDIAAAAIAAABIAAACIABAAIAAgEIABAAIAAAEIACgCIAAABIABAAIgBACIAAABIgCAAIAAgBIABAAIAAAAIABgBIgCAAIAAACIgBAAIAAgCIgBAAIAAADIAAABIADAAIABgBIAAgBIABABIgBABg");
	this.shape_224.setTransform(47,3.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#444444").s().p("AACAFIAAgEIgEAAIAAACIgBACIgBAAIAAgBIABgBIAAgDIABgDIAAgBIABAAIAAABIgBAAIAAACIADAAIAAgDIABAAIAAADIACAAIAAABIgGAAIAAAAIAFAAIAAAFg");
	this.shape_225.setTransform(48.7,10.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#444444").s().p("AgDAFIgBgBIABgBIABgBIABABIAAAAIgBACgAAAACIAAgBIgCAAIAAABIgBAAIAAgGIADAAIAAAGgAgCAAIACAAIAAAAIgCAAgAgCgBIACAAIAAgCIgCAAgAAAgBIAAAAIAAAAIABgBIAAgBIgBAAIAAgBIAFAAIAAACIgBACIgCAAIAAgBIAAAAIABAAIABgBIAAgBIgCAAIgBACIgBABIAAAAg");
	this.shape_226.setTransform(48.6,9.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#444444").s().p("AACAFIgBAAIAAgBIACAAIAAgCIAAgDIgCAAIgBABIAAAAIAAAAIAAgBIABgBIAAgBIAAgBIABABIAAAAIAAAAIgBABIADAAIAAABIAAADIAAACIgBABgAgEAFIAAgGIABAAIABgCIABAAIAAAAIAAAAIgBACIACAAIAAAGIgBAAIAAgBIgCAAIAAABgAgDADIACAAIAAgDIgCAAgAgDAAIACAAIAAgBIgCAAg");
	this.shape_227.setTransform(48.7,8.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#444444").s().p("AABAFIgBgBIAAgEIAAAAIAAABIAAABIgCACIgCABIAAgBIACAAIAAgBIABgBIAAgBIAAgBIgDAAIAAAAIAAAAIAEAAIAAgEIAAAAIAAABIAAADIAEAAIAAAAIgDAAIAAADIABABIABAAIABgBIAAgBIAAAAIABABIgBABIgBABgAgDgDIAAAAIACACIgBABg");
	this.shape_228.setTransform(48.7,7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#444444").s().p("AAEAFIgBgBIAAgCIAAgCIAAgDIgFAAIAAADIgBAEIgBABIAAAAIAAgBIAAgBIABgCIAAgFIAGAAIAAAHIABABIAAgCIABABIgBACg");
	this.shape_229.setTransform(48.7,5.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#444444").s().p("AAAAFIAAgBIgCABIgBAAIAAgBIABAAIAAgCIgBAAIAAgCIABAAIAAgBIgBAAIAAAAIACAAIABgBIAAAAIAAABIgBAAIAAABIABAAIAAACIgBAAIAAABIABAAIAAAAIAAgBIAAABIAAACgAAEAAIAAAAIgEAAIAAAAIAAAAIAAAAIABgCIAAgCIABABIAAAAIgBACIAAABIACAAIgBgCIABAAIABABIABABg");
	this.shape_230.setTransform(48.7,4.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#444444").s().p("AADAFIAAAAIgFAAIAAAAIgBAAIAAgEIABAAIAAAAIAAADIACAAIAAgEIgCAAIAAAAIgBAAIAAgDIABAAIAAADIACAAIAAgEIAAABIAAADIADAAIAAgDIAAAAIABAAIAAAAIAAADIgBAAIAAAAIgDAAIAAAEIADAAIAAgDIABAAIAAAEg");
	this.shape_231.setTransform(50.2,13);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#444444").s().p("AgBACIAAgCIAAAAIABgCIABACIABAAIgBACIgBAAgAAAAAIgBAAIABABIAAABIAAgBIABgBIgBAAIAAgBg");
	this.shape_232.setTransform(50.3,12);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#444444").s().p("AgBADIAAgFIAAAAIAAABIABgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIABABIgBABIgBABIgBgBIAAACgAAAgBIgBABIABAAIAAABIAAgBIABAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_233.setTransform(50.3,10.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#444444").s().p("AgCAFIAAgEIAFAAIAAAEgAgEABIAAgBIAEAAIAAAAIgCAAIAAAAIACAAIAAAAIgCAAIAAgBIACAAIAAgBIgEAAIAAAAIAEAAIAAAAIgCAAIAAgBIACAAIAAgBIAAAAIAAABIADAAIABAAIAAABIABAAIAAAAIgBAAIAAACIgEAAIAAAAIAEAAIAAAAIgEAAIAAAAIAFAAIAAABgAAAgBIADAAIAAgBIgDAAgAAAgCIADAAIAAAAIgDAAg");
	this.shape_234.setTransform(50.2,9.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#444444").s().p("AAAACIAAgCIAAAAIACAAIABAAIAAACgAABABIABAAIAAgBIgBAAgAgCACIAAgCIABAAIABAAIAAAAIAAACgAgBABIABAAIAAgBIgBAAgAAAAAIAAgBIABAAIAAABg");
	this.shape_235.setTransform(50.4,8.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#444444").s().p("AAAAFIAAgBIABAAIAAgDIgBAAIAAgBIABAAIAAAAIABAAIAAAAIACAAIAAABIgCAAIAAADIADAAIAAAAIgBABgAgCAFIAAgFIgBABIgBAAIAAgBIACAAIABgBIgDAAIAAgBIABAAIADAAIAAgCIAAABIAAAAIAAABIAEAAIABAAIAAABIgFAAIAAAAIgBABIAAAFg");
	this.shape_236.setTransform(50.2,7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#444444").s().p("AACAFIgBgBIAAAAIgBABIAAAAIAAgBIAAAAIABgBIgBgDIAAgBIgBAAIAAABIABAAIAAACIAAABIAAABIAAgBIAAAAIAAAAIAAgBIAAgCIgBAAIAAADIgBABIAAABIgBgBIABAAIAAgCIAAgEIABAAIABAAIAAgBIAAgBIABABIAAAAIAAABIACAAIgBgBIAAAAIAAAAIABABIAAAAIAAAAIAAABIgCAAIAAABIAAACIAAAAIABgCIABAAIgBADIAAABIAAAAIABAAIAAgBIAAAAIABAAIgBABIgBABg");
	this.shape_237.setTransform(50.4,5.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#444444").s().p("AADABIAAAAIgFAAIAAAAIgBAAIAAgBIAHAAIAAABgAAAAAIADAAIAAAAIgDAAgAgCAAIACAAIAAAAIgCAAgAAAAAIADAAIAAAAIgDAAgAgCAAIACAAIAAAAIgCAAg");
	this.shape_238.setTransform(50.2,5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#444444").s().p("AAAACIgBAAIABAAIAAgBIAAgBIgEAAIAAAAIAEAAIAAAAIAAAAIABAAIgCAAIgBgBIABAAIADAAIABAAIgDABIAAAAIAAAAIAFAAIAAAAIgFAAIAAACIAAAAg");
	this.shape_239.setTransform(50.2,3.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#444444").s().p("AgEAFIAAAAIABgCIAAgBIAAgCIAAgDIADAAIAAgBIABAAIAAABIAEAAIAAABIgHAAIAAAEIgBACIAAABg");
	this.shape_240.setTransform(51.8,16.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#444444").s().p("AAAAFIAAgEIAAAAIAAgBIAAAAIAAAAIABAAIAAAAIAAAAIABAAIABAAIAAAAIABAAIgBAAIACAAIAAAAIgCAAIAAABIACAAIAAABIgCAAIAAAAIACAAIAAABIgCAAIAAABIACAAIAAABIgEAAIAAAAgAABAEIABAAIAAgBIgBAAgAABACIABAAIAAAAIgBAAgAABABIABAAIAAgBIgBAAgAgEAFIAAgEIABgBIAAABIAAACIABAAIAAgDIgCAAIAAAAIACAAIAAgBIgBAAIgBABIAAAAIAAgBIABgCIAAAAIABgBIAAABIAAAAIAAABIACAAIAAABIgBAAIAAABIABAAIAAAAIgBAAIAAADIAAAAIAAgCIABAAIAAAAIAAAEIgBAAIAAgBIgCAAIAAABgAADAAIAAgBIABAAIAAABgAAAAAIAAgBIABAAIAAABgAADgBIAAgCIABAAIAAAAIABAAIAAABIgBAAIAAABg");
	this.shape_241.setTransform(51.8,15.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#444444").s().p("AAAAFIAAgBIgBgBIgBABIgBABIAAAAIgBgBIABAAIABgBIAAgCIACAAIgBAAIAAABIABABIAAABIAAAAIAAgEIgEAAIAAAAIAJAAIAAAAIgFAAIAAABIADAAIAAABIgDAAIAAACIAFAAIAAABgAgCAAIAAgEIAFAAIAAAEgAgBAAIADAAIAAgBIgDAAg");
	this.shape_242.setTransform(51.8,14.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#444444").s().p("AAAAFIAAgBIABAAIABAAIAAgCIgCAAIAAgBIAAAAIAFAAIAAABIgDAAIAAACQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAgAgCAFIAAgFIgBABIAAABIgBAAIABgCIABgBIgCAAIAAAAIACAAIAAgDIABAAIAAADIABAAIAAAAIgBAAIAAABIABAAIAAABIgBAAIAAgBIAAAFgAAAAEIAAAAIAAAAIAAgBIAAgBIAAABIAAABIAAAAg");
	this.shape_243.setTransform(51.8,13);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#444444").s().p("AAAABIAAgBIAAAAIAAAAIAAAAIAAABg");
	this.shape_244.setTransform(51.8,12.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#444444").s().p("AACAFIAAgBIgDAAIAAABIgBAAIAAgIIAGAAIAAAIgAgBADIADAAIAAgDIgDAAgAgBAAIADAAIAAgDIgDAAg");
	this.shape_245.setTransform(51.9,10.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#444444").s().p("AADAEIgBAAIgBAAIgBABIAAgBIAAAAIABgBIAAgBIgBgCIAAAAIAAAAIAAAAIAAgBIAAgBIABgBIAAgBIABABIAAAAIgBABIAEAAIAAAAIAAABIgBAAIgBAEIABABIABAAIAAABQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAgAABAAIAAAAIAAAAIABACIABgCIAAgBIgCAAgAgEAFIAAgBIACgBIABgBIAAgBIgBgBIgBAAIABAAIAAAAIABABIABgBIAAAAIAAACIAAAAIAAACIAAAAIgBgCIAAACIgCABgAgEAAIABAAIABgBIAAAAIAAABIAAAAIgBAAg");
	this.shape_246.setTransform(51.9,9.4);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#444444").s().p("AADAFIAAgBIABAAIAAgDIgCAAIAAABIgBACIgBABIAAAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAACIAAAAIABgBIAAgCIAAgBIAAgEIAEAAIAAAIIgBABgAACAAIACAAIAAAAIgCAAgAACgBIACAAIAAgCIgCAAgAgDAFIgBgBIABgBIABgBIAAAAIABABIgBAAIgBACg");
	this.shape_247.setTransform(51.8,5.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#444444").s().p("AACAEIAAAAIgDAAIAAAAIgBAAIAAgIIAGAAIAAAIgAgBADIADAAIAAgDIgDAAgAgBAAIADAAIAAgDIgDAAg");
	this.shape_248.setTransform(51.9,4.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#444444").s().p("AgEAEIABgBIAAgDIAAAAIACAAIgBAAIABAAIABAAIAAAAIgBgBIAAgBIAAAAIgCAAIAAgBIADAAIAAgBIAAAAIAAABIAEAAIAAABIgCAAIABAAIgBAAIgBACIABAAIABAAIgBAAIADAAIAAAAIgHAAIAAADIgBACg");
	this.shape_249.setTransform(51.8,3.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#444444").s().p("AAAAAIAAAAIAAAAIAAAAIABAAIgBAAg");
	this.shape_250.setTransform(53.9,12.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#444444").s().p("AAEAFIAAgBIgEAAIAAABIAAAAIAAgGIAAAAIAAAAIAAgCIAAAAIgBAAIABgBIAFAAIAAABIgDAAIAAACIADAAIAAAGgAAAADIAEAAIAAgBIgEAAgAAAABIAEAAIAAgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIAAAAIAAAAIAAAAIgBAAIAAABIAAgBgAACAAIACAAIAAAAIgCAAgAABgBIAAAAIAAgCIAAAAgAgDAFIgBgBIAAAAIABgBIACgDIAAAAIAAABIgCADIAAABg");
	this.shape_251.setTransform(53.4,10.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#444444").s().p("AAAACIAAgCIgCAAIAAAAIACAAIAAgBIABAAIAAABIACAAIAAAAIAAAAIgCAAIAAACg");
	this.shape_252.setTransform(53.6,9.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#444444").s().p("AAAADIAAgCIAAAAIAAACgAAAAAIAAgCIAAAAIAAACg");
	this.shape_253.setTransform(53.4,8.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#444444").s().p("AADABIAAgBIAAAAIABABIABAAIAAABgAgEACIAAgBIAAAAIABgBIABAAIgCAAIAAAAIACAAIAAgBIABAAIAAABIABAAIAAAAIgBAAIABAAIAAABIAAAAIgBgBQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAIgBABg");
	this.shape_254.setTransform(53.4,7.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#444444").s().p("AgBACIgBgBIABAAIABAAIAAAAIgBgBIAAAAIAAAAIgCAAIAAAAIADAAIAAgBIAAAAIAAABIAEAAIAAAAIgCAAIABAAIgBAAIgBABIABAAIABAAIgBABg");
	this.shape_255.setTransform(53.4,3.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#444444").s().p("AgEAEIABgBIAAgCIAAgEIADAAIAAgBIAAAAIABAAIAAABIAEAAIAAACIgHAAIAAABIgBAEIAAABg");
	this.shape_256.setTransform(56.5,15.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#444444").s().p("AAAAEIAAAAIAAAAIAAAAgAAAADIAAgBIAAAAIAAABgAAAAAIAAAAIAAgBIACAAIAAABgAABAAIABAAIAAAAIgBAAgAAAAAIAAAAIAAAAIAAAAgAAAgBIAAgCIABAAIAAAAIABAAIAAABIgBAAIAAABgAAAgBIAAgBIgBAAIAAgBIABAAIAAAAIAAAAIAAACg");
	this.shape_257.setTransform(56.7,14.4);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#444444").s().p("AgEAEIAAAAIABgBIABgBIAAgBIABAAIAAAAIAAAAIAAABIAAABIABAAIAAAAIAAgDIgEAAIAAAAIAIAAIAAAAIgEAAIAAABIADAAIAAABIgDAAIAAACIAAAAIAFgBIgBABIgEAAIgBAAIAAgBIAAAAIgCACgAgCAAIAAAAIAAgEIAAAAIAFAAIAAAEgAgBAAIADAAIAAgCIgDAAgAgBgCIADAAIAAgBIgDAAg");
	this.shape_258.setTransform(56.5,13.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#444444").s().p("AAAACIAAgBIAAgBIAAAAIAAAAIAAAAIgCAAIAAgBIAFAAIAAABIgDAAIAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAgAgCAAIAAAAIABAAIAAAAIABAAIAAAAIAAAAIAAAAIgCABg");
	this.shape_259.setTransform(56.7,12.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#444444").s().p("AADAEIgBgBIAAABIgCABIAAgBIABAAIABgBIAAgBIgBgCIAAgBIABAAIAAABIAAABIAAABIABgEIgBAAIgBABIAAABIgBAAIAAAAIABgCIAAgBIABgBIAAAAIAAABIAAAAIAAAAIADAAIAAABIgBAAIAAACIgBADIABABIABAAIAAABIgBAAgAgEAFIAAgBIABAAIABgBIABgCIgBAAIgBgBIABAAIABAAIAAABIABgBIAAAAIAAAAIAAAAIAAABIAAACIAAABIAAAAIAAAAIAAgCIgDADgAgEgCIAAgBIACAAIAAgBIACAAIAAABIAAAAIAAABIAAAAg");
	this.shape_260.setTransform(56.5,8.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#444444").s().p("AgCACIAAAAIACAAIAAgBIgBAAIAAgBIABAAIAAAAIAAAAIgBAAIgBAAIAAAAIABAAIABAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIABAAIAAAAIADAAIAAAAIgDAAIAAAAIACAAIABAAIgBABIgCAAIAAABIAEAAIAAAAgAgEACIAAAAIAAgBIAAgBIABAAIAAgBIAIAAIAAAAIgIAAIAAABIAAACIgBAAg");
	this.shape_261.setTransform(56.5,2.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#444444").s().p("AgEAFIAAgBIAAAAIAEAAIAAgDIgDAAIAAgBIADAAIAAgBIgCAAIgBABIgBAAIAAAAIABgBIAAgBIABgBIAAgBIABABIAAAAIgBABIACAAIAAgCIABAAIAAABIgBAAIAAABIAEAAIAAABIAAAAIgEAAIAAABIADAAIAAABIgDAAIAAADIAEAAIABAAIgBABg");
	this.shape_262.setTransform(56.5,1.3);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#444444").s().p("AADADIABAAIAAAAIABABIAAAAIgBABgAgEgDIAAgBIAAAAIABABIAAAAIAAABg");
	this.shape_263.setTransform(58.1,9.7);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#444444").s().p("AAAAAIAAAAIAAAAIAAAAIAAABg");
	this.shape_264.setTransform(58.1,8.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#444444").s().p("AAAACIAAgBIAAAAIAAABgAAAAAIAAgBIAAAAIAAABg");
	this.shape_265.setTransform(58.1,6.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#444444").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAABg");
	this.shape_266.setTransform(57.6,4.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#444444").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_267.setTransform(58.2,3.6);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#444444").s().p("AgDACIAAgBIADAAIAAgBIgCAAIAAAAIACAAIAAAAIgCAAIAAAAIgBAAIAAAAIABAAIAAgBIABAAIAAABIAAAAIAAAAIABAAIAAgBIAAABIAAAAIADAAIAAAAIgDAAIAAAAIACAAIABAAIgBAAIgCAAIAAABIAEAAIAAABg");
	this.shape_268.setTransform(58.2,1.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#444444").s().p("AgNAOIgBgBQACAAAAgJIAAgPIADAAIAAAHIADAAIABgHIACAAIAAAHIACAAIABgGIADAAIgBgDIAEAAIAAACIAIAAIABALIgFABIAAADIAEABIAAACIgDAAIAAAFIgEAAIAAgEIgJAAIAAAFIgEAAIAAgKIgCgBIgBAMgAgCAAIAAAFIACAAIAAgDIAAgBIgBgCIgIABIABAAIAFAAIABAAgAAEAEIADAAIAAgDIgDAAgAAAgBIAAABIAEAAIAAgCgAAHAAIAEAAIAAgCIgEAAgAAAgEIAEgBIAAgCIgEAAgAAHgFIAEAAIAAgDIgEAAg");
	this.shape_269.setTransform(29.6,13.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#444444").s().p("AgMANIgBgCIABgCQABAAABAAQABAAAAAAQABAAAAAAQAAAAAAgBIgBgEIgDgBIAAgDIALAAIABgBIgHAAIAAgBIgFABIgBgEIAMgHIAEABIALAHIAAACIgMABIAAABIAMABIAAADIgDAAIgDAFIAGABIAAADgAACAKIADAAIACgGIgFAAgAgDAKIADAAIgBgGIgFAAgAADgEIgDgDIgCADIAFAAg");
	this.shape_270.setTransform(24.7,13.3);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#444444").s().p("AgCARQgDgBgEgEQgEgEAAgGQgBgIAHgHQAFgEAKACIAAAAIAAADIgBAAQgIgCgDADQgIAGACAHQAAAEADAEIAFAEIAHgBIAIgCIACACQgCABgGACIgIABg");
	this.shape_271.setTransform(22.9,9.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#444444").s().p("AgCAFIgFgDIgBgCIADgEIAFgCIACAAIAGACIgBADQAAACACACIgDACIgEACg");
	this.shape_272.setTransform(23,9.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#444444").s().p("AADAVQgHAAgHgGQgGgGAAgIQAAgKAHgGQAJgHANADIgBADQgLgDgIAGQgGAGAAAIQAAAHAFAEQAGAHAIgBQAGgBAFgDIACACQgGAEgHABg");
	this.shape_273.setTransform(22.8,9.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#444444").s().p("AgIAEQACgCADgFIADgCIAFAAQACAAACADQABACgDACQAAABAAABQgBAAAAAAQgBABAAAAQAAAAgBgBIgEACg");
	this.shape_274.setTransform(31.2,9.2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#444444").s().p("AABAUIgBgBQgLAAgCgBIgBAAIgCgCIAAgCIADABIAAAAIABABIAAAAIAMAAIABABQANAAABgRQAAgHgFgEQgEgFgIAAIgIAAIAAgDIAJAAQAIABAFAFQAGAEgBAJQAAAUgQAAg");
	this.shape_275.setTransform(31.5,9.2);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#444444").s().p("AgGAHIgGgDIgFgEIAGgGQACgCAEAAIAHABIAFgBQAFgBABACIACAFIAAgCQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAABQACAEgBAAIgCAEIgEADIgFABIgHACg");
	this.shape_276.setTransform(27.1,8.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#444444").s().p("AgRAQQgIgHAAgGQgCgRAQgGQALgEAHACIABAAQABAAALAHIgCADIgKgHIgBAAQgHgCgKAEQgNAFABAOQAAAGAHAGQAHAHAIAAQAJAAAHgGQAFgGACgGQACgEgFgIIACgCIADAGQACAFgBAEQgCAGgGAGQgIAIgKAAQgJAAgIgIg");
	this.shape_277.setTransform(27.2,8.7);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#444444").s().p("AgaAPIgGgOIACgGQACgJAFgFQAJgJAOAAQAQAAAJAJQAIAHAAAIIgEAAQAAgHgFgGQgJgIgPAAQgNAAgHAIQgFAFgCAHIgBAGQgBAGAGAHQAIAMAQAAQANAAAIgHQAHgIAAgLIAEAAQgBAMgIAJQgJAIgOAAQgSAAgJgOg");
	this.shape_278.setTransform(27.1,8.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AgLgKQABgCAIAAQACgBAEACQAFABAAAEQAAAEgEACIAHAJIgHABIgFgKIgCAAIAAAMIgIABgAgDgCQAEAAAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIgDAAg");
	this.shape_279.setTransform(31.5,33.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIAPAAIAAACIgHAAIAAAHIAHABIAAABIgHAAIAAAKIAJAAIAAACg");
	this.shape_280.setTransform(28.9,33.7);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIARAAIAAACIgJAAIAAAIIAHAAIABABIgIAAIAAAJIAJAAIAAADg");
	this.shape_281.setTransform(26.5,33.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AgKANIAAgYQAUgCAAAIQAAAEgFABIADABQADACAAADQAAAFgGACgAgCABIAAAIQAFABAAgFQAAgFgDAAIgCABgAgCgBQAEAAAAgEQAAgBAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAIgCAAg");
	this.shape_282.setTransform(23.9,33.8);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AgIANIAAgWIAGgCIAJAMIgBgNIACAAIAAAXIgGgBIgIgKIABANg");
	this.shape_283.setTransform(33,30.2);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AgCAEIACgHIADAHg");
	this.shape_284.setTransform(30.3,30.5);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgBgLIAEABIAIAUIgIABIgCgFIgHABIgBAFIgDAAg");
	this.shape_285.setTransform(30.6,30.6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgOgLIgBAAIAJAAIADALIADgLIAFABIAEAKIAFgLIACAAIgHAWIgGAAIgDgLIgDALIgEACg");
	this.shape_286.setTransform(27.9,30.7);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgDAMIABgXIAGAAIAAAXg");
	this.shape_287.setTransform(25.5,30.7);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AACAMIgCgGIgGABIgBAFIgCgBIAIgWIAEAAIAHAXgAAAAEIgBgIIgEAIIAFAAg");
	this.shape_288.setTransform(23.6,30.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgCAMIgCgVIgFgCIATAAIAAADIgHABIAAATg");
	this.shape_289.setTransform(21.5,30.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgKgRIAHgBIAAgGIgHABIAAgJIAWgFIAAAIIgHADIAAAEIAHgBIAAA3IgXAGgAgHAVIAAADIAQgDIAAgDgAAAgLIAAARIgIACIAAAEIARgEIAAgFIgHABIAAgQgAgDgBIAAgJIgEgBIgBAKIAFAAgAAGgNIAAAJIADgBIAAgIgAAAgZIAAAFIADgBIgBgFg");
	this.shape_290.setTransform(36.2,20);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AgEASIAFgkIAEAAIgFAlg");
	this.shape_291.setTransform(34.1,22.1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AgEgEIADgDIAGAMIgCADg");
	this.shape_292.setTransform(34.2,19.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AgEgDIADgDIAGALIgCACg");
	this.shape_293.setTransform(34.2,17.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AAAAkIAAgEIgMAAIAAgMIAIgIIgJABIAAgrIANgBIAEgEIAHAAIgDAEIAGAAIgBApIgJAAIgJAJIAFAAIAAgDIAGAAIAAACIAGAAIAAAMIgGAAIAAAGgAgJgCIAAADIAHABIAAgFgAABABIAHAAIAAgEIgHAAgAABgTIAAAGIAIgBIAAgGgAgJgOIAHAAIAAgFIgHAAg");
	this.shape_294.setTransform(31.1,20.8);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AgEgjIAJAAIAABGIgJAAgAAAAWIACAAIAAgvIgCAAg");
	this.shape_295.setTransform(28.6,21);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AgEACIAFgEIADABIgEAEg");
	this.shape_296.setTransform(23.5,19.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AAAAlQgEAAAAgBIABgBQADgCAAgEIAAgCIgDAAIgMgBIAAgFIAXAAIgCgFIgVAAIAAgQIAWAAIgBgGIgVgBIAAgFIAJgBIAAgLIgKAAIAAgJIAMAAIABgCIADgBIAAADIAMAAIAAAKIgKAAIABAKIAIAAIgHgFIADgDIAKAHIgEADIAAARIgYgBIAAAEIAaABIgCATQgGAIgHAAIAAAAgAAAgNIAAgKIgDAAIAAAKIADAAg");
	this.shape_297.setTransform(25.1,21);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AgDASIADgjIAFABIgFAig");
	this.shape_298.setTransform(22.4,22.7);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AgGgGIAGgBIAHAOIgEABg");
	this.shape_299.setTransform(22.2,19.6);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AgFgGIAFAAIAGAMIgDABg");
	this.shape_300.setTransform(22.1,18);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AgTAKIAAgcIAmAGIABAfgAANAGIgBgIIgYgDIAAAGIAZAFg");
	this.shape_301.setTransform(18.5,22.5);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AgSALIAAgLIAPgRIAGADIgLAQIAQAEIgIgLIAGgBIANAMIAAAMg");
	this.shape_302.setTransform(18.5,18.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AB6AaIgHgYIgFgLQgEgIgEgFQgFgHgFgEQgIgHgGgDQgQgIgRgCIglgCIgIABIgVACIgCAAIgdAGIgHADQgQAFgOAJQgMAJgIAMIgDAFIgGAJIgBAGQgDAIgCAKIgBANIABAEIgBgEIgBgNQAAgKACgKIABgDIABgDIADgHIABgDIAFgGQAJgNAMgJQAQgKAOgFIAFgCIAMgDIAVgEIACAAIAWgCIAIgBIAmACQAWAEANAHQAHAEAIAGQAEAEAHAJIAIANIAGAMIACAHQABADAAADIADAbIgBAWg");
	this.shape_303.setTransform(26.4,6.9);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("Ag7AMIgpgHIgOgFIgNgGIgCgCIAAAAIAKAEIA9AKIAjABIBCgCIAwgFIAQgEIANgEIAIgDIADgBIgCACIgCAAIgCACIgXAJIg7AKIhCADg");
	this.shape_304.setTransform(26.9,25.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AgIA9IhGgJIgDgBIgDAAIgJgFQgFgDgEgEQgEgEgDgGIgCgGIgBgLIAChAIADBFIACAFIACAFQAEAIAIAGIAMAFIAdAFIBIAFIAygHIADgBQALgEAHgGQAIgGADgKQADgHAAgNIAAgOIAEgwIACA/QAAAOgDAHQgDAIgDACIgIAJIgJAGIgQAGIgxAGg");
	this.shape_305.setTransform(27,31.1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AhrAtIAAgCQAFg4AggZQARgNAPgBIATgCQAZgCAqAEQArAEAMArQAHAUgDAVIAAAHQgtALg8ABIgDAAQg5AAgxgKg");
	this.shape_306.setTransform(26.7,9.8);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#444444").s().p("Ag+DJQgdgFgUgVQgUgVgEgjQgGgvAGi0QABgSAJgTQATgnAqgLQAqgKAoABQAVABAMACIAmAKQAnARAEAmIAHBCIAAC4IgKAnQgOAngYAFQgdAHgxABIgNAAQglAAgZgEg");
	this.shape_307.setTransform(26.7,20.6);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#444444").s().p("AgNAOIgBgBIACgJIAAgPIADAAIAAAHIACAAIACgHIABAAIAAAHIADAAIAAgGIADAAIAAgDIAEAAIAAACIAIAAIABALIgFABIAAADIAEABIAAACIgDAAIAAAFIgFAAIABgEIgKAAIAAAFIgEAAIAAgKIgBgBIgBAMgAgDAAIAAAFIADAAIAAgDIgBgBIAAgCIgIABIABAAIADAAIACAAIAAAAgAADAEIAEAAIAAgDIgEAAgAAAgBIAAABIAEAAIAAgCgAAHAAIAEAAIAAgCIgEAAgAAAgEIAEgBIAAgCIgEAAgAAHgFIAEAAIAAgDIgEAAg");
	this.shape_308.setTransform(80.3,13.3);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#444444").s().p("AgNANIgBgCIABgCQAFABAAgCIgBgEIgEgBIAAgDIANAAIAAgBIgHAAIAAgBIgGABIgBgEIANgHIAEABIAMAHIAAACIgNABIAAABIAMABIgBADIgCAAIgDAFIAGABIgBADgAACAKIADAAIACgGIgFAAgAgDAKIADAAQAAAAAAgGIgGAAgAADgEIgDgDIgCADIAFAAg");
	this.shape_309.setTransform(75.3,13.3);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#444444").s().p("AgDARQgCgBgEgEQgEgEgBgGQgBgHAIgIQAEgEALACIAAAAIAAADIgBAAQgIgCgEADQgGAHAAAGQABAEADAEIAFAEIAHgBIAIgCIACACQgCABgHACIgIABg");
	this.shape_310.setTransform(73.6,9.2);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#444444").s().p("AgCAFIgFgDIgBgCIADgEIAEgCIADAAIAFACIAAADQAAACACACQAAAAAAAAQAAABAAAAQgBAAAAABQgBAAgBAAIgEACg");
	this.shape_311.setTransform(73.7,9.3);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#444444").s().p("AADAVQgIAAgGgGQgGgHAAgHQAAgKAHgGQAJgHANADIgBADQgLgDgIAGQgGAGAAAIQAAAHAFAEQAHAHAGgBQAHgBAFgDIACACQgFAEgIABg");
	this.shape_312.setTransform(73.4,9.3);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#444444").s().p("AgIAEQADgCACgFIADgCIAFAAQADAAABADQABACgDACQAAABAAABQgBAAAAAAQAAABgBAAQAAAAAAgBIgFACg");
	this.shape_313.setTransform(81.8,9.2);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#444444").s().p("AABAUIgBgBQgMAAgBgBIgBAAIgCgCIAAgCIADABIgBAAIACABIAAAAIAMAAIABABQAMAAABgRQABgHgFgEQgEgFgIAAIgIAAIAAgDIAJAAQAIABAFAFQAGAEgBAJQgBAUgPAAg");
	this.shape_314.setTransform(82.1,9.2);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#444444").s().p("AgGAHIgGgDIgFgEIAGgGQACgCAEAAIAHABIAFgBQAFgBABACIACAFIAAgCQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAABQACADgBABIgCAEIgEADIgFABIgHACg");
	this.shape_315.setTransform(77.7,8.9);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#444444").s().p("AgRAQQgIgHAAgHQgCgRAQgFQALgEAHABIABAAQABAAALAIIgCACIgKgHIgBAAQgHgBgKAEQgNAEABAPQAAAFAHAHQAHAHAIAAQAJAAAHgHQAFgFACgGQABgDgEgKIACgBIADAGQACAFgBAEQgCAGgGAGQgIAIgKAAQgJAAgIgIg");
	this.shape_316.setTransform(77.8,8.8);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#444444").s().p("AgaAPIgGgOIABgGQADgJAFgFQAJgJAOAAQARAAAJAJQAGAHAAAIIgDAAQAAgHgGgGQgHgIgQAAQgNAAgHAIQgFAFgCAHIgCAGIAGANQAJAMAPAAQAOAAAGgHQAJgIgBgLIADAAQABAMgJAJQgIAIgPAAQgRAAgKgOg");
	this.shape_317.setTransform(77.7,8.8);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AgKgKQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAFAAQACgBAEACQAEABAAAEQAAAEgDACIAHAJIgHABIgFgKIgCAAIAAAMIgIABgAgCgCQADAAAAgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIgCAAg");
	this.shape_318.setTransform(82.1,33.6);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIAQAAIAAACIgIAAIAAAHIAGABIAAABIgGAAIAAAKIAJAAIAAACg");
	this.shape_319.setTransform(79.5,33.7);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AgIAMIAAgXIAQAAIAAACIgIAAIAAAIIAHAAIAAABIgHAAIAAAJIAJAAIAAADg");
	this.shape_320.setTransform(77.1,33.8);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AgKANIAAgYQATgCAAAIQAAAEgEABIADABQADACAAADQAAAFgGACgAgCABIAAAIQAFABAAgFQAAgFgDAAIgCABgAgCgBQAEAAAAgEQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAgBAAAAIgCAAg");
	this.shape_321.setTransform(74.6,33.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AgHANIAAgWIAEgCIAJAMIAAgNIACAAIAAAXIgGgBIgIgKIACANg");
	this.shape_322.setTransform(83.6,30.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AgCAEIACgHIADAHg");
	this.shape_323.setTransform(80.9,30.5);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AgBgLIAEABIAIAUIgHABIgDgFIgHABIgBAFIgDAAg");
	this.shape_324.setTransform(81.2,30.6);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AgPgLIAIAAIAEALIADgLIAEABIAFAKIAFgLIACAAIgHAWIgGAAIgDgLIgDALIgEACg");
	this.shape_325.setTransform(78.6,30.7);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AgDAMIABgXIAFAAIAAAXgAADgLIAAAAg");
	this.shape_326.setTransform(76.1,30.7);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AACAMIgBgGIgGABIgCAFIgDgBIAIgWIAFAAIAIAXgAAAAEIgCgIIgCAIIAEAAg");
	this.shape_327.setTransform(74.2,30.6);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AgCAMIgCgVIgFgCIATAAIAAADIgGABIAAATg");
	this.shape_328.setTransform(72.1,30.4);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AgKgRIAGgBIAAgGIgGABIAAgJIAWgFIAAAIIgHADIAAAEIAHgBIAAA3IgXAGgAgHAVIAAADIAQgDIAAgDgAAAgLIAAARIgIACIAAAEIARgEIAAgFIgHABIAAgQgAgDgBIgBgJIgEgBIAAAKIAFAAgAAFgNIAAAJIAEgBIAAgIgAAAgZIAAAFIACgBIAAgFg");
	this.shape_329.setTransform(86.9,20);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("AgEASIAFgkIAEAAIgFAlg");
	this.shape_330.setTransform(84.8,22.1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AgEgEIADgDIAGAMIgCADg");
	this.shape_331.setTransform(84.8,19.1);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AgEgDIADgDIAGALIgCACg");
	this.shape_332.setTransform(84.8,17.6);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AAAAkIAAgEIgMAAIAAgMIAIgIIgJABIAAgrIANgBIAEgEIAHAAIgDAEIAGAAIgBApIgJAAIgKAJIAGAAIAAgDIAGAAIAAACIAHAAIgBAMIgGAAIABAGgAgJgCIAAADIAHABIAAgFgAABABIAHAAIAAgEIgHAAgAABgTIAAAGIAHgBIAAgGgAgJgOIAHAAIAAgFIgHAAg");
	this.shape_333.setTransform(81.7,20.8);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AgEgjIAJAAIAABGIgJAAgAAAAWIACAAIAAgvIgCAAg");
	this.shape_334.setTransform(79.2,21);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AgEACIAFgEIAEABIgFAEg");
	this.shape_335.setTransform(74.1,19.1);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AAAAlQgEAAAAgBIABgBQADgCAAgEIAAgCIgDAAIgMgBIAAgFIAXAAIgBgFIgWAAIgBgQIAXAAIAAgGIgXgBIAAgFIAJgBIAAgLIgKAAIAAgJIANAAIABgCIADgBIAAADIAMAAIAAAKIgKAAIABAKIAHAAIgFgFIACgDIAKAHIgEADIAAARIgYgBIAAAEIAaABIgCATQgGAIgHAAIAAAAgAAAgNIAAgKIgDAAIAAAKIADAAg");
	this.shape_336.setTransform(75.7,21);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AgDASIADgjIAFABIgFAig");
	this.shape_337.setTransform(73,22.7);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("AgGgGIAGgBIAHAOIgEABg");
	this.shape_338.setTransform(72.8,19.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AgFgGIAFAAIAGAMIgDABg");
	this.shape_339.setTransform(72.7,18);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("AgTAKIAAgcIAmAGIABAfgAAOAGIgCgIIgYgDIAAAGIAaAFg");
	this.shape_340.setTransform(69.1,22.5);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("AgSALIAAgLIAPgRIAGADIgLAQIAQAEIgIgLIAGgBIANAMIAAAMg");
	this.shape_341.setTransform(69.1,18.5);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AB4AUIgFgSIgFgLQgEgIgEgFQgGgIgFgDIgNgKQgPgHgSgDIgkgCIgJABIgVACIgCAAIglAJQgQAFgMAJQgMAJgIAMIgEAFIgFAJIgCAGQgEAJgBAJIAAARIgCgRQgBgJADgLIABgDIADgHIADgGIAEgGQAHgMAOgKQAOgJAQgGIAFgCIAfgHIACAAIACAAIAWgCIAJgBIAlACQAWAEANAHQAIAEAGAGQAHAFAFAIQADADAFAKIAGAMIACAHIACAMIACAmIgBAFg");
	this.shape_342.setTransform(77,6.9);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("Ag2AMIgtgHIgPgFIgNgGIgCgCIAAAAIAKAEIAZAEIA6AHIBJgBIA2gGIAFgBIAYgHIAIgDIADgBIgDACIgBAAIgDADIgLAGIgMACIg5AKIhEADg");
	this.shape_343.setTransform(77.5,25.4);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("AgIA9IhGgJIgDgBIgCAAIgLgFIgJgHQgEgFgCgFIgDgLIgBgJIABgDIADg6IADA7IgBADIAAACIACAKIABAFQAFAIAIAGIAMAFIANADIA6AHIAUAAIAKAAIAggEIASgDIADgBQALgEAHgGQAIgGAEgKQADgJAAgLIAAgOIADgwIADA/QAAAMgEAJIgFAKIgIAJIgKAGIgQAGIgQADIggADg");
	this.shape_344.setTransform(77.6,31.1);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AhKAyIghgFIABgCQAEg4AggZQARgNAPgBIATgCQAZgCAqAEQArAEAMArQAHAUgDAVIABAHQguALg8ABIgEAAQgiAAgmgFg");
	this.shape_345.setTransform(77.3,9.8);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#444444").s().p("Ag+DJQgegFgTgVQgUgVgEgjQgEgdAChlIAChhIAKglQASgnAqgLQAqgKApABQAVABAMACIAmAKQAnARAEAmIAHBCIAAC4IgKAnQgOAngYAFQgeAHgwABIgNAAQgmAAgYgEg");
	this.shape_346.setTransform(77.4,20.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.8,0,123.1,42);


(lib.泡泡02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 5
	this.instance = new lib.泡泡03();
	this.instance.setTransform(-0.1,3,1,1,0,0,0,1.5,1.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:1.67,scaleY:1.67,x:5.3,y:-47.6},42).wait(1));

	// 圖層 3
	this.instance_1 = new lib.泡泡03();
	this.instance_1.setTransform(-2.7,-4.7,0.5,0.5,0,0,0,1.5,1.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:1.17,scaleY:1.17,guide:{path:[-2.6,-4.8,-3.8,-5.2,-4.4,-6.8,-5.6,-10.2,-2.3,-16.4,0.2,-21.3,3.5,-26.8,5.3,-30.5,4.3,-34.4,3.6,-37.1,-1.8,-42.3,-6.5,-46.8,-5.6,-49.5]}},42).to({_off:true},1).wait(6));

	// 泡泡03
	this.instance_2 = new lib.泡泡03();
	this.instance_2.setTransform(1.5,1.5,0.267,0.267,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,guide:{path:[1.5,1.5,2.1,-1.8,2.2,-6.4,2.6,-15.7,0.5,-22.7,-1.8,-30.9,-2.1,-38.4,-2.5,-46.1,-0.5,-49]}},33).to({_off:true},1).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.1,1.1,0.8,0.8);


(lib.beer_body02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_61 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(61).call(this.frame_61).wait(9));

	// flash0.ai
	this.instance = new lib.beer_蓋子();
	this.instance.setTransform(19.4,3,1,1,90,0,0,11.5,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0},8).to({_off:true},54).wait(8));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag9EcQgfgHgOgNQgYgPgIgSQgFgLgBglIAAl3QABgEAGgJQAKgMAEgXQABgGgEgCQgEgEAAgDIgCgIQABgDAFgDQAKgFAdgFQAqgIAzAAQA+AAAmAGQAlAHACAKQACAHgHAFIgGAFIAGAXQASAUgBAMQgBAHAADKIABDLIgDAMQgFANgMAGQgLAFgLAJIgNALQgHAFgaAEQggAHggAAQgjAAgfgIg");
	mask.setTransform(15.7,29.2);

	// beer_txt
	this.instance_1 = new lib.beer_txt();
	this.instance_1.setTransform(-15.6,34.7,1,1,0,0,0,45.6,20.9);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:79.9},55).to({_off:true},7).wait(8));

	// body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgFAEIAAgHQANgCgCAEQgCABgEADIgEABIgBAAg");
	this.shape.setTransform(17.2,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AAAAFQgdgCgBgCQAAgBAagCQAWgDAFAAIAIALIgfgBg");
	this.shape_1.setTransform(11.3,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AgwAIIABAAQAagDAVgFIgngFQgIgBAAgDQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIAqACQAlADAHACQAIADgBADQgBAHgRgBQgJAAgeACIgmAEIAAAAgAAKAAQAAABgKADQAYgCAGAAQAMABABgDIgDAAQgHgCgagCQABAAAAABQABAAAAAAQAAABAAAAQABABAAABg");
	this.shape_2.setTransform(21.8,3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAEQAZgEgGgBQg2gIADAAIApACQAlACAHADQAJACgEACQgEADgLAAQgJgBgiADIgiAEIAigHg");
	this.shape_3.setTransform(21.7,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#444444").s().p("Ah/gIIBcAMQBmALA4gPQAKACgKADQg0AEgsAAQhbAAg/gRg");
	this.shape_4.setTransform(14.5,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444444").s().p("AgzAIQgfgFgagFIgUgGIA0AIQA+AJA0gHIBQgIQAPgBgGADQgHAEhCAFQguAEgcAAQgSAAgNgBg");
	this.shape_5.setTransform(16.4,6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#444444").s().p("AhFAIQgQgCgUgEQAWADAXAAQAugBAygEQA0gBAJgEQAIgEABADQAAAAAAABQAAAAgBAAQAAABgBAAQgBAAgBABQhpALgvAAIgTAAg");
	this.shape_6.setTransform(18.8,4.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444444").s().p("AgiAJQgEAAgCgFQgDgEAMgCQASgGANgBIgQAGQgRAFAFABQAGABBAAFIgTABIg5gBg");
	this.shape_7.setTransform(10.9,3.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#444444").s().p("AhGEiQghgJgPgNQgdgVgIgRQgHgQAAhHIAAlSQgBgIAIgJQAEgGAFgLQAEgKABgGIAAgGIgCgGIgBgCQgCgNAKgFQALgGAegGQAqgIA1AAQA7AAApAHQApAGADAPQADAMgHAGIAGARQASAbgBAMQgCASACGJIAAACQgKAdgUAKQgKAEgRANIgIAHQgIAFgaAFQghAHgfAAQgmAAgggIgAhckVQgdAFgJAFIgCACQAAAAgBAAQAAABAAAAQABABAAAAQAAABAAAAIACAGQACAFgBAIQgBAIgFAMQgFALgGAHQgEAFAAADIAAFUIABArQABAeAEAJQAEAJAMALQAJAIAIAFIABABIAAAAQANAMAfAHQAfAIAjAAQAdAAAfgGQAZgFAHgEIAHgGQAPgNANgGQAPgHAJgYIAAmcQABgJgRgWIgBgCIgFgSQgCgEAEgGQACgCgBgHQgDgGgggGQglgGg8AAQgzAAgpAIg");
	this.shape_8.setTransform(16.3,29.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhEEcQgggIgOgNQgbgSgIgSQgFgLgBglIgBl2IAAgEQABgEAEgGQAFgGAFgLQAFgLABgHQABgGgBgCIgCgGIgCgIQABgEAFgCQAKgGAdgFQAqgIA0AAQA9AAAmAHQAlAGACAKQACAIgDAEQgDAEAAABIAGAUIAJANQAJAOgBAIQgBAHAADKIABDLQgIAbgTAIQgLAFgLAJIgNALQgHAEgaAFQggAHgeAAQglAAgfgIg");
	this.shape_9.setTransform(16.3,29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},62).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-8.5,32.7,68.2);


(lib.beer_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_61 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(61).call(this.frame_61).wait(9));

	// flash0.ai
	this.instance = new lib.beer_蓋子();
	this.instance.setTransform(19.4,3,1,1,0,0,0,11.5,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({rotation:90},9).to({_off:true},18).wait(8));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag9EcQgfgHgOgNQgYgPgIgSQgFgLgBglIAAl3QABgEAGgJQAKgMAEgXQABgGgEgCQgEgEAAgDIgCgIQABgDAFgDQAKgFAdgFQAqgIAzAAQA+AAAmAGQAlAHACAKQACAHgHAFIgGAFIAGAXQASAUgBAMQgBAHAADKIABDLIgDAMQgFANgMAGQgLAFgLAJIgNALQgHAFgaAEQggAHggAAQgjAAgfgIg");
	mask.setTransform(15.7,29.2);

	// beer_txt
	this.instance_1 = new lib.beer_txt();
	this.instance_1.setTransform(-15.6,34.7,1,1,0,0,0,45.6,20.9);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:79.9},55).to({_off:true},7).wait(8));

	// body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgFAEIAAgHQANgCgCAEQgCABgEADIgEABIgBAAg");
	this.shape.setTransform(17.2,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AAAAFQgdgCgBgCQAAgBAagCQAWgDAFAAIAIALIgfgBg");
	this.shape_1.setTransform(11.3,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AgwAIIABAAQAagDAVgFIgngFQgIgBAAgDQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIAqACQAlADAHACQAIADgBADQgBAHgRgBQgJAAgeACIgmAEIAAAAgAAKAAQAAABgKADQAYgCAGAAQAMABABgDIgDAAQgHgCgagCQABAAAAABQABAAAAAAQAAABAAAAQABABAAABg");
	this.shape_2.setTransform(21.8,3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAEQAZgEgGgBQg2gIADAAIApACQAlACAHADQAJACgEACQgEADgLAAQgJgBgiADIgiAEIAigHg");
	this.shape_3.setTransform(21.7,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#444444").s().p("Ah/gIIBcAMQBmALA4gPQAKACgKADQg0AEgsAAQhbAAg/gRg");
	this.shape_4.setTransform(14.5,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444444").s().p("AgzAIQgfgFgagFIgUgGIA0AIQA+AJA0gHIBQgIQAPgBgGADQgHAEhCAFQguAEgcAAQgSAAgNgBg");
	this.shape_5.setTransform(16.4,6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#444444").s().p("AhFAIQgQgCgUgEQAWADAXAAQAugBAygEQA0gBAJgEQAIgEABADQAAAAAAABQAAAAgBAAQAAABgBAAQgBAAgBABQhpALgvAAIgTAAg");
	this.shape_6.setTransform(18.8,4.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444444").s().p("AgiAJQgEAAgCgFQgDgEAMgCQASgGANgBIgQAGQgRAFAFABQAGABBAAFIgTABIg5gBg");
	this.shape_7.setTransform(10.9,3.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#444444").s().p("AhGEiQghgJgPgNQgdgVgIgRQgHgQAAhHIAAlSQgBgIAIgJQAEgGAFgLQAEgKABgGIAAgGIgCgGIgBgCQgCgNAKgFQALgGAegGQAqgIA1AAQA7AAApAHQApAGADAPQADAMgHAGIAGARQASAbgBAMQgCASACGJIAAACQgKAdgUAKQgKAEgRANIgIAHQgIAFgaAFQghAHgfAAQgmAAgggIgAhckVQgdAFgJAFIgCACQAAAAgBAAQAAABAAAAQABABAAAAQAAABAAAAIACAGQACAFgBAIQgBAIgFAMQgFALgGAHQgEAFAAADIAAFUIABArQABAeAEAJQAEAJAMALQAJAIAIAFIABABIAAAAQANAMAfAHQAfAIAjAAQAdAAAfgGQAZgFAHgEIAHgGQAPgNANgGQAPgHAJgYIAAmcQABgJgRgWIgBgCIgFgSQgCgEAEgGQACgCgBgHQgDgGgggGQglgGg8AAQgzAAgpAIg");
	this.shape_8.setTransform(16.3,29.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhEEcQgggIgOgNQgbgSgIgSQgFgLgBglIgBl2IAAgEQABgEAEgGQAFgGAFgLQAFgLABgHQABgGgBgCIgCgGIgCgIQABgEAFgCQAKgGAdgFQAqgIA0AAQA9AAAmAHQAlAGACAKQACAIgDAEQgDAEAAABIAGAUIAJANQAJAOgBAIQgBAHAADKIABDLQgIAbgTAIQgLAFgLAJIgNALQgHAEgaAFQggAHgeAAQglAAgfgIg");
	this.shape_9.setTransform(16.3,29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},62).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.7,59.7);


// stage content:



(lib.beer_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 把手
	this.instance = new lib.把手();
	this.instance.setTransform(350.9,56.7,1,1,0,0,0,1.6,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:362.4,y:67},14,cjs.Ease.get(1)).wait(159).to({x:350.9,y:56.7},11).wait(31));

	// door_open
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").p("Ak4BhIDpDmIGImvIjhjfg");
	this.shape.setTransform(356.8,65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak4BhIGQmoIDhDgImIGug");
	this.shape_1.setTransform(356.8,65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#444444").p("Ak0B4IGhm8IDIDaImIGvg");
	this.shape_2.setTransform(357.2,65.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ak0B4IGhm8IDIDaImJGvg");
	this.shape_3.setTransform(357.3,65.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#444444").p("AkwCNIGynOICwDVImJGvg");
	this.shape_4.setTransform(357.6,65.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkwCNIGxnOICwDUImIGvg");
	this.shape_5.setTransform(357.6,65.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#444444").p("AksChIHAnfICaDPImIGvg");
	this.shape_6.setTransform(357.9,65.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AktCgIHAnfICbDQImJGvg");
	this.shape_7.setTransform(358,65.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#444444").p("AkpCyIHOnuICGDLImIGvg");
	this.shape_8.setTransform(358.2,65.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AkpCxIHNntICGDLImIGvg");
	this.shape_9.setTransform(358.3,66);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#444444").p("AkmDCIHan8IB0DHImIGvg");
	this.shape_10.setTransform(358.5,66.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AkmDBIHZn8IB0DIImIGvg");
	this.shape_11.setTransform(358.6,66.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#444444").p("AkjDRIHloJIBkDEImIGvg");
	this.shape_12.setTransform(358.7,66.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AkkDQIHloJIBkDEImJGvg");
	this.shape_13.setTransform(358.9,66.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#444444").p("AkgDeIHuoUIBWDBImJGvg");
	this.shape_14.setTransform(359,66.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AkhDdIHuoUIBVDAImIGvg");
	this.shape_15.setTransform(359.1,66.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#444444").p("AkeDpIH2odIBKC+ImJGvg");
	this.shape_16.setTransform(359.2,66.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AkgDnIH3odIBJC+ImIGvg");
	this.shape_17.setTransform(359.3,66.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#444444").p("AkcDzIH9omIA/C8ImIGvg");
	this.shape_18.setTransform(359.3,66.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AkeDxIH+omIA/C8ImJGvg");
	this.shape_19.setTransform(359.5,66.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#444444").p("AkbD7IIEotIA2C6ImIGvg");
	this.shape_20.setTransform(359.4,66.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AkcD4IIDosIA2C6ImIGvg");
	this.shape_21.setTransform(359.6,66.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#444444").p("AkaEAIIIoxIAwC4ImIGvg");
	this.shape_22.setTransform(359.5,66.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AkcD+IIIoxIAwC4ImIGvg");
	this.shape_23.setTransform(359.7,66.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#444444").p("AkZEFIILo1IArC3ImIGvg");
	this.shape_24.setTransform(359.6,66.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AkbECIILo1IArC4ImIGvg");
	this.shape_25.setTransform(359.8,67);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#444444").p("AkYEHIINo3IAoC3ImIGvg");
	this.shape_26.setTransform(359.6,66.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AkaEFIINo3IAoC2ImIGvg");
	this.shape_27.setTransform(359.8,67);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#444444").p("AkYEIICsAuIGJmvIgoi3g");
	this.shape_28.setTransform(359.7,66.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AkaEGIINo4IAoC2ImIGvg");
	this.shape_29.setTransform(359.9,67);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#444444").p("AkbD4IICoqIA4C6ImIGvg");
	this.shape_30.setTransform(359.4,66.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AkdD2IICoqIA5C6ImJGvg");
	this.shape_31.setTransform(359.6,66.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#444444").p("AkeDqIH2oeIBKC+ImJGvg");
	this.shape_32.setTransform(359.2,66.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AkgDoIH3oeIBJC+ImIGvg");
	this.shape_33.setTransform(359.3,66.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#444444").p("AkhDaIHroQIBaDBImIGvg");
	this.shape_34.setTransform(358.9,66.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AkiDZIHroRIBaDCImIGvg");
	this.shape_35.setTransform(359,66.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#444444").p("AkkDLIHgoDIBrDFImJGvg");
	this.shape_36.setTransform(358.7,66.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AklDJIHgoCIBrDFImJGvg");
	this.shape_37.setTransform(358.8,66.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#444444").p("AknC8IHUn3IB8DJImIGvg");
	this.shape_38.setTransform(358.4,66);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AkoC7IHVn3IB8DKImJGvg");
	this.shape_39.setTransform(358.5,66.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#444444").p("AkqCsIHJnpICNDNImIGvg");
	this.shape_40.setTransform(358.1,65.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AkqCsIHJnpICMDMImIGvg");
	this.shape_41.setTransform(358.2,65.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#444444").p("AktCeIG+ndICeDRImJGvg");
	this.shape_42.setTransform(357.9,65.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AktCdIG9ncICeDQImIGvg");
	this.shape_43.setTransform(357.9,65.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#444444").p("AkwCOIGynPICvDUImIGvg");
	this.shape_44.setTransform(357.6,65.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AkwCOIGynPICvDUImIGvg");
	this.shape_45.setTransform(357.7,65.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#444444").p("AkzB/IGnnCIDADYImJGvg");
	this.shape_46.setTransform(357.4,65.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AkzB/IGnnCIDADYImJGvg");
	this.shape_47.setTransform(357.4,65.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#444444").p("Ak1BwIGbm1IDRDcImJGvg");
	this.shape_48.setTransform(357.1,65.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Ak2BwIGcm1IDQDcImIGvg");
	this.shape_49.setTransform(357.1,65.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},159).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(31));

	// happy_monday
	this.instance_1 = new lib.happy_monday();
	this.instance_1.setTransform(65.9,82.5,0.083,0.083,-45,0,0,0,29.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(109).to({_off:false},0).to({regX:-0.3,regY:29.2,scaleX:1,scaleY:1,rotation:0},5,cjs.Ease.get(1)).to({scaleX:0.87,scaleY:0.87},2).to({scaleX:1,scaleY:1},2).wait(46).to({regX:0,regY:29.4,scaleX:0.08,scaleY:0.08,x:58.3,y:117.7},6,cjs.Ease.get(1)).to({scaleX:0.19,scaleY:0.19,x:58.8,y:112.9},2).to({scaleX:0.08,scaleY:0.08,x:56.5,y:118.7},3).to({_off:true},1).wait(39));

	// 泡泡03
	this.instance_2 = new lib.泡泡02();
	this.instance_2.setTransform(58,150.4,1,1,0,0,0,1.5,1.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({_off:false},0).wait(79).to({regX:1.6,regY:1.6,scaleX:0.1,scaleY:0.1,x:55.3,y:125.9},6).to({regX:1.5,regY:1.7,scaleX:0.24,scaleY:0.24,x:55.7,y:129.7},2).to({regX:1.6,regY:1.6,scaleX:0.1,scaleY:0.1,x:55.3,y:125.9},3).to({_off:true},1).wait(39));

	// 泡泡
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#444444").s().p("AABAEQgMgRgEgDIAPAKQARAKgBAKQgBABAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQgEAAgJgNg");
	this.shape_50.setTransform(63,93.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#444444").s().p("AATABQgYgJgXAIIgSAHQAUgKAUgFQAVgFAOAKQASAKAAADIgCABQgFAAgVgKg");
	this.shape_51.setTransform(52.8,95.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#444444").s().p("AA/ARIgugMQgegHgLACQgMAAgZABIgWABIAbgDQAegEARACQAGABAoAJQAcAIADgIIAHgTQAEgJAEAKQADAIgEAJQgDALgMAAIgEAAg");
	this.shape_52.setTransform(57.7,100.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#444444").p("ACfAKQgGgbgRgRQgYgWgmAKQgSAGgMgFQgYgKgFgBQgFgCAAgEQAAgXgOgQQgQgQgXAAQgUAAgPANQgPAMgEAUQgBAFgFgBIgCAAQgWAAgPAQQgQAPAAAWQAAAQAKANQADAEgDAEQgMANAAASQAAAYAVAOQACABABAEQAFAGAGAGQAJAHAHABQAWAEAMgEQAFgCALgJQAbgWArAIQAZADAqALQAgADAOgJQASgMgKghQgCgIARgGQARgFgFgZg");
	this.shape_53.setTransform(55,94.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AhtB0QgHgBgJgHQgGgGgFgGQgBgEgCgBQgVgOAAgYQAAgSAMgNQADgEgDgEQgKgNAAgQQAAgWAQgPQAPgQAWAAIACAAQAFABABgFQAEgUAPgMQAPgNAUAAQAXAAAQAQQAOAQAAAXQAAAEAFACQAFABAYAKQAMAFASgGQAmgKAYAWQARARAGAbQAFAZgRAFQgRAGACAIQAKAhgSAMQgOAJgggDQgqgLgZgDQgrgIgbAWQgLAJgFACQgGACgJAAQgIAAgLgCg");
	this.shape_54.setTransform(55,94.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#444444").p("AigAxQAAgRAMgOQgKgSAAgSQAAgWAQgQQAPgPAWAAQAMgYAPgNQAPgNAUAAQAXAAAQAQQAOAQAAAXQAKAHAYAKQAMAFASgFQAmgLAYAXQARAQAGAcQAFAYgRAGQgRAFACAIQAKAigSAMQgOAIgggDQgqgKgZgEQgsgIgaAWQgMALgEAFQgLAHgWgEQgHgBgJgJQgHgIgFgKQgBgDgCgCQgVgNAAgZg");
	this.shape_55.setTransform(55,95.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#444444").s().p("ABEA0IgugMQgdgJgMACQgMACgYABIgXABIAbgFQAegEARACQAFABApALQAlgSABgDQAEgJAEAKQADAIgDALQgEALgLAAIgFAAgAgxgYQAXgFAOAKQAQASgagMQgagLgXAIIgSAJQAUgMAUgFgAA8gdQgOgTgEgDIAQAKQAKATgCAAQgBAAgFgHg");
	this.shape_56.setTransform(57.1,97.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AhsB4QgHgBgJgJQgHgIgFgKQgBgDgCgCQgVgNAAgZQAAgRAMgOQgKgSAAgSQAAgWAQgQQAPgPAWAAQAMgYAPgNQAPgNAUAAQAXAAAQAQQAOAQAAAXQAKAHAYAKQAMAFASgFQAmgLAYAXQARAQAGAcQAFAYgRAGQgRAFACAIQAKAigSAMQgOAIgggDQgqgKgZgEQgsgIgaAWIgQAQQgGAFgMAAIgPgCgAArA+IAuAMQAPACAFgNQADgLgDgIQgEgKgEAJQgBADglASQgpgLgHgBQgPgCgeAEIgbAFIAXgBQAYgBAKgCIAEAAQANAAAaAHgAgcgCQgUADgUAMIASgJQAXgGAaAJQAaAMgSgSQgHgEgNAAQgHAAgIABgABRgHQANARgPgdIgQgKQAEADAOATg");
	this.shape_57.setTransform(55,95.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#444444").p("AigAuQAAgSAMgNQgKgTAAgSQAAgWAQgPQAPgQAWAAQAMgYAPgMQAPgNAUAAQAXAAAQAQQAOAQAAAXQAKAHAYAKQAMAFASgGQAmgKAYAWQARARAGAbQAFAZgRAFQgRAGACAIQAKAhgSAMQgOAJgggDQgqgLgagEQgsgIgZAXQgMAMgEAJQgKAJgWgEQgHgBgKgLQgIgKgEgNQgBgEgCgBQgVgOAAgYg");
	this.shape_58.setTransform(55,95.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AhrB8QgHgBgKgLQgIgKgEgNQgBgEgCgBQgVgOAAgYQAAgSAMgNQgKgTAAgSQAAgWAQgPQAPgQAWAAQAMgYAPgMQAPgNAUAAQAXAAAQAQQAOAQAAAXQAKAHAYAKQAMAFASgGQAmgKAYAWQARARAGAbQAFAZgRAFQgRAGACAIQAKAhgSAMQgOAJgggDQgqgLgagEQgsgIgZAXQgMAMgEAJQgHAGgMAAIgNgBgAArA6IAuAMQAPADAFgOQADgKgDgJQgEgJgEAJQgBACglATQgpgMgHAAQgPgCgeAEIgbAEIAXgBQAYgBAKgCIAEAAQANAAAaAHgAgcgFQgUAEgUALIASgKQAXgFAaAJQAaAMgSgRQgHgGgNAAQgHAAgIACgABRgKQANARgPgeIgQgKQAEADAOAUg");
	this.shape_59.setTransform(55,95.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#444444").p("AigAqQAAgRAMgOQgKgSAAgSQAAgWAQgQQAPgPAWAAQAMgYAPgNQAPgNAUAAQAXAAAQAQQAOAQAAAXQAKAHAYAKQAMAFASgFQAmgLAYAXQARAQAGAcQAFAYgRAGQgRAFACAIQAKAigSAMQgOAIgggDQgrgLgZgEQgsgIgZAXQgNAOgDAMQgJALgWgEQgHgBgKgMQgJgMgEgRQgBgDgCgCQgVgNAAgZg");
	this.shape_60.setTransform(55,95.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AhqB/QgHgBgKgMQgJgMgEgRQgBgDgCgCQgVgNAAgZQAAgRAMgOQgKgSAAgSQAAgWAQgQQAPgPAWAAQAMgYAPgNQAPgNAUAAQAXAAAQAQQAOAQAAAXQAKAHAYAKQAMAFASgFQAmgLAYAXQARAQAGAcQAFAYgRAGQgRAFACAIQAKAigSAMQgOAIgggDQgrgLgZgEQgsgIgZAXQgNAOgDAMQgHAJgNAAIgLgCgAArA3IAuAMQAPACAFgNQADgLgDgIQgEgKgEAJQgBADglASQgpgLgHgBQgPgCgeAEIgbAFIAXgBQAYgBAKgCIAEAAQANAAAaAHgAgcgJQgUAFgUAKIASgHQAXgIAaAJQAaAMgSgQQgHgGgNAAQgHAAgIABgABRgOQANARgPgdIgQgKQAEADAOATg");
	this.shape_61.setTransform(55,95.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#444444").p("AigAnQAAgSAMgNQgKgTAAgSQAAgWAQgPQAPgQAWAAQAMgYAPgMQAPgNAUAAQAXAAAQAQQAOAQAAAXQAKAHAYAKQAMAFASgGQAmgKAYAWQARARAGAdQAFAXgRAFQgRAGACAIQAKAhgSAMQgOAJgggDQgrgMgZgEQgtgIgYAYQgNAPgDAQQgIANgVgEQgIgBgKgOQgKgPgEgTQAAgDgDgCQgVgOAAgYg");
	this.shape_62.setTransform(55,96.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AhoCDQgIgBgKgOQgKgPgEgTQAAgDgDgCQgVgOAAgYQAAgSAMgNQgKgTAAgSQAAgWAQgPQAPgQAWAAQAMgYAPgMQAPgNAUAAQAXAAAQAQQAOAQAAAXQAKAHAYAKQAMAFASgGQAmgKAYAWQARARAGAdQAFAXgRAFQgRAGACAIQAKAhgSAMQgOAJgggDQgrgMgZgEQgtgIgYAYQgNAPgDAQQgGAKgPAAIgIgBgAArAzIAuAMQAPADAFgOQADgKgDgJQgEgJgEAJQgBACglATQgpgMgHAAQgPgCgeAEIgbAEIAXgBQAYgBAKgCIAEAAQANAAAaAHgAgcgMQgUAEgUALIASgIQAXgHAaALQAaAKgSgRQgHgGgNAAQgHAAgIACgABRgRQANARgPgeIgQgKQAEADAOAUg");
	this.shape_63.setTransform(55,96.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#444444").p("AigAjQAAgRAMgOQgKgSAAgSQAAgWAQgQQAPgPAWAAQAMgYAPgNQAPgNAUAAQAXAAAQAQQAOAQAAAXQAKAHAYAKQAMAFASgFQAmgLAYAXQARAQAGAeQAFAWgRAGQgRAFACAIQAKAigSAMQgOAIgggDQgrgLgagFQgtgIgXAYQgNARgDATQgIAQgUgEQgIgBgLgQQgKgRgEgXQAAgDgDgCQgVgNAAgZg");
	this.shape_64.setTransform(55,96.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AhnCHQgIgBgLgQQgKgRgEgXQAAgDgDgCQgVgNAAgZQAAgRAMgOQgKgSAAgSQAAgWAQgQQAPgPAWAAQAMgYAPgNQAPgNAUAAQAXAAAQAQQAOAQAAAXQAKAHAYAKQAMAFASgFQAmgLAYAXQARAQAGAeQAFAWgRAGQgRAFACAIQAKAigSAMQgOAIgggDQgrgLgagFQgtgIgXAYQgNARgDATQgGANgOAAIgIgBgAArAwIAuAMQAPACAFgNQADgLgDgIQgEgKgEAJQgBADglASQgpgLgHgBQgPgCgeAEIgbAFIAXgBQAYgBAKgCIAEAAQANAAAaAHgAgcgQQgUAFgUALIASgIQAXgIAaALQAaAKgSgQQgHgGgNAAQgHAAgIABgABRgVQANATgPgfIgQgKQAEADAOATg");
	this.shape_65.setTransform(55,96.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#444444").p("AigAgQAAgSAMgNQgKgTAAgSQAAgWAQgPQAPgQAWAAQAMgYAPgMQAPgNAUAAQAXAAAQAQQAOAQAAAXQAKAHAYAKQAMAFASgGQAmgKAYAWQARARAGAdQAFAXgRAFQgRAGACAIQAKAhgSAMQgOAJgggDQgrgMgagFQgtgIgXAZQgOASgCAXQgHARgUgDQgIgCgLgRQgLgTgEgaQAAgDgDgCQgVgOAAgYg");
	this.shape_66.setTransform(55,96.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AhmCLQgIgCgLgRQgLgTgEgaQAAgDgDgCQgVgOAAgYQAAgSAMgNQgKgTAAgSQAAgWAQgPQAPgQAWAAQAMgYAPgMQAPgNAUAAQAXAAAQAQQAOAQAAAXQAKAHAYAKQAMAFASgGQAmgKAYAWQARARAGAdQAFAXgRAFQgRAGACAIQAKAhgSAMQgOAJgggDQgrgMgagFQgtgIgXAZQgOASgCAXQgFAOgPAAIgHAAgAArAsIAuAMQAPADAFgOQADgKgDgJQgEgJgEAJQgBACglATQgpgMgHAAQgPgCgeAEIgbAEIAXgBQAYgBAKgCIAEAAQANAAAaAHgAgcgTQgUAEgUANIASgKQAXgHAaALQAaAKgSgRQgHgGgNAAQgHAAgIACgABRgYQANATgPggIgQgKQAEADAOAUg");
	this.shape_67.setTransform(55,96.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#444444").p("AigAcQAAgRAMgMQgKgUAAgSQAAgWAQgQQAPgPAWAAQAMgYAPgNQAPgNAUAAQAXAAAQAQQAOAQAAAXQAKAHAYAKQAMAFASgFQAmgLAYAXQARAQAGAeQAFAWgRAGQgRAFACAIQAKAigSAMQgOAIgggDQgsgMgZgEQgugJgWAZQgOAUgCAaQgGAUgUgEQgIgBgLgTQgMgVgEgeQAAgDgDgCQgVgNAAgZg");
	this.shape_68.setTransform(55,97.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AhlCOQgIgBgLgTQgMgVgEgeQAAgDgDgCQgVgNAAgZQAAgRAMgMQgKgUAAgSQAAgWAQgQQAPgPAWAAQAMgYAPgNQAPgNAUAAQAXAAAQAQQAOAQAAAXQAKAHAYAKQAMAFASgFQAmgLAYAXQARAQAGAeQAFAWgRAGQgRAFACAIQAKAigSAMQgOAIgggDQgsgMgZgEQgugJgWAZQgOAUgCAaQgFARgPAAIgGgBgAArApIAuAMQAPACAFgNQADgLgDgIQgEgKgEAJQgBADglASQgpgLgHgBQgPgCgeAEIgbAFIAXgBQAYgBAKgCIAEAAQANAAAaAHgAgcgXQgUAFgUAMIASgJQAXgIAaALQAaAMgSgSQgHgGgNAAQgHAAgIABgABRgcQANATgPgfIgQgKQAEADAOATg");
	this.shape_69.setTransform(55,97.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#444444").p("AigAZQAAgSAMgLQgKgVAAgSQAAgWAQgPQAPgQAWAAQAMgYAPgMQAPgNAUAAQAXAAAQAQQAOAQAAAXQAKAHAYAKQAMAFASgGQAmgKAYAWQARARAGAdQAFAXgRAFQgRAGACAIQAKAhgSAMQgOAJgggDQgsgNgagEQgtgJgWAaQgPAVgBAeQgFAVgTgDQgJgBgMgVQgMgYgEggQAAgDgDgCQgVgOAAgYg");
	this.shape_70.setTransform(55,97.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AhjCSQgJgBgMgVQgMgYgEggQAAgDgDgCQgVgOAAgYQAAgSAMgLQgKgVAAgSQAAgWAQgPQAPgQAWAAQAMgYAPgMQAPgNAUAAQAXAAAQAQQAOAQAAAXQAKAHAYAKQAMAFASgGQAmgKAYAWQARARAGAdQAFAXgRAFQgRAGACAIQAKAhgSAMQgOAJgggDQgsgNgagEQgtgJgWAaQgPAVgBAeQgEASgQAAIgEAAgAArAlIAuAMQAPADAFgOQADgKgDgJQgEgJgEAJQgBACglATQgpgMgHAAQgPgCgeAEIgbAEIAXgBQAYgBAKgCIAEAAQANAAAaAHgAgcgaQgUAEgUANIASgKQAXgHAaALQAaAMgSgTQgHgGgNAAQgHAAgIACgABRgfQANATgPggIgQgKQAEADAOAUg");
	this.shape_71.setTransform(55,97.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#444444").p("AigAVQAAgRAMgMQgKgUAAgSQAAgWAQgQQAPgPAWAAQAMgYAPgNQAPgNAUAAQAXAAAQAQQAOAQAAAXQAKAHAYAKQAMAFASgFQAmgLAYAXQARAQAGAeQAFAWgRAGQgRAFACAIQAKAigSAMQgOAIgggDQgsgMgagFQgugJgVAaQgPAXgBAhQgEAYgTgDQgJgCgMgWQgOgagDgkQAAgDgDgCQgVgNAAgZg");
	this.shape_72.setTransform(55,98);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AhiCWQgJgCgMgWQgOgagDgkQAAgDgDgCQgVgNAAgZQAAgRAMgMQgKgUAAgSQAAgWAQgQQAPgPAWAAQAMgYAPgNQAPgNAUAAQAXAAAQAQQAOAQAAAXQAKAHAYAKQAMAFASgFQAmgLAYAXQARAQAGAeQAFAWgRAGQgRAFACAIQAKAigSAMQgOAIgggDQgsgMgagFQgugJgVAaQgPAXgBAhQgEAVgOAAIgFAAgAArAiIAuAMQAPACAFgNQADgLgDgIQgEgKgEAJQgBADglASQgpgLgHgBQgPgCgeAEIgbAFIAXgBQAYgBAKgCIAEgBQANAAAaAIgAgcgeQgUAFgUAMIASgJQAXgIAaALQAaAMgSgSQgHgHgNAAQgHAAgIACgABRgjQANATgPgfIgQgKQAEADAOATg");
	this.shape_73.setTransform(55,98);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#444444").p("AigARQAAgRAMgMQgKgUAAgSQAAgWAQgQQAPgPAWAAQAMgYAPgNQAPgNAUAAQAXAAAQAQQAOAQAAAXQAKAHAYAKQAMAFASgFQAmgLAYAXQARAQAGAeQAFAXgRAFQgRAFACAIQAKAigSAMQgOAIgggDQgsgNgbgFQgugJgUAbQgPAYgCAlQgCAagTgDQgKgBgMgYQgOgdgDgnQAAgCgDgDQgVgNAAgZg");
	this.shape_74.setTransform(55,98.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AhhCZQgKgBgMgYQgOgdgDgnQAAgCgDgDQgVgNAAgZQAAgRAMgMQgKgUAAgSQAAgWAQgQQAPgPAWAAQAMgYAPgNQAPgNAUAAQAXAAAQAQQAOAQAAAXQAKAHAYAKQAMAFASgFQAmgLAYAXQARAQAGAeQAFAXgRAFQgRAFACAIQAKAigSAMQgOAIgggDQgsgNgbgFQgugJgUAbQgPAYgCAlQgCAYgPAAIgEgBgAArAeIAuAMQAPACAFgNQADgLgDgIQgEgKgEAJQgBADglASQgpgLgHgBQgPgCgeAEIgbAFIAXgBQAYgBAKgCIAEAAQANAAAaAHgAgcgiQgUAFgUAMIASgJQAXgIAaALQAaAMgSgSQgHgGgNAAQgHAAgIABgABRgnQANATgPgfIgQgKQAEADAOATg");
	this.shape_75.setTransform(55,98.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#444444").p("AigAOQAAgQAMgNQgKgVAAgSQAAgWAQgPQAPgQAWAAQAMgYAPgMQAPgNAUAAQAXAAAQAQQAOAQAAAXQAKAHAYAKQAMAFASgGQAmgKAYAWQARARAGAdQAFAZgRADQgRAGACAIQAKAhgSAMQgOAJgggDQgtgNgagFQgugKgUAcQgQAZgBApQgBAcgTgDQgKgCgMgZQgPgfgDgqQAAgDgDgCQgVgOAAgYg");
	this.shape_76.setTransform(55,98.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AhgCdQgKgCgMgZQgPgfgDgqQAAgDgDgCQgVgOAAgYQAAgQAMgNQgKgVAAgSQAAgWAQgPQAPgQAWAAQAMgYAPgMQAPgNAUAAQAXAAAQAQQAOAQAAAXQAKAHAYAKQAMAFASgGQAmgKAYAWQARARAGAdQAFAZgRADQgRAGACAIQAKAhgSAMQgOAJgggDQgtgNgagFQgugKgUAcQgQAZgBApQgBAZgPAAIgEAAgAArAaIAuAMQAPADAFgOQADgKgDgJQgEgIgEAIQgBACglATQgpgMgHAAQgPgCgeAEIgbAEIAXgBQAYgBAKgCIAEAAQANAAAaAHgAgcglQgUAEgUANIASgKQAXgHAaALQAaAMgSgTQgHgGgNAAQgHAAgIACgABRgqQANATgPggIgQgKQAEADAOAUg");
	this.shape_77.setTransform(55,98.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#444444").p("AigAKQAAgPAMgOQgKgUAAgSQAAgWAQgQQAPgPAWAAQAMgYAPgNQAPgNAUAAQAXAAAQAQQAOAQAAAXQAKAHAYAKQAMAFASgFQAmgLAYAXQARAQAGAeQAFAYgRAGQgRADACAIQAKAigSAMQgOAIgggDQgtgNgagFQgvgKgTAcQgQAbgBAsQgBAfgRgDQgLgCgMgbQgQghgDguQAAgCgDgDQgVgNAAgZg");
	this.shape_78.setTransform(55,99.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AheChQgLgCgMgbQgQghgDguQAAgCgDgDQgVgNAAgZQAAgPAMgOQgKgUAAgSQAAgWAQgQQAPgPAWAAQAMgYAPgNQAPgNAUAAQAXAAAQAQQAOAQAAAXQAKAHAYAKQAMAFASgFQAmgLAYAXQARAQAGAeQAFAYgRAGQgRADACAIQAKAigSAMQgOAIgggDQgtgNgagFQgvgKgTAcQgQAbgBAsQAAAcgPAAIgDAAgAArAXIAuAMQAPACAFgNQADgLgDgIQgEgIgEAHQgBADglASQgpgLgHgBQgPgCgeAEIgbAFIAXgBQAYgBAKgCIAEgBQANAAAaAIgAgcgpQgUAFgUAMIASgJQAXgIAaALQAaAMgSgSQgHgHgNAAQgHAAgIACgABRguQANATgPgfIgQgKQAEADAOATg");
	this.shape_79.setTransform(55,99.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#444444").p("ACfgiQgGgdgRgRQgYgWgmAKQgSAGgMgFQgYgKgFgBQgFgCAAgEQAAgXgOgQQgQgQgXAAQgUAAgPANQgPAMgEAUQgBAFgFgBIgCAAQgWAAgPAQQgQAPAAAWQAAASAKANQADAEgDAEQgMANAAAQQAAAYAVAOQADACAAADQADAxAQAjQANAdALABQARADAAggQAAgwARgcQASgdAvAKQAbAFAtAOQAgADAOgJQASgMgKghQgCgIARgEQARgFgFgZg");
	this.shape_80.setTransform(55,99.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AhdCkQgLgBgNgdQgQgjgDgxQAAgDgDgCQgVgOAAgYQAAgQAMgNQADgEgDgEQgKgNAAgSQAAgWAQgPQAPgQAWAAIACAAQAFABABgFQAEgUAPgMQAPgNAUAAQAXAAAQAQQAOAQAAAXQAAAEAFACQAFABAYAKQAMAFASgGQAmgKAYAWQARARAGAdQAFAZgRAFQgRAEACAIQAKAhgSAMQgOAJgggDQgtgOgbgFQgvgKgSAdQgRAcAAAwQAAAdgOAAIgDAAg");
	this.shape_81.setTransform(55,99.4);

	this.instance_3 = new lib.補間動畫5("synched",0);
	this.instance_3.setTransform(55,99.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.補間動畫6("synched",0);
	this.instance_4.setTransform(55,121,0.096,0.096);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},94).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_59},{t:this.shape_56},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_56},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_56},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_56},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_56},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_56},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_56},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_56},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_56},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_56},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_56},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.instance_3}]},57).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},3).to({state:[]},1).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(164).to({_off:false},0).to({_off:true,scaleX:0.1,scaleY:0.1,y:121},6).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(164).to({_off:false},6).to({scaleX:0.24,scaleY:0.24,y:117.7},2).to({scaleX:0.1,scaleY:0.1,y:121},3).to({_off:true},1).wait(39));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_82 = new cjs.Graphics().p("AA0MmQgHgJAJgcIARgsQANgjgBiKQAAhYgqiHQgQgzAGiKQABgFiphHIiphDQBRgZBjgWQDDgtBdAIQARACBzApIByApQAFgBiiCQQACAWABAcQABA5gKAfQgIAYgKBQQgNBkgDATQgLA+AZCoQABAGAMAYQALAZgEAOQgDARgdAFQgUAEgvAAQhPAAgPgUg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(82).to({graphics:mask_graphics_82,x:40.9,y:82.7}).wait(11).to({graphics:null,x:0,y:0}).wait(122));

	// 泡泡02
	this.instance_5 = new lib.泡泡01();
	this.instance_5.setTransform(56.7,148.1,0.429,0.348,0,0,0,17.6,13);
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(82).to({_off:false},0).to({regY:12.9,scaleX:1,scaleY:1,x:56.5,y:95.9},12).wait(70).to({regX:17.7,regY:13,scaleX:0.1,scaleY:0.1,x:55.2,y:120.6},6).to({regX:17.8,regY:12.9,scaleX:0.24,scaleY:0.24,x:55.4,y:116.8},2).to({regX:17.7,regY:13,scaleX:0.1,scaleY:0.1,x:55.2,y:120.6},3).to({_off:true},1).wait(39));

	// 酒杯
	this.instance_6 = new lib.酒杯();
	this.instance_6.setTransform(55.1,163.6,0.093,0.093,0,0,0,12.4,68.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(58).to({_off:false},0).to({regY:68.7,scaleX:1,scaleY:1},5).to({scaleX:0.74,scaleY:0.74},3).to({scaleX:1,scaleY:1},3).wait(95).to({regX:12.5,regY:68.5,scaleX:0.1,scaleY:0.1,x:55,y:127.1},6).to({scaleX:0.24,scaleY:0.24,y:132.8},2).to({scaleX:0.1,scaleY:0.1,y:127.1},3).to({_off:true},1).wait(39));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_82 = new cjs.Graphics().p("ABmMcIAAguIAXgCQAjgCA6AAQA6AAAhACIAUACIAAAug");
	var mask_1_graphics_83 = new cjs.Graphics().p("ABmMcIAAhqIAXgFQAjgFA6AAQA6AAAhAFIAUAFIAABqg");
	var mask_1_graphics_84 = new cjs.Graphics().p("ABmMcIAAijIAXgIQAjgIA6AAQA6AAAhAIIAUAIIAACjg");
	var mask_1_graphics_85 = new cjs.Graphics().p("ABmMcIAAjYIAXgKQAjgLA6AAQA6AAAhALIAUAKIAADYg");
	var mask_1_graphics_86 = new cjs.Graphics().p("ABmMcIAAkJIAXgNQAjgNA6AAQA6AAAhANIAUANIAAEJg");
	var mask_1_graphics_87 = new cjs.Graphics().p("ABmMcIAAk3IAXgPQAjgPA6AAQA6AAAhAPIAUAPIAAE3g");
	var mask_1_graphics_88 = new cjs.Graphics().p("ABmMcIAAlhIAXgRQAjgRA6AAQA6AAAhARIAUARIAAFhg");
	var mask_1_graphics_89 = new cjs.Graphics().p("ABmMcIAAmHIAXgTQAjgUA6AAQA6AAAhAUIAUATIAAGHg");
	var mask_1_graphics_90 = new cjs.Graphics().p("ABmMcIAAmqIAXgVQAjgVA6AAQA6AAAhAVIAUAVIAAGqg");
	var mask_1_graphics_91 = new cjs.Graphics().p("ABmMcIAAnJIAXgWQAjgXA6AAQA6AAAhAXIAUAWIAAHJg");
	var mask_1_graphics_92 = new cjs.Graphics().p("ABmMcIAAnkIAXgYQAjgYA6AAQA6AAAhAYIAUAYIAAHkg");
	var mask_1_graphics_93 = new cjs.Graphics().p("ABmMcIAAn8IAXgZQAjgZA6AAQA6AAAhAZIAUAZIAAH8g");
	var mask_1_graphics_94 = new cjs.Graphics().p("ABmMcIAAoQIAXgaQAjgaA6AAQA6AAAhAaIAUAaIAAIQg");
	var mask_1_graphics_95 = new cjs.Graphics().p("ABmMcIAAogIAXgbQAjgbA6AAQA6AAAhAbIAUAbIAAIgg");
	var mask_1_graphics_96 = new cjs.Graphics().p("ABmMcIAAotIAXgcQAjgbA6AAQA6AAAhAbIAUAcIAAItg");
	var mask_1_graphics_97 = new cjs.Graphics().p("ABmMcIAAo2IAXgcQAjgcA6AAQA6AAAhAcIAUAcIAAI2g");
	var mask_1_graphics_98 = new cjs.Graphics().p("ABmMcIAAo8IAXgcQAjgcA6AAQA6AAAhAcIAUAcIAAI8g");
	var mask_1_graphics_99 = new cjs.Graphics().p("ABmMcIAAo+IAXgcQAjgcA6AAQA6AAAhAcIAUAcIAAI+g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(82).to({graphics:mask_1_graphics_82,x:33,y:79.7}).wait(1).to({graphics:mask_1_graphics_83,x:33,y:79.7}).wait(1).to({graphics:mask_1_graphics_84,x:33,y:79.7}).wait(1).to({graphics:mask_1_graphics_85,x:33,y:79.7}).wait(1).to({graphics:mask_1_graphics_86,x:33,y:79.7}).wait(1).to({graphics:mask_1_graphics_87,x:33,y:79.7}).wait(1).to({graphics:mask_1_graphics_88,x:33,y:79.7}).wait(1).to({graphics:mask_1_graphics_89,x:33,y:79.7}).wait(1).to({graphics:mask_1_graphics_90,x:33,y:79.7}).wait(1).to({graphics:mask_1_graphics_91,x:33,y:79.7}).wait(1).to({graphics:mask_1_graphics_92,x:33,y:79.7}).wait(1).to({graphics:mask_1_graphics_93,x:33,y:79.7}).wait(1).to({graphics:mask_1_graphics_94,x:33,y:79.7}).wait(1).to({graphics:mask_1_graphics_95,x:33,y:79.7}).wait(1).to({graphics:mask_1_graphics_96,x:33,y:79.7}).wait(1).to({graphics:mask_1_graphics_97,x:33,y:79.7}).wait(1).to({graphics:mask_1_graphics_98,x:33,y:79.7}).wait(1).to({graphics:mask_1_graphics_99,x:33,y:79.7}).wait(116));

	// 酒液_滿
	this.instance_7 = new lib.酒液_滿();
	this.instance_7.setTransform(54.7,128.6,1,1,0,0,0,10.6,25.4);
	this.instance_7._off = true;

	this.instance_7.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(82).to({_off:false},0).wait(82).to({regX:10.4,scaleX:0.1,scaleY:0.1,x:55,y:123.8},6).to({regY:25.6,scaleX:0.24,scaleY:0.24,x:54.9,y:124.6},2).to({regY:25.4,scaleX:0.1,scaleY:0.1,x:55,y:123.8},3).to({_off:true},1).wait(39));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_65 = new cjs.Graphics().p("AEZDxIBxhCIAKADQAKAGAJAPQAJAPgBAMIgCAIIhyBCg");
	var mask_2_graphics_66 = new cjs.Graphics().p("AEAD3ICLhQIAKADQAMAFAJAPQAIAPgBANIgEAJIiKBQg");
	var mask_2_graphics_67 = new cjs.Graphics().p("ADoD+ICjheIALABQANAFAJAPQAJAPgDANIgFAKIijBeg");
	var mask_2_graphics_68 = new cjs.Graphics().p("ADPEFIC7hsIANABQAOADAJAPQAJAQgFAOIgGAKIi7Bsg");
	var mask_2_graphics_69 = new cjs.Graphics().p("AClDwICLimIAUAEQAbAIAiAdQAiAdANAYIAFASIiLClg");
	var mask_2_graphics_70 = new cjs.Graphics().p("ABvEHIBKjLIAfAAQAsAEBDAZQBCAYAjAYIATASIhKDLg");
	var mask_2_graphics_71 = new cjs.Graphics().p("ABHFQIAAjYIAngKQA7gLBiAAQBiAAA4ALIAiAKIAADYg");
	var mask_2_graphics_72 = new cjs.Graphics().p("AA8F9IAAk2IApgPQA9gPBmAAQBlAAA6APIAjAPIAAE2g");
	var mask_2_graphics_73 = new cjs.Graphics().p("AAyGpIAAmSIAqgUQA/gSBpAAQBpAAA8ASIAkAUIAAGSg");
	var mask_2_graphics_74 = new cjs.Graphics().p("AAnHVIAAntIArgZQBCgYBsAAQBtAAA+AYIAlAZIAAHtg");
	var mask_2_graphics_75 = new cjs.Graphics().p("AAcICIAApLIAtgdQBDgdBwAAQBwAABAAdIAnAdIAAJLg");
	var mask_2_graphics_76 = new cjs.Graphics().p("AASIuIAAqoIAughQBFgiB0AAQBzAABCAiIAoAhIAAKog");
	var mask_2_graphics_77 = new cjs.Graphics().p("AAHJaIAAsFIAwgmQBHgmB3AAQB3AABEAmIApAmIAAMFg");
	var mask_2_graphics_78 = new cjs.Graphics().p("AgCKHIAAtiIAvgrQBKgrB6AAQB7AABGArIAqArIAANig");
	var mask_2_graphics_79 = new cjs.Graphics().p("AgMKzIAAu/IAwgwQBMgvB+AAQB9AABIAvIAsAwIAAO/g");
	var mask_2_graphics_80 = new cjs.Graphics().p("AgXLfIAAwcIAyg0QBNg0CCAAQCBAABKA0IAtA0IgBQcg");
	var mask_2_graphics_81 = new cjs.Graphics().p("AgiMMIAAx6IAzg5QBQg4CFAAQCFAABMA4IAtA5IAAR6g");
	var mask_2_graphics_82 = new cjs.Graphics().p("AgsM4IAAzXIA0g9QBSg9CIAAQCJAABOA9IAuA9IAATXg");
	var mask_2_graphics_87 = new cjs.Graphics().p("AgsM4IAAzXIA0g9QBSg9CIAAQCJAABOA9IAuA9IAATXg");
	var mask_2_graphics_88 = new cjs.Graphics().p("AgzN1IABzXIA0g9QBSg9CIAAQCJAABOA9IAuA9IAATXg");
	var mask_2_graphics_89 = new cjs.Graphics().p("Ag4OsIAAzWIA2g+QBQg9CJAAQCIAABOA+IAvA9IAATXg");
	var mask_2_graphics_90 = new cjs.Graphics().p("Ag9PfIAAzXIA2g9QBQg+CJAAQCIAABOA+IAvA9IAATXg");
	var mask_2_graphics_91 = new cjs.Graphics().p("AhCQMIAAzXIA3g9QBQg+CIAAQCIAABOA+IAvA9IAATXg");
	var mask_2_graphics_92 = new cjs.Graphics().p("AhGQ0IAAzXIA3g9QBQg+CIAAQCIAABOA+IAvA9IAATXg");
	var mask_2_graphics_93 = new cjs.Graphics().p("AhJRWIAAzXIA2g9QBQg9CIAAQCJAABOA9IAvA9IgBTXg");
	var mask_2_graphics_94 = new cjs.Graphics().p("AhMRzIAAzXIA2g9QBQg9CJAAQCIAABOA9IAvA9IAATXg");
	var mask_2_graphics_95 = new cjs.Graphics().p("AhPSLIAAzXIA3g9QBQg9CIAAQCJAABNA9IAvA9IAATXg");
	var mask_2_graphics_96 = new cjs.Graphics().p("AhQSdIAAzWIA2g+QBQg9CIAAQCJAABOA9IAuA+IAATWg");
	var mask_2_graphics_97 = new cjs.Graphics().p("AhSSrIAAzXIA3g9QBQg+CIAAQCIAABOA+IAvA9IAATXg");
	var mask_2_graphics_98 = new cjs.Graphics().p("AhTSzIAAzXIA3g9QBQg+CIAAQCIAABOA+IAvA9IAATXg");
	var mask_2_graphics_99 = new cjs.Graphics().p("AhTS1IAAzWIA3g+QBQg9CIAAQCIAABOA9IAvA+IAATWg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(65).to({graphics:mask_2_graphics_65,x:43.2,y:30.1}).wait(1).to({graphics:mask_2_graphics_66,x:43.3,y:30.7}).wait(1).to({graphics:mask_2_graphics_67,x:43.5,y:31.4}).wait(1).to({graphics:mask_2_graphics_68,x:43.6,y:32.1}).wait(1).to({graphics:mask_2_graphics_69,x:43.7,y:35.2}).wait(1).to({graphics:mask_2_graphics_70,x:44.8,y:35.9}).wait(1).to({graphics:mask_2_graphics_71,x:45.6,y:33.7}).wait(1).to({graphics:mask_2_graphics_72,x:45.8,y:38.1}).wait(1).to({graphics:mask_2_graphics_73,x:46.1,y:42.5}).wait(1).to({graphics:mask_2_graphics_74,x:46.4,y:47}).wait(1).to({graphics:mask_2_graphics_75,x:46.7,y:51.4}).wait(1).to({graphics:mask_2_graphics_76,x:47,y:55.8}).wait(1).to({graphics:mask_2_graphics_77,x:47.3,y:60.3}).wait(1).to({graphics:mask_2_graphics_78,x:47.6,y:64.7}).wait(1).to({graphics:mask_2_graphics_79,x:47.9,y:69.1}).wait(1).to({graphics:mask_2_graphics_80,x:48.2,y:73.6}).wait(1).to({graphics:mask_2_graphics_81,x:48.5,y:78}).wait(1).to({graphics:mask_2_graphics_82,x:48.8,y:82.5}).wait(5).to({graphics:mask_2_graphics_87,x:48.8,y:82.5}).wait(1).to({graphics:mask_2_graphics_88,x:48.2,y:88.5}).wait(1).to({graphics:mask_2_graphics_89,x:47.6,y:94.1}).wait(1).to({graphics:mask_2_graphics_90,x:47.1,y:99.1}).wait(1).to({graphics:mask_2_graphics_91,x:46.7,y:103.6}).wait(1).to({graphics:mask_2_graphics_92,x:46.2,y:107.6}).wait(1).to({graphics:mask_2_graphics_93,x:45.9,y:111}).wait(1).to({graphics:mask_2_graphics_94,x:45.6,y:114}).wait(1).to({graphics:mask_2_graphics_95,x:45.4,y:116.3}).wait(1).to({graphics:mask_2_graphics_96,x:45.2,y:118.2}).wait(1).to({graphics:mask_2_graphics_97,x:45,y:119.5}).wait(1).to({graphics:mask_2_graphics_98,x:45,y:120.3}).wait(1).to({graphics:mask_2_graphics_99,x:44.9,y:120.6}).wait(1).to({graphics:null,x:0,y:0}).wait(115));

	// 酒液
	this.instance_8 = new lib.酒液();
	this.instance_8.setTransform(60.7,106.1,1,1,0,0,0,11.5,48.7);
	this.instance_8._off = true;

	this.instance_8.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(65).to({_off:false},0).to({_off:true},35).wait(115));

	// 酒滴_09
	this.instance_9 = new lib.酒滴_09();
	this.instance_9.setTransform(74.7,44,0.238,0.238,0,0,0,3,1.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(47).to({_off:false},0).to({regX:2.8,scaleX:1,scaleY:1,rotation:30,x:41.1,y:35.8},3).to({regX:2.9,rotation:0,x:43.6,y:57.6},13).to({x:36.6,y:59.5,alpha:0},6).wait(146));

	// 酒滴_08
	this.instance_10 = new lib.酒滴_08();
	this.instance_10.setTransform(74.7,43.7,0.32,0.32,0,0,0,2.5,1.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(47).to({_off:false},0).to({regY:1,scaleX:0.92,scaleY:0.92,rotation:30,x:49.9,y:55.6},3).to({regX:2.6,rotation:45,x:47.8,y:82.6},13).to({x:43,y:87.7,alpha:0},6).wait(146));

	// 酒滴_07
	this.instance_11 = new lib.酒滴_07();
	this.instance_11.setTransform(74.6,41.4,0.164,0.164,0,0,0,7,0.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(47).to({_off:false},0).to({regY:0.5,scaleX:1,scaleY:1,rotation:30,x:48.6,y:47.1},3).to({regX:7.1,regY:0.6,rotation:0,x:37.2,y:71.3},13).to({x:29.8,y:73.5,alpha:0},6).wait(146));

	// 酒滴_06
	this.instance_12 = new lib.酒滴_06();
	this.instance_12.setTransform(73.8,43.3,0.29,0.29,0,0,0,1.6,1.4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(47).to({_off:false},0).to({regX:1.5,scaleX:1,scaleY:1,rotation:30,x:63.1,y:44.7},3).to({regX:1.6,x:49.9,y:57.2},13).to({x:45.7,y:62.5,alpha:0},6).wait(146));

	// 酒滴_05
	this.instance_13 = new lib.酒滴_05();
	this.instance_13.setTransform(73.3,40.1,0.284,0.284,0,0,0,3.4,2.6);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(47).to({_off:false},0).to({regY:2.7,scaleX:1,scaleY:1,rotation:30,x:59.9,y:31.1},3).to({rotation:105,x:39.7,y:40.3},13).to({x:31.3,y:42.2,alpha:0},6).wait(146));

	// 酒滴_04
	this.instance_14 = new lib.酒滴_04();
	this.instance_14.setTransform(73.9,44.5,0.381,0.381,0,0,0,2.1,2.1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(47).to({_off:false},0).to({regY:2,scaleX:1,scaleY:1,rotation:30,x:62.7,y:50.5},3).to({regY:2.1,rotation:0,x:57.5,y:67.2},13).to({x:54.3,y:72.9,alpha:0},6).wait(146));

	// 酒滴_03
	this.instance_15 = new lib.酒滴_03();
	this.instance_15.setTransform(74.8,44.8,0.174,0.174,40.7,0,0,2.3,-0.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(47).to({_off:false},0).to({regY:0.1,scaleX:1,scaleY:1,rotation:70.7,x:73,y:48},3).to({regX:2.4,regY:-0.1,rotation:29.5,x:65.4,y:62.2},13).to({regX:2.3,x:58.6,y:71.9,alpha:0},6).wait(146));

	// 酒滴_02
	this.instance_16 = new lib.酒滴_02();
	this.instance_16.setTransform(73.9,44.5,0.153,0.153,0,0,0,18.4,0);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(47).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:30,x:72.4,y:47.3},3).to({rotation:0,x:59,y:58.3},13).to({x:54.9,y:62.4,alpha:0},6).wait(146));

	// 酒滴01
	this.instance_17 = new lib.酒滴01();
	this.instance_17.setTransform(73.8,43.2,0.114,0.037,0,0,0,24.1,8.2);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(47).to({_off:false},0).to({regX:24,scaleX:1,scaleY:1,rotation:30,x:73,y:46.1},3,cjs.Ease.get(1)).to({regX:24.1,regY:8.3,rotation:0,x:59.7,y:51.7},13).to({x:52.9,y:53.6,alpha:0},6).wait(146));

	// beer02
	this.instance_18 = new lib.beer_body02();
	this.instance_18.setTransform(127.5,44.3,1,1,-97.5,0,0,16.7,60);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(89).to({_off:false},0).to({rotation:-1.7,x:133.4,y:161.4},13,cjs.Ease.get(0.5)).to({regX:16.8,rotation:-8.3},2).to({regX:16.7,rotation:-1.6},2).to({rotation:7,x:133.3,y:161.6},2).to({rotation:-1.5,x:133.4,y:161.5},2).to({regX:16.8,rotation:-7.7,x:133.5,y:161.4},3).to({regX:16.7,rotation:-1.7,x:133.4},2).wait(7).to({regX:16.6,scaleY:0.88,rotation:-1.6,x:133.3},0).to({regX:16.7,regY:60.1,scaleY:0.18,rotation:-1.7,x:133.4,y:161.5},6).to({regX:16.8,scaleY:0.23,rotation:-1.6,x:133.5,y:161.6},2).to({regX:16.7,scaleY:0.18,rotation:-1.7,x:133.4,y:161.5},2).to({regX:16.8,scaleY:0.05,x:133.6},6).to({_off:true},1).wait(76));

	// beer
	this.instance_19 = new lib.beer_body();
	this.instance_19.setTransform(364.6,68.2,0.325,0.325,30,0,0,16.4,29.8);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(10).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:-382.5,guide:{path:[364.5,68.1,358.7,64.6,349.1,60.4,330.1,52,311.6,49.1,252.9,39.9,221.4,86.7]}},14).to({rotation:-442.5,x:218.6,y:76.1},4).to({rotation:-502.5,x:193,y:88.2},5).to({rotation:-622.5,x:164.1,y:77.8},4).to({regX:16.3,rotation:-742.5,x:126.6,y:48.9},4).to({regY:29.7,rotation:-787.5,x:100.6,y:48.8},6).to({regY:29.8,rotation:-817.5,x:97.6,y:48.6},22).to({_off:true},20).wait(126));

	// door_close
	this.instance_20 = new lib.door_close();
	this.instance_20.setTransform(356.5,65,1,1,0,0,0,31.4,32.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(215));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(524.5,131.2,64.8,67.6);

})(beer_ani = beer_ani||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var beer_ani, images, createjs, ss;