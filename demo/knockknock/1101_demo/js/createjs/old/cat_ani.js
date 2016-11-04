(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 500,
	height: 200,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlnEIIAAoPILPAAIAAIPg");
	this.shape.setTransform(36,26.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72,52.8);


(lib.tail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AghA6IglgwIAnACQATABACgBQAGgDATgNQAKgIAHgTQADgIAGgYQAFgPgPgUQgCgCgGgPQgEgJAMAEQAGACAJAGQALAJAHAMQAIAMgCAXQgBAMgFAYQgEAVgSATQgGAGgQAMIgUANQgDADgBAEIgBAMIgDANQgDANAAAIQgBAMgFAHQgFgwgLgRg");
	this.shape.setTransform(7.1,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.3,24.6);


(lib.right_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgXA6QgCgHACgDIAGgIIAMgFQAEABABgCIAFgOIgcg0QgKgPgBgEQgBgFALADIAggLIAaBLQABAIgHAVIgBAIIgHAOQgCACgIAAIgRAAIAAABQgHAAgJgHg");
	this.shape.setTransform(3.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,13);


(lib.right_foot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgeA7QgLgBgDgEQgDgEADgIQAEgGAOgCQAMgCAOgWQADgGgZgbIgZgcIAZgFQARgDAFABQAHACAdAbQAKANABAGQACAGgIANIgLARQgKAQgFAFIgPAMIgSAAIgMAAg");
	this.shape.setTransform(4.7,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-2.7,9.7,12);


(lib.music = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQApQgEgDgCgFQgBgGADgFQAEgGAHgBQAEgCAFACIgJgyQAAgFAEgBIAJgBQAGABADACQAEACACAEQADAGAAAEIABADQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAIgDAAIgBgCQgBgFgCgCQgCgCgDgBQgFgBgEABIgBAAIAIAvQABAIgBAEQAAADgFAEQgCADgFACIgDAAQgFAAgDgCg");
	this.shape.setTransform(7.2,6.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgxAyQgVgVAAgdQAAgcAVgVQAVgVAcAAQAdAAAVAVQAVAVAAAcQAAAcgUAVIAIAPQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAgBgBAAIgQgIQgSAMgVAAQgcAAgVgVg");
	this.shape_1.setTransform(7.1,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.3,14.3);


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(0.5).p("A66AXQJXgOAlgBQB2gBE7AEQHNAHA8AFQA5AFCRgBQCdgBAcgJQAbgIBZACQBNADAxAGQAmAFBtgEQBpgFApgGQAhgGBQAFQA4ADAzAGQAjAEAYgEQAZgFgTgLQgRgIBigJQAygEA1gDIAfgEQAegCgDAKQgDAOAHAEQAJAHAbAAQATAAAjgJQAigLAUABQAFAAAZAKQAQAEA4gHQBdgOAHgBQAfgDAUAG");
	this.shape.setTransform(172.3,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.6,346.2,8.1);


(lib.left_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFA6IgFAAIgbgFIgDgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAgBIABgBIAAgBIAAAAIAAgEIACgFIADgEIAEgDIADgEIACgBIACAAIAKgCIAAgBIABgCIACgEIABgIIABgIIgBgQQgDgMAAgGIgCgIQgBgFgDgDIABgBQADADABAFIADAJQAAAGAEAMIACAQIAAAJIgBAJIgDAGIgBACIgCABIgJADIgDABIAAAAIgGAGIgCADIgCADIABABIAAACIADABIAWACIACABIACAAIAHgBIAFgBIAFgGIAHgPIAEgRIAFghIAGgSIAIgQIABAAIgBABIABgBIgFARIgFAzQgBAHgDAMIgEAJIgLAQIgBABIgBAAIAAABIgCAAIgIABIgHAAg");
	this.shape.setTransform(10.6,10.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AglA0QgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIABgDQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIACgEQABgCAFgFIADgDIAHgBIAGgDIACgEQACgDABgDIAAgHQABgNgDgOIgCgMQAAgIgFgIIgCgCIA+gHIgFANQgDAGgDARIgEAhQgCAQgFAKIgLAPQgCABgPAAg");
	this.shape_1.setTransform(10.7,10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.3,5,8.7,11.8);


(lib.left_foot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgdBQIgJgCQgCAAgCgDQgDgFADgHQADgHAPgCQAMgBANgXQADgFgXggIgZghQAIAAAIgRIAJgSQAPgJAIAMQAKANADAgQABAIANAPIAOAPQACAGgJAPIgIAQIgFAJQgDAGgFAFIgPAMIgSAAIgNAAg");
	this.shape.setTransform(4.2,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-4,9.1,16.1);


(lib.handle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").p("AgRAAQAAAIAGAFQAFAFAGAAQAHAAAGgFQAFgFAAgIQAAgGgFgFQgGgGgHAAQgGAAgFAGQgGAFAAAGg");
	this.shape.setTransform(1.8,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLAMQgGgFAAgHQAAgGAGgGQAFgFAGAAQAHAAAGAFQAFAGAAAGQAAAHgFAFQgGAGgHAAQgGAAgFgGg");
	this.shape_1.setTransform(1.8,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-1,7.8,5.7);


(lib.door_close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").p("AgID1IARAAIAAnqIgRAAg");
	this.shape.setTransform(1,24.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgID1IAAnqIARAAIAAHqg");
	this.shape_1.setTransform(1,24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,4,51.2);


(lib.collar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").p("AAtgoQghAxgRAPQgLAJgKAJQgHAIgCAAQgEACgEgNQBFhIAAgKQAAgIAIABQAIABADAJg");
	this.shape.setTransform(5.8,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrAnQBFhIAAgKQAAgIAIABQAHABADAJQggAxgSAPQgLAJgJAJIgJAIIgBABQgEAAgDgMg");
	this.shape_1.setTransform(5.9,5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,-0.8,11,12.2);


(lib.cat_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAUIgCgGIAAgOQACgDgEgIIgGgJIAMAFQAEADAHAHQAKAHgDAGIgJgFIADAFIABAIIgBADQgDACgEAAQgHAAAAgBg");
	this.shape.setTransform(5.2,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 圖層 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AAAAzQAAgDgCAAIgHABIgQAMQgEADgUAEIgDABQgEAAgGgCQgGgBgBgEQAAAAAAAAQgBgBABAAQAAAAAAAAQAAAAABAAIADABQAEAAAEgEIAKgGQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQgCAAgJAHQgFAEgLgCQgFAAgEgDIgIgHQgEgGAEgEQACgCADgJQABgCgBgNIgBgRQAAgKAJgNIAAgBIADgFIANgLQADgDgHgKQgEgHABgJQABgDAHABIAKAEIAcAKQADAAAiAFQAJABAXAOIAcASQAFADAPAEQgJAQgUAWQgWAYgWAMQgCABgDAIQgCAIgDABQgFgRgGgIgAhHAQQgBADABACQADAEAAgFIgBgFIgCgDgAg/AQIgFAHIAGgEIACgCIAAgCIgIgDgAg6hCIAGAKQAEAGgCAFQgBACABANIACAGQAAACAJAAQAEAAADgDIABgDIgBgHIgDgGIAJAGQADgGgKgKQgIgIgFgBIgMgGIAAAAg");
	this.shape_1.setTransform(9.5,7.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// 圖層 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AAEAMIgIgQIgCgHQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAIADAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAACQAAABAGAMQABACAAAEIgCAAIgBAAg");
	this.shape_2.setTransform(2.1,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.9,15.3);


(lib.cat_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8).p("ACpAGIAEgiQgCgKgHgHQgIgKgCgDQgGgNgNgGQgNgHgPABIAAAAQhUAFgIABQhaABgEABQgFABgLgEQgbA7gjATIgNAHQADAIAAACQAAAHAFALQABABAXAQQAFADAVANQADADAHAEQAyAIAfABQARABAUgBQARgBAagGQAKgBAJgDQAJgDAHgGIACgCQACgCADAAQAlAAAOgLQAOgLADggg");
	this.shape.setTransform(16.7,8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgWBUQgfgBgygIIgJgHIgbgQIgYgRQgFgLAAgHIgDgKIANgHQAjgTAbg7QALAEAFgBQAFgBBZgBIBcgGIABAAQAOgBANAHQANAGAHANIAKANQAGAHACAKIgEAiQgCAggOALQgOALglAAQgEAAgCACIgCACQgGAGgJADQgJADgLABQgaAGgRABIgZAAIgMAAg");
	this.shape_1.setTransform(16.8,8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-2.2,37.4,20.3);


(lib.bell = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgOAEIgIgCIgEgCIgEgCIAAAAIAAgCIACgBIADAAIgDAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAABIADABIAEABIAIAAIAgADIAIAAIACAAIgBAAIgDgDIAEACQABAAAAAAQABABAAAAQAAAAAAABQAAAAgBAAIgCACIgJAAg");
	this.shape.setTransform(3.2,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAEQgcgCgBgDQgBgEAFAAIAyAGQAJAEgIABIgagCg");
	this.shape_1.setTransform(3.2,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#444444").ss(1,1).p("AgRgBQgBAGAEAGQAFAGAIABQAGABAFgEQAHgFABgIQABgFgEgGQgFgHgIgBQgGgBgGAFQgGAFgBAHg");
	this.shape_2.setTransform(3.3,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBASQgIgBgEgHQgFgFABgGQABgHAGgGQAHgEAFABQAIABAEAHQAFAFgBAGQgBAIgGAFQgFADgGAAIgBAAg");
	this.shape_3.setTransform(3.3,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-3.1,10.2,10.2);


(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AAUAdQgRgBgYgbQgNgLgKgOQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAJAOANANQAXAYAQABQAMABAEgFIADgEQADgFADgBIAAAEIgDAEIgDAEQgFAGgLAAIgDAAg");
	this.shape.setTransform(6.3,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgBALQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQADgIgBgIQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQACAJgFAKIAAABg");
	this.shape_1.setTransform(9.9,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AgBAHIABgCQAAgFgCgHQAAgBABAAQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQADAJgBAFQAAAEgCABIgBABg");
	this.shape_2.setTransform(9.6,3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444444").s().p("AAAALIgBgCIABgDQAAgGgBgIIABgCQAFAKgEAJQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAg");
	this.shape_3.setTransform(9,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#444444").s().p("AABAMQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAIAAgBQAAgIgDgIQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAABABAAQAAAAAAABQAEAKAAAKIAAADg");
	this.shape_4.setTransform(8.5,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444444").s().p("AgBAEQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAgBQACgCACgBQABgBAAAAQABAAAAABQAAAAAAAAQAAABAAAAQABABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAg");
	this.shape_5.setTransform(5.8,4.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#444444").s().p("AgFAJQAAAAgBAAQAAgBAAAAQAAAAAAAAQABgBAAAAIAIgLIACgFIABAIQABAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgBAAQgEAFgDAEIgBABg");
	this.shape_6.setTransform(5.1,3.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444444").s().p("AgEAHIgCgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAFgCAAgCIAAgBIADgFIACAAIABACQABAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAgBgBAAIgBACIgBABQgCAFgEABg");
	this.shape_7.setTransform(4.6,3.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#444444").s().p("AgcAcQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIACgKQABgKADgGQAEgKANgIQALgIAOgCQAHAAADACQAAABABAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgDgDgFABQgOACgJAHQgMAIgEAHIgEAQIgBALQAAAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_8.setTransform(3.1,2.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444444").s().p("AgGAlQgUAAgQgKQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAABQAQAKATAAQAPAAARgLQAGgEACgDQAGgIgBgNQAAgMgEgRQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAEAOABAQQAAAQgGAIQgEAEgFADQgRALgRAAg");
	this.shape_9.setTransform(6.6,7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#444444").s().p("AARAUQABgPgCgFQgBgBgEgBQgFgBgDgEQgGgKgPAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAGgBAGACQAIADAFAGQACADAEABQAFACACAEQACAEAAAQIgCACQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_10.setTransform(8.4,2.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#444444").s().p("AgLANIgCAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAAAQAAgHAFgDIAIgGIAMgHIACABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgKAHQgDACgGAEQgEACABAEQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAAAg");
	this.shape_11.setTransform(2.4,1.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#444444").s().p("AAPAgQgPgFgGgJQgEgFgDgNIgCgFQgFgRANgJQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQgLAHAEAPIACAGQADAMAEAEQAEAIAPAEQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAg");
	this.shape_12.setTransform(1.9,6.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#444444").s().p("AgCADQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAIACgDQAAAAABgBQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIgDADIgBABg");
	this.shape_13.setTransform(6.4,9.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#444444").s().p("AAAAEQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAAAAIAAABQADACgCAEIgBABg");
	this.shape_14.setTransform(5.8,9.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#444444").s().p("AABAIQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIgCgNQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIADAMQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_15.setTransform(5,8.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#444444").s().p("AgBAJQgDgJAEgIIAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAAABAAAAIgBACQgCAGAAAIQABABAAAAQAAABAAAAQgBAAAAAAQAAABAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAgBAAAAg");
	this.shape_16.setTransform(1,5.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#444444").s().p("AAAAVQgBgCgBgTIAAgTIABgBIABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIAAASQAAAQACACQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIgCAAg");
	this.shape_17.setTransform(1.8,6.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#444444").s().p("AACATQgDgEgDgfQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAQAAAcAEAEQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAIgCABg");
	this.shape_18.setTransform(2.2,7.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#444444").s().p("AAEASQgDgDgGgaIgBgDQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABIACAEQAFAZACACQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIgCAAg");
	this.shape_19.setTransform(2.8,7.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#444444").s().p("AACAOQgCgDgCgLIgCgMIABgCQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIAAABIABAMQACAJADACQAAABAAAAQABABAAAAQAAAAgBABQAAAAAAAAIgBABg");
	this.shape_20.setTransform(3.5,8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#444444").s().p("AAFAQQgDAAgEgQIgFgOQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAGAaAEACIABACIgCACg");
	this.shape_21.setTransform(4.1,8.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#444444").s().p("AgGAPQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAGgCADgGQADgEgBgLIgBgBQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABIAAAAQACAMgEAHQgFAGgGACg");
	this.shape_22.setTransform(9.6,7.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#444444").s().p("AAAAEQAAgDAAgBIgBgCQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAEAFgBAFQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_23.setTransform(9.6,6.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#444444").s().p("AABAIIgBgBIgCgLQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAABAAAAQAAAAAAABIADAKQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBABg");
	this.shape_24.setTransform(9.1,6.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#444444").s().p("AAAAJQAAgDgDgMIAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAABQAAAHADAGQABAAAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgBABg");
	this.shape_25.setTransform(8.5,7.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#444444").s().p("AACANQgCgEgEgUQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAEAVACACQAAABAAAAQABAAgBABQAAAAAAAAQAAABgBAAIgBAAg");
	this.shape_26.setTransform(8,7.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#444444").s().p("AADAPIgCgBIgFgaQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIAGAYQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAABg");
	this.shape_27.setTransform(7.5,7.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#444444").s().p("AACAKIgCgBIgDgQQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAEAQQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAg");
	this.shape_28.setTransform(6.4,6.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#444444").s().p("AAAAMQgCgDAAgTQAAAAAAAAQABgBAAAAQAAAAAAAAQABgBAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAARACACQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAIgBAAg");
	this.shape_29.setTransform(5.8,6.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#444444").s().p("AAAAHQAAAAAAAAQAAAAAAAAQgBgBAAAAQABAAAAgBQAAgDAAgFIgBgBQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAAABQACAFgCAFQAAABAAAAQAAAAAAAAQAAAAgBABQAAAAAAAAg");
	this.shape_30.setTransform(5.2,5.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#444444").s().p("AAAAIIAAgCIAAgMQgBAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAABABQAAAAAAAAIABAHQAAAHgBABIgBABIAAgBg");
	this.shape_31.setTransform(4.5,5.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#444444").s().p("AAAAIIAAgDQAAgCgCgHQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAFAHgDAFIgCABg");
	this.shape_32.setTransform(4,5.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#444444").s().p("AAAAEQAAgCgCgFQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAEAHgBACQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_33.setTransform(3.2,4.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#444444").s().p("AgHAIQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgDAHgDIAFgHQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgMALIgCABg");
	this.shape_34.setTransform(2.6,2.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#444444").s().p("AgHAGQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQADgEALgGQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIAAABIgBABIAAAAQgIACgFAGIgBABg");
	this.shape_35.setTransform(3.4,2.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#444444").s().p("AgBACQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIACABQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgBAAIgBACIAAABg");
	this.shape_36.setTransform(6.6,1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#444444").s().p("AgEAFQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBADgBQABgEAEABQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgCAAgCAEIgCABg");
	this.shape_37.setTransform(7.2,1.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#444444").s().p("AgEADIAAgCIABgBQACgDAFAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgDAAIgBACQAAAAABAAQAAABgBAAQAAAAAAAAQAAABgBAAIAAAAIgCgBg");
	this.shape_38.setTransform(7.7,2.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#444444").s().p("AAMAMIgCgBQgFgLgRgHQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAABQARAHAGAMQABABAAAAQAAAAAAABQAAAAgBAAQAAAAgBABg");
	this.shape_39.setTransform(9.2,4.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#444444").s().p("AACAEIgDgEIgCgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAACAEABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIgBABg");
	this.shape_40.setTransform(8.7,5.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#444444").s().p("AAIAJQgGgDgIgIIgCgCIgBgCQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIADADQAIAIAFACQABABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIgBABg");
	this.shape_41.setTransform(8.8,4.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#444444").s().p("AAEAIIgBgBIgwgRQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIADgBIAuARIACABQAaAHAGgCIAGgCIgBgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQgBACgEABIgEACIgFAAQgLAAgSgGg");
	this.shape_42.setTransform(6.4,4.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#444444").s().p("AgFAIQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIAJgMQABAAAAgBQAAAAABAAQAAAAAAAAQABABAAAAIABACIgBABIgIAKIgCABg");
	this.shape_43.setTransform(4,2.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#444444").s().p("AALAYIgGgOQgFgKgMgVQgBgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABABQANAWAEAKIAGANQAAABAAAAQAAABAAAAQAAAAAAAAQAAABgBAAIgBAAg");
	this.shape_44.setTransform(6.6,2.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#444444").s().p("AAMAWIgCgBQAAgDgHgRQgDgHgMgMQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAQAMANAEAIIAIATQAAABAAAAQAAABAAAAQAAAAAAAAQgBABAAAAg");
	this.shape_45.setTransform(5.7,2.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#444444").s().p("AANAUIgCgBIgCgGQgJgWgNgHQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAOAHAKAYIADAGQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAg");
	this.shape_46.setTransform(5.3,2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 圖層 1
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgKAxIgQgFQgOgGgIgVQgIgVALgWQAEgHAIgGIAMgHQAEgCAIgBQAIgCACACIAOABIAKAEIAIAHQACACAKAFQACACAEAWQABACAAAKQAAAMgBADQgBAKgLAJQgEADgPAEQgNAEgEAAIgNgCg");
	this.shape_47.setTransform(5.6,5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.1,10.8);


(lib.cat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bell
	this.instance = new lib.bell();
	this.instance.setTransform(-2.2,9.3,1,1,0,0,0,3.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:3.5,rotation:31.9,x:-1.2,y:11.4},4).to({regX:3.4,rotation:0,x:-2.2,y:9.3},4).to({rotation:14.7,x:-1.2,y:11},4).to({rotation:0,x:-2.2,y:9.3},4).to({regX:3.5,rotation:-24.2,x:-2.3,y:10.4},4).to({regX:3.4,rotation:0,x:-2.2,y:9.3},4).wait(1));

	// collar
	this.instance_1 = new lib.collar();
	this.instance_1.setTransform(2.5,5.2,1,1,0,0,0,4.8,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-9.5,x:2.6,y:5.7},4).to({rotation:0,x:2.5,y:5.2},4).to({rotation:-9.5,x:2.6,y:5.7},4).to({rotation:0,x:2.5,y:5.2},4).to({rotation:-9.5,x:2.6,y:5.7},4).to({rotation:0,x:2.5,y:5.2},4).wait(1));

	// tail
	this.instance_2 = new lib.tail();
	this.instance_2.setTransform(30.5,4.1,1,1,0,0,0,3.9,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:4,rotation:-7,x:30.6},12).to({regX:3.9,rotation:0,x:30.5},12).wait(1));

	// head
	this.instance_3 = new lib.cat_head();
	this.instance_3.setTransform(1.9,4.3,1,1,0,0,0,12.2,9.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:12.3,regY:9.5,rotation:-6.7,y:4.9},4).to({regX:12.2,regY:9.3,rotation:0,y:4.3},4).wait(1).to({regX:12.3,regY:9.5,rotation:-6.7,y:4.9},3).to({regX:12.2,regY:9.3,rotation:0,y:4.3},4).wait(1).to({regX:12.3,regY:9.5,rotation:-6.7,y:4.9},3).to({regX:12.2,regY:9.3,rotation:0,y:4.3},4).wait(1));

	// left_hand
	this.instance_4 = new lib.left_hand();
	this.instance_4.setTransform(8.7,14.5,1,1,22.2,0,0,11.6,6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:6,scaleX:1,scaleY:1,rotation:-17.9,y:14.3},4).to({regY:6.1,scaleX:1,scaleY:1,rotation:22.2,y:14.5},4).wait(1).to({regY:6,scaleX:1,scaleY:1,rotation:-17.9,y:14.3},3).to({regY:6.1,scaleX:1,scaleY:1,rotation:22.2,y:14.5},4).wait(1).to({regY:6,scaleX:1,scaleY:1,rotation:-17.9,y:14.3},3).to({regY:6.1,scaleX:1,scaleY:1,rotation:22.2,y:14.5},4).wait(1));

	// left-foot
	this.instance_5 = new lib.left_foot();
	this.instance_5.setTransform(30.4,10.7,1,1,0,0,0,2,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:24,y:10.4},4).to({x:30.4,y:10.7},4).wait(1).to({x:24,y:10.4},3).to({x:30.4,y:10.7},4).wait(1).to({x:24,y:10.4},3).to({x:30.4,y:10.7},4).wait(1));

	// body
	this.instance_6 = new lib.cat_body();
	this.instance_6.setTransform(-0.2,-0.1,1,1,0,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.03,scaleY:1.07},4).to({scaleX:1,scaleY:1},4).to({scaleX:1.03,scaleY:1.07},4).to({scaleX:1,scaleY:1},4).to({scaleX:1.03,scaleY:1.07},4).to({scaleX:1,scaleY:1},4).wait(1));

	// right_hand
	this.instance_7 = new lib.right_hand();
	this.instance_7.setTransform(3.5,12.1,1,1,-23.9,0,0,2.2,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,rotation:36.2,y:12},4).to({scaleX:1,scaleY:1,rotation:-23.9,y:12.1},4).wait(1).to({scaleX:1,scaleY:1,rotation:36.2,y:12},3).to({scaleX:1,scaleY:1,rotation:-23.9,y:12.1},4).wait(1).to({scaleX:1,scaleY:1,rotation:36.2,y:12},3).to({scaleX:1,scaleY:1,rotation:-23.9,y:12.1},4).wait(1));

	// right_foot
	this.instance_8 = new lib.right_foot();
	this.instance_8.setTransform(26.9,16.5,1,1,0,0,0,5.8,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:6.5,regY:0.8,scaleX:0.74,rotation:-4.5,x:34.5,y:15.3},4).to({regX:5.8,regY:1,scaleX:1,rotation:0,x:26.9,y:16.5},4).wait(1).to({regX:6.5,regY:0.8,scaleX:0.74,rotation:-4.5,x:34.5,y:15.3},3).to({regX:5.8,regY:1,scaleX:1,rotation:0,x:26.9,y:16.5},4).wait(1).to({regX:6.5,regY:0.8,scaleX:0.74,rotation:-4.5,x:34.5,y:15.3},3).to({regX:5.8,regY:1,scaleX:1,rotation:0,x:26.9,y:16.5},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-13.3,51.2,38.9);


// stage content:



(lib.cat_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// white
	this.instance = new lib.white();
	this.instance.setTransform(176.4,100,2.141,3.788,0,0,0,36,26.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(152).to({_off:false},0).to({alpha:1},26).to({_off:true},1).wait(40));

	// music
	this.instance_1 = new lib.music();
	this.instance_1.setTransform(407,108.7,0.248,0.248,0,0,0,12.9,13.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).to({regY:13.6,scaleX:1,scaleY:1,x:380.9},9).to({scaleX:0.81,scaleY:0.81,x:371.1},3).to({scaleX:1,scaleY:1,x:360.1},4).to({x:146.3},108,cjs.Ease.get(0.5)).to({_off:true},1).wait(40));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A7jH7IAAv2MA3GAAAIAAP2g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:300.8,y:113.2}).wait(179).to({graphics:null,x:0,y:0}).wait(40));

	// cat
	this.instance_2 = new lib.cat();
	this.instance_2.setTransform(504.7,124.6,1,1,0,0,0,17.3,8.4);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({_off:false},0).to({x:174.3},146,cjs.Ease.get(0.5)).to({_off:true},1).wait(40));

	// ball
	this.instance_3 = new lib.ball();
	this.instance_3.setTransform(479.2,134.9,1,1,0,0,0,5.5,5.4);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({rotation:-3600,x:132.4},164,cjs.Ease.get(0.5)).to({_off:true},1).wait(40));

	// 圖層 11 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_14 = new cjs.Graphics().p("EAlHALcIAApAIAJAAIAAJAg");
	var mask_1_graphics_15 = new cjs.Graphics().p("EAknALcIAApAIApAAIAAJAg");
	var mask_1_graphics_16 = new cjs.Graphics().p("EAkIALcIAApAIBIAAIAAJAg");
	var mask_1_graphics_17 = new cjs.Graphics().p("EAjpALcIAApAIBnAAIAAJAg");
	var mask_1_graphics_18 = new cjs.Graphics().p("EAjKALcIAApAICGAAIAAJAg");
	var mask_1_graphics_19 = new cjs.Graphics().p("EAirALcIAApAIClAAIAAJAg");
	var mask_1_graphics_20 = new cjs.Graphics().p("EAiMALcIAApAIDEAAIAAJAg");
	var mask_1_graphics_21 = new cjs.Graphics().p("EAhuALcIAApAIDiAAIAAJAg");
	var mask_1_graphics_22 = new cjs.Graphics().p("EAhPALcIAApAIEBAAIAAJAg");
	var mask_1_graphics_23 = new cjs.Graphics().p("EAgxALcIAApAIEfAAIAAJAg");
	var mask_1_graphics_24 = new cjs.Graphics().p("EAgSALcIAApAIE+AAIAAJAg");
	var mask_1_graphics_25 = new cjs.Graphics().p("Af0LcIAApAIFdAAIAAJAg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AfWLcIAApAIF7AAIAAJAg");
	var mask_1_graphics_27 = new cjs.Graphics().p("Ae4LcIAApAIGZAAIAAJAg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AeaLcIAApAIG3AAIAAJAg");
	var mask_1_graphics_29 = new cjs.Graphics().p("Ad9LcIAApAIHUAAIAAJAg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AdfLcIAApAIHyAAIAAJAg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AdCLcIAApAIIPAAIAAJAg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AclLcIAApAIIsAAIAAJAg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AcILcIAApAIJJAAIAAJAg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AbqLcIAApAIJnAAIAAJAg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AbOLcIAApAIKDAAIAAJAg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AaxLcIAApAIKgAAIAAJAg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AaULcIAApAIK9AAIAAJAg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AZ4LcIAApAILZAAIAAJAg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AZbLcIAApAIL2AAIAAJAg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AY/LcIAApAIMSAAIAAJAg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AYjLcIAApAIMuAAIAAJAg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AYHLcIAApAINKAAIAAJAg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AXrLcIAApAINmAAIAAJAg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AXPLcIAApAIOCAAIAAJAg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AW0LcIAApAIOdAAIAAJAg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AWYLcIAApAIO5AAIAAJAg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AV9LcIAApAIPUAAIAAJAg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AViLcIAApAIPvAAIAAJAg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AVHLcIAApAIQKAAIAAJAg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AUsLcIAApAIQmAAIAAJAg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AURLcIAApAIRBAAIAAJAg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AT2LcIAApAIRcAAIAAJAg");
	var mask_1_graphics_53 = new cjs.Graphics().p("ATcLcIAApAIR2AAIAAJAg");
	var mask_1_graphics_54 = new cjs.Graphics().p("ATBLcIAApAISRAAIAAJAg");
	var mask_1_graphics_55 = new cjs.Graphics().p("ASnLcIAApAISrAAIAAJAg");
	var mask_1_graphics_56 = new cjs.Graphics().p("ASNLcIAApAITFAAIAAJAg");
	var mask_1_graphics_57 = new cjs.Graphics().p("ARzLcIAApAITfAAIAAJAg");
	var mask_1_graphics_58 = new cjs.Graphics().p("ARZLcIAApAIT5AAIAAJAg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AQ/LcIAApAIUTAAIAAJAg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AQlLcIAApAIUtAAIAAJAg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AQMLcIAApAIVGAAIAAJAg");
	var mask_1_graphics_62 = new cjs.Graphics().p("APyLcIAApAIVgAAIAAJAg");
	var mask_1_graphics_63 = new cjs.Graphics().p("APZLcIAApAIV5AAIAAJAg");
	var mask_1_graphics_64 = new cjs.Graphics().p("APALcIAApAIWSAAIAAJAg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AOnLcIAApAIWrAAIAAJAg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AOOLcIAApAIXEAAIAAJAg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AN1LcIAApAIXdAAIAAJAg");
	var mask_1_graphics_68 = new cjs.Graphics().p("ANdLcIAApAIX1AAIAAJAg");
	var mask_1_graphics_69 = new cjs.Graphics().p("ANELcIAApAIYOAAIAAJAg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AMsLcIAApAIYmAAIAAJAg");
	var mask_1_graphics_71 = new cjs.Graphics().p("AMTLcIAApAIY/AAIAAJAg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AL7LcIAApAIZXAAIAAJAg");
	var mask_1_graphics_73 = new cjs.Graphics().p("ALjLcIAApAIZvAAIAAJAg");
	var mask_1_graphics_74 = new cjs.Graphics().p("ALLLcIAApAIaHAAIAAJAg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AK0LcIAApAIaeAAIAAJAg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AKcLcIAApAIa2AAIAAJAg");
	var mask_1_graphics_77 = new cjs.Graphics().p("AKELcIAApAIbOAAIAAJAg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AJtLcIAApAIblAAIAAJAg");
	var mask_1_graphics_79 = new cjs.Graphics().p("AJWLcIAApAIb9AAIAAJAg");
	var mask_1_graphics_80 = new cjs.Graphics().p("AI/LcIAApAIcUAAIAAJAg");
	var mask_1_graphics_81 = new cjs.Graphics().p("AIoLcIAApAIcrAAIAAJAg");
	var mask_1_graphics_82 = new cjs.Graphics().p("AIRLcIAApAIdCAAIAAJAg");
	var mask_1_graphics_83 = new cjs.Graphics().p("AH6LcIAApAIdZAAIAAJAg");
	var mask_1_graphics_84 = new cjs.Graphics().p("AHkLcIAApAIdvAAIAAJAg");
	var mask_1_graphics_85 = new cjs.Graphics().p("AHNLcIAApAIeGAAIAAJAg");
	var mask_1_graphics_86 = new cjs.Graphics().p("AG3LcIAApAIecAAIAAJAg");
	var mask_1_graphics_87 = new cjs.Graphics().p("AGgLcIAApAIezAAIAAJAg");
	var mask_1_graphics_88 = new cjs.Graphics().p("AGKLcIAApAIfJAAIAAJAg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AF0LcIAApAIffAAIAAJAg");
	var mask_1_graphics_90 = new cjs.Graphics().p("AFfLcIAApAIf0AAIAAJAg");
	var mask_1_graphics_91 = new cjs.Graphics().p("AFJLcIAApAMAgKAAAIAAJAg");
	var mask_1_graphics_92 = new cjs.Graphics().p("AEzLcIAApAMAggAAAIAAJAg");
	var mask_1_graphics_93 = new cjs.Graphics().p("AEeLcIAApAMAg1AAAIAAJAg");
	var mask_1_graphics_94 = new cjs.Graphics().p("AEJLcIAApAMAhKAAAIAAJAg");
	var mask_1_graphics_95 = new cjs.Graphics().p("ADzLcIAApAMAhgAAAIAAJAg");
	var mask_1_graphics_96 = new cjs.Graphics().p("ADeLcIAApAMAh1AAAIAAJAg");
	var mask_1_graphics_97 = new cjs.Graphics().p("ADJLcIAApAMAiKAAAIAAJAg");
	var mask_1_graphics_98 = new cjs.Graphics().p("AC1LcIAApAMAieAAAIAAJAg");
	var mask_1_graphics_99 = new cjs.Graphics().p("ACgLcIAApAMAizAAAIAAJAg");
	var mask_1_graphics_100 = new cjs.Graphics().p("ACLLcIAApAMAjIAAAIAAJAg");
	var mask_1_graphics_101 = new cjs.Graphics().p("AB3LcIAApAMAjcAAAIAAJAg");
	var mask_1_graphics_102 = new cjs.Graphics().p("ABjLcIAApAMAjwAAAIAAJAg");
	var mask_1_graphics_103 = new cjs.Graphics().p("ABOLcIAApAMAkFAAAIAAJAg");
	var mask_1_graphics_104 = new cjs.Graphics().p("AA6LcIAApAMAkZAAAIAAJAg");
	var mask_1_graphics_105 = new cjs.Graphics().p("AAmLcIAApAMAktAAAIAAJAg");
	var mask_1_graphics_106 = new cjs.Graphics().p("AATLcIAApAMAlAAAAIAAJAg");
	var mask_1_graphics_107 = new cjs.Graphics().p("AAALcIAApAMAlTAAAIAAJAg");
	var mask_1_graphics_108 = new cjs.Graphics().p("AgTLcIAApAMAlmAAAIAAJAg");
	var mask_1_graphics_109 = new cjs.Graphics().p("AgmLcIAApAMAl5AAAIAAJAg");
	var mask_1_graphics_110 = new cjs.Graphics().p("Ag5LcIAApAMAmMAAAIAAJAg");
	var mask_1_graphics_111 = new cjs.Graphics().p("AhMLcIAApAMAmfAAAIAAJAg");
	var mask_1_graphics_112 = new cjs.Graphics().p("AhfLcIAApAMAmyAAAIAAJAg");
	var mask_1_graphics_113 = new cjs.Graphics().p("AhyLcIAApAMAnFAAAIAAJAg");
	var mask_1_graphics_114 = new cjs.Graphics().p("AiFLcIAApAMAnZAAAIAAJAg");
	var mask_1_graphics_115 = new cjs.Graphics().p("AiYLcIAApAMAnsAAAIAAJAg");
	var mask_1_graphics_116 = new cjs.Graphics().p("AiqLcIAApAMAn+AAAIAAJAg");
	var mask_1_graphics_117 = new cjs.Graphics().p("Ai8LcIAApAMAoQAAAIAAJAg");
	var mask_1_graphics_118 = new cjs.Graphics().p("AjPLcIAApAMAojAAAIAAJAg");
	var mask_1_graphics_119 = new cjs.Graphics().p("AjhLcIAApAMAo1AAAIAAJAg");
	var mask_1_graphics_120 = new cjs.Graphics().p("AjzLcIAApAMApHAAAIAAJAg");
	var mask_1_graphics_121 = new cjs.Graphics().p("AkFLcIAApAMApZAAAIAAJAg");
	var mask_1_graphics_122 = new cjs.Graphics().p("AkWLcIAApAMApqAAAIAAJAg");
	var mask_1_graphics_123 = new cjs.Graphics().p("AkoLcIAApAMAp8AAAIAAJAg");
	var mask_1_graphics_124 = new cjs.Graphics().p("Ak6LcIAApAMAqOAAAIAAJAg");
	var mask_1_graphics_125 = new cjs.Graphics().p("AlLLcIAApAMAqfAAAIAAJAg");
	var mask_1_graphics_126 = new cjs.Graphics().p("AlcLcIAApAMAqwAAAIAAJAg");
	var mask_1_graphics_127 = new cjs.Graphics().p("AltLcIAApAMArBAAAIAAJAg");
	var mask_1_graphics_128 = new cjs.Graphics().p("Al+LcIAApAMArSAAAIAAJAg");
	var mask_1_graphics_129 = new cjs.Graphics().p("AmPLcIAApAMArjAAAIAAJAg");
	var mask_1_graphics_130 = new cjs.Graphics().p("AmgLcIAApAMAr0AAAIAAJAg");
	var mask_1_graphics_131 = new cjs.Graphics().p("AmwLcIAApAMAsEAAAIAAJAg");
	var mask_1_graphics_132 = new cjs.Graphics().p("AnBLcIAApAMAsVAAAIAAJAg");
	var mask_1_graphics_133 = new cjs.Graphics().p("AnRLcIAApAMAslAAAIAAJAg");
	var mask_1_graphics_134 = new cjs.Graphics().p("AnhLcIAApAMAs1AAAIAAJAg");
	var mask_1_graphics_135 = new cjs.Graphics().p("AnxLcIAApAMAtFAAAIAAJAg");
	var mask_1_graphics_136 = new cjs.Graphics().p("AoBLcIAApAMAtVAAAIAAJAg");
	var mask_1_graphics_137 = new cjs.Graphics().p("AoRLcIAApAMAtlAAAIAAJAg");
	var mask_1_graphics_138 = new cjs.Graphics().p("AohLcIAApAMAt1AAAIAAJAg");
	var mask_1_graphics_139 = new cjs.Graphics().p("AowLcIAApAMAuEAAAIAAJAg");
	var mask_1_graphics_140 = new cjs.Graphics().p("ApALcIAApAMAuUAAAIAAJAg");
	var mask_1_graphics_141 = new cjs.Graphics().p("ApPLcIAApAMAujAAAIAAJAg");
	var mask_1_graphics_142 = new cjs.Graphics().p("ApeLcIAApAMAuyAAAIAAJAg");
	var mask_1_graphics_143 = new cjs.Graphics().p("AptLcIAApAMAvBAAAIAAJAg");
	var mask_1_graphics_144 = new cjs.Graphics().p("Ap8LcIAApAMAvQAAAIAAJAg");
	var mask_1_graphics_145 = new cjs.Graphics().p("AqLLcIAApAMAvfAAAIAAJAg");
	var mask_1_graphics_146 = new cjs.Graphics().p("AqaLcIAApAMAvuAAAIAAJAg");
	var mask_1_graphics_147 = new cjs.Graphics().p("AqoLcIAApAMAv8AAAIAAJAg");
	var mask_1_graphics_148 = new cjs.Graphics().p("Aq3LcIAApAMAwLAAAIAAJAg");
	var mask_1_graphics_149 = new cjs.Graphics().p("ArFLcIAApAMAwZAAAIAAJAg");
	var mask_1_graphics_150 = new cjs.Graphics().p("ArTLcIAApAMAwnAAAIAAJAg");
	var mask_1_graphics_151 = new cjs.Graphics().p("ArhLcIAApAMAw1AAAIAAJAg");
	var mask_1_graphics_152 = new cjs.Graphics().p("ArvLcIAApAMAxDAAAIAAJAg");
	var mask_1_graphics_153 = new cjs.Graphics().p("Ar9LcIAApAMAxRAAAIAAJAg");
	var mask_1_graphics_154 = new cjs.Graphics().p("AsKLcIAApAMAxeAAAIAAJAg");
	var mask_1_graphics_155 = new cjs.Graphics().p("AsYLcIAApAMAxsAAAIAAJAg");
	var mask_1_graphics_156 = new cjs.Graphics().p("AslLcIAApAMAx5AAAIAAJAg");
	var mask_1_graphics_157 = new cjs.Graphics().p("AszLcIAApAMAyHAAAIAAJAg");
	var mask_1_graphics_158 = new cjs.Graphics().p("AtALcIAApAMAyUAAAIAAJAg");
	var mask_1_graphics_159 = new cjs.Graphics().p("AtNLcIAApAMAyhAAAIAAJAg");
	var mask_1_graphics_160 = new cjs.Graphics().p("AtaLcIAApAMAyvAAAIAAJAg");
	var mask_1_graphics_161 = new cjs.Graphics().p("AtmLcIAApAMAy7AAAIAAJAg");
	var mask_1_graphics_162 = new cjs.Graphics().p("AtzLcIAApAMAzIAAAIAAJAg");
	var mask_1_graphics_163 = new cjs.Graphics().p("At/LcIAApAMAzUAAAIAAJAg");
	var mask_1_graphics_164 = new cjs.Graphics().p("AuMLcIAApAMAzhAAAIAAJAg");
	var mask_1_graphics_165 = new cjs.Graphics().p("AuYLcIAApAMAztAAAIAAJAg");
	var mask_1_graphics_166 = new cjs.Graphics().p("AukLcIAApAMAz5AAAIAAJAg");
	var mask_1_graphics_167 = new cjs.Graphics().p("AuwLcIAApAMA0FAAAIAAJAg");
	var mask_1_graphics_168 = new cjs.Graphics().p("Au8LcIAApAMA0RAAAIAAJAg");
	var mask_1_graphics_169 = new cjs.Graphics().p("AvILcIAApAMA0dAAAIAAJAg");
	var mask_1_graphics_170 = new cjs.Graphics().p("AvTLcIAApAMA0oAAAIAAJAg");
	var mask_1_graphics_171 = new cjs.Graphics().p("AvfLcIAApAMA00AAAIAAJAg");
	var mask_1_graphics_172 = new cjs.Graphics().p("AvqLcIAApAMA0/AAAIAAJAg");
	var mask_1_graphics_173 = new cjs.Graphics().p("Av1LcIAApAMA1KAAAIAAJAg");
	var mask_1_graphics_174 = new cjs.Graphics().p("AwALcIAApAMA1VAAAIAAJAg");
	var mask_1_graphics_175 = new cjs.Graphics().p("AwLLcIAApAMA1gAAAIAAJAg");
	var mask_1_graphics_176 = new cjs.Graphics().p("AwWLcIAApAMA1rAAAIAAJAg");
	var mask_1_graphics_177 = new cjs.Graphics().p("AwhLcIAApAMA12AAAIAAJAg");
	var mask_1_graphics_178 = new cjs.Graphics().p("AwrLcIAApAMA2AAAAIAAJAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_1_graphics_14,x:238.5,y:73.2}).wait(1).to({graphics:mask_1_graphics_15,x:238.5,y:73.2}).wait(1).to({graphics:mask_1_graphics_16,x:238.5,y:73.2}).wait(1).to({graphics:mask_1_graphics_17,x:238.5,y:73.2}).wait(1).to({graphics:mask_1_graphics_18,x:238.5,y:73.2}).wait(1).to({graphics:mask_1_graphics_19,x:238.5,y:73.2}).wait(1).to({graphics:mask_1_graphics_20,x:238.5,y:73.2}).wait(1).to({graphics:mask_1_graphics_21,x:238.5,y:73.2}).wait(1).to({graphics:mask_1_graphics_22,x:238.5,y:73.2}).wait(1).to({graphics:mask_1_graphics_23,x:238.5,y:73.2}).wait(1).to({graphics:mask_1_graphics_24,x:238.5,y:73.2}).wait(1).to({graphics:mask_1_graphics_25,x:238.5,y:73.2}).wait(1).to({graphics:mask_1_graphics_26,x:238.5,y:73.2}).wait(1).to({graphics:mask_1_graphics_27,x:238.5,y:73.2}).wait(1).to({graphics:mask_1_graphics_28,x:238.5,y:73.2}).wait(1).to({graphics:mask_1_graphics_29,x:238.5,y:73.2}).wait(1).to({graphics:mask_1_graphics_30,x:238.5,y:73.2}).wait(1).to({graphics:mask_1_graphics_31,x:238.5,y:73.2}).wait(1).to({graphics:mask_1_graphics_32,x:238.5,y:73.2}).wait(1).to({graphics:mask_1_graphics_33,x:238.5,y:73.2}).wait(1).to({graphics:mask_1_graphics_34,x:238.5,y:73.2}).wait(1).to({graphics:mask_1_graphics_35,x:238.5,y:73.2}).wait(1).to({graphics:mask_1_graphics_36,x:238.5,y:73.2}).wait(1).to({graphics:mask_1_graphics_37,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_38,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_39,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_40,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_41,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_42,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_43,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_44,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_45,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_46,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_47,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_48,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_49,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_50,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_51,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_52,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_53,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_54,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_55,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_56,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_57,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_58,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_59,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_60,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_61,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_62,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_63,x:238.6,y:73.2}).wait(1).to({graphics:mask_1_graphics_64,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_65,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_66,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_67,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_68,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_69,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_70,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_71,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_72,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_73,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_74,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_75,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_76,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_77,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_78,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_79,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_80,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_81,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_82,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_83,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_84,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_85,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_86,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_87,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_88,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_89,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_90,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_91,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_92,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_93,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_94,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_95,x:238.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_96,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_97,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_98,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_99,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_100,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_101,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_102,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_103,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_104,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_105,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_106,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_107,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_108,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_109,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_110,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_111,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_112,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_113,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_114,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_115,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_116,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_117,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_118,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_119,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_120,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_121,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_122,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_123,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_124,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_125,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_126,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_127,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_128,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_129,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_130,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_131,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_132,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_133,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_134,x:238.8,y:73.2}).wait(1).to({graphics:mask_1_graphics_135,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_136,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_137,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_138,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_139,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_140,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_141,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_142,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_143,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_144,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_145,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_146,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_147,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_148,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_149,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_150,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_151,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_152,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_153,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_154,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_155,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_156,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_157,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_158,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_159,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_160,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_161,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_162,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_163,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_164,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_165,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_166,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_167,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_168,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_169,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_170,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_171,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_172,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_173,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_174,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_175,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_176,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_177,x:238.9,y:73.2}).wait(1).to({graphics:mask_1_graphics_178,x:238.9,y:73.2}).wait(1).to({graphics:null,x:0,y:0}).wait(40));

	// line
	this.instance_4 = new lib.line();
	this.instance_4.setTransform(303.7,137.4,1,1,0,0,0,172.1,2.5);
	this.instance_4._off = true;

	this.instance_4.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).wait(138).to({alpha:0},26).to({_off:true},1).wait(40));

	// handle
	this.instance_5 = new lib.handle();
	this.instance_5.setTransform(471.4,115.9,0.286,1,0,0,0,0.5,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,x:446.7,y:115.5},14).wait(164).to({scaleX:0.29,x:471.4,y:115.9},13).wait(28));

	// door_open
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").p("AgDD3IAHgCIAAnpIgHgCg");
	this.shape.setTransform(471.7,115.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDj2IAHACIAAHpIgHACg");
	this.shape_1.setTransform(471.7,115.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#444444").p("Agbj/IA3ALIAAHqIg3AKg");
	this.shape_2.setTransform(469.4,115.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Agbj/IA3ALIAAHqIg3AKg");
	this.shape_3.setTransform(469.4,115.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#444444").p("AgykHIBlAUIAAHpIhlASg");
	this.shape_4.setTransform(467,115.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzkHIBnAUIAAHpIhnASg");
	this.shape_5.setTransform(467,115.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#444444").p("AhKkQICVAdIAAHqIiVAag");
	this.shape_6.setTransform(464.7,115.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhKkQICVAdIAAHqIiVAag");
	this.shape_7.setTransform(464.7,115.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#444444").p("AhQkOIChAbIAAHqIihAYg");
	this.shape_8.setTransform(464,115.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhRkOICjAbIAAHqIijAYg");
	this.shape_9.setTransform(464,115.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#444444").p("AhXkLICvAYIAAHqIivAVg");
	this.shape_10.setTransform(463.4,115.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhXkLICvAYIAAHpIivAWg");
	this.shape_11.setTransform(463.4,115.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#444444").p("AhekJIC9AWIAAHpIi9AUg");
	this.shape_12.setTransform(462.7,115.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhekJIC9AWIAAHpIi9AUg");
	this.shape_13.setTransform(462.7,115.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#444444").p("AhkkGIDJATIAAHpIjJARg");
	this.shape_14.setTransform(462,115.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhkkGIDJATIAAHpIjJARg");
	this.shape_15.setTransform(462,115.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#444444").p("AhrkDIDXAQIAAHpIjXAPg");
	this.shape_16.setTransform(461.4,115.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhrkEIDXAQIAAHqIjXAOg");
	this.shape_17.setTransform(461.4,115.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#444444").p("AhxkBIDjAOIAAHpIjjAMg");
	this.shape_18.setTransform(460.7,115.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhxkBIDjANIAAHqIjjAMg");
	this.shape_19.setTransform(460.7,115.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#444444").p("Ah4j+IDxAKIAAHqIjxAJg");
	this.shape_20.setTransform(460.1,115.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ah4j+IDxAKIAAHqIjxAJg");
	this.shape_21.setTransform(460.1,115.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#444444").p("Ah+j8ID9AIIAAHqIj9AHg");
	this.shape_22.setTransform(459.4,115.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ah+j8ID9AIIAAHqIj9AHg");
	this.shape_23.setTransform(459.4,115.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#444444").p("AiFj5IELAFIAAHqIkLAFg");
	this.shape_24.setTransform(458.8,115.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AiFj5IELAFIAAHpIkLAGg");
	this.shape_25.setTransform(458.8,115.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#444444").p("AiMj3IEYADIAAHpIkYADg");
	this.shape_26.setTransform(458.1,115.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AiMj3IEZADIAAHpIkZADg");
	this.shape_27.setTransform(458.1,115.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#444444").p("AiSD1IElAAIAAnpIklAAg");
	this.shape_28.setTransform(457.5,115.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AiSD1IAAnpIElAAIAAHpg");
	this.shape_29.setTransform(457.5,115.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#444444").p("AiKj3IEVADIAAHqIkVADg");
	this.shape_30.setTransform(458.3,115.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AiKj4IEVAEIAAHpIkVADg");
	this.shape_31.setTransform(458.3,115.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#444444").p("AiCj6IEFAGIAAHqIkFAGg");
	this.shape_32.setTransform(459.1,115.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AiCj6IEFAGIAAHpIkFAHg");
	this.shape_33.setTransform(459.1,115.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#444444").p("Ah6j+ID1AKIAAHqIj1AJg");
	this.shape_34.setTransform(459.9,115.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ah6j+ID1AKIAAHqIj1AJg");
	this.shape_35.setTransform(459.9,115.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#444444").p("AhykBIDlANIAAHqIjlAMg");
	this.shape_36.setTransform(460.7,115.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhykBIDlANIAAHqIjlAMg");
	this.shape_37.setTransform(460.7,115.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#444444").p("AhqkEIDVARIAAHpIjVAPg");
	this.shape_38.setTransform(461.5,115.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhqkEIDVARIAAHpIjVAPg");
	this.shape_39.setTransform(461.5,115.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#444444").p("AhikHIDFAUIAAHpIjFASg");
	this.shape_40.setTransform(462.3,115.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhikHIDFAUIAAHpIjFASg");
	this.shape_41.setTransform(462.3,115.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#444444").p("AhakKIC1AXIAAHqIi1AUg");
	this.shape_42.setTransform(463.1,115.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhakKIC1AXIAAHpIi1AVg");
	this.shape_43.setTransform(463.1,115.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#444444").p("AhSkNIClAaIAAHqIilAXg");
	this.shape_44.setTransform(463.9,115.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhSkNIClAaIAAHpIilAYg");
	this.shape_45.setTransform(463.9,115.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#444444").p("Ag4kKIBxAXIAAHpIhxAVg");
	this.shape_46.setTransform(466.4,115.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Ag4kKIBxAXIAAHpIhxAVg");
	this.shape_47.setTransform(466.4,115.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#444444").p("AgnkDIBPAQIAAHpIhPAOg");
	this.shape_48.setTransform(468.2,115.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgmkDIBOAPIAAHqIhOAOg");
	this.shape_49.setTransform(468.2,115.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#444444").p("AgVj8IArAIIAAHqIgrAIg");
	this.shape_50.setTransform(470,115.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgVj8IArAIIAAHpIgrAJg");
	this.shape_51.setTransform(470,115.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},164).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(28));

	// door_close
	this.instance_6 = new lib.door_close();
	this.instance_6.setTransform(475.3,116,1,1,0,0,0,1,24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(219));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(720.3,190.2,6.5,51.5);

})(cat_ani = cat_ani||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var cat_ani, images, createjs, ss;