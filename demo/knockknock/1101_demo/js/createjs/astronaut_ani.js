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



(lib.把手 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").p("AgRAAQAAAGAFAEQAFAFAHAAQAHAAAFgFQAGgEAAgGQAAgFgGgEQgFgFgHAAQgHAAgFAFQgFAEAAAFg");
	this.shape.setTransform(1.9,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLAKQgGgEAAgGQAAgFAGgEQAFgFAGAAQAHAAAGAFQAFAEAAAFQAAAGgFAEQgGAFgHAAQgGAAgFgFg");
	this.shape_1.setTransform(1.9,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,5.7,5.1);


(lib.UFO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDAJQAUgSgIgMIATgFQgCAKgIAMQgRAVgcAKg");
	this.shape.setTransform(107.9,33);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAGQAkgTgGgMIASAAQgIALgOAMQgaAWgmAGg");
	this.shape_1.setTransform(62.4,39);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmASIAggJQAegKAAgQIAPAEQgHAIgNAHQgYAQgfAAIgCAAg");
	this.shape_2.setTransform(16.2,36.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgDAEgEQADgEAEAAQAFAAADAEQADAEAAADQAAAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_3.setTransform(57,29.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAGQgDgDAAgDQAAgCADgDQADgDACAAQADAAADADQADADAAACQAAADgDADQgDADgDAAQgCAAgDgDg");
	this.shape_4.setTransform(107.7,25.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFAGQgDgCABgEQgBgCADgDQADgCACgBQADABADACQACADABACQgBAEgCACQgDADgDgBQgCABgDgDg");
	this.shape_5.setTransform(6.8,26.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGgaIgjgfQApAZAYAtQAOAXAEAUIgIACQgGgugigmg");
	this.shape_6.setTransform(68.3,8.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag7gPIB3AaIgVAFg");
	this.shape_7.setTransform(82.1,17);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKAcIAKg3IALA3g");
	this.shape_8.setTransform(57,20.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgjAVIBHgtIg7Ayg");
	this.shape_9.setTransform(33.4,18.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AkbAJIhNgVQEaA3DrggQB2gNBCgcIAUACQgWAQg5ANQhxAdiqAAQisAAhugVg");
	this.shape_10.setTransform(56.2,21.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#444444").s().p("AinBEIgcgMQAAghAqgpQA7g8BkgBQBjAAA3BFQAcAhAIAhQgCAHgaAFQgzAMh1AAQh0AAgzgMg");
	this.shape_11.setTransform(56.4,8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Al+AFIiigVICrASQDNAUCoAAQCpAADNgYQBmgNBFgNQg+APhjANQjGAdi6AAQi3AAjHgYg");
	this.shape_12.setTransform(57.2,29.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#444444").s().p("AgEAhQgcgBgZgLQgYgMgQgRQgHgHAEgJQAEgIAKAAIBSABQAvAAAsgCQAJAAAFAJQAEAIgGAIQgSATgbALQgaAMgcAAIgEgBg");
	this.shape_13.setTransform(57.2,39);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#444444").s().p("AhTAMQgGgFACgHQACgHAIgBQBUgNBCgQQAIgCAFAGQAFAGgDAIQgLAVgYAQQgYARgdACIgMABQgpAAgegag");
	this.shape_14.setTransform(102.3,33.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#444444").s().p("AgHAkQgbgFgWgPQgVgPgKgTQgEgHAFgHQAFgGAIACQBBAPBXAKQAIABACAIQACAGgFAFQgRARgZAHQgQAFgQAAQgKAAgJgCg");
	this.shape_15.setTransform(11.8,34.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#444444").s().p("AmeBJQiOgYgEgVQgEgTBggnQB0gyChgUIgBAFIAcALQAzAMBzAAQB2AAAzgMQAagFACgGIgCgFQCJARBrAmQBUAfAgAbQAFAFgCAGQgBAGgGACQhKAXhqASQivAcjGAAQjyAAisgcg");
	this.shape_16.setTransform(56.1,24.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.3,42.4);


(lib.moon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("ABHALQgEgEgKgEIgYgDIgbgEQgagBgXACIgRACIgGABQgFAAgBgEQgBgFAFgBIAHAAIARgBQAbgBAYADIAbAGIAXAFQAKADAEAGIACABIgCgBg");
	this.shape.setTransform(20.8,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgWA2IAJgLQANgPAHgVQAJgTgBgTIAAgTQgCgGAGAAQAEgBACAFIgBAVQgCAVgKATQgKAUgNAPIgLAKIgCADIACgDg");
	this.shape_1.setTransform(35.6,26.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AgEgBIAAgBIACAAIACAAIAEACIABAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBABIgBACIABAAIAAABg");
	this.shape_2.setTransform(13.3,4.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444444").s().p("AAaAGIgEgGQgCAAgGgBIgMgBIgSAGIgIADIgCAAIgBAAIgBgIIADAAIAGgBIAKgDQAHgCAEAAQAGAAAGADQAIACACACQABAFABABIADABIgBABIgCgCg");
	this.shape_3.setTransform(12.6,6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#444444").s().p("AgCAWIACgHQAAgHAAgIQgCgLgEgKIAEAGQACAIACAHQADAGABAJIABAIg");
	this.shape_4.setTransform(20.8,28.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444444").s().p("AgDAAIAAgFIADADIAEACIgEAGIgDgGg");
	this.shape_5.setTransform(19.4,31.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#444444").s().p("AgKgEIACgBIATADIgEAIg");
	this.shape_6.setTransform(17.9,31.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444444").s().p("AgNgBIACgBIAZgBIAAAHg");
	this.shape_7.setTransform(17.4,33.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#444444").s().p("AgOAIIANgJIANgIIADAJIgIAAIgHADIgMAHg");
	this.shape_8.setTransform(17.3,35.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444444").s().p("AgIAKIAGgMIAHgNIAGAIIgFAEIgRATg");
	this.shape_9.setTransform(18.6,36.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#444444").s().p("AgDAAIAAgKIAHADIgBADIgFAOg");
	this.shape_10.setTransform(20.6,36.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#444444").s().p("AAAADIgFgDIgCgDIAHgEIABADIACAEQABAFAEADQgFgBgDgEg");
	this.shape_11.setTransform(22.4,36.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#444444").s().p("AgIADIAFgGIAEADQAEACAEABQgEACgFgBg");
	this.shape_12.setTransform(24.3,34.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#444444").s().p("AgcAAIAOAAIAOgBIAcgHIAAABIgcAKIgNAEQgIACgHAAgAAcgHIABAAIgCABgAAcgHg");
	this.shape_13.setTransform(27.2,32.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#444444").s().p("AgYAPIACgJIABAAIAFgBIAQgGQANgFAMgJQgLALgMAGIgOAKIgHADIgEABg");
	this.shape_14.setTransform(26.5,31.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#444444").s().p("AgRANIACgBIAEgCQAGgFAGgGIARgUIgNAWQgFAKgFAFIgFAFIgDABg");
	this.shape_15.setTransform(25,29.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#444444").s().p("AgMAUIACgBIABAAIACgCIAEgGIAFgLQAGgMAFgPIAAADIgGAYIgFAPIgCAHIgEAFIgCABg");
	this.shape_16.setTransform(23.6,28.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#444444").s().p("AgDACIgBgDQABgHAFAAQADgBAEACQADACABACQACACgBABIgBADQgCAFgGgBIgDgBIgCAAIgNAEg");
	this.shape_17.setTransform(21.4,33.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#444444").s().p("AABADIgBAAIgBgBIgBAAIgBAAIgBgCQAAAAABgBQAAAAAAgBQABAAAAAAQABAAABAAIADABIABABIABAAIgBAAIAAAAIAAACIgCABIgBAAg");
	this.shape_18.setTransform(21.9,33.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#444444").s().p("AAfB+IgEADIgCAAQgFAAgDgGIgCgFQgGAJgIABQgKABgFgJIgDgHIgDgDIgEgGQgCgEABgGQABgFAEgDIADgCIACgBIABgCQAAgBAAAAQgBgBAAgBQAAAAgBAAQAAgBgBAAQgDgDgJAAIgDAAIgBAEQgCACgDABIACAEQACADgCAEQgCACgDABQgDABgDgCQgDgCgBgDQgFgJgKgMQgMgPgDgHQgEgGgFgRQgEgNAAgEQAAgIACgLIACgJIADgXQACgLAFgKQAGgUAKgJQAFgLAIgHQAGgGAMgGIAGgDIABAGQACAFgFAGIgFAEIgCADIABgBQADgDAEAAIACAAQAGgDACgEIAHgGQAEgCAHAAIAAAAIAJgCQAPgEAGAEQAFACACAEIABADQAAAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAEAAACABQAEACABAEQACAIgCAFIAAABIAAACIABABIADAEQADAHgGAIQgFAHgCAKIgCAEIABgBQAJgGAQAIIABABIAGgGQAHgFAHABIADABIAAAFIAAACIABADIgBAAIgCAJQgDAEgCABIgHABIgBgBIgFABQgFACgDAAIgHgCQgCAAgDAEIgBACQgCAGgEADIgBAAQgBABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQADABADAAIADABQAJACADAHQAAADgBACIgEADQgHADgHgDIAAAAIgBAAIgEAOQgCAIABACIAFADIACABQAGADACAFIAFACQADACABAEQACAEgCADIgCACIAAABIACAMQAFADADAEQADAFgCAFQgCAGgJABIgDABQgEABgHAHIgCADIgGADIgDABIABABQAEAJgGAFIgDAEgAgcBAQALAAAGAFQAGAEABAHQAAAFgDAFIgFADIgCABQgDADACADIACADIAEAFIACAEIABADQADAEADgBQAEAAADgFIABgEIgCgEQgCgGADgEQADgEAGABIAEADQAEADAAAGIADgDQADgDAHABIACABIACgBIACgDQAKgJAFgCIADAAIAFgCQAAgBgEgDIgEgDIgCgFIgCgMIABgGIACgCQgCgCgEAAIgFgBIABgFIgCgDIgDgBQgFgCgDgDQgEgFADgOIAFgOIACgCQACgDADgBIABAAIgFgBQgFgEgBgFQAAgEACgEIADgCIAFgGIABgCQAEgIAIgBIAFABQgIgEgEACIgDAEQgDAEgEACQgEACgEAAIgMACQgEAAgDgCQgDgBAAgEQAAgGAEgDQAJgGAJAAIABABIACgHQAFgNADgFIADgHIgBgBQgDgDgBgDQgBgCACgFIAAgIIgBAAQgLAAgCgHIgBgDIgCgCQgDgCgMADIgKACIgHAAIgDAEIgBAAQgFAHgJAFIgLAIIgCAGIgBAEIgBAJQgEAMgMADQgEACgDgDQgDgCAAgEIABgRIgHAQQgFANgBAHQgCAGAAAHIgDATQgCALAAAFQAAAFADALIAIAVQAGAKAJAKIAEAFIgBgCIAMAGIACAAIAAgBQADgGAIAAgAAYBpQgBAFACAIQADgCADAAIAAgBIgHgLgABTguIgCACIgCABIABAAIACABIAAAAIACgFgAguhcIgFAHQgEAGAAANQAEgCACgGIACgLIADgJg");
	this.shape_19.setTransform(10.5,20.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#444444").s().p("AAVB5QgDgIABgIQAAgGgCgBQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgDABQgBAAAAABQAAAAAAABQAAAAAAABQAAABABAAIACAFQAAADgCAFQgEAHgHAAQgGACgEgHIgDgHIgGgIQgEgHAGgGIAGgDQACgDgBgEQgBgEgDgDQgEgDgLAAQgGgBgBADIgBAEQgCADgGgDIAEALIAAADQAAAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAgBIgCgDQgEgIgMgNQgLgOgEgIQgFgKgDgMQgEgLAAgFQAAgFABgHIADgOIADgXIAGgVQAHgUAJgHQAEgLAJgHQAFgEAMgHQAAADgDADIgEAEIgHAJQgJAJgDAFQgEAHAAATIABACQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAKgEACgJQABgDABgJQACgKAIgHIADgCQABAAABAAQAAAAABABQAAAAAAABQAAAAgBABQAHgEAGgHIAGgGQACgBAGAAIAPgDQAIgCAFADIAEADIABAEQACAEAGAAIAEABIACADQACAEgBAGIgBAFIAFAHQABADgFAIQgDAEgHAUQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgIAAgGAFQgFADADADIADAAIATgCIAFgFIAEgFQAHgFAMAHIAEABIACgBIAHgGQAFgEAEACIABAFIgBgEQABAFgDAGIgCADQgCABgEgBIgGABQgEACgDgBIgIgBQgFAAgDAGIgGAJIgDACQgEAEAHAFIAKACQAGABACAFQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIgCABQgGABgEgBIgEAAQgCAAgBACIgFAOQgDAKADAEQACADAHADQAGADgBAFQAFAAACACQAEADgCADIgBADIgBADIADAPIACABQAJAFgCAGQgBACgEABIgHACQgEABgLALQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAIgGAAQgEgBgBABIAFAIQADAGgDADQgEgDgDAEIgDACIAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAgBgBAAg");
	this.shape_20.setTransform(10.5,20.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#444444").s().p("AgGAVIgEgCQgEgBgDgCQgEgDgCgHIgBgCQgFgKADgEQABgDAFgDIACAAIACgBIACgCQAFgDAGABQADABAEAFIACADIACACIAUAPIgPgBIAAADIAAACQgBAHgEADIgBAAQgDADgEAAIgGgBgAgJgLIgBABIgDADIgDABIgCAAIAEAJIADAFIAFACIADABIADABIADgCIAAgBIAAgCIABgGIABgBIgFgGIgBgCIgBgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAg");
	this.shape_21.setTransform(32.9,8.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#444444").s().p("AADARIgEgCIgIgDQgDgCgCgGIgCgFQgCgFABgCIAGgEIAFgDQADgCADABQADABACADIAFAGIAIAGQgDAAgBADIgBAGQAAAEgDABIgCACQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_22.setTransform(32.4,8.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#444444").s().p("AAJAxQgDAAgDgCIgDgFIAEgDIgBAAQgCgHACgCIAEgEIABgBIAAgEQgDACgDAAQgCAAgDgCQgKgGgDgGIgBgEIgBgDIgDgCQgEgEgCgDQgBgGAEgJIACgEIAAgEQABgHACgCQAFgKAFABQAEAAAEAEIAAACIABABIAHACQAEABAFAHIAGAHQADADAAAEIgBAEQgBADACAEIABAEQADAEgBANIgBAPQAAADgDACIgEACIAAABIgBABQgBAEgCACQgCAEgFAAgAgKgkIgBACIgCAKIgCAGIgCAIIADADIAFAHIACADIAAADQABADAGADIACABIACgDIAAgCIABgFQABgDAEgBQADgBADABIAAgBQgDgJABgEIABgBIgBgCIgGgHIgFgFIgCAAQgDAAgDgDIgEgEIAAAAg");
	this.shape_23.setTransform(33.4,16.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#444444").s().p("AAHArQACgBgBgEQgCgEABgCIAFgFIAAgCIADgMQACgHgDgEQgCgBgDADIAAAGQgBAIgGAAIgCgCQgKgEgBgFIgCgHIgFgDIgEgGQgBgDACgFIADgIIADgMQAEgGABAAQACAAADACIADAEQACACAFABQADABAEAFIAGAHQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABIgBAEQgBADAEAJQACAEgBAMIgBAOIgBACIgCABQgCAAgCAEIgCAGQgBABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgCgBg");
	this.shape_24.setTransform(33.4,16.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#444444").s().p("AASAvIgSgKQgDgCgEgHIgHgIIgEgIQgBgEABgDIgEABQgMADgHgCQgGgCgIgKIgDgHIAAgFIAAgCIgCgFQgCgKACgEQAEgJAMAAQAOgBAQACQAJACAFAEIADAJIAEAGIADADIAGAEIAEAFIACAAQABgBAAAAQABAAAAgBQAAAAAAAAQABgBAAAAIADgEQAEgDAGACQAGADAEAGIABACIABAAQAFgBADACQADABABAEQABADgCABIgCAEIgBABQAAABAAAAQAAABAAABQAAAAAAABQAAAAABABQAFAIgCAFQgCAFgEABQgDABgGgBIgDAAIgBADIAAADIgBAGQgBAEgDABIgFABIgEAAIgGACIgFgCgAgLgGQAFAAACADQADADgBABQgBADgEADIgBABIAAABIACAFIAGAIIAFAIIARAIIABABIABgBIAJgBIAAgDIAAgEQACgIAGgCQADgCAFACIAEAAIgDgFQgEgGADgIIACgBIAAAAIgGgBQgCgBgDgEQgCgEgEgCQgDAHgGABQgGACgFgDIgEgEIgBgCIgJgHQgCgEgCgFIgDgFQgDgDgGgBQgPgCgMABQgHAAgBADQgBACACAEIACAIIAAAGIACADQAEAIAFACQAEABAIgCIAHgCQAEgCADAAg");
	this.shape_25.setTransform(24,11);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#444444").s().p("AAUArIgJgEQgGgDgDgDIgFgIIgHgIIgDgGQgBgDACgEIADgCIACgCQABgBgFAAQgCAAgDABIgHABQgMADgEgCQgFgCgHgIIgCgFIAAgHIgDgIQgBgFABgDQADgGAJAAQAOgBAPACQAIACADADQAEAEADALIAJAHIAFAFQADACAEgBQAEgCACgEQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABABQAEABAEAFIADAFIAFAAQAAgBABAAQABAAAAAAQABAAAAAAQAAAAABABQACABgBAEIgDADQgCAFACAFQAHAJgHADIgGgBIgFAAQgEABgBAGIgBAJIgBABIgCABIgHABIgEABg");
	this.shape_26.setTransform(24,11);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#444444").s().p("AhrClIgXgRIgMgLQgFgFgFgJIgSgcQgXgjgDgtQgEgrARgqQAQgoAgggQAggfAogPQAMgFAIADIAFgBIAmgFQATgBARAEQAVAEAfARQAXAMALAJQASANAXAgQAOAUAFALQAEAIAFAXQAHAjAAASQABAegKAeQgLAdgTAXQgIAKgFACQgBAEgDAAQgXAYgfAPQgfAQghAEQgLABgMAAQg5AAgzgggAg7izQgnAPgeAeQgfAegPAmQgPAnADApQADAqAVAiIAQAYIADAEQAEAIAEAEIALAKIAXARQAbASAhAHQAhAIAfgEQAggEAdgPQAegPAWgXIAEgEIABAAQAEgCAGgIQASgWAKgcQAKgcgBgcQAAgRgHgiQgEgUgEgJQgEgKgOgTQgVgegSgOQgMgJgUgKQgggRgSgDQgQgEgSABIglAFIgHABIgFgBIgKACg");
	this.shape_27.setTransform(19.8,19.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgqC7QgigIgcgTIgjgbIgLgRIgQgYQgXgjgDgtQgCgpAQgoQAPgnAfgeQAfgfAogPQAMgEAGADQA1gJAZAFQAUAFAfAQQAWALALAJQARANAXAfQANARAGANQAEAJAEAVQAHAkAAARQABA9gnAwQgGAHgGAEIgCABIgBABQgWAYgeAQQgfAPgiAEIgXACQgUAAgWgFg");
	this.shape_28.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.7,39.5);


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("ABMNaQgNgNgDgFQgGgLABgPIAIg7QAFgigBgiQgDgpgPgfQgUgpgegSQgNgIgbgFQgfgHgNgGQgWgKgMgUQgMgTgDgaQgCgYAHgYQAHgZAQgTQAagiA1gcQAQgJAcgNQAigOANgGQAbgNAQgPQATgQALgXQAUgnAAg8QgChlgihkQgahQg1hoQgeg5g8hrQg6hmgYgvQgUgmgJghQgFgRgBgTQgCgQADgTQAGghATgZQAPgUAXgRQAXgRAogUIAXgKQAEgCADABQAEACACADQACAEgCAEQgBAEgEACIAAAAIgXAKQglASgXAQQgVAQgNARQgRAWgFAcQgDAQACAPQAAAOAFATQAIAeATAmQATAnA9BtQBAB2AZAwQAzBkAcBXQAhBlABBnQgBBAgVAnQgLAYgWASQgPANgdAPIgwAVQgcAMgQAIQgzAagaAhQggAoAEAwQADAYALATQALATAWAKQALAFAfAHQAbAHANAIQAhATATAqQAQAgABApQACAfgGAlQgCAVgHAmQgBARAGAIQAEAIALAKIAiAig");
	this.shape.setTransform(16.7,89.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.5,178.4);


(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("ACXnaQABgEAEgDQAEgCAEAAQAFABADAEQADAEgBAEIAAABIlbO5g");
	this.shape.setTransform(17.4,48.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AicnaQgBgFADgEQACgEAFgBQAEgBAEACQAEADABAEIEjPJg");
	this.shape_1.setTransform(73.6,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.4,98);


(lib.door_close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(1,0,1).p("AkmCbIEmAUIEnlJIkngUg");
	this.shape.setTransform(29.5,17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AkmCbIEmlJIEnAUIknFJg");
	this.shape_1.setTransform(29.5,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,61,37.1);


(lib.太空人 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYArIADgCQAZgWADgOQACgLgEgNQgFgPgMgGIgBgCQAAgCAGACQAIAEAMAMQAPAOgEAJQgPAhgVAJIgMAFIAAgBg");
	this.shape.setTransform(61.6,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgTAOIgBAAIAAgBIABABIABgBIACgBIABAAIAEgIIgFgBIgCgBIgBAAIgBgCIgBgDIABgDQABgEACgCIAAgCIACABIAJAFIASAGIAKABIAAABIgLAAIgLgBIgIgDIgHgEIgCADIgBACIAAACIABABIACABIAGACIAAAAIAAABIgEAJIgCAAIgCAAIgCABg");
	this.shape_1.setTransform(46.6,14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AgIAFQgDAAgCgCIgDgCIgCgBIAAgCIABgDIAAAAIAAAAQAAABAAABQgBAAAAABQAAAAABABQAAABAAAAIACAAIACABQADABAIAAIAVgBIAAAEIgLABg");
	this.shape_2.setTransform(48.6,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444444").s().p("AhOAMQAAgMAKgFIgGgEQgDgCgFAAIAGAKIAAAAIAAAAIgIgKIgBgBIABgBQAMAAAIAHIACACIgCABQgKADAAAJIAngIIAogDIAVAAIAKAAIALABIAVABQAMAEAGAGIAAAAQgHgGgMgCQgGgCgOAAIgqAAIhTAOg");
	this.shape_3.setTransform(55.4,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#444444").s().p("AAeAbIgBAAIgHgCIgHgDIgNgJIgEgGIgJgLIgCgFQgBAFACAIIAGARIABAEIgDgBQgJgFgGgGQgCAIgIADIgBAAIAAgBQAIgFABgIIAAgDIACACQAFAFAHAEIgFgNIgCgIQAAgHABgDIABgBIABAAIAEgBIABACIADAHIADAGIAIAKIAMAJIAHADIACABQgIgKgIgMIgHgNIgCgIIAAgEQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAIABAAQgBAAAAABQgBAAAAAAQAAAAgBABQAAAAAAABIAAAEIADAHIAIANQAIANAMAMIAAAAIAEADg");
	this.shape_4.setTransform(39.8,28.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444444").s().p("AAzAnIgPgDIgPgFIgOgIIgKgKIgFgGIgEgHIgDgDIgBABQgEACgEAAIgIgCQgEgCgDgDIgBgBIgCgCIAAgCIAAAAIgEgDIAAACIgDAEIgFABIgEABIAAgBIAAAAQAFgBADgCQAEgCgCgDIAAgBIAAAAIgDgHIAFAGIAGAEIABAAIABACQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIABACIAGADIAHACIADAAIgGgEIgEgDIgFgFIgBgDIAAgDQAAgDABgDIAIgIIACgCIABADIAFAPIAGAOIAIALIAFAGIAQAPIAHAEIAOAFIAIACIAHABIAIAAIAAABgAgggaIgBAEIABACIABACQABADAGADIAGAFIgFgMIgEgMIgFAFg");
	this.shape_5.setTransform(50.4,28.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#444444").s().p("AAHAbIgGgGIgNgTIgEgFQgCgDgBgFQgCgJADgHIAAAAIABAAQgDAIADAIIADAHIAEAEIARAUIABABQAIACAFACIAAABIgKgBIAAABIgBACg");
	this.shape_6.setTransform(29,25.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444444").s().p("AgPATIgGgCIgFgEQgEgDgCgIIAAAAIAEAGIADADIAGADIADABIAAABIABgBIgBAAIAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQAAAAgBAAIAAgDIgFgKQgDgBgBgGQAAgGADgEIACgCIAGAIIAFAFIALAHIAXAHIAIABIgIAAIgQgDIgIgDIgEgEIgOgIIgDgEQgBACABADQAAAEACADIAFAIIACAFIAAADQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAg");
	this.shape_7.setTransform(33.9,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#444444").s().p("AgUARIAKgTIABgFIgGABIgIADIgHADIgGAGIgBgBIAGgFIAHgGQAIgFAJgCIADAAIAAADIgBAFIgBAEIgIAPIgBABQAKgLALgJQAPgMARgKQgSANgMALQgKAJgPARIgEAFg");
	this.shape_8.setTransform(36.3,18.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444444").s().p("AgJAEIgEgCIgBgBIAAAAIAKgBIAEAAIAJgBIAFgDIABAAIAAABIgFADQgCABgIACIgEABIgBABIgEgBg");
	this.shape_9.setTransform(46.4,45.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#444444").s().p("AAAAEIAAgBIgBgCIgBgEIAAAAIABAAIABADIACAAIAAABIAAADIAAAAIgBAAIgBAAg");
	this.shape_10.setTransform(34.2,64.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#444444").s().p("AgLAkIgBAAIAAAAIgBACIABADIAFAFIgCAAIgEABIAAAAIADgCIABABIAAgBIgBAAIgEgCIgBgCIgBgDIACgEIACgBIACAAIADABIACABIAIAEIACABIgLgcIgEgMQgDgLABgPIACgMIADgHIADgFIAAAAIgDAGIgCAGIgBANQgBANAEAMQAEAMADAKIARAdg");
	this.shape_11.setTransform(36.4,58.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#444444").s().p("AgPAbIABAAQAHgEAFgHIACgDIAAgCIgCgBIgDAAIgIABIgDABIgEABIgGACIgBgBIgDAAIgEgDQgCgDABgDIABgBIAAAAQAEgCAGgBIAKgBQAJgCAHgDQARgIARgNQgPAPgSAHQgFAEgLACIgKACQgFABgDACIABACIACABIABABIABAAIABgBIADgBIAIgDIAJgBIAEABQACABABADQABACgCADIgBAEQgGAFgIADg");
	this.shape_12.setTransform(43,55.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#444444").s().p("AgTAXIACgCIAGgEIABAAIAAgBQABgDgBgHIgBgEIAJACIgKgJIACgDIAAgBIACAAQAIADAGAFIAHABIACAAIABAAIABAAQgRgIgRgOIAAgBIABAAQAPANAUAIIABAAIAAABQABABgDABIgDABIgCABIgJgDIgLgFIASARIgRgEIgBAIIAAABIAAAAIAAABIgBABIgCACQgDADgDAAg");
	this.shape_13.setTransform(35.6,70.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#444444").s().p("AgcAUIgCAAIgBgBIABAAIAJgGIABgBIABgCQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAIgDgGIAFAEIAJADIAAgDIgDgEIgIgMIAEgDIAAABIACABIALALIAIAHIABAAIgBgFIgKgQIAAgBIAAgBQADgCACABIADABIACACIAIAJQAIAHAKAFIAAABQgHgEgMgIIgIgIQgCgCgDgBIgBAAIAJARQADACAAAFIAAAAIgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAgBgBIgCgBIgEgCIgFgFIgBAAIACACIABAEQAAABAAAAQAAABAAABQgBAAAAABQAAAAAAABIgBABIgBgBIgJgDIgBADIgCACIgCACIgJAEIgBAAIAAAAIABAAIABABIABAAg");
	this.shape_14.setTransform(10.4,54.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#444444").s().p("AAEAPIgBAAIgDgDIgCgGIgCgGIAAgGQAAgEABgCQABgBAAAAQABgBAAAAQABAAAAgBQAAAAAAAAIABAAIABABIgCAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAABQgBABABAEIABAGIAFAPIgBABg");
	this.shape_15.setTransform(16,46.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#444444").s().p("AgIAzIAAgfIgCgHQgFADgEAFQgFAGgCAGIgCAGIgFgPQgHADgFAGIgFAGIgEAHIAAAAQAFgRAQgJIABgBIAEAIQACgFADgEQAGgHAHgEIACAAIABABQACAEABAHIAAAIIACgIIADgPIAHgMQAHgNANgMIANgKIAOgHIAAAAIAAABIgOAHQgHAFgFAFIgKAMIgJANQgKAUgEAhIgBAFg");
	this.shape_16.setTransform(25.6,38.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#444444").s().p("Ag6AoIgEgCIAIgEIABAAIAAABQAFgBAGgEIANgLQAHgIAHgFIA8gnQAIgFAJgDIABABIAAABQgOAGgQAOIguApIgHAHQgKAIgHADQgDABgIABQgEAAgGgCg");
	this.shape_17.setTransform(27.3,48.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#444444").s().p("AgWBMIAAAAIAGgOIAQg+IAMg0QACgMAEgFIADgFIABgBIAAAAIABABIgDAGQgCAFgCAMIgMBTIgEANIgEAMIgGAIQgDAFgCACIgFADIgBABIAAABIgBgBg");
	this.shape_18.setTransform(33.9,53.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#444444").s().p("AgtAOIgDgBIgBgCIAAAAIgBgBIAAgBIAAAAIAAAAIADACIACABIADgBIABgBIAAgBIgCgDQgDgJAFgIIABgCIAXALIAVAEIAXADIAYgCIAAAAIAAAAIgYADIgYgBIgVgFIgRgFIgDgCQgDAHACAFIABAFIgBABIgBACIgDABg");
	this.shape_19.setTransform(41.6,43.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#444444").s().p("AAFAKIgDgBIgEgDIgEgDQgBgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABIAAABIgBgBQgEgCgBgCIACgEIABgBIAAgBIABgBIADgBIAEABIAFACQADAFAEAAQAHABAEgDIAAABQgEACgHAAIgFgBIgIgFIgDAAIgBABIgBAAIAAABIAAABIAAABIABACIACAAIAEAAIAJAGQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAIABACIgCABIgBAAIgBAAg");
	this.shape_20.setTransform(61.7,50.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#444444").s().p("AADAOIgIgGQgGgEgDgDIgGgHIgBgJIAAAAIAAAAIAAADIADAGIAGAGIAJAFIAQAIIAHABIACAAIAAABIgCABIgHAAQgEAAgGgCg");
	this.shape_21.setTransform(60.4,39.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#444444").s().p("AgEADIgDgBIADgCIADAAIABAAIAFgBIADgBIAAAAIgCACIgGACIAAABIgCAAIgCAAg");
	this.shape_22.setTransform(64,35.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#444444").s().p("AgPAKIAMgHIAMgFIAFgEIAAgCIgCgBIgBAAIgBAAIABAAIABgBIACABIACAEQgCACgEADIgLAHIgGACIgIACg");
	this.shape_23.setTransform(63.3,33.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#444444").s().p("AgRATIgCAAIgCgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIACgDIALgIIAJgJIAIgJIACgDIAAAAIgCADIgHAKQgCAFgHAFIgHAFIgCAEIgBACIACAAIADgCIATgOQAHgCAEgBIACAAIABgBIABABIgJADIgOANIgIAEIgFACg");
	this.shape_24.setTransform(62.5,31);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#444444").s().p("AADBmIgGgCIgOgEQgTgIgLgGQgGgDgGgGIgKgNQgHgKgIgSIgGgOQgBgDABgGIABgIIACgNIgBgIIABgIIAEgQIAIgOIAAAAIADgDIATgWIAHgFIAPgHIAIgCIAQgDIAPgBQAOAAASABIABAAIAAABQAOAJAMALIAGAGIAKANIAFAHIADAIIAAAIIAAARQgBARgCANIgBAAQACgMACgSIgBgRIgBgIIgDgHIgEgHIgFgHIgMgMQgOgNgLgGQgSgCgOABIgOABIgRADIgIACIgHADIgGAEIgNAKIgPAUIAAgBQgJARgDALIAAAIIABAIIgCAOIgBAHIAAAHIAHAOQAGAPAHANIAKAMQAGAGAGADQALAHARAHIAOAFQAIADAFgBIAYgTIgWAUIgCABIgDAAIgFAAg");
	this.shape_25.setTransform(57.5,21.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#444444").s().p("AgBA9QgKAAgLgEIAAAAIgBgBQgWgRgNgPIgOgUIgDgEIAAgFQABgEAEgHIATgkIADgFIAFgBIAKgBIAVgBQAUABASAFQAWAHANAOQAHAGAFALIACAEIABAGQAAAFgDADIgFAJIgGAJIgMARQgHAJgGAGQgKAJgKAAIgIAAIgKAAgAggg6IgKABIgFABIgDAEIgTAkIgFALIAAAFIADADIAPATIAkAfIATADQAIABAKgBQAIAAAJgIQAHgFAGgJIAMgQQAJgMACgFIADgHIgBgFIgCgEQgDgIgIgJQgMgNgWgGQgQgGgVgCg");
	this.shape_26.setTransform(57.4,23.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#444444").s().p("AgIA7IgNgDQgigagKgQQgJgNAAgBQgBgEAGgLQARgiAEgGQAKgJAsAHQA2AJAOAnQAEAJgNAOIgUAcQgNAQgNACIgMABIgPgCg");
	this.shape_27.setTransform(57.3,23.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#444444").s().p("AAKAwIgjgRIgmgqIgNgmQAEANAQAVQAOASAOAOQAPAQAnAIIAIAAQAKAAAGgCQAKgDAJAAIAJAFQgHADgKABIgPACIgHADg");
	this.shape_28.setTransform(41.2,37.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#444444").s().p("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");
	this.shape_29.setTransform(34.5,41.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgIGQQgOgKgGgKQgHgLgFgaQgIgoAHgKIATgcIAEgDQgBABgDgIQgDgIAAgDQgBgHAEgJIAFgIQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAgBIADgNIADgaIAPhbIAJglQAFgMgGAAQgNgCgBgDQgBAAAAAAQAAgBgBAAQgBAAAAAAQgBAAgBAAIgDABIgwAlIgPAJIgaAVQgHASgPAAQgIABgIgBIgHgBIgpATIgPAMIgKABIgOAMIgVAZIgiAXQgLAHgQgBQgSgBgFgKQgIgQAAgKQAAgPARgKQARgIAPgLIAegTIAKgJQgHgNAGgFIALgJIADgHIAEgZIAdgWIAOgIIAagCIAJgHIAugrIAugkIAIgIIAzgmIAKgOIAKgGIAGgCQAHgDAFgFIAJgJIghAFIgGACQgHACgDAFIgRASIgLABIABAGQABAHgCACIgFAFQgBABgBAAQAAABgBAAQAAAAAAgBQgBAAAAgBIgCgLIgFgHQgFgGAAAKIABATQgBAJgDgBQgDAAgBgCIgCgCIgCgKIgCABQgBAAAAABQAAAAAAAAQAAABAAABQAAAAAAABQAFANgBACIgBAEQgBABAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEgCIgBABQAAAEgEABIgFACIgFADIgFgKQgFgUABgGIAIgqQgBgEABgFIACgRQACgPAGgDQAGgDADgEIAFgJIAXgZIAFgHQAHgGAEABQAIABAIgDIA3gJIASgGIASgWIADgHIAIgHIAPAAQALgSgKgDIgSgDIACgZIAUgSQAVgSAEgCIAOgJIAfgIIAdADIBNA6QANAKAPASQASATABAHQACAJgJAmIABArQADAPgFAEQgGAEgHACIgQARIgIALIARAVIAQA3IgJCAIgCANQgEAPgEAGQgHAKgFAGIgMAlIgQAVIgBADQgCADgEADIgIAFQgBABAAAAQgBAAAAAAQgBAAAAAAQgBgBAAgBQgBgDACgGIACgGIADgGQAEgCACgJQACgGgBgFIgCgDQAAADgGgBIgFAAQgBAAAAgHIAGgaQgBgGgHgIQgLgMACgSQABgIgBgGIAAgKIACgUIgIgSIgJgwQAAgDgCgCQgEgCgFAKIgTAeIACAbIgSALIgPgGIgEgCQgEAAAAADQABAGgEAnQgFAqgDAJIgTArIgKATIgGARQgBAYgIAFQgJAGgEAFIgQAfQgGANgHAIIgMATQgEAEgBAKIAAAYIACASIgDALQgDAMgFAGQgJALgGAEQgGADgFAAQgEAAgGgEg");
	this.shape_30.setTransform(34.4,41.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgVF/QgTgYgDgdQgDgYAGgPQAIgMACgGQAEgSAAgKQAAgFAGgRIAFgQIAdigQAGgKgNgBQgEAAgKgEQgGgCgGAFIhIA5QgHAFgGAOIgMABQgMACgFADQgIAEgRABIg1AdQgZAcgHAEIgmAXQgIAGgKACQgUAEgJgRQgKgUABgKQABgIAIgGIBAgoQANgKACgLQABgGAHgHQAFgGgBgBQgBgCACgLIABgJIAcgcIAqgPIDOipIgjAGIgQAQQgQANgBAAQgBAAgBAGIgBAGIgJAFIgNgCIgEAHIgFAOIgGAGIgJAEQgEAOgFgJIgKgPQgFgJACgIIAThgIAUgPIAUgUQAAgCACgDQAGgFANgCQBKgMAKgFQAFgEAPgZIATgHQAMgBgDgKQgCgGgHgEIgGgCQgJgJADgLQABgHAIgHIAIgFIA5glQAMgFAVAEQAVADAXARQALAIAIAIIBLBGIgEAmIgFBMQgVALgIAMQgHALAFAKIAHAKQAIALABAEIALApIgDBPIgMBMIgSAdIgKAfIgXAeIgMAIQgHgKAHgIQAGgHAFgKQAFgMgEgDQgHgEgBgDQgDgEACgIQABgHgDgHIgGgPQgJgYADgbQABgMgEgSIgMg4IgEgEQgEgEgDAFIgQAgQgDAEABAXIgHAMIghgCIAAAoIgIAiQgJAjgDAGIgbA8QgEAOgMAVIgGAGQgHAIgCAEQgCAHgSAgIgIAMQgJAOAAAHIABAZQABATgCAHQgDAPgDAHQgHANgNADIgEAAQgLAAgRgUg");
	this.shape_31.setTransform(34.4,41.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.9,82.2);


// stage content:
(lib.astronaut_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.light();
	this.instance.setTransform(165.7,40.8,0.078,0.018,45,0,0,44.7,4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(213).to({_off:false},0).to({regX:44.9,regY:2.6,scaleX:1,scaleY:1,x:167.2,y:42.8},7).wait(11).to({regX:44.7,regY:4,scaleX:0.08,scaleY:0.02,x:165.7,y:40.8},4).wait(54));

	// UFO
	this.instance_1 = new lib.UFO();
	this.instance_1.setTransform(408.5,23.5,0.171,0.171,0,0,0,56,21.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(189).to({_off:false},0).to({regX:56.1,regY:21.2,scaleX:1,scaleY:1,x:206.5,y:36.5,alpha:1},17,cjs.Ease.get(1)).to({rotation:22.9,x:199.6},7,cjs.Ease.get(0.3)).wait(22).to({rotation:0,x:206.5},3).to({regY:21.3,scaleX:0.25,scaleY:0.25,x:50.2,y:21.9},11,cjs.Ease.get(1)).to({_off:true},1).wait(39));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkkCbIEllJIEkAWIkkFHg");
	mask.setTransform(52,20.7);

	// line(white)
	this.instance_2 = new lib.line();
	this.instance_2.setTransform(28.5,-71.9,1,1,0,0,0,16.8,89.2);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_2.cache(-2,-2,38,182);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-30,x:11,y:-39},35).to({regY:89.3,scaleX:1,scaleY:1,rotation:-3.1,x:35.8,y:-10.8},29).to({regY:89.1,scaleX:1,scaleY:0.71,rotation:0,x:39,y:19.6},26).to({regY:89.2,scaleY:1,rotation:17.9,x:51.7,y:12.7},37).to({scaleY:0.79,rotation:-12.1,x:63.5,y:47.6},63).to({regY:89.3,scaleY:1,rotation:-34.3,x:44.5,y:59.6},27).to({regY:89.2,scaleX:1,scaleY:0.75,rotation:-74.8,x:87.8,y:38.8,alpha:0},18).wait(54));

	// 圖層 8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A6YWBILD8mIAAgBIAIgSIEDo7IEelKIEpAZIAahHIVfihMAGjAwZg");
	mask_1.setTransform(95,137);

	// 太空人
	this.instance_3 = new lib.太空人();
	this.instance_3.setTransform(19.9,-0.1,0.601,0.601,-45,0,0,34.4,41.1);

	this.instance_3.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.65,scaleY:0.65,rotation:0,x:52.5,y:29.8},35).to({regY:41.2,scaleX:0.85,scaleY:0.85,rotation:-15,x:39.6,y:91.7},55).to({regY:41.1,scaleX:0.87,scaleY:0.87,rotation:-13.1,x:26.6,y:89.2},37).to({regX:34.5,scaleX:1,scaleY:1,rotation:0,x:75.6,y:128},63).to({rotation:-15,x:75.5},27).to({regX:34.6,regY:41,scaleX:0.12,scaleY:0.12,rotation:360,x:166.2,y:43.8,alpha:0},32,cjs.Ease.get(1)).wait(40));

	// line
	this.instance_4 = new lib.line();
	this.instance_4.setTransform(28.5,-71.9,1,1,0,0,0,16.8,89.2);

	this.instance_4.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-30,x:11,y:-39},35).to({regY:89.3,scaleX:1,scaleY:1,rotation:-3.1,x:35.8,y:-10.8},29).to({regY:89.1,scaleX:1,scaleY:0.71,rotation:0,x:39,y:19.6},26).to({regY:89.2,scaleY:1,rotation:17.9,x:51.7,y:12.7},37).to({scaleY:0.79,rotation:-12.1,x:63.5,y:47.6},63).to({regY:89.3,scaleY:1,rotation:-34.3,x:44.5,y:59.6},27).to({regY:89.2,scaleX:1,scaleY:0.75,rotation:-74.8,x:87.8,y:38.8,alpha:0},18).wait(54));

	// 圖層 14 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_75 = new cjs.Graphics().p("AkoCgIEolRIEpAaIknFJg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(75).to({graphics:mask_2_graphics_75,x:51.9,y:20.5}).wait(214));

	// moon
	this.instance_5 = new lib.moon();
	this.instance_5.setTransform(81.8,38.4,1,1,0,0,0,19.9,19.8);
	this.instance_5._off = true;

	this.instance_5.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(75).to({_off:false},0).to({rotation:-360,x:-1.2},174).wait(40));

	// 手把
	this.instance_6 = new lib.把手();
	this.instance_6.setTransform(44.9,18.8,1,1,0,0,0,1.9,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:1.8,scaleX:0.35,scaleY:0.67,rotation:45,x:59.9,y:28.5},8,cjs.Ease.get(0.5)).to({_off:true},1).wait(245).to({_off:false},0).to({regX:1.9,scaleX:1,scaleY:1,rotation:0,x:44.9,y:18.8},4).wait(31));

	// door_open
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(1,0,1).p("AkmCbIEmAUIEnlJIkngUg");
	this.shape.setTransform(52.2,20.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AklCbIEllJIEmAUIkmFJg");
	this.shape_1.setTransform(52.2,20.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#444444").ss(1,0,1).p("AkRCdIEbk+IEIgDIklFJg");
	this.shape_2.setTransform(54.3,21.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkQCdIEak+IEIgDIklFJg");
	this.shape_3.setTransform(54.3,21.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#444444").ss(1,0,1).p("Aj+CmIESk0IDrgXIkmFIg");
	this.shape_4.setTransform(56.2,21.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUiOIDrgXIklFIIjYADg");
	this.shape_5.setTransform(56.2,21.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#444444").ss(1,0,1).p("AjsCrIEJkrIDQgqIklFIg");
	this.shape_6.setTransform(57.9,22.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdiAIDQgqIklFIIi0ANg");
	this.shape_7.setTransform(57.9,22.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#444444").ss(1,0,1).p("AjdCwIEBkkIC6g7IklFJg");
	this.shape_8.setTransform(59.5,22.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAkh0IC6g7IklFJIiWAWg");
	this.shape_9.setTransform(59.5,22.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#444444").ss(1,0,1).p("AjPC0ID6keIClhJIklFJg");
	this.shape_10.setTransform(60.9,23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AArhqIClhJIklFJIh6Aeg");
	this.shape_11.setTransform(60.9,23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#444444").ss(1,0,1).p("AjDC3ID0kXICThWIklFIg");
	this.shape_12.setTransform(62,23.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAxhgICThWIklFIIhiAlg");
	this.shape_13.setTransform(62,23.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#444444").ss(1,0,1).p("Ai5C6IDvkTICEhgIklFIg");
	this.shape_14.setTransform(63,23.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA2hZICEhgIklFIIhOArg");
	this.shape_15.setTransform(63,23.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#444444").ss(1,0,1).p("AixC8IA+gvIEllJIh4Bqg");
	this.shape_16.setTransform(63.9,24.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA6hSIB4hpIklFIIg+Awg");
	this.shape_17.setTransform(63.9,24.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#444444").ss(1,0,1).p("ACwjCIleGF");
	this.shape_18.setTransform(64.1,24.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#444444").ss(1,0,1).p("AisDIID9kTIBch9IklFJg");
	this.shape_19.setTransform(64.3,25.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#444444").ss(1,0,1).p("AiqDOIEGkWIBPiFIklFIg");
	this.shape_20.setTransform(64.6,25.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#444444").ss(1,0,1).p("AioDTIEOkYIBDiNIklFIg");
	this.shape_21.setTransform(64.8,26.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#444444").ss(1,0,1).p("AimDYIEVkaIA4iVIklFIg");
	this.shape_22.setTransform(65,26.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#444444").ss(1,0,1).p("AikDdIEckcIAtidIklFJg");
	this.shape_23.setTransform(65.2,27.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#444444").ss(1,0,1).p("AiiDhIEikeIAjijIklFIg");
	this.shape_24.setTransform(65.3,27.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#444444").ss(1,0,1).p("AihDlIEokgIAbipIklFIg");
	this.shape_25.setTransform(65.5,28.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#444444").ss(1,0,1).p("AifDpIEukiIARivIklFJg");
	this.shape_26.setTransform(65.7,28.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#444444").ss(1,0,1).p("AieDtIEzkkIAKi1IklFJg");
	this.shape_27.setTransform(65.8,28.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#444444").ss(1,0,1).p("AicDwIE3klIACi6IklFJg");
	this.shape_28.setTransform(65.9,29.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#444444").ss(1,0,1).p("AieDyIE9klIgFi/IklFJg");
	this.shape_29.setTransform(66.3,29.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#444444").ss(1,0,1).p("AigD1IFAknIgKjCIklFJg");
	this.shape_30.setTransform(66.7,29.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#444444").ss(1,0,1).p("AihD3IAPilIEllIIAPDGg");
	this.shape_31.setTransform(67,30);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#444444").ss(1,0,1).p("AihDkIEmkgIAdinIklFJg");
	this.shape_32.setTransform(65.4,28);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#444444").ss(1,0,1).p("AipDQIEIkXIBLiIIklFJg");
	this.shape_33.setTransform(64.7,26.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#444444").ss(1,0,1).p("AjZCxID/kjIC0g+IklFIg");
	this.shape_34.setTransform(59.9,23);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAmhyIC0g+IklFIIiOAZg");
	this.shape_35.setTransform(59.9,23);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#444444").ss(1,0,1).p("Aj6CnIEQkzIDlgbIklFJg");
	this.shape_36.setTransform(56.6,22);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAWiLIDlgbIklFIIjQAFg");
	this.shape_37.setTransform(56.6,22);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#444444").ss(1,0,1).p("AkTCbIEck/IELAAIklFJg");
	this.shape_38.setTransform(54,21.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AkTCbIEck/IELABIklFIg");
	this.shape_39.setTransform(54,21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},229).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(31));

	// door_close
	this.instance_7 = new lib.door_close();
	this.instance_7.setTransform(52.2,20.8,1,1,0,0,0,29.5,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(289));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(237.8,82,95,57.3);

})(astronaut_ani = astronaut_ani||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var astronaut_ani, images, createjs, ss;