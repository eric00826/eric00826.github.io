(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 400,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.whote_light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A/PXbMAAAgu2MA+eAAAMAAAAu2g");
	this.shape.setTransform(200,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);


(lib.shutter_circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgIACIgIgCIgBAAIgBAAIgBAAIgCAAIgCgBIAGAAIAGABIAIAAIALAAIAIAAIAIAAIgCAAIgFABIgBAAIgIABg");
	this.shape.setTransform(3.6,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXgBIAvABQgNACgLAAQgLAAgMgDg");
	this.shape_1.setTransform(3.6,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AgjAOIAAgcQABgLAiAAQAkAAAAAMIAAAbQAAAMgkAAQgjAAAAgMgAgbgMIAAAZQAFAFAWAAQAWAAAGgFIAAgZQgHgFgVAAQgVAAgGAFg");
	this.shape_2.setTransform(3.6,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVATQgKgCAAgDIAAgbQAAgDAKgCQAJgDAMAAQANAAAKADQAJACAAADIAAAbQAAADgJACQgKADgNAAQgMAAgJgDg");
	this.shape_3.setTransform(3.6,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.6,7.4,5.3);


(lib.shutter_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AANANIgRgDIgIgDIgCgBIgDgBIgEgDIgCgBIACABIABABIACABIACAAIACABIACABIADABIAJACIARAAIABAAIAAgCIABgCIAAgFIgBgFIAAgCIgBgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABIAAABIABACIgBALIgBAEIgCADIgBABg");
	this.shape.setTransform(4.5,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAAIAsgKQADAVgGAAQgdgBgMgKg");
	this.shape_1.setTransform(4.4,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AgIACQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAABAAIAAAAIADABIAMAAIABAAIABAAIABAAIgBAAIgBAAIgBABIgHABg");
	this.shape_2.setTransform(2.3,2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444444").s().p("AAAAfQgegEgGgRQgEgKAAgHQAAgJAHgEIAIgHQAFgEAIAAIAMACQAEAAACAFQABAEgDAEIgBADQAAAAAAABQABAAAAAAQAAAAABAAQAAABABAAIAhgBIAAAHIghACQgGAAgCgGQgDgHAEgFIgMgCQgEAAgDADIgIAGQgEADAAAEQAAAHAEAHQAFANAXADQAWADARgEIACAIQgLACgOAAQgQAAAAgBg");
	this.shape_3.setTransform(4.1,3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgBAbQgbgEgFgOQgEgJAAgHQAAgHAFgEIAIgGQAEgEAGABIANABQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgCADACAEQAAAFAFgBIAggBIABAjQgKACgMAAIgRgBg");
	this.shape_4.setTransform(4.3,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.3,6.5);


(lib.pic02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAWQgGgCgGAAQAOgRACgFQABgDACgBQACgBADAAIAFACQAGAAAGgHIAHgKIADAAIACABQACADAFAHIAGALQAIAIAOgCQgCAHgLACIgQgBQgQgBgOAIQgFADgDAAIgBAAIgIgCg");
	this.shape.setTransform(11.1,13.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah4A4IAagbQAEgFADgBQAEABAFAEQAGABAHgGQAGgIAEgCQAEgBAIgBQARgEAMgcQAMgeAOgFQAAAGAHAGQAIAFABAFIACAGQACAIAMADQAFABABACQADADgBAFIgCAHQgBAIAHAGQAHAGAKABIASAEQAKABAFAGIAFAEIAHABQABABABAJQABAIgBAAg");
	this.shape_1.setTransform(19.3,14.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AiGBVIgKifIEhgKIAACpg");
	this.shape_2.setTransform(17.6,11.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444444").s().p("AifB0IgRjaIFggNIAADngAijhbIAODDIE6AAIAAjPg");
	this.shape_3.setTransform(17.7,11.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiaBuIgPjOIFUgNIAADbg");
	this.shape_4.setTransform(17.7,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.4,23.3);


(lib.pic01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgMAOIAGgMIAGgHIABgDIAFgDIADgBIABgBIACAAIAAABIgCACIgCABIgDACIgFAHIgLAOg");
	this.shape.setTransform(26.8,12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AAAAEIAAgEIAAgBIAAgBIAAAAQAAgBAAABQABAAAAAAQAAAAAAABQAAABAAAAIgBADIAAABg");
	this.shape_1.setTransform(20.5,27.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AgDACIAFgDIABgBIAAABIAAABIgCABIgBABIgCABg");
	this.shape_2.setTransform(20,28.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444444").s().p("AABAGIgEgEIgDgBIADgEQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAEACIAAABQABAAAAAAQABABAAAAQABABAAAAQAAAAAAAAQAAAEgCABIgCABg");
	this.shape_3.setTransform(19.8,26.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#444444").s().p("AgDAEIgFgEQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQABAAAAAAQABgBAAABQABAAAAAAQABABAAAAIADACIAAAAIAAgCIACAAIABAAQABgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAQAAABAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgDACIgCAAIAAAAIgCACIgBABg");
	this.shape_4.setTransform(18.9,28.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444444").s().p("AADAGIgDAAIgEgEIgCgCQAAAAAAAAQgBgBABAAQAAgBAAAAQAAgBAAAAIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABIAAAAIAGADQADADgDACIgBABg");
	this.shape_5.setTransform(17.9,13.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#444444").s().p("AgBADQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAABABIACAAQAAAAABAAQAAABABAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBABgBAAg");
	this.shape_6.setTransform(18.6,13.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444444").s().p("AAAAKIgDgCIgCgBIADgKIACgFQAAAAAAAAQAAgBAAAAQABAAAAABQABAAAAAAIABABIABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABIgEAMIgCABg");
	this.shape_7.setTransform(19.6,14.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgBAFIABgHQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIADABIgDAKQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBg");
	this.shape_8.setTransform(19.7,14.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444444").s().p("AADAHIgEgFIAAAAQgGgDABgDQABgDADAAIABAAQADAAAFAHQACAEgDACIgBACg");
	this.shape_9.setTransform(18.2,13.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAAAIgCgBQgBgBAAAAQgBgBAAAAQABAAAAAAQAAgBABAAQAEAAACAFQAAABAAAAQABABAAAAQAAABgBAAQAAAAAAABg");
	this.shape_10.setTransform(18.2,13.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#444444").s().p("AADAFIgBgBQgCgEgCAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAEgCAHAGIAAAAQAAABAAAAQABABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_11.setTransform(19,13.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#444444").s().p("AgNANIgBgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIASgTQACgFAEACQAEADgBABIgNAQQgDAFgEABIgHACQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBg");
	this.shape_12.setTransform(17.5,19.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#444444").s().p("AACADIgCgDIgCAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIACAAQAAAAACADQAEACgBACQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABgBAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_13.setTransform(20.5,11.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#444444").s().p("AACAEIgBgBIgDgDQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIACAAIAFAEQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABg");
	this.shape_14.setTransform(20.1,12.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#444444").s().p("AAAACQALgPABgEQAEgHgCAGQgCAIgMAOIgOASIAOgUg");
	this.shape_15.setTransform(24.4,20.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#444444").s().p("AgUAWQAFACAFgCQAEgCAGgJQAHgIAFgGQAJgOgBgFQgBgCACACQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAIgNAPQgMAUgKAAQgDAAgCgCg");
	this.shape_16.setTransform(23.1,19.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#444444").s().p("AgIAFQgBgCACgHIABgCIAGABQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABIABAAIADABQADACgBABQAAABAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgBABIgEAAIgCAAIgBAAIgCABQgFAAgBgCgAgDAAIADAAIAAAAIAAAAIAAAAIgCAAg");
	this.shape_17.setTransform(28.4,14.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgFADQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIACgCIADAAIABABIAFABIABABIgBABIgEAAIgCACg");
	this.shape_18.setTransform(28.3,14.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#444444").s().p("AgDAGQgGgEAFgFQAEgGAFAEQAFADgFAFQgCADgDABIAAABIgDgCg");
	this.shape_19.setTransform(19.6,27.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#444444").s().p("AgDAHQgFgFAEgEQAEgHAEADQAFAFgEAEQgDAFgCAAIgDgBg");
	this.shape_20.setTransform(28.9,14.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#444444").s().p("AgTAiQgGgJACgLQACgOAGgJIAIgKIAJgLQAIgGAGAAQAHABABALIgBgDQgJgKgIAGQgGAEgHAJQgJAJgBAGQgHAWACADIAGAPIgDgDg");
	this.shape_21.setTransform(18.3,25.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#444444").s().p("AAAAHIAAgCIgCgEIAAgCIACgHIADANIgBAEg");
	this.shape_22.setTransform(14.9,28.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#444444").s().p("AAAABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBIABABIgBABIAAABIAAgBg");
	this.shape_23.setTransform(18.9,14.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#444444").s().p("AgqBjQgDAAgIgRQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBIAAgBIgBgEIAAgCIgCgOIABgDIABgGIgBgBIAAgBQgCAAAAgGIABgGIARgbQgEADgFgDQgEgBAAgFQAAgEAFgGIATgTQAEgGACAAQACgBAFADIABAAQAFACAAAEIAAADIABADIABAAQACACAAAFQAAAJADAEQACABAEAAQACABAEgBIAGgEIABgBIADgEIAAABIANgUIABgCIAAgDIAAgIIgBgDIgBgCQgFgMgDgCIgLgDIAAAAIgOgCIgBACQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgBAAIgDgBIgCAAIgDgEIgBgCIgCgDIABgEIABgEIABgIQABgHAFgEIACAAIABABIAGAGQACACABADIABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIgBABIAZADIABAAIAAAAQACgDAEAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAABABIAAAAIACABIADAAQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABACgCAGIgBABQgBADABAEIAAACIAHAOIAEAQQABAEgEAJIgXAfQgLAOgDADQgJAJgEACQgEACgBgEIAAAAIgCADIAAAAIgaAlIgFAHQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAIgBABIgBABQABAEgBACIgBABgAgagEIACABIgBACIgBABIAAAAIgCACIgXAjIAAABIAAACIACADIAAAAIAAAGIgBAIIACAMIAAABIABAEQABACgBADIgBABIAEAHIABAAIADgCIACgBIAFgGIAaglIAEgFIAAAAQADgDABAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAIAAABIAKgJQAGgGAHgKIAXgeQADgIgBgCIgLgfIAAgBQgBgGACgEIAAgCIABAAIgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIgDAAQgCAEgFgBIgZgDIgEABIgDAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgDIAAgCIACgCIgBgCIgFgEQgBABAAAAQgBABAAAAQAAABAAABQAAAAAAABIgBAHIABACIgBABIgCACIAAABIACADIABAAIADACQACgEADABIAOACIAHABQAGACACACQAEADAGANQADAFgBACIAAADQAAABABABQAAAAAAABQAAAAAAABQgBAAAAABIAAABIgBAEIgBADIAAAAIAAAAIgRAZQgMAIgGgCQgGgBgEgFQgEgDAAgLIAAgCIAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAgBAAAAIAAgDIgCgCIAAgBIABgDIgBAAIgCgBIgCgBIgXAXQgDAEAAACIAAABIABAAIADAAIAMgFIAAAAIACgBIACABg");
	this.shape_24.setTransform(20.7,21.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgzBQIABgFIgBgGIgCgNIABgJIAAgEIgBAAIgBgFIAAgDIAaglIgMAFQgCACgFgCQgCgBAAgDQAAgCAEgFQAHgIAGgFIALgMQACAAAEADQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIgBADIACACIAAACIACABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAAKAEAFQACACAGABQAEABALgGIAQgZIACgDIAAgEIAAgHIgCgGQgGgNgDgDQgBgBgGgBIgGgBIgPgCIgCABIAAACIgDAAIgCgBQAAgCAAABIgCABIgCgCIAAgCIgCgCIAAgDIACgEIABgIIACgGIADgCIAHAFQABADgBACIAAADIAAgBQABgBAAAAQABAAAAAAQAAAAABAAQAAAAAAABIgDACIgBADQAAAAAAABQAAAAAAAAQAAAAABAAQAAgBAAAAIAAAAIADAAIAbADQAAAAABAAQAAAAAAAAQABgBABAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAQABAAABAAIADAAIABACIAEAAQABAAgCAHQgCADABAHIAHAPIAEAPQABADgDAIIgYAfQgIAMgFAFIgMAKIgDgBIAAgDQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAgBABIgdApIgFAGQgBABAAAAQgBABAAAAQAAAAgBAAQAAAAAAgBIgDACIgBADIAAAFIAAAAQgBAAgIgQg");
	this.shape_25.setTransform(20.7,21.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#444444").s().p("AgHAkIgCgBIgBgCIgBgDIgGgOIgEgMIACgKIAFgJIAHgJQAHgJAPgCIABAAQADAAACACQAAABAAAAQABAAAAABQAAAAAAABQAAABAAABQgCAFgHAIQgEAFgDALIgDASQgBAFgFAIIgBACQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAgAgCgUIgLAOIgCAKIAJAWQAEgEABgEIABgSIACgGQADgIADgFIAHgKIAAAAQgOACgDAHg");
	this.shape_26.setTransform(27,14.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgHAgIgLgcIACgKIALgQQAFgGAGgCQAFgCAFAAQAEAAgBADQAAACgIAKQgGAIgCAJIgDATQAAADgFAIIgCADIAAgBg");
	this.shape_27.setTransform(27,14.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#444444").s().p("AgPAXQgIgGAAgLQgCgIAHgKQAHgJAKgDQAJgDAIAFQAIAGAAALQACAIgIAKQgGAKgKADIgFAAQgGAAgGgDgAAAgPQgGACgFAGQgEAGABAFQAAAHAFADQAFAEAEgCQAHgCAFgGQAEgGgBgFQAAgHgFgDQgDgDgEAAIgDABg");
	this.shape_28.setTransform(28.7,14.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#444444").s().p("AgPAXQgIgGAAgLQgCgIAHgKQAIgKAJgCQAJgDAIAFQAIAGAAALQACAIgIAKQgHAKgJADIgFAAQgGAAgGgDgAAAgPQgGACgEAGQgFAGABAFQAAAHAFADQAFAEAEgCQAHgCAFgGQAEgGgBgFQAAgHgFgDQgDgDgEAAIgDABg");
	this.shape_29.setTransform(19.2,27.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgLARQgGgFAAgHQgBgHAFgHQAGgHAHgCQAGgCAGAEQAGAEAAAJQABAFgFAHQgGAIgHACIgDABQgFAAgEgDg");
	this.shape_30.setTransform(19.3,27.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgLARQgGgFAAgHQgBgHAFgHQAFgHAIgCQAGgCAGAEQAGAEAAAJQABAGgFAGQgGAIgHACIgDABQgFAAgEgDg");
	this.shape_31.setTransform(28.7,14.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#444444").s().p("AimA3ICpjTICkAWIjGEjg");
	this.shape_32.setTransform(21.1,19.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#444444").s().p("AjaA9IDOkCIDnAjIj6FogAjJA7ICnB6IDolOIjNgfg");
	this.shape_33.setTransform(21.9,19.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AjQA9IDIj7IDZAiIjxFbg");
	this.shape_34.setTransform(21.8,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.9,39.7);


(lib.handel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").p("AAAgRQgFAAgGAFQgGAFAAAHQgBAGAGAGQAFAGAHAAQAGABAGgGQAFgFABgHQAAgGgFgGQgFgFgIgBg");
	this.shape.setTransform(1.9,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAASQgHAAgFgHQgGgFABgGQAAgHAGgGQAGgEAGAAQAHABAFAFQAFAGAAAGQgBAHgFAFQgGAFgGAAIAAAAg");
	this.shape_1.setTransform(1.9,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-1.1,7.8,8);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai4hDIEOgeIBjCCIlaBBg");
	mask.setTransform(18.6,9.9);

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AABAIIAAAAIgBgDIAAgBIgBgEIAAgEIAAgEIABAAIAAAIIAAADIABABIAAABIABABIAAABIAAABIAAAAg");
	this.shape.setTransform(11.3,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AAAALIAAgCIAAgCIAAgBIAAgBIAAgBIAAgKIAAgEIABAAIgBAEIAAAIIABACIAAAHg");
	this.shape_1.setTransform(12,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AAAADIAAgBIgBgCIABgCIAAABIACACIgBACg");
	this.shape_2.setTransform(13.3,7.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444444").s().p("AAAADIAAgBIAAgCQgBAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIACACIgBACg");
	this.shape_3.setTransform(13.8,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#444444").s().p("AgLAMIgCgDQgBgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAHgJIACgCIALgFQADgBACABQACABABAEQABAEgEABIgJACIgIAKQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAgAAIgIIgLAEIAAABIgHAJIgBACIABABIADAAIAHgJIACAAIAJgDQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBIgBgCIgBgBg");
	this.shape_4.setTransform(13.4,7.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKAKQgDgCABgDIAHgJIACgBIALgFQAFgBAAAFQAAABAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgKACIgHAKIgDABIgBgBg");
	this.shape_5.setTransform(13.4,7.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#444444").s().p("AgBAqIgBgBIgBgBIgCgBIgBAAIgCAAIgBgBIgBAAIgBgBIgEgEIgCgCIgBgGIAAgEIAAgEIADgHIAAgDIACgGIADgKIAEgGIAAgBIAZgZIAAABIgXAaIAAAAIgDAGIgEAKIAAACIAAACIAAACIgBADIgBAKIAAAEIAAABIAAACIABADIACACIACACIgBAAIABAAIAAAAIABAAIAEACIABABIABABIABAAIAAgBIAAgBIABAAIAEgBIABABIgBAAIgDACIgCAAIAAABIAAABIAAABg");
	this.shape_6.setTransform(11.2,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444444").s().p("AABAEIAAAAIAAgBIgBgBIgCgBIgBgBIAAAAIACAAIABAAIACACIAAABIABAAIAAgBIAAgBIgBgBIgCAAIAAAAIgCgDIACADIABAAIACAAIABAAIAAABIAAACIgBAAIgBABIgBAAgAgDAAIAAAAIAAABgAgDAAIAAAAg");
	this.shape_7.setTransform(10.8,12.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#444444").s().p("AACACIgCAAIgDgBIgDgBIgBgBIAHACIACABIADAAIACgBIABgBIAAABIgBAAIgCABg");
	this.shape_8.setTransform(13.6,10.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444444").s().p("AAAACIAAgBIAAgBIAAgBIAAABIAAAAIAAAAIAAACg");
	this.shape_9.setTransform(13.8,8.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#444444").s().p("AAAAIIAAgBIAAgCIgBgGIAAgCIAAgCIAAgBIABAFIAAADIAAADIAAABIAAABIAAgGIABgDIABgEIAAABIgBADIAAAGIABACIgBABIgBABg");
	this.shape_10.setTransform(15,7.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#444444").s().p("AgMAwIgBgBIgDAAIgDgBIgCgBIgFgFIgDgHIgBgCIAAgDIABgCIABgIIADgPIAAgBIABgDIAFgKIAKgKIACgBIAEgEIAHgJIAGgFIAAAAIARgHIAAAAIAEAAIgEABIgPAJIgFAFIgCACIgJALIgCACIgJAJIAAAAIgEAHIgBADIAAABIAAABIAAABIgGAVIAAACIAAABIAAABIAAAAIAAACIAEAGIACACIABABIABAAIACABIADABIABABIAAAAIgBAAIABAAIABgBIABgBIABAAIAAAAIABgBIACAAIAAgBIgBgDIgBAAIAAAAIgEgEIgEgDIAAgBIAAAAIgBAAIAAgCIABgBIABgBIADAAIADABIAGADIAAAAIABAAIAAAAIAAgHIgBgCIAAAAIAAgBIgBgCIACgHIABgCIABgCIAAAAIAAgCIADgCIAAgBIABAAIADgCIAAAAIABAAIAHgCIANgHIgNAJIAAAAIgGABIAAAAIgCACIAAABIgBABIgCADIgDADIAAAAIgBABIAAABIAAADIAAADIAAABIAAABIAAABIAAAIIAAABIAAACIgBABIgDAAIAAgBIgCAAIgBgBIgBAAIADACIABABIAAABIABAAIAAAAIABAEIAAACIAAAEIgBAAIAAAAIgBABIgBAAIgCAAIgCABIgBAAIAAAAIgBABg");
	this.shape_11.setTransform(12.4,11.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPAuQgFgBgCgCQgGgGgBgFQAAgDADgMIADgLIABgGIAFgIIAbgdIARgIIADAAIgCAkIAAAAIgOAIIgGABIgIAJIgBADQgCAEABAEQACAPgFgDQgLgGABADQABADAIAFQAEAIgEAAIgFABIgDAAIgBAAg");
	this.shape_12.setTransform(12.4,11.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#444444").s().p("AAHANIgDgCIgBgCIgCgDIgBgGIAAgBIAAgBIAAgDIgEgEIgCgBIgCgBIgBgBIABAAIAHADIABADIABADIABACIAEAKIABACIACAAIABAAIAAABIAAAAIgBABIgBAAIgBAAg");
	this.shape_13.setTransform(22.3,4.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#444444").s().p("AgKAGIgHgHQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAABIAFACIAcAEIAAAIgAgIADIAYACIAAgDIgagEIgFgBg");
	this.shape_14.setTransform(17.9,14.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAFIgHgHIAAgCQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAFACIAbADIAAAGg");
	this.shape_15.setTransform(17.9,14.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#444444").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEgAgCAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAAAQAAAAABAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQgBAAAAAAQAAAAAAAAQAAABgBAAQAAAAgBABQAAAAAAAAg");
	this.shape_16.setTransform(18.6,13.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgCAAQAAgDACAAQAEAAAAADQAAAEgEAAQgCAAAAgEg");
	this.shape_17.setTransform(18.7,13.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#444444").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAAAQAAAAAAABQAAABgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAAAgAgBAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_18.setTransform(17.6,13.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAg");
	this.shape_19.setTransform(17.6,13.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#444444").s().p("AAHAEIgMgBIgCgDIABAAQABgDAMAAIABABIAAAAIgBAAQgLAAgBACIAAAAIABABIAMACIAAABIAAAAg");
	this.shape_20.setTransform(18,13.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFABIgBgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABgCAFAAIAIAAIAAAGg");
	this.shape_21.setTransform(18,13.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#444444").s().p("AAEADIgIgDQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAIADIABACIgBAAg");
	this.shape_22.setTransform(17.5,11.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#444444").s().p("AAFACIgJgCIgBgBIACgBIAIACQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABIgBAAg");
	this.shape_23.setTransform(17.5,11.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#444444").s().p("AgCAKQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIACAAIABgKIgBgEQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIADAFIgFANg");
	this.shape_24.setTransform(18.6,12);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgCAIIADgQIACAFIgDALg");
	this.shape_25.setTransform(18.6,12);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#444444").s().p("AgKAFIAAgBQAEgJgBgEIgBgDIARAHIABgBIABABQABABgBADIgCAGIgDAGIAAACgAgHAEIALAEIAEgJIAAgCIgMgEQAAAFgDAGg");
	this.shape_26.setTransform(17.5,11.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgJAEQAFgKgCgDIAQAFIAAADIgFALg");
	this.shape_27.setTransform(17.5,11.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#444444").s().p("AAAAJIgDgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBIADgKIAAgBIAGACIAAABIgBAJQgBAFgDAAgAgBAEIABADQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIABgHIgCgBg");
	this.shape_28.setTransform(16.1,11.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgCAGIAAgDIACgKIAEABIgCAJQgBAEgBAAIAAABIgCgCg");
	this.shape_29.setTransform(16.1,11.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#444444").s().p("AgEACQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAIAGgCQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgGADIgBAAg");
	this.shape_30.setTransform(23.3,11.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#444444").s().p("AgDACQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAIAEgCIACABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgFADg");
	this.shape_31.setTransform(23,10.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#444444").s().p("AAAAMQgEAAgCgCQgDgDAAgGQgBgEACgDQABgCADgCIAEgBIAAAAIAAABQAMAQgCADQgEADgGAAgAgGgEQgBACABADQAAAFACADIAEABQADAAAFgDQgBgDgHgMQgFABgBADg");
	this.shape_32.setTransform(23.3,11.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFAJQgCgDgBgFQAAgEABgCQAAgCAEgCIADgBQAKAQgBABIgHADIgCABQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_33.setTransform(23.3,11.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#444444").s().p("AgHAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAABQAAAAABAAIAOADQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAg");
	this.shape_34.setTransform(12.4,20);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#444444").s().p("AgGAAIgBgCIACAAIAMACQAAAAAAABQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQAAABAAAAg");
	this.shape_35.setTransform(12.7,19.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#444444").s().p("AgDAOQgDgBgEgEQgEgFAAgDIADgIIADgFQABgDAVAHIABAAIgFAQIgBACQgGAEgFAAgAgLABQAAADAEAEIAFADIAEgBIAFgCIAFgOIgSgFIgFAMg");
	this.shape_36.setTransform(12.6,19.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgDANQgCgBgDgEQgFgEABgDIADgHIADgGQAAgBAJADIALADIgFAPIgGADIgFACIgBAAg");
	this.shape_37.setTransform(12.6,19.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#444444").s().p("AgIAAQABAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAKAAADgBQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAAAQgDABgLABg");
	this.shape_38.setTransform(19.8,21.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#444444").s().p("AgGABQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIANAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIgBABg");
	this.shape_39.setTransform(19.6,21.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#444444").s().p("AgKAHQgBgBAAgGIAAgJQABgCAFAAIAHAAQAGAAABACIAAABIABAFQACAHgBABQgBAEgIACIgDABQgGAAgDgFgAgIgHIAAAHIABAGIACACQABABABAAQAAAAABAAQAAAAABAAQAAAAABAAIABgBQAHgCABgCQABgCgDgEIgBgFIgGgBQgHAAgBABg");
	this.shape_40.setTransform(19.6,21.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgIAGIgBgGIAAgIQABgCAIAAQAJABgBABIACAHIABAGQgBABgKAFIgCAAQgDAAgDgFg");
	this.shape_41.setTransform(19.6,21.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAAAAIABAAIgBAAg");
	this.shape_42.setTransform(22.2,9.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAAAAIABAAIAAAAg");
	this.shape_43.setTransform(21.1,9.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAAAAIABAAIgBAAg");
	this.shape_44.setTransform(21.2,9.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAg");
	this.shape_45.setTransform(21.9,10);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAABg");
	this.shape_46.setTransform(21.5,9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAABg");
	this.shape_47.setTransform(21.6,10.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAg");
	this.shape_48.setTransform(21.7,8.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAg");
	this.shape_49.setTransform(21.4,9.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAg");
	this.shape_50.setTransform(21.2,9.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAg");
	this.shape_51.setTransform(22.2,9.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgCABQgCgBAEgCQABgCACAEQABACgDABIgBABQAAAAAAAAQAAAAAAgBQgBAAAAgBQgBAAAAgBg");
	this.shape_52.setTransform(21.7,9.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#444444").s().p("AgLgBIAKgKIANANIgLAKg");
	this.shape_53.setTransform(21.7,9.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgJAIQgCgHAFgKQACgDAEABQAGABACABQABABABAAQAAAAAAAAQAAABAAAAQAAAAgBAAQgIgEgGAJQgBACgBAFIAAAGIAAABIgCgEg");
	this.shape_54.setTransform(17.2,6.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#444444").s().p("AAAADIAAgBIAAAAIABABIABABIABgBIABgBIAAgBIABAAIgBAAIAAAAIgDgBIgDgCIgCgDIAEAEIAFABIAAAAIAAABIAAACIgCABIgCAAIgBAAIAAgBIAAAAIAAABIAAACg");
	this.shape_55.setTransform(22.3,8.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#444444").s().p("AAAAAIAAAAIAAAAIABABg");
	this.shape_56.setTransform(21.7,7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#444444").s().p("AAMATIgHgLIgNgUIgFgEIgGgDQACAAAEADIAFAEIAFAFIADAFQAEADACAGIAHALIgBAAIABAAIAAAAQACgCgBgEIAAAAIABAAQAEAAABAEIAAAAIgCgCIgDgBIAAgBIAAABIAAAAQABAFgDABIgBABgAANASg");
	this.shape_57.setTransform(21.3,5.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#444444").s().p("AAEAFIgEgBIgBgBIAFgDIAEAAIgCAAIgCAAIgEAAIgCAAIgEgCIgCgBIgBAAIAAgBIADACIACABIAEABIABAAIAHgCIABAAIAAAAIABABIAAABIgDAAIgCABIgFACIAFABIABAAIgBABIAAAAIgBAAg");
	this.shape_58.setTransform(19.8,13.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#444444").s().p("AAQAIIgBgBIAAgCIABAAIABAAIAAgBIACAAIgCABIgCACIACACgAAMAFIgCgBIgCgCIgCgCIAAAAIgEAAIgCAAIgGAAIgFgBIgDgDIgEgEIAAAAIAEADIAEAEIAFABIAEAAIADAAIAIAAIAHgDIAAAAIAAADIgCABIgBABIgCAAIgBgBIAAAAIgDAAIABAAIACACIABABIABAAIAAgBIABAAIAAABIAAAAIAAAAIgBAAIAAAAIAAAAIAAAAIAAAAIABAAIAAABgAAKAAIgDAAIAGAAIABAAIABAAIAAAAIABgBg");
	this.shape_59.setTransform(17.7,10.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#444444").s().p("AgFACIgDAAIgBgBIABgBIABAAIAAAAIAAAAIAAAAIAAAAIAAABIAAgBIACABIAGAAIAFgBQABAAAAAAQAAAAABAAQAAAAABAAQAAgBAAAAIgDABIgCABIgDABIgDAAg");
	this.shape_60.setTransform(23.3,14.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#444444").s().p("AAAAFIgCgBIAAgBIABgBIABAAIAAgBIACAAIACgBIABAAIgBAAIgEgBIgCgBIgEgCIAGACIAEABIACAAIABAAIAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBABIgDABIgCABIAAAAIAAAAIgBAAIABABIACABIACgBIgDABg");
	this.shape_61.setTransform(22.7,13.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#444444").s().p("AgDALIACgLIgBgMIABAMIAAAJIAAgBIABgFIAAgCIABgBIABAAIACAGIAAADIgBADIAAgDIAAgDIgCgEIAAAAIgBAEIAAADIgBABIAAABIgBAAIgBACg");
	this.shape_62.setTransform(23.4,11.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#444444").s().p("AABAEIgBgBIAAgBIAAgCIgBgBIAAgCIABADIAAABIABABIABACg");
	this.shape_63.setTransform(14.7,14.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#444444").s().p("AAAAAIAAAAIAAAAIAAAAIABAAIgBAAg");
	this.shape_64.setTransform(12.6,21.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#444444").s().p("AAAAAIABAAIgBAAg");
	this.shape_65.setTransform(12.3,20.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#444444").s().p("AACAMIgBAAIAAgBIgBAAIAAgBIAAgCIAAgBIAAgCIgBgBIgBAAIAAABIgBABIAAAFIgBgFIABgCIABgBIACAAIAAABIABAEIAAABIABABIAAABIAAAAIABAAIABAAIgBgDIgCgCIgBgGQgBgFABgGQAAAHAAAEIACAFIACADIABADIgCABg");
	this.shape_66.setTransform(12.9,17.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#444444").s().p("AgDAFIAAAAIAAgCIACgBIgFgCIADAAIADAAIAAAAIABAAIgBAAIgBgBIgDgBIgBgBIAAgBIABgCQAEAEAHABQgGAAgFgEIAAABIAAABIAGADIAAAAIgDAAIABABIAAABIAAAAIgCACIgBAAIAAABIABACgAABAAIAAAAIAAAAg");
	this.shape_67.setTransform(11.2,22.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#444444").s().p("AAAAHIgBgDIAAgBIAAgBIABgBIgDgBIAAAAIAAAAIACgBIABgBIAAAAIAEAAIAAAAIAAABIAAAAIgEABIgBAAIAAAAIABABIAAABIAAAAIAAABIAAAEgAABgGIABAAIAAABg");
	this.shape_68.setTransform(20.2,25.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#444444").s().p("AgCACIgBAAIABAAIAAgBIADgBIABAAIACAAIAAgCIAAABIAAABIgDABIgBABIgBABg");
	this.shape_69.setTransform(20.7,22.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#444444").s().p("AACAEIACgEIAAgCIgCABIgGAEIgBgBIAFgDIAAgBQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAIABAAIAAABIAAADIgBADIgBACgAAFADIABAAIgBAAg");
	this.shape_70.setTransform(20.1,19.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#444444").s().p("AACAXIgCgCIgBgDIgBgHIAAgDIABgCIAAgQIgBgMIAAAAIAAAAIACAGIAAAGIABAbIABAEIAAAAIAAAAIABABIAAABg");
	this.shape_71.setTransform(17.9,19.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#444444").s().p("AgGAIIABgDIACgDIADgCIAFgFIABgDIAAgBIAAAAIABAAIgBABIAAAEIgGAJIgCADIgEACg");
	this.shape_72.setTransform(16,18.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#444444").s().p("AAHANIgBgBIgBAAIAAgCIABgBIABAAIADgDIgBAAIgCgBIgHgEIgEgDIgEgGIgCgDIAAgBIAAAAIACAEIAIAIIAIAEIADABIAAAAIAAABQgBADgDABIgBAAIAAABIAAAAIAAAAIABABIABABg");
	this.shape_73.setTransform(16.1,15.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#444444").s().p("AgJAgIgBgBIgBAAQgFgCgFgDIgEgCIgEgEIAAgDIABgDIAAgFIAAAAIAAAAIABAFIAAAEIAAABIACABIACABIAEADIAKAEIABAAIACAAIAFAAIAKgDIACgBIAAAAIABgBIAFgGIACgBIACgCIACgDIACgFIAAgBIABgBIABgEIAAgEIgBgFIgBgBIAAAAIAAgBIgGgJIgHgHIAAAAIgKgCIgCAAIgBgBIgCABIgDAAIgDABIgBABIgEADIgIAIIAHgIIAFgFIAEgBIAFgBIABAAIANACIAAAAIABAAIAHAIIAGAJIAAAAIABABIABAEIABADIAAAGIgBACIAAACIAAABIgCAFIgDAFIgDADIgBAAIgFAGIgBABIgCABIgBAAIgDACIgOACg");
	this.shape_74.setTransform(18.3,6.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#444444").s().p("AAEAUIgNgBIgFgFIgEgFQgDgCAAgEIADgLIACgGIACgDIABgBIACgBIAGAAQAFAAAGAEIAKAIIAEAFIABACIgFgGIgLgJQgFgDgFAAIgGAAIgCABIgBABIgBACIgBAGIgCAHIgBAEIACAGIAJAIIAMADIAFAAIABgBIACAAIACAAIACgBIgCABIgCABIgCAAIgBAAg");
	this.shape_75.setTransform(17.8,7.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#444444").s().p("AgCATIgHgBQgGgEgEgFQgCgEABgFIACgKIADgGIACgCQARgHARAaIgCAHIgDAGIgCAFIgGABIgCAAIgIgBg");
	this.shape_76.setTransform(17.9,7.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#444444").s().p("AgCALIgMgFIgGgGIgEgFIgCgFIADABIAHAJIAHAFQAHAEACAAQASAAAJgCIgMAEg");
	this.shape_77.setTransform(17.7,14.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#444444").s().p("AAiCGIgEgCIgEgEIgCgEIgBgCIAAgCIgBAAIgBgNIAAAAIACgKIAAgFIgCgCIAAgBIAAAAIgBgHIABABIgCgEIAAAAIgDgJIAAgBIAAgBIgEgEIgCgDIAAgDIABgDIAAgBIAAgKIgBgGIAAAAIAAgNIgBgBIAAgFIgCgBIgBAAIgCgCIAAABIgBAAIgEAJIgBABIAAAAIAAAAIAAABIgSAWIAAAAIAAABIgGAGIAAgBIAAABIgBACIgBABIgBABIgBADIgBABIgBADIgGACIgBAAIAAABIgCAJIgBACIgBADIgEADIgIAFIgJAEIgFABIgFAAIgCAAIgCgBIgBAAQgDgCgBgDIgBgFIABgFIACgFIADgEIAAAAIABAAIAEgDIAHgGIAAgBIAAgBIABAAIAAgCIACgGIAAAAIAAgCIABgCIAFgNIAAgGIABgBIAAgBIABgCIABgCIACgBIABgBIAAAAIADgFIAAAAIAIgSIAEgEIAOgPIADgCIABgCIABAAIgCgBIgBAAIgDgCIAAAAIgBAAIgBgHIAAgBIABAAIAHgFIgHAGIACAGIgBAAIADABIADACIABABIAAABIgBABIgBABIgSAUIgBAAIAAABIgGAMIAAAAIgCAGIAAABIgDAFIgCABIgDAEIAAAIIgFANIgBACIAAACIAAABIgCAFIAAABIAAACIgBABIgBABIAAABIgBABIAAAAIgGAFIgFADIgEAHIAAACIAAACIAAAEIACACIABAAIABAAIACABQAFABADgCIAMgGIAGgFIABgBIADgLIAAgBIAAAAIAEgBIgBgBIAAAAIAAAAIABgBIACAAIABgBIACgCIABgCIAAgCIABgBIAAAAIABgBIAAgBIACgCIAAAAIAGgGIARgXIAAAAIABAAIAAgBIABgBIAEgIIAAAAIABgCIABgBIADgBIAAAAIABABIAAAAIAAAAIACABIABABIABAAIAAABQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAIABABIAAABIAAAAIABAFIAAADIAAACIAAAJIABAGIABAMIgBAAIAAABIAAABIgBABIAAACIABABIAEAEIAAABIABABIABAAIAAABIACAKIAAgBIACAFIAAAAIAAAGIACACIAAAHIgCAKIACAMIAAABIAAABIABACQABADADACIADABIABAAIACAAQAFgCABgCIABgDIAAgDIgCgIIgCgPIAAgHIACAAIABAAIABgBIAAAAIABAAIAAgGIABgCIAAAAIAAAAIAFgGIAAABIAAgCIAAABIgBgLIAAABIgBgFIAAAAIgCgDIgDgDIAAgBIAAgvIgBgUIAAgBIAAgBIABgCIAAAAIgBgDIAAAAIgBgCIAAgBIAAgDIAAgDIAAgBIAAgCIABgFIAJAOIAAgBIAAACIABABIABAEIAAABIgBABIAAAHIADAEIgDABIABAAIABAAIACAAIABAAIABABIAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgBACIgBAAIgCAAIAAAAIAAAAIACACIAAABIAAACIgCABIAAAAIgCABIgBAAIABABIAAABIAAABIgBABIABAAIAAABIAAABIABgBIAAABIAEgDIABgBIABAAIAAgBIACgBIAGgHIABgBIABAAIABgBIAAAAIAAAAIAFgFIABgCIAAgBIgBgDIABgEIABAAIAAgDIABgIIAAgBIAAAAIAAgEIAAAAIAAAAIgDgDIAAgBIAAgBIAAABIgKgQIAAAAIgCgGIgBgBIABAAIAAgFIABgEIAAgBIABgCIAAgBIgCgEIgBgBIABgCIAAAAIABgDIABgBIACgBIADAAIAAABIAAAAIABAAIABABIABABIAEgEIAAgOIAAgCIAAgCIgBgBIAAgDIAAAAIgEgJIgGgGIghgHIgJAAIgEgBIgEABIgCAAIAAAAIgBABIAAAAIgIAKIgBAAIAAABIgIAIIgDABIgBACIAAADIABACIgBAIIAAgIIgBgEIAAAAIAAgBIACgCIACgCIAIgJIAFgHIAEgEIABgBIABAAIAAAAIAKgBIAJABIAJABIAZAFIABAAIAHAHIAAAAIAAAAIAFAJIAAABIABADIAAABIAAABIAAAUIgHAIIgCgBIgCgCIgCgBIAAgBIgBABIAAABIAAABIACADIAAABIABADIAAABIgBAAIgBACIgBAIIACAFIAAAAIAKAQIAAAAIAAABIABABIACACIAAAAIABACIAAACIgBACIAAABIAAABIAAgBIgBAGIAAADIAAACIAAABIgBABIAAACIAAACIAAABIAAABIgCAEIgCADIgCABIgBABIAAAAIgBAAIgBABIgBAAIgGAIIgBABIAAABIgBABIgBABIgBABIgGACIAAABIAAAAIgGABIgBAhIADADIACADIAAABIABAFIABAMIAAAAIAAABIgFAGIgBACIAAAEIgCADIgCABIgBABIAAACIAEAcIgCAFQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAIgFACIgCAAIAAAAIgBABgAAwgZIAAACIABADIAAABIAAAAIgBADIAAAKIABAAIABgBIAAgBIAAgBIgBAAIABgBIAAgHIAAgDIAAgCIgBAAIAAgBIAAAAIgBgCgABEhNIABgBIAAAAIgBgBg");
	this.shape_78.setTransform(16.5,15.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAdCBQgEgEAAgEIgCgNIACgKIAAgGIgCgDIAAgGIgCgEIgCgKIgGgFQgBgCAAgEIABgDIAAgLIgBgFIgBgTQAAgBAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIgEgDQgBgBAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIgBACIgYAhIgIAKIgCAEQgCAEgEABIgDABIAAACIgDAKQgBAEgLAGQgMAHgIgDQgGgBABgLIAFgJIAFgDIAFgFQABAAAAgBQABgBAAAAQAAgBAAAAQABAAAAgBIACgHIACgIIAEgKIAAgFQAAgCADgDIACgDIADgFIAJgUIALgLIAKgKQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgFgCIgBgHIAHgGIAEgLIAAgoIAGAAIABgEIAAgIIgBgEIACgDIACgBIAJgJIAKgMQAFgDASADIAeAHIAHAGIAEAJIABAYIgFAGIgFgEQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAABIgCADIADAEIAAADIgBACIgBAJIACAGIANAUQABABgBAFIgBALIgBAHQAAACgHAHIgCAAIgIALQgBACgGACIgEABIAAgBIgBgCQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIgCgBIABgDIAEgCQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgDABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAHgDQAEgDgHABIgDACIgBgDIAEgDIgCgDIAAgIIAAgEIgBgCIgGgJIAAAEIAAAEIABACIABAEIgBAGIACASIgBAEIABASIgBAVIAAAEIADADIACADIABAFIABAMIgFAGIgBACIAAAFQAAACgFABIAAAFIAEAWQACALgNACIgBAAQgDAAgDgDg");
	this.shape_79.setTransform(16.5,15.6);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = this.shape_71.mask = this.shape_72.mask = this.shape_73.mask = this.shape_74.mask = this.shape_75.mask = this.shape_76.mask = this.shape_77.mask = this.shape_78.mask = this.shape_79.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,2.3,17.1,17.4);


(lib.film = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAHIAEgCIAAgIIgEgCIAAgGIARANIAAADIgRAHgAgBAEIAFgBIgFgDg");
	this.shape.setTransform(10.6,27.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAHIAAgFIgIAFIAAgFIAIgDIAAAAIgIgCIAAgEIARADIAAAIIgCADIgDABQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAgAACACQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAIABAAIABgBIAAgCIgFgBg");
	this.shape_1.setTransform(10.6,24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAGAHIAAgGIgOgBIAAgEIAOADIAAgGIADABIAAAOg");
	this.shape_2.setTransform(10.6,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAEIAAgIIABABIAAAHg");
	this.shape_3.setTransform(10.3,21.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAADIgMAIIAAgGIAJgFIgJgHIAAgHIAMAMIANgHIAAAHIgIADIAIAHIAAAHg");
	this.shape_4.setTransform(10.9,19.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMAJQgDgEAAgFQAAgEADgEQADgDAEAAIADAAIACADIAQALIgDAGIgLgJIABABQAAAFgDADQgBADgDAAQgFAAgDgDgAgIgCIgBACQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQABAAAAAAQABABAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAgBABAAIABgEQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAABg");
	this.shape_5.setTransform(6.6,29.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAEALQgCgBgBgEQgBAGgEAAQgFAAgDgEQgDgDAAgFQAAgFADgDQACgDAGgBIAAAIQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIACAAIACgCIAAgDIADABIABADIAEACQAAAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAIAAgCIAAgCIgDgBIAAgGQAEAAACAEQADADAAADIgBAEIgDAFIgEAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_6.setTransform(6.6,26.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIAOQgIgDgCgFQgDgFgBgEIADgIQACgDADgBQACgCAHAAQAIgBAHAEQAGADADAFQADAFABAEQAAAHgFAEQgFAEgIABQgHAAgGgFgAgMgGQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAACACACQACACAFACQAFACAGABQAEAAADgCQAAgBABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIgBgCQgDgDgGgCQgFgCgFAAQgGgBgBACg");
	this.shape_7.setTransform(14.9,24.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIAPQgIgEgCgEQgDgGgBgEQABgDACgEQAAgDAFgDQACgBAHAAQAIgBAHAEQAGADADAFQADAGABADQAAAGgFAFQgFAEgIAAQgHAAgGgDgAgMgGQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAABQAAABACABQACADAFADQAFACAGAAQAFgBACgBIACgFIgBgCQgDgCgGgDQgFgDgFABQgGgBgBACg");
	this.shape_8.setTransform(14.9,20.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AABAPQgDgDgMgNIAAARIgHgBIAAghIAGABIAPARIAGAHIADABQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBIgBgCIgGgDIAAgKQAEAAAEADIAFAGQACAEAAACQAAAIgEAEQgDAFgFAAQgEAAgFgEg");
	this.shape_9.setTransform(14.9,15.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#444444").s().p("AgDAGQgDgBgBgCQgBgCAAgBIAAgDIADgDIAEgBQACAAADACIAEAEQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgCACgEAAQgCAAgDgCgAgEgCIgBACIABAAIADADIADABIADgBIABgCIAAgBIgEgBIgDgBg");
	this.shape_10.setTransform(2.4,17.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#444444").s().p("AgDAGQgDgCgBgBQgBgDAAAAIAAgDIADgDIAEgBQACAAADACIAEAEIABACQAAADgBACQgCACgEgBQgCABgDgCgAgEgBIgBABIABAAIADADIADABIADgBIABgDIAAAAIgEgBIgDgBIgDABg");
	this.shape_11.setTransform(2.4,16);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#444444").s().p("AAAAGIgFgGIAAAHIgDgBIAAgNIACABIAGAGIADADIABABIACgBIAAgCIAAgBIgDAAIAAgEIADABIACACIABACQAAADgCACQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_12.setTransform(2.5,14);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#444444").s().p("AgaBsQgOgCgYgJQgFgCgCgEIgDjJIAVALQAcAKAcgCQAggDAHgBQAGgBALgGIAPgIQADDEgDAEQgEAIgTAIQgYAFgWAAQgPAAgQgDg");
	this.shape_13.setTransform(11.6,21.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#444444").s().p("AgpgDIgBgDQAAAAAAAAQAAAAAAAAQABAAAAAAQAAABABAAQADAEAKACQANAEAOAAQAQAAAOgFIAMgGQABAAAAAAQAAAAAAABQAAAAAAABQAAABgBABQgLAJgfAAQgeAAgLgKg");
	this.shape_14.setTransform(11.6,8.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#444444").s().p("AgSAIQgVgGgBgEIgBgFIABgBIACAFQABACALADQANAFANABQALAAAOgFQAKgDADgCIACgFQAAgBAAAAQAAgBABAAQAAAAAAAAQAAAAABABQABAFgCABQgOAJgKABQgOACgHAAQgJAAgFgCg");
	this.shape_15.setTransform(11.6,7.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#444444").s().p("AAMASIgGgGIgLgGIgMgFIAAgHIAKAEIARAJQAAABABAAQAAABABAAQAAAAABAAQAAAAAAgBQACgCgQgKQgDgDgGgBIgGAAIAAgIIABgBQABgBAEABQAHACAQANQAGAEgBAJQgBAIgEAAIgBgBg");
	this.shape_16.setTransform(17.5,4.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#444444").s().p("AgVAJQgKgEAAgFQAAgEAKgEQAJgEAMAAQANAAAKAEQAJAEAAAEQAAAFgJAEQgKAEgNAAQgMAAgJgEg");
	this.shape_17.setTransform(11.6,2.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#444444").s().p("AgdARIgHgHIABgHIAAgRIAAgEQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAABQADADAJADQALAEAMAAQAUAAAOgNQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIgBAXIACAFQAAAEgIAFQgLAHgSAAQgTAAgKgGg");
	this.shape_18.setTransform(11.7,5.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#444444").s().p("AgLAEIAcgNIAAACIgZAKIgIAHg");
	this.shape_19.setTransform(6.1,4.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#444444").s().p("AgSAGIANgIIAYgLIAAADIgPAHQgPAEgCADQgEAFgBAFg");
	this.shape_20.setTransform(6,4.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#444444").s().p("AgQAOQgBgCABgEIAHgIIAZgNQADACgCAGIgRAHQgEAAgCABQgIAGAAADQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAAAIgBAAg");
	this.shape_21.setTransform(6.1,5.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#444444").s().p("AgvAUQgUgKgEgHIgDgGIgEABQgCAAgIgKIgBgOIAHgGIADAFIAKAIIgCABQgBADADAIQAGAIAWAKQAZALAZAAQAYAAAcgMIAbgLQAFgBgFALQgCAFgWAJQgbAKgdAAQgcAAgbgNg");
	this.shape_22.setTransform(10.6,7.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#444444").s().p("AARCxQgmgEgWgHQgkgNgCgZIgGgDIgLgLIgCgDIgGj4IANgLQAFgEAFAAQAJAAAEAHQASgPATgEQAKgMAhAAQAYAAAOALIABAAQAnAAAMAZQAGARABALQAAAIgEAKIAADAQADAFAAAHQAAAWgIALQgHAMgSAKQgXAMgaAAgAhJByQADABACAKQAAASAdALQAXAIAiACIAGAAQAXAAAUgLQAPgIAGgIQAFgJABgSQgBgEgBgCIgCgBIABjIQADgJABgEQgBgKgGgPQgIgSgfAAIgGAAQgLgKgWAAQgXAAgIAFIgDAGQgSABgPAMQgJAGgFAGIgIgHIgBgDQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAgBAAIgCABIgIAHIAGDvIAHAIIAEABIADgCg");
	this.shape_23.setTransform(10.8,17.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AASCkQgigCgXgIQgegLAAgSQgBgKgDgBIgCABQgBABAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAIgHgIIgGjvIAIgHQAAAAABAAQAAAAAAAAQABgBAAABQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIABADIAIAHQAFgGAIgGQAQgMARgBIAEgGQAIgFAXAAQAWAAALAKIATABQAUAEAGANQAGAPAAAKQAAAEgEAJIAADIIACABQABACAAAEQAAASgFAJQgHAJgPAIQgUAKgWAAIgGAAg");
	this.shape_24.setTransform(10.8,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.5,35.5);


(lib.door_close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(1,1,1).p("Aj6iJIgGD3IHpAcIAYjpg");
	this.shape.setTransform(29.1,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AkABuIAGj3IH7AqIgYDpg");
	this.shape_1.setTransform(29.1,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.4,0.4,53.5,29.8);


(lib.camera_door_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AAAAHIAAgNIAAgBIAAABIAAANIAAABg");
	this.shape.setTransform(1.1,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AAAAHIAAgNIAAgBIAAABIAAANIAAAAg");
	this.shape_1.setTransform(1.5,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AAAAHIAAgNIAAgBIAAABIAAANIAAAAg");
	this.shape_2.setTransform(1.9,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444444").s().p("AAAAHIAAgNIAAgBIAAABIAAANIAAAAg");
	this.shape_3.setTransform(2.2,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#444444").s().p("AAAAHIAAgNIAAgBIAAABIAAANIAAABg");
	this.shape_4.setTransform(2.5,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444444").s().p("AgBABIgCAAIgCAAIgBgBIAAAAIgBAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAIAAAAIACAAIACAAIAJAAIgIABg");
	this.shape_5.setTransform(1.8,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#444444").s().p("AgNARQgEgDAAgFIAAgRQAAgNARAAQASAAAAANIAAARQAAAFgEADQgFAFgJAAQgIAAgFgFgAgHgIIAAARQAAADAHAAQAIAAAAgDIAAgRQAAgDgIAAQgHAAAAADg");
	this.shape_6.setTransform(1.8,2.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHAJIAAgRQAAgDAHAAQAIAAAAADIAAARQAAADgIAAQgHAAAAgDg");
	this.shape_7.setTransform(1.8,2.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#444444").s().p("AgEADIAAgFQAAgGAEAAQAFAAAAAGIAAAFQAAAGgFAAQgEAAAAgGgAgBgCIAAAFQAAABABAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAgBIAAgFQAAgBgBAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAABg");
	this.shape_8.setTransform(1.8,3.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAAFQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAIAAgHQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIAAAHQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_9.setTransform(1.8,3.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgjAAIAFgBIBBABIgCACg");
	this.shape_10.setTransform(5.2,4.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#444444").s().p("AgBgKIADgBIgCAXIgBgWg");
	this.shape_11.setTransform(4.8,9.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#444444").s().p("AgBATIADgoIAAAoIgCADQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_12.setTransform(5.1,10.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgLAEIgIAAIgRgCIgCgBIgBAAIgBgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAgBQABAAAAAAQABgBAAAAQABAAAAABIABAAIAAAAIAAAAIADABIAJACIAWABIAGABIAXgBIAMgBIAEAAIgEAAIgTADIgIABIgIAAIgGABIgIgBg");
	this.shape_13.setTransform(4.8,5.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#444444").s().p("AgfARQgPgDAAgFIAAgRQAAgFAPgDQAOgDARAAQASAAAOADQAPADAAAFIAAARQAAAFgPADQgOADgSAAQgRAAgOgDgAgggPQgMADAAAEIAAARQAAAEAMADQAOADASAAQATAAAPgDQAMgDAAgEIAAgQIgBAAIABgBQAAgEgMgDQgPgCgTAAQgSAAgOACg");
	this.shape_14.setTransform(5,5.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#444444").s().p("AggAQQgNgDAAgEIAAgSQAAgEANgDQAOgCASAAQATAAAOACQANADAAAEIAAACIAAAAIAAAQQAAAEgNADQgOADgTAAQgSAAgOgDg");
	this.shape_15.setTransform(5,5.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#444444").s().p("AAAAkQgFAAgEgEQgEgEAAgFIAAg6IAbAAIAAA6QAAAFgEAEQgEAEgGAAgAgFAXQAAAFAFAAIAAAAQAFAAAAgFIAAgyIgKAAg");
	this.shape_16.setTransform(5,10);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAAAgQgEAAgCgCQgDgDAAgDIAAg3IATAAIAAA3QAAADgDADQgDACgDAAg");
	this.shape_17.setTransform(5,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.7,13.7);


(lib.camera_door = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBhuIADAAIgBDdg");
	this.shape.setTransform(4.6,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhABCIgDAAIgBhIIABhHIAGCJIB8AMIAAiIIiCgNIBDACIBBAGIADAAIABCTg");
	this.shape_1.setTransform(23.8,18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhTBaIgCAAIgDjEIADAAICpARIingLIADC5ICjAPIgBheIAAgKIAChVIAFDEg");
	this.shape_2.setTransform(23.8,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBh9IADAAIgCD7g");
	this.shape_3.setTransform(48.8,19.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag2AVIgSgBIgBAAIgBAAIgGgCQgEgBgDgDIgFgGIgDgGIgCgDIAAgCIAAgDIAAgZIAEAAIAAAcIABABIAAABIABABIACAGIAFAFQADADACAAIACABIACABIACAAIABAAIABAAICpAQg");
	this.shape_4.setTransform(17.2,28.1,1,1,0,0,0,6,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhxgJIDjAOIgBAFg");
	this.shape_5.setTransform(36.9,4.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#444444").s().p("ADgCqInDgfQgJAAgGgHQgFgGgBgKIgEkFQAAgKAHgHQAHgHAIAAIHPAfQAIABAGAHQAGAGgBAKIgFEFQgBAKgHAGQgGAHgIAAIgBAAg");
	this.shape_6.setTransform(25.3,17);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444444").s().p("AABCSIgOgDIAAkgIATADQAIABAAAKIAAEJQAAAFgEAEQgDADgEAAIgCAAg");
	this.shape_7.setTransform(50.7,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.1,34);


(lib.camera = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AAAAHQgPgBgMgDQgMgDAAgBQAAgDAMgCQAMgBAPAAQARABALADQAMADAAACQgBADgLABIgSACIgKgBg");
	this.shape.setTransform(55.8,13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGAIQgDgEAAgEQAAgDADgDQADgEADABQAEgBADAEQADADAAADQAAAEgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_1.setTransform(18.9,31.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQAfIgGgMQgHgSgFgMQgGgMgHgHIADACQAVAVAEATQAEATgBAAIAAAAg");
	this.shape_2.setTransform(23.4,35.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444444").s().p("AgLBCQgogLgEhAQgCglAlgVQAEgCAFABQAQAGAPAMQAXAUAHAeQAGAbgBANQgBAMgHADQgVAOgVAAQgHAAgJgDg");
	this.shape_3.setTransform(20.6,36.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#444444").s().p("AgiBAQgSgSgGgiQgEgXADgXQADgTATgPIAUgMQABgBAAAAQABAAAAABQABAAAAAAQABABAAABQABABAAAAQAAABAAABQAAAAgBAAQgBABgBAAIgRALQgSAOgCAQQgDAWAEAWQAFAfARARQAUAUAjgFQAPgEAOgQQACgCADACQACACgCADQgPARgSAFIgPABQgcAAgSgSg");
	this.shape_4.setTransform(18.9,37.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444444").s().p("AgCAYIAAgvQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAABIAAAvQAAABAAAAQAAABgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_5.setTransform(62.2,19.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#444444").s().p("AgFAFQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQgBAAAAgBQAAgBAAAAQABgBAAAAQABAAABAAIAKgEQADgCACAEQABABAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAIgLAFg");
	this.shape_6.setTransform(63.7,15.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444444").s().p("AAGAVQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQACgEgEgPQgBgJgJgBIgDgBQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQABgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIABAAQAOACADAOQADATgCAFQgBAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_7.setTransform(52.7,19.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#444444").s().p("ABOASQgDgBgRACIgVACIgFAAIgggDIgsgEIgugGQgKgCAAgEQAAgCAEgBIAxgSQADgBACADQABADgEABIgrAPQALACBNAHIALABQAPACALAAIAUgCQATgCAEABIASADQADAAAAAEQAAAAAAABQAAAAgBABQAAAAgBAAQgBABgBAAg");
	this.shape_8.setTransform(52.4,14.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444444").s().p("AgbAfQgDAAgKgOQgKgLgCgEQgCgCAFgOIAFgQIBfAsQAFADgFADIgMAEQgFACgeADIgcACIgDAAg");
	this.shape_9.setTransform(40,6.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#444444").s().p("AANBlQALgaAFgTQAGgdgUhMQgDgOgWgdIgWgaQADgKAWAfQAPAYAMAXQAIAPAEAlQADAmgEAVQgGAZgWAjIAKgUg");
	this.shape_10.setTransform(33.5,35.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#444444").s().p("AgLASIAGgDQAFgEACgGQAEgMgEgFQgCgDABgCQADgCAEAHQAIAOgHAIQgCAEgDACQgEACgIAAIgDAAg");
	this.shape_11.setTransform(47.3,35.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#444444").s().p("AgHAIQgEgDABgFQgBgEAEgDQAEgEADAAQAEAAAEAEQAEADgBAEQABAFgEADQgEADgEABQgDgBgEgDg");
	this.shape_12.setTransform(45.9,35.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#444444").s().p("AgZAbQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAEgBAMgIQALgJAFgFQAKgNACgJQACgDACABQAEABgBADQgDAKgKAMQgHAJgOAKQgNAJgEAAIgCgBg");
	this.shape_13.setTransform(39.6,44.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#444444").s().p("AAoB0QgBAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAJgagCgdQgCgSgJgmIgFgRQgGgcgkgjIglgdQgCgDABgCQACgDADACIAnAfQAkAkAHAeIAFARQAJAlACATQACAfgKAbQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_14.setTransform(36.3,29.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#444444").s().p("AAGAHQADgVgJghIgJgcQAJALAFAXQADARACAeQABAdgQApQAGgWAFgvg");
	this.shape_15.setTransform(38.6,36.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#444444").s().p("AAkALIgkgbQgUgMgcgDIgNgBIAFAAQAOgCAMADQAIABAYAIQATAGAiApIAHAJIgagXg");
	this.shape_16.setTransform(28.8,21.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#444444").s().p("AgwA4IAAgIIAEg+IgDgXQgDgTgBAAIBnAIQgCAAgUAPIgaATQgDACAAAGQABAFgEABQgIADgQAVQgOATgEAKQgCAEgBAAIgBgBgAgzg4IAAAAg");
	this.shape_17.setTransform(10.2,24.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#444444").s().p("AAdANIgGgEIgJgGQgHABgBgDQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgDgBIgMgDQgFgBgCgCIgMgCIgDAAIgGABIgEAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAGgCAOgBIARAAQAGAAAQAHIAeAOIgMAHIgBAAIgDgCg");
	this.shape_18.setTransform(24.5,20.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#444444").s().p("AgIBrQgkgMgcgtQgdgxAPgwQAGgUAMgPQAMgPAPgHQAYgKAcALQAQAGAMAIQABABAAAAQAAABABAAQAAABgBAAQAAABAAABQgCADgDgCQgLgIgOgFQgbgLgVAKQgOAGgKAOQgMAOgFASQgPAuAcAtQAbAtAjAJQAWAHAYgKQAUgJAMgVQANgYgCggQgCgYgMgZIgLgVQgBgCACgDQADgBACACIAMAWQAMAaACAZQADAigPAbQgOAXgVAJQgQAHgRAAQgKAAgKgDg");
	this.shape_19.setTransform(19,37.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#444444").s().p("AgbB7QgpgUgcggQgYgcADg9QADgtAMgfQAIgTAZgNQAagOAeABQAYACAgAaQAPANALANQg8g7gwAOQgOAEgjAdQgIAHgGAcQgEAUgCAUQgBAVALAeQAQAqAeAbQAfAbAjABQAWABAbgJQAQgFAOgcQANgZAGghQAFgagWgrIgXgnIAQAWQARAaAIAcQAJAagIAmQgFAZgIAPQgEAJgSANQgWAQgVADIgIAAQgWAAghgRg");
	this.shape_20.setTransform(17.8,37.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#444444").s().p("AgGCjIgVgBQAmgFASgIQAhgRAOgoQAJgZACgmQACgdgSgnQgWgxgngfQgigcg0AKQgZAFgTAKQAhghAegGQALgDAfADQAyALAjAqQAZAdASAwQAMAfgGA0QgFAsgJAOQgGAKghAUQgeASgNAEQgGABgOAAIgJAAg");
	this.shape_21.setTransform(22.8,36.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#444444").s().p("AgCAFIgCgCIAAgIIAIACIABADQgBAEgDACIgBAAIgCgBg");
	this.shape_22.setTransform(16.6,10.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#444444").s().p("AgEAKIgFgBQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAgBIgCgEQgBgBAAgDIABgFQAAAAAAgBQAAAAABAAQAAAAABgBQABAAABAAIAEAAQAagBgEADIgQAQIgCABIgCAAg");
	this.shape_23.setTransform(17.5,8.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#444444").s().p("AgEABQg4gEgBgCQgCgDA/AHQBCAFgEAAIgLADIg3gGg");
	this.shape_24.setTransform(10.9,18.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#444444").s().p("AgPAQQgGgHAAgJQAAgIAGgHQAHgGAIAAQAIAAAIAGQAGAHAAAIQAAAJgGAHQgIAGgIAAQgIAAgHgGg");
	this.shape_25.setTransform(50.4,20.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#444444").s().p("AgkAAQgDAAgBgDIgCgDIAZAGIA8AAQAAABAAAAQAAAAAAAAQAAABAAAAQgBABAAAAIgCAEIgBAAQgIAAhDgHg");
	this.shape_26.setTransform(55.3,14.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#444444").s().p("AgDBsQhJgGAAgDQgBgEAFg8IAfgPQAIgEALgQQADgDgHgMQgFgJgHgGQgEgDgSgBIgRAAIgJhJQAAgDADgBIAEAAQBWAFAHACIAzALQANAFAJgJIgDDGIgHAGIgIAFIgDAAIhFgEg");
	this.shape_27.setTransform(53.4,34.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#444444").s().p("AAWAMIhpgQQgDAAAAgFQAAAAAAgBQABAAAAgBQABAAAAAAQABgBABAAIBoAQQApADAFgDIAOgGQADgBACADQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAgBABIgOAIQgCABgQABg");
	this.shape_28.setTransform(53.8,46.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#444444").s().p("AgDB7QgFgEAEgTIAEjcQAAgBAAAAQABgBAAAAQAAgBABAAQABAAABAAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAABIgGDeQgBAJAAAGQAAgBAAAAQABAAAAAAQABAAABABQAAAAABABQACADgDACQgBAAAAAAQgBABgBAAQAAAAAAAAQAAAAAAAAIgDgBg");
	this.shape_29.setTransform(62.9,36);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#444444").s().p("AgHAFQgBAAgBAAQgBgBAAAAQgBAAAAgBQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAABAAQABAAABAAIACgBQAIAAADgCQADgCACACQACADgCAAQgEADgMACg");
	this.shape_30.setTransform(62.2,22.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#444444").s().p("AgFADIgNgDQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAABAAQAAAAABAAQAcAGAFgBQADgBABACQAAABAAAAQAAABAAAAQAAABgBABQAAAAgBAAIgFABQgHAAgMgDg");
	this.shape_31.setTransform(55.2,22.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#444444").s().p("AAJADQgMgCgEABQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBIgBgCIABgBQACgDASACQABAAABABQABAAAAAAQABABAAAAQAAAAAAAAQAAABgBAAQAAABAAABQgBAAAAAAQgBAAgBAAg");
	this.shape_32.setTransform(47.6,22);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#444444").s().p("AgJAgQAAgBAAgBQAAgBAAAAQABgBAAAAQABAAAAgBIAJgCIgEgkQgBgGgDgGIgCgEQgDgDADgDIADgBIACACQABAAACAFQACAGABAJIAHAqIgPAEIgBABQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAg");
	this.shape_33.setTransform(44.7,18.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#444444").s().p("AAACcQgBgBAAAAQgBAAAAgBQAAgBAAAAQAAgBAAgBQAOgjABg9IgCg3IgTiLQgBgEgEgDIgEgCQgDgCABgDQABgBAAAAQABgBABAAQAAAAABAAQAAAAABAAIAGAEQAGAEABAGIATCNIACA3QgBA+gQAlQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_34.setTransform(43,31.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#444444").s().p("AAMCQQgBAAAAgBQgBAAAAAAQgBgBAAgBQAAAAAAgBQAPhTgOhkQgFgigFgeIgHgbQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAgBAAIgIAAQAAABgBAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAgBQABAAAAAAQABgBAAAAQAHgCAFACQAGABACAEQABAEAFAYQAHAfAEAhQAPBkgPBWQAAABAAAAQAAABgBAAQAAAAgBABQgBAAgBAAg");
	this.shape_35.setTransform(41.4,31);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#444444").s().p("AgJAZQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBIAAgPQABgIAUgWQADgDACADQAAABABABQAAAAAAABQAAAAAAABQgBABAAAAQgSASgBAHIAAAOQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_36.setTransform(18.7,10.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#444444").s().p("AgCAKIAAgTQAAAAAAgBQAAgBABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAABQAAABAAAAIAAATQAAAAAAABQAAABgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAAAg");
	this.shape_37.setTransform(33.2,13.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#444444").s().p("ABEAYQgPgLgWgZIhkgFQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAgBQAAgEADABIBnAFIABACIAOAPQAQAPAHAGQADACgCADIgDABg");
	this.shape_38.setTransform(28.1,10.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#444444").s().p("AgEAUQgDgBABgEIAGgfQAAgBABAAQAAgBAAAAQABAAAAgBQABAAABAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABIgHAgQAAABAAAAQAAABgBAAQAAAAAAABQgBAAgBAAg");
	this.shape_39.setTransform(34.2,4.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#444444").s().p("AgRALQgDgEACgMIABgDQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQABAAABAAQAAAAABABQAAAAABABQAAAAAAABIgCANIAbgFQAEAAAAADQABAEgEAAIgeAFQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_40.setTransform(41.4,2.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#444444").s().p("AAVANIgsgSQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABgBQAAAAABAAQAAgBABAAQABAAABABIAsARIACACQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_41.setTransform(42.2,5.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#444444").s().p("AgqAMQgBABAAAAQgBAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAgBQAAAAAAgBQAAAAABgBQABAAAAAAIAOAAQASABACgBQAGgDAugPQABgBABAAQABAAAAAAQABABAAAAQABABAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgtAOgGAEQgCACgHAAg");
	this.shape_42.setTransform(42.4,10);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#444444").s().p("AgtAOQgEAAABgEQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAWACAIgBQAJgFAzgRQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAEgDABIg7AVQgCABgKAAg");
	this.shape_43.setTransform(43,11);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#444444").s().p("AA+A4IgGg0QglgrgJgIIhLgEQgEgBABgDQAAgEADABIBNAEQACAAAZAdIAXAaIAAAAIAHA2QAAADgDABQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAgBAAAAg");
	this.shape_44.setTransform(31.4,11.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#444444").s().p("AA2AMQgLgBgJgFIgIgEQgIgCgUgCQgWgDgGABQgJADgMABIgBAAQgFAAgQgCIgIgCQgBAAgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAgBQABAAAAgBQAAAAABAAQABgBABAAIAJACQAQACADAAIABAAQAMgBAJgDQAHgCAXAEQAVADAJAEIAIACQAIAEAKABQAMACAOgFQABgBAAAAQABAAABABQAAAAABAAQAAABABABQABADgEABQgLAEgMAAg");
	this.shape_45.setTransform(27.1,16.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#444444").s().p("ABVARQgDgBAAgDQABgIgEgBQgMgEgKAAIiOgJQgDgBAAgDQAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAICNALQAMAAAMAEQAJABgBANQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBAAg");
	this.shape_46.setTransform(27.5,15.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#444444").s().p("Ag5AAQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAgBAAgBQAAgDAEAAIB0AHQAAAAABAAQABAAAAAAQABABAAAAQAAABAAABQAAABgBABQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_47.setTransform(10,12.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#444444").s().p("AhBAUQgDAAAAgEQAAgDAEAAIB8ALIACgIQABgHgEgFIgBAAQgDgEAAgJIgBgSQgBgDAEAAQADgBABAEIABASQAAAJACAAIAAAAQAGAGgBALQgCAKgDAEIgBABg");
	this.shape_48.setTransform(11.4,15.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#444444").s().p("AjMD4Qg7gYgjhjIgBgDQgEgLABivIAAgDQAAgHgFgKIgOgDQgFgBgCgDQgCgCABgHQACgEAAgFQgCgQAYgGIAAgdQAAgHAJgDQAGgDANgCIAKgCIAAgDIgBgHQABgEAGgEQAFgFAGgBIAagBIAbAAQAIAAAEAIIAEgBQACgFAQgFIAagHQAFgCAQgBQADAAAHgDIBHglIAIAAIAAgFIAFgBQAhgHANAAQAHgBACACQAHAFgEAJIAJAAIACgGIAEgBQAegIAIAAQAGAAANAGIAEACIAAADQADARgBADIABADIAOAbIAQAOIABABIALARQADAFACAUIAGADIAAgBQACgJAEgDQAJgJApADIA8AIQAQADAEARIABACIAEACIAMAFQAJADgCAUIgCAOIACATQAEAFgDAQIAAAAQgBAIABAJIgGDgQAAAPgDAJQgDALgQAGIgEACIgGADQgOAIgIAAIgmADQgHAAg/gMIhDgNIgHgCIgGACQgMAFgxgEQgxAdgOAHQgJAEglAHIgBAAIgRABIgDAAQgnAAg3gWgAjgi8IgXABQgFABgCACIABABQABAJgCAFQgDAGgSACQgMACgEACIAAAfIAAAHIgGABIgLADQgGACABACIgBALIANADQAGACAEAOIADAOIAAADQgBCnADAPIABACQAhBdA2AWQApAQAhAEQAVACAKgCIABAAQAggFALgFIBAglIADgBIACAAQAHACAUABQAXAAAGgCQALgFAGADIAEACIBEANQA8ALAGAAIAmgDQAFAAAKgGIAHgEIAGgCQAJgEABgDQACgJAAgMIAGjfQgBgIABgMIAAAAIACgLQgEgFgBgWIAAgCQAEgOgBgIIgNgFIgEgDQgFgBgDgKQgBgIgIgBQgYgFgigDQgfgCgJAEIgBAGQgEANgHAAQgEAAgPgIIgDgCIgDgaIgLgRIgSgOIgPgfQgDgHABgEIgBgLQgIgDgCAAIgfAHIgDAJIgmgBIgBgOIgdAFIAAAIIgTgBIhFAkIAAAAIgPAEIgQACQgEACgLACIgVAGQgBAHgHABQgMACgGgDQgCgBgBgFIgBAAIgBAAIgJgBIgQABg");
	this.shape_49.setTransform(33.1,27);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AjJDxQg5gXgihjQgEgLABivIgDgNQgDgKgBgBIgSgDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAgBAAgBQACgHAAgGQgBgHALgFIAMgDIAAgiQAAgFASgDQASgCABgDQACgDgBgEIgBgGQABgCADgDQAEgDAFAAIAYgCIAaAAQAFABABADIACADQADADAKgDQACAAABgEQABgCAMgEIAMgDIAPgEQAGgCAMAAQADAAAJgEIBHgkIANAAIAAgHQAvgJACACQADACgCADIgHADIAAAHIAbABIADgIIAkgIQAEAAAMAGQADAOgBADQAAADABAEIAPAdIARAOIAMASQABACADAXIAPAHQACAAACgHIADgJQAIgHAlADQAcACAfAFQANADACAMQABAGABAAQACAAASAJQAGABgGAcIABALQABALABABQACACgCAPQgBAHABAMIgGDYIgDAdQgBAGgGADIgMAFIgLAGQgIAEgGAAIgmADQgGAAg+gLIhEgNIgHgDIgKADQgMAFgvgFQg4AhgJAEQgIADglAHQgJACgJAAQglAAg3gWg");
	this.shape_50.setTransform(33.1,27);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#444444").s().p("AACADIgCgBQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAAAIABgCQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAACIAAAAIACAAIABAAIAAADgAAAgBIgBABIAAAAIABABIACABIAAgCIgCABIAAgBIAAAAIAAgBIAAAAg");
	this.shape_51.setTransform(24.4,24.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAAACIgCgCIACgBIAAgBIAAACQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACAAIABAAIAAACIgBABg");
	this.shape_52.setTransform(24.4,24.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.2,54);


(lib.boxright_door = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(1.5,0,1).p("Aiag2ICkAFICRBiIi5AGg");
	this.shape.setTransform(15.6,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aiag2ICkAGICRBhIi4AGg");
	this.shape_1.setTransform(15.6,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,33.1,13);


(lib.box_leftdoor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(1.5).p("Ah6gDIBPhZIClBUIhbBlg");
	this.shape.setTransform(12.3,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah5gDIBOhZIClBUIhaBlg");
	this.shape_1.setTransform(12.3,9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1,26.8,20.8);


(lib.box_door2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(1.5).p("ACJgIIj5BBIgYg5ID5g4g");
	this.shape.setTransform(13.7,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiIAAID5g4IAYAwIj5BBg");
	this.shape_1.setTransform(13.7,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,29.5,13.5);


(lib.box_door = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(1.5).p("AB+BFIj7AwIADi1ID4g0g");
	this.shape.setTransform(12.6,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah6hAID4g0IAAC5Ij7Awg");
	this.shape_1.setTransform(12.7,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.4,-1,58.8,31.5);


(lib.box_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AAAAHQgDgDgCgDIgCgFIAAgCIACgBIADgCIAEgBIAEAFIgGACIABABIAFAEQACADAAADQAAABAAABQAAAAAAABQgBAAAAAAQgBAAAAAAQgEgBgCgDgAgDAAIACABIABADIACACQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgBgDIgCgBIgBgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAg");
	this.shape.setTransform(12.4,49);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AAFAMQgCAAgDgDIgFgHQgCgCAAgDIAEADIABACIACAEIACABQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIgBgDIgBgCIgBgBIAAgCIACACIABgBIAAgCIgCgCIgBgBIAAAAIgFgEQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQACAAABADIAEADIACAEIABACIgBABQAAAAAAABQgBAAAAAAQAAAAgBgBQAAAAgBAAQAEAFAAADQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgBAAg");
	this.shape_1.setTransform(10.5,47.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAGAJIgBgFIgHgGIgDACIgFgEIALgIIAEAEIAGAUgAAAgDIAEADIgCgFg");
	this.shape_2.setTransform(12,37.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFACIAEgNIACAEIgBALIAGAGIgBACg");
	this.shape_3.setTransform(10.2,35.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAGAJIgBgFIgHgGIgDACIgFgEIALgIIAEADIAGAWgAAAgDIAEADIgCgGg");
	this.shape_4.setTransform(8.1,34.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGACIADgNIAKAKIAAABIgHgFIAAADIAGAFIAAADIgHgGIAAADIAGAHIgBADg");
	this.shape_5.setTransform(6.2,32.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AACAKIgDgKIAAAAIgBAEIgFgDIADgOIAIAJIADAEIABABQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgEgBIAFAMgAAAgDQABADABAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgCIgBgBIgCgDg");
	this.shape_6.setTransform(4.4,30.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAEAGIAAgEIgFgDIgBABIgEgCIAGgFIADACIAEANgAAAgCIACACIgBgDg");
	this.shape_7.setTransform(11.2,34.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgBAEIABgJIACADIgCAIg");
	this.shape_8.setTransform(10.2,32.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AACAGIgCgGIAAAAIgBADIgDgDIACgIIACACIADADIABADIABABQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgDgBIADAIgAAAgCIACACQAAAAAAAAIAAgBIgCgDg");
	this.shape_9.setTransform(9.3,32.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEABIACgIIAHAHIgBAAIgEgDIAAACIAEADIAAACIgEgEIgBACIAEAEIAAACg");
	this.shape_10.setTransform(8.1,31.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEAEIACgJIACACIACADIACACIABACQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgCAAIgDgDIAAAEgAAAAAIABACQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBIAAAAIgBgBIgBgBg");
	this.shape_11.setTransform(6.9,29.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AABAIIgBgCIgEgEIgBgCIAAgCIACgGIADADIgBAFIAAAAIAAACIABACIAAABIABAAIAAgCIABgEIAEABIgCAFIgBADIAAABIgCgBg");
	this.shape_12.setTransform(5.6,29);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAAAFQgCgCgCgDIADAAQABACAAABIABABIAAgBIAAgBIgCgFIAAgCIAAgBIACABQACADACACIgCAAIgCgCIgBgBIAAAAIABADIACACIABACIAAACQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAg");
	this.shape_13.setTransform(4.3,28);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAEARIgFgEIgGgGQgCgEgBgDQgCgBAAgEQAAgHADgDQACgCADABQAEAAACAEQAFAEACAFQADAEAAAGQAAAGgCACQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgCgBgAgDgGQgBACgBAEIABAFQABAAAAABQAAAAABABQAAAAABABQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAgBQACgCAAgFIgCgDIgDgFIgBgBIAAAAQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAABg");
	this.shape_14.setTransform(11.9,21.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAEARQgDAAgDgEIgEgGIgFgGIgBgGQAAgHACgCQACgDAEABQAEAAACAEQAEADAEAGQACAEABAGQgBAFgCAEQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgCgBgAgEgGQgBADAAADQAAADABACIADAEIACABQAAAAABAAQAAAAAAAAQABgBAAAAQABgBAAAAQACgDgBgFIgBgDIgCgEIgCgCQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAgBABg");
	this.shape_15.setTransform(8.9,18.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMABIABgCIALABIAFgBIABgCIgCgEIgDgDIgBgCIgBADIgHgGQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAABQABAAAAAAQADABABADIAIAJQAEAFAAACQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBABQgCABgIAAIALALIgBAEg");
	this.shape_16.setTransform(5.8,16.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAFAIIgBgEIgGgFIgCABIgEgDIAJgHIADACIAFATgAAAgDIADADIgBgFg");
	this.shape_17.setTransform(12.1,26);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AACAJIgCgJIgCAEIgDgEIACgLIAGAHIADAEIAAABQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgDgCIAEALgAAAgCIACACQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIgBgBIgBgCIgBgDg");
	this.shape_18.setTransform(10.4,24.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDAHIACgKIgEgDIABgDIAKAJIgBACIgEgCIgBAKg");
	this.shape_19.setTransform(9.1,22.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgCgBIAAgCIAFAFIAAACg");
	this.shape_20.setTransform(7.8,21.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AADAOIgDgLIgFACIgGgFIAKgBIgGgRIAFAGIACAKIAGgCIAGAEIgKACIAHAQg");
	this.shape_21.setTransform(6,19.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgygkIBmAJIAABAg");
	this.shape_22.setTransform(8.7,48);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#444444").s().p("Ag5CFIgDlhIB5BUIAAFlg");
	this.shape_23.setTransform(8.6,31.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#444444").s().p("AgKATQgFgCAAgGIABgEIADgFIAPgVIAHACIgLAPIACgBQAFgBAFACQAEACAAAEQAAAFgFAFQgFAEgGACIgEAAQgEAAgCgBgAAAACQgCABgCACQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAAAQAAABAAABQAAAAABABQAAAAAAAAQABABAAAAQACABACgBQADgBACgCIACgEIgCgEIgEAAIgBAAg");
	this.shape_24.setTransform(35.7,45.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#444444").s().p("AgKATQgFgCAAgGIAJgCQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQADABACgBQACAAACgDQACgCAAgDIgBgCIgDgCIgDABIABgFQABAAADgCQABgBAAAAQABgBAAgBQAAAAAAgBQABAAAAgBIgBgCIgEAAIgCABIgBADIgIACQAAgFAEgDQAEgEAEgBIAGAAQADAAACACQAAABABAAQAAABAAAAQABABAAAAQAAABAAABIgCAFIgGAFQAHACAAAEQAAAFgFAFQgFAFgFABIgEABQgEAAgCgCg");
	this.shape_25.setTransform(32.2,45.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AACgRIAHgCIALAeIgIABIgCgHIgQAEIgEAJIgJACgAgBACIAJgCIgEgIg");
	this.shape_26.setTransform(34.9,34.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgEgPIAGgCIgDAbIAMgDIgBAGIgUAFg");
	this.shape_27.setTransform(31.6,34.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AACgRIAHgCIALAeIgIACIgCgIIgQAEIgEAIIgJADgAgBADIAJgDIgDgIg");
	this.shape_28.setTransform(27.8,35.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgHgOIAVgEIgBAGIgNADIgBAIIANgEIgBAFIgNACIgCAJIANgCIgBAGIgVAEg");
	this.shape_29.setTransform(24.3,36.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgIgOIAPgDIAGACQACACAAADQAAADgDADQgCADgGABIAJAMIgIACIgHgNIgBABIgDAPIgIABgAgBgKIgBAIQAFgCACgBIACgEIgBgBIgDgBg");
	this.shape_30.setTransform(20.9,37);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AABgLIAFgBIAHATIgFABIgCgEIgJACIgDAGIgGABgAAAACIAFgCIgCgFg");
	this.shape_31.setTransform(33.4,30.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAAgJIAEgCIgEAWIgDABg");
	this.shape_32.setTransform(31.6,31);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFgKIAFAAIAFgBIADABIACADQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAABIgFACIAGAIIgGABIgEgJIAAAAIgCALIgGABgAAAgHIgBAGIAEgCIABgDIAAgBIgCAAg");
	this.shape_33.setTransform(29.8,31.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEgJIANgDIAAAEIgJACIAAAFIAIgCIgBADIgIABIgBAHIAIgDIAAAEIgOAEg");
	this.shape_34.setTransform(27.6,31.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgFgJIAFgBIAFgBIADACQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAAAIgCAFIgEACQgDAAgDABIgBAKIgGABgAAAgGIgBAFIAEgCQAAAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIAAgCIgCAAg");
	this.shape_35.setTransform(25.5,32.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgHAMQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBgBAAAAIADgPIAFgBIgCAPIABABQAAAAAAAAQABABAAAAQAAAAABgBQAAAAAAAAIABgBIACgBIABgEIACgMIAGgBIgFASIgDADIgEACIgDAAIgDAAg");
	this.shape_36.setTransform(23.1,32.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgJAJIAFgEQACADACgBIABgBIABgCIAAgBIgFgDIgCgDQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQACgDACgBQAFgBAEADIgEAEQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAIgBABIAAABIAAACIAFADIACABIABACQAAADgDACQgCADgDAAIgCABQgEAAgDgDg");
	this.shape_37.setTransform(20.6,33.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgNAbQgDAAgDgFQgCgEAAgGQAAgLAFgIQAEgJAFgEQAHgFAEgCQAIgBAFAEQAFAEAAAKQAAAKgEAHQgFAKgGAEQgFAFgFACIgEAAIgGgBgAADgRQgDABgBACQgCACgDAJQgDAGAAAHQAAAGACABQABACAEAAIAEgEQAEgDABgHQADgFAAgIQAAgGgCgCQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBgBAAAAIgCABg");
	this.shape_38.setTransform(33.2,18.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgMAbQgDAAgEgFQgCgDAAgHQAAgKAEgJQADgIAHgFQAHgGAEgBQAHgBAFAEQAGAEAAAKQAAAKgFAHQgDAKgHAEQgFAFgFACIgFAAIgEgBgAADgRQgDAAgBADQgDADgDAIQgDAFAAAIQAAAFACACQACACAEAAIAEgEQACgCADgIQADgGAAgHQAAgGgCgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAIgBABg");
	this.shape_39.setTransform(28.1,19.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgUAWIAUgWQAHgGACgEIABgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgBQgDABAAACQgCACgBAFIgMADQAAgFADgFQACgEAFgDQAFgEADAAQAIgCAGADQAFADAAAGQAAAFgEAGQgEAGgPAQIAUgFIgBAJIgnAJg");
	this.shape_40.setTransform(22.7,21);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AACgLIAEgBIAHATIgFABIgCgEIgJACIgDAGIgGABgAgBABIAGgBIgCgFg");
	this.shape_41.setTransform(35.4,23.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgFgKIAFgBIAFgBIAEACIABADQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgBACgFABIAHAIIgFACIgFgJIAAAAIgCAKIgGABgAAAgGIgBAFIAEgCIACgCIgBgCIgCAAg");
	this.shape_42.setTransform(32.8,24.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgBgFIgHACIAAgFIARgEIgBAFIgGABIgCASIgFABg");
	this.shape_43.setTransform(30.9,24.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgDAAIAIgCIAAACIgJADg");
	this.shape_44.setTransform(29,25.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgCAAIgJgMIAIgBIAEAIIAIgLIAJgCIgOASIAJAMIgIACIgFgKIgIAOIgJABg");
	this.shape_45.setTransform(26.2,25.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("ABfhPIAAB3Ii9Aog");
	this.shape_46.setTransform(28.7,43.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#444444").s().p("AhtifIDbgvIAAFqIjbAzg");
	this.shape_47.setTransform(28.8,33.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#444444").s().p("AgEDCQgCgDAAgDIAAl3QAAgDACgCQADgCABAAQADAAACACQACACAAADIAAF3QAAADgCADQgCABgDAAQgBAAgDgBg");
	this.shape_48.setTransform(16.3,35.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgDA2IADhrIAFBrg");
	this.shape_49.setTransform(25.3,8.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#444444").s().p("Ai+gaIDrgsICTBdIjrAwg");
	this.shape_50.setTransform(20.8,9.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#444444").s().p("AjOCoIgDmYIECgvIChBmIgDGaIkAA/gAjCjjIADGEICRBvIDug7IADmGIiVhfg");
	this.shape_51.setTransform(21,28.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AjGClIgEmPID5guICcBjIgDGQIj3A+g");
	this.shape_52.setTransform(21,28.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.1,57.8);


(lib.bottle_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgEALIAEghQgBANAGAgQgJgBAAgLg");
	this.shape.setTransform(0.4,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AAEgNIAAABIAAAVIgHAFQAFgOACgNg");
	this.shape_1.setTransform(29.9,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AhqAUQgtgRAAgYIAAgLQAGAOAfAOQAtAUBFAAQBRAAAsgZQAWgPAFgOIAAARQAAAYgtARQgsASg/AAQg+AAgsgSg");
	this.shape_2.setTransform(15.1,9.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#444444").ss(2).p("AiIAAQAAAXAoAQQAoAQA4AAQA5AAAogQQAogQAAgXQAAgWgogQQgogQg5AAQg4AAgoAQQgoAQAAAWg");
	this.shape_3.setTransform(15.1,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhgAnQgogQAAgXQAAgWAogQQAogQA4AAQA5AAAoAQQAoAQAAAWQAAAXgoAQQgoAQg5AAQg4AAgogQg");
	this.shape_4.setTransform(15.1,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhVAbIhCgjIAAghIEvAAIAAAVIgRAcIiEAig");
	this.shape_5.setTransform(15.1,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-4.5,30.6,17.7);


(lib.bottle_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AhLAjQgggLAAgPQAAgSAXgQQAegUA2AAQA9AAAcAUQATAOAAAUQAAAPgfALQggALgtAAQgrAAgggLg");
	this.shape.setTransform(14.9,8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AhwAYIAAgBQABgEAEgFQAHgKAPgHIARgIIAVgGIAXgEIAXgCIAtACQAYADAQAHQAIAEAGAFIAKAGIAEAHIABADIAAAAIAAAAIgCgCIgFgGIgKgGQgGgDgIgDQgLgEgHgBIgVgEIgsgDIgXABIgrAIIgRAIQgPAGgHAKIgFAGIgBADg");
	this.shape_1.setTransform(14.7,5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AAIARIgIAAIgqgEIgkgIIgNgFQgFgCgEgFIgEgGIgBgDIABAAIAAAAIABADIAFAFQADAEAGACQAGACAGABIARAEIASACIAVABQAKABALgBIAIAAIAegEIASgDIAQgCIAegLIACgBIACAAIAAABIgSAMIgNAFIgRAGIgTAEQgIACgMAAIgFAAIgGAAg");
	this.shape_2.setTransform(14.6,13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444444").s().p("AhqC8QgRgSAAgYQgDgJgIj2QgLgWABgQQABgXAdgUQAngcBKAAIAFAAQBeACAgAiQAQARgCATQAAAQgGAIIAAADIAAEKQgBAUgRARQgjAjhUAAQhMAAgfgfgAhhiwQgZAPgBAPQgBAOAKAPIABACIAAADQAHDSAEAsIAAADQAAARALALQAZAZBDAAQBIAAAdgaQANgMABgNIAAkKQAAgHAEgHQADgFAAgJQABgKgJgLQgbgbhUgCIgEAAQg/AAgiAVg");
	this.shape_3.setTransform(14.5,22);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhlCxQgJgKgCgNIAAgLQgBgCgKj9QgLgSABgQQABgUAcgSQAmgZBHABQBKACAhAWQAXAQgBAWQAAALgEAGQgDAGAAAEIAAEKQAAAQgQAPQgfAfhPAAQhMAAgaggg");
	this.shape_4.setTransform(14.5,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,44);


(lib.pic03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(22.1,18.2,1,1,0,0,0,18.6,14.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("Ai4hEIEOgdIBjCCIlaBBg");
	this.shape.setTransform(22,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AjpheIFIgmICLC9ImwBMgAjbhUIAfDLIGRhHIh7ing");
	this.shape_1.setTransform(23.4,13.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjghYIE+glICDCyImgBJg");
	this.shape_2.setTransform(23.3,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46.9,32.7);


(lib.pic01_A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.pic01();
	this.instance.setTransform(21.9,19.9,1,1,0,0,0,21.9,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.9,39.7);


(lib.box_no_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// box_door
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(1.5).p("ADAAWIjsA1IiThkIDzgyg");
	this.shape.setTransform(20.9,8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai/gZIDzgxICMBhIjtA1g");
	this.shape_1.setTransform(20.9,8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// body
	this.instance = new lib.box_body();
	this.instance.setTransform(21,28.9,1,1,0,0,0,21,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.4,42.3,58.2);


(lib.box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_340 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(340).call(this.frame_340).wait(1));

	// white_light
	this.instance = new lib.whote_light();
	this.instance.setTransform(21.6,-65.6,1,1,0,0,0,200,150);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(124).to({_off:false},0).to({alpha:0},5,cjs.Ease.get(-1)).wait(36).to({alpha:1},0).to({alpha:0},5,cjs.Ease.get(-1)).wait(41).to({alpha:1},0).to({alpha:0},5,cjs.Ease.get(-1)).wait(125));

	// 圖層 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_60 = new cjs.Graphics().p("AhECOIgHgHQgEAEhVkfQDtgBAAABIgRDkQgZAzgEAEQgCAFgFADQgJAGggAAIgEAAQgfAAgMgHg");
	var mask_graphics_61 = new cjs.Graphics().p("AgmCOIgGgHQgFAEhUkfQDsgBAAABIgQDkQgZAzgFAEQgBAFgFADQgJAGgjAAIgEAAQgdAAgMgHg");
	var mask_graphics_62 = new cjs.Graphics().p("AgWCOIgGgHQgFAEhVkfQDtgBAAABIgQDkQgZAzgGAEQgBAFgEADQgJAGgjAAIgEAAQgdAAgMgHg");
	var mask_graphics_63 = new cjs.Graphics().p("AgWCOIgHgHQgFAEhUkfQDtgBAAABIgQDkQgaAzgEAEQgCAFgEADQgKAGgiAAIgEAAQgdAAgMgHg");
	var mask_graphics_64 = new cjs.Graphics().p("AgXCOIgFgHQgGAEhTkfQDrgBAAABIgPDkQgZAzgGAEQgBAFgEADQgJAGgjAAIgEAAQgdAAgNgHg");
	var mask_graphics_65 = new cjs.Graphics().p("AgWCOIgGgHQgFAEhVkfQDtgBgBABIgPDkQgZAzgGAEQgBAFgEADQgJAGgjAAIgEAAQgdAAgMgHg");
	var mask_graphics_66 = new cjs.Graphics().p("AgXCOIgFgHQgGAEhTkfQDrgBAAABIgQDkQgZAzgFAEQAAAFgGADQgIAGgjAAIgEAAQgdAAgNgHg");
	var mask_graphics_67 = new cjs.Graphics().p("AgXCOIgFgHQgGAEhTkfQDrgBAAABIgPDkQgZAzgGAEQgBAFgEADQgJAGgjAAIgEAAQgdAAgNgHg");
	var mask_graphics_68 = new cjs.Graphics().p("AgOCOIgGgHQgFAEhUkfQDsgBAAABIgQDkQgZAzgFAEQgBAFgFADQgJAGgiAAIgEAAQgdAAgNgHg");
	var mask_graphics_69 = new cjs.Graphics().p("AgDCOIgGgHQgFAEhUkfQDsgBAAABIgQDkQgZAzgFAEQgBAFgFADQgJAGgiAAIgFAAQgfAAgKgHg");
	var mask_graphics_70 = new cjs.Graphics().p("AAECOIgEgHQgFAEhUkfQDsgBAAABIgQDkQgZAzgFAEQgBAFgFADQgJAGgjAAIgEAAQgfAAgMgHg");
	var mask_graphics_71 = new cjs.Graphics().p("AAKCOIgGgHQgEAEhTkfQDsgBAAABIgQDkQgZAzgFAEQgBAFgFADQgJAGgjAAIgEAAQgfAAgMgHg");
	var mask_graphics_72 = new cjs.Graphics().p("AANCOIgGgHQgFAEhSkfQDsgBAAABIgQDkQgZAzgFAEQgBAFgFADQgJAGgiAAIgEAAQggAAgMgHg");
	var mask_graphics_73 = new cjs.Graphics().p("AAOCOIgFgHQgGAEhRkfQDrgBAAABIgQDkQgZAzgEAEQgBAFgGADQgIAGgjAAIgEAAQgfAAgNgHg");
	var mask_graphics_104 = new cjs.Graphics().p("AAOCOIgFgHQgGAEhRkfQDrgBAAABIgQDkQgZAzgEAEQgBAFgGADQgIAGgjAAIgEAAQgfAAgNgHg");
	var mask_graphics_105 = new cjs.Graphics().p("AAOCMIgFgHQgGAEhRkfQDrgBAAABIgQDkQgZAzgEAEQgBAFgGADQgIAGgjAAIgEAAQgfAAgNgHg");
	var mask_graphics_106 = new cjs.Graphics().p("AAOA4IgFgHQgGAEhRkfQDrgBAAABIgQDmQgZAxgEAEQgBAFgGADQgIAGgjAAIgEAAQgfAAgNgHg");
	var mask_graphics_107 = new cjs.Graphics().p("AAOgRIgFgHQgGAEhRkhQDrgBAAABIgQDmQgZAygEAEQgBAGgGADQgIAFgjABIgEAAQgfAAgNgHg");
	var mask_graphics_108 = new cjs.Graphics().p("AAOhUIgFgHQgGAEhRkhQDrgBAAABIgQDmQgZAzgEAEQgBAFgGADQgIAGgjAAIgEAAQgfAAgNgHg");
	var mask_graphics_109 = new cjs.Graphics().p("AAOiNIgFgHQgGAEhRkhQDrgBAAABIgQDmQgZAygEAEQgBAGgGADQgIAFgjABIgEAAQgfAAgNgHg");
	var mask_graphics_110 = new cjs.Graphics().p("AAOi+IgFgHQgGAEhRkhQDrgBAAABIgQDmQgZAygEAEQgBAGgGADQgIAFgjABIgEAAQgfAAgNgHg");
	var mask_graphics_111 = new cjs.Graphics().p("AAOjmIgFgHQgGAEhRkhQDrgBAAABIgQDmQgZAzgEAEQgBAFgGADQgIAGgjAAIgEAAQgfAAgNgHg");
	var mask_graphics_112 = new cjs.Graphics().p("AAOkFIgFgHQgGAEhRkhQDrgBAAABIgQDmQgZAzgEAEQgBAFgGADQgIAGgjAAIgEAAQgfAAgNgHg");
	var mask_graphics_113 = new cjs.Graphics().p("AAOkbIgFgHQgGAEhRkhQDrgBAAABIgQDmQgZAygEAEQgBAGgGADQgIAFgjABIgEAAQgfAAgNgHg");
	var mask_graphics_114 = new cjs.Graphics().p("AAOkoIgFgHQgGAEhRkhQDrgBAAABIgQDmQgZAygEAEQgBAGgGADQgIAFgjABIgEAAQgfAAgNgHg");
	var mask_graphics_115 = new cjs.Graphics().p("AAOktIgFgHQgGAEhRkhQDrgBAAABIgQDmQgZAzgEAEQgBAFgGADQgIAGgjAAIgEAAQgfAAgNgHg");
	var mask_graphics_147 = new cjs.Graphics().p("AAOktIgFgHQgGAEhRkhQDrgBAAABIgQDmQgZAzgEAEQgBAFgGADQgIAGgjAAIgEAAQgfAAgNgHg");
	var mask_graphics_148 = new cjs.Graphics().p("AgKlGIgGgHQgFAEhUkhQDsgBAAABIgQDmQgZAzgFAEQgBAFgFADQgJAGgjAAIgEAAQgfAAgKgHg");
	var mask_graphics_149 = new cjs.Graphics().p("AgXlcIgFgHQgGAEhTkhQDrgBAAABIgQDmQgZAygEAEQgBAGgGADQgIAFgjABIgEAAQgdAAgNgHg");
	var mask_graphics_150 = new cjs.Graphics().p("AgWlwIgGgHQgFAEhVkhQDtgBgBABIgPDmQgZAygGAEQgBAGgEADQgJAFgjABIgEAAQgdAAgMgHg");
	var mask_graphics_151 = new cjs.Graphics().p("AgXmBIgGgHQgEAEhUkhQDrgBABABIgRDmQgZAygEAEQgBAGgGADQgIAFgjABIgEAAQgdAAgNgHg");
	var mask_graphics_152 = new cjs.Graphics().p("AgWmQIgHgHQgEAEhVkhQDtgBAAABIgQDmQgaAzgEAEQgCAFgEADQgKAGgiAAIgEAAQgdAAgMgHg");
	var mask_graphics_153 = new cjs.Graphics().p("AgWmcIgHgHQgEAEhVkhQDtgBAAABIgQDmQgaAzgEAEQgCAFgFADQgJAGgiAAIgEAAQgdAAgMgHg");
	var mask_graphics_154 = new cjs.Graphics().p("AgXmlIgGgHQgEAEhUkhQDrgBAAABIgQDmQgZAzgEAEQgBAFgGADQgIAGgjAAIgEAAQgdAAgNgHg");
	var mask_graphics_155 = new cjs.Graphics().p("AgWmrIgGgHQgFAEhVkhQDtgBgBABIgPDmQgZAygGAEQgBAGgEADQgJAFgjABIgEAAQgdAAgMgHg");
	var mask_graphics_156 = new cjs.Graphics().p("AgXmvIgFgHQgGAEhTkhQDrgBAAABIgQDmQgZAygFAEQAAAGgGADQgIAFgjABIgEAAQgdAAgNgHg");
	var mask_graphics_157 = new cjs.Graphics().p("AgXmxIgGgHQgEAEhUkhQDrgBAAABIgQDmQgZAzgEAEQgBAFgGADQgIAGgjAAIgEAAQgdAAgNgHg");
	var mask_graphics_192 = new cjs.Graphics().p("AgXmxIgGgHQgEAEhUkhQDrgBAAABIgQDmQgZAzgEAEQgBAFgGADQgIAGgjAAIgEAAQgdAAgNgHg");
	var mask_graphics_193 = new cjs.Graphics().p("AgWm7IgGgHQgFAEhVkhQDtgBgBABIgPDmQgZAygGAEQgBAGgEADQgJAFgjABIgEAAQgdAAgMgHg");
	var mask_graphics_194 = new cjs.Graphics().p("AgNnFIgGgHQgFAEhUkhQDsgBAAABIgQDmQgZAzgFAEQgBAFgFADQgJAGgiAAIgEAAQgdAAgNgHg");
	var mask_graphics_195 = new cjs.Graphics().p("AAgnNIgGgHQgFAEhSkhQDsgBAAABIgQDmQgZAygFAEQgBAGgFADQgJAFgjABIgEAAQgfAAgMgHg");
	var mask_graphics_196 = new cjs.Graphics().p("ABInVIgGgHQgFAEhSkhQDsgBAAABIgQDmQgZAzgFAEQgBAFgFADQgJAGgjAAIgEAAQgfAAgMgHg");
	var mask_graphics_197 = new cjs.Graphics().p("ABpnbIgFgHQgGAEhTkhQDugBgBABIgPDmQgZAzgGAEQgBAFgEADQgJAGgjAAIgEAAQgfAAgNgHg");
	var mask_graphics_198 = new cjs.Graphics().p("ACFngIgGgHQgFAEhUkhQDugBAAABIgQDmQgZAzgFAEQgBAFgFADQgJAGgiAAIgFAAQgfAAgMgHg");
	var mask_graphics_199 = new cjs.Graphics().p("ACbnkIgGgHQgFAEhUkhQDugBAAABIgQDmQgZAzgFAEQgBAFgFADQgJAGgjAAIgEAAQgfAAgMgHg");
	var mask_graphics_200 = new cjs.Graphics().p("ACqnnIgGgHQgFAEhUkhQDugBAAABIgQDmQgZAzgFAEQgBAFgFADQgJAGgiAAIgFABQgfAAgMgIg");
	var mask_graphics_201 = new cjs.Graphics().p("ACznoIgGgHQgFAEhUkhQDugBAAABIgQDmQgZAygFAEQgBAGgFADQgJAFgiABIgEAAQgfAAgNgHg");
	var mask_graphics_202 = new cjs.Graphics().p("AC3npIgGgHQgFAEhVkhQDvgBgBABIgPDmQgZAzgGAEQgBAFgEADQgJAGgjAAIgEAAQgfAAgMgHg");
	var mask_graphics_274 = new cjs.Graphics().p("AC3npIgGgHQgFAEhVkhQDvgBgBABIgPDmQgZAzgGAEQgBAFgEADQgJAGgjAAIgEAAQgfAAgMgHg");
	var mask_graphics_275 = new cjs.Graphics().p("AC3n1IgGgHQgFAEhVkhQDvgBgBABIgPDmQgZAygGAEQgBAGgEADQgJAFgjABIgEAAQgfAAgMgHg");
	var mask_graphics_276 = new cjs.Graphics().p("AC3oBIgGgHQgFAEhVkhQDvgBgBABIgPDmQgZAygGAEQgBAGgEADQgJAFgjABIgEAAQgfAAgMgHg");
	var mask_graphics_277 = new cjs.Graphics().p("AC3oNIgGgHQgFAEhVkhQDvgBgBABIgPDmQgZAzgGAEQgBAFgEADQgJAGgjAAIgEAAQgfAAgMgHg");
	var mask_graphics_278 = new cjs.Graphics().p("AC3oXIgGgHQgFAEhVkhQDvgBgBABIgPDmQgZAygGAEQgBAGgEADQgJAFgjABIgEAAQgfAAgMgHg");
	var mask_graphics_279 = new cjs.Graphics().p("AC3ohIgGgHQgFAEhVkhQDvgBgBABIgPDmQgZAygGAEQgBAGgEADQgJAFgjABIgEAAQgfAAgMgHg");
	var mask_graphics_280 = new cjs.Graphics().p("AC3oqIgGgHQgFAEhVkhQDvgBgBABIgPDmQgZAygGAEQgBAGgEADQgJAFgjABIgEAAQgfAAgMgHg");
	var mask_graphics_281 = new cjs.Graphics().p("AC3ozIgGgHQgFAEhVkhQDvgBgBABIgPDmQgZAzgGAEQgBAFgEADQgJAGgjAAIgEAAQgfAAgMgHg");
	var mask_graphics_282 = new cjs.Graphics().p("AC3o7IgGgHQgFAEhVkhQDvgBgBABIgPDmQgZAzgGAEQgBAFgEADQgJAGgjAAIgEAAQgfAAgMgHg");
	var mask_graphics_283 = new cjs.Graphics().p("AC3pCIgGgHQgFAEhVkhQDvgBgBABIgPDmQgZAygGAEQgBAGgEADQgJAFgjABIgEAAQgfAAgMgHg");
	var mask_graphics_284 = new cjs.Graphics().p("AC3pJIgGgHQgFAEhVkhQDvgBgBABIgPDmQgZAzgGAEQgBAFgEADQgJAGgjAAIgEAAQgfAAgMgHg");
	var mask_graphics_285 = new cjs.Graphics().p("AC3pPIgGgHQgFAEhVkhQDvgBgBABIgPDmQgZAzgGAEQgBAFgEADQgJAGgjAAIgEAAQgfAAgMgHg");
	var mask_graphics_286 = new cjs.Graphics().p("AC3pUIgGgHQgFAEhVkhQDvgBgBABIgPDmQgZAygGAEQgBAGgEADQgJAFgjABIgEAAQgfAAgMgHg");
	var mask_graphics_287 = new cjs.Graphics().p("AC3pZIgGgHQgFAEhVkhQDvgBgBABIgPDmQgZAzgGAEQgBAFgEADQgJAGgjAAIgEAAQgfAAgMgHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(60).to({graphics:mask_graphics_60,x:-16.5,y:-8.2}).wait(1).to({graphics:mask_graphics_61,x:-13.5,y:-6.5}).wait(1).to({graphics:mask_graphics_62,x:-9.5,y:-4.9}).wait(1).to({graphics:mask_graphics_63,x:-4.4,y:-3.5}).wait(1).to({graphics:mask_graphics_64,x:0.1,y:-2.2}).wait(1).to({graphics:mask_graphics_65,x:4.2,y:-1.1}).wait(1).to({graphics:mask_graphics_66,x:7.9,y:-0.1}).wait(1).to({graphics:mask_graphics_67,x:11,y:0.8}).wait(1).to({graphics:mask_graphics_68,x:12.8,y:1.5}).wait(1).to({graphics:mask_graphics_69,x:13.9,y:2.1}).wait(1).to({graphics:mask_graphics_70,x:14.7,y:2.6}).wait(1).to({graphics:mask_graphics_71,x:15.3,y:3}).wait(1).to({graphics:mask_graphics_72,x:15.7,y:3.2}).wait(1).to({graphics:mask_graphics_73,x:15.8,y:3.2}).wait(31).to({graphics:mask_graphics_104,x:15.8,y:3.2}).wait(1).to({graphics:mask_graphics_105,x:15.8,y:-15.2}).wait(1).to({graphics:mask_graphics_106,x:15.8,y:-23.6}).wait(1).to({graphics:mask_graphics_107,x:15.8,y:-31.1}).wait(1).to({graphics:mask_graphics_108,x:15.8,y:-37.8}).wait(1).to({graphics:mask_graphics_109,x:15.8,y:-43.5}).wait(1).to({graphics:mask_graphics_110,x:15.8,y:-48.4}).wait(1).to({graphics:mask_graphics_111,x:15.8,y:-52.4}).wait(1).to({graphics:mask_graphics_112,x:15.8,y:-55.5}).wait(1).to({graphics:mask_graphics_113,x:15.8,y:-57.7}).wait(1).to({graphics:mask_graphics_114,x:15.8,y:-59}).wait(1).to({graphics:mask_graphics_115,x:15.8,y:-59.5}).wait(32).to({graphics:mask_graphics_147,x:15.8,y:-59.5}).wait(1).to({graphics:mask_graphics_148,x:13.1,y:-62}).wait(1).to({graphics:mask_graphics_149,x:9.6,y:-64.2}).wait(1).to({graphics:mask_graphics_150,x:5.4,y:-66.2}).wait(1).to({graphics:mask_graphics_151,x:1.8,y:-67.9}).wait(1).to({graphics:mask_graphics_152,x:-1.3,y:-69.4}).wait(1).to({graphics:mask_graphics_153,x:-3.8,y:-70.6}).wait(1).to({graphics:mask_graphics_154,x:-5.8,y:-71.5}).wait(1).to({graphics:mask_graphics_155,x:-7.2,y:-72.1}).wait(1).to({graphics:mask_graphics_156,x:-8,y:-72.5}).wait(1).to({graphics:mask_graphics_157,x:-8.3,y:-72.7}).wait(35).to({graphics:mask_graphics_192,x:-8.3,y:-72.7}).wait(1).to({graphics:mask_graphics_193,x:3.4,y:-73.7}).wait(1).to({graphics:mask_graphics_194,x:12.9,y:-74.7}).wait(1).to({graphics:mask_graphics_195,x:17.5,y:-75.5}).wait(1).to({graphics:mask_graphics_196,x:21.5,y:-76.3}).wait(1).to({graphics:mask_graphics_197,x:24.9,y:-76.9}).wait(1).to({graphics:mask_graphics_198,x:27.7,y:-77.4}).wait(1).to({graphics:mask_graphics_199,x:29.8,y:-77.8}).wait(1).to({graphics:mask_graphics_200,x:31.4,y:-78.1}).wait(1).to({graphics:mask_graphics_201,x:32.3,y:-78.2}).wait(1).to({graphics:mask_graphics_202,x:32.6,y:-78.3}).wait(72).to({graphics:mask_graphics_274,x:32.6,y:-78.3}).wait(1).to({graphics:mask_graphics_275,x:32.6,y:-79.5}).wait(1).to({graphics:mask_graphics_276,x:32.6,y:-80.7}).wait(1).to({graphics:mask_graphics_277,x:32.6,y:-81.9}).wait(1).to({graphics:mask_graphics_278,x:32.6,y:-82.9}).wait(1).to({graphics:mask_graphics_279,x:32.6,y:-83.9}).wait(1).to({graphics:mask_graphics_280,x:32.6,y:-84.8}).wait(1).to({graphics:mask_graphics_281,x:32.6,y:-85.7}).wait(1).to({graphics:mask_graphics_282,x:32.6,y:-86.5}).wait(1).to({graphics:mask_graphics_283,x:32.6,y:-87.2}).wait(1).to({graphics:mask_graphics_284,x:32.6,y:-87.9}).wait(1).to({graphics:mask_graphics_285,x:32.6,y:-88.5}).wait(1).to({graphics:mask_graphics_286,x:32.6,y:-89}).wait(1).to({graphics:mask_graphics_287,x:32.6,y:-89.5}).wait(1).to({graphics:null,x:0,y:0}).wait(53));

	// camera_door_01
	this.instance_1 = new lib.camera_door_01();
	this.instance_1.setTransform(-18.3,6.3,1,1,0,0,0,5.5,7.5);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60).to({_off:false},0).to({x:22.5,y:17.9},13,cjs.Ease.get(1)).to({y:12.3},7,cjs.Ease.get(0.5)).wait(13).to({y:17.9},9).wait(2).to({y:-89.3},11,cjs.Ease.get(1)).wait(32).to({x:-5.5,y:-115.7},10,cjs.Ease.get(1)).wait(35).to({x:56.1,y:-126.9},10,cjs.Ease.get(1)).wait(72).to({y:-149.3,alpha:0},13,cjs.Ease.get(0.5)).to({_off:true},1).wait(53));

	// shutter_c
	this.instance_2 = new lib.shutter_circle();
	this.instance_2.setTransform(-63.6,3.7,1,1,0,0,0,3.6,4.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({_off:false},0).to({x:-22.8,y:15.3},13,cjs.Ease.get(1)).wait(31).to({y:-91.9},11,cjs.Ease.get(1)).wait(6).to({regY:4.4,scaleY:0.66,y:-92.1},3).to({regY:4.5,scaleY:1,y:-91.9},3).wait(20).to({x:-50.8,y:-118.3},10,cjs.Ease.get(1)).wait(5).to({scaleY:0.79},3).to({scaleY:1},3).wait(24).to({x:10.8,y:-129.5},10,cjs.Ease.get(1)).wait(5).to({scaleY:0.85},4).to({scaleY:1},4).wait(59).to({y:-151.9,alpha:0},13,cjs.Ease.get(0.5)).to({_off:true},1).wait(53));

	// shutter_2
	this.instance_3 = new lib.shutter_2();
	this.instance_3.setTransform(-65.4,1.4,0.819,0.951,25.7,0,0,7.7,4.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60).to({_off:false},0).to({x:-23.2,y:13.2},13,cjs.Ease.get(1)).wait(31).to({y:-94},11,cjs.Ease.get(1)).to({regX:7.8,regY:4,scaleX:1,scaleY:1,rotation:0,x:-25.8,y:-94.4},6).to({regX:7.7,regY:4.1,scaleX:0.82,scaleY:0.95,rotation:25.7,x:-23.2,y:-94},6).wait(20).to({x:-51.2,y:-120.4},10,cjs.Ease.get(1)).to({regX:7.8,scaleX:0.93,scaleY:0.95,rotation:-0.1,x:-53.7,y:-120.7},5).to({regX:7.7,scaleX:0.82,scaleY:0.95,rotation:25.7,x:-51.2,y:-120.4},6).wait(24).to({x:10.4,y:-131.6},10,cjs.Ease.get(1)).to({regY:4.2,scaleX:1,rotation:-5,x:8.6,y:-132.1},5).to({regY:4.1,scaleX:0.82,rotation:25.7,x:10.4,y:-131.6},5).wait(62).to({y:-154,alpha:0},13,cjs.Ease.get(0.5)).to({_off:true},1).wait(53));

	// camera
	this.instance_4 = new lib.camera();
	this.instance_4.setTransform(-41.8,19.9,1,1,0,0,0,33,27);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60).to({_off:false},0).to({x:-1,y:31.5},13,cjs.Ease.get(1)).wait(31).to({y:-75.7},11,cjs.Ease.get(1)).wait(32).to({x:-29,y:-102.1},10,cjs.Ease.get(1)).wait(35).to({x:32.6,y:-113.3},10,cjs.Ease.get(1)).wait(72).to({y:-135.7,alpha:0},13,cjs.Ease.get(0.5)).to({_off:true},1).wait(53));

	// pic03
	this.instance_5 = new lib.pic03();
	this.instance_5.setTransform(38.4,-98.5,1,1,0,0,0,23.4,16.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(216).to({_off:false},0).to({rotation:19.5,x:20.8,y:-65.4},16,cjs.Ease.get(0.5)).to({rotation:0,x:56,y:-22.1},27,cjs.Ease.get(0.5)).to({rotation:29.7,x:38.4,y:19.4},22,cjs.Ease.get(0.5)).to({rotation:0,y:60.7},28,cjs.Ease.get(0.5)).wait(5).to({alpha:0},13).wait(14));

	// pic02
	this.instance_6 = new lib.pic02();
	this.instance_6.setTransform(-28,-96.7,1,1,0,0,0,17.7,11.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(170).to({_off:false},0).to({regX:17.8,scaleX:1.02,scaleY:0.2,rotation:-10.7,x:-42.2,y:-54.4},11,cjs.Ease.get(0.5)).to({scaleX:1.05,scaleY:1.05,rotation:0,x:-18.3,y:-21.3},17,cjs.Ease.get(0.5)).to({scaleX:1.08,scaleY:1.08,x:4.9,y:37.4},29,cjs.Ease.get(0.5)).to({regX:17.7,scaleX:1.1,scaleY:0.69,rotation:15,x:-2.4,y:52.1},16,cjs.Ease.get(0.5)).wait(71).to({alpha:0},13).wait(14));

	// pic01
	this.instance_7 = new lib.pic01();
	this.instance_7.setTransform(-0.8,-75.1,1,1,0,0,0,21.9,19.9);
	this.instance_7._off = true;

	this.instance_8 = new lib.pic01_A();
	this.instance_8.setTransform(-35.2,43.3,1,1,0,0,0,21.9,19.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(129).to({_off:false},0).to({rotation:31.5,x:-23,y:-31.8},11,cjs.Ease.get(0.5)).to({scaleX:1,scaleY:1,rotation:-3.2,x:-5.3,y:3.8},16,cjs.Ease.get(0.5)).to({_off:true,scaleX:1,scaleY:1,rotation:0,x:-35.2,y:43.3},19,cjs.Ease.get(0.5)).wait(166));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(156).to({_off:false},19,cjs.Ease.get(0.5)).to({rotation:43.5,x:-34.4,y:55.3},12,cjs.Ease.get(0.5)).wait(127).to({alpha:0},13).wait(14));

	// camera_door
	this.instance_9 = new lib.camera_door();
	this.instance_9.setTransform(-25.2,29.2,0.078,1,0,0,0,51.6,17);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(76).to({_off:false},0).to({scaleX:1},8).wait(9).to({scaleX:0.08},9).to({_off:true},1).wait(238));

	// film
	this.instance_10 = new lib.film();
	this.instance_10.setTransform(21.1,-107.1,1,1,0,0,0,10.8,17.7);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(52).to({_off:false},0).to({regY:17.8,scaleX:0.7,scaleY:0.7},11).wait(16).to({y:30.5},14,cjs.Ease.get(0.5)).to({_off:true},1).wait(247));

	// box_right_box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(1.5,0,1).p("AgNg7Ih5AVICPBiIB+gcg");
	this.shape.setTransform(15.4,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiFgmIB4gVICUBbIh+Acg");
	this.shape_1.setTransform(15.4,9.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#444444").ss(1.5,0,1).p("AgIhDIiBAcICYBrIB7ghg");
	this.shape_2.setTransform(15.3,9.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiJgnICBgcICSBmIh7Ahg");
	this.shape_3.setTransform(15.3,9.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#444444").ss(1.5,0,1).p("AgihXIhSBNICPBiIBahQg");
	this.shape_4.setTransform(14.5,6.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah0gKIBShNICWBfIhZBQg");
	this.shape_5.setTransform(14.5,6.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#444444").ss(1.5,0,1).p("Ag+h1IgjCHICPBkIA0iEg");
	this.shape_6.setTransform(12.6,3.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhhASIAjiHICgBnIg0CEg");
	this.shape_7.setTransform(12.6,3.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#444444").ss(1.5,0,1).p("Aheh1IAvCHICOBkIgIiIg");
	this.shape_8.setTransform(7.3,3.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgvASIgviHIC1BjIAICIg");
	this.shape_9.setTransform(7.3,3.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#444444").ss(1.5,2,1).p("AhwhpIBrB7IB0BRQADACgBADQgCADgDgBIhugeg");
	this.shape_10.setTransform(5.3,5.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABsBqIhugeIhui1IBrB7IB0BRQADACgBADQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_11.setTransform(5.3,5.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#444444").ss(1.5,0,1).p("AiahPICkA9ICRBiIipgdg");
	this.shape_12.setTransform(1,8.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOAzIiMiCICkA9ICRBhg");
	this.shape_13.setTransform(1,8.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#444444").ss(1.5,0,1).p("Aiag2ICkAFICRBiIi5AGg");
	this.shape_14.setTransform(0.8,11);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Aiag2ICkAGICRBhIi4AGg");
	this.shape_15.setTransform(0.8,11);

	this.instance_11 = new lib.boxright_door();
	this.instance_11.setTransform(0.8,11,1,1,0,0,0,15.6,5.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},9).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.instance_11}]},36).to({state:[{t:this.instance_11}]},11).to({state:[]},1).wait(277));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(52).to({_off:false},0).to({alpha:0},11).to({_off:true},1).wait(277));

	// 圖層 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_22 = new cjs.Graphics().p("ApmTzQ1ygBAEgEQADgCACztQADzvACgCQADgCfHAHQfIAHADgCQACgCADS8QADSxACAHQgJgD8IA+IjqAnIiBhaIm+BhIgBAAgAfVSKIAAAAIAAAAIAAAAg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AiagaIClAFICQBhIi4AGg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(22).to({graphics:mask_1_graphics_22,x:20,y:-110.9}).wait(30).to({graphics:mask_1_graphics_52,x:0.8,y:8.2}).wait(12).to({graphics:null,x:0,y:0}).wait(277));

	// bottle_head
	this.instance_12 = new lib.bottle_head();
	this.instance_12.setTransform(20.9,13.4,1,1,0,0,0,15.3,7.6);
	this.instance_12._off = true;

	this.instance_12.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(22).to({_off:false},0).to({y:-67.1},14,cjs.Ease.get(1)).to({y:-146.2},12,cjs.Ease.get(1)).wait(4).to({alpha:0},11).to({_off:true},1).wait(277));

	// 圖層 32 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_40 = new cjs.Graphics().p("AA0NtQgNgJgFgIQgHAFhngQQhqgPgBABQgCACkRthQkPtbgFgGQAIACLWADQLhADgCACQgFADhOa5InDAPQgEAKgNAJQgZAUgogBQgpAAgagRgAret9IAAAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(40).to({graphics:mask_2_graphics_40,x:10,y:-151.2}).wait(12).to({graphics:null,x:0,y:0}).wait(289));

	// film
	this.instance_13 = new lib.film();
	this.instance_13.setTransform(21.1,-53.5,1,1,0,0,0,10.8,17.7);
	this.instance_13._off = true;

	this.instance_13.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).to({y:-107.1},11,cjs.Ease.get(1)).to({_off:true},1).wait(289));

	// 圖層 24 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_22 = new cjs.Graphics().p("ApmTzQ1ygBAEgEQADgCACztQADzvACgCQADgCfHAHQfIAHADgCQACgCADS8QADSxACAHQgJgD8IA+IjqAnIiBhaIm+BhIgBAAgAfVSKIAAAAIAAAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(22).to({graphics:mask_3_graphics_22,x:20,y:-110.9}).wait(42).to({graphics:null,x:0,y:0}).wait(277));

	// bottle
	this.instance_14 = new lib.bottle_body();
	this.instance_14.setTransform(20.8,27.9,1,1,0,0,0,14.5,21.9);
	this.instance_14._off = true;

	this.instance_14.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(22).to({_off:false},0).to({y:-52.6},14,cjs.Ease.get(1)).wait(16).to({alpha:0},11).to({_off:true},1).wait(277));

	// box_leftdoor
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#444444").ss(1.5).p("AiBghIB/gYICFBaIh5AYg");
	this.shape_16.setTransform(27.1,6.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiBggIB+gZICGBaIh5AZg");
	this.shape_17.setTransform(27.1,6.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#444444").ss(1.5).p("AhvgzIBtABIB3BTIhaATg");
	this.shape_18.setTransform(29.3,7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhygzIBtABIB4BTIhaATg");
	this.shape_19.setTransform(29.5,7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#444444").ss(1.5).p("AhigzIB2AzIBoBHIhJgNg");
	this.shape_20.setTransform(26.8,1.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAnAxIiVhtIB2AzIBnBGg");
	this.shape_21.setTransform(28.1,2.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#444444").ss(1.5).p("AgvgLIgsg5ICWBXIAlA1g");
	this.shape_22.setTransform(30.5,1.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgxgNIgsg5ICWBYIAlA1g");
	this.shape_23.setTransform(30.7,1.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#444444").ss(1.5).p("AhBgGIgYhVICSBcIAfBag");
	this.shape_24.setTransform(32.2,1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhAgFIgYhVICSBcIAfBZg");
	this.shape_25.setTransform(32.2,1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#444444").ss(1.5).p("AhJAAIgGhiICWBYIAJBsg");
	this.shape_26.setTransform(33.1,0.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhJAAIgGhiICWBYIAJBtg");
	this.shape_27.setTransform(33.1,0.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#444444").ss(1.5).p("AhYADIAVhoICbBWIgXB0g");
	this.shape_28.setTransform(34.5,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhXADIAUhoICcBWIgYB1g");
	this.shape_29.setTransform(34.5,-0.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#444444").ss(1.5).p("AhtABIAzhkICnBUIhBByg");
	this.shape_30.setTransform(36.6,0.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhsABIAyhkICnBUIhBBzg");
	this.shape_31.setTransform(36.6,0.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#444444").ss(1.5).p("Ah6gDIBPhZIClBUIhbBlg");
	this.shape_32.setTransform(37.9,0.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ah5gDIBOhZIClBUIhaBlg");
	this.shape_33.setTransform(37.9,0.8);

	this.instance_15 = new lib.box_leftdoor();
	this.instance_15.setTransform(37.9,0.8,1,1,0,0,0,12.3,9.4);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17},{t:this.shape_16}]},9).to({state:[{t:this.shape_19},{t:this.shape_18}]},8).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.instance_15}]},27).to({state:[{t:this.instance_15}]},11).to({state:[]},1).wait(277));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(52).to({_off:false},0).to({alpha:0},11).to({_off:true},1).wait(277));

	// box_door_2
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#444444").ss(1.5).p("AB8gKIj5AxIgBgWID8g3g");
	this.shape_34.setTransform(28.9,11.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ah+ARID9g3IgDAbIj4Ayg");
	this.shape_35.setTransform(28.9,11.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#444444").ss(1.5).p("ACRAAIkeA0IgDgzIEfg0g");
	this.shape_36.setTransform(26.7,8.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AiQABIEfg0IACAzIkeA0g");
	this.shape_37.setTransform(26.7,8.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#444444").ss(1.5).p("ACKgFIkDAyIgSgtID8gtg");
	this.shape_38.setTransform(22.3,-0.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AiKAAID8gtIAZApIkDAxg");
	this.shape_39.setTransform(22.2,-0.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#444444").ss(1.5).p("ACEgFIj0AyIgVgtIDwgtg");
	this.shape_40.setTransform(20.6,-4.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AiEAAIDwgtIAZApIj0Axg");
	this.shape_41.setTransform(20.6,-4.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#444444").ss(1.5).p("ACMgHIkBA3IgYg4IEAgng");
	this.shape_42.setTransform(16.9,-8.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AiMgIIEAgnIAZAoIkCA3g");
	this.shape_43.setTransform(16.8,-8.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#444444").ss(1.5).p("ACJgIIj5BBIgYg5ID5g4g");
	this.shape_44.setTransform(15,-13.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AiIAAID5g4IAYAwIj5BBg");
	this.shape_45.setTransform(15,-13.9);

	this.instance_16 = new lib.box_door2();
	this.instance_16.setTransform(15.1,-14,1,1,0,0,0,13.8,5.6);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_35},{t:this.shape_34}]},2).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41,p:{x:20.6,y:-4.2}},{t:this.shape_40,p:{x:20.6,y:-4.2}}]},1).to({state:[{t:this.shape_41,p:{x:18.8,y:-6.7}},{t:this.shape_40,p:{x:18.8,y:-6.7}}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.instance_16}]},44).to({state:[{t:this.instance_16}]},11).to({state:[]},1).wait(277));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(52).to({_off:false},0).to({alpha:0},11).to({_off:true},1).wait(277));

	// box_door
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#444444").ss(1.5).p("ADAAWIjsA1IiThkIDzgyg");
	this.shape_46.setTransform(20.9,8.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Ai/gZIDzgxICMBhIjtA1g");
	this.shape_47.setTransform(20.9,8.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#444444").ss(1.5).p("AC+AEIj6A0IiDhBIDtgug");
	this.shape_48.setTransform(20.9,6.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Ai+gIIDtgvICQA7Ij6A0g");
	this.shape_49.setTransform(20.8,6.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#444444").ss(1.5).p("ACngWIkCA6IhZgbIDggtg");
	this.shape_50.setTransform(21,4.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AitAJIDggtIB7APIkCA5g");
	this.shape_51.setTransform(20.3,4.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#444444").ss(1.5).p("ABbAFIjvAvIA5hGIDughg");
	this.shape_52.setTransform(17.1,0.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AhagRIDugiIg4A5IjvAug");
	this.shape_53.setTransform(17,0.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#444444").ss(1.5).p("ABqAZIj4AvIA5hqIDmglg");
	this.shape_54.setTransform(15.6,-1.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AhWghIDmgmIgnBhIj4Aug");
	this.shape_55.setTransform(15.7,-1.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#444444").ss(1.5).p("ABxAnIj4AuIAmh8IDqgtg");
	this.shape_56.setTransform(14.9,-2.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AhignIDqgtIgXB7Ij4Aug");
	this.shape_57.setTransform(15,-2.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#444444").ss(1.5).p("AByAxIj4AvIARiTID7gsg");
	this.shape_58.setTransform(14.8,-3.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("Ah1gzID8gsIgUCQIj4Avg");
	this.shape_59.setTransform(14.8,-3.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#444444").ss(1.5).p("AB+BFIj7AwIADi1ID4g0g");
	this.shape_60.setTransform(13.4,-7.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("Ah6hAID4g0IAAC5Ij7Awg");
	this.shape_61.setTransform(13.4,-7.4);

	this.instance_17 = new lib.box_door();
	this.instance_17.setTransform(-2.4,-4.3,1,1,0,0,0,-3.2,14.8);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46}]}).to({state:[{t:this.shape_49},{t:this.shape_48}]},2).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.instance_17}]},44).to({state:[{t:this.instance_17}]},11).to({state:[]},1).wait(277));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(52).to({_off:false},0).to({alpha:0},11).to({_off:true},1).wait(277));

	// box_right_box
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#444444").ss(1.5,0,1).p("AgNg7Ih5AVICPBiIB+gcg");
	this.shape_62.setTransform(15.4,9.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AiFgmIB4gVICUBbIh+Acg");
	this.shape_63.setTransform(15.4,9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62}]}).to({state:[]},9).wait(332));

	// box_leftdoor
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#444444").ss(1.5).p("AiBghIB/gYICFBaIh5AYg");
	this.shape_64.setTransform(27.1,6.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AiBggIB+gZICGBaIh5AZg");
	this.shape_65.setTransform(27.1,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64}]}).to({state:[]},9).wait(332));

	// 圖層 29 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("ApmTzQ1ygBAEgEQADgCACztQADzvACgCQADgCfHAHQfIAHADgCQACgCADS8QADSxACAHQgJgD8IA+IjqAnIiBhaIm+BhIgBAAgAfVSKIAAAAIAAAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:20,y:-110.9}).wait(26).to({graphics:null,x:0,y:0}).wait(315));

	// bottle_head
	this.instance_18 = new lib.bottle_head();
	this.instance_18.setTransform(20.9,13.4,1,1,0,0,0,15.3,7.6);

	this.instance_18.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({_off:true},26).wait(315));

	// bottle
	this.instance_19 = new lib.bottle_body();
	this.instance_19.setTransform(20.8,27.9,1,1,0,0,0,14.5,21.9);

	this.instance_19.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({_off:true},26).wait(315));

	// body
	this.instance_20 = new lib.box_body();
	this.instance_20.setTransform(21,28.9,1,1,0,0,0,21,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(52).to({alpha:0},11).to({_off:true},1).wait(277));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.4,42.3,58.2);


// stage content:



(lib.camera_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// box
	this.instance = new lib.box();
	this.instance.setTransform(199.4,243.6,1,1,0,0,0,21,28.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48).to({_off:false},0).wait(345));

	// handle
	this.instance_1 = new lib.handel();
	this.instance_1.setTransform(310.3,258.4,1,1,0,0,0,1.9,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:318.5,y:263},15,cjs.Ease.get(1)).wait(350).to({x:310.3,y:258.4},12).wait(16));

	// door_open
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").p("AkBByIAIj9IH7ApIgZDug");
	this.shape.setTransform(307.7,265.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkBByIAIj9IH7ApIgZDug");
	this.shape_1.setTransform(307.7,265.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#444444").p("AkHBvIAUj3IH7ApIgmDog");
	this.shape_2.setTransform(308.4,265.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkHBvIAUj3IH7ApIgmDog");
	this.shape_3.setTransform(308.4,265.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#444444").p("AkNBsIAfjxIH7AoIgyDjg");
	this.shape_4.setTransform(309,265.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkNBrIAgjwIH6AoIgxDjg");
	this.shape_5.setTransform(309,265.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#444444").p("AkSBoIApjqIH8AoIg+Deg");
	this.shape_6.setTransform(309.6,266);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AkSBoIApjrIH8ApIg9Deg");
	this.shape_7.setTransform(309.6,266.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#444444").p("AkXBlIAzjlIH7AoIhHDZg");
	this.shape_8.setTransform(310.2,266.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AkXBlIAzjlIH7AoIhHDZg");
	this.shape_9.setTransform(310.2,266.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#444444").p("AkbBiIA7jgIH8AnIhRDWg");
	this.shape_10.setTransform(310.7,266.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AkbBiIA8jgIH7AnIhRDWg");
	this.shape_11.setTransform(310.7,266.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#444444").p("AkfBgIBDjcIH8AnIhaDSg");
	this.shape_12.setTransform(311.1,266.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AkfBgIBDjcIH8AnIhZDSg");
	this.shape_13.setTransform(311.1,266.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#444444").p("AkjBeIBKjYIH8AnIhhDOg");
	this.shape_14.setTransform(311.6,266.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AkjBeIBLjYIH8AmIhiDPg");
	this.shape_15.setTransform(311.5,266.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#444444").p("AkmBcIBRjUIH8AmIhoDMg");
	this.shape_16.setTransform(311.9,267);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AkmBcIBRjUIH8AmIhoDMg");
	this.shape_17.setTransform(311.9,267.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#444444").p("AkpBbIBWjSIH8AmIhuDJg");
	this.shape_18.setTransform(312.2,267.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AkpBbIBXjSIH8AmIhuDJg");
	this.shape_19.setTransform(312.2,267.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#444444").p("AkrBZIBbjPIH8AmIhzDHg");
	this.shape_20.setTransform(312.5,267.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AkrBZIBbjPIH8AmIhzDHg");
	this.shape_21.setTransform(312.5,267.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#444444").p("AktBYIBfjNIH8AmIh3DFg");
	this.shape_22.setTransform(312.7,267.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AktBYIBfjNIH8AmIh3DFg");
	this.shape_23.setTransform(312.7,267.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#444444").p("AkvBXIBijLIH8AmIh6DEg");
	this.shape_24.setTransform(312.9,267.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AkuBXIBhjLIH8AmIh6DEg");
	this.shape_25.setTransform(312.8,267.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#444444").p("AkwBXIBkjLIH8AmIh8DDg");
	this.shape_26.setTransform(313,267.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AkvBXIBjjLIH8AlIh8DEg");
	this.shape_27.setTransform(312.9,267.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#444444").p("AkwBWIBljJIH8AlIh+DDg");
	this.shape_28.setTransform(313,267.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AkwBWIBljJIH8AlIh9DDg");
	this.shape_29.setTransform(313,267.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#444444").p("AjLhzIhmDJIHkAfIB+jDg");
	this.shape_30.setTransform(313.1,267.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AkwBWIBljKIH8AmIh+DCg");
	this.shape_31.setTransform(313,267.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#444444").p("AktBZIBejOIH8AmIh2DGg");
	this.shape_32.setTransform(312.6,267.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AksBYIBdjOIH8AnIh1DGg");
	this.shape_33.setTransform(312.6,267.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#444444").p("AkpBbIBWjSIH8AmIhtDKg");
	this.shape_34.setTransform(312.2,267.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AkoBbIBWjSIH7AmIhtDKg");
	this.shape_35.setTransform(312.1,267.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#444444").p("AklBdIBOjWIH8AmIhlDNg");
	this.shape_36.setTransform(311.7,267);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AkkBdIBNjWIH9AmIhlDNg");
	this.shape_37.setTransform(311.7,267);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#444444").p("AkhBfIBGjaIH8AmIhcDRg");
	this.shape_38.setTransform(311.3,266.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AkhBfIBHjaIH8AmIhdDRg");
	this.shape_39.setTransform(311.3,266.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#444444").p("AkdBiIA/jfIH7AnIhUDUg");
	this.shape_40.setTransform(310.8,266.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AkcBiIA+jfIH7AnIhTDUg");
	this.shape_41.setTransform(310.8,266.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#444444").p("AkZBkIA3jjIH7AnIhLDYg");
	this.shape_42.setTransform(310.4,266.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AkZBkIA3jjIH8AnIhMDYg");
	this.shape_43.setTransform(310.4,266.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#444444").p("AkVBnIAvjoIH7AoIhDDbg");
	this.shape_44.setTransform(309.9,266.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AkVBmIAvjnIH7AoIhCDbg");
	this.shape_45.setTransform(309.9,266.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#444444").p("AkRBpIAnjsIH7AoIg6Dfg");
	this.shape_46.setTransform(309.5,266);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AkQBpIAmjsIH8AoIg7Dfg");
	this.shape_47.setTransform(309.5,266);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#444444").p("AkNBsIAfjxIH8ApIgzDig");
	this.shape_48.setTransform(309,265.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AkNBrIAfjwIH8ApIgzDig");
	this.shape_49.setTransform(309,265.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#444444").p("AkJBtIAXj0IH8AoIgqDng");
	this.shape_50.setTransform(308.6,265.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AkJBtIAXj0IH8AoIgqDng");
	this.shape_51.setTransform(308.6,265.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#444444").p("AkFBwIAQj5IH7ApIgiDqg");
	this.shape_52.setTransform(308.1,265.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AkFBwIAQj5IH7ApIgiDqg");
	this.shape_53.setTransform(308.1,265.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},350).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(16));

	// box_no_ani
	this.instance_2 = new lib.box_no_ani();
	this.instance_2.setTransform(313,266,0.35,0.35,0.7,0,0,21,28.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({regY:28.9,scaleX:1,scaleY:1,rotation:-720,guide:{path:[312.9,266,317.1,255,317.4,243.2,317.8,230.5,313.7,219.9,303.7,194.3,272.5,189.5,240.7,184.6,216.9,213.6,205,228,199.5,243.5]}},18,cjs.Ease.get(0.5)).to({regX:21.1,rotation:-728.4,x:194,y:237.2},4).to({regX:21,rotation:-720,x:199.5,y:243.6},4).to({rotation:-709.8,x:204.3,y:239.6},4).to({rotation:-720,x:199.5,y:243.6},8).to({_off:true},1).wait(345));

	// door_close
	this.instance_3 = new lib.door_close();
	this.instance_3.setTransform(305,264.6,1,1,0,0,0,26.2,14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(393));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480.9,400.2,53.6,30.1);

})(camera_ani = camera_ani||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var camera_ani, images, createjs, ss;