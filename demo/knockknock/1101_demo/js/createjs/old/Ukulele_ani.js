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



(lib.white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoPQrMAAAghWIQeAAMAAAAhWg");
	this.shape.setTransform(52.8,106.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105.6,213.6);


(lib.ukulele_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(0.5).p("AAAgYIABAx");
	this.shape.setTransform(40.7,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#444444").ss(0.5).p("AgDgjIAHBH");
	this.shape_1.setTransform(39.8,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#444444").ss(0.5).p("AgFgsIALBZ");
	this.shape_2.setTransform(38.6,8.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#444444").ss(0.5).p("AAAgRIABAj");
	this.shape_3.setTransform(38.1,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 圖層 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#444444").s().p("AALA2IAAAAIgDAAIAAAAIgEgBQgJgCgLgJQgFgEgEgHIAAgBIgIgQIgDgIQgGgQADgOIACgGQAAgHAGgHQAJgLASACIAAABIAIACIAAAAQAKAEAHAKQAGAHAEAIIADAFQAKAWgFAVQgCANgJAHQgGAHgKAAIgBAAg");
	this.shape_4.setTransform(30.1,49.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444444").s().p("AgQBBQgYgPgLgfQgLgcAGgbQAIgbAVgJQAWgIAWAPQAYAQALAeQALAcgGAcQgIAbgVAIQgIADgIAAQgNAAgPgKgAgYhBQgTAHgFAZQgHAYALAaQAKAbAWAOQASAOATgHQATgHAFgYQAGgZgKgZQgKgcgWgOQgNgJgLAAQgHAAgGACg");
	this.shape_5.setTransform(29.7,49);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#444444").s().p("AACADIACABIgCAAIgBgDQgBgBgDACIgDgCQAGgEADADQAEABAAAEg");
	this.shape_6.setTransform(37.9,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444444").s().p("AgLAHIAAAAIgBgGQgBgEADgBQACgBAFABIABAAIACABIAAgCQAHgGACAAQABAAAAABQAAAAABAAQAAAAAAAAQABABAAAAQADAEgCAEQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAIgDAAIgGAEIgCgEIABAAIgEAAIgDAAIAAAFQADACAEAAIgBAEQgIAAgCgEg");
	this.shape_7.setTransform(38.1,7.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#444444").s().p("AgGgCIgFgFIgEgGIABgBIABACIAFACIAFAEIATAUIgBABg");
	this.shape_8.setTransform(38.8,15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444444").s().p("AAPAPIgVgRIgIgKIgBgCIABAAIACABIAKAHIASAVg");
	this.shape_9.setTransform(38.2,17.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#444444").s().p("AgGgCIgFgGIgEgGIAAAAIAGADIAGAFIATAVIAAAAg");
	this.shape_10.setTransform(37.7,19.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#444444").s().p("AgHgDIgFgGIgEgFIgBgCIAAAAIAHAEIAHAFIAVAXIgBABg");
	this.shape_11.setTransform(37.3,21.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#444444").s().p("AgGgCQgEgDgCgDIgDgEIgBgCIABAAIAGADIAGAFIAUAVIAAAAg");
	this.shape_12.setTransform(36.8,23.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#444444").s().p("AgHgDIgFgFIgFgHIAAAAIAHADIAHAFIAVAXIgBABg");
	this.shape_13.setTransform(36.4,25.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#444444").s().p("AgHgCIgIgKIgBgCIAAAAIAHADIAFAFIAFAGIAQAPIAAAAg");
	this.shape_14.setTransform(36,27.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#444444").s().p("AARAQIgYgSIgFgHIgDgEIgBgCIAAgBIACACIAFADIAGAEIAUAXg");
	this.shape_15.setTransform(35.5,29.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#444444").s().p("AgHgCIgKgMIABgBIAGAEIAHAFIAVAWg");
	this.shape_16.setTransform(35,30.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#444444").s().p("AgIgDIgGgGIgFgHIAAAAIAIAEIAHAFIAYAYIAAAAg");
	this.shape_17.setTransform(34.4,32.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#444444").s().p("AAVARIgdgUIgHgGIgFgHIAAAAIACABIAGADIAHAFIAaAYg");
	this.shape_18.setTransform(34.1,33.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#444444").s().p("AAWATIgfgXIgMgMIgBgCIACABIAHADIAIAGIAcAbg");
	this.shape_19.setTransform(33.8,35.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#444444").s().p("AAAABIgPgLIgEgGIgCgCIADABIANAJIAbAbIAAAAg");
	this.shape_20.setTransform(33.5,36.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#444444").s().p("AgIgEIgIgHIgEgFIgBgDIAAAAIAJAFIAHAGIAcAcIAAAAg");
	this.shape_21.setTransform(33,38.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#444444").s().p("AgJgEIgHgHIgEgGIgCgCIAAgBIAGADIADADIAIAGIAcAcIgBABg");
	this.shape_22.setTransform(32.7,39.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#444444").s().p("AgBAFIgBgBIgDgEIgBgCIADgDIABgBQAEgDADADIgEAEIAAgBIgBABIgBABIABACIABABQABABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIABACIACACIgEACQgDAAgBgEg");
	this.shape_23.setTransform(37,4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#444444").s().p("AAAAZIgBgDIgCgHIAAgBQAAgFADgDIACgNIgCABQgHgKABgFQAAAAAAgBQABAAAAgBQAAAAABAAQABgBABAAQAFgCADADIAAAAQACADgBAKIgCAPQgBAFgCABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAAAIAAACQAAAFACABIgBAAIABAEIgBABIgBgBgAgBgTQAAACADAGIAAgJIgBAAIgCABg");
	this.shape_24.setTransform(40.1,9.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#444444").s().p("AAGAqIgFgQIAAgBIgBgBIAAgBIgCgEIgBgCIgBgBIAAAAIgBAAIAAgBIAAgBIAAgBIgBgDIgBg3IAAAAIAHA4IAAABIAAABIAAAAIAAABIAEAEIABAEIABAAIAAABIABACIAAABIABAPIAAAEIAAAAg");
	this.shape_25.setTransform(36.4,6.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgFATIABgBIAAgFIAAgGIADgMIAAAAIAAgBIAGgNIABAAIAAABIgEAOIAAADIAAAJIgBADQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgCAEIgCABg");
	this.shape_26.setTransform(23.2,66);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgFATIABgDIAAgCIABgBIABgHIACgGIAAgGIAAAAIAFgMIABAAIAAAAIgDANIABAEIAAAFIgBAEIgCAHIgBADIgCABIgCAAg");
	this.shape_27.setTransform(25.1,67.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgEAUIAAgCIAAgEIABgCIAAgBIAAgCIABgEIACgIIAAgDIAAAAIAEgNIABAAIAAAAIgBAOIAAAKIgCAIIgBABIgBACIAAACIgCABIgCABg");
	this.shape_28.setTransform(27.3,68.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgCATIAAgDIAAgBIAAgCIgBgBIAAgHIABgDIAAgJIAAgBIABAAIAEgKIABAAIAAAAIgEAMIADALQAAAEgBAEIgBABIgBAEIgBABg");
	this.shape_29.setTransform(29.3,70.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AArAdIg8gjIgSgPIgHgHIAAgBIAAAAIAPAHIBGAzIAAAAg");
	this.shape_30.setTransform(25.7,67.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#444444").s().p("AA8BHIiGhVIAPg4IAYAPIAHAAIBcA8IADAIIAIAFQgKA1gFAAIAAAAg");
	this.shape_31.setTransform(24.8,67.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#444444").s().p("ABjDzIgUgFIgLgBIgCgBIgCAAIgQgGIgSgKIg3grQgXgUgQgTIgSgXQgKgMgFgOQgFgPgCgPQgCgOABgRQADgcALgeIAMgfIAGgKIAIgMQAHgIAOgLQAKgIANgHIAdgUIAHgJQAEgKACgKIAAgUIAAgJIAAgEIADgTIAIgbIABABIgIAaIgCAPIAAARQABAKgBAKQgCANgEAIQgCAFgFAFIgdAVIgWAPQgMAJgIAKIgIALIgFAKIgMAfQgLAcgCAcQAAANABARQADAOAFAOQAFAMAJANIASAWQARAUAVATIAjAfQASAOARAJQAHAEAIADIACAAIAMADQANADAHADIAHADIgBABg");
	this.shape_32.setTransform(19.3,58.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#444444").s().p("AAOGqQgvAAgRgKIgDgCQh2g9gfhQQgNghAEgkQAHgsAWgkQATgfAXgMIAOgHQATgJAHgGQALgKAEgQQADgLAAgRQABgaAFgNQAJgYAcgOIAlgUQAXgOAJgDQANgGAKADIAZAIIAYgyIAriPIgJgQIgIgDIAAgBQgDgBgDgEQgDgFABgFIABgGIgFgGIgDAAQgKgBgDgFQgBgEAAgIQgBgMAFgFIABgCQgIgEgDgIQgDgHAEgGQAEgIAEgCQAEgCAHABQAHACAFAGQACgMAJgDQAIgDAIAKIACADQAHADAIAHQAGgBADAFIADAGIADAIIAPASQAEgCAEADQAEACACAFQABAEgCAEIgEAEIAAAEIAAAJQAFAEAAADQAAAFgFAGIABAGQAEAHgDAFIgCACIABAJQAFAOgGAGQgGATgsDOQAWAeAHAaQAHAdAAARQAAAYgMARQgLAQgDAJQgCAHAAALIAKA1IAFAaIABBWQgKBUgwARQgxARg6AAIgDAAgAAghhIgeAQIgjAUQgXANgIATQgFALgBAXQAAATgDAMQgFAUgOAMQgJAIgTAJIgOAHQgTAKgRAbQgWAigHArQgGA3AnAyQAnAzBQApIADACQAPAIAtAAQA5AAAvgQQAqgPAHhQIgBhPIgEgYIgKg3QgBgOADgJQAEgLALgRQAKgOAAgVQAAgPgGgbQgFgQgMgUIgMgSIgCgCIABgDIAqjBQAJglACgDQABgCgCgGIgBgJIAAgEQgBgEADgEIgBgCIgCgQIAEgDIgDgEIgBgOIABgJIAAgCQgEgBgTgXIAAgBIgEgKIgBAAIAAgBIgCAAIgRgMQgEgCgDgFIgCgCQgDAAgBALIAAACQAAAEgEACQgEABgFgDIgEgDIgCgCQgEgEgDAAIgCgBIgDAFIAAACQACAGAGABIADABQAHABACACQAEADABAGQAAAFgDADQgDACgDAAQgCAAgEgEQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBABQgBADABALIACAAIAIACIAKAKIACADIgCAMIADADQAJADADAFIAMAUIgBADQgqCQgDAEIgdA9IgGgDQgNgGgPgEIgEAAQgGAAgIADg");
	this.shape_33.setTransform(21.4,42.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAOGjQgtAAgQgIQg8ghgegbQhNhEAJhOQAGgrAWgiQASgeAVgMQAZgLAKgHQASgMAGgWQABgiADgRQAGggAhgSIA4gfQAVgLAKADQAQAEAOAGIAag3QACgDAriQIgMgTIgJgFQgGgFAAgEIACgJIgJgKQgLgBgBgCQgBgBgBgJQAAgJADgDQADgDAEAAQADAAACABIACACQAAAAAAABQAAAAABAAQAAAAAAAAQAAgBAAAAQAEgEgFgDIgLgCQgFgCgEgFQgGgHAEgFQADgGADgBQACgCAEABQAEABAHAIIAFACQABAAAAABQAAAAABAAQAAAAAAgBQAAAAAAAAIABgJQACgHAFgCQAFgBADAEIAGAGQAFADALAIIACAAIADABIAGAOQAQAWACAAIAEgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAEADgCAEIgEADIgBAIIABAMQAAACAEACIgBAEIgCADIgCABIABALQADAFgBABIgCAGIAAALQAFALgEADQgCACgaByIgYByIAMASQANAWAEAQQAHAcAAAQQAAAXgLAQQgLAQgEAKQgCAIABAMQABAPANBBIABBQQgIBUguAQQgvAQg4AAIgEAAg");
	this.shape_34.setTransform(21.4,42.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.8,85.2);


(lib.righthand_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgEgFIAOAAQgBAHgJADIgJABg");
	this.shape.setTransform(15.6,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgCAAQACgJACAAQAEABABAQIgNACIAEgKg");
	this.shape_1.setTransform(15.5,3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#444444").ss(0.5).p("AgqhEQAvAGAYAKQAEACADgBIAFgCQAFgBAAADQAEgEAAAHQgDAXgCAVQgDAmAGAJQAMATgCAAQgCABgEAAQgFAAgCABQgHAFgFAAQgCAAgEgDQgFgCgCgBIgIABQgMADgUgJQgUgJgLABQgEABgCAB");
	this.shape_2.setTransform(5.9,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeBFQgCAAgEgDIgHgDIgIABQgLADgVgJQgUgJgLABIACAAIAHh2QAvAGAYAKQAEACADgBIAFgCQAFgBAAADQAEgEAAAHIgFAsQgDAmAGAJQAMATgCAAIgGABIgHABQgGAFgFAAIgBAAg");
	this.shape_3.setTransform(6.2,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#444444").ss(0.5).p("AgCADQABAAAAAAQABABAAAAQADAAAAgCQABgCgBAAQgBgCgCgBQAAAAgCACQgBABAAABIACAC");
	this.shape_4.setTransform(12.5,10.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#444444").ss(0.5).p("AAOAwQAAABgBAAQgMACgGADQgEACgBgBIgDgCQgNgMABgdQAAgLADgVQADgWAAgMQALgCAJAEQAEACADgBQACgBADgCQAFgBAAADIAGADQgMASABAZQAAAPAHAcQAAACgGAJg");
	this.shape_5.setTransform(13,7.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIA3IgDgCQgOgMABgdIADggQADgWAAgMQAMgCAJAEQAEACADgBIAFgDQAEgBAAADIAGADQgLASABAZQAAAPAGAcQAAACgFAJIgCABQgLACgHADIgEABIAAAAg");
	this.shape_6.setTransform(12.9,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,17.6,15.9);


(lib.m04_d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AASAGIgEAAQgRgDgSACQgHAAAAgFQgBgFAGgBIAtABQAGAAABAFQABAGgGAAIgCAAIgCABIgCgBg");
	this.shape.setTransform(4.8,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgcAuQgGAAgDgDIgCgFIgBAAQgEgDABgGQACgIAHgEQAEgFAGgDIAEgCIAAAAIgCgOQgDgUgDgKQgBgFAEgCQAEgDADADQADACANAAIARgBIAPgCQAJAAACAIIAAAlIADAkQABAFgFACQgMAEgLgGQgLgHAAgMQgBgMALgFQAGgDAHABIAAgCIgBggIgLABIgRABIgNgBIAGAjIAAAHQAFAFgBAGQACAHgFAGQgHAJgIAAIABgBIgBABIAAAAQgDACgDAAIgBgBg");
	this.shape_1.setTransform(4.4,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.9,9.4);


(lib.m04_A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AASAGIgEAAQgRgDgSACQgHAAAAgFQgBgFAGgBIAtABQAGAAABAFQABAGgGAAIgCAAIgCABIgCgBg");
	this.shape.setTransform(4.8,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgcAuQgGAAgDgDIgCgFIgBAAQgEgDABgGQACgIAHgEQAEgFAGgDIAEgCIAAAAIgCgOQgDgUgDgKQgBgFAEgCQAEgDADADQADACANAAIARgBIAPgCQAJAAACAIIAAAlIADAkQABAFgFACQgMAEgLgGQgLgHAAgMQgBgMALgFQAGgDAHABIAAgCIgBggIgLABIgRABIgNgBIAGAjIAAAHQAFAFgBAGQACAHgFAGQgHAJgIAAIABgBIgBABIAAAAQgDACgDAAIgBgBg");
	this.shape_1.setTransform(4.4,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.9,9.4);


(lib.m03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgQAvQgWgCAJgbQAIgVASAFIAAgqQgBgGAFgBQAGAAAAAGIAAACQABANAHgCQAIgDAEAEQAGAGAAAKQAAAIgEAGQgBADgDAAQgDABgCgCQgEgCAAgDQAAgDACgDIACgBQAAgEgBgFIABAAIgBAAIAAAAIAAAAIgEABIgGAAIgCgBIABAUIAAAKIABAFQACAJgGAIQgFAHgGADQgDACgEAAIgDgBg");
	this.shape.setTransform(3.3,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.6,9.7);


(lib.m02_A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgcAJQAAAAAAgBQgBgBAAAAQAAgBABgBQAAAAAAgBIAAAAIAAgHQAAgEAFgBIAUgCQADAAAAACIAAABIACgBQAGgCAGAAIABgBQAGgEAFAFQAEAEgBAGQAAAHgHABQgDABgKAAQgOAAgPAEIgDABQgDAAgCgFg");
	this.shape.setTransform(5.1,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AggAuQgEgBgCgDIgCgEQgEgDABgFQABgIAIgEQAEgGAGgDIAEgCIAAAAIgCgNQgCgSgEgMQgBgFAEgDQAEgDADADQADADANAAIARgBIAPgCQAJAAABAIQACAGgBANIAAARIADAlQAAAFgEACQgMADgLgFQgLgHgBgMQAAgMALgFQAHgEAGACIgBgjIgLACIgRABIgNgBIAFAjIABAFIAAABQAFAEgBAHQACAIgGAGQgGAJgIgBIgGABIgFAAgAAOAgIADAEQgDgDgBgGIgBAAIAAgBIACAGg");
	this.shape_1.setTransform(4.5,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,9.4);


(lib.m_05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgKA2IgEgBQgJgEACgLQADgMAGgHQAGgIAHAAIgBgJIgKgkIgBgBQgFgEADgFIAAgCQgBgFAGgCQAGgBABAFIANA2IADALQAFAEACAGQADAKgHAIQgHAIgKABIgBAAIgBgBIgHACIgCAAg");
	this.shape.setTransform(2.3,5.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.6,10.9);


(lib.m_02_C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgcAJQAAAAAAgBQgBgBAAAAQAAgBABgBQAAAAAAgBIAAAAIAAgHQAAgEAFgBIAUgCQADAAAAACIAAABIACgBQAGgCAGAAIABgBQAGgEAFAFQAEAEgBAGQAAAHgHABQgDABgKAAQgOAAgPAEIgDABQgDAAgCgFg");
	this.shape.setTransform(5.1,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AggAuQgEgBgCgDIgCgEQgEgDABgFQABgIAIgEQAEgGAGgDIAEgCIAAAAIgCgNQgCgSgEgMQgBgFAEgDQAEgDADADQADADANAAIARgBIAPgCQAJAAABAIQACAGgBANIAAARIADAlQAAAFgEACQgMADgLgFQgLgHgBgMQAAgMALgFQAHgEAGACIgBgjIgLACIgRABIgNgBIAFAjIABAFIAAABQAFAEgBAHQACAIgGAGQgGAJgIgBIgGABIgFAAgAAOAgIADAEQgDgDgBgGIgBAAIAAgBIACAGg");
	this.shape_1.setTransform(4.5,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,9.4);


(lib.m_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgRA4QgFgDAAgHIAEgfIAKhDQABgHAGACQAFABgBAGIgHA1IACAAQACgCAFABQAHABAFAGQAEAFABAHQACAJgFAIQgCAIgHAEIgGAEQgEADgFABIgEABQgEAAgEgDgAgBARIgBACQgBADgDABIgCALIgBAIQACgDAEABIABAAIABAAIAAAAIABAAIAAAAQAGgHgDgIQgBgEgCgCIgBgCIAAAAg");
	this.shape.setTransform(2.3,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.7,11.8);


(lib.line04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5).p("AAGgoIgLBR");
	this.shape.setTransform(3.5,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AglCcIBGk4IAFAAIAAABIhFE4g");
	this.shape_1.setTransform(8,19.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AgNA5IAWhyIAFABIgWByg");
	this.shape_2.setTransform(1.5,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3.4,11.8,53.5);


(lib.line03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5).p("AAJguIgRBd");
	this.shape.setTransform(3.9,42.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgNAzIAWhmIAFABIgWBmg");
	this.shape_1.setTransform(1.4,53.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AglCXIBGkuIAFABIhGEug");
	this.shape_2.setTransform(8.8,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,6.3,12.7,52.7);


(lib.line02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5).p("AALgyIgVBl");
	this.shape.setTransform(4.1,45.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgnCXIBKkuIAFABIAAAAIhKEug");
	this.shape_1.setTransform(9.7,24);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AgNAvIAWheIAFABIgWBeg");
	this.shape_2.setTransform(1.5,56.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,8.8,13.8,52.5);


(lib.line_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5).p("AAMgtIgXBb");
	this.shape.setTransform(4.7,41.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgPAvIAaheIAFABIgaBeg");
	this.shape_1.setTransform(1.6,51.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AgrCWIBSktIAFABIhSEug");
	this.shape_2.setTransform(10.6,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,4.4,15.1,51.8);


(lib.lefthand_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(0.5).p("AgZgyQAAADADABQABAAAHgBQAIAAgBAEQgOAHgDAAQgDABgCADQgDADADADQABABAJABQAHAAACADQADAHgMAAQgHAAgEADQgGADACAEQABAEAHAAQAAAAAJgBQADAAAEgCQADgBgBAEQgBADgFACQgGACAAAEQgCAGABACQAAACAGAAQAIgBAFADQAFADACANQABAMgCAEQgBACgDADQAAAQAVgvQAUgogIgjQgBgJgegGQgdgGACARg");
	this.shape.setTransform(3.6,6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAA8IAEgFQACgEgBgMQgCgNgFgDQgFgDgIABQgGAAAAgCIABgIQAAgEAGgCQAFgCABgDQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAgBAAIgHACIgJABQgHAAgBgEQgCgEAGgDQAEgDAHAAQAMAAgDgHQgCgDgHAAQgJgBgBgBQgDgDADgDQACgDADgBQADAAAOgHQABgEgIAAIgIABQgDgBAAgDQgCgRAdAGQAeAGABAJQAIAjgUAoQgRAjgDAAQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBg");
	this.shape_1.setTransform(3.6,6.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#444444").ss(0.5).p("AgigDQgBgEAFgDQAUgEABgDQgLgHAAAAQgHgBgCgBQgBgEACgCQADgDACAAQAEgBAMgGQABAAAAgBQABgCgEgBQgBgBgCAAQgFAAgDAAIAAAAQgCAAgCgDIAAAAQAAgCAAgCQABgCAAgCQADgEAIAAQAGgBAIACQADABADABQAXAFACAIQABADAAADQAGAhgTAkQgBACgBADQgOAbgDACQgBACAAgEQACgCABgDQABgCABgEQAAgDgBgGQAAgDgBgDQgBgIgEgDQgCgBgDgBQgEgBgEAAQgBAAgBAAQgEAAAAgCQAAAAAAgBQAAgBABgGQABgDAFgCQAEgCACgEQAAAAAAAAQABgDgDABQgBAAAAAAQgEABgCAAQgBAAAAAAQgGABgCAAIgBAAQgFAAgCgCg");
	this.shape_2.setTransform(3.6,6.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AABA9IADgFQABgCABgEIgBgJIgBgGQgBgIgEgDIgFgCIgIgBIgCAAQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIAAgBIABgHQABgDAFgCQAEgCACgEIAAAAQAAAAAAgBQAAgBAAAAQgBgBAAAAQgBAAAAABIgBAAIgGABIgBAAIgIABIgBAAQgFAAgCgCIgBgBQgBgEAFgDQAUgEABgDIgLgHQgHgBgCgBQgBgEACgCQADgDACAAQAEgBAMgGIABgBQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBAAgBAAIgDgBIgIAAIAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBIAAAAIAAgEIABgEQADgEAIAAQAGgBAIACIAGACQAXAFACAIIABAGQAGAhgTAkIgCAFQgOAbgDACIgBABQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAg");
	this.shape_3.setTransform(3.6,6.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#444444").ss(0.5).p("AgigDQgBgEAFgDQAVgEAAgDQgLgGAAAAQgHgCgBgBQgCgEACgCQAEgCACgBQAFgBALgFQAAgBABAAQABgDgDgBQgCgBgCAAQgEAAgEgBIAAAAQgCAAgCgCIAAAAQAAgCAAgCQAAgBAAgCQADgFAHgBQAGAAAIACQAEAAADABQAWAFADAJQABACAAADQAGAhgTAlQgBACgBADQgNAbgEADQgBABAAgDQACgCAAgDQACgCAAgDQABgEgBgGQAAgDAAgCQgCgJgDgDQgCgCgDAAQgEgBgEAAQgBAAgBAAQgEAAgBgCQAAgBAAAAQAAgCABgFIAAAAQABgEAFgCQAFgCABgDQAAgBAAAAQABgCgDAAQgBAAAAAAQgEABgCAAQAAAAgBAAQgGABgCAAIgBAAQgFAAgCgCg");
	this.shape_4.setTransform(3.6,6.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AABA+QAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBIACgFIAAgKIAAgFQgCgJgDgDIgFgCIgIgBIgCAAQgBAAgBgBQgBAAgBAAQAAAAgBgBQAAAAAAAAIAAgBIABgHIAAAAQABgEAFgCQAFgCABgDIAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAIgBAAIgGABIgBAAIgIABIgBAAQgFAAgCgCIgBgBQgBgEAFgDQAVgEAAgDIgLgGQgHgCgBgBQgCgEACgCIAGgDQAFgBALgFIABgBQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAIgEgBIgIgBIAAAAIgEgCIAAAAIAAgEIAAgDQADgFAHgBIAOACIAHABQAWAFADAJIABAFQAGAhgTAlIgCAFQgNAbgEADIgBAAIAAgCg");
	this.shape_5.setTransform(3.6,6.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#444444").ss(0.5).p("AgigCQgBgEAFgDQAVgFAAgDQgLgGgBAAQgGgCgBgBQgBgEACgCQADgCADgBQAFAAAKgGQABAAABgBQAAgDgCgBQgBgBgCAAQgFgBgDAAIgBAAQgCgBgCgBIAAgBQAAgBAAgBQgBgCAAgCQACgFAIgBQAGAAAIACQADAAADABQAWAFADAIQABADABADQAFAhgSAkQgBADgBACQgNAcgDADQgCABAAgCQABgCABgDQACgCAAgDQABgEgBgGQAAgCAAgDQgCgJgDgDQgCgCgDgBQgEgBgEAAQgBAAgBAAQgEAAAAgCQgBAAAAgBQAAgBABgFIAAgBQABgDAFgCQAFgCABgEQAAAAAAgBQABgCgDABQAAAAgBAAQgDABgDAAQAAAAgBAAQgGAAgCAAQgBAAAAAAQgGAAgBgCg");
	this.shape_6.setTransform(3.6,6.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AABA/IACgFQACgCAAgDIAAgKIAAgFQgCgJgDgDIgFgDIgIgBIgCAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBIgBgBIABgGIAAgBQABgDAFgCQAFgCABgEIAAgBQABAAAAAAQAAAAgBgBQAAAAAAAAQgBgBgBABIgBAAIgGABIgBAAIgIAAIgBAAQgGAAgBgCIgBAAQgBgEAFgDQAVgFAAgDIgMgGQgGgCgBgBQgBgEACgCIAGgDQAFAAAKgGIACgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAIgDgBIgIgBIgBAAIgEgCIAAgBIAAgCIgBgEQACgFAIgBQAGAAAIACIAGABQAWAFADAIIACAGQAFAhgSAkIgCAFQgNAcgDADIgBAAIgBgBg");
	this.shape_7.setTransform(3.6,6.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#444444").ss(0.5).p("AgigCQgBgEAFgDQAVgFAAgEQgLgFgBAAQgGgCgBgCQgBgDACgCQAEgCACgBQAHgBAJgEQABgBABgBQAAgDgCgBQgBgBgCAAQgEgCgEAAQgDgBgCgBIAAAAQgBgBAAgBQgBgCABgCQABgFAHgBQAGgBAIACQAEABADAAQAWAFADAJQABADAAACQAGAigSAkQgBACgBADQgNAbgDADQgCACAAgCQABgBABgDQABgCABgDQABgEAAgGQgBgDAAgDQgCgIgDgEQgBgBgDgBQgEgCgEAAQgBAAgBAAQgEAAgBgCQAAAAAAgBQAAgBABgFIAAgBQABgDAFgCQAEgCABgDQABgBAAgBQAAgCgCABQgBAAAAAAQgEABgDAAQAAAAgBAAQgGAAgCAAQgBAAAAAAQgGAAgBgCg");
	this.shape_8.setTransform(3.6,6.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AABA/IACgEIACgFIABgKIgBgGQgCgIgDgEIgEgCIgIgCIgCAAQgBAAgBAAQAAAAgBAAQgBgBAAAAQAAAAgBgBIAAgBIABgGIAAgBQABgDAFgCQAEgCABgDIABgCQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIgBAAIgHABIgBAAIgIAAIgBAAQgGAAgBgCIgBAAQgBgEAFgDQAVgFAAgEIgMgFQgGgCgBgCQgBgDACgCIAGgDQAHgBAJgEIACgCQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAAAgBgBIgDgBIgIgCIgFgCIAAAAIgBgCQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgFAHgBQAGgBAIACIAHABQAWAFADAJIABAFQAGAigSAkIgCAFQgNAbgDADIgBABIgBgBg");
	this.shape_9.setTransform(3.6,6.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#444444").ss(0.5).p("AghgCQgCgEAGgDQAVgFgBgEQgLgEgBAAQgGgDgBgCQAAgDACgCQAEgCACAAQAHgBAKgFQAAgBABgBQAAgDgCgBQAAgBgCAAQgDgCgFgBIgBAAQgCgBgCAAIgBAAQAAgBgBgBQgBgBAAgDQABgGAHgBQAGAAAIACQADAAAEABQAVAFAEAJQABACAAADQAHAhgSAlQgBACgCADQgMAbgDADQgCACAAgBIABgEQACgCAAgDQABgDAAgHQAAgCgBgEQgBgIgEgEQAAgCgDgBQgEgCgEAAQgBAAgBAAQgEAAgBgBQAAgBAAAAQgBgBACgGIAAAAQAAgDAGgDQAEgBABgEQAAAAAAgBQABgCgDAAQAAAAgBAAQgDABgDAAQgBAAAAAAQgGAAgDAAIgBAAQgFAAgCgCg");
	this.shape_10.setTransform(3.5,6.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AACBAIABgEQACgCAAgDIABgKIgBgGQgBgIgEgEIgDgDQgEgCgEAAIgCAAQgEAAgBgBIAAgBIABgHIAAAAQAAgDAGgDQAEgBABgEIAAgBQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAgBgBAAIgBAAIgGABIgBAAIgJAAIgBAAQgFAAgCgCIAAAAQgCgEAGgDQAVgFgBgEIgMgEQgGgDgBgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABgBIAGgCQAHgBAKgFIABgCQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAAAgBgBIgCgBIgIgDIgBAAIgEgBIgBAAIgBgCIgBgEQABgGAHgBQAGAAAIACIAHABQAVAFAEAJIABAFQAHAhgSAlIgDAFQgMAbgDADIgCACIAAgBg");
	this.shape_11.setTransform(3.5,6.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#444444").ss(0.5).p("AghgCQgCgEAGgDQAWgFgCgEQgMgEAAAAQgGgDAAgCQgBgDADgCQAEgBACgBQAIgBAJgEQAAgBAAgBQABgDgBgBQgBgCgBAAQgDgDgGgBQgDAAgCgBIgBABQgBgBAAAAQgCgBAAgDQABgHAHgBQAFgBAJADQADAAADABQAVAEAFAKQABACAAADQAHAhgSAlQgBACgCADQgMAagDAFQgCACAAgBQAAAAAAgEQACgCABgDQABgDAAgHQAAgCAAgDQgCgJgDgEQgBgCgCgBQgFgCgDAAQgBAAgBAAQgEAAgCgCQAAAAAAgBQAAgBABgFQAAAAAAgBQABgDAFgCQAEgCABgDQABgBAAAAQAAgCgCAAQgBAAAAAAQgEAAgDAAQAAAAgBAAQgGAAgDAAIgBAAQgFAAgCgBg");
	this.shape_12.setTransform(3.5,6.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AACBBIAAgEIADgFIABgKIAAgFQgCgJgDgEIgDgDQgFgCgDAAIgCAAQgEAAgCgCIAAgBIABgGIAAgBQABgDAFgCQAEgCABgDIABgBQAAgBAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAIgBAAIgHAAIgBAAIgJAAIgBAAQgFAAgCgBIAAgBQgCgEAGgDQAWgFgCgEIgMgEQgGgDAAgCQgBgBAAAAQABgBAAgBQAAAAAAgBQABAAABgBIAGgCQAIgBAJgEIAAgCQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIgCgCQgDgDgGgBIgFgBIgBABIgBgBQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQABgHAHgBQAFgBAJADIAGABQAVAEAFAKIABAFQAHAhgSAlIgDAFIgPAfIgCABIAAAAg");
	this.shape_13.setTransform(3.5,6.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#444444").ss(0.5).p("AghgBQgCgEAGgDQAWgGgCgEQgMgDgBAAQgFgEAAgCQAAgDACgBQAEgCADgBQAIgBAIgEQABgBAAgBQABgDgBgBQgBgBgBgBQgDgDgGgCIAAAAQgCAAgDAAQgBAAAAAAQgBABAAgBQgCgBgBgDQAAgHAHgBQAFgBAKACQACABAEABQAUAEAFAJQABADABADQAGAhgRAkQgBADgCACQgMAbgDAFQgBACgBAAQgBAAABgEQACgCABgDQABgDAAgGQAAgDAAgDQgBgIgEgFQgBgCgCgBQgEgDgDAAQgCAAgBAAQgEAAgBgBQgBgBAAAAQAAgBABgFQAAgBAAAAQABgDAFgDQAEgBACgDQAAgBAAgBQABgCgDAAQgBAAAAAAQgEAAgDAAQAAAAgBAAQgGAAgDAAQgBAAAAAAQgGAAgBgBg");
	this.shape_14.setTransform(3.5,6.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AACA+QACgCABgDQABgDAAgGIAAgGQgBgIgEgFQgBgCgCgBIgHgDIgDAAQgEAAgBgBIgBgBIABgGIAAgBQABgDAFgDQAEgBACgDIAAgCQAAgBAAgBQAAAAAAAAQAAAAgBAAQAAAAgBAAIgBAAIgHAAIgBAAIgJAAIgBAAQgGAAgBgBQgCgEAGgDQAWgGgCgEIgNgDQgFgEAAgCQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAIAHgDQAIgBAIgEIABgCQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIgCgCQgDgDgGgCIAAAAIgFAAIgBAAIgBAAQgBAAAAgBQgBAAAAAAQAAgBAAgBQgBAAAAgBQAAgHAHgBQAFgBAKACIAGACQAUAEAFAJIACAGQAGAhgRAkIgDAFQgMAbgDAFIgCACIAAAAIAAgEg");
	this.shape_15.setTransform(3.5,6.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#444444").ss(0.5).p("AghgCQgCgEAGgDQAXgEgDgGIgNgDQgGgFABgDQAAgBAEgCQANgCAJgEQABgFAAgCQgCgFgJgCQgCgBgDABQgCABgBAAQgCgBgBgDQAAgIAHgBQAFgBAPADQAZAFACAOQAIAkgVAnQgMAbgDAFQgDAHAAgIQADgCABgDQACgDgBgMQgCgNgFgEQgHgDgDAAQgFABgBgDQgBgBACgGQAAgDAGgCQAEgCABgEQABgDgEABIgIAAQgGAAgDAAQgHAAgBgCg");
	this.shape_16.setTransform(3.5,6.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AABA+IAEgFQACgDgBgMQgCgNgFgEQgHgDgDAAQgFABgBgDIABgHQAAgDAGgCQAEgCABgEQABgDgEABIgIAAIgJAAQgHAAgBgCQgCgEAGgDQAXgEgDgGIgNgDQgGgFABgDQAAgBAEgCQANgCAJgEIABgHQgCgFgJgCIgFAAIgDABQgCgBgBgDQAAgIAHgBQAFgBAPADQAZAFACAOQAIAkgVAnIgPAgIgCADQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgBg");
	this.shape_17.setTransform(3.5,6.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#444444").ss(0.5).p("AghgCQgCgEAGgDQAVgFgBgEQgLgEgBAAQgGgDgBgCQAAgDACgCQAEgCACAAQAHgBAKgFQAAgBABgBQAAgDgCgBQAAgBgCAAQgDgCgFgBIgBAAQgCgBgCAAIgBAAQAAgBgBgBQgBgBAAgDQABgGAHgBQAGAAAIACQADAAAEABQAVAFAEAJQABACAAADQAHAhgSAlQgBACgCADQgMAbgDADQgCACAAgBIABgEQACgCAAgDQABgDAAgHQAAgCgBgEQgBgIgEgEQAAgCgDgBQgEgCgEAAQgBAAgBAAQgEAAgBgBQAAgBAAAAQgBgBACgGIAAAAQAAgDAFgDQAFgBABgEQAAAAAAgBQABgCgDAAQAAAAgBAAQgDABgDAAQgBAAAAAAQgGAAgDAAIgBAAQgFAAgCgCg");
	this.shape_18.setTransform(3.5,6.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AACBAIABgEQACgCAAgDIABgKIgBgGQgBgIgEgEIgDgDQgEgCgEAAIgCAAQgEAAgBgBIAAgBIABgHIAAAAQAAgDAFgDQAFgBABgEIAAgBQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAgBgBAAIgBAAIgGABIgBAAIgJAAIgBAAQgFAAgCgCIAAAAQgCgEAGgDQAVgFgBgEIgMgEQgGgDgBgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABgBIAGgCQAHgBAKgFIABgCQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAAAgBgBIgCgBIgIgDIgBAAIgEgBIgBAAIgBgCIgBgEQABgGAHgBQAGAAAIACIAHABQAVAFAEAJIABAFQAHAhgSAlIgDAFQgMAbgDADIgCACIAAgBg");
	this.shape_19.setTransform(3.5,6.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#444444").ss(0.5).p("AgigCQgBgEAFgDQAVgFAAgEQgLgFgBAAQgGgCgBgCQgBgDACgCQAEgCACgBQAHgBAJgEQABgBABgBQAAgDgCgBQgBgBgCAAQgEgCgEAAQgDgBgCgBIAAAAQgBgBAAgBQgBgCABgCQABgFAHgBQAGgBAIACQAEABADAAQAWAFADAJQABADAAACQAGAigSAkQgBACgBADQgNAbgDADQgCACAAgCQABgBABgDQABgCABgDQABgEAAgGQgBgDAAgDQgCgIgDgEQgBgBgDgBQgEgCgEAAQgBAAgBAAQgEAAgBgCQAAAAAAgBQAAgBABgFIAAgBQABgDAEgCQAFgCABgDQABgBAAgBQAAgCgCABQgBAAAAAAQgEABgDAAQAAAAgBAAQgGAAgCAAQgBAAAAAAQgGAAgBgCg");
	this.shape_20.setTransform(3.6,6.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AABA/IACgEIACgFIABgKIgBgGQgCgIgDgEIgEgCIgIgCIgCAAQgBAAgBAAQAAAAgBAAQgBgBAAAAQAAAAgBgBIAAgBIABgGIAAgBQABgDAEgCQAFgCABgDIABgCQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIgBAAIgHABIgBAAIgIAAIgBAAQgGAAgBgCIgBAAQgBgEAFgDQAVgFAAgEIgMgFQgGgCgBgCQgBgDACgCIAGgDQAHgBAJgEIACgCQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAAAgBgBIgDgBIgIgCIgFgCIAAAAIgBgCQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgFAHgBQAGgBAIACIAHABQAWAFADAJIABAFQAGAigSAkIgCAFQgNAbgDADIgBABIgBgBg");
	this.shape_21.setTransform(3.6,6.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#444444").ss(0.5).p("AgigDQgBgEAFgDQAVgEAAgDQgLgGAAAAQgHgCgBgBQgCgEACgCQAEgCACgBQAFgBALgFQAAgBABAAQABgDgDgBQgCgBgCAAQgEAAgEgBIAAAAQgCAAgCgCIAAAAQAAgCAAgCQAAgBAAgCQADgFAHgBQAGAAAIACQAEAAADABQAWAFADAJQABACAAADQAGAhgTAlQgBACgBADQgNAbgEADQgBABAAgDQACgCAAgDQACgCAAgDQABgEgBgGQAAgDAAgCQgCgJgDgDQgCgCgDAAQgEgBgEAAQgBAAgBAAQgEAAgBgCQAAgBAAAAQAAgCABgFIAAAAQABgEAEgCQAGgCABgDQAAgBAAAAQABgCgDAAQgBAAAAAAQgEABgCAAQAAAAgBAAQgGABgCAAIgBAAQgFAAgCgCg");
	this.shape_22.setTransform(3.6,6.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AABA+QAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBIACgFIAAgKIAAgFQgCgJgDgDIgFgCIgIgBIgCAAQgBAAgBgBQgBAAgBAAQAAAAgBgBQAAAAAAAAIAAgBIABgHIAAAAQABgEAEgCQAGgCABgDIAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAIgBAAIgGABIgBAAIgIABIgBAAQgFAAgCgCIgBgBQgBgEAFgDQAVgEAAgDIgLgGQgHgCgBgBQgCgEACgCIAGgDQAFgBALgFIABgBQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAIgEgBIgIgBIAAAAIgEgCIAAAAIAAgEIAAgDQADgFAHgBIAOACIAHABQAWAFADAJIABAFQAGAhgTAlIgCAFQgNAbgEADIgBAAIAAgCg");
	this.shape_23.setTransform(3.6,6.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#444444").ss(0.5).p("AgigDQgBgEAFgDQAUgEABgDQgLgHAAAAQgHgBgCgBQgBgEACgCQADgDACAAQAEgBAMgGQABAAAAgBQABgCgEgBQgBgBgCAAQgFAAgDAAIAAAAQgCAAgCgDIAAAAQAAgCAAgCQABgCAAgCQADgEAIAAQAGgBAIACQADABADABQAXAFACAIQABADAAADQAGAhgTAkQgBACgBADQgOAbgDACQgBACAAgEQACgCABgDQABgCABgEQAAgDgBgGQAAgDgBgDQgBgIgEgDQgCgBgDgBQgEgBgEAAQgBAAgBAAQgEAAAAgCQAAAAAAgBQAAgBABgGQABgDAEgCQAFgCACgEQAAAAAAAAQABgDgDABQgBAAAAAAQgEABgCAAQgBAAAAAAQgGABgCAAIgBAAQgFAAgCgCg");
	this.shape_24.setTransform(3.6,6.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AABA9IADgFQABgCABgEIgBgJIgBgGQgBgIgEgDIgFgCIgIgBIgCAAQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIAAgBIABgHQABgDAEgCQAFgCACgEIAAAAQAAAAAAgBQAAgBAAAAQgBgBAAAAQgBAAAAABIgBAAIgGABIgBAAIgIABIgBAAQgFAAgCgCIgBgBQgBgEAFgDQAUgEABgDIgLgHQgHgBgCgBQgBgEACgCQADgDACAAQAEgBAMgGIABgBQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBAAgBAAIgDgBIgIAAIAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBIAAAAIAAgEIABgEQADgEAIAAQAGgBAIACIAGACQAXAFACAIIABAGQAGAhgTAkIgCAFQgOAbgDACIgBABQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAg");
	this.shape_25.setTransform(3.6,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,9.2,14.8);


(lib.lefthand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(0.5).p("Ag4AxIAigEQANgBAGABIAHADQAGAAABgFQgFgBgCgFQgBgDAAgHQAAgPACgHQADgNAMgLQALgMAQgEQAFgCAAgDQAAgDgIAAQgHAAgFgCQgHgDgCAAQgFABgGAIQgKANgJATQgBgHAFgKQAFgLADgGQACgEgDgBQgCABgBAAQgBACgCAAQgVADgXAA");
	this.shape.setTransform(2.8,6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#444444").ss(0.5).p("AABgDQgCAIABAKQABALAJAEQAHADABABQACACgBACQgBADgCAAIgCgCQgHgEgMABQgPACgGgDQgDgcAOgTQAHgLAKgIQAOgKALACQgBAFgNAKQgIAKgEALg");
	this.shape_1.setTransform(5.8,6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#444444").ss(0.5).p("AADgLIAGACQAFAEgHAIQgHALgEgCQgFgCgBgKQgBgFAGgEQAFgEADACg");
	this.shape_2.setTransform(10.2,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEAMQgFgCgBgKQgBgFAGgEQAFgEADACIAGACQAFAEgHAIQgFAJgDAAIgDAAg");
	this.shape_3.setTransform(10.2,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#444444").ss(0.5).p("AgEgbIgPAbQgHAMACAUIAOANQAPAIAMgbQAPgfgLgcQgLgcgOAig");
	this.shape_4.setTransform(9.5,5.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKAtIgOgNQgCgUAHgMIAPgbQAOgiALAcQALAcgPAfQgKAVgKAAQgDAAgEgCg");
	this.shape_5.setTransform(9.5,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-1.9,17.1,14.5);


(lib.handle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").p("AgRAAQAAAHAFAFQAFAGAHAAQAHAAAFgGQAGgFAAgHQAAgHgGgFQgFgFgHAAQgHAAgFAFQgFAFAAAHg");
	this.shape.setTransform(1.9,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLANQgGgGAAgHQAAgGAGgFQAFgGAGAAQAHAAAGAGQAFAFAAAGQAAAHgFAGQgGAFgHAAQgGAAgFgFg");
	this.shape_1.setTransform(1.9,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-3.2,5.7,7.9);


(lib.door_close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(1,1,1).p("Ak6gyIBYCUIHpgrIA0iYg");
	this.shape.setTransform(31.5,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("Ak5gyIJ0guIg0CXInpAqg");
	this.shape_1.setTransform(31.5,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,65,21.6);


(lib.ukulele = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line04
	this.instance = new lib.line04();
	this.instance.setTransform(35.4,38.9,1,1,0,0,0,5.9,28.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:35.1},3).to({x:35.4},4).to({x:34.9},3).to({x:35.4},2).wait(1));

	// line03
	this.instance_1 = new lib.line03();
	this.instance_1.setTransform(34.1,36.9,1,1,0,0,0,6.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:34.9},3).to({x:34.1},4).to({x:33.6},3).to({x:34.1},2).wait(1));

	// line02
	this.instance_2 = new lib.line02();
	this.instance_2.setTransform(32.7,34.4,1,1,0,0,0,6.9,30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:33.4},3).to({x:32.7},4).to({x:32.2},3).to({x:32.7},2).wait(1));

	// line01
	this.instance_3 = new lib.line_01();
	this.instance_3.setTransform(31.2,35.6,1,1,0,0,0,7.6,28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:30.6},3).to({x:31.2},4).to({x:31.7},3).to({x:31.2},2).wait(1));

	// ukulele_body
	this.instance_4 = new lib.ukulele_body();
	this.instance_4.setTransform(21.4,42.6,1,1,0,0,0,21.4,42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.8,85.2);


(lib.right_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.righthand_01();
	this.instance.setTransform(8.2,7,1,1,0,0,0,8.2,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17));

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(0.5).p("AhyA3IBaAAIAnAGQAsAEAQgKQAFgDAQACQAQACAFgDQAGgDgDgFQgCgEgDAAQgEABgFABQgJACgQgEQgHgCACgEQACgEADgBQACAAATAAQATgCADgHQADgHgNABQgSADgIAAQgKAAAAgCIADgCQAtgEgCgKQgCgHgNAEQgTAEgLgBQgGAAAHgDQAFgBAMgEQAHgDAHgOQAHgOgJgCQgJgDgDAJQgEAMgGACQgDAAgMADQgMACgRAFQgTAHgCgJQgCgIASgPQALgJgEgLQgFgLgQAKQglAagUATIhaAJg");
	this.shape.setTransform(23,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPA9IgngGIhaAAIgJg6IBagJQAUgTAlgaQAQgKAFALQAEALgLAJQgSAPACAIQACAJATgHIAdgHIAPgDQAGgCAEgMQADgJAJADQAJACgHAOQgHAOgHADIgRAFQgHADAGAAQALABATgEQANgEACAHQACAKgtAEIgDACQAAACAKAAQAIAAASgDQANgBgDAHQgDAHgTACIgVAAQgDABgCAEQgCAEAHACQAQAEAJgCIAJgCQADAAACAEQADAFgGADQgFADgQgCQgQgCgFADQgMAIgaAAIgWgCg");
	this.shape_1.setTransform(23,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#444444").ss(0.5).p("Ah6gGIBagJQAKgKARgLQANgKASgMQAVACABACQABAIgIAHQgHAGgFAEQgDADgCADQgCAFACADQACAFAKgCQAEAAAFgCQAMgDAJgCQAEgBAEgCQAEgBADAAQAGgBACgBQAEgBAEgGQABgCACgEQABgDABgBQAEgDAGABQAGACgCAGQAAAEgDAFQgIANgHACQgGACgEACQgEABgDABQgFADAFABQABAAACgBQAGABAJgCQAGgBAGgCQAGgCAEABQADABABAEQAAADgGADQgLAFgZADQgBAAAAAAQgBABgBABQAAABADABQACAAAFAAQAAAAABAAQAGAAAKgCQAEAAAFgBQAAAAABAAQADAAABABQAGABgDAEQgDAGgOACQgCABgDAAQgNAAgEAAQgDAAAAABQgCAAgBABQgBABgBACQAAADABABQABABADABQAMADAJgBQADAAACgBQACAAACgBQACgBACAAQACAAABACQABABABACQABADgBACQgBACgDABQgBABgDAAQgEABgIgBQgCAAgDAAQgKgBgFABQgEABgCABQgPAJgpgEQgCAAgCAAIgjgFIgEgBIhWAAIgDAAIgIg3g");
	this.shape_2.setTransform(22.9,5.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AASA6IgEAAIgjgFIgEgBIhWAAIgDAAIgIg3IgBgDIBagJQAKgKARgLIAfgWQAVACABACQABAIgIAHIgMAKIgFAGQgCAFACADQACAFAKgCIAJgCIAVgFIAIgDIAHgBIAIgCQAEgBAEgGIADgGIACgEQAEgDAGABQAGACgCAGQAAAEgDAFQgIANgHACIgKAEIgHACQgFADAFABIADgBQAGABAJgCIAMgDQAGgCAEABQADABABAEQAAADgGADQgLAFgZADIgBAAIgCACQAAABAAAAQAAAAABAAQAAAAABAAQAAABABAAIAHAAIABAAIAQgCIAJgBIABAAIAEABQAGABgDAEQgDAGgOACIgFABIgRAAIgDABIgDABIgCADQAAABAAAAQAAABAAABQAAAAAAAAQABABAAAAIAEACQAMADAJgBIAFgBIAEgBIAEgBQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABIACADQABADgBACIgEADIgEABQgEABgIgBIgFAAQgKgBgFABIgGACQgLAGgYAAIgVgBg");
	this.shape_3.setTransform(23,5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#444444").ss(0.5).p("Ah6gGIBbgKQAJgJASgLQAOgKARgLQAVABABACQAAAJgIAHQgGAFgFAEQgEAEgCADQgBAEACADQADAFAKgCQAEgBAFgCQALgDAKgCQADgBAEgBQAEgBADgBQAGgBADgBQAEgCADgFQACgCACgDQABgDACgCQAEgDAFACQAGADgCAGQgBADgDAFQgJAMgGADQgGABgEACQgFACgCABQgEACAFABQABAAACAAQAFAAAKgCQAGgCAGgBQAGgCADABQADACAAAEQAAADgGACQgLAGgZACQAAABgBAAQgBABAAABQAAABADAAQADABAEgBQABAAAAAAQAHgBAJgBQAFgBAEAAIABAAQADAAABABQAEABgCAFQgDAGgOACQgCAAgDAAQgNABgEAAQgCAAgBAAQgBABgBABQgCACAAABQAAADABABQABABADAAQAMADAJgBQACgBACAAQADgBACgBQACAAACAAQABAAACACQABABAAACQABADgCACQgBACgCABQgCABgCABQgFABgHgBQgDAAgCAAQgLgBgFABQgDAAgCABQgPAJgpgDQgCAAgCAAIgjgFIgEgBIhWAAIgDgBIgIg3g");
	this.shape_4.setTransform(22.9,5.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AASA6IgEAAIgjgFIgEgBIhWAAIgDgBIgIg3IgBgCIBbgKQAJgJASgLIAfgVQAVABABACQAAAJgIAHIgLAJQgFAEgBADQgBAEACADQACAFALgCIAJgDIAUgFIAIgCIAHgCIAJgCQAEgCADgFIAEgFIADgFQAEgDAFACQAFADgBAGQgBADgEAFQgIAMgHADIgKADIgGADQgEACAFABIADAAQAFAAAKgCIAMgDQAGgCACABQAEACAAAEQAAADgGACQgLAGgZACIgBABIgCACQAAAAABAAQAAABAAAAQABAAAAAAQABAAABAAIAHAAIABAAIAPgCIAKgBIABAAQAAAAABAAQABAAAAAAQABAAAAAAQAAABAAAAQAFABgDAFQgDAGgOACIgEAAIgRABIgDAAIgDACIgCADIABAEQABAAAAAAQABAAAAABQABAAABAAQAAAAABAAQALADAJgBIAFgBIAFgCIADAAIAEACIABADQABADgCACIgDADIgEACQgFABgHgBIgGAAQgKgBgFABIgFABQgLAGgYAAIgVAAg");
	this.shape_5.setTransform(23,5.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#444444").ss(0.5).p("Ah6gHIBagKQAJgIATgLQAPgKAQgLQAVABABACQAAAIgIAHQgHAGgFAEQgEAEgBADQgBAEADADQADADAJgCQAFgBAEgBQAMgDAJgCQADgBAFgCQADgBAEAAQAGgCACgBQAFgBADgFQACgCACgDQACgDACgCQAEgCAEACQAFADgBAFQgBADgEAFQgJALgHADQgFACgFACQgEACgCABQgDACAFABQABAAABgBQAGABAJgDQAHgCAFgBQAHgCACACQADACAAAEQgBAEgGABQgLAGgZACIAAABQgBABAAABQAAABADAAQADABAFgBQAAAAABAAQAHgBAIgCQAFAAAEgBQABAAAAAAQADAAABACQADACgCAEQgEAGgNACQgCAAgDAAQgNABgEAAQgCAAgBABQgBAAgBABQgCACAAACQAAACACABQABABADAAQALADAKgCQACgBACAAQADgBACgBQACAAABAAQACABABABQABACABACQAAADgCACQgBABgCACQgCABgCAAQgFACgHgBQgDAAgCAAQgLgBgFABQgDABgCABQgQAIgogDQgCAAgCgBIgngFIhWAAIgDgCIgIg2g");
	this.shape_6.setTransform(22.9,5.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AASA5IgFgBIgngFIhWAAIgCgCIgIg2IgBgCIBbgKQAIgIATgLIAggVQAUABABACQABAIgJAHIgMAKQgEAEgBADQgBAEADADQADADAKgCIAJgCIAUgFIAIgDIAHgBIAJgDQAEgBAEgFIADgFIAEgFQAEgCAEACQAGADgCAFQAAADgFAFQgIALgIADIgKAEIgGADQgDACAFABIACgBQAGABAKgDIALgDQAHgCACACQADACAAAEQAAAEgHABQgLAGgYACIgBABIgBACQAAAAAAABQABAAAAAAQABAAAAAAQABAAABAAIAHAAIABAAIAQgDIAJgBIABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQAEACgDAEQgEAGgNACIgEAAIgRABQgBAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAIgCAEQAAAAABABQAAAAAAABQAAAAAAAAQABABAAAAIAFABQALADAJgCIAFgBIAEgCIADAAIAEACIABAEQAAADgBACIgEADIgDABQgFACgIgBIgFAAQgLgBgFABIgEACQgMAGgXAAIgVgBg");
	this.shape_7.setTransform(23,5.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#444444").ss(0.5).p("Ah6gIIBagKQAJgIATgLQARgKAPgJQAVAAAAACQAAAIgIAHQgGAFgGAFQgFAEAAADQgBAFAEABQADADAKgCQAEgBAFgBQALgEAJgCQADAAAFgCQADgBAEgBQAGgBADgBQAEgCADgEQADgCACgDQACgDACgBQAEgDAEACQAFAEgCAFQgBADgEAEQgJALgIADQgFACgFACQgEACgCABQgCACAFAAQABAAABAAQAGAAAKgDQAGgBAFgCQAHgBACACQACACAAAEQgBADgGACQgMAGgYACQAAABAAAAQgBACAAABQABAAADABQADAAAFgBQABAAAAAAQAHgCAIgBQAGgBADAAQABAAAAAAQADAAAAACQADACgDAEQgEAGgNACQgCAAgCAAQgOABgDAAQgCAAgBABQgBAAgBACQgCACABACQAAABACABQABABADABQALACAJgDQACAAACgBQADAAACgBQACgBACABQABAAABACQABACABACQAAACgCACQgCACgCABQgBABgCABQgFACgIgBQgCAAgDAAQgLgBgEABQgDABgCABQgRAIgngDQgCAAgCgBIgogFIhVAAIgDgCIgIg3g");
	this.shape_8.setTransform(22.9,5.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARA4IgEgBIgogFIhVAAIgDgCIgIg3IAAgBIBagKQAJgIATgLIAggTQAVAAAAACQAAAIgIAHIgMAKQgFAEAAADQgBAFAEABQADADAKgCIAJgCIAUgGIAIgCIAHgCIAJgCQAEgCADgEIAFgFIAEgEQAEgDAEACQAFAEgCAFQgBADgEAEQgJALgIADIgKAEIgGADQgCACAFAAIACAAQAGAAAKgDIALgDQAHgBACACQACACAAAEQgBADgGACQgMAGgYACIAAABIgBADIAEABIAIgBIABAAIAPgDIAJgBIABAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQADACgDAEQgEAGgNACIgEAAIgRABIgDABIgCACQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABAAIAEACQALACAJgDIAEgBIAFgBIAEAAIACACIACAEQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgEADIgDACQgFACgIgBIgFAAQgLgBgEABIgFACQgMAGgWAAIgWgBg");
	this.shape_9.setTransform(23,5.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#444444").ss(0.5).p("Ah6gJIBbgJQAIgIAUgLQARgJAPgKQAVAAAAACQAAAJgIAHQgGAFgHAEQgFAEAAADQAAAFAEABQAEADAJgDQAFgBAEgBQALgDAJgCQADgBAFgCQAEgBADgBQAGgBADgCQAFgBADgEQADgCACgDQACgCACgCQAEgCAEACQAFAFgCAEQgBACgFAFQgKAKgHADQgGACgFACQgEACgCABQAAACAFABQABAAABgBQAFAAAKgDQAHgCAFgBQAGgBACACQACACgBAEQgBAEgGACQgMAGgXACQgBAAAAABQgBABABABQABABAEAAQACAAAGgBQAAAAABAAQAHgCAHgCQAGAAAEAAIAAAAQADAAAAACQABADgCADQgFAHgMACQgCAAgCAAQgOAAgDAAQgCABgBABQgBAAgBABQgCADABACQABABACABQABABADAAQAKACAKgEQACAAACAAQADgBACgBQACAAABABQACAAABACQABACAAACQAAACgDACQgBACgCABQgCABgCABQgFADgHgBQgDAAgCAAQgMgCgEACQgCABgDABQgQAIgngEQgCAAgCAAIgogGIhVAAIgCgCIgIg3g");
	this.shape_10.setTransform(22.9,5.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAQA3IgEAAIgngGIhWAAIgCgCIgIg3IAAgBIBagJQAJgIATgLQASgJAOgKQAWAAAAACQAAAJgIAHIgOAJQgFAEAAADQAAAFAFABQADADAKgDIAJgCIAUgFIAIgDIAGgCIAKgDQAEgBAEgEIAFgFIAEgEQAEgCADACQAFAFgCAEQAAACgFAFQgKAKgIADIgKAEIgGADQgBACAFABIACgBIAQgDIALgDQAHgBACACQACACgCAEQgBAEgGACQgMAGgXACIgBABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAEABIAIgBIABAAIAPgEIAJAAIABAAQABAAAAAAQABABAAAAQAAAAAAABQABAAgBAAQACADgDADQgEAHgNACIgDAAIgSAAIgDACIgCABQAAABAAABQAAAAAAABQgBAAABABQAAAAAAABIACACIAEABQALACAJgEIAFAAIAEgCQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIACACIABAEQAAACgCACIgDADIgEACQgFADgIgBIgFAAQgMgCgDACIgFACQgMAGgWAAIgWgCg");
	this.shape_11.setTransform(23,5.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#444444").ss(0.5).p("Ah6gJIBbgKQAIgHAUgKQATgKAOgJQAVAAAAACQgBAIgIAHQgGAFgIAFQgFAEABADQAAAFAFABQAEABAJgDQAFgBAEgBQALgDAJgCQADgBAFgCQAEgBADAAQAGgCADgCQAFgCADgDQADgBADgDQACgCADgCQAEgDADADQAEAFgCAEQgBACgFAFQgKAJgIADQgFACgGADQgEACgBAAQAAADAFAAQABAAABgBQAFAAAKgEQAHgBAFgBQAHgBABACQACADgCADQgCAEgGADQgMAGgWABQgBABAAAAQgBACACABQABABAEAAQACAAAGgCQAAAAABAAQAHgDAHgBQAGAAAEAAIAAAAQADAAgBADQABADgDADQgFAHgMABQgCAAgBAAQgPABgCAAQgDAAAAABQgCABgBABQgBADABACQABABACABQACABACAAQAKABAKgEQACAAACgBQADAAACgBQACAAABABQACAAABACQABACAAACQgBADgCABQgCACgBACQgCABgCAAQgFAEgIgBQgCAAgDgBQgMgBgDABQgDACgCABQgRAHgngDQgCgBgCAAIgngFIhWAAIgBgDIgIg2g");
	this.shape_12.setTransform(22.9,5.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAQA3IgEgBIgogFIhVAAIgCgDIgIg2IAAgBIBagKQAIgHAVgKQASgKAOgJQAVAAAAACQAAAIgIAHIgOAKQgFAEAAADQAAAFAGABQAEABAJgDIAJgCIAUgFIAIgDIAGgBIAKgEIAIgFIAGgEIAEgEQAEgDADADQAFAFgCAEIgHAHQgKAJgIADIgKAFIgGACQAAADAFAAIADgBIAPgEIALgCQAHgBABACQACADgCADQgBAEgGADQgNAGgWABIgBABQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAABIAFABIAIgCIABAAQAHgDAIgBIAJAAIABAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAADgCADQgFAHgMABIgEAAIgRABIgDABIgCACQgBABAAABQAAAAAAABQAAAAAAABQAAAAABABIADACIAEABQAKABAKgEIAEgBIAEgBIAEABIACACIABAEQAAADgDABIgDAEIgEABQgFAEgHgBIgFgBQgNgBgDABIgFADQgLAFgWAAIgWgBg");
	this.shape_13.setTransform(23,5.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#444444").ss(0.5).p("Ah7gKIBagJQAIgHAVgKQAUgKANgIQAVgBAAACQgBAIgIAHQgGAFgIAFQgGAEABADQABAFAGABQAEAAAJgCQAFgCAEgBQALgDAJgCQACgBAGgBQADgBADgBQAGgCAEgCQAFgCADgCQADgCADgDQADgCACgCQAEgCADADQAEAGgCAEQgBABgGAFQgLAIgIADQgFACgFADQgEACgCABQACACAFAAQABAAABAAQAEgBALgEQAHgCAEAAQAHgCABADQABADgCAEQgCADgGAEQgMAFgWACQgBABAAAAQAAACACABQABAAAEAAQACAAAGgCQABAAAAAAQAIgDAGgBQAHgBADABIAAAAQADAAgBADQgBADgCAEQgGAHgLABQgCAAgBAAQgPAAgCAAQgCABgBABQgBABgBABQgCADACACQABABACABQACAAACAAQAKABAKgEQACgBACAAQADgBACgBQACAAABABQABABABACQABACAAACQgBADgDABQgBACgCACQgCABgBABQgGADgHgBQgDAAgCAAQgNgBgDABQgCABgCABQgRAIgngEQgCAAgCgBIgjgFIhaAAIgBgDIgIg2g");
	this.shape_14.setTransform(23,5.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAPA2IgEgBIgjgFIhaAAIgBgDIgIg2IAAgBIBagJQAIgHAVgKQAUgKANgIQAVgBAAACQgBAIgIAHIgOAKQgGAEABADQABAFAGABQAEAAAJgCIAJgDIAUgFIAIgCIAGgCIAKgEIAIgEIAGgFIAFgEQAEgCADADQAEAGgCAEQgBABgGAFQgLAIgIADIgKAFIgGADQACACAFAAIACAAIAPgFIALgCQAHgCABADQABADgCAEQgCADgGAEQgMAFgWACIgBABQAAABAAAAQAAAAAAABQAAAAABAAQAAAAABABIAFAAIAIgCIABAAIAOgEIAKAAIAAAAQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQgBADgCAEQgGAHgLABIgDAAIgRAAIgDACIgCACQgBABAAABQAAAAAAABQAAAAAAABQAAAAABABIADACIAEAAQAKABAKgEIAEgBIAFgCIADABIACADIABAEQgBADgDABIgDAEIgDACQgGADgHgBIgFAAQgNgBgDABIgEACQgMAFgWAAIgWgBg");
	this.shape_15.setTransform(23,5.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#444444").ss(0.5).p("Ah7gIIBagKQAHgGAXgKQAYgMANgIQARgGgBAKQgBAIgIAHQgDACgMAIQgFAEABADQACAIATgGQARgFAMgDQACAAAMgEQAMgFAGgDQAGgDAGgFQAEgCACADQAEAGgCAEQgBABgIAGQgJAGgJADQgFACgFADQgGAEgBAAQAFACAGgBQAEgBALgEQASgGABAFQABAHgLAGQgNAHgVABQgDAFAKAAQACAAAHgDQAIgDAGgBQAIgBACABQADAAgCADQgGAOgOABQgTABgCAAQgDAAgCAEQgCAFAHABQAKADANgHIAJgCQADAAACAEQACAFgFADQgEAEgDACQgFAEgHgBQgSgCgDACQgQAKgsgEIgngGIhaAAg");
	this.shape_16.setTransform(23,5.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAOA4IgngGIhaAAIgJg6IBbgKQAHgGAWgKQAZgMAMgIQARgGAAAKQgBAIgIAHIgPAKQgGAEABADQACAIAUgGIAcgIIAPgEIASgIQAGgDAGgFQAEgCACADQAEAGgCAEIgJAHQgKAGgIADQgFACgGADIgGAEQAEACAGgBIAPgFQASgGABAFQACAHgMAGQgNAHgVABQgDAFAKAAIAKgDQAHgDAHgBIAKAAQABAAAAAAQAAABAAAAQABAAgBABQAAABAAAAQgGAOgPABIgUABQgDAAgCAEQgDAFAHABQALADANgHIAIgCQAEAAACAEQACAFgGADIgGAGQgGAEgHgBQgSgCgDACQgLAHgaAAIgXgBg");
	this.shape_17.setTransform(23.1,5.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#444444").ss(0.5).p("Ah7gKIBagJQAIgHAVgKQAUgKANgIQAVgBAAACQgBAIgIAHQgGAFgIAFQgGAEABADQABAFAGABQAEAAAJgCQAFgCAEgBQALgDAJgCQACgBAGgBQADgBADgBQAGgCAEgCQAFgCADgCQADgCADgDQADgCACgCQAEgCACADQAFAGgCAEQgBABgGAFQgKAIgJADQgFACgFADQgEACgCABQACACAFAAQABAAABAAQAEgBALgEQAHgCAEAAQAHgCABADQABADgCAEQgCADgGAEQgMAFgWACQgBABAAAAQAAACACABQABAAAEAAQACAAAGgCQABAAAAAAQAIgDAGgBQAHgBADABIAAAAQADAAgBADQgBADgCAEQgGAHgLABQgCAAgBAAQgPAAgCAAQgCABgBABQgBABgBABQgCADACACQABABACABQACAAACAAQAKABAKgEQACgBACAAQADgBACgBQACAAABABQABABABACQABACAAACQgBADgDABQgBACgCACQgCABgBABQgGADgHgBQgDAAgCAAQgNgBgDABQgCABgCABQgRAIgngEQgCAAgCgBIgjgFIhaAAIgBgDIgIg2g");
	this.shape_18.setTransform(23,5.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAPA2IgEgBIgjgFIhaAAIgBgDIgIg2IAAgBIBagJQAIgHAVgKQAUgKANgIQAVgBAAACQgBAIgIAHIgOAKQgGAEABADQABAFAGABQAEAAAJgCIAJgDIAUgFIAIgCIAGgCIAKgEIAIgEIAGgFIAFgEQAEgCACADQAFAGgCAEQgBABgGAFQgKAIgJADIgKAFIgGADQACACAFAAIACAAIAPgFIALgCQAHgCABADQABADgCAEQgCADgGAEQgMAFgWACIgBABQAAABAAAAQAAAAAAABQAAAAABAAQAAAAABABIAFAAIAIgCIABAAIAOgEIAKAAIAAAAQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQgBADgCAEQgGAHgLABIgDAAIgRAAIgDACIgCACQgBABAAABQAAAAAAABQAAAAAAABQAAAAABABIADACIAEAAQAKABAKgEIAEgBIAFgCIADABIACADIABAEQgBADgDABIgDAEIgDACQgGADgHgBIgFAAQgNgBgDABIgEACQgMAFgWAAIgWgBg");
	this.shape_19.setTransform(23,5.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#444444").ss(0.5).p("Ah6gJIBbgKQAIgHAUgKQATgKAOgJQAVAAAAACQgBAIgIAHQgGAFgIAFQgFAEABADQAAAFAFABQAEABAJgDQAFgBAEgBQALgDAJgCQADgBAFgCQAEgBADAAQAGgCADgCQAFgCADgDQADgBADgDQACgCADgCQADgCADACQAFAFgCAEQgBACgFAFQgKAJgIADQgFACgGADQgEACgBAAQAAADAFAAQABAAABgBQAFAAAKgEQAHgBAFgBQAHgBABACQACADgCADQgCAEgGADQgMAGgWABQgBABAAAAQgBACACABQABABAEAAQACAAAGgCQAAAAABAAQAHgDAHgBQAGAAAEAAIAAAAQADAAgBADQABADgDADQgFAHgMABQgCAAgBAAQgPABgCAAQgDAAAAABQgCABgBABQgBADABACQABABACABQACABACAAQAKABAKgEQACAAACgBQADAAACgBQACAAABABQACAAABACQABACAAACQgBADgCABQgCACgBACQgCABgCAAQgFAEgIgBQgCAAgDgBQgMgBgDABQgDACgCABQgRAHgngDQgCgBgCAAIgngFIhWAAIgBgDIgIg2g");
	this.shape_20.setTransform(22.9,5.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAQA3IgEgBIgogFIhVAAIgCgDIgIg2IAAgBIBagKQAIgHAVgKQASgKAOgJQAVAAAAACQAAAIgIAHIgOAKQgFAEAAADQAAAFAGABQAEABAJgDIAJgCIAUgFIAIgDIAGgBIAKgEIAIgFIAGgEIAEgEQAEgCACACQAGAFgCAEIgHAHQgKAJgHADIgLAFIgGACQAAADAFAAIADgBIAPgEIALgCQAHgBABACQACADgCADQgBAEgGADQgNAGgWABIgBABQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAABIAFABIAIgCIABAAQAHgDAIgBIAJAAIABAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAADgCADQgFAHgMABIgEAAIgRABIgDABIgCACQgBABAAABQAAAAAAABQAAAAAAABQAAAAABABIADACIAEABQAKABAKgEIAEgBIAEgBIAEABIACACIABAEQAAADgDABIgDAEIgEABQgFAEgHgBIgFgBQgNgBgDABIgFADQgLAFgWAAIgWgBg");
	this.shape_21.setTransform(23,5.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#444444").ss(0.5).p("Ah6gJIBbgJQAIgIAUgLQARgJAPgKQAVAAAAACQAAAJgIAHQgGAFgHAEQgFAEAAADQAAAFAEABQAEADAJgDQAFgBAEgBQALgDAJgCQADgBAFgCQAEgBADgBQAGgBADgCQAFgBADgEQADgCACgDQACgCACgCQAEgCADACQAGAFgCAEQgBACgFAFQgJAKgIADQgGACgFACQgEACgCABQAAACAFABQABAAABgBQAFAAAKgDQAHgCAFgBQAGgBACACQACACgBAEQgBAEgGACQgMAGgXACQgBAAAAABQgBABABABQABABAEAAQACAAAGgBQAAAAABAAQAHgCAHgCQAGAAAEAAIAAAAQADAAAAACQABADgCADQgFAHgMACQgCAAgCAAQgOAAgDAAQgCABgBABQgBAAgBABQgCADABACQABABACABQABABADAAQAKACAKgEQACAAACAAQADgBACgBQACAAABABQACAAABACQABACAAACQAAACgDACQgBACgCABQgCABgCABQgFADgHgBQgDAAgCAAQgMgCgEACQgCABgDABQgQAIgngEQgCAAgCAAIgogGIhVAAIgCgCIgIg3g");
	this.shape_22.setTransform(22.9,5.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAQA3IgEAAIgngGIhWAAIgCgCIgIg3IAAgBIBagJQAJgIATgLQASgJAOgKQAWAAAAACQAAAJgIAHIgOAJQgFAEAAADQAAAFAFABQADADAKgDIAJgCIAUgFIAIgDIAGgCIAKgDQAEgBAEgEIAFgFIAEgEQAEgCACACQAGAFgCAEQAAACgFAFQgKAKgHADIgLAEIgGADQgBACAFABIACgBIAQgDIALgDQAHgBACACQACACgCAEQgBAEgGACQgMAGgXACIgBABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAEABIAIgBIABAAIAPgEIAJAAIABAAQABAAAAAAQABABAAAAQAAAAAAABQABAAgBAAQACADgDADQgEAHgNACIgDAAIgSAAIgDACIgCABQAAABAAABQAAAAAAABQgBAAABABQAAAAAAABIACACIAEABQALACAJgEIAFAAIAEgCQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIACACIABAEQAAACgCACIgDADIgEACQgFADgIgBIgFAAQgMgCgDACIgFACQgMAGgWAAIgWgCg");
	this.shape_23.setTransform(23,5.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#444444").ss(0.5).p("Ah6gIIBagKQAJgIATgLQARgKAPgJQAVAAAAACQAAAIgIAHQgGAFgGAFQgFAEAAADQgBAFAEABQADADAKgCQAEgBAFgBQALgEAJgCQADAAAFgCQADgBAEgBQAGgBADgBQAEgCADgEQADgCACgDQACgDACgBQADgDADACQAHAEgCAFQgBADgEAEQgJALgHADQgGACgFACQgEACgCABQgCACAFAAQABAAABAAQAGAAAKgDQAGgBAFgCQAHgBACACQACACAAAEQgBADgGACQgMAGgYACQAAABAAAAQgBACAAABQABAAADABQADAAAFgBQABAAAAAAQAHgCAIgBQAGgBADAAQABAAAAAAQADAAAAACQADACgDAEQgEAGgNACQgCAAgCAAQgOABgDAAQgCAAgBABQgBAAgBACQgCACABACQAAABACABQABABADABQALACAJgDQACAAACgBQADAAACgBQACgBACABQABAAABACQABACABACQAAACgCACQgCACgCABQgBABgCABQgFACgIgBQgCAAgDAAQgLgBgEABQgDABgCABQgRAIgngDQgCAAgCgBIgogFIhVAAIgDgCIgIg3g");
	this.shape_24.setTransform(22.9,5.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AARA4IgEgBIgogFIhVAAIgDgCIgIg3IAAgBIBagKQAJgIATgLIAggTQAVAAAAACQAAAIgIAHIgMAKQgFAEAAADQgBAFAEABQADADAKgCIAJgCIAUgGIAIgCIAHgCIAJgCQAEgCADgEIAFgFIAEgEQADgDADACQAHAEgCAFQgBADgEAEQgJALgHADIgLAEIgGADQgCACAFAAIACAAQAGAAAKgDIALgDQAHgBACACQACACAAAEQgBADgGACQgMAGgYACIAAABIgBADIAEABIAIgBIABAAIAPgDIAJgBIABAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQADACgDAEQgEAGgNACIgEAAIgRABIgDABIgCACQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABAAIAEACQALACAJgDIAEgBIAFgBIAEAAIACACIACAEQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgEADIgDACQgFACgIgBIgFAAQgLgBgEABIgFACQgMAGgWAAIgWgBg");
	this.shape_25.setTransform(23,5.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#444444").ss(0.5).p("Ah6gHIBagKQAJgIATgLQAPgKAQgLQAVABABACQAAAIgIAHQgHAGgFAEQgEAEgBADQgBAEADADQADADAJgCQAFgBAEgBQAMgDAJgCQADgBAFgCQADgBAEAAQAGgCACgBQAFgBADgFQACgCACgDQACgDACgCQADgCADABQAHAEgBAFQgBADgEAFQgIALgHADQgGACgFACQgEACgCABQgDACAFABQABAAABgBQAGABAJgDQAHgCAFgBQAHgCACACQADACAAAEQgBAEgGABQgLAGgZACIAAABQgBABAAABQAAABADAAQADABAFgBQAAAAABAAQAHgBAIgCQAFAAAEgBQABAAAAAAQADAAABACQADACgCAEQgEAGgNACQgCAAgDAAQgNABgEAAQgCAAgBABQgBAAgBABQgCACAAACQAAACACABQABABADAAQALADAKgCQACgBACAAQADgBACgBQACAAABAAQACABABABQABACABACQAAADgCACQgBABgCACQgCABgCAAQgFACgHgBQgDAAgCAAQgLgBgFABQgDABgCABQgQAIgogDQgCAAgCgBIgngFIhWAAIgDgCIgIg2g");
	this.shape_26.setTransform(22.9,5.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AASA5IgFgBIgngFIhWAAIgCgCIgIg2IgBgCIBbgKQAIgIATgLIAggVQAUABABACQABAIgJAHIgMAKQgEAEgBADQgBAEADADQADADAKgCIAJgCIAUgFIAIgDIAHgBIAJgDQAEgBAEgFIADgFIAEgFQADgCADABQAIAEgCAFQAAADgFAFQgIALgHADIgLAEIgGADQgDACAFABIACgBQAGABAKgDIALgDQAHgCACACQADACAAAEQAAAEgHABQgLAGgYACIgBABIgBACQAAAAAAABQABAAAAAAQABAAAAAAQABAAABAAIAHAAIABAAIAQgDIAJgBIABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQAEACgDAEQgEAGgNACIgEAAIgRABQgBAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAIgCAEQAAAAABABQAAAAAAABQAAAAAAAAQABABAAAAIAFABQALADAJgCIAFgBIAEgCIADAAIAEACIABAEQAAADgBACIgEADIgDABQgFACgIgBIgFAAQgLgBgFABIgEACQgMAGgXAAIgVgBg");
	this.shape_27.setTransform(23,5.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#444444").ss(0.5).p("Ah6gGIBbgKQAJgJASgLQAOgKARgLQAVABABACQAAAJgIAHQgGAFgFAEQgEAEgCADQgBAEACADQADAFAKgCQAEgBAFgCQALgDAKgCQADgBAEgBQAEgBADgBQAGgBADgBQAEgCADgFQACgCACgDQABgDACgCQADgCAEABQAIADgCAGQgBADgDAFQgIAMgGADQgHABgEACQgFACgCABQgEACAFABQABAAACAAQAFAAAKgCQAGgCAGgBQAGgCADABQADACAAAEQAAADgGACQgLAGgZACQAAABgBAAQgBABAAABQAAABADAAQADABAEgBQABAAAAAAQAHgBAJgBQAFgBAEAAIABAAQADAAABABQAEABgCAFQgDAGgOACQgCAAgDAAQgNABgEAAQgCAAgBAAQgBABgBABQgCACAAABQAAADABABQABABADAAQAMADAJgBQACgBACAAQADgBACgBQACAAACAAQABAAACACQABABAAACQABADgCACQgBACgCABQgCABgCABQgFABgHgBQgDAAgCAAQgLgBgFABQgDAAgCABQgPAJgpgDQgCAAgCAAIgjgFIgEgBIhWAAIgDgBIgIg3g");
	this.shape_28.setTransform(22.9,5.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AASA6IgEAAIgjgFIgEgBIhWAAIgDgBIgIg3IgBgCIBbgKQAJgJASgLIAfgVQAVABABACQAAAJgIAHIgLAJQgFAEgBADQgBAEACADQACAFALgCIAJgDIAUgFIAIgCIAHgCIAJgCQAEgCADgFIAEgFIADgFQADgCAEABQAHADgBAGQgBADgEAFQgHAMgGADIgMADIgGADQgEACAFABIADAAQAFAAAKgCIAMgDQAGgCACABQAEACAAAEQAAADgGACQgLAGgZACIgBABIgCACQAAAAABAAQAAABAAAAQABAAAAAAQABAAABAAIAHAAIABAAIAPgCIAKgBIABAAQAAAAABAAQABAAAAAAQABAAAAAAQAAABAAAAQAFABgDAFQgDAGgOACIgEAAIgRABIgDAAIgDACIgCADIABAEQABAAAAAAQABAAAAABQABAAABAAQAAAAABAAQALADAJgBIAFgBIAFgCIADAAIAEACIABADQABADgCACIgDADIgEACQgFABgHgBIgGAAQgKgBgFABIgFABQgLAGgYAAIgVAAg");
	this.shape_29.setTransform(23,5.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#444444").ss(0.5).p("Ah6gGIBagJQAKgKARgLQANgKASgMQAVACABACQABAIgIAHQgHAGgFAEQgDADgCADQgCAFACADQACAFAKgCQAEAAAFgCQAMgDAJgCQAEgBAEgCQAEgBADAAQAGgBACgBQAEgBAEgGQABgCACgEQABgDABgBQAEgDADABQAJACgCAGQAAAEgDAFQgIAMgGADQgHACgEACQgEABgDABQgFADAFABQABAAACgBQAGABAJgCQAGgBAGgCQAGgCAEABQADABABAEQAAADgGADQgLAFgZADQgBAAAAAAQgBABgBABQAAABADABQACAAAFAAQAAAAABAAQAGAAAKgCQAEAAAFgBQAAAAABAAQADAAABABQAGABgDAEQgDAGgOACQgCABgDAAQgNAAgEAAQgDAAAAABQgCAAgBABQgBABgBACQAAADABABQABABADABQAMADAJgBQADAAACgBQACAAACgBQACgBACAAQACAAABACQABABABACQABADgBACQgBACgDABQgBABgDAAQgEABgIgBQgCAAgDAAQgKgBgFABQgEABgCABQgPAJgpgEQgCAAgCAAIgjgFIgEgBIhWAAIgDAAIgIg3g");
	this.shape_30.setTransform(22.9,5.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AASA6IgEAAIgjgFIgEgBIhWAAIgDAAIgIg3IgBgDIBagJQAKgKARgLIAfgWQAVACABACQABAIgIAHIgMAKIgFAGQgCAFACADQACAFAKgCIAJgCIAVgFIAIgDIAHgBIAIgCQAEgBAEgGIADgGIACgEQAEgDADABQAJACgCAGQAAAEgDAFQgIAMgGADIgLAEIgHACQgFADAFABIADgBQAGABAJgCIAMgDQAGgCAEABQADABABAEQAAADgGADQgLAFgZADIgBAAIgCACQAAABAAAAQAAAAABAAQAAAAABAAQAAABABAAIAHAAIABAAIAQgCIAJgBIABAAIAEABQAGABgDAEQgDAGgOACIgFABIgRAAIgDABIgDABIgCADQAAABAAAAQAAABAAABQAAAAAAAAQABABAAAAIAEACQAMADAJgBIAFgBIAEgBIAEgBQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABIACADQABADgBACIgEADIgEABQgEABgIgBIgFAAQgKgBgFABIgGACQgLAGgYAAIgVgBg");
	this.shape_31.setTransform(23,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-2.2,37.3,16.4);


(lib.m04_c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.m04_d();
	this.instance.setTransform(4.5,4.7,1,1,0,0,0,4.5,4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:4.4,rotation:-26.7},4).to({regX:4.5,rotation:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.9,9.4);


(lib.m04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.m04_A();
	this.instance.setTransform(4.5,4.7,0.236,0.236,0,0,0,4.5,4.7);

	this.instance_1 = new lib.m04_c();
	this.instance_1.setTransform(54.3,0,1,1,0,0,0,4.5,4.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:360,x:53.8,y:0.7},26,cjs.Ease.get(1)).to({_off:true},1).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({_off:false},0).to({x:80.8,y:-3,alpha:0},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.4,3.6,2.1,2.2);


(lib.m02_B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.m_02_C();
	this.instance.setTransform(4.5,4.7,1,1,0,0,0,4.5,4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:4.4,rotation:-30.7},5,cjs.Ease.get(0.5)).to({regX:4.5,rotation:0},5,cjs.Ease.get(0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,9.4);


(lib.m_05_B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.m_05();
	this.instance.setTransform(2.3,5.5,1,1,0,0,0,2.3,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:42.2},4).to({rotation:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.6,10.9);


(lib.m_05_A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.m_05();
	this.instance.setTransform(-23.3,5.6,0.22,0.22,0,0,0,2.3,5.5);

	this.instance_1 = new lib.m_05_B();
	this.instance_1.setTransform(9.8,35,1,1,0,0,0,2.3,5.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:360,x:9.8,y:35},27,cjs.Ease.get(1)).to({_off:true},1).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).to({x:24.3,y:49.6,alpha:0},52).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.8,4.4,1,2.4);


(lib.m_3_A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.m03();
	this.instance.setTransform(3.3,4.8,1,1,0,0,0,3.3,4.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.6,9.7);


(lib.m_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.m02_A();
	this.instance.setTransform(2.5,5.6,0.376,0.376,0,0,0,4.4,4.7);

	this.instance_1 = new lib.m02_B();
	this.instance_1.setTransform(47.2,24.1,1,1,0,0,0,4.5,4.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:4.5,scaleX:1,scaleY:1,rotation:360,x:47.2,y:24.3},29,cjs.Ease.get(1)).to({_off:true},1).wait(57));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({x:51.2,y:36.3,alpha:0},56).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,3.8,3.4,3.5);


(lib.m_01_B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.m_01();
	this.instance.setTransform(2.3,5.9,1,1,0,0,0,2.3,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-20.5},3).to({rotation:0},4).to({rotation:19.2},3).to({rotation:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.7,11.8);


(lib.m_01_A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.m_01();
	this.instance.setTransform(-2.1,8.9,0.458,0.458,0,0,0,2.3,5.9);

	this.instance_1 = new lib.m_01_B();
	this.instance_1.setTransform(38.3,-10.5,1,1,0,0,0,2.3,5.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:360,x:38.3,y:-10.5},28,cjs.Ease.get(1)).to({_off:true},1).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},1).to({x:58.9,y:-17.7,alpha:0},55).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,6.2,2.2,5.4);


(lib.Ukulele_with_hand_noani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// right_hand
	this.instance = new lib.right_hand();
	this.instance.setTransform(7.5,55.6,1,1,0,0,0,8.2,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// lefthand
	this.instance_1 = new lib.lefthand_2();
	this.instance_1.setTransform(38.6,22.7,1,1,0,0,0,3.3,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// ukulele
	this.instance_2 = new lib.ukulele();
	this.instance_2.setTransform(21.4,42.6,1,1,0,0,0,21.4,42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// lefthand
	this.instance_3 = new lib.lefthand();
	this.instance_3.setTransform(30.3,19.8,1,1,0,0,0,6.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,0,43.7,85.2);


(lib.Ukulele_with_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// right_hand
	this.instance = new lib.right_hand();
	this.instance.setTransform(7.5,55.6,1,1,0,0,0,8.2,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-9.7,x:9.3,y:54.5},12).to({rotation:0,x:7.5,y:55.6},13).wait(1));

	// lefthand
	this.instance_1 = new lib.lefthand_2();
	this.instance_1.setTransform(38.6,22.7,1,1,0,0,0,3.3,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:35.8,y:27.5},6,cjs.Ease.get(0.5)).to({x:34.8,y:24.9},6,cjs.Ease.get(0.5)).to({x:35.8,y:29.7},5,cjs.Ease.get(0.3)).to({x:37.8,y:20.1},4).to({x:38.6,y:22.7},4).wait(1));

	// ukulele
	this.instance_2 = new lib.ukulele();
	this.instance_2.setTransform(21.4,42.6,1,1,0,0,0,21.4,42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-11.7},12).to({rotation:0},13).wait(1));

	// lefthand
	this.instance_3 = new lib.lefthand();
	this.instance_3.setTransform(30.3,19.8,1,1,0,0,0,6.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:26.3,y:24.6},6).to({x:24.3,y:22},6).to({x:25.7,y:26.8},5).to({x:29.3,y:17.2},4).to({x:30.3,y:19.8},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,0,43.7,85.2);


(lib.m_03_D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.m_3_A();
	this.instance.setTransform(3.3,4.8,1,1,0,0,0,3.3,4.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:4.9,rotation:-43.4,x:3.4,y:4.9},6,cjs.Ease.get(0.5)).to({regY:4.8,rotation:0,x:3.3,y:4.8},6,cjs.Ease.get(0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.6,9.7);


(lib.m03_B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.m_3_A();
	this.instance.setTransform(3.3,4.8,0.302,0.302,0,0,0,3.3,4.8);

	this.instance_1 = new lib.m_03_D();
	this.instance_1.setTransform(59.3,16.1,1,1,0,0,0,3.3,4.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:360,x:59.3,y:16.1},29,cjs.Ease.get(1)).to({_off:true},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({x:84.3,y:22.1,alpha:0},46).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,3.4,2,2.9);


// stage content:



(lib.Ukulele_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 8
	this.instance = new lib.white();
	this.instance.setTransform(194.4,150.8,2.409,0.678,0,0,0,52.8,106.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(194).to({_off:false},0).to({x:195.2,y:154.8,alpha:1},16).to({_off:true},1).wait(59));

	// m05
	this.instance_1 = new lib.m_05_A();
	this.instance_1.setTransform(217.3,158.3,1,1,0,0,0,2.3,5.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(111).to({_off:false},0).to({_off:true},100).wait(59));

	// m04
	this.instance_2 = new lib.m04();
	this.instance_2.setTransform(194.1,158,1,1,0,0,0,4.5,4.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(94).to({_off:false},0).to({_off:true},117).wait(59));

	// m03
	this.instance_3 = new lib.m03_B();
	this.instance_3.setTransform(193.1,161.1,1,1,0,0,0,3.3,4.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(86).to({_off:false},0).to({_off:true},125).wait(59));

	// m02
	this.instance_4 = new lib.m_02();
	this.instance_4.setTransform(193.8,159.1,1,1,0,0,0,4.5,4.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80).to({_off:false},0).to({_off:true},131).wait(59));

	// m01
	this.instance_5 = new lib.m_01_A();
	this.instance_5.setTransform(197.2,155.2,1,1,0,0,0,2.3,5.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(69).to({_off:false},0).to({_off:true},142).wait(59));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_15 = new cjs.Graphics().p("EgiygSfMAjNgCcIe8ibMADcAuJMhEzAAjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_graphics_15,x:207.7,y:159.5}).wait(255));

	// ukulele_noani
	this.instance_6 = new lib.Ukulele_with_hand_noani();
	this.instance_6.setTransform(182.1,153.6,1,1,0,0,0,21.4,42.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(49).to({_off:false},0).to({alpha:1},19).to({_off:true},1).wait(201));

	// ukulele
	this.instance_7 = new lib.ukulele();
	this.instance_7.setTransform(173.6,11.1,0.461,0.461,-76.7,0,0,21.3,42.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.Ukulele_with_hand();
	this.instance_8.setTransform(182.1,153.6,1,1,0,0,0,21.4,42.6);

	this.instance_7.mask = this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},15).to({state:[{t:this.instance_7}]},33).to({state:[{t:this.instance_8}]},21).to({state:[]},142).wait(59));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({_off:false},0).to({regX:21.4,regY:42.6,scaleX:1,scaleY:1,rotation:0,x:182.1,y:153.6},33,cjs.Ease.get(1)).to({_off:true},21).wait(201));

	// handle
	this.instance_9 = new lib.handle();
	this.instance_9.setTransform(179,31.7,1,1,0,0,0,1.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleY:0.23,x:180.3,y:43.6},8,cjs.Ease.get(0.5)).to({_off:true},1).wait(214).to({_off:false},0).to({scaleY:1,x:179,y:31.7},7).wait(40));

	// door_open
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").p("AjiBiIhZiXIJ4gsIgzCag");
	this.shape.setTransform(178.3,35.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak8g2IJ4grIgzCaInrApg");
	this.shape_1.setTransform(178.4,35.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#444444").p("Ak4gnIJygtIg0CAInrApg");
	this.shape_2.setTransform(178.6,36.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ak4gnIJxgtIgzCAInsApg");
	this.shape_3.setTransform(178.7,36.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#444444").p("Ak0gbIJrgtIg0BoInrApg");
	this.shape_4.setTransform(178.9,37.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ak1gbIJrgtIgzBoInsApg");
	this.shape_5.setTransform(179,37.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#444444").p("AkygOIJmgvIg0BTInrApg");
	this.shape_6.setTransform(179.2,38.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AkygPIJlgvIgzBUInsApg");
	this.shape_7.setTransform(179.3,38.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#444444").p("AkvgEIJggwIgzBBInsApg");
	this.shape_8.setTransform(179.5,39.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AkwgEIJhgwIg0BAInrApg");
	this.shape_9.setTransform(179.5,39.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#444444").p("AktADIJcguIg0AvInrApg");
	this.shape_10.setTransform(179.7,40.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AktADIJcgvIg0AwInsApg");
	this.shape_11.setTransform(179.8,40.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#444444").p("AkrALIJYgvIgzAjInsAng");
	this.shape_12.setTransform(179.9,41.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AksAKIJZguIg0AjInrAmg");
	this.shape_13.setTransform(179.9,41.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#444444").p("AkqASIJVgvIgzAWInsAng");
	this.shape_14.setTransform(180.1,41.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AkqARIJVgvIgzAWInsAng");
	this.shape_15.setTransform(180.1,41.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#444444").p("Aj1AcIg0gDIJTgwIg0AMg");
	this.shape_16.setTransform(180.2,42.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AkpAXIJTgwIg0AMInrAng");
	this.shape_17.setTransform(180.2,42.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#444444").p("AkxAZIA/gNIHogoIA8AEg");
	this.shape_18.setTransform(180.2,44);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AjyAOIHogoIA8AEIpjAxg");
	this.shape_19.setTransform(180.2,43.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#444444").p("AkxAeIA+gWIHogoIA/AMg");
	this.shape_20.setTransform(180.3,44.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Aj0AKIHogpIA/AMIplAzg");
	this.shape_21.setTransform(180.4,44.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#444444").p("AkyAkIA+ghIHogoIA/AUg");
	this.shape_22.setTransform(180.4,44.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Aj0AEIHogoIA/AUIplA1g");
	this.shape_23.setTransform(180.4,44.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#444444").p("AkzArIA9gsIHogqIBBAhg");
	this.shape_24.setTransform(180.6,45.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Aj2AAIHogqIBCAgIpnA1g");
	this.shape_25.setTransform(180.6,45.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#444444").p("AkzAyIA+g6IHogqIBBAtg");
	this.shape_26.setTransform(180.4,46.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Aj1gHIHogqIBBAtIpnA3g");
	this.shape_27.setTransform(180.4,46.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#444444").p("AkzA8IA8hNIHogrIBDA+g");
	this.shape_28.setTransform(180.6,47.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Aj3gRIHogqIBDA+IpnA5g");
	this.shape_29.setTransform(180.6,47.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#444444").p("Ak0BGIA7hhIHogqIBGBQg");
	this.shape_30.setTransform(180.8,48.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Aj5gbIHpgqIBFBRIppA6g");
	this.shape_31.setTransform(180.8,48.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#444444").p("Ak1BPIA6h0IHogqIBIBjg");
	this.shape_32.setTransform(181,49.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Aj7gkIHpgrIBIBjIpqA8g");
	this.shape_33.setTransform(181,49.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#444444").p("Ak2BZIA5iHIHogrIBLB2g");
	this.shape_34.setTransform(181.2,50.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Aj9guIHpgqIBLB2IpsA7g");
	this.shape_35.setTransform(181.2,50);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#444444").p("Ak2BjIA3ibIHogqIBOCIg");
	this.shape_36.setTransform(181.4,51);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Aj/g4IHpgqIBNCIIptA9g");
	this.shape_37.setTransform(181.4,51);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#444444").p("Ak3BtIA2iuIHogrIBQCbg");
	this.shape_38.setTransform(181.6,52);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AkAhBIHogrIBQCbIpvA+g");
	this.shape_39.setTransform(181.6,52);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#444444").p("Ak4B2IA1jBIHogrIBTCug");
	this.shape_40.setTransform(181.8,53);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AkChLIHogqIBSCtIpvA+g");
	this.shape_41.setTransform(181.8,53);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#444444").p("Ak3BuIA2ixIHogqIBQCdg");
	this.shape_42.setTransform(181.7,52.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AkBhDIHogqIBRCdIpvA+g");
	this.shape_43.setTransform(181.6,52.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#444444").p("Ak2BlIA3ifIHogrIBOCNg");
	this.shape_44.setTransform(181.5,51.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Aj/g6IHogrIBOCNIptA+g");
	this.shape_45.setTransform(181.5,51.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#444444").p("Ak2BdIA4iPIHogqIBMB9g");
	this.shape_46.setTransform(181.3,50.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Aj9gyIHogqIBMB9IptA8g");
	this.shape_47.setTransform(181.3,50.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#444444").p("Ak1BUIA5h9IHogrIBKBtg");
	this.shape_48.setTransform(181.1,49.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Aj8gpIHpgrIBJBtIprA7g");
	this.shape_49.setTransform(181.1,49.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#444444").p("Ak1BMIA7htIHogqIBHBcg");
	this.shape_50.setTransform(181,48.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("Aj6ghIHogqIBHBcIpqA7g");
	this.shape_51.setTransform(181,48.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#444444").p("Ak0BDIA7hbIHogrIBFBMg");
	this.shape_52.setTransform(180.8,47.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("Aj4gYIHogrIBFBNIppA5g");
	this.shape_53.setTransform(180.8,47.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#444444").p("Ak0A7IA9hLIHogqIBDA8g");
	this.shape_54.setTransform(180.6,47);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("Aj3gQIHpgqIBDA8IppA5g");
	this.shape_55.setTransform(180.6,47);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#444444").p("AkrAMIJYgvIg0AhInrAng");
	this.shape_56.setTransform(179.9,41.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AksALIJZguIg0AhInsAmg");
	this.shape_57.setTransform(180,41.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#444444").p("AkuABIJdguIgzAzInsApg");
	this.shape_58.setTransform(179.7,40.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AkuAAIJdguIgzA0InsApg");
	this.shape_59.setTransform(179.7,40.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#444444").p("AkwgJIJigvIgzBIInsApg");
	this.shape_60.setTransform(179.4,39.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AkxgJIJjgvIg0BIInrApg");
	this.shape_61.setTransform(179.4,39.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#444444").p("AkzgUIJoguIgzBcInsApg");
	this.shape_62.setTransform(179.1,38.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("Ak0gUIJpguIg0BcInsApg");
	this.shape_63.setTransform(179.2,38.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#444444").p("Ak2gfIJugtIg0BxInrApg");
	this.shape_64.setTransform(178.8,37.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("Ak2gfIJtgtIgzBxInsAog");
	this.shape_65.setTransform(178.9,37.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#444444").p("Ak4gqIJygtIgzCGInsApg");
	this.shape_66.setTransform(178.6,36.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("Ak5gqIJzgtIg0CGInrApg");
	this.shape_67.setTransform(178.6,36.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},190).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(40));

	// door_close
	this.instance_10 = new lib.door_close();
	this.instance_10.setTransform(178.5,35,1,1,0,0,0,31.5,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(270));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(345.7,174.4,65.4,21.7);

})(Ukulele_ani = Ukulele_ani||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var Ukulele_ani, images, createjs, ss;