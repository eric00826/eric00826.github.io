(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 250,
	height: 175,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmbGfIAAs+IM3AAIAAM+g");
	this.shape.setTransform(41.2,41.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82.4,83.2);


(lib.txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 分離模式
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383838").s().p("AgEAPIgEgDIADgDQADAEACAAQAAAAAAAAQABgBABAAQAAAAAAAAQABgBAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIgBgDIgEgDQgEgBgBgCQgCgCAAgDQAAgDADgDQADgCABAAQAFAAAEAEIgDADQgDgDgDAAIgBABQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAIABADIADADQAEABACACQACACAAADQAAAEgDADQgCACgEAAIgEgBg");
	this.shape.setTransform(132.5,110.7,1.425,1.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#383838").s().p("AAGAWIgOgPIAAAPIgDAAIAAgrIADAAIAAAYIANgLIAHAAIgQANIARARg");
	this.shape_1.setTransform(129.1,109.8,1.425,1.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#383838").s().p("AgKAMQgFgFAAgHQAAgDACgEQADgEAEgCIAHgCIAGABIAFACIAEAEIgEACQgEgFgHAAQgEAAgEADQgEAEAAAEQAAAEACACQACADADACQADACACAAQAHAAAEgGIAEACQgCADgEADIgJABQgGAAgFgEg");
	this.shape_2.setTransform(123.8,110.7,1.425,1.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#383838").s().p("AgKALQgFgFAAgGQAAgFAEgFQAGgFAFAAQAHAAAFAFQAEAFAAAFQAAAHgEAEQgFAFgHAAQgGAAgEgFgAgHgHQgEADAAAEQAAADACADQABADADACQADACACAAQAEAAACgCIAFgFQABgDAAgDQAAgEgDgDQgEgEgFAAQgDAAgEAEg");
	this.shape_3.setTransform(118.1,110.7,1.425,1.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#383838").s().p("AAJAQIAAgVQAAgDgDgBQgCgCgDAAQgDAAgCACQgCACgCAFIAAASIgEAAIAAgeIAEAAIAAAFQACgDADgCQADgBABAAQAEAAADACQADABABAEQACADAAAFIAAAQg");
	this.shape_4.setTransform(112.8,110.6,1.425,1.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#383838").s().p("AAHAWIgPgPIAAAPIgDAAIAAgrIADAAIAAAYIAOgLIAFAAIgPANIARARg");
	this.shape_5.setTransform(108.3,109.8,1.425,1.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#383838").s().p("AgEAPIgEgDIADgDQADAEACAAQAAAAAAAAQABgBABAAQAAAAAAAAQABgBAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIgBgDIgEgDQgEgBgBgCQgCgCAAgDQAAgDADgDQADgCABAAQAFAAAEAEIgDADQgDgDgDAAIgBABQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAIABADIADADQAEABACACQACACAAADQAAAEgDADQgCACgEAAIgEgBg");
	this.shape_6.setTransform(129,105.1,1.425,1.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#383838").s().p("AAGAWIgOgPIAAAPIgDAAIAAgrIADAAIAAAYIANgLIAHAAIgQANIARARg");
	this.shape_7.setTransform(125.6,104.3,1.425,1.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#383838").s().p("AgKAMQgFgFAAgHQAAgDACgEQADgEAEgCIAHgCIAGABIAFACIAEAEIgEACQgEgFgHAAQgEAAgEADQgEAEAAAEQAAAEACACQACADADACQADACACAAQAHAAAEgGIAEACQgCADgEADIgJABQgGAAgFgEg");
	this.shape_8.setTransform(120.3,105.1,1.425,1.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#383838").s().p("AgKALQgFgFAAgGQAAgFAEgFQAGgFAFAAQAHAAAFAFQAEAFAAAFQAAAHgEAEQgFAFgHAAQgGAAgEgFgAgHgHQgEADAAAEQAAADACADQABADADACQADACACAAQAEAAACgCIAFgFQABgDAAgDQAAgEgDgDQgEgEgFAAQgDAAgEAEg");
	this.shape_9.setTransform(114.6,105.1,1.425,1.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#383838").s().p("AAJAQIAAgVQAAgDgDgBQgCgCgDAAQgDAAgCACQgCACgCAFIAAASIgEAAIAAgeIAEAAIAAAFQACgDADgCQADgBABAAQAEAAADACQADABABAEQACADAAAFIAAAQg");
	this.shape_10.setTransform(109.3,105.1,1.425,1.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#383838").s().p("AAHAWIgPgPIAAAPIgDAAIAAgrIADAAIAAAYIAOgLIAFAAIgPANIARARg");
	this.shape_11.setTransform(104.8,104.3,1.425,1.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#383838").s().p("AgBACIgBgCIABgBIABgBIACABIABABIgBACIgCABg");
	this.shape_12.setTransform(84.1,69.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#383838").s().p("AgHAQIAAgeIAFAAIAAAEIACgDQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAEACIgDADIgCgBIgDACQgBABgBAEIAAAUg");
	this.shape_13.setTransform(82.5,68);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#383838").s().p("AgLALQgEgEAAgHQAAgFAEgEQAEgGAHgBQAHABAGAGQADAFAAAEIgbAAQAAAEADAFQAEAEAEAAIAEgBIAEgDIAEgEIADACIgEAFIgFAEIgGABQgGAAgFgGgAgHgJIgEAIIAXAAIgDgGIgEgDIgFgBQgDAAgEACg");
	this.shape_14.setTransform(79.4,68.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#383838").s().p("AATAQIAAgQIgBgGQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgDACQgDACgBADQgBACgBAGIAAAMIgBAAIgBgWIgDgEQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGACIgDAFQgBABAAAGIAAANIgFAAIAAgeIAFAAIAAAFIAEgEIAHgCIAFABIACACQABACAAADIAFgGQAEgCADAAQACAAADACQADABACADQABADAAAGIAAAQg");
	this.shape_15.setTransform(74.6,68);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#383838").s().p("AgGAOQgEgBgBgEQgBgEgBgFIAAgPIAFAAIAAAUQABAEACABQADACACAAQADAAACgBIAEgFIABgGIAAgPIADAAIAAAPQAAAGgBADQgCADgCACQgDACgFAAQgDAAgDgCg");
	this.shape_16.setTransform(69.9,68.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#383838").s().p("AgEAPIgEgDIACgDQAEAEACAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIgBgDIgEgEQgEAAgBgCQgCgCAAgDQAAgEADgCQACgCACgBQAEABAFAEIgDADQgDgEgDABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAABgBAAIgBADIABADIADAEIAGACIACAFQAAAFgDACQgDADgDAAIgEgCg");
	this.shape_17.setTransform(66.9,68.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#383838").s().p("AAJAQIAAgUQgBgEgCgCQgCgBgDAAQgBAAgEACQgEADAAADIAAATIgFAAIAAgeIAFAAIAAAGQABgDAEgCQADgCACAAIAGACQACACACADQACADgBAFIAAAQg");
	this.shape_18.setTransform(64,68);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#383838").s().p("AgKALQgFgEAAgHQAAgEAEgGQAGgFAFgBQAHABAFAFQAEAGAAAEQAAAHgEAEQgFAGgHAAQgGAAgEgGgAgHgIQgEAEAAAEQAAADACADQACAEACABQADACACAAQAEAAACgCIAFgFQABgDAAgDQAAgEgEgEQgDgDgFAAQgDAAgEADg");
	this.shape_19.setTransform(60.1,68.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#383838").s().p("AgKALQgFgFAAgGQAAgCACgFQADgEAEgCQAEgCADgBIAHABIAEADIAEAEIgEACQgEgGgHABQgDAAgFADQgEAEABAEQAAADABADIAFAFQADACACAAQAHAAAEgGIAEACQgCADgFADQgDABgFABQgGAAgFgGg");
	this.shape_20.setTransform(56.2,68.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#383838").s().p("AgHAVIAHgOIgOgcIAFAAIAJAXIAKgXIAFAAIgRAqg");
	this.shape_21.setTransform(50.9,68.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#383838").s().p("AgHAQIAAgeIAFAAIAAAEIACgDIAEgCQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABIgCADIgDgBIgDACIgBAFIgBAJIAAALg");
	this.shape_22.setTransform(48.6,68);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#383838").s().p("AgLALQgEgEAAgHQAAgEAEgFQAEgGAHgBQAHABAFAGQAEAEAAAFIgbAAQAAAFAEAEQADAEAEAAIAEgBIAEgDIADgEIAEACQgBAEgDABIgFAEIgGABQgFAAgGgGgAgGgJQgDADgCAFIAWAAIgBgGIgFgDQgCgBgDAAQgDAAgDACg");
	this.shape_23.setTransform(45.5,68.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#383838").s().p("AAAAQIgOgfIAFAAIAJAWIAKgWIAFAAIgPAfg");
	this.shape_24.setTransform(41.9,68.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#383838").s().p("AgKALQgFgEAAgHQAAgFAEgEQAFgGAGgBQAHABAGAGQADAEAAAFIgbAAQAAAEADAFQAEAEAEAAIAEgBIAEgDIADgEIAEACQgCAEgCABIgFAEIgGABQgFAAgFgGgAgHgJQgBACgCAGIAVAAIgCgGIgEgDIgFgBQgEAAgDACg");
	this.shape_25.setTransform(38.3,68.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#383838").s().p("AgKALQgFgEAAgHQAAgEAEgGQAGgFAFgBQAHABAFAFQAEAGAAAEQAAAHgEAEQgFAGgHAAQgGAAgEgGgAgHgIQgEAEAAAEQAAADACADQACAEACABQADACACAAIAGgCQACgBACgEQACgDAAgDQAAgEgEgEQgEgDgEAAQgDAAgEADg");
	this.shape_26.setTransform(32.6,68.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#383838").s().p("AgBAWIAAgbIgGAAIAAgEIAGAAIAAgMIACAAIAAAMIAHAAIAAAEIgHAAIAAAbg");
	this.shape_27.setTransform(29.7,67.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#383838").s().p("AgGAQIAAgeIADAAIAAAEIADgDIAEgCIAEACIgDADIgCgBIgDACIgCAFQgBACAAAHIAAALg");
	this.shape_28.setTransform(26.3,68);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#383838").s().p("AgKALQgFgFAAgGQAAgEAEgGQAGgFAFgBQAHABAFAFQAEAGAAAEQAAAHgEAEQgFAGgHAAQgGAAgEgGgAgHgIQgEAEAAAEQAAADACADQACAEACABQADACACAAQADAAADgCIAFgFQABgDAAgDQAAgEgDgEQgEgDgFAAQgDAAgEADg");
	this.shape_29.setTransform(23.1,68.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#383838").s().p("AgKALQgFgEAAgHQAAgEAEgGQAGgFAFgBQAHABAFAFQAEAGAAAEQAAAHgEAEQgFAGgHAAQgGAAgEgGgAgHgIQgEAEAAAEQAAADACADQACAEACABQADACACAAQAEAAACgCIAFgFQABgDAAgDQAAgDgDgFQgEgDgFAAQgDAAgEADg");
	this.shape_30.setTransform(19.2,68.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#383838").s().p("AgKARQgFgFAAgHQAAgFAFgFQAFgFAFAAQACAAAEACQADABADAEIAAgSIAEAAIAAAqIgEAAIAAgFIgGAFQgDABgDAAQgGAAgEgFgAgFgEQgDACgBACIgCAFIACAHQACADACACQADABACAAQADAAADgBQADgBACgEQABgDAAgEQAAgFgDgCQgEgEgFAAIgFACg");
	this.shape_31.setTransform(15.1,67.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#383838").s().p("AAAAWIAAgrIABAAIAAArg");
	this.shape_32.setTransform(10.8,67.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#383838").s().p("AgLALQgEgEAAgHQAAgFAEgFQAGgGAFAAQACAAAEACQAEADACACIAAgGIAEAAIAAAfIgEAAIAAgGQgDADgDACIgGACQgGAAgFgGgAgFgJQgDABgBADQgCADAAACQAAADACADQACAEACABQADACACAAIAGgCQADgBACgDQABgEAAgDQAAgEgDgEQgEgDgFAAIgFACg");
	this.shape_33.setTransform(8.1,68.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#383838").s().p("AgBAWIAAgbIgFAAIAAgEIAFAAIAAgMIACAAIAAAMIAHAAIAAAEIgHAAIAAAbg");
	this.shape_34.setTransform(5.1,67.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#383838").s().p("AgBAWIAAgeIADAAIAAAegAgBgQIgBgCIABgCIABgBIACABIABACIgBACIgCABIgBgBg");
	this.shape_35.setTransform(3.4,67.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#383838").s().p("AgGAVIgFgDIgEgGIAFAAQACAEACABQADACADAAQAEAAADgCIAEgEQABgCAAgGIAAgBIgGAEQgDACgDAAQgEAAgDgCQgEgCgCgEQgCgCAAgEQAAgFACgEQACgEAEgCQAEgCADAAIAGABIAGAFIAAgFIAEAAIAAAXQAAAHgBADQgCAFgEACQgDACgGAAIgGgBgAgFgPQgDABgBADQgCADAAAEQAAAEADADQAEADAEAAQAFAAAEgDQADgDAAgEQAAgEgBgDQgCgDgDgBQgCgCgEAAIgFACg");
	this.shape_36.setTransform(0.7,68.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#383838").s().p("AgBAWIAAgeIADAAIAAAegAgBgQIgBgCIABgCIABgBIACABIABACIgBACIgCABIgBgBg");
	this.shape_37.setTransform(-1.8,67.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#383838").s().p("AgKARQgFgFAAgHQAAgFAFgFQAGgFAEAAQACAAAFACQADACACADIAAgSIAEAAIAAAqIgEAAIAAgFQgCADgDACQgEABgDAAQgFAAgFgFgAgFgEIgEAEQgCACAAADQAAAEACADIAEAFIAFABQADAAADgBIAFgFQABgDAAgEQAAgFgDgCQgEgEgFAAIgFACg");
	this.shape_38.setTransform(-4.6,67.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#383838").s().p("AgHAVIAHgOIgOgcIAFAAIAJAXIAKgXIAFAAIgRAqg");
	this.shape_39.setTransform(-9.9,68.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#383838").s().p("AAKAQIgBgUIgCgGQgDgBgDAAQgBAAgEACQgDADAAADIgBATIgFAAIAAgeIAFAAIAAAGQACgDADgCQADgCACAAIAHACQACACABADQABACAAAGIAAAQg");
	this.shape_40.setTransform(-13.3,68);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#383838").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgGAFAAIAHACQADADACACIAAgGIAEAAIAAAfIgEAAIAAgGIgGAFQgDABgDABQgGAAgEgGgAgFgJQgDABgBADIgCAFIACAGQACAEACABQADACACAAQADAAADgCQADgBACgDQABgEAAgDQAAgEgDgEQgEgDgFAAIgFACg");
	this.shape_41.setTransform(-17.3,68.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#383838").s().p("AAKAQIgBgVQgBgDgCgBQgCgCgDAAQgCAAgDADQgCABgCAFIAAASIgFAAIAAgeIAFAAIAAAGQACgDADgCIAEgCIAHACIAEAFQABADAAAFIAAAQg");
	this.shape_42.setTransform(91.2,60.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#383838").s().p("AgLAMQgEgFAAgHQAAgEAEgFQAFgHAGABQAHgBAFAHQADAEABAFIgbAAQAAAGAEADQADADAEAAIAEAAIAEgCQACgBABgEIAEACIgEAFIgFADIgGABQgGAAgFgEgAgHgJQgDAEAAADIAVAAIgCgFIgEgDQgCgBgDgBQgDAAgEADg");
	this.shape_43.setTransform(87.3,60.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#383838").s().p("AgPAWIAAgqIAEAAIAAAGQADgEADgBQAEgCABAAQAGAAAFAFQAFAFAAAHQAAAFgFAFQgEAFgHAAQgCAAgDgBIgGgGIAAASgAgIgNQgDAEAAAFQAAAEABABQACADADABIAFACQADAAADgCQACgBACgDIACgFIgCgHQgBgDgDgBIgGgCQgEAAgEAEg");
	this.shape_44.setTransform(83.4,61.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#383838").s().p("AgLAMQgEgFAAgHQAAgFAEgFQAFgGAGABQAGgBAGAGQAEAFAAAFQAAAHgFAFQgEAEgHAAQgGAAgFgEgAgHgHQgEAEAAADQAAAEACACQABAEADABIAFABQADAAADgBQADgBABgEQACgDAAgDQAAgEgEgDQgDgEgFAAQgEAAgDAEg");
	this.shape_45.setTransform(79.3,60.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#383838").s().p("AgKAMQgFgFAAgHQAAgFAEgFQAGgGAFABQAHgBAFAGQAEAFAAAFQAAAHgEAFQgFAEgHAAQgGAAgEgEgAgHgHQgEADAAAEQAAADACADQABAEADABQADABACAAQAEAAACgBQADgBABgEQACgCAAgEQAAgDgEgEQgDgEgFAAQgEAAgDAEg");
	this.shape_46.setTransform(73.6,60.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#383838").s().p("AgBAVIAAgaIgGAAIAAgDIAGAAIAAgNIACAAIAAANIAHAAIAAADIgHAAIAAAag");
	this.shape_47.setTransform(70.7,60.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#383838").s().p("AgKARQgFgFAAgHQAAgFAFgFQAFgFAFAAQACAAAEACQAEACACADIAAgSIAEAAIAAAqIgEAAIAAgFQgDADgDACQgDABgDAAQgGAAgEgFgAgEgEIgGAEQgBACAAADQAAAEABADIAGAFIAEABQADAAADgBIAFgFQACgDAAgDQAAgGgFgCQgCgEgGAAIgEACg");
	this.shape_48.setTransform(65.8,60.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#383838").s().p("AAJAQIAAgVQgBgDgCgBQgCgCgEAAQgBAAgDADQgEACAAAEIAAASIgFAAIAAgeIAFAAIAAAGQACgDADgCIAEgCIAHACIAEAFQACADAAAFIAAAQg");
	this.shape_49.setTransform(62,60.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#383838").s().p("AgKAMQgFgFAAgHQAAgEAFgHQAGgEAEAAIAHACQADABACADIAAgFIAEAAIAAAdIgEAAIAAgFQgDADgDACQgDABgDAAQgGAAgEgEgAgFgKQgDACgBADQgCADAAACQAAADACADQABADADACQADABACAAQADAAADgBQADgBACgEQABgDAAgDQAAgEgDgDQgEgFgFAAIgFACg");
	this.shape_50.setTransform(58,60.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#383838").s().p("AgGAQIAAgeIADAAIAAAFIADgFIAEgBQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAIgCAEIgCgBIgDACQgBABgBAEIgBAKIAAAKg");
	this.shape_51.setTransform(55.3,60.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#383838").s().p("AgGAVIgFgGIAAAGIgEAAIAAgqIAEAAIAAASIAGgFQAEgCABAAQAGAAAFAFQAFAFAAAFQAAAIgFAEQgEAFgHAAIgGgBgAgFgEIgFAEQgBACAAADQAAAGADADQAEAEAEAAQADAAADgBIAEgFQACgDAAgEQAAgDgCgCIgEgEQgDgCgDAAQgCAAgDACg");
	this.shape_52.setTransform(52.2,60.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#383838").s().p("AgHAQIAAgeIAFAAIAAAFIACgFIAEgBIADABIgBAEIgDgBIgDACIgBAFIgBAKIAAAKg");
	this.shape_53.setTransform(47.7,60.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#383838").s().p("AgGAOQgDgBgCgEQgBgEgBgFIAAgPIAFAAIAAAPIABAGQABADABABQADACACAAQADAAACgCIAEgEIABgVIADAAIAAAPQAAAFgBAEQgCADgCACQgDACgFAAQgDAAgDgCg");
	this.shape_54.setTransform(44.7,60.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#383838").s().p("AgLAMQgEgFAAgHQAAgFAEgFQAFgGAGABQAHgBAFAGQAEAFAAAFQAAAHgEAFQgFAEgHAAQgGAAgFgEgAgHgHQgEAEAAADIACAGQABAEADABQADABACAAIAGgBQADgBABgEIACgGQAAgDgEgEQgDgEgFAAQgEAAgDAEg");
	this.shape_55.setTransform(40.9,60.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#383838").s().p("AgHAWIAGgPIgNgbIAEAAIAKAXIAKgXIAFAAIgSAqg");
	this.shape_56.setTransform(37.4,61.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#383838").s().p("AgGAQIAAgeIADAAIAAAFIADgFIAEgBIAEABIgDAEIgCgBIgDACIgCAFQgBACAAAIIAAAKg");
	this.shape_57.setTransform(33.4,60.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#383838").s().p("AgKAMQgFgHAAgFQAAgFAEgFQAGgGAFABQAHgBAFAGQAEAFAAAFQAAAHgEAFQgFAEgHAAQgGAAgEgEgAgHgHQgEADAAAEQAAADACADQABAEADABQADABACAAQADAAADgBIAFgFQABgDAAgDQAAgEgDgDQgEgEgFAAQgEAAgDAEg");
	this.shape_58.setTransform(30.2,60.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#383838").s().p("AgCAWIAAgaIgEAAIAAgEIAEAAIABgKIABgCIACgBIAFABIAAADIgEgBIgCABIgBABIAAAIIAHAAIAAAEIgHAAIAAAag");
	this.shape_59.setTransform(27.4,60.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#383838").s().p("AgEAPIgEgDIACgDQAEADACAAQAAAAAAAAQABAAABAAQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIgBgDIgEgDQgEgBgBgCQgCgCAAgDQAAgCADgEQACgCACAAQAFgBAEAFIgDADQgDgDgDgBQAAAAAAABQAAAAAAAAQgBAAAAAAQAAABgBAAIgBADIABADIADADIAGADQACACAAADQAAAEgDACQgDADgDAAg");
	this.shape_60.setTransform(23.5,60.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#383838").s().p("AAGAWIgNgPIAAAPIgFAAIAAgrIAFAAIAAAYIAMgLIAHAAIgQANIAQARg");
	this.shape_61.setTransform(21.1,60.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#383838").s().p("AgKAMQgFgFAAgHQAAgDACgEQACgDAFgDQAFgCACAAIAGABIAFACIAEAEIgEADQgDgHgIAAQgEAAgEAFQgEADAAAEQAAAEACACQACADADACQADABACAAQAHAAAEgFIAEACQgDAEgDABQgEACgFAAQgGAAgFgEg");
	this.shape_62.setTransform(17.4,60.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#383838").s().p("AgKAMQgFgFAAgHQAAgFAEgFQAGgGAFABQAHgBAFAGQAEAFAAAFQAAAHgEAFQgFAEgHAAQgGAAgEgEgAgHgHQgEADAAAEQAAADACADQABAEADABQADABACAAQAEAAACgBIAFgFQABgDAAgDQAAgDgDgEQgEgEgFAAQgEAAgDAEg");
	this.shape_63.setTransform(13.4,60.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#383838").s().p("AAJAQIAAgVQgBgDgCgBQgCgCgDAAQgCAAgDADQgCABgCAFIgBASIgDAAIAAgeIADAAIAAAGQACgDAEgCIAFgCIAGACIAEAFQABADABAFIAAAQg");
	this.shape_64.setTransform(9.7,60.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#383838").s().p("AAHAWIgPgPIAAAPIgDAAIAAgrIADAAIAAAYIAOgLIAGAAIgQANIARARg");
	this.shape_65.setTransform(6.5,60.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#383838").s().p("AgBACIgBgCIABgBIABgBIACABIABABIgBACIgCABg");
	this.shape_66.setTransform(2.3,62.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#383838").s().p("AgOAPQgGgGAAgJQAAgIAHgHQAIgGAHAAQAGAAAFACQAEACAEAFIgEADQgCgEgEgCQgEgCgFAAQgDAAgFADQgDABgEAFQgCAEAAAEQAAAIAGAFQAFAFAGAAQAKAAAFgHIAEADQgDAEgFACQgEACgHAAQgKAAgGgHg");
	this.shape_67.setTransform(-1.1,60.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#383838").s().p("AgBACIgBgCIABgBIABgBIACABIABABIgBACIgCABg");
	this.shape_68.setTransform(-4.2,62.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#383838").s().p("AAIAVIgRgUIAAAUIgEAAIAAgpIAEAAIAAAQIAQgQIAGAAIgUATIAVAWg");
	this.shape_69.setTransform(-6.7,60.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#383838").s().p("AgBACIgBgCIABgBIABgBIACABIABABIgBACIgCABg");
	this.shape_70.setTransform(-9.5,62.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#383838").s().p("AAJAVIgRgUIAAAUIgFAAIAAgpIAFAAIAAAQIAPgQIAFAAIgSATIAUAWg");
	this.shape_71.setTransform(-12,60.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#383838").s().p("AgDAFIADgKIAEACIgEAJg");
	this.shape_72.setTransform(67.2,55);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#383838").s().p("AgHAVIAGgOIgNgcIAEAAIAKAYIAKgYIAFAAIgSAqg");
	this.shape_73.setTransform(64.8,54.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#383838").s().p("AgBAWIAAgbIgFAAIAAgEIAFAAIAAgLIACAAIAAALIAHAAIAAAEIgHAAIAAAbg");
	this.shape_74.setTransform(62.2,53);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#383838").s().p("AgBAWIAAgeIADAAIAAAegAgBgPIgBgCQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIABgBIACABIABADIgBACIgCAAIgBAAg");
	this.shape_75.setTransform(60.5,52.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#383838").s().p("AAAAQIgOgfIAFAAIAJAWIAKgWIAEAAIgOAfg");
	this.shape_76.setTransform(58.2,53.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#383838").s().p("AgBAWIAAgeIACAAIAAAegAgBgPIgBgCIABgDIABgBIACABIABADIgBACIgCAAIgBAAg");
	this.shape_77.setTransform(55.9,52.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#383838").s().p("AgBAWIAAgbIgGAAIAAgEIAGAAIAAgLIACAAIAAALIAHAAIAAAEIgHAAIAAAbg");
	this.shape_78.setTransform(54.3,53);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#383838").s().p("AgKALQgFgEAAgHQAAgGAFgFQAEgEAGAAQADAAAEABQADACACADIAAgGIAEAAIAAAeIgEAAIAAgFQgCADgEACQgDABgDAAQgGAAgEgFgAgFgKQgDACgBADQgCADAAACQAAADACADQACADACACQADABACAAQADAAADgBQADgCACgDQABgDAAgDQAAgEgDgEQgEgDgFAAQgCAAgDABg");
	this.shape_79.setTransform(51.1,53.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#383838").s().p("AgLALQgEgFAAgGQAAgEAEgFQAEgGAHAAQAIAAAFAGQADAFAAAEIgbAAQAAAFAEAEQADADAEAAIAEAAIAEgDIAEgEIADACIgEAFIgFADIgGABQgGAAgFgFgAgHgIQgCACgBAEIAWAAIgDgFIgEgDQgCgCgDAAQgDAAgEAEg");
	this.shape_80.setTransform(47.2,53.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#383838").s().p("AgGAQIAAgeIAEAAIAAAFIACgFIAEgBIADABIgCAEIgBgBQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAABQgBABgBAEIAAAUg");
	this.shape_81.setTransform(44.5,53.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#383838").s().p("AgKALQgFgEAAgHQAAgCADgFQACgEAEgCQAEgCADAAIAGAAIAFADQADACABACIgDACQgFgGgHAAQgEAAgEAEQgEAEAAAEIACAGQACADADACQADABACAAQAIAAAEgFIADACQgDAEgDABQgEACgFAAQgGAAgFgFg");
	this.shape_82.setTransform(41.4,53.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#383838").s().p("AgKARQgFgEAAgIQAAgFAFgFQAEgEAGAAQADAAAEABQADACACADIAAgSIAEAAIAAAqIgEAAIAAgFQgCADgEACQgDABgDAAQgGAAgEgFgAgFgEQgDACgBACIgCAFIACAHQACADACACQADABACAAQADAAADgBQADgCACgDQABgDAAgDQAAgGgDgCQgEgDgFAAQgCAAgDABg");
	this.shape_83.setTransform(35.7,53);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#383838").s().p("AAJAQIAAgVIgCgFQgCgBgEAAQgCAAgDACQgCADgBADIgBAHIAAAMIgFAAIAAgeIAFAAIAAAGIAFgFQADgCACAAQAEAAACACIAEAFIACAIIAAAQg");
	this.shape_84.setTransform(31.9,53.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#383838").s().p("AgLALQgEgEAAgHQAAgGAFgFQAEgEAGAAQADAAADABIAGAFIAAgGIAEAAIAAAeIgEAAIAAgFQgCADgEACQgDABgDAAQgGAAgFgFgAgFgKQgDACgBADQgCACAAADQAAADACADQACADACACQADABACAAIAGgBQADgCACgDQABgDAAgDQAAgEgDgEQgEgDgFAAQgCAAgDABg");
	this.shape_85.setTransform(27.9,53.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#383838").s().p("AAJAQIgBgVIgCgFQgCgBgEAAQgBAAgDACQgDADgBADIAAATIgFAAIAAgeIAFAAIAAAGQACgDADgCQADgCABAAQAEAAADACIAEAFQACADAAAFIAAAQg");
	this.shape_86.setTransform(22.4,53.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#383838").s().p("AgKALQgFgGAAgFQAAgFAEgFQAFgFAGAAQAHAAAFAFQAEAFAAAFQAAAGgEAFQgFAFgHAAQgGAAgEgFgAgHgIQgEAEAAAEQAAADACADQABADADACQADABACAAQAEAAACgBIAFgFQABgDAAgDQAAgDgDgFQgEgDgFAAQgEAAgDADg");
	this.shape_87.setTransform(18.5,53.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#383838").s().p("AgBAWIAAgeIADAAIAAAegAgBgPIgBgCIABgDIABgBIACABIABADIgBACIgCAAIgBAAg");
	this.shape_88.setTransform(16,52.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#383838").s().p("AgEAPIgEgDIADgDQADADACAAQAAAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAgBAAAAIgBgDIgEgEIgFgCQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgDADgDQACgCACAAQAFAAAEAEIgDADQgDgEgDAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAABIgCADIABADIADADIAHADIABAFQAAAEgDADQgCACgEAAg");
	this.shape_89.setTransform(14.1,53.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#383838").s().p("AgEAPIgEgDIACgDQADADADAAQAAAAAAAAQABAAAAAAQABAAAAgBQABAAABAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAgBAAAAIgBgDIgEgEIgFgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgDADgDQACgCACAAQAFAAAEAEIgDADQgDgEgDAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAABIgCADIABADIADADIAGADIACAFQAAAEgDADQgDACgDAAg");
	this.shape_90.setTransform(11.8,53.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#383838").s().p("AgKALQgFgEAAgHQAAgGAFgFQAEgEAGAAQADAAAEABQADACACADIAAgGIAEAAIAAAeIgEAAIAAgFQgDAEgDABQgDABgDAAQgGAAgEgFgAgFgKQgDACgBADQgCADAAACQAAADACADQACADACACQADABACAAQADAAADgBQADgCACgDQABgDAAgDQAAgEgDgEQgEgDgFAAQgCAAgDABg");
	this.shape_91.setTransform(8.5,53.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#383838").s().p("AgPAWIAAgqIAEAAIAAAGQACgEADgBIAGgCQAGAAAFAFQAFAGAAAGQAAAFgFAFQgEAFgHAAQgCAAgDgCQgDgBgDgEIAAASgAgIgNQgEAEAAAFIACAFQACADADABQADACACAAQADAAACgCIAFgFQACgBAAgDQAAgEgCgDIgEgEQgDgCgDAAQgEAAgEAEg");
	this.shape_92.setTransform(4.6,54.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#383838").s().p("AAJAWIgBgWIgCgEQgCgBgDAAQgBAAgEACQgDADgBABIgBAVIgDAAIAAgrIADAAIAAATQACgDAEgCQADgCACAAQADAAADACIAEAFQABACABAFIAAARg");
	this.shape_93.setTransform(-1,52.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#383838").s().p("AgBAWIAAgbIgFAAIAAgEIAFAAIAAgLIACAAIAAALIAHAAIAAAEIgHAAIAAAbg");
	this.shape_94.setTransform(-3.9,53);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#383838").s().p("AgBAWIAAgeIADAAIAAAegAgBgPIgBgCIABgDIABgBIACABIABADIgBACIgCAAIgBAAg");
	this.shape_95.setTransform(-5.6,52.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#383838").s().p("AAMAVIgMgeIgMAeIAAAAIgNgpIAFAAIAJAdIALgdIAAAAIAMAdIAJgdIAFAAIgNApg");
	this.shape_96.setTransform(-9.1,53);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#383838").s().p("AgBACIgBgCIABgBIABgBIACABIABABIgBACIgCABg");
	this.shape_97.setTransform(77,40.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#383838").s().p("AgLALQgEgFAAgGQAAgEAEgFQAFgGAGAAQAIAAAFAGQADAEAAAFIgbAAQABAGADADQADAEAEAAIAEgBIAEgDIAEgEIADACIgEAFIgFADIgGABQgGAAgFgFgAgGgIQgEADAAADIAWAAIgCgFIgFgDIgFgBQgDAAgDADg");
	this.shape_98.setTransform(74.1,39.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#383838").s().p("AgKALQgFgFAAgGQAAgDADgEQACgEAEgCQAEgCADAAIAGABIAFACQADACABACIgDACQgFgGgHAAQgEAAgEAEQgDAEAAAEIABAGIAFAFQAEACABAAQAHAAAFgGIADACQgDAEgDABQgEACgFAAQgGAAgFgFg");
	this.shape_99.setTransform(70.2,39.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#383838").s().p("AAJAQIgBgVIgCgFQgCgBgDAAQgBAAgEACQgDAEgBADIgBASIgDAAIAAgeIADAAIAAAGQACgDAEgCQADgCACAAQADAAADACIAEAFQABADAAAFIAAAQg");
	this.shape_100.setTransform(66.5,39);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#383838").s().p("AgLALQgEgFAAgGQAAgFADgEQAGgGAGAAQAIAAAEAGQAEAEAAAFIgbAAQABAGADADQADAEAEAAIAEgBIAEgDIADgEIAEACIgEAFIgFADIgGABQgGAAgFgFgAgGgIQgDACgCAEIAWAAIgCgFIgEgDIgFgBQgEAAgCADg");
	this.shape_101.setTransform(62.6,39.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#383838").s().p("AgBAWIAAgeIADAAIAAAegAgBgPIgBgCIABgDIABgBIACABIABADIgBACIgCABg");
	this.shape_102.setTransform(60.1,38.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#383838").s().p("AgHAQIAAgeIAFAAIAAAFIACgFIAEgBIAEABIgCAEIgDgBIgDACIgCAFIAAAUg");
	this.shape_103.setTransform(58.7,39);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#383838").s().p("AgLALQgEgFAAgGQAAgFADgEQAGgGAGAAQAIAAAFAGQADAEAAAFIgbAAQABAGADADQADAEAEAAIAEgBIAEgDIAEgEIADACIgEAFIgFADIgGABQgGAAgFgFgAgGgIQgDACgCAEIAXAAIgDgFIgEgDIgFgBQgDAAgDADg");
	this.shape_104.setTransform(55.7,39.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#383838").s().p("AgPAWIAAgqIAEAAIAAAGQACgEADgBIAGgCQAGAAAFAFQAFAFAAAHQAAAFgFAFQgEAFgHAAQgCAAgDgCQgEgBgCgEIAAASgAgIgNQgEAEAAAFIACAFQACADADABIAFACQACAAADgCQADgBACgEQACgBAAgDIgCgGQgCgEgCgBQgDgCgDAAQgEAAgEAEg");
	this.shape_105.setTransform(51.7,39.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#383838").s().p("AAJAQIgJgOIgIAOIgFAAIAMgQIgLgPIAFAAIAHAMIAIgMIAFAAIgLAPIAMAQg");
	this.shape_106.setTransform(48.1,39.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#383838").s().p("AgLALQgEgFAAgGQAAgEAEgFQAEgGAHAAQAIAAAEAGQAEAEAAAFIgbAAQAAAGAEADQADAEAEAAIAEgBIAEgDIADgEIAEACIgEAFIgFADIgGABQgGAAgFgFgAgGgIIgFAGIAWAAIgCgFIgEgDIgFgBQgEAAgCADg");
	this.shape_107.setTransform(44.7,39.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#383838").s().p("AAJAQIAAgVQAAgCgDgDQgCgBgDAAQgCAAgDACQgDADgBAEIgBAGIAAAMIgDAAIAAgeIADAAIAAAGIAGgFQADgCABAAQAEAAADACQADACABADQABADABAFIAAAQg");
	this.shape_108.setTransform(39.3,39);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#383838").s().p("AgLALQgEgFAAgGQAAgFAEgFQAFgFAGAAQAHAAAFAFQAEAFAAAFQAAAGgFAFQgEAFgHAAQgGAAgFgFgAgHgIQgEAEAAAEQAAAEACACQABADADACIAFABQADAAADgBQADgCABgDQACgDAAgDQAAgEgEgEQgDgDgFAAQgEAAgDADg");
	this.shape_109.setTransform(35.4,39.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#383838").s().p("AAAAWIAAgeIABAAIAAAegAgBgPIgBgCIABgDIABgBIACABIABADIgBACIgCABg");
	this.shape_110.setTransform(32.9,38.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#383838").s().p("AgBAWIAAgbIgGAAIAAgEIAGAAIAAgLIACAAIAAALIAGAAIAAAEIgGAAIAAAbg");
	this.shape_111.setTransform(31.3,38.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#383838").s().p("AgLALQgEgEAAgHQAAgGAEgEQAFgFAGAAQADAAAEABQACACADADIAAgGIAEAAIAAAeIgEAAIAAgFQgCADgDACQgEABgDAAQgFAAgGgFgAgFgKQgCACgCADIgCAFQAAADACADQACADACACIAFACIAGgCQADgCABgDQACgCAAgEQAAgEgDgEQgDgDgGAAIgFABg");
	this.shape_112.setTransform(28.1,39.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#383838").s().p("AgGAQIAAgeIADAAIAAAFIADgFIAEgBIAEABIgDAEIgCgBQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAABQAAABgCAEIgBAJIAAALg");
	this.shape_113.setTransform(25.4,39);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#383838").s().p("AgLALQgEgFAAgGQAAgEAEgFQAEgGAHAAQAIAAAFAGQADAFAAAEIgbAAQAAAGAEADQAEAEADAAIAEgBIAEgDIAEgEIADACIgEAFIgFADIgGABQgGAAgFgFgAgHgIQgDADAAADIAWAAIgDgFIgEgDIgFgBQgDAAgEADg");
	this.shape_114.setTransform(22.3,39.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#383838").s().p("AgPAWIAAgqIAEAAIAAAGQADgEADgBQADgCACAAQAHAAAEAFQAFAFAAAHQAAAFgEAFQgFAFgHAAQgCAAgDgCQgEgCgCgDIAAASgAgIgNQgDADAAAGQAAAEABABQACACADACIAFACIAGgCQADgBABgEQACAAAAgEQAAgEgCgCQgBgEgDgBQgDgCgDAAQgEAAgEAEg");
	this.shape_115.setTransform(18.3,39.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#383838").s().p("AgLALQgEgFAAgGQAAgFAEgFQAFgFAGAAQAHAAAFAFQAEAFAAAFQAAAGgEAFQgFAFgHAAQgGAAgFgFgAgHgIQgEAEAAAEQAAAEACACQABADADACIAFABQADAAADgBQADgCABgDIACgGQAAgEgEgEQgDgDgFAAQgEAAgDADg");
	this.shape_116.setTransform(14.2,39.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#383838").s().p("AgBAWIAAgqIADAAIAAAqg");
	this.shape_117.setTransform(10,38.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#383838").s().p("AgKALQgFgEAAgHQAAgGAFgEQAEgFAGAAQADAAAEABQADACACADIAAgGIAEAAIAAAeIgEAAIAAgFQgCADgEACQgDABgDAAQgGAAgEgFgAgFgKQgDACgBADIgCAFIACAGQABADADACIAFACIAGgCQADgCACgDQABgDAAgDQAAgEgDgEQgEgDgFAAQgCAAgDABg");
	this.shape_118.setTransform(7.2,39.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#383838").s().p("AgBAWIAAgbIgGAAIAAgEIAGAAIAAgLIACAAIAAALIAHAAIAAAEIgHAAIAAAbg");
	this.shape_119.setTransform(4.3,38.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#383838").s().p("AAAAWIAAgeIABAAIAAAegAgBgPIgBgCIABgDIABgBIACABIABADIgBACIgCABg");
	this.shape_120.setTransform(2.6,38.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#383838").s().p("AgGAVQgDgBgCgCQgDgDgBgDIAFAAQACADADACQACABADAAQAEAAADgBQADgCABgCQABgCAAgGIAAgCQgCADgDACIgHABQgDAAgEgCQgEgCgCgEQgCgCAAgEQAAgEACgEIAGgGQAEgCADAAQADAAADABIAGAFIAAgGIAEAAIAAAYIgBAKQgBAEgEADQgFACgFAAgAgEgQQgEACgBADQgCADAAADQAAAFAEACQADAEAEAAQAFAAAEgEQADgCAAgFQAAgDgBgDQgCgDgDgCIgGgBQgBAAgDABg");
	this.shape_121.setTransform(-0.1,39.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#383838").s().p("AgBAWIAAgeIACAAIAAAegAgBgPIgBgCIABgDIABgBIACABIABADIgBACIgCABg");
	this.shape_122.setTransform(-2.7,38.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#383838").s().p("AgKARQgFgFAAgHQAAgFAFgFQAEgEAGAAQADAAADABIAGAFIAAgSIAEAAIAAAqIgEAAIAAgFQgCADgEABQgDACgDAAQgGAAgEgFgAgFgEQgDACgBACQgCABAAAEQAAAEACACQABAEADACIAFACIAGgCQADgCACgDQABgDAAgEQAAgFgDgCQgEgDgFgBQgCABgDABg");
	this.shape_123.setTransform(-5.4,38.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#383838").s().p("AgLALQgEgFAAgGQAAgEAEgFQAEgGAHAAQAIAAAFAGQADAFAAAEIgbAAQAAAGAEADQAEAEADAAIAEgBIAEgDIAEgEIADACIgEAFIgFADIgGABQgGAAgFgFgAgHgIQgDADAAADIAWAAIgDgFIgEgDIgFgBQgDAAgEADg");
	this.shape_124.setTransform(114.2,31.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#383838").s().p("AAJAWIAAgWQAAgCgDgCQgCgCgDAAQgCAAgDADQgCACgCACIgBAVIgDAAIAAgrIADAAIAAASQACgDAEgCQADgBACAAQADAAADABIAEAFQABADABAFIAAARg");
	this.shape_125.setTransform(110.5,31.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#383838").s().p("AgBAWIAAgbIgFAAIAAgEIAFAAIAAgLIACAAIAAALIAHAAIAAAEIgHAAIAAAbg");
	this.shape_126.setTransform(107.6,31.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#383838").s().p("AgHAQIAAgeIAFAAIAAAEIACgEIAEgBIADABIgCAEIgBgBQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBACgBAEIAAAJIAAALg");
	this.shape_127.setTransform(104.2,31.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#383838").s().p("AgLALQgEgFAAgGQAAgFAEgFQAEgFAHAAQAHAAAFAFQAEAFAAAFQAAAGgEAFQgFAFgHAAQgGAAgFgFgAgHgIQgEAEAAAEQAAAEACACQABADADACIAFABQADAAADgBQADgCABgDIACgGQAAgEgEgEQgDgDgFAAQgEAAgDADg");
	this.shape_128.setTransform(101.1,31.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#383838").s().p("AgCAWIAAgaIgEAAIAAgEIAEAAIAAgKIACgCIACgBIAFABIAAAEIgEgBIgCAAIgBABIAAAEIAAAEIAHAAIAAAEIgHAAIAAAag");
	this.shape_129.setTransform(98.2,31.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#383838").s().p("AgBAWIAAgbIgFAAIAAgEIAFAAIAAgLIACAAIAAALIAHAAIAAAEIgHAAIAAAbg");
	this.shape_130.setTransform(94.6,31.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#383838").s().p("AgGAOQgEgBgBgEQgCgEAAgFIAAgPIAFAAIABAVQAAADADABQADACABAAQADAAADgCQACgCABgCIAAgVIAEAAIAAAPQAAAGgBADQgCAEgCABQgDACgFAAQgDAAgDgCg");
	this.shape_131.setTransform(91.6,31.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#383838").s().p("AgGAVQgCgCgDgEIAAAHIgEAAIAAgrIAEAAIAAASQACgEADgBIAGgCQAHAAAFAGQAEAEAAAGQAAAGgEAFQgFAFgHAAQgCAAgEgBgAgFgEIgFAEQgCABABAEQAAAGADAEQADADAFAAIAGgCIAEgEQACgDAAgEQAAgEgCgBIgEgEQgDgCgDAAQgDAAgCACg");
	this.shape_132.setTransform(87.9,31.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#383838").s().p("AAGAWIgNgPIAAAPIgFAAIAAgrIAFAAIAAAXIAMgLIAHAAIgQAOIAQARg");
	this.shape_133.setTransform(82.8,31.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#383838").s().p("AgKAMQgFgFAAgHQAAgDACgEQADgEAEgCQAEgCADAAIAGABIAFACQADACABACIgDACQgEgFgIAAQgEAAgEADQgEAEAAAEQAAADACADQACADADACIAFACQAHAAAFgGIADACQgDAEgDABQgEACgFAAQgGAAgFgEg");
	this.shape_134.setTransform(79,31.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#383838").s().p("AgGAOQgDgBgCgEQgBgEgBgFIAAgPIAFAAIABAVQAAADADABQACACACAAQADAAACgCQAEgCAAgCIABgVIADAAIAAAPQABAGgCADQgCAEgCABQgDACgFAAQgDAAgDgCg");
	this.shape_135.setTransform(75.2,31.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#383838").s().p("AAAAWIAAgrIABAAIAAArg");
	this.shape_136.setTransform(72.8,31.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#383838").s().p("AgLALQgEgFAAgGQAAgEAEgFQAEgGAHAAQAIAAAEAGQAEAEAAAFIgbAAQAAAGAEADQADAEAEAAIAEgBIAEgDIADgEIAEACIgEAFQgDADgCAAIgGABQgGAAgFgFgAgGgIIgFAGIAWAAIgCgFIgEgDIgFgBQgEAAgCADg");
	this.shape_137.setTransform(68.6,31.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#383838").s().p("AgHAQIAAgeIAFAAIAAAEIACgEIAEgBIADABIgCAEIgBgBQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBACgBAEIAAAJIAAALg");
	this.shape_138.setTransform(65.9,31.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#383838").s().p("AgGAOQgDgBgCgEQgCgEAAgFIAAgPIAFAAIAAAVQABADADABQACACACAAQADAAACgCQADgCABgCIAAgVIAFAAIAAAPQAAAGgCADQgCAEgDABQgCACgFAAQgEAAgCgCg");
	this.shape_139.setTransform(62.9,31.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#383838").s().p("AgPAWIAAgqIAEAAIAAAGQADgEADgBQADgCACAAQAHAAAEAFQAFAFAAAHQAAAFgFAFQgEAFgHAAQgCAAgDgCQgEgBgCgDIAAARgAgIgNQgDADAAAGQAAAEABABQACADADABIAFACIAGgCQADgBABgDQACgCAAgDQAAgEgCgCQgCgEgCgBQgDgCgDAAQgEAAgEAEg");
	this.shape_140.setTransform(59.1,32.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#383838").s().p("AgHAQIAAgeIAFAAIAAAEIACgEIAEgBIAEABIgDAEIgCgBIgDABIgCAGIAAAUg");
	this.shape_141.setTransform(54.6,31.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#383838").s().p("AgKALQgFgFAAgGQAAgFAEgFQAFgFAGAAQAHAAAFAFQAEAFAAAFQAAAGgEAFQgFAFgHAAQgGAAgEgFgAgHgIQgEAEAAAEQAAADACADQABADADACQADABACAAIAGgBQADgCABgDQACgCAAgEQAAgEgEgEQgDgDgFAAQgEAAgDADg");
	this.shape_142.setTransform(51.5,31.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#383838").s().p("AgCAWIAAgaIgEAAIAAgEIAEAAIAAgFIABgFQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIACgBIAFABIAAAEIgEgBIgCAAIgBABIAAAIIAHAAIAAAEIgHAAIAAAag");
	this.shape_143.setTransform(48.7,31.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#383838").s().p("AgHAVIAHgNIgOgcIAFAAIAJAWIAKgWIAFAAIgRApg");
	this.shape_144.setTransform(44.4,32.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#383838").s().p("AgBAWIAAgrIADAAIAAArg");
	this.shape_145.setTransform(42.2,31.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#383838").s().p("AAJAQIAAgVQAAgDgDgCQgCgBgDAAQgBgBgDADQgEAEgBADIAAASIgEAAIAAgeIAEAAIAAAFQACgCAEgCQACgCACAAQAEAAACACIAFAEIABAZg");
	this.shape_146.setTransform(39.7,31.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#383838").s().p("AgLALQgEgFAAgGQAAgFAEgFQAEgFAHAAQAHAAAFAFQAEAFAAAFQAAAGgEAFQgFAFgHAAQgGAAgFgFgAgHgIQgEAEAAAEIACAGQABADADACQADABACAAIAGgBQADgCABgDQACgCAAgEQAAgEgEgEQgDgDgFAAQgEAAgDADg");
	this.shape_147.setTransform(35.9,31.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#383838").s().p("AgBAWIAAgbIgGAAIAAgEIAGAAIAAgLIACAAIAAALIAGAAIAAAEIgGAAIAAAbg");
	this.shape_148.setTransform(31.3,31.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#383838").s().p("AgLALQgEgFAAgGQAAgFAEgFQAEgFAHAAQAHAAAFAFQAEAFAAAFQAAAFgFAGQgEAFgHAAQgGAAgFgFgAgIgIQgDAFAAADQAAADABADIAFAFQADABACAAQADAAADgBQADgCABgDQACgDAAgDQAAgEgEgEQgDgDgFAAQgEAAgEADg");
	this.shape_149.setTransform(28.2,31.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#383838").s().p("AAJAQIAAgVQAAgDgDgCQgCgBgDAAQgCgBgDADQgDADgBAEIgBAGIAAAMIgDAAIAAgeIADAAIAAAFIAGgEQADgCABAAQAFAAACACQADACABACQABADABAGIAAAQg");
	this.shape_150.setTransform(24.4,31.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#383838").s().p("AgKALQgFgFAAgGQAAgEAEgFQAFgGAGAAQAIAAAFAGQADAEAAAFIgaAAQgBAGAEADQADAEAEAAIAEgBIAEgDIADgEIAEACIgEAFQgCADgDAAIgGABQgGAAgEgFgAgHgIIgDAGIAVAAIgCgFIgEgDIgFgBQgEAAgDADg");
	this.shape_151.setTransform(18.9,31.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#383838").s().p("AAAAQIgOgfIAFAAIAJAWIAKgWIAFAAIgPAfg");
	this.shape_152.setTransform(15.3,31.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#383838").s().p("AgBAWIAAgeIADAAIAAAegAgBgPIgBgDIABgCIABgBIACABIABACIgBADIgCABg");
	this.shape_153.setTransform(13,31.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#383838").s().p("AgBAWIAAgbIgGAAIAAgEIAGAAIAAgLIACAAIAAALIAHAAIAAAEIgHAAIAAAbg");
	this.shape_154.setTransform(11.4,31.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#383838").s().p("AgLALQgEgEAAgHQAAgGAFgEQAEgFAGAAQADAAADABQADACADADIAAgGIAEAAIAAAfIgEAAIAAgGQgCADgEACIgGABQgGAAgFgFgAgFgKQgCACgCADQgCADAAACQAAADACADQABADADACIAFACIAGgCQADgCACgDQABgDAAgDQAAgEgDgEQgEgDgFAAQgCAAgDABg");
	this.shape_155.setTransform(8.2,31.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#383838").s().p("AgLALQgEgFAAgGQAAgEAEgFQAFgGAGAAQAIAAAFAGQADAEAAAFIgbAAQABAGADADQADAEAEAAIAEgBIAEgDIAEgEIADACIgEAFQgCADgDAAIgGABQgGAAgFgFgAgHgIIgEAGIAXAAIgDgFIgEgDIgFgBQgDAAgEADg");
	this.shape_156.setTransform(4.3,31.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#383838").s().p("AgHAQIAAgeIAEAAIAAAEIADgEIAEgBIAEABIgCAEIgDgBQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQAAACgBAEIgCAJIAAALg");
	this.shape_157.setTransform(1.6,31.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#383838").s().p("AgKAMQgFgFAAgHQAAgDACgEQADgEAEgCQAEgCADAAIAGABIAFACQADACABACIgEACQgDgFgIAAQgEAAgEADQgEAEAAAEQAAADACADQACADADACIAFACQAHAAAEgGIAEACQgDAEgDABQgEACgFAAQgGAAgFgEg");
	this.shape_158.setTransform(-1.5,31.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#383838").s().p("AAKAQIgBgVQgBgDgBgBQgCgDgEAAQgBAAgEADQgDADAAADIgBATIgFAAIAAgfIAFAAIAAAHQADgEACgCQADgBACAAQAEAAACABIAEAGIABAYg");
	this.shape_159.setTransform(112.3,24.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#383838").s().p("AAGAWIgOgPIAAAPIgDAAIAAgrIADAAIAAAXIANgLIAHAAIgQAOIARARg");
	this.shape_160.setTransform(109.2,24);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#383838").s().p("AgHABIAAgBIAPAAIAAABg");
	this.shape_161.setTransform(106.4,24.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#383838").s().p("AAHAWIgPgPIAAAPIgDAAIAAgrIADAAIAAAXIANgLIAHAAIgQAOIARARg");
	this.shape_162.setTransform(104.2,24);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#383838").s().p("AgKAMQgFgFAAgHQAAgEADgDQACgEAEgCQAEgCADAAIAGABIAFACIAEAEIgDACQgEgFgIAAQgEAAgEADQgEAEAAAEQAAAEACACQACADADACQADACACAAQAHAAAFgGIADACQgDAEgDABQgEACgFAAQgFAAgGgEg");
	this.shape_163.setTransform(100.4,24.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#383838").s().p("AgLALQgEgEAAgHQAAgFAEgFQAEgFAHAAQAHAAAFAFQAEAFAAAFQAAAHgFAEQgEAFgHAAQgGAAgFgFgAgIgIQgDAGAAACQAAADABADIAFAFQADABACAAQADAAADgBQADgCABgDQACgDAAgDQAAgEgEgEQgDgDgFAAQgEAAgEADg");
	this.shape_164.setTransform(96.5,24.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#383838").s().p("AAJAQIAAgVQAAgDgDgBQgCgDgDAAQgBAAgEADQgCADgCADIgBAHIAAAMIgDAAIAAgfIADAAIAAAHIAGgGQADgBABAAQAFAAACABQAEADAAADQACACAAAGIAAAQg");
	this.shape_165.setTransform(92.7,24.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#383838").s().p("AAHAWIgOgPIAAAPIgFAAIAAgrIAFAAIAAAXIAMgLIAHAAIgQAOIARARg");
	this.shape_166.setTransform(89.6,24);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#383838").s().p("AgLALQgEgEAAgHQAAgFAEgFQAEgFAHAAQAHAAAFAFQAEAFAAAFQAAAHgFAEQgEAFgHAAQgGAAgFgFgAgHgIQgEAFAAADQAAAEACACQABADADACIAFABQADAAADgBQADgCABgDQACgDAAgDQAAgEgEgEQgDgDgFAAQgEAAgDADg");
	this.shape_167.setTransform(84.2,24.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#383838").s().p("AgBAVIAAgaIgGAAIAAgEIAGAAIAAgMIACAAIAAAMIAHAAIAAAEIgHAAIAAAag");
	this.shape_168.setTransform(81.2,24);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#383838").s().p("AgEAPIgEgDIADgDQADADACAAQAAAAAAAAQABAAAAAAQABAAAAgBQABAAABAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIgBgDIgEgDQgDgBgCgCQgBgCAAgDQAAgEACgCQACgCACAAQAEAAAFAEIgDADQgDgDgDAAIgCABIgBADIABADIADADQAGABAAACIACAFQAAADgDAEQgDACgDAAg");
	this.shape_169.setTransform(77.3,24.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#383838").s().p("AgKALQgFgFAAgGQAAgEAEgFQAEgGAHAAQAIAAAEAGQAEAEAAAFIgaAAQgBAGAEADQAEAEADAAIAEgBIAEgDQACgBABgDIAEACIgEAFQgDADgCAAIgGABQgGAAgEgFgAgHgIIgDAGIAVAAIgCgFIgEgDIgFgBQgDAAgEADg");
	this.shape_170.setTransform(74.2,24.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#383838").s().p("AATAQIgBgXIgCgDIgEgBIgGACIgDAEIgCAVIgCAAIAAgQIAAgGIgDgEIgEgBQgDAAgCACIgEAEQgBADAAAEIAAAOIgEAAIAAgfIAEAAIAAAHIAEgFQACgCAEAAIAFABIADACIABAFQABgEAEgCQADgCAEAAIAFABQADACABAEQABACABAGIAAAQg");
	this.shape_171.setTransform(69.4,24.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#383838").s().p("AgLALQgEgEAAgHQAAgFAEgFQAEgFAHAAQAHAAAFAFQAEAFAAAFQAAAHgFAEQgEAFgHAAQgGAAgFgFgAgHgIQgEAFAAADQAAAEACACQABADADACQADABACAAQADAAADgBQADgCABgDQACgDAAgDQAAgEgEgEQgDgDgFAAQgEAAgDADg");
	this.shape_172.setTransform(64.6,24.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#383838").s().p("AgKAMQgFgFAAgHQAAgDACgEQADgEAEgCQAEgCADAAIAGABIAFACIAEAEIgEACQgDgFgIAAQgEAAgEADQgEAEAAAEQAAAEACACQACADADACQADACACAAQAIAAADgGIAEACQgDAEgDABQgEACgFAAQgGAAgFgEg");
	this.shape_173.setTransform(60.6,24.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#383838").s().p("AgLALQgEgFAAgGQAAgFADgEQAGgGAGAAQAHAAAFAGQAEAFAAAEIgbAAQAAAFAEAEQAEAEADAAIAEgBIAEgDIADgEIAEACIgEAFQgDADgCAAIgGABQgHAAgEgFgAgGgIQgDACgCAEIAWAAIgCgFIgEgDIgFgBQgEAAgCADg");
	this.shape_174.setTransform(55.1,24.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#383838").s().p("AAKAQIgBgVQgBgDgCgBQgCgDgDAAQgBAAgEADQgCADgBADIgCAHIAAAMIgEAAIAAgfIAEAAIAAAHIAGgGQADgBACAAQAEAAACABQADADABADQACACgBAGIAAAQg");
	this.shape_175.setTransform(51.3,24.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#383838").s().p("AgLALQgEgEAAgHQAAgFAEgFQAEgFAHAAQAIAAAEAFQAEAFAAAFQAAAHgEAEQgFAFgHAAQgGAAgFgFgAgHgIQgEAFAAADQAAAEACACQABADADACIAFABQADAAADgBQADgCABgDIACgGQAAgDgEgFQgDgDgFAAQgEAAgDADg");
	this.shape_176.setTransform(47.4,24.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#383838").s().p("AgDAEIADgJIAEACIgEAJg");
	this.shape_177.setTransform(42.9,26.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#383838").s().p("AgLARQgEgFAAgHQAAgFAEgFQAFgEAGgBQADAAADACQADABADAEIAAgSIAEAAIAAAqIgEAAIAAgFQgCADgEACIgGABQgGAAgFgFgAgFgEQgCACgCACQgCABAAAEQAAAEACADQABADADACQADACACAAQADAAADgCIAFgFQABgDAAgEQAAgFgDgCQgEgDgFAAQgCgBgDACg");
	this.shape_178.setTransform(40,24);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#383838").s().p("AAAAWIAAgrIABAAIAAArg");
	this.shape_179.setTransform(37.4,24);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#383838").s().p("AgGAQIAAgfIADAAIAAAGIADgFIAEgBIAEABIgDADIgCAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABQAAABgCAEIgBAJIAAALg");
	this.shape_180.setTransform(36.1,24.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#383838").s().p("AgLALQgEgEAAgHQAAgFAEgFQAEgFAHAAQAHAAAFAFQAEAFAAAFQAAAHgFAEQgEAFgHAAQgGAAgFgFgAgHgIQgEAFAAADQAAAEACACQABADADACQADABACAAQADAAADgBQADgCABgDQACgDAAgDQAAgEgEgEQgDgDgFAAQgEAAgDADg");
	this.shape_181.setTransform(33,24.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#383838").s().p("AAKAQIgKgVIgJAVIgBAAIgNgfIAEAAIAKAWIAJgWIAAAAIAKAWIAKgWIAEAAIgOAfg");
	this.shape_182.setTransform(28.5,24.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#383838").s().p("AgBAWIAAgrIADAAIAAArg");
	this.shape_183.setTransform(23.7,24);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#383838").s().p("AgKALQgFgEAAgHQAAgGAFgEQAEgFAGAAQADAAAEABQADACACADIAAgGIAEAAIAAAfIgEAAIAAgGQgCADgDACQgEABgDAAQgFAAgFgFgAgFgKIgEAFQgCADAAACIACAGIAEAFQADACACAAQADAAADgCQADgCABgDQACgCAAgEQAAgEgDgEQgEgDgFAAQgCAAgDABg");
	this.shape_184.setTransform(21,24.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#383838").s().p("AgBAVIAAgaIgGAAIAAgEIAGAAIAAgMIACAAIAAAMIAHAAIAAAEIgHAAIAAAag");
	this.shape_185.setTransform(18,24);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#383838").s().p("AgBAWIAAgeIACAAIAAAegAgBgPIgBgDIABgCIABgBIACABIABACIgBADIgCABg");
	this.shape_186.setTransform(16.3,23.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#383838").s().p("AgGAVQgDgBgCgCQgCgBgCgFIAFAAQABADADACQADABADAAQAEAAADgBIAEgEQABgCAAgGIAAgCQgCADgEACQgDACgDAAQgDAAgEgDQgEgCgCgEQgCgBAAgFQAAgEACgEIAGgGQAEgCADAAQADAAADABQADACADADIAAgGIAEAAIAAAYQAAAHgBADQgCAEgEADQgEACgFAAQgDAAgDgBgAgFgQQgCACgCADQgCADAAADQAAAFADACQAEAEAEAAQAFAAAEgEQADgCAAgFQAAgDgBgDIgFgFQgDgBgDAAQgCAAgDABg");
	this.shape_187.setTransform(13.6,25.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#383838").s().p("AAAAWIAAgeIABAAIAAAegAgBgPIgBgDIABgCIABgBIACABIABACIgBADIgCABg");
	this.shape_188.setTransform(11.1,23.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#383838").s().p("AgKARQgFgFAAgHQAAgFAFgFQAFgEAFgBQAEAAADACQADABACAEIAAgSIAEAAIAAAqIgEAAIAAgFQgCADgEACQgDABgDAAQgGAAgEgFgAgFgEQgDACgBACQgCACAAADIACAHQABACAEADQACACACAAQAEAAACgCQADgCACgDIACgHQAAgFgEgCQgEgDgFAAQgCgBgDACg");
	this.shape_189.setTransform(8.3,24);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#383838").s().p("AAJAQIAAgVQAAgDgDgBQgCgDgDAAQgCAAgDADQgCACgCAEIgBATIgDAAIAAgfIADAAIAAAHIAGgGQADgBABAAQAEAAADABQADADABADQABACABAGIAAAQg");
	this.shape_190.setTransform(2.8,24.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#383838").s().p("AAAAVIAAgpIABAAIAAApg");
	this.shape_191.setTransform(0.3,24);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#383838").s().p("AgBACIgBgCIABgBIABgBIACABQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgBgBg");
	this.shape_192.setTransform(61.2,11.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#383838").s().p("AAHAWIgOgPIAAAPIgFAAIAAgrIAFAAIAAAXIAMgKIAHAAIgQANIARARg");
	this.shape_193.setTransform(59,9.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#383838").s().p("AgKAMQgFgGAAgGQAAgDACgEQADgEAEgCQADgCAEAAIAHABIAEACIAEAEIgEACQgEgFgHAAQgEAAgEADQgDAEAAAEQAAADABADIAFAFQACACADAAQAHAAAEgGIAEACQgCADgFADQgDABgFAAQgFAAgGgEg");
	this.shape_194.setTransform(55.3,10.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#383838").s().p("AgGAOQgEgCgBgDQgBgEgBgFIAAgPIAFAAIAAAVQABADACABQADACACAAQADAAACgCQADgBABgDIABgGIAAgPIADAAIAAAPQAAAGgBADQgBADgDACQgEACgEAAIgGgCg");
	this.shape_195.setTransform(51.5,10.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#383838").s().p("AAAAWIAAgrIABAAIAAArg");
	this.shape_196.setTransform(49.1,9.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#383838").s().p("AgLASQgEgGAAgHQAAgFAFgEQAEgFAGgBQADAAADACIAGAFIAAgSIAEAAIAAAqIgEAAIAAgFIgGAFQgDABgDAAQgFAAgGgEgAgFgEIgEAEQgCABAAAEQAAAFACACQABADADABQADADACAAQADAAADgDQADgBACgDQABgDAAgEQAAgFgDgCQgEgEgFABQgCgBgDACg");
	this.shape_197.setTransform(44.6,9.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#383838").s().p("AgKALQgFgFAAgGQAAgFAEgFQAGgFAFAAQAHAAAFAFQAEAFAAAFQAAAHgEAEQgFAFgHAAQgGAAgEgFgAgHgHQgEADAAAEQAAADACADQABADADACIAFACQADAAADgCIAFgFQABgDAAgDQAAgDgDgEQgEgEgFAAQgDAAgEAEg");
	this.shape_198.setTransform(40.6,10.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#383838").s().p("AgKALQgFgEAAgHQAAgFAEgFQAGgFAFAAQAHAAAFAFQAEAFAAAFQAAAHgEAEQgFAFgHAAQgGAAgEgFgAgHgHQgEADAAAEQAAADACADQABADADACIAFACQADAAADgCIAFgFQABgDAAgDQAAgDgEgEQgDgEgFAAQgDAAgEAEg");
	this.shape_199.setTransform(36.7,10.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#383838").s().p("AgGAVIgFgDIgEgGIAFAAQABADADACQADABADAAQAEAAADgBIAEgEQABgCAAgGIAAgBIgGAEQgDACgDAAQgDAAgEgDQgEgCgCgDQgCgCAAgFQAAgEACgEQACgEAEgCQAEgCADAAQADAAADABQADACADADIAAgFIAEAAIAAAXQAAAHgBADQgCAEgEADQgEACgFAAgAgFgQIgEAFQgCADAAAEQAAAEADACQAEAEAEAAQAFAAAEgEQADgCAAgFQAAgDgBgDQgCgDgDgCQgDgBgDAAQgCAAgDABg");
	this.shape_200.setTransform(32.6,10.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#383838").s().p("AgHAQIAAgeIAFAAIAAAEIACgDQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAEABIgDADIgCAAIgDABIgCAGIAAAUg");
	this.shape_201.setTransform(28.3,10.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#383838").s().p("AgKALQgFgEAAgHQAAgFAEgFQAGgFAFAAQAHAAAFAFQAEAFAAAFQAAAHgEAEQgFAFgHAAQgGAAgEgFgAgHgHQgEADAAAEQAAADACADQABADADACIAFACIAGgCQADgCABgDQACgCAAgEQAAgDgEgEQgEgEgEAAQgDAAgEAEg");
	this.shape_202.setTransform(25.2,10.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#383838").s().p("AgCAWIAAgaIgEAAIAAgEIAEAAIAAgFIABgFQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIACgBIAFABIAAAEIgEgBIgCAAIgBABIAAAIIAHAAIAAAEIgHAAIAAAag");
	this.shape_203.setTransform(22.3,9.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#383838").s().p("AgKASQgFgHAAgGQAAgFAFgEQAFgFAFgBQAEAAADACIAFAFIAAgSIAEAAIAAAqIgEAAIAAgFQgCADgDACIgHABQgFAAgFgEgAgEgEIgFAEQgCACAAADQAAAEACADIAFAEQACADACAAQAEAAACgDQADgBACgDQACgCAAgFQAAgFgEgCQgEgEgFABQgCgBgCACg");
	this.shape_204.setTransform(17.5,9.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#383838").s().p("AgLALQgEgEAAgHQAAgFAEgFQAFgFAGAAQAHAAAFAFQAEAFAAAFQAAAHgEAEQgFAFgHAAQgGAAgFgFgAgHgHQgEAEAAADIACAGQABADADACIAFACIAGgCQADgCABgDIACgGQAAgDgEgEQgEgEgEAAQgDAAgEAEg");
	this.shape_205.setTransform(13.5,10.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#383838").s().p("AgLALQgEgEAAgHQAAgFAEgFQAFgFAGAAQAHAAAFAFQAEAFAAAFQAAAHgEAEQgFAFgHAAQgGAAgFgFgAgHgHQgEAEAAADQAAAEACACQABADADACIAFACIAGgCQADgCABgDIACgGQAAgDgEgEQgEgEgEAAQgDAAgEAEg");
	this.shape_206.setTransform(9.6,10.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#383838").s().p("AAKAPIgKgVIgJAVIgBAAIgNgeIAEAAIAKAWIAJgWIAAAAIAKAWIAKgWIAEAAIgNAeg");
	this.shape_207.setTransform(5.1,10.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#383838").s().p("AgLALQgEgFAAgGQAAgEAEgFQAEgGAHAAQAIAAAFAGQADAFAAAEIgbAAQAAAGAEADQAEAEADAAIAEgBIAEgCIAEgFIADACIgEAFQgCACgDABIgGABQgGAAgFgFgAgHgIQgDADAAADIAWAAIgDgFQgBgCgDgBIgFgBQgDAAgEADg");
	this.shape_208.setTransform(95.4,2.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#383838").s().p("AAJAWIAAgWQgBgCgCgCQgCgBgDAAQgDAAgCACQgDACgBACIAAAVIgFAAIAAgrIAFAAIAAASQACgDADgCQADgBABAAQAEAAADACQADABABADQABADAAAFIAAARg");
	this.shape_209.setTransform(91.6,2.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#383838").s().p("AgBAVIAAgaIgGAAIAAgDIAGAAIAAgMIACAAIAAAMIAGAAIAAADIgGAAIAAAag");
	this.shape_210.setTransform(88.8,2.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#383838").s().p("AAKAQIgBgVQgBgDgCgBQgCgCgDAAQgDAAgCACQgDACgBAFIAAASIgFAAIAAgeIAFAAIAAAFQACgDADgCQADgBACAAQADAAADACQACABACAEQACADgBAFIAAAQg");
	this.shape_211.setTransform(84.2,2.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#383838").s().p("AgLALQgEgEAAgHQAAgFAEgFQAFgFAGAAQAGAAAGAFQAEAFAAAFQAAAGgFAFQgEAFgHAAQgGAAgFgFgAgIgHQgDADAAAEQAAADABADIAFAFQACACADAAQADAAADgCQADgCABgDQACgDAAgDQAAgEgEgDQgEgEgEAAQgEAAgEAEg");
	this.shape_212.setTransform(80.4,2.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#383838").s().p("AgEAPIgEgDIADgDQADAEACAAQAAAAAAAAQABgBABAAQAAAAAAAAQABgBAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIgBgDIgEgDQgEgBgBgCQgCgCAAgDQAAgDADgDQADgCABAAQAFAAAEAEIgDADQgDgDgDAAIgBABQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAIABADIADADQAEABACACQACACAAADQAAAEgDADQgCACgEAAIgEgBg");
	this.shape_213.setTransform(75.5,2.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#383838").s().p("AAGAWIgOgPIAAAPIgDAAIAAgrIADAAIAAAYIANgLIAHAAIgQANIARARg");
	this.shape_214.setTransform(73.1,2.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#383838").s().p("AgKAMQgFgFAAgHQAAgDACgEQADgEAEgCIAHgCIAGABIAFACIAEAEIgEACQgEgFgHAAQgEAAgEADQgEAEAAAEQAAAEACACQACADADACQADACACAAQAHAAAEgGIAEACQgCADgEADIgJABQgGAAgFgEg");
	this.shape_215.setTransform(69.4,2.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#383838").s().p("AgKALQgFgFAAgGQAAgFAEgFQAGgFAFAAQAHAAAFAFQAEAFAAAFQAAAHgEAEQgFAFgHAAQgGAAgEgFgAgHgHQgEADAAAEQAAADACADQABADADACQADACACAAQAEAAACgCIAFgFQABgDAAgDQAAgEgDgDQgEgEgFAAQgDAAgEAEg");
	this.shape_216.setTransform(65.4,2.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#383838").s().p("AAJAQIAAgVQAAgDgDgBQgCgCgDAAQgDAAgCACQgCACgCAFIAAASIgEAAIAAgeIAEAAIAAAFQACgDADgCQADgBABAAQAEAAADACQADABABAEQACADAAAFIAAAQg");
	this.shape_217.setTransform(61.7,2.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#383838").s().p("AAHAWIgPgPIAAAPIgDAAIAAgrIADAAIAAAYIAOgLIAFAAIgPANIARARg");
	this.shape_218.setTransform(58.5,2.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#383838").s().p("AgKALQgFgFAAgGQAAgEAEgFQAFgGAGAAQAIAAAFAGQADAEAAAFIgaAAQgBAGAEADQAEAEADAAIAEgBIAEgCQACgBABgEIAEACIgEAFQgCADgDAAIgGABQgGAAgEgFgAgHgIQgDADAAADIAVAAIgCgFIgEgDIgFgBQgCAAgFADg");
	this.shape_219.setTransform(53.1,2.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#383838").s().p("AAJAQIgBgVQAAgDgCgBQgCgCgDAAQgCAAgDACQgDADgBAEIgBASIgDAAIAAgeIADAAIAAAFQADgDADgCQADgBACAAQAEAAACACQACABACAEQABADABAFIAAAQg");
	this.shape_220.setTransform(49.4,2.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#383838").s().p("AgKALQgFgFAAgGQAAgFAEgFQAGgFAFAAQAHAAAFAFQAEAFAAAFQAAAHgEAEQgFAFgHAAQgGAAgEgFgAgHgHQgEADAAAEQAAADACADQABADADACQADACACAAQAEAAACgCIAFgFQABgDAAgDQAAgEgDgDQgEgEgFAAQgDAAgEAEg");
	this.shape_221.setTransform(45.5,2.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#383838").s().p("AgDAEIADgJIAEACIgEAJg");
	this.shape_222.setTransform(41,4.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#383838").s().p("AgKARQgFgEAAgHQAAgGAFgFQAEgEAGAAQADgBAEACIAFAFIAAgSIAEAAIAAAqIgEAAIAAgFIgGAEQgDACgDAAQgGAAgEgFgAgFgEIgEAEQgCACAAAEQAAADACADQABADADACQADABACAAQAEAAACgBQADgCACgDQABgDAAgDQAAgGgDgCQgEgDgFgBQgCABgDABg");
	this.shape_223.setTransform(38,2.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#383838").s().p("AAAAWIAAgrIABAAIAAArg");
	this.shape_224.setTransform(35.5,2.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#383838").s().p("AgHAQIAAgeIAFAAIAAAFIACgFIAEgBIAEABIgCAEIgDgBIgDACIgCAFIAAAUg");
	this.shape_225.setTransform(34.1,2.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#383838").s().p("AgKALQgFgEAAgHQAAgFAEgFQAGgFAFAAQAHAAAFAFQAEAFAAAFQAAAHgEAEQgFAFgHAAQgGAAgEgFgAgHgHQgEADAAAEQAAADACADQABADADACQADACACAAQAEAAACgCQADgCABgDQACgCAAgEQAAgDgEgEQgEgEgEAAQgDAAgEAEg");
	this.shape_226.setTransform(31,2.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#383838").s().p("AAJAPIgJgUIgJAUIAAAAIgPgdIAFAAIAKAUIAJgUIAAAAIAKAUIAKgUIAFAAIgPAdg");
	this.shape_227.setTransform(26.6,2.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#383838").s().p("AAAAWIAAgrIACAAIAAArg");
	this.shape_228.setTransform(21.8,2.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#383838").s().p("AgKAMQgFgFAAgHQAAgGAFgEQAEgFAGAAQADAAADABIAGAFIAAgFIAEAAIAAAeIgEAAIAAgGIgGAFQgDABgDAAQgGAAgEgEgAgFgKIgEAFIgCAFIACAGQABADADACQADACACAAQAEAAACgCQADgCACgDQABgDAAgDQAAgEgDgEQgEgDgFAAQgCAAgDABg");
	this.shape_229.setTransform(19,2.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#383838").s().p("AgLALQgEgFAAgGQAAgEAEgFQAEgGAHAAQAIAAAEAGQADADABAGIgbAAQAAAGAEADQAEAEADAAIAEgBIAEgCQACgBABgEIAEACIgEAFQgCACgDABIgGABQgGAAgFgFgAgHgIQgDADAAADIAVAAIgCgFQgBgCgDgBIgFgBQgDAAgEADg");
	this.shape_230.setTransform(15.1,2.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#383838").s().p("AgGAQIAAgeIADAAIAAAFIADgFIAEgBIAEABIgCAEIgDgBQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABQgBACAAADIgCAJIAAALg");
	this.shape_231.setTransform(12.4,2.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#383838").s().p("AAKAQIgBgVQgBgDgCgBQgBgCgEAAQgCAAgDACQgDACgBAFIAAASIgFAAIAAgeIAFAAIAAAFIAFgFQADgBACAAQADAAADACQADABABAEQABADAAAFIAAAQg");
	this.shape_232.setTransform(7.8,2.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#383838").s().p("AgBAVIAAgpIADAAIAAApg");
	this.shape_233.setTransform(5.3,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,0,152.9,113.1);


(lib.pen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSB7QgFABgBgEQAAgDAqjwIACgBQADgBACADQgpD0ABACIAAABIgDgCg");
	this.shape.setTransform(8,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgBAXQgBAAgBAAQAAgBgBAAQAAAAAAAAQgBAAABgBIAEgWQAFgXABACIgFAtIgCAAg");
	this.shape_1.setTransform(10.6,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAIgDQgIgEgNACIgNAEQAcgPAWAUQADADgBABQgEgFgOgGg");
	this.shape_2.setTransform(10.2,8.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444444").s().p("AgLAsQgFAAgIADQgBAAgBABQgBAAgBAAQgBAAAAAAQAAgBAAAAQAEgIABgFIAGgtIgBgJQgCgIACgIIABgLIALgDQALgCAGAFIAPAKQAGAEgBABIgFAIIgKAmIgJAmQgHgKgKACg");
	this.shape_3.setTransform(5,38.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#444444").s().p("AALCbQgCgCgKgEIgTgHQgGgCgLADIgJADIA8kYQAIgZARAEQAIADAAAgQAAARgBAPIghDuQAAAHgBAAIgBgCg");
	this.shape_4.setTransform(7.7,17.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444444").s().p("AAeAMIgCgDQgEgHgPgGQgTgKgUAHIAGgCQANgEALAEQAdAHABAKIAAAEIAAAAg");
	this.shape_5.setTransform(6,34);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAGgDQgGgEgMACIgLADIAAAAIALgDQAMgDAGAEQARAHABAEIgBAAQgBgDgQgHg");
	this.shape_6.setTransform(4.1,43.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444444").s().p("AAVAFIAAgBIAAAAIAAgCIgEgCIgEAAIgKgDIgCgBIgEAAIgJACIgGACIgBAAIgBAAIgBgCIAAgBIAIgDIAEAAIADgBIAGAAIABABIABAAIACABIAJAEIAFABIADABIAAADIABAAIAAADg");
	this.shape_7.setTransform(3.7,45.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#444444").s().p("AAFgZIgFAuIgEAGg");
	this.shape_8.setTransform(3.2,48.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444444").s().p("AACgvIAEgBQABAAABAAQAAAAABAAQAAABAAAAQABAAgBABIgIA3IgKAog");
	this.shape_9.setTransform(1.8,51);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#444444").s().p("AABgYIgBAvIAAACg");
	this.shape_10.setTransform(3.7,48.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#444444").s().p("AAAgMIABABIgBAYg");
	this.shape_11.setTransform(4.5,47.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#444444").s().p("AAQAFIgCgDQgFgGgKgBQgQgCABAHIAAgEQACgEAKABQATABACAHQABADgBADIgBABg");
	this.shape_12.setTransform(3.4,46.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#444444").s().p("Ag/EZQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAAgKIAAgKQgCgGAAgHIAHgjIAGgaQgDgCgBgFQAAgDABgDIAAgBIAAAAQgCgDAAgEQgBgEADgCQACgDAFghIADgXIgBgCIgBgGIACgWQgDgDABgDIACgQIAvjvQAKg4AOgTQANgTAPAHQAMAEABAXQACAWgBAOIgfDcIgFAkQgFAfgBAEIgEAFQgCAEgBAEIgSBTQAAAFgDAFIgBADIgDAGIgKAFIgDAOQAAAJgCAGIgBADQgDAGgEACIgJAMQgJALgBAGQgCALgEAHIAAABIgBAAIgEABIgDgCgAAdkJQgOASgKA3IgwD2IgBAIQAAABAAAAQAAAAAAABQAAAAABABQAAAAABAAIABABIgCAYIABAIQABADgDAVIgDARQgDATgDACQgDACAEAFQACADgCADIAAADQAAADADACIABABIgHAdQgHAgAAACIACAMQACAFgBAQIAAAAQAEgHABgJIADgHQAGgMANgNQAEgDACgFQABgEAAgLIADgOQACgEACAAIAIgEIAEgHIAThcQABgDAEgHQACgCAAgCQADgGAJhAIAfjbQAAgPgBgVQgCgSgIgEIgBAAIgFgCQgIAAgJAMg");
	this.shape_13.setTransform(6.8,28.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag9EXIAAgLIgBgLIgCgMIAOg+QgEgDgBgEIABgEIAAgDIgCgFQAAgEACgCQADgCAEgjIADgXQgBgCAAgGIABgXQgDgCABgDIABgJIAwj1QAKg4AOgTQAJgMAJAAQAEAAAEACQACAAADADQAFAHABAOQACAXgBANIgfDcQgJBAgCAGIgEAGIgDAHIgRBUIgEAJIgDAIQgJAFgBgBQgBAAgCAJIgBAIIgCAPQgBAEgGAFQgDACgHAKQgJAMgBAHQgDALgDAGIgDAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_14.setTransform(6.8,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.6,56.7);


(lib.mailtous = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgWgQIAtABIgXAgg");
	this.shape.setTransform(24.3,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDAEQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABIACADQAAAAAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_1.setTransform(43.9,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAPIAHgHIAEADIADACIAEgBIABgDQAAgDgFgCIgCgCQgLgDAAgIQAAgFAFgEQADgEAFAAQAFAAADACIAHAFIgHAHQgFgEgDAAIgBABIgBACIABACIABACIAEACQAHADACABQACADAAAFQAAAGgEAEQgFAEgGAAQgIAAgGgIg");
	this.shape_2.setTransform(40.8,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKATQgFgDgCgGIgBgfIALAAIAAAVIABAHIADAEIADABIAEgBIADgEIABgHIAAgVIALAAIAAATQAAAKgCADQgDAGgEACQgEADgGAAQgGAAgEgDg");
	this.shape_3.setTransform(36.6,10.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAQQgHgHAAgJQAAgJAIgHQAHgGAHAAQAGAAAFADQAGADADAGQADAFAAAFQAAAGgDAFQgFAGgEADQgGADgFAAQgJAAgGgHgAgHgIQgEAEAAAEQAAAFAEAEQADADAEAAQAFAAADgDQADgEAAgFQAAgEgDgEQgDgDgFAAQgEAAgDADg");
	this.shape_4.setTransform(29,10.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAeIAAghIgGAAIAAgKIAGAAIAAgQIAJAAIAAAQIAGAAIAAAKIgGAAIAAAhg");
	this.shape_5.setTransform(25.1,9.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEAeIAAg7IAJAAIAAA7g");
	this.shape_6.setTransform(20.5,9.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEAfIAAgrIAJAAIAAArgAgEgRQgBgCAAgEQAAgDABgBQACgDACAAQACAAACADQACABAAADQAAAEgCACQgBACgDAAQgCAAgCgCg");
	this.shape_7.setTransform(18.5,9.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAFgHAJAAQACAAADACQAEABADADIAAgFIALAAIAAArIgLAAIAAgFQgDAEgEAAQgDACgBAAQgJAAgGgHgAgHgIQgEADAAAFQAAAFAEAEQADAEAEAAQAFAAADgEQADgEAAgFQAAgFgDgDQgEgEgEAAQgEAAgDAEg");
	this.shape_8.setTransform(14.7,10.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAYAeIgHgkIgNAkIgIAAIgMgkIgHAkIgLAAIAKg7IAMAAIAMAoIAOgoIALAAIAKA7g");
	this.shape_9.setTransform(8.2,9.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#444444").s().p("Ai5BhQgXAAgRgRQgQgQAAgXIAAhRQAAgXAQgRQARgQAXAAIFzAAQAXAAARAQQAQARAAAXIAABRQAAAXgQAQQgRARgXAAg");
	this.shape_10.setTransform(24.3,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.5,22.1);


(lib.ink02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBAOIgBgCIABgIQAAgEgCAAIgDgDQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgDACgBQAFgEADAEQAFACAAAGIAAgBQABANgGAFQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAIgBgBg");
	this.shape.setTransform(4.9,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgJAiQgYgHAAgZQAAgXAXgKQAJgFAJACQALABAHAIQAQARgPAXQgMAVgPAAIgJgCg");
	this.shape_1.setTransform(3.4,3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.9,7.3);


(lib.ink_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfADQgBgEADgEQAAgBAAgBQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAABQABAAAAAAQAAABgBAAQAAABgBABQgDAEAVgCIAjAAIADABQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAABgHAAIgZgBQgPAAgGACQgEADgCAEIgCACQgBAAgBgHg");
	this.shape.setTransform(3.8,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATAGIgBgDQAAgDgQgDQgKgCgNgBQAcAAALAEQAEACAAACQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgBABIgBgBg");
	this.shape_1.setTransform(7,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAAQAmgDAAABQgBACgDAAIgiADQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBg");
	this.shape_2.setTransform(2.6,6.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjADIACgFQALgCgGAEQgGACAXgDIAkgFIANADQgFgBgeAEIgaACIgLAEIgCABQAAAAAAgBQgBAAAAAAQAAgBABAAQAAgBABgBg");
	this.shape_3.setTransform(4.5,5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPABIgFgBIAEAAIAIAAIAVAAQAKgBgDADg");
	this.shape_4.setTransform(6.4,6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444444").s().p("AgvAcIADgVIgEgTIAAgKQACgFADgCIAPgFQANgDAPAAQAPAAAMACIAOADQAHABABAPIgDARIACAbQgCAKgFAAIgqgBQgcAAgLABQgHAAAAgKg");
	this.shape_5.setTransform(4.9,3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.8,7.8);


(lib.ink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AANAGQgQgCgKgDQgIgBgQAAIgOABQAXgGAdAGQACABAQAAIAWgBQAFAAgHgBQgHgCgGAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQACgCAFABQALABAFACQAOAEgTADIgOABIgOAAg");
	this.shape.setTransform(9.4,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgygUQAAAMAJAXQACAGAVgGIAbgHIATgDQAOgDADABQAEABABADQACADgDgBQgHgEgdAFQgTADggAIIgCAAQgKAAAAgpg");
	this.shape_1.setTransform(6.7,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPAPQgDAAgMgHQgIgGgJgBIgDgBQgCAAAKgBQANAAAHAGQAEACABgBQAEgBAAgIQACgMABAAQACAAAAAQQAAAPgGAAIgBgBg");
	this.shape_2.setTransform(15.3,17.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANgEIgGgCQgGgBgTABQAjgGABAGQABAGgBAKQAAgPgFABg");
	this.shape_3.setTransform(16.2,4.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag1AFQgDgDADgCQACgEAKgBIAYACQATABAIAAIArgDIgWADQgKACgoAAQgdABgCADIgBACIgCgBg");
	this.shape_4.setTransform(7.4,4.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444444").s().p("AATACQACgCg1gCQANgBASAAQARAAADADIACAAQACAAAEAAQAGAAgBADIgJABQgCAAgBAAQgBAAAAgBQgBAAAAAAQAAgBABAAg");
	this.shape_5.setTransform(5.2,20.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#444444").s().p("AAXAAIgtACQASgEAbACg");
	this.shape_6.setTransform(3,3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444444").s().p("AAAAWIgBguIADAuIgBADIgBgDg");
	this.shape_7.setTransform(1,18);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#444444").s().p("AAAAkQAAgCABhGIAABHIgBACIAAAAIAAgBg");
	this.shape_8.setTransform(18.8,17.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444444").s().p("AgaABIAAgCIA1ABIgRAAQgQAAgBABIgFABIgOgBg");
	this.shape_9.setTransform(3.9,21.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#444444").s().p("AgqACIBTgFQAGAEgIABIhFACg");
	this.shape_10.setTransform(13.6,20.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#444444").s().p("AAGADIgOgCIgLAAIAbgEQAOADgDABQgDADgEAAIgGgBg");
	this.shape_11.setTransform(11.7,1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#444444").s().p("AACADIgTAAIgRAAIgCgDQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAIA7ACIAKABQABAAAAAAQAAAAAAABQAAAAgBAAQAAABgBAAIghAAg");
	this.shape_12.setTransform(9.9,2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#444444").s().p("AgTAAIAnAAIgnABg");
	this.shape_13.setTransform(8,0.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#444444").s().p("AA5BSIgOgJQgOgHgVAAQgSAAgcAJQgaAHgGgBQgMgBgDiXQAAgDADgDQACgDAEAAQAfgCAvACIAwgCIAbgBQAJABAAAIQgDCLgBAJQgBAKgKAAIgOgCg");
	this.shape_14.setTransform(9.8,11.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#444444").s().p("AhXBtQgEgEgBgDIgBgUIgCicIgBgDQACgEACAAIAzgEIAAAAIAAAAIAAgTQAAgDAJAAIADAAQAWgDAtACQAEAAABAFQACAGAAAIIgBAFIAtABIABAAIADACIACAEIACCwIgBACQgDAFgDABIgCABIgDAAIhGAAIhJAAIgbACgAglhXIACAEQAAAAAAAAQABABAAAAQAAAAgBAAQAAABAAAAIgCABQgyADgDABIgBAAIADCeQAAAQACADIABAEICqgCIADAAIABAAIADgEIgDiwIgBgBIgvgBIgBgCQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAIAAgFQABgGgCgHQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQg6AAgJABIgHAAIgBAPg");
	this.shape_15.setTransform(9.8,11);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhZBmIgEixQAAgBgBAAQAAgBABAAQAAgBABAAQAAgBACAAIA1gDIgCgFIABgSIAKAAQAJgBA5AAQAAAAABABQAAAAABAAQAAABABAAQAAABAAABIACANIgBAHIAwABIACADIADCxQgDAFgCABIgFABIiPAAIgbABQgDgBgBgEg");
	this.shape_16.setTransform(9.7,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.5,22.1);


(lib.handle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").p("AgIAAQAAAHACAFQADAGADAAQADAAACgFQADgFABgIQAAgGgCgFQgDgGgEAAQgBAAgDAFQgDAFgBAHg");
	this.shape.setTransform(0.9,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAASQgDAAgDgGQgCgFAAgHQABgHADgFQADgFABAAQAEAAADAGQACAFAAAGQgBAIgDAFQgCAFgDAAIAAAAg");
	this.shape_1.setTransform(0.9,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-3.2,3.9,7.9);


(lib.envelop_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(0.8).p("AioAzQgBAAgBgBQAAgBABgBIBzhQQAagSAdABQAfAAAaATIBwBOQABABAAABQgBABgBAAg");
	this.shape.setTransform(17.1,4.7,0.977,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AioAzIgCgBIABgCIBzhQQAagSAdABQAfAAAaATIBwBOIABACIgCABg");
	this.shape_1.setTransform(17.1,4.7,0.977,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-1.3,35.5,12.2);


(lib.envelop_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgGAJIAAgWIANAFIAAAWg");
	this.shape.setTransform(1.1,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgGAJIAAgWIANAFIAAAWg");
	this.shape_1.setTransform(1.1,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AgGAJIAAgWIANAFIAAAWg");
	this.shape_2.setTransform(1.1,7.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444444").s().p("AgGAJIAAgWIANAFIAAAWg");
	this.shape_3.setTransform(1.1,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#444444").s().p("AgGAJIAAgWIANAFIAAAWg");
	this.shape_4.setTransform(34.4,16.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444444").s().p("AgGAJIAAgWIANAFIAAAWg");
	this.shape_5.setTransform(34.4,11.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#444444").s().p("AgGAJIAAgWIANAFIAAAWg");
	this.shape_6.setTransform(34.4,7.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444444").s().p("AgGAJIAAgWIANAFIAAAWg");
	this.shape_7.setTransform(34.4,2.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#444444").s().p("AgNAHIAFgNIAWAAIgFANg");
	this.shape_8.setTransform(30.6,19.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444444").s().p("AgNAHIAFgNIAWAAIgFANg");
	this.shape_9.setTransform(26.2,19.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#444444").s().p("AgNAHIAFgNIAWAAIgFANg");
	this.shape_10.setTransform(21.9,19.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#444444").s().p("AgNAHIAFgNIAWAAIgFANg");
	this.shape_11.setTransform(17.6,19.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#444444").s().p("AgNAHIAFgNIAWAAIgFANg");
	this.shape_12.setTransform(13.2,19.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#444444").s().p("AgNAHIAFgNIAWAAIgFANg");
	this.shape_13.setTransform(8.9,19.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#444444").s().p("AgNAHIAFgNIAWAAIgFANg");
	this.shape_14.setTransform(4.6,19.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#444444").s().p("Ag2AiIh3hTIFbAAIh4BSQgZARgdAAQgdAAgZgQg");
	this.shape_15.setTransform(17.7,5.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#444444").ss(0.5).p("AilAqIBxhGQAZgQAcAAQAeAAAYARIBuBJ");
	this.shape_16.setTransform(17.5,14.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AilApIBxhGQAZgQAcABQAeAAAZARIBuBIg");
	this.shape_17.setTransform(17.5,14.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#444444").ss(0.5).p("AithmIAACzQAAAJAGAGQAGAGAJAAIExAAQAJAAAGgGQAGgGAAgJIAAiz");
	this.shape_18.setTransform(17.7,10.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiYBlQgJAAgGgGQgGgHAAgIIAAi0IFbAAIAAC0QAAAIgGAHQgGAGgJAAg");
	this.shape_19.setTransform(17.7,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-1,36.9,22.3);


(lib.door_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(1,1,1).p("AhvC/IDpAAIAyl8IlXAAg");
	this.shape.setTransform(17.3,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AhvC+Ig8l7IFXAAIgyF7g");
	this.shape_1.setTransform(17.3,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,36.5,40.2);


(lib.pen_03_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.pen();
	this.instance.setTransform(0.6,56.5,1,1,0,0,0,0.6,56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:9.7},3,cjs.Ease.get(0.5)).to({rotation:0},3,cjs.Ease.get(0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.6,56.7);


(lib.pen_02_no_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.pen();
	this.instance.setTransform(0.6,56.5,1,1,0,0,0,0.6,56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.6,56.7);


// stage content:
(lib.paper_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handle
	this.instance = new lib.handle();
	this.instance.setTransform(191.5,29.8,1,1,-9.9,0,0,1.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4.8,x:205.3,y:36.3},7).to({rotation:0,x:210.1,y:39.8},7).wait(505).to({rotation:-4.8,x:205.3,y:36.3},7).to({rotation:-9.9,x:191.5,y:29.8},7).wait(19));

	// door_open
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(1,0,1).p("AhzDCIDxgHIAyl8IlfABg");
	this.shape.setTransform(202,29.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AivjAIFfgBIgyF8IjxAHg");
	this.shape_1.setTransform(202,29.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#444444").ss(1,0,1).p("Ah0DIIDqgTIAyl8IlPAIg");
	this.shape_2.setTransform(202.8,29.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Aini/IFPgIIgyF8IjqATg");
	this.shape_3.setTransform(202.8,29.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#444444").ss(1,0,1).p("Ah5DOIDmgfIAyl8Ik9ALg");
	this.shape_4.setTransform(203.8,30.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AidjCIE8gLIgzF8IjlAfg");
	this.shape_5.setTransform(203.8,30.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#444444").ss(1,0,1).p("Ah+DbIDcg5IAyl8IkfAWg");
	this.shape_6.setTransform(205.3,31.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiPjEIEfgWIgzF8IjbA5g");
	this.shape_7.setTransform(205.3,31.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#444444").ss(1,0,1).p("Ah2DjIDKhJIAyl8IkLAkg");
	this.shape_8.setTransform(206.3,32.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiFi+IELgkIgzF8IjIBJg");
	this.shape_9.setTransform(206.3,32.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#444444").ss(1,0,1).p("AhrDqICxhXIAyl8IjvAsg");
	this.shape_10.setTransform(207.6,33.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah3i9IDvgsIgyF8IixBXg");
	this.shape_11.setTransform(207.6,33.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#444444").ss(1,0,1).p("AhnD2ICdhvIAyl8IjPA9g");
	this.shape_12.setTransform(209.2,34.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ahni4IDPg8IgyF7IidBug");
	this.shape_13.setTransform(209.2,34.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#444444").ss(1,0,1).p("AhYD0IB/hrIAyl8IiuBKg");
	this.shape_14.setTransform(210.7,34.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhVipICuhKIgyF8Ih/Brg");
	this.shape_15.setTransform(210.7,34.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#444444").ss(1,0,1).p("AhVD2IAEmWICmhVIgyF8g");
	this.shape_16.setTransform(211.1,34.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhQigICmhVIgzF8Ih4Bvg");
	this.shape_17.setTransform(211.1,34.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#444444").ss(1,0,1).p("AhRD5IAFmQICehhIgyF8g");
	this.shape_18.setTransform(211.4,34.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhMiXICehhIgyF9IhxB0g");
	this.shape_19.setTransform(211.4,34.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#444444").ss(1,0,1).p("AhND7IAFmJICWhsIgyF8g");
	this.shape_20.setTransform(211.8,34.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhIiOICWhsIgyF8IhpB5g");
	this.shape_21.setTransform(211.8,34.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#444444").ss(1,0,1).p("AhKD9IAGmBICPh4IgyF8g");
	this.shape_22.setTransform(212.1,35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhEiEICPh4IgyF8IhjB9g");
	this.shape_23.setTransform(212.1,35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#444444").ss(1,0,1).p("AhGEAIAGl7ICHiEIgyF8g");
	this.shape_24.setTransform(212.5,35.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhAh7ICHiEIgyF8IhbCDg");
	this.shape_25.setTransform(212.5,35.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#444444").ss(1,0,1).p("AhDECIAHl0IB/iPIgyF8g");
	this.shape_26.setTransform(212.9,35.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag8hyICAiPIgzF8IhUCHg");
	this.shape_27.setTransform(212.9,35.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#444444").ss(1,0,1).p("Ag/EFIBNiNIAyl8Ih4Cbg");
	this.shape_28.setTransform(213.2,35.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag4hpIB4iaIgyF7IhNCNg");
	this.shape_29.setTransform(213.2,35.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},505).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(19));

	// ink_head
	this.instance_1 = new lib.ink_head();
	this.instance_1.setTransform(15.5,131.9,1,1,0,0,0,0.1,7.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(135).to({_off:false},0).to({x:49.3,alpha:1},11,cjs.Ease.get(0.5)).to({rotation:-162.2,x:29.7,y:128.2},7,cjs.Ease.get(-0.3)).to({rotation:-336,x:16.2,y:149.9},5).to({regY:7.7,rotation:-367.2,x:15.1,y:152.3},3).to({rotation:-356.9,x:12.8},3).to({rotation:-364.9,x:11.6,y:152.8},3).to({rotation:-360.7,x:10.5},5).wait(30).to({regY:7.8,rotation:-395.9,x:43.8,y:127.8},10,cjs.Ease.get(0.5)).to({scaleX:1,scaleY:1,rotation:-381.3,x:49.4,y:128.5},4).to({scaleX:1,scaleY:1,rotation:-359.8,x:49.5,y:132.4},4).wait(8).to({x:14.5,alpha:0},13,cjs.Ease.get(0.5)).wait(311));

	// ink
	this.instance_2 = new lib.ink();
	this.instance_2.setTransform(20.3,141.4,1,1,0,0,0,9.8,11);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(135).to({_off:false},0).to({x:54.1,alpha:1},11,cjs.Ease.get(0.5)).wait(82).to({x:19.1,alpha:0},13,cjs.Ease.get(0.5)).wait(311));

	// ink02
	this.instance_3 = new lib.ink02();
	this.instance_3.setTransform(53.4,137.6,0.174,0.174,0,0,0,3.5,3.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(166).to({_off:false},0).to({regX:3.4,regY:3.6,scaleX:0.25,scaleY:0.25,x:53.5,y:122},7).to({scaleX:0.51,scaleY:0.51,x:54.5,y:135.5},6).to({_off:true},1).wait(4).to({_off:false,scaleX:0.3,scaleY:0.3,x:54.1,y:122},0).to({scaleX:0.51,scaleY:0.51,x:54,y:134.2},5).to({_off:true},1).wait(4).to({_off:false,regX:3.5,scaleX:0.38,scaleY:0.38,x:54.3,y:125},0).to({regX:3.4,scaleX:0.51,scaleY:0.51,x:54.4,y:132.3},4).to({_off:true},1).wait(353));

	// pen_ani
	this.instance_4 = new lib.pen_03_ani();
	this.instance_4.setTransform(89.7,133.5,1,1,-18.1,0,0,0.8,56.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(53).to({_off:false},0).to({x:116.9},21,cjs.Ease.get(0.5)).to({_off:true},1).wait(25).to({_off:false,scaleX:1,scaleY:1,rotation:-12.1,x:84.1,y:138.5},0).to({x:123.3},27,cjs.Ease.get(0.5)).to({_off:true},1).wait(92).to({_off:false,rotation:-17.5,x:81.3,y:141.9},0).to({x:113.8,y:143.9},31,cjs.Ease.get(0.5)).to({_off:true},1).wait(38).to({_off:false,regY:56.4,rotation:-0.5,x:122.2,y:149.1},0).to({x:129.6,y:150.4},12).to({_off:true},1).wait(249));

	// pen
	this.instance_5 = new lib.pen_02_no_ani();
	this.instance_5.setTransform(202.8,28.3,0.284,0.284,42.2,0,0,0.8,56.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({regY:56.4,scaleX:1,scaleY:1,x:109.2,y:97},14,cjs.Ease.get(1)).to({regY:56.5,rotation:-18.1,x:88.2,y:111},12,cjs.Ease.get(0.5)).wait(3).to({regX:0.7,scaleX:1,scaleY:1,rotation:-18,x:88.3,y:114},0).to({regX:0.8,scaleX:1,scaleY:1,rotation:-18.1,x:89.7,y:133.5},15,cjs.Ease.get(0.5)).to({_off:true},1).wait(22).to({_off:false,x:116.9},0).to({scaleX:1,scaleY:1,rotation:-12.1,x:118.3,y:129.7},9).to({x:84.6,y:137.5},15,cjs.Ease.get(0.5)).to({_off:true},1).wait(28).to({_off:false,x:123.5,y:138.2},0).to({rotation:-1.3,x:122.9,y:130},7).to({scaleX:1,scaleY:1,rotation:-10.8,x:53.9,y:119.4},25,cjs.Ease.get(0.5)).to({rotation:-12.3,x:53.5,y:137.5},6).to({scaleX:1,scaleY:1,rotation:-10.6,y:121.9},7).to({regX:0.7,rotation:-9.6,x:54.3,y:128.2},6).to({y:123},5).to({y:128.2},5).to({y:124.7},5).to({regX:0.6,regY:56.6,rotation:-10.8,x:54.6,y:129.8},4).to({regX:0.7,regY:56.5,rotation:-9.6,x:54.3,y:122.2},4).to({regX:0.8,scaleX:1,scaleY:1,rotation:-17.5,x:81.3,y:141.9},17,cjs.Ease.get(0.5)).to({_off:true},1).wait(32).to({_off:false,regY:56.4,rotation:-10.5,x:113.2,y:143.6},0).to({rotation:-0.5,x:128.2,y:130.4},13,cjs.Ease.get(0.5)).wait(9).to({x:122.2,y:149.1},15,cjs.Ease.get(0.5)).to({_off:true},1).wait(13).to({_off:false,x:129.7,y:150.5},0).to({regX:0.9,rotation:23.5,x:129.3,y:122.3},15).wait(14).to({regX:8.1,regY:25.7,x:148.1,y:97.1},0).to({rotation:-142.5,x:141,y:87.8},20,cjs.Ease.get(1)).to({regY:25.5,scaleX:0.26,scaleY:0.26,x:201.2,y:37.1},10,cjs.Ease.get(1)).to({_off:true},1).wait(189));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_290 = new cjs.Graphics().p("AH1L2IAdgqIBIAAIgdAqg");
	var mask_graphics_291 = new cjs.Graphics().p("AHwL2IAcgqIBTAAIgcAqg");
	var mask_graphics_292 = new cjs.Graphics().p("AHqL2IAdgqIBeAAIgdAqg");
	var mask_graphics_293 = new cjs.Graphics().p("AHlL2IAcgqIBpAAIgdAqg");
	var mask_graphics_294 = new cjs.Graphics().p("AHfL2IAdgqIB0AAIgdAqg");
	var mask_graphics_295 = new cjs.Graphics().p("AHZL2IAdgqIB/AAIgdAqg");
	var mask_graphics_296 = new cjs.Graphics().p("AHUL2IAdgqICJAAIgcAqg");
	var mask_graphics_297 = new cjs.Graphics().p("AHOL2IAdgqICVAAIgdAqg");
	var mask_graphics_298 = new cjs.Graphics().p("AHJL2IAdgqICfAAIgcAqg");
	var mask_graphics_299 = new cjs.Graphics().p("AHDL2IAdgqICrAAIgdAqg");
	var mask_graphics_300 = new cjs.Graphics().p("AG+L2IAdgqIC1AAIgcAqg");
	var mask_graphics_301 = new cjs.Graphics().p("AG4L2IAdgqIDBAAIgdAqg");
	var mask_graphics_302 = new cjs.Graphics().p("AGxL2IAdgqIDMAAIgdAqg");
	var mask_graphics_381 = new cjs.Graphics().p("ABnL7IgKkFIJKAAIALEFg");
	var mask_graphics_382 = new cjs.Graphics().p("ABnL7IgIi1IJLAAIAIC1g");
	var mask_graphics_383 = new cjs.Graphics().p("ABmL7IgGilIJLAAIAGClg");
	var mask_graphics_384 = new cjs.Graphics().p("ABdL7IgGiEIJbAAIAGCEg");
	var mask_graphics_385 = new cjs.Graphics().p("ABPL7IgFhkIJsAAIAEBkg");
	var mask_graphics_386 = new cjs.Graphics().p("ABRL7IgChHIJlAAIACBHg");
	var mask_graphics_387 = new cjs.Graphics().p("ABVL7IgCgqIJeAAIACAqg");
	var mask_graphics_388 = new cjs.Graphics().p("ABZL7IAAgPIJYAAIAAAPg");
	var mask_graphics_389 = new cjs.Graphics().p("ABeL7IAAgMIJRAAIAAAMg");
	var mask_graphics_390 = new cjs.Graphics().p("ABnL7IAAgJIJKAAIABAJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(290).to({graphics:mask_graphics_290,x:60.2,y:75.9}).wait(1).to({graphics:mask_graphics_291,x:60.8,y:75.9}).wait(1).to({graphics:mask_graphics_292,x:61.3,y:75.9}).wait(1).to({graphics:mask_graphics_293,x:61.9,y:75.9}).wait(1).to({graphics:mask_graphics_294,x:62.4,y:75.9}).wait(1).to({graphics:mask_graphics_295,x:63,y:75.9}).wait(1).to({graphics:mask_graphics_296,x:63.5,y:75.9}).wait(1).to({graphics:mask_graphics_297,x:64,y:75.9}).wait(1).to({graphics:mask_graphics_298,x:64.6,y:75.9}).wait(1).to({graphics:mask_graphics_299,x:65.1,y:75.9}).wait(1).to({graphics:mask_graphics_300,x:65.7,y:75.9}).wait(1).to({graphics:mask_graphics_301,x:66.2,y:75.9}).wait(1).to({graphics:mask_graphics_302,x:66.6,y:75.9}).wait(79).to({graphics:mask_graphics_381,x:69,y:76.4}).wait(1).to({graphics:mask_graphics_382,x:69,y:76.4}).wait(1).to({graphics:mask_graphics_383,x:69,y:76.4}).wait(1).to({graphics:mask_graphics_384,x:69.6,y:76.4}).wait(1).to({graphics:mask_graphics_385,x:69.9,y:76.3}).wait(1).to({graphics:mask_graphics_386,x:69.5,y:76.3}).wait(1).to({graphics:mask_graphics_387,x:69.2,y:76.3}).wait(1).to({graphics:mask_graphics_388,x:69,y:76.3}).wait(1).to({graphics:mask_graphics_389,x:68.8,y:76.4}).wait(1).to({graphics:mask_graphics_390,x:69,y:76.4}).wait(162));

	// txt
	this.instance_6 = new lib.txt();
	this.instance_6.setTransform(107,138.7,0.333,0.161,0,-2.6,0,66.7,35.4);
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(290).to({_off:false},0).wait(262));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_220 = new cjs.Graphics().p("AEsLTIAcgrIBIAAIgcArg");
	var mask_1_graphics_221 = new cjs.Graphics().p("AEjLTIAdgrIBaAAIgdArg");
	var mask_1_graphics_222 = new cjs.Graphics().p("AEbLTIAcgrIBtAAIgdArg");
	var mask_1_graphics_223 = new cjs.Graphics().p("AESLTIAdgrIB+AAIgdArg");
	var mask_1_graphics_224 = new cjs.Graphics().p("AEKLTIAdgrICPAAIgdArg");
	var mask_1_graphics_225 = new cjs.Graphics().p("AECLTIAdgrICgAAIgdArg");
	var mask_1_graphics_226 = new cjs.Graphics().p("AD6LTIAdgrICwAAIgcArg");
	var mask_1_graphics_227 = new cjs.Graphics().p("ADzLTIAcgrIDBAAIgdArg");
	var mask_1_graphics_228 = new cjs.Graphics().p("ADrLTIAdgrIDQAAIgdArg");
	var mask_1_graphics_229 = new cjs.Graphics().p("ADkLTIAdgrIDfAAIgdArg");
	var mask_1_graphics_230 = new cjs.Graphics().p("ADdLTIAdgrIDuAAIgdArg");
	var mask_1_graphics_231 = new cjs.Graphics().p("ADWLTIAdgrID8AAIgcArg");
	var mask_1_graphics_232 = new cjs.Graphics().p("ADQLTIAcgrIELAAIgdArg");
	var mask_1_graphics_233 = new cjs.Graphics().p("ADJLTIAdgrIEYAAIgdArg");
	var mask_1_graphics_234 = new cjs.Graphics().p("ADDLTIAcgrIEmAAIgdArg");
	var mask_1_graphics_235 = new cjs.Graphics().p("AC9LTIAcgrIEzAAIgdArg");
	var mask_1_graphics_236 = new cjs.Graphics().p("AC3LTIAdgrIE+AAIgdArg");
	var mask_1_graphics_237 = new cjs.Graphics().p("ACxLTIAdgrIFKAAIgcArg");
	var mask_1_graphics_238 = new cjs.Graphics().p("ACsLTIAcgrIFXAAIgdArg");
	var mask_1_graphics_239 = new cjs.Graphics().p("ACmLTIAdgrIFhAAIgcArg");
	var mask_1_graphics_240 = new cjs.Graphics().p("AChLTIAdgrIFsAAIgdArg");
	var mask_1_graphics_241 = new cjs.Graphics().p("ACcLTIAdgrIF3AAIgdArg");
	var mask_1_graphics_242 = new cjs.Graphics().p("ACYLTIAcgrIGBAAIgdArg");
	var mask_1_graphics_243 = new cjs.Graphics().p("ACTLTIAdgrIGKAAIgdArg");
	var mask_1_graphics_244 = new cjs.Graphics().p("ACPLTIAcgrIGUAAIgdArg");
	var mask_1_graphics_245 = new cjs.Graphics().p("ACKLTIAdgrIGcAAIgcArg");
	var mask_1_graphics_246 = new cjs.Graphics().p("ACGLTIAdgrIGlAAIgdArg");
	var mask_1_graphics_247 = new cjs.Graphics().p("ACDLTIAcgrIGtAAIgdArg");
	var mask_1_graphics_248 = new cjs.Graphics().p("AB/LTIAdgrIG0AAIgdArg");
	var mask_1_graphics_249 = new cjs.Graphics().p("AB8LTIAcgrIG8AAIgdArg");
	var mask_1_graphics_250 = new cjs.Graphics().p("AB4LTIAdgrIHCAAIgcArg");
	var mask_1_graphics_251 = new cjs.Graphics().p("ABqLTIAdgrIHJAAIgdArg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(220).to({graphics:mask_1_graphics_220,x:40.1,y:72.3}).wait(1).to({graphics:mask_1_graphics_221,x:41.1,y:72.3}).wait(1).to({graphics:mask_1_graphics_222,x:42,y:72.3}).wait(1).to({graphics:mask_1_graphics_223,x:42.9,y:72.3}).wait(1).to({graphics:mask_1_graphics_224,x:43.8,y:72.3}).wait(1).to({graphics:mask_1_graphics_225,x:44.7,y:72.3}).wait(1).to({graphics:mask_1_graphics_226,x:45.6,y:72.3}).wait(1).to({graphics:mask_1_graphics_227,x:46.4,y:72.3}).wait(1).to({graphics:mask_1_graphics_228,x:47.3,y:72.3}).wait(1).to({graphics:mask_1_graphics_229,x:48.1,y:72.3}).wait(1).to({graphics:mask_1_graphics_230,x:48.8,y:72.3}).wait(1).to({graphics:mask_1_graphics_231,x:49.6,y:72.3}).wait(1).to({graphics:mask_1_graphics_232,x:50.3,y:72.3}).wait(1).to({graphics:mask_1_graphics_233,x:51,y:72.3}).wait(1).to({graphics:mask_1_graphics_234,x:51.7,y:72.3}).wait(1).to({graphics:mask_1_graphics_235,x:52.4,y:72.3}).wait(1).to({graphics:mask_1_graphics_236,x:53.1,y:72.3}).wait(1).to({graphics:mask_1_graphics_237,x:53.7,y:72.3}).wait(1).to({graphics:mask_1_graphics_238,x:54.3,y:72.3}).wait(1).to({graphics:mask_1_graphics_239,x:54.9,y:72.3}).wait(1).to({graphics:mask_1_graphics_240,x:55.5,y:72.3}).wait(1).to({graphics:mask_1_graphics_241,x:56,y:72.3}).wait(1).to({graphics:mask_1_graphics_242,x:56.5,y:72.3}).wait(1).to({graphics:mask_1_graphics_243,x:57,y:72.3}).wait(1).to({graphics:mask_1_graphics_244,x:57.5,y:72.3}).wait(1).to({graphics:mask_1_graphics_245,x:58,y:72.3}).wait(1).to({graphics:mask_1_graphics_246,x:58.4,y:72.3}).wait(1).to({graphics:mask_1_graphics_247,x:58.8,y:72.3}).wait(1).to({graphics:mask_1_graphics_248,x:59.2,y:72.3}).wait(1).to({graphics:mask_1_graphics_249,x:59.6,y:72.3}).wait(1).to({graphics:mask_1_graphics_250,x:60,y:72.3}).wait(1).to({graphics:mask_1_graphics_251,x:59.2,y:72.3}).wait(130).to({graphics:null,x:0,y:0}).wait(171));

	// txt
	this.instance_7 = new lib.txt();
	this.instance_7.setTransform(107,138.7,0.333,0.161,0,-2.6,0,66.7,35.4);
	this.instance_7._off = true;

	this.instance_7.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(220).to({_off:false},0).to({_off:true},161).wait(171));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_100 = new cjs.Graphics().p("AE/K6IAVgqIBIAAIgVAqg");
	var mask_2_graphics_101 = new cjs.Graphics().p("AEzK6IAVgqIBgAAIgUAqg");
	var mask_2_graphics_102 = new cjs.Graphics().p("AEnK6IAUgqIB5AAIgVAqg");
	var mask_2_graphics_103 = new cjs.Graphics().p("AEbK6IAVgqICPAAIgUAqg");
	var mask_2_graphics_104 = new cjs.Graphics().p("AEQK6IAUgqICnAAIgVAqg");
	var mask_2_graphics_105 = new cjs.Graphics().p("AEEK6IAVgqIC9AAIgVAqg");
	var mask_2_graphics_106 = new cjs.Graphics().p("AD5K6IAVgqIDSAAIgUAqg");
	var mask_2_graphics_107 = new cjs.Graphics().p("ADvK6IAUgqIDnAAIgUAqg");
	var mask_2_graphics_108 = new cjs.Graphics().p("ADlK6IAUgqID7AAIgUAqg");
	var mask_2_graphics_109 = new cjs.Graphics().p("ADbK6IAUgqIEPAAIgUAqg");
	var mask_2_graphics_110 = new cjs.Graphics().p("ADRK6IAUgqIEjAAIgVAqg");
	var mask_2_graphics_111 = new cjs.Graphics().p("ADIK6IAUgqIE1AAIgVAqg");
	var mask_2_graphics_112 = new cjs.Graphics().p("AC/K6IAUgqIFGAAIgUAqg");
	var mask_2_graphics_113 = new cjs.Graphics().p("AC2K6IAUgqIFYAAIgVAqg");
	var mask_2_graphics_114 = new cjs.Graphics().p("ACuK6IAUgqIFoAAIgUAqg");
	var mask_2_graphics_115 = new cjs.Graphics().p("AClK6IAVgqIF4AAIgVAqg");
	var mask_2_graphics_116 = new cjs.Graphics().p("ACeK6IAUgqIGIAAIgVAqg");
	var mask_2_graphics_117 = new cjs.Graphics().p("ACWK6IAVgqIGWAAIgVAqg");
	var mask_2_graphics_118 = new cjs.Graphics().p("ACPK6IAVgqIGkAAIgVAqg");
	var mask_2_graphics_119 = new cjs.Graphics().p("ACIK6IAVgqIGxAAIgUAqg");
	var mask_2_graphics_120 = new cjs.Graphics().p("ACCK6IAUgqIG/AAIgVAqg");
	var mask_2_graphics_121 = new cjs.Graphics().p("AB7K6IAVgqIHLAAIgVAqg");
	var mask_2_graphics_122 = new cjs.Graphics().p("AB1K6IAVgqIHXAAIgVAqg");
	var mask_2_graphics_123 = new cjs.Graphics().p("ABwK6IAUgqIHiAAIgUAqg");
	var mask_2_graphics_124 = new cjs.Graphics().p("ABrK6IAUgqIHsAAIgUAqg");
	var mask_2_graphics_125 = new cjs.Graphics().p("ABmK6IAUgqIH2AAIgUAqg");
	var mask_2_graphics_126 = new cjs.Graphics().p("ABhK6IAUgqIIAAAIgVAqg");
	var mask_2_graphics_127 = new cjs.Graphics().p("ABdK6IAUgqIIIAAIgVAqg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(100).to({graphics:mask_2_graphics_100,x:41.3,y:69.9}).wait(1).to({graphics:mask_2_graphics_101,x:42.5,y:69.9}).wait(1).to({graphics:mask_2_graphics_102,x:43.6,y:69.9}).wait(1).to({graphics:mask_2_graphics_103,x:44.8,y:69.9}).wait(1).to({graphics:mask_2_graphics_104,x:45.9,y:69.9}).wait(1).to({graphics:mask_2_graphics_105,x:47,y:69.9}).wait(1).to({graphics:mask_2_graphics_106,x:48.1,y:69.9}).wait(1).to({graphics:mask_2_graphics_107,x:49.1,y:69.9}).wait(1).to({graphics:mask_2_graphics_108,x:50.1,y:69.9}).wait(1).to({graphics:mask_2_graphics_109,x:51.1,y:69.9}).wait(1).to({graphics:mask_2_graphics_110,x:52,y:69.9}).wait(1).to({graphics:mask_2_graphics_111,x:52.9,y:69.9}).wait(1).to({graphics:mask_2_graphics_112,x:53.8,y:69.9}).wait(1).to({graphics:mask_2_graphics_113,x:54.6,y:69.9}).wait(1).to({graphics:mask_2_graphics_114,x:55.5,y:69.9}).wait(1).to({graphics:mask_2_graphics_115,x:56.3,y:69.9}).wait(1).to({graphics:mask_2_graphics_116,x:57,y:69.9}).wait(1).to({graphics:mask_2_graphics_117,x:57.7,y:69.9}).wait(1).to({graphics:mask_2_graphics_118,x:58.4,y:69.9}).wait(1).to({graphics:mask_2_graphics_119,x:59.1,y:69.9}).wait(1).to({graphics:mask_2_graphics_120,x:59.7,y:69.9}).wait(1).to({graphics:mask_2_graphics_121,x:60.3,y:69.9}).wait(1).to({graphics:mask_2_graphics_122,x:60.9,y:69.9}).wait(1).to({graphics:mask_2_graphics_123,x:61.5,y:69.9}).wait(1).to({graphics:mask_2_graphics_124,x:62,y:69.9}).wait(1).to({graphics:mask_2_graphics_125,x:62.5,y:69.9}).wait(1).to({graphics:mask_2_graphics_126,x:62.9,y:69.9}).wait(1).to({graphics:mask_2_graphics_127,x:63.3,y:69.9}).wait(254).to({graphics:null,x:0,y:0}).wait(171));

	// txt
	this.instance_8 = new lib.txt();
	this.instance_8.setTransform(107,138.7,0.333,0.161,0,-2.6,0,66.7,35.4);
	this.instance_8._off = true;

	this.instance_8.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(100).to({_off:false},0).to({_off:true},281).wait(171));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_53 = new cjs.Graphics().p("AFhKjIAAgpIBIAAIAAApg");
	var mask_3_graphics_54 = new cjs.Graphics().p("AFVKjIAAgpIBgAAIAAApg");
	var mask_3_graphics_55 = new cjs.Graphics().p("AFJKjIAAgpIB3AAIAAApg");
	var mask_3_graphics_56 = new cjs.Graphics().p("AE+KjIAAgpICNAAIAAApg");
	var mask_3_graphics_57 = new cjs.Graphics().p("AEzKjIAAgpICjAAIAAApg");
	var mask_3_graphics_58 = new cjs.Graphics().p("AEoKjIAAgpIC4AAIAAApg");
	var mask_3_graphics_59 = new cjs.Graphics().p("AEeKjIAAgpIDMAAIAAApg");
	var mask_3_graphics_60 = new cjs.Graphics().p("AEUKjIAAgpIDfAAIAAApg");
	var mask_3_graphics_61 = new cjs.Graphics().p("AELKjIAAgpIDxAAIAAApg");
	var mask_3_graphics_62 = new cjs.Graphics().p("AECKjIAAgpIEDAAIAAApg");
	var mask_3_graphics_63 = new cjs.Graphics().p("AD5KjIAAgpIEUAAIAAApg");
	var mask_3_graphics_64 = new cjs.Graphics().p("ADxKjIAAgpIEkAAIAAApg");
	var mask_3_graphics_65 = new cjs.Graphics().p("ADqKjIAAgpIEzAAIAAApg");
	var mask_3_graphics_66 = new cjs.Graphics().p("ADiKjIAAgpIFCAAIAAApg");
	var mask_3_graphics_67 = new cjs.Graphics().p("ADbKjIAAgpIFQAAIAAApg");
	var mask_3_graphics_68 = new cjs.Graphics().p("ADUKjIAAgpIFdAAIAAApg");
	var mask_3_graphics_69 = new cjs.Graphics().p("ADOKjIAAgpIFpAAIAAApg");
	var mask_3_graphics_70 = new cjs.Graphics().p("ADIKjIAAgpIF1AAIAAApg");
	var mask_3_graphics_71 = new cjs.Graphics().p("ADDKjIAAgpIF/AAIAAApg");
	var mask_3_graphics_72 = new cjs.Graphics().p("AC+KjIAAgpIGJAAIAAApg");
	var mask_3_graphics_73 = new cjs.Graphics().p("AC5KjIAAgpIGTAAIAAApg");
	var mask_3_graphics_74 = new cjs.Graphics().p("AC1KjIAAgpIGbAAIAAApg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(53).to({graphics:mask_3_graphics_53,x:42.5,y:67.6}).wait(1).to({graphics:mask_3_graphics_54,x:43.7,y:67.6}).wait(1).to({graphics:mask_3_graphics_55,x:44.8,y:67.6}).wait(1).to({graphics:mask_3_graphics_56,x:45.9,y:67.6}).wait(1).to({graphics:mask_3_graphics_57,x:47,y:67.6}).wait(1).to({graphics:mask_3_graphics_58,x:48,y:67.6}).wait(1).to({graphics:mask_3_graphics_59,x:49,y:67.6}).wait(1).to({graphics:mask_3_graphics_60,x:50,y:67.6}).wait(1).to({graphics:mask_3_graphics_61,x:50.9,y:67.6}).wait(1).to({graphics:mask_3_graphics_62,x:51.7,y:67.6}).wait(1).to({graphics:mask_3_graphics_63,x:52.6,y:67.6}).wait(1).to({graphics:mask_3_graphics_64,x:53.4,y:67.6}).wait(1).to({graphics:mask_3_graphics_65,x:54.1,y:67.6}).wait(1).to({graphics:mask_3_graphics_66,x:54.9,y:67.6}).wait(1).to({graphics:mask_3_graphics_67,x:55.5,y:67.6}).wait(1).to({graphics:mask_3_graphics_68,x:56.2,y:67.6}).wait(1).to({graphics:mask_3_graphics_69,x:56.8,y:67.6}).wait(1).to({graphics:mask_3_graphics_70,x:57.4,y:67.6}).wait(1).to({graphics:mask_3_graphics_71,x:57.9,y:67.6}).wait(1).to({graphics:mask_3_graphics_72,x:58.4,y:67.6}).wait(1).to({graphics:mask_3_graphics_73,x:58.8,y:67.6}).wait(1).to({graphics:mask_3_graphics_74,x:59.3,y:67.6}).wait(307).to({graphics:null,x:0,y:0}).wait(171));

	// txt
	this.instance_9 = new lib.txt();
	this.instance_9.setTransform(107,138.7,0.333,0.161,0,-2.6,0,66.7,35.4);
	this.instance_9._off = true;

	this.instance_9.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(53).to({_off:false},0).to({_off:true},328).wait(171));

	// white
	this.instance_10 = new lib.white();
	this.instance_10.setTransform(103.6,126.4,1,1,0,0,0,41.2,41.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15).to({_off:false},0).to({alpha:0},25).to({_off:true},341).wait(171));

	// 圖層 44
	this.instance_11 = new lib.mailtous();
	this.instance_11.setTransform(110.6,111.3,0.113,0.113,0,0,0,24.4,22.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(481).to({_off:false},0).to({regX:24.3,scaleX:1.19,scaleY:1.19,y:103.6},5,cjs.Ease.get(0.5)).to({regY:22.3,scaleX:1.04,scaleY:1.04,y:103.7},2).to({regY:22.2,scaleX:1.19,scaleY:1.19,y:103.6},2).wait(12).to({regX:24.4,scaleX:0.11,scaleY:0.11},6,cjs.Ease.get(0.5)).to({_off:true},1).wait(43));

	// envelop_head
	this.instance_12 = new lib.envelop_head();
	this.instance_12.setTransform(110.5,112.6,1.3,1.3,0,0,0,17.2,9.7);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(469).to({_off:false},0).to({regY:9.9,scaleY:0.12,y:112.7},5,cjs.Ease.get(0.5)).wait(1).to({regY:9.5,rotation:179.9,x:110.7,y:112.3},0).to({regX:17.3,scaleY:1.32,x:110.3},5,cjs.Ease.get(0.5)).wait(26).to({regX:17.1,regY:9.6,scaleX:0.11,scaleY:0.11,rotation:151.7,x:198.2,y:29.8},19,cjs.Ease.get(-1)).to({_off:true},1).wait(26));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_457 = new cjs.Graphics().p("AgCDuIgTgLIish7IhUleIIrAKIgFFbIiJBjQgeAVgTAHQgSAHgYABIgHABQgVAAgTgJg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(457).to({graphics:mask_4_graphics_457,x:106,y:99.4}).wait(24).to({graphics:null,x:0,y:0}).wait(71));

	// paper
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#444444").ss(0.5).p("AB3g+IADB7IjzACIAAh7g");
	this.shape_30.setTransform(110.5,91.6,1.583,1.583);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ah5g8IDwgCIADB7IjzACg");
	this.shape_31.setTransform(110.5,91.6,1.583,1.583);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#444444").ss(0.5).p("AjAhfIF9gEIAEDEImBADg");
	this.shape_32.setTransform(110.5,95.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AjAhfIF9gEIAEDEImBADg");
	this.shape_33.setTransform(110.5,95.5);

	this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31,p:{y:91.6}},{t:this.shape_30,p:{y:91.6}}]},457).to({state:[{t:this.shape_33,p:{y:95.5}},{t:this.shape_32,p:{y:95.5}}]},1).to({state:[{t:this.shape_33,p:{y:99.2}},{t:this.shape_32,p:{y:99.2}}]},1).to({state:[{t:this.shape_33,p:{y:102.7}},{t:this.shape_32,p:{y:102.7}}]},1).to({state:[{t:this.shape_33,p:{y:106}},{t:this.shape_32,p:{y:106}}]},1).to({state:[{t:this.shape_33,p:{y:109.1}},{t:this.shape_32,p:{y:109.1}}]},1).to({state:[{t:this.shape_33,p:{y:111.9}},{t:this.shape_32,p:{y:111.9}}]},1).to({state:[{t:this.shape_33,p:{y:114.5}},{t:this.shape_32,p:{y:114.5}}]},1).to({state:[{t:this.shape_33,p:{y:116.9}},{t:this.shape_32,p:{y:116.9}}]},1).to({state:[{t:this.shape_33,p:{y:119}},{t:this.shape_32,p:{y:119}}]},1).to({state:[{t:this.shape_33,p:{y:120.9}},{t:this.shape_32,p:{y:120.9}}]},1).to({state:[{t:this.shape_33,p:{y:122.6}},{t:this.shape_32,p:{y:122.6}}]},1).to({state:[{t:this.shape_31,p:{y:124.1}},{t:this.shape_30,p:{y:124.1}}]},1).to({state:[]},12).wait(71));

	// paper
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#444444").ss(0.5).p("ACogLIgxAXIkCgCIgggSg");
	this.shape_34.setTransform(119.1,146);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AiJAKIgggSIFTgDIgwAXg");
	this.shape_35.setTransform(118.9,146);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#444444").ss(0.5).p("ACigEIg0AJIkDgBIgcgIg");
	this.shape_36.setTransform(120,146.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AiNAEIgcgIIFTAAIg0AJg");
	this.shape_37.setTransform(119.2,146.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#444444").ss(0.5).p("ACcABIggABIkDgBIgUgCg");
	this.shape_38.setTransform(118.6,147);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AiHABIgUgCIE3ACIggABg");
	this.shape_39.setTransform(118.6,147);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#444444").ss(0.5).p("ABxgGIAwAJIlUADIAggMg");
	this.shape_40.setTransform(119.8,147.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AiKgFIEEAAIAwAJIlUACg");
	this.shape_41.setTransform(118.9,147.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#444444").ss(0.5).p("AB2gJIAsAPIlNAEIAdgTg");
	this.shape_42.setTransform(119.2,148.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AiJgJIEEAAIAsAPIlNAEg");
	this.shape_43.setTransform(118.7,148.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#444444").ss(0.5).p("AinAPIAYgeIEEAAIAtAbg");
	this.shape_44.setTransform(119.4,148.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AiMgPIEEAAIAtAcIlJADg");
	this.shape_45.setTransform(119.1,148.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#444444").ss(0.5).p("AilAVIATgqIEEAAIAuAog");
	this.shape_46.setTransform(119.7,149.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AiPgVIEEAAIAuAoIlFACg");
	this.shape_47.setTransform(119.4,149.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#444444").ss(0.5).p("AiiAbIANg1IEEAAIAvA0g");
	this.shape_48.setTransform(120,149.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AiTgaIEEAAIAvA0Ik/ABg");
	this.shape_49.setTransform(119.8,149.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#444444").ss(0.5).p("AigAhIAHhBIEEAAIAxBBg");
	this.shape_50.setTransform(120.3,150.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AidAhIAHhBIEEAAIAwBBg");
	this.shape_51.setTransform(120.1,150.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#444444").ss(0.5).p("ABognIAzBOIk4gBIABhNg");
	this.shape_52.setTransform(120.6,151.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AibAmIABhMIEEAAIAyBOg");
	this.shape_53.setTransform(120.5,151.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#444444").ss(0.5).p("AiMAdIAZhGIDrANIAVBGg");
	this.shape_54.setTransform(118.4,147.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AiMAdIAZhGIDrANIAVBGg");
	this.shape_55.setTransform(118.4,147.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#444444").ss(0.5).p("AiJAKIBOg7IDJAoIgnA7g");
	this.shape_56.setTransform(116.1,139.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AiLAKIBOg7IDJAoIgnA7g");
	this.shape_57.setTransform(116.3,139.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#444444").ss(0.5).p("AiSgFIB/g1ICpA/IhfA1g");
	this.shape_58.setTransform(115.3,131.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AiTgFIB+g0ICpA/IheA1g");
	this.shape_59.setTransform(115.4,131.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#444444").ss(0.5).p("AiagVICpgsICOBWIiRAtg");
	this.shape_60.setTransform(114.5,124.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AibgVICpgsICOBWIiRAtg");
	this.shape_61.setTransform(114.6,124.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#444444").ss(0.5).p("AihgjIDRgkIB0BrIi+Akg");
	this.shape_62.setTransform(113.7,118.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AiigjIDSgkIBzBrIi+Akg");
	this.shape_63.setTransform(113.8,118.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#444444").ss(0.5).p("AiogvID2geIBcB+IjnAdg");
	this.shape_64.setTransform(113.1,112.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AiogvID1geIBdB+IjnAdg");
	this.shape_65.setTransform(113.1,112.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#444444").ss(0.5).p("Aiug7IEWgXIBHCOIkLAXg");
	this.shape_66.setTransform(112.5,107.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("Aiug7IEWgXIBHCOIkLAXg");
	this.shape_67.setTransform(112.5,107.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#444444").ss(0.5).p("AizhEIExgTIA2CdIkqASg");
	this.shape_68.setTransform(112,103.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AizhEIExgTIA2CcIkqATg");
	this.shape_69.setTransform(112,103.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#444444").ss(0.5).p("Ai3hNIFJgOIAmCpIlFAOg");
	this.shape_70.setTransform(111.5,99.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("Ai3hNIFJgOIAmCpIlFAOg");
	this.shape_71.setTransform(111.6,99.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#444444").ss(0.5).p("Ai6hTIFbgKIAaCyIlbAKg");
	this.shape_72.setTransform(111.2,96.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("Ai6hTIFbgKIAaCyIlbAKg");
	this.shape_73.setTransform(111.2,96.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#444444").ss(0.5).p("Ai9hYIFqgIIARC6IlsAHg");
	this.shape_74.setTransform(110.9,94.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("Ai9hYIFrgIIAQC6IlsAHg");
	this.shape_75.setTransform(110.9,94.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#444444").ss(0.5).p("Ai/hdIF1gFIAKC/Il4AGg");
	this.shape_76.setTransform(110.7,92.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("Ai/hcIF1gGIAKDAIl4AFg");
	this.shape_77.setTransform(110.7,92.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#444444").ss(0.5).p("AjAheIF7gFIAGDDIl/AEg");
	this.shape_78.setTransform(110.6,91.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AjAhfIF7gEIAGDDIl/AEg");
	this.shape_79.setTransform(110.6,91.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#444444").ss(0.5).p("AB3g+IADB7IjzACIAAh7g");
	this.shape_80.setTransform(110.5,91.6,1.583,1.583);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("Ah5g8IDwgCIADB7IjzACg");
	this.shape_81.setTransform(110.5,91.6,1.583,1.583);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_35},{t:this.shape_34}]},417).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},5).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[]},13).wait(95));

	// envelop_head
	this.instance_13 = new lib.envelop_head();
	this.instance_13.setTransform(110.2,134.8,1.3,1.3,0,0,0,17.2,9.7);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(439).to({_off:false},0).to({y:112.6,alpha:1},15,cjs.Ease.get(1)).to({_off:true},15).wait(83));

	// envelop_body
	this.instance_14 = new lib.envelop_body();
	this.instance_14.setTransform(108.6,147.6,1.271,1.271,0,0,0,16.1,10.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(439).to({_off:false},0).to({y:125.4,alpha:1},15,cjs.Ease.get(1)).wait(52).to({regY:9.7,scaleX:0.1,scaleY:0.1,rotation:-28.2,x:198.6,y:30.8},19,cjs.Ease.get(-1)).to({_off:true},1).wait(26));

	// paper
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#444444").ss(0.5).p("AAJAAIgCCFIgPjJIAHhAg");
	this.shape_82.setTransform(104,139.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgIhEIAHhAIAKCEIgCCFg");
	this.shape_83.setTransform(104.1,139.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#444444").ss(0.5).p("AAFiHIACDgIgNA5IACiPg");
	this.shape_84.setTransform(105.6,138.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgEAAIAJiMIACDgIgNA5g");
	this.shape_85.setTransform(105.7,139.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#444444").ss(0.5).p("AgXCVIACiTIAeiGIAPDKg");
	this.shape_86.setTransform(107.3,138.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgVgDIAeiJIAPDKIgvBPg");
	this.shape_87.setTransform(107.4,139.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#444444").ss(0.5).p("AgoCQIACiUIAyiGIAdC1g");
	this.shape_88.setTransform(109,139.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgmgHIAyiFIAdC1IhRBkg");
	this.shape_89.setTransform(109,140);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#444444").ss(0.5).p("Ag5COIACiYIBHiCIAqCgg");
	this.shape_90.setTransform(110.7,140.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("Ag3gKIBHiCIAqCfIhzB6g");
	this.shape_91.setTransform(110.7,140.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#444444").ss(0.5).p("AATiNIA3CMIiUCOIACibg");
	this.shape_92.setTransform(112.4,140.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AhIgNIBch/IA3CLIiVCOg");
	this.shape_93.setTransform(112.4,140.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#444444").ss(0.5).p("AhaCBIACibIBzhmIA/COg");
	this.shape_94.setTransform(114.1,142);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AhXgaIBzhmIA/COIi0Bzg");
	this.shape_95.setTransform(114,142);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#444444").ss(0.5).p("AhrB0IACibICMhNIBHCRg");
	this.shape_96.setTransform(115.7,143.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AhognICMhMIBHCRIjVBWg");
	this.shape_97.setTransform(115.6,143.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#444444").ss(0.5).p("Ah7BoIACibICkg0IBPCVg");
	this.shape_98.setTransform(117.3,144.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("Ah4gzICkg0IBPCVIj1A6g");
	this.shape_99.setTransform(117.2,144.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#444444").ss(0.5).p("AiMBbIACibIC9gaIBWCYg");
	this.shape_100.setTransform(119,145.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AiIhAIC8gaIBXCYIkVAdg");
	this.shape_101.setTransform(118.9,145.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#444444").ss(0.5).p("AA7hNIBeCcIk1AAIACibg");
	this.shape_102.setTransform(120.6,147);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AiaBOIACiaIDVgBIBeCbg");
	this.shape_103.setTransform(120.5,147);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#444444").ss(0.5).p("ABQhPIAXBEIA3BbIk1AAIABhOIgLhNg");
	this.shape_104.setTransform(120.1,146.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AiVBQIABhOIgLhNIDxgEIAWBEIA4Bbg");
	this.shape_105.setTransform(120,146.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#444444").ss(0.5).p("ACAhLIgQA9IA3BbIk1AAIABhNIgbhHg");
	this.shape_106.setTransform(119.2,147.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AiNBMIABhMIgbhHIEogFIgQA+IA3Bag");
	this.shape_107.setTransform(119.1,147.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#444444").ss(0.5).p("ACPhIIgcA2IA3BbIk1AAIABhMIggg/g");
	this.shape_108.setTransform(118.9,147.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AiLBJIABhMIgfg/IE5gGIgdA2IA4Bbg");
	this.shape_109.setTransform(118.9,147.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#444444").ss(0.5).p("ACZhCIgmArIA4BbIk1AAIABhMIghg0g");
	this.shape_110.setTransform(118.9,148.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AiKBDIABhLIghg0IFDgHIgmAsIA4Bag");
	this.shape_111.setTransform(118.9,148.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#444444").ss(0.5).p("ACeg7IgrAdIA3BbIk1AAIABhMIgegog");
	this.shape_112.setTransform(118.9,148.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AiLA8IABhLIgfgpIFHgDIgsAdIA4Bag");
	this.shape_113.setTransform(119,148.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#444444").ss(0.5).p("ACgg3IgyAVIA4BaIk1AAIABhMIgfgcg");
	this.shape_114.setTransform(119.4,149.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AiLA4IABhMIgfgdIFOgGIgzAVIA4Bag");
	this.shape_115.setTransform(119,149.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#444444").ss(0.5).p("AChgxIg0AQIA1BTIk1AAIABhMIgggUg");
	this.shape_116.setTransform(119.7,149.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AiLAyIABhMIgfgUIFTgDIg0AQIA1BTg");
	this.shape_117.setTransform(118.9,149.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#444444").ss(0.5).p("AibglIECABIAyBLIk1AAg");
	this.shape_118.setTransform(120.7,151);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AiaAmIABhLIEDABIAxBKg");
	this.shape_119.setTransform(120.5,151);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_83},{t:this.shape_82}]},399).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[]},9).wait(126));

	// paper
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#444444").ss(0.5).p("ADrAaInbAAIhJgvIE7ACIE4gGg");
	this.shape_120.setTransform(103.2,136.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AjwAaIhJgvIE7ACIE4gGIhPAzg");
	this.shape_121.setTransform(103.2,136.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#444444").ss(0.5).p("AD2AQInbAAIhWgWIFIgEIE4gEg");
	this.shape_122.setTransform(102.1,137.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AjqAPIhVgWIFIgEIE3gDIhPAdg");
	this.shape_123.setTransform(102.5,137.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#444444").ss(0.5).p("ADeAHInbAAIhigMIFSAAIFsAAg");
	this.shape_124.setTransform(104.4,138.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("Aj9AGIhhgLIFRAAIFtAAIiCALg");
	this.shape_125.setTransform(104.4,138.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#444444").ss(0.5).p("AkKgFIAcgOIHWACIAaALIA+AZIp8gIg");
	this.shape_126.setTransform(103.2,141.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("Ak+ALIAzgQIAbgNIHWACIAaAKIA+AZg");
	this.shape_127.setTransform(103.3,141.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#444444").ss(0.5).p("AkSgOQAYgJAMgOIHWACIAOAHQAPAGAGABQAUAHAbAZQAOAOAKAMIqggKQAJgIAMgKQAYgRAPgGg");
	this.shape_128.setTransform(103.2,143);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AlQAcIAWgSQAYgRAPgHQAYgJALgNIHWACIAPAGQAPAHAFAAQAVAHAbAZQAOAOAJAMg");
	this.shape_129.setTransform(103.3,143);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#444444").ss(0.5).p("AkOgRIAggeIHWACIAoAgIBGA8IqqgGg");
	this.shape_130.setTransform(103.2,144);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AlUAqIBFg7IAggdIHWACIApAfIBGA8g");
	this.shape_131.setTransform(103.2,144);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#444444").ss(0.5).p("AkkAAQAOgXAWgVIAUgQIHWACIAoA2QASAWA+AoIrCACQAJgGANgKQAYgWAOgWg");
	this.shape_132.setTransform(103,145.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AlKAsQAYgWAOgWQAOgXAWgVIATgPIHWACIApA2QARAWA/AnIrDACQAKgFANgLg");
	this.shape_133.setTransform(103,145.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#444444").ss(0.5).p("AlYBIQADgDAHgMQAHgMAEgEQAVgXAOgXQAOgXATgWIAbgVIHJACIANAKIAcAnQAlAzAkAeIgUgCg");
	this.shape_134.setTransform(102.9,146.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AlNA5QAGgMAFgEQAUgXAPgXQANgXAUgWIAagVIHJACIAOAKIAcAnQAlAzAkAeIgUgCIqbANQADgDAHgMg");
	this.shape_135.setTransform(102.9,146.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#444444").ss(0.5).p("AFKBMIqUABIBciaIHYABg");
	this.shape_136.setTransform(103.1,147.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AjthMIHXAAIBgCYIqUABg");
	this.shape_137.setTransform(103.1,147.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#444444").ss(0.5).p("AFKBMIk6ACIlagBIBciaIEAABIDYAAg");
	this.shape_138.setTransform(103.1,147.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AlKBNIBdiaID/ABIDYAAIBgCYIk6ACg");
	this.shape_139.setTransform(103.1,147.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#444444").ss(0.5).p("AkrBAIBKidIDWAiIDWAAIBgCYIk4ACg");
	this.shape_140.setTransform(106.3,145.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AkqBAIBKidIDWAhIDWAAIBfCYIk4ACg");
	this.shape_141.setTransform(106.2,145.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#444444").ss(0.5).p("AkNAzIA4igICqBDIDWAAIBgCYIk4ACg");
	this.shape_142.setTransform(109.4,143.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AkLAyIA4igICqBDIDWAAIBfCYIk4ACg");
	this.shape_143.setTransform(109.3,143.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#444444").ss(0.5).p("AjuAnIAmijIB+BjIDWAAIBgCYIk4ACg");
	this.shape_144.setTransform(112.6,142.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AjtAlIAnijIB+BjIDWAAIBfCYIk4ACg");
	this.shape_145.setTransform(112.4,142.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#444444").ss(0.5).p("ADNCSIk4ACIhkh4IAUimIBSCEIDWAAg");
	this.shape_146.setTransform(115.7,140.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AjOAXIAUimIBSCEIDWAAIBhCYIk5ACg");
	this.shape_147.setTransform(115.5,140.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#444444").ss(0.5).p("AjCgDIAQiFIA7CFIDWAAIBgCYIk4ACg");
	this.shape_148.setTransform(117.1,139.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AjAgKIAQiFIA7CFIDWAAIBgCYIk4ACg");
	this.shape_149.setTransform(116.9,140.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#444444").ss(0.5).p("Ai0ghIALhjIAkCEIDWAAIBgCZIk4ACg");
	this.shape_150.setTransform(118.5,139.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AiygsIALhjIAkCFIDWAAIBgCYIk4ACg");
	this.shape_151.setTransform(118.3,140.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#444444").ss(0.5).p("ACjClIk4ACIgRjgIAHhAIAMCEIDWAAg");
	this.shape_152.setTransform(119.8,138.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AikhQIAHhAIAMCGIDWAAIBgCYIk4ACg");
	this.shape_153.setTransform(119.7,140.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#444444").ss(0.5).p("ACbBLIk4ACIACiaIDWAAg");
	this.shape_154.setTransform(120.7,147.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AiahNIDWAAIBhCYIk5ACg");
	this.shape_155.setTransform(120.5,147.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_121},{t:this.shape_120}]},382).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_141},{t:this.shape_140}]},1).to({state:[{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[]},10).wait(143));

	// paper
	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#444444").ss(0.5).p("AFJBNIksgMIlmAMIBYiZIHaAAg");
	this.shape_156.setTransform(103.3,147.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AAdBBIlmAMIBYiZIHaAAIBhCZg");
	this.shape_157.setTransform(103.3,147.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_157},{t:this.shape_156}]},382).to({state:[]},8).wait(162));

	// paper
	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#444444").ss(0.5).p("AFDCXQjKgChigKQhvgLh/gDIhoAAQAkg9A0hcQAbgxAWgmIARgbIA9gFQBJgFA4AFQBWAIA7AEIAcAkQAfAyAUBFQAMAsAgAwQARAYANAPg");
	this.shape_158.setTransform(103.9,116.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AAVCLQhvgLh+gDIhoAAQAjg9A0hcIAxhXIARgbIA9gFQBJgFA4AFICSAMIAbAkQAfAyAUBFQAMAsAgAwQARAYAOAPQjLgChigKg");
	this.shape_159.setTransform(104.1,116.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#444444").ss(0.5).p("AlAB+QAkg+AzhbQAcgxAWgmIARgbIA8gGQAJAAAJgBQA/gCAxAEQBbAHA2ADQAEAEAEAFIAMAQQAEAFAEAFQAVAjARAvQAHASAGAUQANArAhAwQAOAWANAPQABABABACQg4gBgxgCQh2gDhFgFQgFAAgEgBQhsgJh8gDQgDAAgDAAg");
	this.shape_160.setTransform(103.9,118.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("ADZCTQh2gDhFgFIgJgBQhsgJh8gDIgFAAIhpAAQAkg+A0hbIAxhXIARgbIA9gGIARgBQBAgCAwAEQBbAHA3ADIAIAJIALAQIAIAKQAVAjARAvQAHASAHAUQAMArAhAwQAPAWANAPIABADIhpgDg");
	this.shape_161.setTransform(104,118.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#444444").ss(0.5).p("AlBB+QAkg/AzhZQAcgxAXgnIAQgbIA8gGQAJAAAJAAQA/gCAwAEQBbAGA3ACQAFAEAEAEIALAQQAEAFAEAGQAVAiARAvQAGASAIAVQANAqAhAxQAOAWAOAPQAAABABABQg4gBgygBQh2gEhFgEQgEgBgFAAQhsgHh8gDQgDAAgDAAg");
	this.shape_162.setTransform(103.9,120.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("ADZCSQh3gEhEgEIgJgBQhtgHh7gDIgGAAIhogBIBXiYIAzhYIAQgbIA8gGIASAAQA/gCAwAEQBbAGA3ACIAIAIIAMAQIAHALQAWAiAQAvIAPAnQANAqAgAxQAPAWANAPIABACIhpgCg");
	this.shape_163.setTransform(103.9,120.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#444444").ss(0.5).p("AlAB/QAkhAA0hYQAbgxAXgnIARgbIA7gGQAJAAAJgBQA/AAAxADQBbAEA3ACQAEADAFAEIALARQAEAFADAFQAVAjARAvQAHASAIAVQAOApAhAyQAOAVANAQQABABAAABQg3gBgzgCQh3gEhEgEQgFAAgEAAQhsgGh8gCQgDAAgDAAg");
	this.shape_164.setTransform(103.6,122.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("ADZCQQh3gEhEgDIgJgBQhsgFh8gDIgGAAIhpAAIBYiZIAyhXIARgbIA7gHIASAAQA/gBAxADQBbAFA3ABIAJAHIALARIAHALQAVAiARAwIAPAmQAOAqAhAxQAOAWANAPIABADIhqgEg");
	this.shape_165.setTransform(103.8,122.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#444444").ss(0.5).p("AlCCAQAkhBAzhXQAcgwAXgoIARgbIA7gHQAJAAAJAAQA/AAAwADQBbADA4ABQAEADAFADIALARQADAFAEAGQAUAiASAxQAGAQAKAWQAOApAhAyQAOAVANAQQAAABAAABQg2gCg0gBQh4gFhDgCQgFgBgFAAQhrgEh9gCQgDAAgDAAg");
	this.shape_166.setTransform(103.8,124.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("ADZCPIi7gHIgKAAQhrgFh9gCIgGAAIhoAAIBXiZIAzhYIARgbIA7gGIASAAQA/gBAwADQBbAEA4AAIAJAHIALARIAHAKQAUAjASAwIAQAnQAOAoAhAyQAOAVANARIAAACIhqgEg");
	this.shape_167.setTransform(103.8,124);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#444444").ss(0.5).p("AlBCBQAkhCAzhWQAcgwAYgoIARgbIA6gHQAJAAAJAAQA/ABAxACQBbACA3AAQAFADAFADIALARQADAFAEAGQATAiATAxQAGAQAKAXQAOAoAhAyQAOAVANARQAAABAAABQg1gCg1gDQh4gEhDgCQgFAAgFAAQhrgDh9gCQgDAAgDAAg");
	this.shape_168.setTransform(103.5,125.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("ADZCNIi6gGIgLAAIjogFIgGAAIhpgBQAlhCAzhWIA0hYIAQgbIA7gHIASAAQA/ABAwACQBbACA4AAIAJAGIALARIAHALQATAiATAxIAQAnQAPAoAhAyQAOAVANARIAAACIhrgFg");
	this.shape_169.setTransform(103.7,125.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#444444").ss(0.5).p("AlCCCQAkhDAzhVQAcgwAZgoIAQgbIA6gHQAJAAAJAAQA/ABAxACQBbABA3AAQAGACAEADIALARQADAFAEAGQATAiATAxQAGAQALAXQAPAnAhAzQANAVAOARQgBABAAABQg1gDg2gCQh4gFhDgBQgFAAgFAAQhrgCh9gBQgDAAgDAAg");
	this.shape_170.setTransform(103.5,127.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("ADZCMQh5gFhCgBIgKAAIjogDIgGAAIhpgBQAkhDAzhVIA0hYIARgbIA6gHIASAAIBvADQBcABA3AAIAKAFIALARIAGALQAUAiATAxIAQAnQAQAnAhAzQANAVAOARIgBACIhrgFg");
	this.shape_171.setTransform(103.7,127.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#444444").ss(0.5).p("AlDCDQAlhEAzhUQAbgwAZgoIARgbIA5gIQAJABAJAAQBAABAwACQBbABA4gCQAFADAFACIAKARQAEAFADAGQASAiAUAyQAGAPALAXQAQAnAhA0QANAUAOASQgBABAAABQg1gDg2gDQh5gFhCAAQgFAAgGAAQhqgBh+gBQgDAAgDAAg");
	this.shape_172.setTransform(103.5,128.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("ADZCLQh5gFhCAAIgLAAIjogCIgGAAIhpgBQAlhEAzhUIA0hYIARgbIA5gIIASABIBwADQBbABA4gCIAKAFIAKARIAHALQASAiAUAyIARAmQAQAnAhA0QANAUAOASIgBACIhrgGg");
	this.shape_173.setTransform(103.6,128.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#444444").ss(0.5).p("AlDCEQAkhFAzhUQAcgvAZgpIARgbIA5gHQAJAAAJAAQA/ACAwABQBcABA4gCQAFACAFABIAKASQAEAFADAGQASAhAUAzQAFAPANAYQAPAmAiA0QANAUANASQAAABgBABQg0gDg3gDQh6gGhBABQgFAAgGAAQhqABh+gBQgDAAgDAAg");
	this.shape_174.setTransform(103.5,129.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("ADZCKQh6gFhBAAIgLAAQhqABh+gBIgGAAIhpgBQAkhEAzhVIA1hXIARgbIA5gIIASABIBvACQBcABA4gCIAKADIAKASIAHAMQASAgAUA0QAFAOANAYQAPAmAiA0IAaAnIgBABIhrgGg");
	this.shape_175.setTransform(103.6,129.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#444444").ss(0.5).p("AlECFQAlhGAzhTQAcguAZgqIARgbIA4gIQAJABAJAAQBAADAwAAQBbAAA4gDQAGACAFABIAKASQADAGAEAFQARAiAVAzQAFAOANAYQAQAmAhA0QAOAUANATQgBABgBAAQg0gDg3gDQh6gGhBABQgFAAgGAAQhqACh+AAQgDAAgDAAg");
	this.shape_176.setTransform(103.4,131.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("ADZCJQh6gFhBAAIgLAAQhqADh+gBIgGAAIhqgBQAlhFAzhUIA1hXIARgbIA4gIIASABQBAACAwAAQBbAAA4gCIALACIAKASIAHALQARAiAVAzIASAmQAQAmAhA0IAbAoIgCABIhrgHg");
	this.shape_177.setTransform(103.5,131.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#444444").ss(0.5).p("AlFCFQAlhGAzhSQAbguAagqIARgbIA4gIQAJAAAJABQBAACAwABQBbgBA4gDQAGABAFABIAKASQADAGAEAFQARAhAUA0QAGAOANAYQARAlAhA1QANAUAOAUQgBAAgBABQg0gEg4gDQh7gGhAACQgFAAgGAAQhqADh+gBQgDAAgDAAg");
	this.shape_178.setTransform(103.5,132.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("ADYCIQh6gGhBACIgKAAQhrADh+AAIgGAAIhpgBQAkhHAzhSIA1hYIARgbIA4gIIASABQBAADAwAAQBcgBA4gDIAKACIALASIAGAMQARAhAVAzQAFAOAOAYQAQAmAiA0IAaAoIgCABQg0gEg4gDg");
	this.shape_179.setTransform(103.5,132.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#444444").ss(0.5).p("AlFCHQAlhHAyhSQAcguAagqIARgbIA4gIQAJAAAJABQA/ADAxAAQBbgCA4gDQAGABAFABIAKASQADAFAEAGQAQAhAVA0QAGANAOAaQAQAkAiA1QANAUANAUQgBAAgBABQgzgEg5gDQh7gHhAADQgFAAgGAAQhqAEh/gBQgDAAgDAAg");
	this.shape_180.setTransform(103.4,133.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("ADYCIQh6gGhAACIgLAAQhrAEh+AAIgGAAIhqgBQAlhHAzhRIA1hZIARgbIA4gIIASABQBAAEAwgBQBbgCA5gDIALACIAKASIAGALQARAiAVA0IATAmQARAkAhA1IAbAoIgCABIhtgHg");
	this.shape_181.setTransform(103.5,133.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#444444").ss(0.5).p("AlGCIQAlhIAzhRQAbguAagqIARgbIA4gIQAJAAAJABQBAADAwAAQBbgDA5gDQAFABAGAAIAKASQADAGADAGQAQAhAWA0QAFANAOAZQARAkAiA2QANAUANAUQgBAAgBABQgzgFg5gDQh8gGg/ACQgGABgGAAQhpAFh/gBQgDAAgDAAg");
	this.shape_182.setTransform(103.4,134.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("ADZCIQh8gHg/ACIgMABQhpAFiAAAIgFAAIhqgBQAlhIAzhQIA1hZIARgbIA4gIIASABQBAAEAvAAQBcgDA5gEIAKACIAKARIAHAMQAQAhAVA0QAFANAPAZQARAlAiA1IAaAoIgCABQgzgEg5gDg");
	this.shape_183.setTransform(103.5,134.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#444444").ss(0.5).p("AlHCJQAlhIAyhRQAcgtAbgrIAQgbIA4gJQAJABAJABQBAAEAwgBQBbgDA5gEQAGABAFAAIAKASQADAGADAGQAQAgAWA1QAFANAPAaQARAjAiA2QAMAUAOAUQgCAAgBABQgzgFg5gDQh8gHg/ADQgGABgFAAQhqAGh/AAQgDAAgDAAg");
	this.shape_184.setTransform(103.5,135.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("ADYCIQh7gIhAADIgLABQhqAGh+AAIgHAAIhqgBQAlhIAzhQIA2hZIARgbIA3gJIASACQBAAEAxAAQBbgEA4gEIAMABIAKASIAGAMQAPAgAXA2QAFAMAPAaQARAjAhA2IAaApIgCAAQgzgEg6gDg");
	this.shape_185.setTransform(103.4,135.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#444444").ss(0.5).p("AlHCKQAlhJAyhQQAcgtAbgsIARgbIA3gIQAJABAJABQBAAEAwgBQBbgEA5gEQAGAAAFABIAKASQADAFADAHQAQAgAWA1QAFAMAPAbQASAjAhA2QANAUANAUQgBAAgBABQgzgFg6gDQh8gHg/ADQgGABgFAAQhqAGh/AAQgDAAgDAAg");
	this.shape_186.setTransform(103.4,136.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("ADYCHQh7gHhAAEIgLAAQhqAHh/AAIgGAAIhqgBQAlhJAzhQIA2hYIARgbIA3gIIASABQBAAEAwgBQBcgEA4gEIAMABIAKASIAGAMQAPAgAWA1QAFAMAQAbQARAjAiA2IAaAoIgDABQgygFg7gDg");
	this.shape_187.setTransform(103.4,136.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#444444").ss(0.5).p("AlHCLQAlhJAzhQQAcgtAagsIARgbIA3gIQAJABAJABQBAAEAwgBQBcgEA4gFQAGAAAGAAIAKATQADAFADAHQAPAgAWA1QAFAMAQAbQASAiAiA3QAMAUANAUQgBABgCAAQgygFg6gDQh9gIg+AEQgGABgGAAQhpAHiAABQgDAAgDAAg");
	this.shape_188.setTransform(103.3,136.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("ADYCHQh8gIg+AEIgMABQhqAHh/ABIgGAAIhqgBQAlhJAzhQIA2hZIARgbIA3gIIASACQBAAEAwgBQBcgEA4gFIALAAIAKATIAHAMQAPAgAWA1QAFAMAPAbQATAiAhA3IAaAoIgDABQgygFg7gDg");
	this.shape_189.setTransform(103.4,136.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#444444").ss(0.5).p("AlHCMQAmhKAyhPQAcgtAbgrIAQgbIA3gJQAJABAJABQBAAEAwgBQBcgEA4gFQAHAAAFgBIAKATQADAGADAGQAPAgAWA2QAFALAQAbQASAjAiA2QANAUANAVQgCAAgBAAQgygFg7gDQh9gIg+AFQgGAAgGABQhpAHiAABQgDAAgDAAg");
	this.shape_190.setTransform(103.3,137.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("ADYCGQh8gHg/AEIgLABQhqAIh/AAIgGAAIhqAAQAlhKAyhPIA3hYIARgbIA2gJIASABQBBAFAwgBQBbgEA5gGIAMAAIAKATIAFAMQAPAfAXA2QAFAMAQAbQASAjAiA2IAZAoIgDABQgygFg7gEg");
	this.shape_191.setTransform(103.3,137.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#444444").ss(0.5).p("AlICNQAlhKAyhPQAcgtAbgsIARgbIA2gIQAJABAJAAQBBAGAwgCQBbgFA5gFQAGAAAGgBIAKATQACAGAEAGQAOAgAXA2QAFALAQAbQASAiAiA4QANATANAVQgCAAgBAAQgygFg7gDQh9gIg+AFQgGAAgGABQhpAIiAABQgDAAgDAAg");
	this.shape_192.setTransform(103.4,138.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AFFCPQgygFg7gEQh9gHg+AFIgMABQhpAIh/ABIgGAAIhrgBQAmhLAyhOIA3hZIARgbIA2gIIASABQBAAGAwgCQBcgFA5gGIAMAAIAJATIAGALIAmBWQAEAMARAbQASAiAiA3IAaApIgEAAg");
	this.shape_193.setTransform(103.3,138.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#444444").ss(0.5).p("AlICNQAlhKAyhOQAcgtAbgsIARgbIA2gJQAJABAJABQBAAFAwgBQBcgGA5gFQAGAAAGgBIAKATQACAFADAHQAPAgAXA2QAEALARAbQATAiAhA4QANATANAVQgCAAgBAAQgygFg8gDQh8gIg/AFQgFAAgGABQhqAJh/AAQgDAAgDAAg");
	this.shape_194.setTransform(103.4,138.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AFFCPQgygFg7gEQh9gHg+AFIgMABQhpAJiAAAIgGAAIhqgBQAlhKAzhOIA3hZIAQgbIA3gJIASACQBAAFAwgCQBbgFA5gGIAMAAIAKASIAGANIAlBVQAFAMARAbQASAiAiA4IAaAoIgEAAg");
	this.shape_195.setTransform(103.3,138.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#444444").ss(0.5).p("AlICOQAmhLAyhOQAcgtAbgsIARgbIA2gJQAJABAJABQBAAGAwgCQBcgGA4gFQAHgBAGAAIAJATQADAFADAGQAOAgAXA3QAFALARAbQATAiAhA3QANATANAWQgCAAgCAAQgxgFg8gEQh9gIg+AGQgGAAgGABQhpAJh/ABQgDAAgDAAg");
	this.shape_196.setTransform(103.3,139.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("ADYCGQh9gIg+AGIgMABQhpAJh/ABIgGAAIhrgBQAlhLAzhOIA2hZIASgbIA2gJIASACQBAAGAwgCQBbgGA5gFIAMgBIAKATIAFALIAmBXIAWAmIA0BZIAaApIgEAAQgxgFg8gEg");
	this.shape_197.setTransform(103.3,139.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#444444").ss(0.5).p("AlJCOQAmhLAyhNQAcgtAbgsIARgbIA2gJQAJABAJABQBAAFAwgBQBcgGA5gGQAGgBAGAAIAKASQACAGADAGQAPAgAXA3QAEAKARAcQATAiAiA3QAMATAOAWQgCAAgCAAQgxgFg8gEQh+gIg9AGQgGAAgGABQhpAJiAABQgDAAgDAAg");
	this.shape_198.setTransform(103.3,139.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AFFCPQgxgFg8gEQh9gIg+AGIgMABQhpAJiAABIgGAAIhqgBQAlhLAyhNIA4hZIARgbIA1gJIASACQBBAFAwgBQBbgGA5gGIANgBIAJASIAGAMQAOAgAXA3QAFAKARAcQATAiAiA3IAZApIgEAAg");
	this.shape_199.setTransform(103.3,139.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#444444").ss(0.5).p("AlJCPQAmhLAyhOQAcgsAbgtIARgbIA2gJQAJABAJABQBAAGAwgCQBcgGA5gGQAGAAAGgBIAKATQACAFADAHQAOAfAYA3QAEALARAbQATAiAiA3QAMAUAOAVQgCAAgCAAQgxgFg9gEQh9gIg+AGQgFAAgGABQhqAKh/ABQgDAAgDAAg");
	this.shape_200.setTransform(103.3,139.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AjeCPIhqgBQAlhKAyhOIA4hZIAQgbIA2gJIASACQBBAGAwgCQBbgGA5gGIAMgCIAKAUIAGAMIAlBVQAFALARAcQATAiAiA3IAZApIgEAAQgxgFg8gEQh9gIg+AFIgMABQhpAKiAABIgGAAg");
	this.shape_201.setTransform(103.3,139.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#444444").ss(0.5).p("AlJCPQAlhLAyhNQAcgtAcgsIARgbIA1gJQAJABAJABQBBAFAwgBQBbgHA5gGQAHAAAGgBIAJATQADAFADAHQAOAfAXA3QAFALARAbQATAiAiA3QAMAUAOAVQgCAAgCAAQgxgFg9gEQh9gIg+AGQgGAAgGABQhpAKiAABQgDAAgDAAg");
	this.shape_202.setTransform(103.3,140.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AjeCQIhqgBQAlhMAyhNIA3hZIARgbIA2gJIASACQBBAGAvgCQBcgGA5gHIANgBIAJATIAGAMIAlBWQAFALARAcQATAhAiA4IAaApIgFAAQgxgFg8gEQh+gIg9AFIgMABQhpALiAABIgGAAg");
	this.shape_203.setTransform(103.3,140.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#444444").ss(0.5).p("AlJCPQAmhLAyhNQAcgtAbgsIARgbIA2gJQAJABAJABQBAAGAwgCQBcgHA5gGQAGgBAGgBIAKATQACAGADAGQAOAgAYA3QAEAKASAcQATAhAiA4QAMATANAWQgCAAgCAAQgxgFg8gEQh+gIg9AGQgGAAgGABQhpAKiAABQgDAAgDAAg");
	this.shape_204.setTransform(103.3,140.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AjeCQIhqgBQAlhMAyhNIA3hZIARgbIA2gJIASADQBBAFAvgCQBcgGA5gGIANgCIAJATIAGAMIAlBWQAFALARAcIA1BZIAaApIgFAAQgxgGg8gEQh+gHg9AFIgMABQhpALiAABIgGAAg");
	this.shape_205.setTransform(103.3,140.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AjeCQIhqgBQAlhMAyhNIA3hZIARgbIA2gJIASADQBBAFAvgCQBcgGA5gGIANgCIAJATIAGAMIAlBXQAFAKARAcIA1BZIAaApIgFAAQgxgFg8gFQh+gHg9AFIgMABQhpALiAABIgGAAg");
	this.shape_206.setTransform(103.3,140.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#444444").ss(0.5).p("AFNCPQgygFg/gEQh+gIg9AGQhuALiHABIhxgBQAmhLAyhNIBRiDIA/AIQBJAHA1gEQBXgGA8gIIAKATQAPAhAcBCQALAZBZCPg");
	this.shape_207.setTransform(102.9,140.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AlJCPQAmhMAyhNIBRiCIA/AHQBKAIA0gEQBXgHA9gHIAJATIArBiQALAaBaCPQgzgFg/gFQh+gHg9AFQhuAMiHABg");
	this.shape_208.setTransform(103.3,140.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#444444").ss(0.5).p("AlICQQAnhMAwhNIBRiBIA/AFQBHAHA2gDQBUgGA+gHQAcA3AbA+QAVAnBPCBQgCAAgDAAQgxgEg5gEQh4gHhEAEQgBAAgCAAQhvAKiDACg");
	this.shape_209.setTransform(103.2,140.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AlICQQAnhMAxhNIBQiCIBAAGQBGAHA2gDQBVgGA9gHQAcA3AbA+QAWAnBOCAIgEAAIhrgHQh3gHhFAEIgCAAQhwAKiDACg");
	this.shape_210.setTransform(103.2,140.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#444444").ss(0.5).p("AlHCQQAohMAwhNIBRiCIA/AGQBFAFA4gBQBSgGBAgHQAdA6AZA6QAdAzBHB0QgCABgBABQgygEg4gDQhygGhLACQgBAAgCAAQhxAJiCACg");
	this.shape_211.setTransform(103.1,140.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AjwgJIBRiCIA/AGQBFAFA4gBQBSgGBAgHQAdA6AZA6QAdAyBHB1IgDACIhqgHQhygGhLACIgDAAQhxAIiCACIhxACQAohMAwhNg");
	this.shape_212.setTransform(103.2,140.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#444444").ss(0.5).p("AlGCQQAqhNAuhMIBRiCIA/AFQBDAFA6AAQBQgGBDgHQAdA9AYA3QAjA9BABpQAAACgBABQgygDg3gCQhtgGhSAAQgBAAgBAAQh0AHh/ADg");
	this.shape_213.setTransform(103,140.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AjwgJIBRiCIBAAEQBDAGA5AAQBQgHBEgGQAdA9AYA3QAjA9A/BpIAAADIhqgFQhsgGhTAAIgCAAQh0AHh/ADIhxACQAphNAuhMg");
	this.shape_214.setTransform(103.1,140.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#444444").ss(0.5).p("AlHCPQAqhMAthMIBSiDIA/AFQBBAEA8ACQBNgHBGgHQAeBBAWAzQArBIA4BdQAAADABACQgzgDg2gCQhngEhZgCQgBAAgBAAQh2AFh+AEg");
	this.shape_215.setTransform(103.1,140.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("ADfCKQhmgEhagCIgCAAQh2AGh9ADIhyADIBYiZIBRiCIBAAEQBBAEA7ACICUgNQAeBAAWAzIBiClIACAGIhqgGg");
	this.shape_216.setTransform(103.2,140.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#444444").ss(0.5).p("AFJCPIksgLIlmALIBYiYIBRiDIC9ALICTgOIA1B2g");
	this.shape_217.setTransform(103.3,140.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AAdCEIlmAMIBYiZIBRiDIC9ALICUgNIA0B1IBlCpg");
	this.shape_218.setTransform(103.3,140.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#444444").ss(0.5).p("AlJCQICdkcIDFAJICjgMIApB2IBkCpIksgMg");
	this.shape_219.setTransform(103.3,140.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AAdCFIllALICckcIDFAJICjgMIApB2IBlCpg");
	this.shape_220.setTransform(103.3,140.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#444444").ss(0.5).p("AlJCQIBYiYIA4iDIDNAGIC0gKIAdB3IBkCoIksgLg");
	this.shape_221.setTransform(103.3,140.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AAdCFIllALIBXiYIA5iDIDNAGIC0gKIAcB3IBlCog");
	this.shape_222.setTransform(103.3,140.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#444444").ss(0.5).p("AlJCQIBYiYIAsiDIDVADIDFgIIAQB4IBkCoIksgLg");
	this.shape_223.setTransform(103.3,140.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AAdCFIllAMIBXiZIAsiDIDVADIDFgIIAQB4IBlCpg");
	this.shape_224.setTransform(103.3,140.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#444444").ss(0.5).p("AlJCRIBYiZIAfiDIDeABIDVgGIAEB4IBkCpIksgMg");
	this.shape_225.setTransform(103.3,140.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AAdCGIllALIBXiYIAfiEIDfABIDUgGIAEB4IBlCpg");
	this.shape_226.setTransform(103.3,140.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#444444").ss(0.5).p("AlJCRIBYiYIASiEIHMgFIgIB5IBkCoIksgLg");
	this.shape_227.setTransform(103.3,140.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AAdCGIllALIBXiYIASiEIHMgFIgIB5IBlCog");
	this.shape_228.setTransform(103.3,140.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#444444").ss(0.5).p("AFJCSIksgMIlmAMIBYiZIAGiEIDvgDID1gDIgUB6g");
	this.shape_229.setTransform(103.3,140.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AAdCGIlmAMIBYiZIAGiEIDvgDID1gDIgUB6IBlCpg");
	this.shape_230.setTransform(103.3,140.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#444444").ss(0.5).p("AlJCMIBYiYIgEh6IH2gGIgcByIBkCmIksgLg");
	this.shape_231.setTransform(103.3,140.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AAdCBIllAMIBXiZIgEh5IH2gHIgbByIBkCng");
	this.shape_232.setTransform(103.3,140.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#444444").ss(0.5).p("AlJCHIBYiZIgOhvIIIgFIgjBoIBjClIksgMg");
	this.shape_233.setTransform(103.3,141.3);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AAdB8IllALIBXiYIgNhvIIHgGIgiBpIBjCkg");
	this.shape_234.setTransform(103.3,141.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#444444").ss(0.5).p("AlJCCIBYiZIgYhlIIagFIgqBgIBiCjIksgMg");
	this.shape_235.setTransform(103.3,141.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AAdB2IllAMIBXiZIgXhlIIZgFIgqBgIBjCjg");
	this.shape_236.setTransform(103.3,141.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#444444").ss(0.5).p("AlJB8IBYiYIgihbIIsgFIgyBXIBiChIksgLg");
	this.shape_237.setTransform(103.3,142.4);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AAdBxIllAMIBXiZIghhbIIrgEIgyBWIBjCig");
	this.shape_238.setTransform(103.3,142.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#444444").ss(0.5).p("AlJB3IBYiYIgshQIEfAAIEfgFIg5BOIBhCfIksgLg");
	this.shape_239.setTransform(103.3,142.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AAdBsIllALIBXiYIgshQIEfAAIEfgFIg5BOIBiCfg");
	this.shape_240.setTransform(103.3,142.9);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#444444").ss(0.5).p("AlJByIBYiZIg1hFIEoAAIEngFIhABGIBgCdIksgMg");
	this.shape_241.setTransform(103.3,143.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AAdBmIllAMIBXiZIg1hFIEoAAIEngFIhABGIBhCdg");
	this.shape_242.setTransform(103.3,143.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#444444").ss(0.5).p("AlJBsIBYiYIg/g8IExACIEwgGIhIA9IBgCbIksgLg");
	this.shape_243.setTransform(103.3,144);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AAdBhIllAMIBXiZIg/g7IExABIEwgGIhIA9IBhCcg");
	this.shape_244.setTransform(103.3,144);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#444444").ss(0.5).p("AFJBnIksgLIlmALIBYiYIhJgxIE7ACIE4gGIhPA0g");
	this.shape_245.setTransform(103.3,144.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AAdBcIlmALIBYiYIhJgxIE7ACIE4gGIhPA0IBgCZg");
	this.shape_246.setTransform(103.3,144.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_159},{t:this.shape_158}]},15).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_173},{t:this.shape_172}]},1).to({state:[{t:this.shape_175},{t:this.shape_174}]},1).to({state:[{t:this.shape_177},{t:this.shape_176}]},1).to({state:[{t:this.shape_179},{t:this.shape_178}]},1).to({state:[{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_183},{t:this.shape_182}]},1).to({state:[{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_187},{t:this.shape_186}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_191},{t:this.shape_190}]},1).to({state:[{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_195},{t:this.shape_194}]},1).to({state:[{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_199},{t:this.shape_198}]},1).to({state:[{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_203},{t:this.shape_202}]},1).to({state:[{t:this.shape_205},{t:this.shape_204,p:{y:140.3}}]},1).to({state:[{t:this.shape_206},{t:this.shape_204,p:{y:140.4}}]},1).to({state:[{t:this.shape_208},{t:this.shape_207}]},1).to({state:[{t:this.shape_208},{t:this.shape_207}]},323).to({state:[{t:this.shape_210},{t:this.shape_209}]},1).to({state:[{t:this.shape_212},{t:this.shape_211}]},1).to({state:[{t:this.shape_214},{t:this.shape_213}]},1).to({state:[{t:this.shape_216},{t:this.shape_215}]},1).to({state:[{t:this.shape_218},{t:this.shape_217}]},1).to({state:[{t:this.shape_220},{t:this.shape_219}]},1).to({state:[{t:this.shape_222},{t:this.shape_221}]},1).to({state:[{t:this.shape_224},{t:this.shape_223}]},1).to({state:[{t:this.shape_226},{t:this.shape_225}]},1).to({state:[{t:this.shape_228},{t:this.shape_227}]},1).to({state:[{t:this.shape_230},{t:this.shape_229}]},1).to({state:[{t:this.shape_232},{t:this.shape_231}]},1).to({state:[{t:this.shape_234},{t:this.shape_233}]},1).to({state:[{t:this.shape_236},{t:this.shape_235}]},1).to({state:[{t:this.shape_238},{t:this.shape_237}]},1).to({state:[{t:this.shape_240},{t:this.shape_239}]},1).to({state:[{t:this.shape_242},{t:this.shape_241}]},1).to({state:[{t:this.shape_244},{t:this.shape_243}]},1).to({state:[{t:this.shape_246},{t:this.shape_245}]},1).to({state:[]},1).wait(169));

	// door_close
	this.instance_15 = new lib.door_ani();
	this.instance_15.setTransform(202.1,29,1,1,0,0,0,17.3,19.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(552));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(308.4,96.2,37.3,41);

})(paper_ani = paper_ani||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var paper_ani, images, createjs, ss;