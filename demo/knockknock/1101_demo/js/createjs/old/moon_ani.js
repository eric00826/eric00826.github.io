(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 500,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Path.png?1477465441060", id:"Path"},
		{src:"images/Path_1.png?1477465441060", id:"Path_1"},
		{src:"images/Path_2.png?1477465441060", id:"Path_2"},
		{src:"images/Path_3.png?1477465441060", id:"Path_3"},
		{src:"images/Path_4.png?1477465441060", id:"Path_4"}
	]
};



// symbols:



(lib.Path = function() {
	this.initialize(img.Path);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,177);


(lib.Path_1 = function() {
	this.initialize(img.Path_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,156);


(lib.Path_2 = function() {
	this.initialize(img.Path_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,115);


(lib.Path_3 = function() {
	this.initialize(img.Path_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,103);


(lib.Path_4 = function() {
	this.initialize(img.Path_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,142);


(lib.把手 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").p("AgQgFQgBAEAEACQAEAFAHACQAFADAGgBQAGgBACgDQABgEgEgCQgEgFgHgCQgFgDgGABQgHABgBADg");
	this.shape.setTransform(1.8,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAIQgHgCgEgFQgEgCABgEQABgDAHgBQAGgBAFADQAHACAEAFQAEACgBAEQgCADgGABIgCAAQgFAAgEgCg");
	this.shape_1.setTransform(1.8,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,5.6,4.2);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.Path();

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(10.5,10.5);

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(30.8,30.7);

	this.instance_3 = new lib.Path_3();
	this.instance_3.setTransform(36.8,36.8);

	this.instance_4 = new lib.Path_4();
	this.instance_4.setTransform(17.2,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177,177);


(lib.shuttle_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAAIABAAIgBABg");
	this.shape.setTransform(27.8,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAABIABgBIAAABg");
	this.shape_1.setTransform(26.2,24.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAAIABAAIgBAAg");
	this.shape_2.setTransform(27.8,24.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAAIABAAIAAABg");
	this.shape_3.setTransform(26.2,24.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIABABg");
	this.shape_4.setTransform(27.5,25.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAAAIABAAIgBABg");
	this.shape_5.setTransform(26.4,24.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAABg");
	this.shape_6.setTransform(27.1,25.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAAAIABAAIgBABg");
	this.shape_7.setTransform(26.8,23.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAABg");
	this.shape_8.setTransform(26.8,25.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIABABg");
	this.shape_9.setTransform(27.2,23.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAAAIABAAIgBABg");
	this.shape_10.setTransform(26.4,25.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAAAAIABAAIgBABg");
	this.shape_11.setTransform(27.5,24.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDADQgDgDAEgDQAAAAAAgBQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABABAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQABAAAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAABAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_12.setTransform(26.9,24.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#444444").s().p("AgRACIAJgRIAaANIgKASg");
	this.shape_13.setTransform(27,24.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#444444").s().p("AiKg1QgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIEVB1g");
	this.shape_14.setTransform(37.3,9.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#444444").s().p("AgOALIgBgBIACgEIABgCIAFgEIAWgKIABABIAAAAIgOAMIgEAEIgFADIgDABg");
	this.shape_15.setTransform(90.5,20);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#444444").s().p("AgbgHQgJgYAhAYQAPAKASARIgvAAg");
	this.shape_16.setTransform(68.6,46.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#444444").s().p("AgbBDIgEgfQgBgGACgIIAEgPIAHgMIAOgbIAGgMIAIgKIASgSIABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABIAAAAIgTARIgIAKIgGALIgPAaIgMAaIgBAOIABAMQAAALACAIIABAHg");
	this.shape_17.setTransform(64.3,33.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#444444").s().p("AASALIgFgBIgFgDIgigUIAAAAIAAAAIAlAPIAQAMIAAAAIgJgDg");
	this.shape_18.setTransform(34.7,51.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#444444").s().p("AAlATIgNgFIgGgCIg2gdIAAgBIAyAWIAXAOIAAABg");
	this.shape_19.setTransform(42.9,45.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#444444").s().p("AhmBrIgkgdQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAICwizIAAAAQADgDAEABIBeAdIAAABIAAABIhdgQIizCnIAgAeIAAABg");
	this.shape_20.setTransform(39.9,48.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#444444").s().p("AB1hgIAZASIkbCvg");
	this.shape_21.setTransform(42.1,50.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#444444").s().p("AgaCRIAZklIAcAVIguEUg");
	this.shape_22.setTransform(25.5,42.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#444444").s().p("AiVABIADgEIEUhhIAUAEIgGAFIkFBcICtBlg");
	this.shape_23.setTransform(69.8,15.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#444444").s().p("AAsAKIgdgEIg6gOIAAAAIAAAAIBDAKIAGACIAOAFIAAABg");
	this.shape_24.setTransform(87.7,12.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#444444").s().p("AAjAUIgMgFIgGgDIgzgeIAAgBIAAAAIA2AbIAPALIAAABg");
	this.shape_25.setTransform(83.3,16.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#444444").s().p("AAAARIgEgDIgVgLIAAgBIAVAKIAGADIABAAIAAgBIAAAAIABAAIABgCIAGgLIABgBIAAAAIABAAIACgDIAEgEIAHgJIABAAIgGAKIgDAFIgHAJIgFAIIgBAAIAAABIgBAAIgCAAg");
	this.shape_26.setTransform(11.4,4.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#444444").s().p("AAiA1QgJgBgXgTQgZgWgIgSQgHgTACgPIADgLIA3AeQAVBLgIAAIgBAAg");
	this.shape_27.setTransform(4.4,12.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#444444").s().p("AgYAEIAPgEIAPgIQAQgHADABIgKAMQgLALAAAEQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgFAAgUgLg");
	this.shape_28.setTransform(11.4,3.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#444444").s().p("AgKgCIAGgBQAGgBAJAEIgIAFg");
	this.shape_29.setTransform(17.1,3.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#444444").s().p("AAAASIgFgEQgBAAgBgBQAAgBAAAAQgBgBAAAAQAAgBABAAIACgXQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAGAEQADABAAADIgDAXQAAADgDABIgCAAIgBAAg");
	this.shape_30.setTransform(42.7,25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#444444").s().p("AAAASIgFgEQgDgBAAgEIADgWQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAGAEQADACgBACIgCAXQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgCABIgBgBg");
	this.shape_31.setTransform(40.1,23.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#444444").s().p("AAAASIgFgEQgBgBgBAAQAAgBAAAAQAAgBgBAAQAAgBABgBIACgWQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAGAEQADAAAAAEIgDAXQAAABAAABQgBAAAAABQAAAAgBAAQAAABAAAAIgDAAIgBAAg");
	this.shape_32.setTransform(37.4,22.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#444444").s().p("AAAASIgFgEQgDgCAAgDIADgWQAAgDADgBQAAAAABgBQABAAAAAAQAAAAAAABQAAAAAAAAIAGAEQADABAAADIgDAXQAAADgDABIgCABIgBgBg");
	this.shape_33.setTransform(34.8,21.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#444444").s().p("AAAASIgGgEQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAgBIADgWQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAAAAABAAQAAAAAAABQAAAAAAAAIAGAEQADABgBADIgCAXQAAABAAAAQAAABgBABQAAAAAAAAQgBABgBAAIgBABIgCgBg");
	this.shape_34.setTransform(32.2,19.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#444444").s().p("AAAASIgFgEQgBAAgBgBQAAgBAAAAQgBgBAAAAQAAgBABAAIACgXQAAgBAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAGAEQADABAAADIgDAXQAAADgDABIgCAAIgBAAg");
	this.shape_35.setTransform(29.6,18.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#444444").s().p("AAAASIgFgEQgDgBAAgDIADgXQAAgBAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAGAEQABAAABABQAAAAAAABQABAAAAABQAAAAgBABIgCAXQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgBAAIgCAAg");
	this.shape_36.setTransform(27,17.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#444444").s().p("AAAASIgFgEQgBgBgBAAQAAgBAAAAQAAgBgBAAQAAgBABgBIACgWQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAGAEQADABAAADIgDAXQAAADgDABIgCABIgBgBg");
	this.shape_37.setTransform(24.3,16);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#444444").s().p("AAAASIgFgEQgDgCAAgDIADgWQAAgDADgBQAAAAABAAQABAAAAAAQAAAAAAAAQAAAAAAAAIAGAEQABAAABABQAAAAAAABQABAAAAABQAAABgBAAIgCAXQAAABAAABQAAAAgBABQAAAAAAAAQgBABgBAAIgCAAIgBAAg");
	this.shape_38.setTransform(21.7,14.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#444444").s().p("AAAASIgGgEQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBIADgWQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAABQAAAAAAAAIAGAEQADABgBADIgCAXQAAABAAAAQgBABAAAAQAAABgBAAQAAABAAAAIgCABIgCgBg");
	this.shape_39.setTransform(19.1,13.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#444444").s().p("AAAASIgFgEQgDgBAAgEIADgWQAAgDADgBQAAgBABAAQABAAAAAAQAAAAAAABQAAAAAAAAIAGAEQADABAAADIgDAXQAAADgDABIgCABIgBgBg");
	this.shape_40.setTransform(16.5,12.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#444444").s().p("AgzBYIg7guQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABgBIAAAAIAAAAICEh6IAAgBQADgCADABIBUAWIAAABIgBABIhSgKIiEBwIA1AwQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAg");
	this.shape_41.setTransform(84.1,16.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#444444").s().p("AgWBIIAAgBIACgIIAUg1IAegxIhHgfIAAAAIAAgBIBQAZQAEABgBAFIglBIIgVAhIgFAHg");
	this.shape_42.setTransform(93.1,24.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#444444").s().p("AgDAtIgcgOQAWgHAGgJQADgGAFgNQAGgPABgJQABgcAPAUQAIAPgIASQgGALgMATQgLASgCAAIAAAAg");
	this.shape_43.setTransform(88.2,37.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#444444").s().p("AgIANQABgNADgOQAEgZAIgBIgGALQgGAOABALQgBAQAGAdQgKgUAAgIg");
	this.shape_44.setTransform(83.2,33.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#444444").s().p("AgeASIAFgHQAFgHACgCQAFgBAUgVIAYAEIgLAQQgLAOgBAEQgCADgHAAQgKAAgTgDg");
	this.shape_45.setTransform(84.6,23.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#444444").s().p("AgWAeIABgTQACgTAFgFQAGgIAIgIQAKgKACAAQAEAAAHACIgJAMQgKAOgEALQgCALgCAOQgDAMABADIAAAAQgCAAgOgKg");
	this.shape_46.setTransform(69.6,36.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#444444").s().p("AgTAYIAIgYQAKgXABgDQAEgDAIgDQAIgDAAAEIgJAJQgKAMgCAKQgGARgBARg");
	this.shape_47.setTransform(66,34.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#444444").s().p("AAQAeQAGgTgkgYIgogWIAMgFIAtAcIAegIQAJgCANgUIgGAsQgBAPAEAag");
	this.shape_48.setTransform(74.9,32.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#444444").s().p("Ag6gWIA1AZQAegLACgGIAHgSQAGgNADgCQAFgDALAJIgIAIQgJALgFALQgEALgEAYIgCAYg");
	this.shape_49.setTransform(71.7,43.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#444444").s().p("AgSAQQAGgvAfgLIABAKQABAMgFAPQgHAXgbAZQgDgGADgVg");
	this.shape_50.setTransform(79.4,45.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#444444").s().p("AgGAWQgGgBAEgKQAWg0gDAgQgFASgFAIQgBAFgFAAIgBAAg");
	this.shape_51.setTransform(88.9,25.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#444444").s().p("AgKAhQgGgIgBgTQABgVAIgOQAJgQAQATQgBAwgMALQgEAEgCAAQgEAAgEgEg");
	this.shape_52.setTransform(85,33.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#444444").s().p("Ag2BMQgHgCACgHQAOgvgIgMQgEgFAFgDQAFgDAFADQAYAYANAEQAFADAIgGQAIgHAQgVQARgbgDgYIgFgLQgCgHAGgCQACgBADABQADAAABADIAGAMIAAACIAAATQgCAVgOAUQgQAYgKAIQgPAMgOgFQgJgEgQgNQAAAPgJAfQgCAFgFAAg");
	this.shape_53.setTransform(87.5,39.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#444444").s().p("AAbA+IhOg+IAAAAIgfgbQgFgFAEgFQACgDADAAQADAAACACIBiBQQABgnAHgWQAGgTATgNQAKgHAJgDQAGgDADAHQACAHgHACQgHADgIAFQgPAKgEAPQgJAZABAuQAAAFgEACIgDAAIgFgBg");
	this.shape_54.setTransform(72.5,45.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#444444").s().p("AAKAMIgZgMQgGgBACgGQAEgGAGACIAZALQAGABgDAHQgBAEgFAAg");
	this.shape_55.setTransform(90.8,32);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#444444").s().p("AgXA/QgGAAgBgGQgBgHAHgBQAYgDAGgPQAGgMAEggIAAgCQACgTgIgJQgFgFgEAAQgBgBgCgCQgCgDABgCQABgHAFABIAQAIQAPANgDAcIgBACQgEAigHAOQgMAWgdAEg");
	this.shape_56.setTransform(86,34.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#444444").s().p("AgRAmQgEgFAFgFQASgSAEgVIgBgUQgDgGAHgDQAHgCACAHIACAZQgDAagYAXQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgDAAgDgDg");
	this.shape_57.setTransform(90,26.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#444444").s().p("AgbAkQgBgXAcggIAAgBIgWgIQgHgDADgGQACgHAHACIAhANQAGABAEAEQAEAEgDAFQgEAEgFgCIgDgBIgFAEQgXAcABARQAAAIgHAAQgHAAgBgHg");
	this.shape_58.setTransform(88.7,24);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#444444").s().p("AAMBEIg5gTQgGgDACgGQACgHAHACIAyASQgOgYAJg+QACgNAJgGIgLgCQgFgBAAgHQAAgHAHABIAmAFQACAAACACQACADAAACQAAAHgHAAQgGABgGACQgLAFgCAKQgKA+AOAQIACACQAFALgFAGQgEADgEAAg");
	this.shape_59.setTransform(80.4,33);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#444444").s().p("AAAACIiyheIhQgrIgBgBIABAAIIGEQIAAABg");
	this.shape_60.setTransform(36.2,30.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#444444").s().p("AgVAOQAAgLACgDQACgLAIgHIAOgQQAJgGAJAHIgMAJQgLALgDALQgFAPgBAZQgNgOABgKg");
	this.shape_61.setTransform(68,35.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#444444").s().p("AgPAkQgPgEAPgnQAGgQAKgIQAHgDAFgBQAKADAAAQQABALgDAKQgCAIgOAMQgLALgHAAIgCAAg");
	this.shape_62.setTransform(72,37.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#444444").s().p("AALBAQgNAAgdgSIgcgSQgEgDADgDQADgEAEADQAuAhASABQAPABAMgQQAMgQACgTQACgOgHgLIgHgIIgjgTQgIgGgFgBIgHABIgFACQgDADgDgDQgDgDADgDQADgDAFgBQAHgDAFABQAGACAKAGIAiATIAKALQAKAOgDARQgDAWgNASQgPASgSAAg");
	this.shape_63.setTransform(69.7,36.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#444444").s().p("AAuAhIgBgCIAAgMIkXiVIAAAAIEbCRIABACIAAANIC5BlIAAAAg");
	this.shape_64.setTransform(39.4,30.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#444444").s().p("AgOA3IgBgFIgCgOIgBgUIACgLIADgJIAEgLIAFgKIAJgQQAFgGAFgEIADgDIABAAIAAAAIgMAOIgIARIgHAPIgEAUIgBAKIAAAKIgBAEIABATg");
	this.shape_65.setTransform(24.4,14.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#444444").s().p("AgRA7IgCgMIgBgTIgBgCIABgDIAAgGIADgRIADgMIADgFIABgDIAKgSIAIgLIAIgHIAFgCIABAAIAAAAIgFADIgCACIgDACIgGAGIgDAEIgDAHIgBACIgFAKIgHAWIgBAMIgBALIAAADIgBAhg");
	this.shape_66.setTransform(35.3,19.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#444444").s().p("AgVA9IgBgGIgBggIACgMIAFgRIAPgfIABgCIADgFIANgMIAHgEIABAAIAAAAIgBABIgHAEIgFAFIgGAIIgHAOIgFAIIgGAUIgFAXIgDAmIAAAAg");
	this.shape_67.setTransform(46.6,24.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#444444").s().p("AgKA4Igqg4IAAgIIACgJIAEgKIAEgGIAEgHIAGgIQADgDAFgCIAEgBIAOgBIAYAAIARABIARACIABAAIgBAAIgIABIgyABIgIABIgIABQgEABgDADIgFAGIgHALIgBACIgCACIgDAHIgBAIIgBAIIAnA4IAAAAg");
	this.shape_68.setTransform(52.2,28.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#444444").s().p("AAqBdIhZgzIgBgBIgEgGIgBgCIgCgOIAAgKIABgTIAEgZIAFgPIACgFIAHgIIADgFIAPgNIAEgEIAUgNIABAAIgBABIgSAPIgPANIgCAFIgEADIgFAIIgCAFIgDAJIgEAeIAAASIABAJIACALIADAFIBhBAIABABIgCAAg");
	this.shape_69.setTransform(57.8,32.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#444444").s().p("AhngsIgBgBIABAAICvBKIAgAQIABAAIgBABg");
	this.shape_70.setTransform(66.1,21.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#444444").s().p("AhagkIgBAAIABAAICZA7IAdAOIgBAAg");
	this.shape_71.setTransform(60.6,22.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#444444").s().p("AgPANIgCgHIAAgGIABAAIAAAAIAFgCIAdgKIAAAAIgfAOIAAAEIgBAHIgBAAIAAAAg");
	this.shape_72.setTransform(51.3,16.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#444444").s().p("AiQg+IAAgBIAEACIDCBRIBaArIAAABg");
	this.shape_73.setTransform(34.9,11.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#444444").s().p("AglBMIgBgCIgDgGIgDgPIAAgOIADgYIAFgPIAHgRIAAgCIACgCIABgFIAGgHQAHgIAFgEQAJgJAPgJIAcgMIAAAAIgbAOQgOAJgJAJIgLAMIgIANIgLAmIgDAaIABAZIABADIABACIAAAAg");
	this.shape_74.setTransform(18.1,9.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#444444").s().p("AjXEzIg6giQgHgEABgIIAdkYIgzgrIifhWIgBAAIgBgCIgCgBIgDgDQgNgMgHgQQgHgPgBgSIABgNIAAgCIAAgDIABgCIABgCIAAgCIABgBIABgBIACgCIAHgGIAOgJIAegNIAFgBIAAAAIABgBIABAAIABAAIBSgeIAIgCIAIgCQAOgCATABQALABAVADIFACMIEShqQADgBACABIABAAICYAkQAFABADAEQADAFgBAFQgBAEgDADIioCcIADANQADALgKAGIgzAdIgDABIgBABIAAAAIgCABIgCAAIgCAAIgEAAQgEAAgEgCIgKgEIgCAAIAAgBIgCAAIgBgBIAAgBIgCgBIgEgEIgEgHIAAgCIAAgBIgBgBIAAgDIgDAAIgCAAIgHABIgEABQgHADgEADIgMAKIgJAKIgJAPIgRAoIgBAGQgBAGADAHQABAIAFAGIAJAPIAHALIACAFIABACIAAACIAAACQAAAJgHAFIgCABIgBABIAAAAIgCAAIAAAAIgBABIgUAGIgGABIAAAAIgBAAIgIAAIgCAAIgBAAIgDgBIgGgCIgSgHIgcgNIkNCvIgBAAQgDACgDAAQgDAAgDgCgAmxkDQgIADgGADIgOAHIgMAIIgGAGIAAABIgBAAIAAAEIAAAEIAAAHQABAOAGAOQAGANALAKIACACIACABIAAABIABAAIAAAAIATANICNBGIA6AvQAEAEgBAEIgZEXIAuAaIELizQAHgEAHADIABAAIAyAVIAEABIADAAIADgBIABAAIgJgNQgGgLgCgKQgEgLABgNIACgNIADgKIAag0IAOgSQAIgIAJgGQAIgFAMgFIACAAIAAgBIAFAAIAJgCIADAAIACgBQAIAAAGACIACAAIAHADIAGAFIABACIACAEIACADIAAABIABABIAAAAIABAEIABAEIADABIADgCIAhgTIgCgLQgBgKAGgFICgiOIh9giIkVBYIgBAAIlBiFIgfgDQgPgBgPACIgWAGIhKAdIgBABIgCAAIgBAAIgBAAg");
	this.shape_75.setTransform(49.6,31);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AkIELIAckeIg4guQh+g7gjgbQglgcAGgxQACgJAYgMQAUgLALgCQAEgBAhgNQAjgPARgEQAegIAsAIIFBCJIEVhiICYAmIiwChIAFAWIgaAPIgcAQQgEAAgLgHQgFgDAAgDIgCgJQgEgHgGgBQgHgCgRAEQgbAKgQAXQgKAPgQAoQgJAYASAeQAPAagBAAIgNAFQgJADgGAAQgGAAgdgMIgbgNIkTC1g");
	this.shape_76.setTransform(49.3,30.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#444444").s().p("AhtC/IhXg6QgDgCAAgFIAlk9QAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIABABIgYE6IBQAyIB9hXICxhoQABgBAAAAQAAAAAAAAQABAAAAAAQAAABAAAAIAAABIhJA2IjiCaIgBABIgEABQgDAAgCgCg");
	this.shape_77.setTransform(39.7,46);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AjDCDIAek+IFpCtIkwDKg");
	this.shape_78.setTransform(40,45.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#444444").s().p("AiTBgIgbgLIAAgBIABAAIAaAFICdhUICihNIgHgWIABgBIABAAIAIAXIAAACIgBAAIjsCAIhTAmIAAAAIgBAAIgBAAg");
	this.shape_79.setTransform(48.3,54.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#444444").s().p("Ak2DzIgXgLQgFgDgBgFQgBgFADgEIF5mbQACgCADgBIDLgtIAGABIBQAdQAEACACAEQABAFgCAEIgwBcIgBABIgHAKIAEAEQALAFgBAaQgBAagIAXQgJAVgZAPIgZAKQgDAAgEgBIgVgMQgRA6gKANQgIALgVAGQgNADgMABQgEABgEgDIguglIgXAAIgbAEIk9ClQgCACgDAAIgEgCgAA1izIlsGOIAFADIE6ikIADgBIAdgEIAeAAQADAAAEACIAtAlQAdgFAGgIQAJgLARhBQACgEAEgBQAFgDAFADIAdAOQAggLAIgVQAGgQABgSQABgNgBgIQgHgEgHgKQgFgGAFgHIALgQIArhRIhCgXg");
	this.shape_80.setTransform(63.8,41);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AlJDfIF5mbIDKgtIBQAdIgxBcIgMARIAFAGQAFAGADABQAFACgBATQAAAXgIAWQgHASgXANIgVAJIghgSQgSBCgKAOQgLAOgkADIgxgnIgcAAIgdAEIk/Cmg");
	this.shape_81.setTransform(63.8,41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.3,65.5);


(lib.moon_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AhCAyQgEgBAAgFIAAgCIABgCIAHgHIAOgLQALgIATgKIAcgNQALgHABgCQABgCgBgMIABgHIgBgFQgDgDgIABQgJABgMAEIggAMIgBgBIAggNIAVgGQALgBAEADQADACgBAGIABAPQABAFgDAEQgDAEgKAHIgbAOIgdASIgNALIgDACIAGgBIAXgJIAcgNIA7ggIANgIIABAAIgMALIgiAXQgfAUgUAJIgYAIIgKACIgGgBg");
	this.shape.setTransform(56.6,66.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("Ag0AWIAPgMQAPgKAUgIQALgHAGgCQAJgDAKgBQAJgBAFABIAFABIAAABIgiAMIgTAGIgkAPIgPAJg");
	this.shape_1.setTransform(23.7,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AiKDnIBrguIATgMIASgOIAVgQQATgSASgVQAPgSAPgcQALgVAKgeQAKgcAEgXQAIgpgGg2QgDghgIgiIgHgZIABgBIAHAZQAKAlAEAfQADAXAAAXQAAAegCAUQgGAagIAaQgLAhgKATQgRAhgNAQQgOAUgYAUIgUARIgTAOIgWAMIgUAKIhZAdg");
	this.shape_2.setTransform(61.7,52.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444444").s().p("AghBcIAAAAIALgQIAdg2IAIgRQAGgPAEgSIADgQIACgPIABgYIgBgIIABgBIAAAAIACAJIABAYQAAARgDAPQgDASgGARIgGASQgCAGgGALIgIAPIgJAMIgJAKIgOAMg");
	this.shape_3.setTransform(69.8,51.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#444444").s().p("ABxAVIgJgDIgLgEIhcgXIg8gFIgRAAQgOABgMACIgKACIgBAAIAAgBIAKgDQANgDANgBQATgDATAAIAqADIArAIIAjALIAOAHIATALIAAABg");
	this.shape_4.setTransform(43.3,6.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYAuIgDgMIgPADIgFABIgKgKIgCgCIgBgBIgZg6IgBgCIAAgBIAMgcIADgDIABABIgBADIgGAcIAdAyIAEACIAVgGIAMgCIABALIAAAXIAAAHIgDASIgCAAg");
	this.shape_5.setTransform(65,34);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANA4IgXgeIgBAAIAAgBIgKgYIgCABIgEgBIgIgCIgNgIIgOgGIgHgCQgEgBgDABIgBAAIAAgBIgDgdQAAgHABgCIAAAAQgBAEABAFIADAcQAEgBADABIAIACIAPAGIANAIIAKADIAAAAIADgEIABADIAMAZIAYAcIAlABIAbgEIAAABIgaAGIgpABg");
	this.shape_6.setTransform(45.9,21.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAiB1IAAgPIADgQQADgOAJgPQAIgOAKgLIgHgmIgTgVIgCgBIABgBIAchAIgQgqIg5gLIgBAAIhBAiIAAAAIBBgjIAAgBIA7ALIACAAIAQArIAAACIgbA/IAVAUIAAABIAGAoIABABIgBABQgJALgJAOQgKARgDALIgCAPIgBAPQgBASACAOIgBAAQgDgSAAgOg");
	this.shape_7.setTransform(22,34.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABJCFIgMgmIgigYIgXAAQgEAHgIAFQgIAGgHADIgKACQgFAAgEgFQgDgGgDgMIgJgiIgKgiQgCgHgBgbIgCgjQAAgTAGgQIAJgQQAGgKADgFIAAAAQgCAGgHAJIgHAQQgGAPAAAUIADAjIADAhQACAJAIAZIAKAiQADAMADAEQACADAEAAIADAAIAEgCQAFgBAJgHIAMgMIABgBIAaABIABAAIAiAZIABABIAAAAIAJAog");
	this.shape_8.setTransform(13.9,43.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRASQgGgMAIgTQAJgZAVAPQAEACACAeIgPAVQgTgCgEgKg");
	this.shape_9.setTransform(26.9,56.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#444444").s().p("AA4A+IgQgIIgNgLIgFgHIgFgHIAAABIgLgQIgFgIQgBgEgBgDIgCgFIgBgEIgFgIIgJgMIgGADIgKACIgLABIgFAAIgFgDQgHgFgEgMIgFgSIAAgBIACAFIAFAOQAFALAGADIAEABIAEABIAKgCQAEAAAEgDIAIgEIACgCIACACIANAPIADAJIADAJIAVAbIABABIAAAAIAIANIALALIAGAFIAOAHIAHADIAAABQgJAAgHgCg");
	this.shape_10.setTransform(16.2,64.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#444444").p("AAQhFQgRABgIACQgOADASALQASAMAGARQAGAOgIAGQgIAEgXgBIgGAaIAOADQAMAFADAGQAGAKADAY");
	this.shape_11.setTransform(35.5,43.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAJAlQgEgGgMgEIgNgDIAGgYQAWAAAJgFIABBNQgEgZgFgKgAAQgfIADAFQAFAPgHAFIAAABgAgGg3QgRgKAOgEIAYgCIABAoQgHgNgPgLg");
	this.shape_12.setTransform(35.6,43.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#444444").s().p("AgfAgIgDgCIgEgCQgCgBgDgGIgIgNIgGgMQgGgKgCgDQgLgKgQgCIAAgCQATADAKAKQAFAEAEAIIAPAYIAFAFIACACIACAAIABAAIAGgCIAGgEIAMgIIACgCIAZAIIgBAAIADAAIgCAAIAXgIIACgEIAEgFIAGgGIAHgDIAEgBIAFAAQAEAAAEABIAGAEIAGAFIgBAAIgGgCIgHgDIgDAAIgDAAIgGACIgFADIgEADIgDAGIgDAJIgCAAIgcAJIgBAAIgWgIIgMAHIgHADQgFACgEABg");
	this.shape_13.setTransform(53.5,14.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#444444").s().p("AAYBDQgDgBgBgDIgBgDIABgDIAEgHIABgHIgCgIIgFgPIgCgBQABAAAAAAQAAAAABAAQAAAAAAAAQABgBAAAAIgHAAIgPgQIgCgBIAAgBIgCgTIABABIgCgCIABABIgTgLIgBgBIAAgBIgGgkIABAAIAJAiIAUAKIABABIAAACIACAUIAQAKQACgBAEACIAEAFIAFAJIACAJIABAKQgBAHgCADIgGAHIgBABIAAABIACABIAHAFIAAABg");
	this.shape_14.setTransform(60.3,37.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#444444").s().p("AA6AyIgcgJIAAgCQgJgHgFgIIgXgeIgMgPQgHgGgLABIgKABIgKAAQgKgCgHgKIgKgSIABAAQAFAKAFAHQAJAIAIABIAJgBIAKgCQANgBAIAHQAFADADAEIAHAIIALANIAaAeIAxAXIAAABIgbgGg");
	this.shape_15.setTransform(42.6,28.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#444444").s().p("Ag4gJIAFAAIALgBIAUgFQASgDAGAAIAZAGIAKAFQAGADACAEIADAIIADAFQACACACAAQgCABgEgCIgEgFIgDgHQgFgDgMgBIgMgBIgKAAQgGACgMAEIgTAJIgQAGIgGABg");
	this.shape_16.setTransform(24,13.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#444444").s().p("AgCAwQgDgDAAgEIAAgCIACgOQABgLgBgSQgBgSgEgNIgEgOIAHANQAFAOAFAQQAFAQACAPIABALIAAAEQAAAEgDADQgDADgEAAIgBAAQgCAAgCgCg");
	this.shape_17.setTransform(39.8,58);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#444444").s().p("AAAAPQgDgCgDgEIgCgEIgDgHIgBgMIADACIAGAEIAFADIACAAIABAAQAEABADAEQACACgBAEQgDAJgHAAIgDAAg");
	this.shape_18.setTransform(37.3,62.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#444444").s().p("AAQANQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgJgHIgegRIAFABIAAAAIAqAGQAJADgBAHQgBAFgEACIgFABIgCAAg");
	this.shape_19.setTransform(34.2,63.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#444444").s().p("AAVAKIg2gNIAMgEIgDACIAvgDQAEgBADADQADADABADQAAADgDAEQgDADgEAAg");
	this.shape_20.setTransform(33.5,66.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#444444").s().p("AgeAUIgDgDQALgLAOgIIAcgQQAEgCADACQAEABACAEQACAEgCAEQgBAEgEABIgDAAIgOACQgIACgFADQgOAFgOAIg");
	this.shape_21.setTransform(33.2,69.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#444444").s().p("AgUAVQAGgQAHgJIAPgYIAAgBQACgDAFAAQAEAAADACQAIAHgGAIIgCABIgWAQIgMAQIgEAFIgBAAIgIAKg");
	this.shape_22.setTransform(35.4,73.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#444444").s().p("AgJAFIAAgNIAAgHQABgEADgDQACgDADAAQAEAAADADQADADAAAEIgBAFIgJAQIgFAUIgEgVg");
	this.shape_23.setTransform(39.2,72.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#444444").s().p("AAAALQgFgFgFgGIgEgDQgCgEAAgEQABgEADgCQAEgDAEABQAEAAABADIACAFIAAACIAAAEIAEAKQADAIAHAIQgKgEgHgGg");
	this.shape_24.setTransform(42.6,71.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#444444").s().p("AgHAKIgFgBIgBAAQgEgBgCgEQgCgDAAgDQABgEAEgCQAEgCAEAAQADABACACIADAEIAHAFQAHAEAIADQgIACgKAAg");
	this.shape_25.setTransform(46.1,69.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#444444").s().p("Ag6APQgDgDAAgEQgBgEADgDQADgBAEgBIACAAIAcABQAQAAALgDQAXgDAigKIABABIgCABQgmAOgQAGIgbAIIgfADIgBAAQgDAAgDgCg");
	this.shape_26.setTransform(51.6,65.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#444444").s().p("AgsAeQgJgCABgJQABgFAEgCQADgCAEABIABAAIAEAAIAogOQAZgLAXgQQgUAUgYAOIgmAYIgHACIgGAAg");
	this.shape_27.setTransform(50.4,62.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#444444").s().p("AglAnQgCgDAAgEQABgEAEgDIABgBIABAAIANgGQAJgGAPgPQALgMANgQIALgMIgIAOIgTAeQgNAUgJAKQgGAGgEACIgEADQgDACgDAAQgFAAgDgFg");
	this.shape_28.setTransform(47.6,60);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#444444").s().p("AgTA5QgEgBgDgDQgCgEAAgEQABgEADgCIAEgDIACgBIAFgEIANgXIAGgKQAOgdAIgZIAAAFIABgFIgBAGIAAgBQgDAZgJAaIgKAcQgDAIgDAGIgFAHIgDADIgEADQgDACgDAAIgBAAgAAdg4IgBAAIABAAIAAAAg");
	this.shape_29.setTransform(44.9,57.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#444444").ss(3).p("AAegIQAAADgBABQgBADgDAAIgEgBQgBgBgDAAIgDAAIgBgCQgCgDAAgCQAAgGAHAAQAEgBAGADIADADQAAABAAABQAAAAgBABgAAegIIABgBAAegIIAAAAQAAAAAAAAg");
	this.shape_30.setTransform(39.6,68.1,1,1,0,0,0,0,0.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#444444").s().p("AAAAGIgDgBIgCAAIgBgCQgCgDAAAAQAAgGAHAAQABgBAGADIADADIAAABIAAAAIAAAAIAAAAIgBAEQgBADgEAAg");
	this.shape_31.setTransform(41.7,66.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#444444").ss(3).p("ACxhlQAAAEgBAFQgBAGgDAHQgBAEgDABQgCABgEAAQgDgBgCAAQgFAAgIACQgJADgEAAQgKgEgFAAQgJABgIAMQgHANgFAEQgEACgBACQgEADACAGQACAFAEADQAEACAQADQAOACACAKQABACgCACQAAABgDAAQgJAEgKgEQgGgBgCABQgEAAgDAGIgJAbQgHATAHAKQACADAGADQADACAGADQAMAGgCAKQAIABAFADQAIAGgEAHIgDAEQAAABAAAFIADAYQAAAEABACIAFADQAHADADAGQAFAGgDAFQgCAFgHACQgJACgEABQgIACgIAHQgFAFgJAJQgEAEgDAAQgDABgIgBQgHgBgDACQADAGAHAKQAFALgGAHQgDgDgEAAQgEAAgCADQgEAEgBAAQgFABgDgHQgGgQABgQQAAgLgEgCQAAgDgFAAQgFAAgBACQgDAEACAGQABADADAGQACAGgFAIQgIAOgMACQgQABgHgNQgEgJgCgFQgCgDgFgEQgEgFgCgDQgDgGACgHQACgHAFgEQAIgEADgEQAFgFgCgIQgBgJgHgEQgJgGgUgBQgMgBgDAGQgBACgBAEQgEAHgLgHIAIAXQABAEgBABQgCAEgFgDQgBgBgDgFQgHgPgWgbQgWgbgIgQQgHgOgJgeQgGgVgBgLQAAgKADgQQAEgSABgJQADgfADgOQADgLALgeQANgmATgOQAHgVARgOQAMgKAVgMQACAGgGAFIgJAIQgEADgDAGIgHAJQgDAEgJAKQgHAIgEAGQgJAPABAiQAAAEABAAQACACADgBQATgGAGgSQACgFABgHIABgMQAFgUAPgOQAEgDADAAQACAAABACQABABAAACQANgIAMgNQAGgIAFgCQAEgDAPAAQACAAAagFQAQgDAKAEQAGADACAEIACAIQADAIAMAAQAGAAACABQADACABAFQAEAKgDAJQgCAIAAACQABADADAEQAEAEABACQAEAHgLAPQgGAJgFAOQgDAIgFAQQgBADgCABQgCACgGAAQgQgBgMAKQgDACgCAEQgBAEADABQABABAEAAIAZgCQAIgBAEgCQAEgCAGgHQAFgHAEgCQAMgIAZAMQAEADADAAQACAAADgCQAAgBAOgLQAJgHAJACg");
	this.shape_32.setTransform(21.7,40.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#444444").s().p("AAoDtQgGgQABgQQAAgLgEgCQAAgDgFAAQgFAAgBACQgDAEACAGIAEAJQACAGgFAIQgIAOgMACQgQABgHgNIgGgOQgCgDgFgEIgGgIQgDgGACgHQACgHAFgEQAIgEADgEQAFgFgCgIQgBgJgHgEQgJgGgUgBQgMgBgDAGIgCAGQgEAHgLgHIAIAXQABAEgBABQgCAEgFgDIgEgGQgHgPgWgbQgWgbgIgQQgHgOgJgeQgGgVgBgLQAAgKADgQIAFgbQADgfADgOQADgLALgeQANgmATgOQAHgVARgOQAMgKAVgMQACAGgGAFIgJAIQgEADgDAGIgHAJIgMAOIgLAOQgJAPABAiQAAABAAABQAAABAAAAQABABAAAAQAAAAAAAAQACACADgBQATgGAGgSIADgMIABgMQAFgUAPgOQAEgDADAAQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAQANgIAMgNQAGgIAFgCQAEgDAPAAIAcgFQAQgDAKAEQAGADACAEIACAIQADAIAMAAIAIABQADACABAFQAEAKgDAJQgCAIAAACQABADADAEIAFAGQAEAHgLAPQgGAJgFAOIgIAYQgBADgCABQgCACgGAAQgQgBgMAKQgDACgCAEQgBAEADABQABABAEAAIAZgCQAIgBAEgCQAEgCAGgHQAFgHAEgCQAMgIAZAMQAEADADAAIAFgCIAOgMQAJgHAJACIAAAIIAAgFQAAAKgFAMQgBAEgDABQgCABgEAAIgFgBQgFAAgIACQgJADgEAAQgKgEgFAAQgJABgIAMQgHANgFAEIgFAEQgEADACAGQACAFAEADQAEACAQADQAOACACAKQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgDACQgJADgKgCQgGgDgCABQgEAAgDAGIgJAbQgHATAHAKQACADAGADIAJAFQAMAGgCAKQAIABAFADQAIAGgEAHIgDAEIAAAGIADAYQAAAEABACIAFADQAHADADAGQAFAGgDAFQgCAFgHACIgNADQgIACgIAHIgOAOQgEAEgDAAQgDABgIgBQgHgBgDACIAKAQQAFALgGAHQgDgDgEAAQgEAAgCADQgEAEgBAAIgCAAQgEAAgCgGg");
	this.shape_33.setTransform(21.7,41);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#444444").ss(3).p("AACAfQABgBAEgBQAEgDABgIQAAgIABgEQACgGAHAAIgQgNIgFgGQgBAAgCgHQgEgGgIgBQgHgCgGAEQgGAEgDACQgFACgCABQgDABgCADQgCAEADAKQABAEAEAIQAEAMAEADQACACAOAFQALAEABAAQAGABACgEg");
	this.shape_34.setTransform(64.2,20.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#444444").s().p("AAGAiIgKgEQgOgFgCgCQgEgDgEgMIgFgMQgDgKACgEQACgDADgBIAHgDIAJgGQAGgEAHACQAGABAEAGIAFAHIAFAGIAQANQgHAAgCAGIgBAMQgBAIgEADQgEABgBABQgDAEgFAAIgCgBg");
	this.shape_35.setTransform(62.8,20.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#444444").ss(3).p("AgjgzQgCAFgFALQgEAJACAHQACAEAGAHQAHAGACACQACAFABAKQAEAJARAIQADADAEAAQAFAAAEgFQADgEABgFIACgMQABgDADgBQADgCACABQAFAJgDAOQgGAUAAACIAAAFQgBADgEACQgEADgBACQgCAEADAHQADAIgFACQACADAEgBQADAAACgDQABgCAEgKQADgIAGgBQABAAACgBQACgBAAgDIACgdQABgYgDgHQgDgIgBgEQgCgIABgFQACgFAAgCQAAgEgEgFIgLgNQgIgLgGgCQgLgBgFgDQgCgCgEgGQgEgFgEgBQgDAAgDAFQgEAGgBACQgCAEgBAHQgBAJgBADg");
	this.shape_36.setTransform(64.7,34.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#444444").s().p("AANBVQAFgCgDgIQgDgHACgEQABgCAEgDQAEgCABgDIAAgFIAGgWQADgOgFgJQgCgBgDACQgDABgBADIgCAMQgBAFgDAEQgEAFgFAAQgEAAgDgDQgRgIgEgJQgBgKgCgFQgCgCgHgGQgGgHgCgEQgCgHAEgJIAHgQIACgMQABgHACgEIAFgIQADgFADAAQAEABAEAFIAGAIQAFADALABQAGACAIALIALANQAEAFAAAEIgCAHQgBAFACAIIAEAMQADAHgBAYIgCAdQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBAAIgDABQgGABgDAIIgFAMQgCADgDAAIgBABQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_37.setTransform(64.7,34.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#444444").ss(3).p("ABqAxQgFACgGgCQgHgCgFACQgHADgBAKQgBAFgCALQgBADgBABQgBAAgEAAQgGgBgGADQgGACgCAAQgCAAgFgCIgRgIQgNgHgFgEQgDgEgIgLIgNgRQgFgJgBgDQgCgIAEgFQACgBAEgCQADgCAAgDQABgBgDgCQgCgCgDAAQgCABgJADIgNADQgVAFgKgEQgHgCgGgGQgDgDgHgLQgEgIAAgBQAAgJgBgFQAAgBgEgPQgDgKADgGQAEgJAUgCQAcgCAbAFQAQADAHAGQAEAEAEALQADAKAEAEQACADAHAEQAGAEACADIAJAKQAHAFAIgDQAIgDADgHQABgEABgBQADgDAHADQAJAEAGAJQAFAIACAAQACABAGgBQAGgBACACQAFADgDAHQgBACgFAGQgEAKAFAJQAMATgMAEg");
	this.shape_38.setTransform(46.4,22.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#444444").s().p("AAmBUIgRgIQgNgHgFgEQgDgEgIgLIgNgRQgFgJgBgDQgCgIAEgFIAGgDQADgCAAgDQABgBgDgCQgCgCgDAAIgLAEIgNADQgVAFgKgEQgHgCgGgGIgKgOIgEgJIgBgOIgEgQQgDgKADgGQAEgJAUgCQAcgCAbAFQAQADAHAGQAEAEAEALQADAKAEAEQACADAHAEIAIAHIAJAKQAHAFAIgDQAIgDADgHQABgEABgBQADgDAHADQAJAEAGAJQAFAIACAAQACABAGgBQAGgBACACQAFADgDAHIgGAIQgEAKAFAJQAMATgMAEQgFACgGgCQgHgCgFACQgHADgBAKIgDAQIgCAEIgFAAQgGgBgGADIgIACIgHgCg");
	this.shape_39.setTransform(46.4,22.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#444444").s().p("AhCGGQgqgHgsgSQgXgKgUgLIgVgNIgUgQQgQgOgUgUQgbgbgJgLIgjg0IgVgnQgWgygGg5QgHg3ALg5QAVhyBVhaQAqgsAxgdQAZgQAbgLIANgFIArgLQA7gLA2AEQAdADAbAGQAbAHAaANQAUAJAcAPQAcAPASANQAWAOATAUQAPAPASAYIAYAgIACADIADAGQAHAMAOAfIARArIAIAWIAEAWQAIAuACAjIgBAnQgBAOgEAWQgMA+ggA0QgJAQgRAVQgPASgIAGQgFAFgFACIgEACIAAACIgBADIgBAAIgCAAIgQAPQgdAbghAUQg1Agg7APQgtALgsAAQggAAgigGgAhOlsIgbAGIgZAIQgaAKgYAOQgvAbgpAqQgnAogbAyQgbAygKA2QgLA2AFA0QAGA3AUAwIAMAYIApBBQAPASAUATIAjAiIASAQIAUAMQAUAMAWAJQAoASAsAIQBMAPBMgSQA5gMA1gfQAhgUAegaIARgRQACgCAFgEIAJgHQAXgWAVgoQAdg1AJg7QADgWAAgNIAAglQgDgegJgwIgCgLIgDgJIgHgUQgGgRgMgZIgUgoIgDgFIgZghQglgtghgWIgsgaIgvgYQgbgNgVgFQgagGgagDIghgBQglAAgkAGg");
	this.shape_40.setTransform(39.6,39.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhZF4QhEgQg4gmQgMgIglgkQgmgkgFgJIgggxQgshHgFhaQgFhVAhhQQAghOA/g8QA/g9BQgdQAWgIAugGQBEgIA8AOQApAKA8AgQAsAYAVASQAjAbAtA+QAKAOAUAuQATAtADAQQANBDABApQAAA7gUA5QgVA5gmAtQgNARgMAGIgEAEQguAwg9AeQg+AfhEAHQgVADgVAAQgsAAgugMgAEYEOIAAgBIABgCQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAIgBABIAAgBgAEYENIAAAAg");
	this.shape_41.setTransform(39.6,40.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,0,83.6,79.3);


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("ABMNaQgNgNgDgFQgGgLABgPIAIg7QAFgigBgiQgDgpgPgfQgUgpgegSQgNgIgbgFQgfgHgNgGQgWgKgMgUQgMgTgDgaQgCgYAHgYQAHgZAQgTQAagiA1gcQAQgJAcgNQAigOANgGQAbgNAQgPQATgQALgXQAUgnAAg8QgChlgihkQgahQg1hoQgeg5g8hrQg6hmgYgvQgUgmgJghQgFgRgBgTQgCgQADgTQAGghATgZQAPgUAXgRQAXgRAogUIAXgKQAEgCADABQAEACACADQACAEgCAEQgBAEgEACIAAAAIgXAKQglASgXAQQgVAQgNARQgRAWgFAcQgDAQACAPQAAAOAFATQAIAeATAmQATAnA9BtQBAB2AZAwQAzBkAcBXQAhBlABBnQgBBAgVAnQgLAYgWASQgPANgdAPIgwAVQgcAMgQAIQgzAagaAhQggAoAEAwQADAYALATQALATAWAKQALAFAfAHQAbAHANAIQAhATATAqQAQAgABApQACAfgGAlQgCAVgHAmQgBARAGAIQAEAIALAKIAiAig");
	this.shape.setTransform(16.7,89.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.5,178.4);


(lib.hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AAGAZIgDgCIgCgBIgBgCIgCgDIgCgFIgCgLIAAgQIABgJIABAAIAAAAIAEAZIACAIIADAKIABADIABADIAAAAg");
	this.shape.setTransform(6,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AACAfIgCgCIgBgHIgBgFIgBgGIABgLIAEgeIABAAIAAABIAAAdIABALIgBAUg");
	this.shape_1.setTransform(8,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AACAKQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIgFgLQgBgDAEgCQACgBABAEIAEAKQACAEgEACg");
	this.shape_2.setTransform(11.7,3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444444").s().p("AABAJQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBIgDgIQgBgEADgBQACgCACAEIADAIQABAEgDACg");
	this.shape_3.setTransform(13,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#444444").s().p("AgiAiQgFgDgDgGQgBgGADgFIATgdQAEgEADgBQATgJAPgFQAKgDAFAEQAEACADALQADALgLAEIgaAJIgBABIgaAbQgEAEgFAAIgGgCgAAWgaQgNAEgUAJIgDACIgTAeIgBAEQABABAAABQAAAAABABQAAAAABABQAAAAAAAAQAEACADgDIAZgaIAEgBIAagLQAEgCgBgEQgCgIgCAAIgCgBIgGABg");
	this.shape_4.setTransform(12,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggAeIAAAAQgEgCgBgEQgBgEACgDIATgeIAFgEQAQgIASgFQAIgCADACQADACADAJQABAHgHAEIgdAKIgZAbQgDADgDAAIgFgCg");
	this.shape_5.setTransform(11.9,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#444444").s().p("AgEB3IgFgCIgDgCIgFgDIgLgDIgBAAIgBAAIgFgDIgEgDQgEgEgEgFIgDgGIgCgGIgCgLIAAgKIACgLIAEgVIAKgmIAIgSIAJgTIAAAAIBLhIIABAAIAAABIhGBLIgOAkIgEANIgIA2IAAAKIABAJIADAIIAFAHIAGAEIANAGIAIAHIAAAAIADgEQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAAAIAQgDIABABIgBAAQgEADgIACIgDACIgBABIAAABIAAADQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAgBAAIAAAAIAAABg");
	this.shape_6.setTransform(5.8,16.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444444").s().p("AAEAMIgBAAIAAgBIgDgDIgIgEIgCgBIgBgCIgBgBIAAAAIACAAQAAAAAAAAQABAAAAABQABAAAAAAQABABAAAAIAGAAIADACIAEADIAAACIAAAAIABABIgBgBIADgBIAAgBIABgBIAAgBIgBgBIgBgCIgIgCIgEgDQgDgDgBgGIAAAAQABAFAFADQACADAFABIAEAAIACACQABABAAAAQAAAAABABQAAAAAAABQAAAAAAAAIAAACIgBABIgCADIgEACIgCgBg");
	this.shape_7.setTransform(4.5,17.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#444444").s().p("AgBAHIgKgDQgEgCgEgCQgCgCgBgDIgBgCIAAgBIACACIAEAEIAIACIAJAEQADACAEAAQAGABACgBIAHgCIABgBIABAAIgCACIgGADIgJABQgGAAgCgCg");
	this.shape_8.setTransform(12.6,11.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444444").s().p("AAAAGIAAgCIgBgDIAAgEIAAgDIAAAAIABAGIACACIABACIAAADIgDgBg");
	this.shape_9.setTransform(13.1,6.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#444444").s().p("AADAQIgDgFIgBgGIgCgNQAAgFABgBQABAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAIABAAIABACIAAAAIgBgBIgBAAIgBABIABAFIADASIAAAGIAAAAg");
	this.shape_10.setTransform(14.5,6.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#444444").s().p("AAAAWIAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIgCgEIgBgVIgCgKIgBgDIAAgBIACAEQACACACAIIABAMIAAAIIAAADQAAABAAAAQAAABABAAQAAAAAAAAQAAAAAAAAIABgCIAAgMIABgMIAEgOIABAAIAAAAIgDAOIgBAMIABANIgBACIgCACg");
	this.shape_11.setTransform(16.4,5.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#444444").s().p("AglCIIgEgBIgGgCIgIgDIgHgCIgFgEIgHgIQgIgKgEgKIgBgGIAAgBIgBgCIAAgDIABgMIAEgUQAEgTAHgWIgBABIABgGIAEgKIAHgSIAGgLIAAAAIBVhTIABgBIAwgTIAAAAIAKABIgKABIAAAAQgRAKgcAPIACAAIhRBTIgKAUIgCAFIgDAMIAAACIAAABIgPA8IgBAKIAAABIABABIAAACIABAEQACAHAHAJIAHAHIACACIAPAFIAEACIgCABIAAAAIABgBIABAAIAAAAIADgCIADgBIABAAIACgBIAFgCIADAAIAAgEIgCgIIgCgCIgNgJIgJgIIgCgDIAAgBIAAAAIgBAAIAAgBIAAgDIAAgCIABgDIADgCIACgBIAEAAIALADIAQAHIACABIAAABIAAAAIABAAIgBgBIABgBQACgHgDgLIgDgQIAAgGQABgHADgFIAEgFIADgEIAOgSIAKgHIABgBIAAAAIATgGIAAABIAogUIACAAIgCAAIgkAaIgBAAIgRAGIgLANIgNAOIgEAHIgBAHIAAAEIABAHIAAABIAAAHQACANgBAKIgBAEIgCADQgBACgDABQgDABgDgBIgBAAIgBAAIgCgBIgBAAIgBgBIgHgEIAIAHIAEADIAAABIABABQADAFABAHIAAAGIgDAJIAAABIgBABIgBAAIgCABIgCAAIgEAAIgBABIgGACIgCABIAAAAIgCABIgDABIgBABIgBgBgAglB8g");
	this.shape_12.setTransform(9,15.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AguCCQgFgCgHgCQgEgBgEgDQgQgPgDgQQgCgJAJgiIAIghIAEgPQACgHAGgLIAFgJIBShTIAvgWIAKAAIgGBnIgBABIgnAWIgSAGIgdAjQgGAKAEANQAFAPgCAKQgCALgJgEQghgRAEAKQACAFAKAHIANAJQADAFABAJQABAJgFAAQgFgBgCACIgGACIgFADIAAAAIgHgDg");
	this.shape_13.setTransform(9.3,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.9,29);


(lib.flag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAVIgCgGIgCgDIgBgFIAAgFIADgHIAEgIIABgDIAHgFIAAAAIgGAGIgCAGQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAABIgBAEIgBADIADARIAAACg");
	this.shape.setTransform(24.5,7.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOAWIAFgEIADgHQAFgLACgOIABgMIgBgkIADAkIgBAMQgBAOgEAMIgEAHIgEAHIgkAeIgNAHg");
	this.shape_1.setTransform(34.5,15.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AgEACIAJgIIgCANg");
	this.shape_2.setTransform(16.8,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444444").s().p("AgCgGIAHAFIgJAIg");
	this.shape_3.setTransform(13,19.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#444444").s().p("AgGgCIANgCIgIAJg");
	this.shape_4.setTransform(18.4,13.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444444").s().p("AACgEIAFAHIgNACg");
	this.shape_5.setTransform(11.3,17.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#444444").s().p("AgGgEIANAEIgNAFg");
	this.shape_6.setTransform(19.1,15.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444444").s().p("AgGAAIANgEIAAAJg");
	this.shape_7.setTransform(10.6,15.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#444444").s().p("AgGADIAFgHIAIAJg");
	this.shape_8.setTransform(18.4,17.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444444").s().p("AgGgEIANACIgFAHg");
	this.shape_9.setTransform(11.3,13.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#444444").s().p("AgEgBIAHgFIACANg");
	this.shape_10.setTransform(16.8,19.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#444444").s().p("AgEgGIAJAIIgHAFg");
	this.shape_11.setTransform(13,12.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#444444").s().p("AgEgGIAJAAIgFANg");
	this.shape_12.setTransform(14.9,19.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#444444").s().p("AgEAHIAEgNIAFANg");
	this.shape_13.setTransform(14.9,11.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#444444").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_14.setTransform(14.9,15.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhZgWICQg1IAjBmIiMAxg");
	this.shape_15.setTransform(14.8,15.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#444444").s().p("Ai/ghQAVgNAegPQA8gcArgGQAogFA9gdQAfgOAWgOQAKAOAKAVQAUArAAAkQAAAkASAhQAJASAIAKQgXANgeAMQg+AZgnABQgmABhAAaQggANgYANg");
	this.shape_16.setTransform(23,15.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#444444").s().p("AgTgPIAOgeIAZBNIgTAOgAgKgOIAPAvIAFgEIgQg0g");
	this.shape_17.setTransform(21,64.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOgRIAJgUIAUBBIgMAKg");
	this.shape_18.setTransform(20.9,64.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#444444").s().p("AgEARQgGgCgDgFIgCgDIAAgBIgBgEQgBgEADgHQABgDAFgDQAFgDADABQAHABADADIAEAEIADAGQABADgBAGQgDAFgDADIgEADIgCABIgDAAIgCABIgEgCgAgFgIIgFADIgDAEIgCADIABADIAAABIACAEIADADQADACADAAQADABABgCIACAAIAFgDIADgHQABgDgCgCIAAgCIgBgBIgDgDQgDgCgDAAIgFABg");
	this.shape_19.setTransform(1.8,11.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGAOQgFgDgDgHQgCgEADgGQADgGAGgCQAFgCAGADQAFADACAGQACAEgCAGQgDAGgGACIgFACQgCAAgEgCg");
	this.shape_20.setTransform(1.7,11.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#444444").s().p("ABaD2IgTgHQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIijnZIAAgDQAAAAAAAAQABgBAAAAQAAAAAAAAQABgBAAAAIAKgDQADgCACAEICsHkQAAABABAAQAAABgBAAQAAABAAAAQAAABgBAAIgDABgAhVjsIChHUIAJADIionXg");
	this.shape_21.setTransform(10.8,36.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ABJDsIijnaIAKgEICrHkg");
	this.shape_22.setTransform(10.8,36.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.3,69.2);


(lib.fire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgLAHIgLgHQAJgHAAgIQAUAEAKANQAFAHABAHQgVgBgNgIg");
	this.shape.setTransform(5.4,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAFIAAAUIgngdIgGAMIgTgVQAKgGALgaIAtgGIgXAMIAkAKIgJAQIBZBBg");
	this.shape_1.setTransform(9.6,6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AgNAbIABASIgughIAAAPIgtgjQAUgWAKgVQAFgLABgHIBMAQIghAJIA1AMIggAIIBrBeg");
	this.shape_2.setTransform(10.5,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21,14);


(lib.door_close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").p("AjPB9IGdAAIhrj5Ij7AAg");
	this.shape.setTransform(20.8,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AjOB9IA3j5ID6AAIBsD5g");
	this.shape_1.setTransform(20.8,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,43.5,27);


(lib.太空人_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AAUAlQgEgCgCgDIgDgDIgCgEIgEgJIgEgQIgBgJIgEgIIgFgHIgGgFIgFgDIgJgEIAAAAIAAgBIAKADIAGADIAGAFIAHAGIADAIIAQAoQABAEACABIAEACIAEAAIAAAAIAAAAIgEACIgDABIgDgBg");
	this.shape.setTransform(40.6,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgfARIgVgYQgEgFAEgGQAEgFAGACIANAFIBUAQIAAAXgAgtgNIAAABIATAVIBIAFIAAgJIhOgNIgNgFg");
	this.shape_1.setTransform(28.2,34.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdANIgUgXQgCgCACgDQACgDADABIAOAFIBRANIAAARg");
	this.shape_2.setTransform(28.2,34.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444444").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEgAgFgFQgDADAAACQAAAEADACQADADACAAQADAAADgDQADgCAAgEQAAgCgDgDQgDgDgDAAQgCAAgDADg");
	this.shape_3.setTransform(30.3,32);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAHQgDgDAAgEQAAgEADgCQADgEAEAAQAEAAADAEQAEACAAAEQAAAEgEADQgDAEgEAAQgEAAgDgEg");
	this.shape_4.setTransform(30.3,32);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444444").s().p("AgFAGQgDgDAAgDQAAgDADgDQADgCACAAQAEAAACACQADADAAADQAAADgDADQgCADgEAAQgCAAgDgDgAgEAAQAAAFAEAAQAFAAAAgFQAAgEgFAAQgEAAAAAEg");
	this.shape_5.setTransform(27.4,32);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAACgCADQgCACgDAAQgGAAAAgHg");
	this.shape_6.setTransform(27.4,32);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444444").s().p("AAVANIgmgGQgEgBgCgFQgBgBACgDQAFgIAmAAQABAAABAAQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgBAAQgkAAgDAHIgBABQABABAAABQAAAAABABQAAAAABAAQAAABABAAIAlAEQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAAAQgBABAAAAg");
	this.shape_7.setTransform(28.5,32.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQAGQgIgDAEgFQACgFATgCIAVAAIAAATg");
	this.shape_8.setTransform(28.5,32.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444444").s().p("AAMAJIgagKQgEgBACgEQACgEAEACIAZAKQAEABgCAEQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_9.setTransform(27.1,27.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#444444").s().p("AAOAIIgdgIQgEAAACgEQABgEAEABIAcAHQAEABgBAEQgBADgDAAg");
	this.shape_10.setTransform(27.2,25.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#444444").s().p("AgJAdQgEAAAAgEQAAgEAEAAIAHAAIAHggIgEgMQgBgEAEgBQAEgCABAFIAFANIgMApg");
	this.shape_11.setTransform(30,27.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAZIANgxIAFANIgKAkg");
	this.shape_12.setTransform(30,27.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#444444").s().p("AggARIACgFQALgfgDgIIgDgIIA1AQIAAAAIADABQADADgBAKQgCAJgMAdIgBADgAgVALIAiAPQAKgYACgIIAAgFIgngMQAAANgHAVg");
	this.shape_13.setTransform(27,26.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbANQAMgggEgKIAvAOIAAAJQgBAIgMAcg");
	this.shape_14.setTransform(27,26.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#444444").s().p("AgCAbQgFAAgDgFQgFgGABgGIAJgkIAUAFIAAAEIgEAdQgDAOgJABgAgGAMQAAAEAEADQADAAACgJIAEgZIgHgBg");
	this.shape_15.setTransform(23,25.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgHATQgEgFABgEIAIggIANAEIgEAcQgDANgGAAQgCAAgDgEg");
	this.shape_16.setTransform(23,25.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#444444").s().p("AgOAIQgCgEAEgCIAVgKQAEgCACADQACAEgEACIgVAKIgCABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_17.setTransform(43.4,25.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#444444").s().p("AgLAHQgBgDADgDIAPgIQAEgCACAEQABADgDACIgPAIIgCABQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_18.setTransform(42.7,24.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#444444").s().p("AgGAkQgJgBgEgFQgIgIgCgSQgCgOADgJQAFgKATgFIADgBIABADQAXAgAFAOQAEAIgDADQgEADgKADQgMAFgHAAgAgUgQQgDAHACAMQACAPAGAHQACACAGAAQALACAQgJQgDgKgXgjQgNADgDAGg");
	this.shape_19.setTransform(43.6,25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQAbQgHgHgCgRQgCgNADgHQACgGAKgEIAJgDQAhAwgEAEQgFAEgPAEIgKABQgIAAgEgEg");
	this.shape_20.setTransform(43.6,25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#444444").s().p("AAWAKIgtgLQgDgCABgEQABgDAEABQAmALAFAAQAEABgBAEQAAADgEAAg");
	this.shape_21.setTransform(12.5,50.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#444444").s().p("AgKAAIgKgCQgEgBABgEQACgDADABIAmAMQAEAAAAAEQAAAEgFAAIgdgLg");
	this.shape_22.setTransform(13.5,47.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#444444").s().p("AgMApQgIgCgLgMQgNgNACgMQABgHAHgRIAIgQQACgDAJABQAOACAoAMIAEABIgBAEIgOAuIgDAFQgFADgNAEQgKAEgHAAgAgiADQgBAIAKALQAJAKAFABQAEABALgEQANgEADgDIANgqQgsgNgJgBQgNAagBAKg");
	this.shape_23.setTransform(13.2,49.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgLAlQgGgBgKgLQgMgMABgKQABgGAIgRIAHgQQACgCAcAIIAfAJIgOAuQgBADgQAFQgLAEgGAAIgCAAg");
	this.shape_24.setTransform(13.2,49.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#444444").s().p("AgXACQAAgCAEAAQAggCAGgCQADgCACAEQACACgEABQgFACgRACIgTABQgEAAAAgEg");
	this.shape_25.setTransform(33.6,55.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#444444").s().p("AgTADQgEAAAAgDQAAgDAEAAIAnAAQAEAAAAADQAAADgEAAg");
	this.shape_26.setTransform(33.1,53.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#444444").s().p("AgUAeQgHgFgCgFQgCgEgCgSQgCgWACgEQADgEAMgCQALgBANABQASABADAEQAAAAABABQAAABAAAAQAAABAAAAQAAABgBAAIAEAOQAFAUgBAGQgDAIgZAJIgHACIgGABQgHAAgHgFgAgagYIABAWIADASQACAEAFAEQAGAFAHgDIAHgCQAUgHABgEQACgEgFgSIgEgPQgHgCgPAAIgGAAQgNAAgEACg");
	this.shape_27.setTransform(33,54.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgRAcQgGgFgDgFQgCgCgBgSQgCgUACgEQACgFAbABQAZABgBADQgBACAEASQAFAQgCAEQgCAFgLAFIgSAHIgFABQgFAAgGgEg");
	this.shape_28.setTransform(33,54.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgBgBIADABIgDACg");
	this.shape_29.setTransform(40.5,20.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgBAAIADAAIAAABg");
	this.shape_30.setTransform(37.3,20.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgBAAIABgBIACADg");
	this.shape_31.setTransform(40.1,21.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgBgBIADABIgCACg");
	this.shape_32.setTransform(37.6,19.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgBAAIACgBIABADg");
	this.shape_33.setTransform(39.4,21.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAAgBIABACIgBABg");
	this.shape_34.setTransform(38.3,19);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgBgBIADAAIgCADg");
	this.shape_35.setTransform(38.7,22);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAAACIAAgDIABADg");
	this.shape_36.setTransform(39,18.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAAgBIACABIgDACg");
	this.shape_37.setTransform(38,21.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgBAAIADgCIgBAEg");
	this.shape_38.setTransform(39.7,19.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AABAAIABABIgDAAg");
	this.shape_39.setTransform(37.4,21);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgBAAIADgBIgCADg");
	this.shape_40.setTransform(40.3,19.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgJAEQgCgEACgDQABgEAFgCQADgCADACQAFABACAEQAEAIgKAGIgEABQgGAAgDgHg");
	this.shape_41.setTransform(38.9,20.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#444444").s().p("AghgFIAcgcIAnAnIgeAdg");
	this.shape_42.setTransform(38.9,20.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgaAYQgIgWAPgdQAEgIARABQAPACAIAFQAIAEgGAAQgMgGgNAGQgKAFgHAJQgFAGgBARIgBARIAAAEIgEgLg");
	this.shape_43.setTransform(26.1,12.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#444444").s().p("AgBATIgBgBIAAgBIgBgCIAAgBIADgIIAAgBIAAAAIADADIACABIADgBIACgBIACgGIgIgBIgEgBIgDgDIgGgGIgGgIIAVAPIAKADIAAABIgDAFIgCACIgCACIgEABIgBAAIgCgBIgCgDIgCAHIgBAAIAAAAIABAAIAAABIABACIAAABIABABIAAAAg");
	this.shape_44.setTransform(40.8,16.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#444444").s().p("AAGAMIgFgEIgCgDIgHgGIgGgIIADgCIAAABIAGAHIAFAGIAHAHIACABIACAAQABAAABgBQAAAAABAAQAAgBAAAAQABAAAAgBIAAAAIgBACIgDACIgCABg");
	this.shape_45.setTransform(40.3,14.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#444444").s().p("AAiA4IgTgiQgHgNgLgQIgYgdIgOgNQgIgGgJgCQAHABAKAGIAPAMIAZAdIAUAeQALASAGANQAGgGgCgJIAAgCIACAAQALABAFAIIABACIgNAAIAAAAIAJgCIgFgEIgGgCQACALgJAHIgCACg");
	this.shape_46.setTransform(38,8.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#444444").s().p("AANAcQgCgIAEgGQgHAAgIgDIgDgBIADgCIAOgHQAIgBADgFIgEACIgPABIgGAAIgNgEIgHgCIgJgHIAEAAIABAAQAQABALgBIAVgGIADgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAAAIAAAAQAAAAABABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgVAHQgNACgKAAIAIAEIAHACIAFABIANgBIANgDIACgBIACAFIAAABIgGAFIgUAIIANADIADAAIgCACQgGAGACAIIAAAAg");
	this.shape_47.setTransform(33.2,30.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#444444").s().p("AAvAaIgBgDIgCgEIABgEIAAgCIgEAAIAAAAIgBABIgCAAIgCAAIgHgCIgHgEQgDgEAAgDIAAgBIgFABIgOABIgNgCIgTgGIgHgEIgLgKIgEgFIAAAAIABAAIAEAFIALAJIAGADIANAGIAHACIAMAAIAGAAIAOgBIANgFIAOgFIACgBIAAADIgBAJIgDAEIgDABIgCABIgFAAIgFgBIgGgCIACACIAEAEIAHACIABAAIABgBIABAAIABAAIAHACIAHAAIgHACQgDABAAAEIADAHIAAAAIgBAAgAAjgDIgLADIAHABQAFABADAAIACgBIABgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQABgCAAgEIgLAEg");
	this.shape_48.setTransform(27.7,23.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#444444").s().p("AgPAHIgKgCIACgBIAAgCIgGgEIAKAEIACABIAWABIAHgBIAHgCQAHgBAEgGIAAAAQgCAGgIADIgHACIgUACIgEABIgEgBg");
	this.shape_49.setTransform(43.2,35.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#444444").s().p("AACAUQgCgBgCgCIAAAAIAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIACgCIABgBIAKgDIAHgCQABgBAAAAQABAAAAgBQABAAAAgBQAAAAAAgBIgLgBIgNgDIgGgDIgMgIIgEgGIAAAAIALAJIARAJIAHABIARABIgBAAQgCAEgDAEIgJAEIgJABIgCABIgBABIACACIAFACIAFABIAGgBIAAAAQgEACgHABg");
	this.shape_50.setTransform(41.2,31.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#444444").s().p("AgLAgQADgRAAgQQABgSgCgRQADAUAAAPQABAMgBAOIAGgQIAEgHIACgCIABADQAEAIACAHIAAAJIgCAIIgBgCIAAAAIABgGIgBgIIgDgHIgCgFIgBABIgCADIgFAPIgEAGIAAABIgFAEg");
	this.shape_51.setTransform(43.8,25.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#444444").s().p("AAFAMIgDgCIgCgDIgDgFQgCgEAAgEIAAgEIAAgBIAAABIABAEQABAEADADIABADIAFAIg");
	this.shape_52.setTransform(19,35.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#444444").s().p("AgCABIgBgBIAAAAIABAAIACgBIAAABIAEAAQgCAAgCABIAAABg");
	this.shape_53.setTransform(13,55);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#444444").s().p("AgTAgIgDgEIABAAIAFAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAAAIABgCIgBgBIgcgMIAegGQALgCAJgEQALgDAIgJIAIgJIAFgKIABAAIgFALQgDAFgFAEQgJAJgKAEIgUAIIgRAEIAOAHIACABIABABIAAACIgBADIgCACIgDAAIgEgBIABADg");
	this.shape_54.setTransform(15.4,50.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#444444").s().p("AAFAjIgCgBIgDgGIAAgEIAAgDIgEgFIgCgDIgCAAQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgBAEQgCAFACAJIAAAAIgBAAQgDgHABgIIABgEQABgDACgBQACAAADABIADADIADAGIADALIACACIADAAIABgBQAAgDgCgDIgFgJQgEgIAAgIQgFgQABgSIAAgBIAAABQAAASAEAQIAHAPIAEAIQAEAHAAACIAAABIgBAAQAAADgEAAIgBAAIgEgBg");
	this.shape_55.setTransform(14.1,43.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#444444").s().p("AgKATQgCgCAAgDIAAgDIAAgBIABgBIgBgBIABAAIABABIAEgGIgOgIIAWACIgJgFIgHgEIgCgCIAAgCQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBIABAAQAPALATAEQgUgDgOgJIgBACIABABIAAABIAHADIANAGIABABIgBABIAAADIgBAAIgMAAIAFABIABACIgBABIgHAHIgBAAIAAABIABAHIAAACg");
	this.shape_56.setTransform(9,57.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#444444").s().p("AAHAaIgDgCIACAAIAAABIABAAIgBgBIgDgIIAAgDIAAgDIABgCIgEgDIgBgBIAAgBIABgDIACgBIAFgBIgMgDIgCgBIgCgDIABAAIAAgBQACgDAFAAIARgCIgDgDQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgJgBQgMgBgJgEIAAAAIAAAAQALADAKABIAJAAIACABIAEABQADACAAADIAAABIgBAAIgSADIgFACIAGABIAGABIAPABIABAAIAAAEIgSACIgDABIAIAEIAGADIgGAAQgBAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAIgBACIAAADIACAJIAAABg");
	this.shape_57.setTransform(33.7,66.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#444444").s().p("AgKAIIgBAAIAAgBIAFgCIAIgDIAFgCIAEgCQAAgBAAAAQAAgBABAAQAAgBAAAAQgBAAAAgBIgBgBIAAAAIABAAIABABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAIgDADIgFAEIgEADIgGAAg");
	this.shape_58.setTransform(36,56.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#444444").s().p("AAMBCIADgHIABgHQABgFgBgIIgOAFIADgEQADgFABgHQACgFgCgGQgDABgCACIgGAFIgOANIgCgDQAUgXAJgWIAEgNIACgOIAAgOIgBgHIgCgHIAAgBIAAABIAEANIAAAPQAAANgFAPIgNAYIgBAFIACgEQAEgDAGgBIABAAIABACQACAGgCAIIgDAKIAIgDIAAACQADARgJANg");
	this.shape_59.setTransform(34.6,45.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#444444").s().p("AAGBBQgDgBgDgFQgCgEgCgEQgDgIAAgKIAChBQAAgUgEgNIABAAIAAAAQAEAIACAIIAGBBQABAJgBAIIgBAQQABAGACAFIABgBIAAAAIABAAIABAEIABAEg");
	this.shape_60.setTransform(28.2,50.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#444444").s().p("AgUAcIABgDIADgIIAGgKIAYgZIAEgHIABgCIABgBIABABIgBADIgCAIIgSAfIgJAIIgHAEIgDACg");
	this.shape_61.setTransform(22.6,45.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#444444").s().p("AATAlIgCgBIgCgCIgBgDIAAgBIADgDIACAAQAGgDADgGIgIgEIgKgFIgPgLIgPgQIgMgSIAAAAIANARIAHAIIAIAHIAQAKIATAIIACABIgBADQgDAIgJAEIgCAAIgBABIAAAAIAAACIABABIABABIADABIABABIAAAAg");
	this.shape_62.setTransform(23.1,37.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#444444").s().p("AgTBbIgIgBIgIgCQgMgEgOgJIgSgMIgFgHIAAgBIAAgCIAAgBIACgZIABgBIAAABIABAYIABACIAAABIAFAEIAFAEIAMAGQANAGANAEIADABIADABIAGAAIANgBQAIgBAQgFIALgEIACAAIACgBIAGgIIAMgKIACgDIADgBIAEgEQAEgEADgHIAFgMIAFgUIAAgNIgCgHIgCgHIgCgEIAAgBIAAgBQgEgIgEgFIgJgLQgKgNgJgIIgNgEIgPgDIgMgBIgOACIgHACIgDACIAAAAIgBABIgCABIgLAJQgMALgJALIAAAAIgBgBQAJgLALgLIAMgMIADgBIADgCIAHgDIAIgBIAHgBIAFAAIAIAAIAeAGIAAAAIABAAIAVAWIAKAMIAIANIABACIACAFIAEAQIABAPIgDAOIgBAFIAAACIgFAOQgEAIgEAFIgGAGIgFAFIgJAJIgHAJIgGADIgCABIAAAAIgBAAIgKAEQgSAFgJABIgIABIgHgBg");
	this.shape_63.setTransform(29.4,13.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#444444").s().p("AgdA2IAAAAQgIgFgIgHQgFgFgGgJQgGgIAAgLQAAgIACgIIAFgSIAFgSQACgEAEgEIAEgDIAEgCQAJgCAKABQARAAAQALQAOAIAOAQIARAWIACADIgBAEIgNAjIgFAKQgBACgDABIgFACIgLABIgLABQgRgBgZgEgAANA5IAVgBIAGgCIADgDIAFgJIAOgjIAAgEIgBgDIgSgVQgLgNgRgKQgPgKgRgBQgIAAgKACIgEACIgDACIgFAHIgFARIgEASIgCAQQABALAEAFQAEAHAHAHQAIAIAHADIgBAAg");
	this.shape_64.setTransform(28.1,14.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#444444").s().p("AgIA3IgVgDQgRgKgKgQQgHgKADgRIAHgfQAEgRAIgEQA1gUAyBNQgBAGgNAgQgEAKgEACQgCACgOABIgIABQgKAAgOgDg");
	this.shape_65.setTransform(28.1,14.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#444444").s().p("AgIAgIghgPIgSgRQgFgLgFgGQgEgFgCgFIgBgEIAIADIADAEQAEAFACAFQAEAJAIAHIASAMQAUANALAAQASABAVgCQAZgDALgEIgjANg");
	this.shape_66.setTransform(27.6,34.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#444444").s().p("ABiF8QgGAAgHgGQgGgEgEgFQgDgEgEgHIgDgKIAAgBIgBgCIgEgjIAAgCIAFgdIAAgNIgFgIIgBgTIAAABIgEgLIAAAAIgGgaIgNgMIgCgDIgCgDIgDgIIAAgIIACgHIACgEIgBgdIAAABIgDgRIgBgjIAAgDIAAgDIgCgNIABABIgBgBIgBAAIgEgCIgIgGIgBABIgBACIgBAAIAAAAIgPAYIgBABIgBABIAAAAIAAAAIAAgBIAAAAIgBACIAAACIgBABIgBABIgyA/IAAABIgPAQIgFAGIgFAFIAAABIAAAAIAAgBIAAABIgBAFIgEAHIgFAHQgEAFgEABIgKAEIAAABIgJAgQAAADgEAEQgFAGgGAEIgLAHIgLAGQgPAJgKADIgOADIgOAAIgHgCIgEgBIgEgCQgJgEgCgJQgDgHABgIIACgOQACgGAFgIIAIgKIAAgBIABAAIANgJIgBAAIARgPIABgBIADgEIAAgBIABAAIAAgCIAGgVIAAACIABgIIASgsIAAgOIAAgFIABgDIAHgJIAEgEIADgEIAJgOIAAABIAGgSIAUgmIAWgaIAbgbIAMgLIgRgJIAAAAIgBgBIgDgTIAAgBIABgBIAVgPIALgeIgKAfIAAAAIgUAQIAEASIAQAIIABABIABADIgDADIg1A8IgDADIgCADQgHAOgJAVIAAgBIgGATIAAAAIAAABIgJAPIAAAAIgBABIgDADIgDAEIgFAIIgBACIABASIgBABIgJAaIgDAFIgFAPIAAADIAAACIgGASIAAAAIAAABIAAABIgBABIAAABIgBADIgGAIIgRAQIgBAAIAAAAIgMAIIgHAJQgEAHgBADIgCAMIABAKQACAEAEACIACABIADABIAGACQAKACAMgFQAIgCAPgIIAVgNQAGgEADgDIACgFIAIgeIAAgCIAAgBIAMgCIgBgCIAAgBIgBAAIgBgBIgBgBIAAAAIAJgDIAEgDQACgBACgDIADgJIAAgCIACgDIABgBIAEgFIAEgGIAAAAIABgBIAQgQIAyhAIAAgBIABAAIAAgBIABgBIABgCIAQgYIAAAAIADgFIAEgEIAHgCIACABIACABIAAABIABAAIAAAAIAHAFIABACIADAAIAFADIACADIABADIAAABIAAAAIACASIABAkIADARIABAeIAAACIgBABIgCAFIgBAEIAAAFIACADIABACIALANIACABIACACIAAABIAHAcIAAAAIAEAMIABABIAAAAIABAQIAFAHIAAAVIgFAbIAFAiIAAADIACAHQAFAJAIAGQADADAFABIABAAIACAAIAGgCQAMgEAEgGQADgEAAgEIgBgKQgDgLgBgMIgEgYIABAAIgDgSIAAgSIAMgEIABgBIAAgOIAAgBIAEgIIAAAAIANgQIgCgdIgCgMIAAgBIgGgIIAAAAIgHgJIgCgCIAAgNIADg7IgCgzIAAgBIAAgKIgEg3IAAgBIAAgEIABgDIAAgBIAAgBIABgHIgCgKIABABIgCgEIgBgDIgBgJIAAgCIAAgCIAAgCIAAgCIAEgYIAYAnIAAgBIADAGIACAGIAAAMIgBATIAJAMIgIADIgBABIgCABIAHgBIAFAAIAEABIABABQABABAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAAAFIgCACIgCACIgCACIgBAAIgEACIABAAIAEAFIABADQAAACgCAEIgDACIgBABIgBAAIgGACIgCABIAAAAIACACQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIAAABIgBABIgBAAIAAABIAAAAIAAABIACADIADAAIAMgHIAFgDIAAgBIABgBIABgCIAWgZIAAgBIAEgDIAKgKIAGgHIACgDIABgDIAAAAIAAgBIAAgCIgBgGIABgGIACgGIAAgBIABgBIAAgBIABgOIAAgBIACgPIAAgBIABgBIAAgCIAAgDIAAgFIgBAAIgBgBIgDgEIgDgEIgBgDIgdgtIAAgBIAAAAIgGgSIAAgCIAEgZIABAAIAAgCIACgEIAAgHIABACIgBgEIAAACIgJgLIABgDIAEgKIAFgFIAEgCIACgBIAGABIABABIAAAAIAHAEIACADIALgLIgBgwIAAgBIAAgCIgBgFIgBgHIgNgZIgPgQIhfgVIgkgDIgMABIgCABIgBAAIgBABIgDACIgZAdIAAABIgcAYIgBAAIgGAEQgDACgBAEIgBABIAAABIABAEIACAHIAAAAIAAABIgCAVIAAAAIgEAMIAAAAIgOAAIAOgBIAAABIAAgBIAAAAIADgLIAAAAIABgVIgDgLIAAgCIAAgCQABgEAEgDIAHgFIAbgYIAAAAIAWgeIAFgEIABAAIADgCIADAAIANgCIAMAAQANAAAMACIANABIBUARIACAAIABABIATASIABAAIAOAdIACAMIAAADIABA4IgWAYIgIgIIgIgGIAAAAIgDAFIAAABIAGAIIABABIABANIgBACIgDAFIgEAWIAFAOIAcAtIAAAAIABABIABADIAEAFIAAAAIABABIACABIABACIACAGIAAAGIgCAKIAAgCIgCAZIgBAFIgBABIgDAMIAAAEIABABIAAABIAAACIAAADIgCAGIgDAFIgHAJIgHAGIAAABIgDABIgEACIgTAZIgCADIgCABIAAACIgFAEIgEACIgOAIIgBAAIgBAAIgPAEIgCgKIgCBfIAAAIIgBgBIABADIAAgCIAHAIIAAABIAAAAIAGAJIABABIAAABIADAOIACAhIABADIgQAUIgCADIAAgCIgBADIABgBIAAAAIAAAMIgBAEIgCADIgCADIgEACIgEACIAAAIIADARIAAABIABALIAGAiQACAKgBAEQAAAHgFAHQgFAGgGADQgFAEgHACIgGABIAAAAIgBAAIgCABgAgTBKIAAAAIAAgBIAAAAgACNADIADgDIgCAAIgBAAIgBAAgACLgUIAAgBIADgCIACgBIgDgFIAAgCIACgUIAAgDIAAgDIAAgDIgCgEIAAgCIgBgCIgBAAIgDgGIABAFIAAABIACAKIABABIgBABIgBAJIAAABIAAABIgBACIAAAEIAAgBgAC/jTg");
	this.shape_67.setTransform(24.2,38.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("ABSFtQgKgKgBgLIgFgmIAFgcIAAgRIgFgIIgBgRIgFgMIgHgcQgGgFgIgKQgFgGACgKIADgJIgBgeIgDgRIgDg2QgCgGgDABQgCAAgLgJQgCgCgEAEIgDAFIhFBeIgRARIgHAKIgDADQAAADgDAGQgDAIgFADIgKAFIgGABIgBAAIAAAEIgIAeQgBAGgGAFQgIAHgTALQgVALgMADQgKACgPgEQgNgDgBgNQgBgGACgNQABgGAGgKIAGgIIAOgJIAQgPQAGgGABgFIAGgUQABgKAFgMIAMgdIAAgPQgBgFAIgKIAHgIIAJgOIAGgTIATglQAEgHAagbQAYgbAEgDQAFgCgIgEIgNgGIgDgUIAUgPIALgfIAChyIAOAAIAEgMIABgVQgDgGAAgGQAAgEAGgFIAGgEIAbgYIAMgPQAMgQAFgDQAFgDAYABQAUAAAPADIBWASIATASIANAaIACAPQACAHgBAuIgQARQgGgGgIgFQgEgDgFAIIgDAIIAIALIAAAJIgDAHIgEAYIAGARIAcAsIACAEIAGAIQAFAEgEAOIgEAfIgDAIQgBAFACAGQACAGgJAKIgLALIgHAEIgXAeQgEAFgRAIIgJACIgBgFIgCgFQgCgDADgDQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgEgBQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAABgBIACgDQABgCALgFQAFgBgDgDIgIAEQgDABgEgDQgCgCAGgFIAOgJQAKgJgTAFIgIAFQgDABAAgEIABgHQAAgDAFgDIAFgCIgGgIIACgXQABgGgDgHIgCgFIgQgZIgBAMIACAMIADAQIgCARIAEA3IACA/IgDA6IAAALIAIAJIAGAJIADAPIACAgIgOASIgDAGIAAANQgBAHgMADIAAANIAEAfIAGAhQAEASgLAJQgHAGgPAEIgEAAQgJAAgJgKg");
	this.shape_68.setTransform(24.2,37.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.3,76.1);


(lib.shuttle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fire
	this.instance = new lib.fire();
	this.instance.setTransform(89.2,25.8,0.193,0.193,0,0,0,3.1,3.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({regX:2.9,scaleX:0.82,scaleY:0.82,x:89.1,y:25.7},8,cjs.Ease.get(1)).to({x:91.5,y:26.8,alpha:0},8).wait(12));

	// fire
	this.instance_1 = new lib.fire();
	this.instance_1.setTransform(84.8,32.7,0.513,0.513,0,0,0,3.8,3.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).to({x:87.5,y:35,alpha:0},6).wait(21));

	// fire
	this.instance_2 = new lib.fire();
	this.instance_2.setTransform(90,39.6,0.193,0.193,0,0,0,3.1,3.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({scaleX:1.23,scaleY:1.23},8,cjs.Ease.get(1)).to({x:92.4,y:40.2,alpha:0},5).wait(18));

	// fire
	this.instance_3 = new lib.fire();
	this.instance_3.setTransform(72.2,38,0.193,0.193,0,0,0,3.1,3.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({scaleX:1.14,scaleY:1.14},8,cjs.Ease.get(1)).to({x:74.7,y:39.6,alpha:0},6).wait(24));

	// fire
	this.instance_4 = new lib.fire();
	this.instance_4.setTransform(79.7,45.7,0.193,0.193,0,0,0,3.1,3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:4,scaleX:1,scaleY:1},6,cjs.Ease.get(1)).to({x:81.5,y:46,alpha:0},7).wait(29));

	// shuttle
	this.instance_5 = new lib.shuttle_2();
	this.instance_5.setTransform(49.6,32.8,1,1,0,0,0,49.6,32.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.3,65.5);


(lib.moon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flag
	this.instance = new lib.flag();
	this.instance.setTransform(12.7,35.9,0.56,0.56,-66.8,0,0,21.1,66.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(372).to({_off:false},0).wait(326));

	// moon
	this.instance_1 = new lib.moon_2();
	this.instance_1.setTransform(37.5,39.6,1,1,0,0,0,37.5,39.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(698));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,0,83.6,79.3);


(lib.太空人 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_226 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(226).call(this.frame_226).wait(16));

	// flag
	this.instance = new lib.flag();
	this.instance.setTransform(16.4,40.9,1,1,0,0,0,21.2,67.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(155).to({rotation:45,x:0.2,y:23.7},15).to({rotation:40.9,x:2.3,y:35.6},15).to({rotation:25.9,x:-6.1,y:74.2},40,cjs.Ease.get(1)).to({_off:true},1).wait(16));

	// body
	this.instance_1 = new lib.太空人_body();
	this.instance_1.setTransform(24.2,38.1,1,1,0,0,0,24.2,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(242));

	// hand
	this.instance_2 = new lib.hand();
	this.instance_2.setTransform(25,16.2,1,1,0,0,0,17.4,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(155).to({rotation:53.2,y:16.1},15).to({rotation:30},15).to({rotation:0},29).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,-26.2,53.1,102.3);


// stage content:



(lib.moon_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 太空人
	this.instance = new lib.太空人();
	this.instance.setTransform(261,74,0.076,0.076,-45,0,0,24.1,38);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(158).to({_off:false},0).to({regX:24.2,regY:38.1,scaleX:0.55,scaleY:0.55,rotation:0,x:215.8,y:50.5},45,cjs.Ease.get(1)).to({rotation:-23.2,x:199.8,y:36.7},29,cjs.Ease.get(0.5)).to({rotation:0,x:201.1,y:50.5},27,cjs.Ease.get(-0.5)).to({rotation:15,x:214.1,y:38.4},29,cjs.Ease.get(0.5)).to({rotation:0,y:56},23,cjs.Ease.get(-0.5)).to({rotation:-11.3,x:201,y:43.4},15).to({regX:24.1,rotation:-8.6,x:193.8,y:55.3},56).to({rotation:21.4,x:225.3,y:31.7},35,cjs.Ease.get(0.5)).to({rotation:6.4,x:261.3,y:72.3},58).to({regX:24.4,regY:37.9,scaleX:0.17,scaleY:0.17,rotation:-38.6,x:256.3,y:58.7},66).to({_off:true},1).wait(96));

	// 把手
	this.instance_1 = new lib.把手();
	this.instance_1.setTransform(451.1,188.1,0.824,1,-30,0,0,1.9,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:1.8,regY:1.1,scaleX:1,rotation:0,x:460.7,y:179.8},12,cjs.Ease.get(1)).wait(575).to({regX:1.9,regY:1,scaleX:0.82,rotation:-30,x:451.1,y:188.1},11).wait(40));

	// door_open
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").p("AjPB9IGdAAIhrj5Ij7AAg");
	this.shape.setTransform(464.5,190);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjOB9IA3j5ID6AAIBsD5g");
	this.shape_1.setTransform(464.4,190);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#444444").p("AjFBzIAvj4IDvATIBrD4g");
	this.shape_2.setTransform(465.5,189.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjEBzIAvj4IDvATIBrD4g");
	this.shape_3.setTransform(465.4,189.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#444444").p("Ai8BqIAoj4IDkAkIBrD4g");
	this.shape_4.setTransform(466.4,188.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai7BqIAoj4IDkAkIBrD5g");
	this.shape_5.setTransform(466.3,188.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#444444").p("Ai0BiIAij3IDZAzIBsD4g");
	this.shape_6.setTransform(467.2,187.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AizBiIAjj3IDYAzIBsD4g");
	this.shape_7.setTransform(467.1,187.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#444444").p("AitBbIAcj3IDRBBIBrD4g");
	this.shape_8.setTransform(468,186.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AisBbIAdj3IDQBBIBsD4g");
	this.shape_9.setTransform(467.8,186.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#444444").p("AinBUIAYj2IDIBNIBsD4g");
	this.shape_10.setTransform(468.6,186.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AilBUIAXj2IDJBNIBrD4g");
	this.shape_11.setTransform(468.5,186.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#444444").p("AihBOIATj2IDCBYIBrD4g");
	this.shape_12.setTransform(469.2,185.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AigBPIAUj3IDBBYIBsD5g");
	this.shape_13.setTransform(469,185.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#444444").p("AidBKIAQj2IC8BhIBrD4g");
	this.shape_14.setTransform(469.7,185.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AibBKIAQj2IC7BhIBsD4g");
	this.shape_15.setTransform(469.5,185.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#444444").p("AiZBGIANj2IC3BpIBrD4g");
	this.shape_16.setTransform(470.1,184.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiXBGIANj2IC2BpIBsD4g");
	this.shape_17.setTransform(469.9,184.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#444444").p("AiWBDIAKj2ICzBuIBsD4g");
	this.shape_18.setTransform(470.4,184.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiUBDIAKj2ICzBuIBsD5g");
	this.shape_19.setTransform(470.2,184.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#444444").p("AiUBBIAJj2ICwByIBsD4g");
	this.shape_20.setTransform(470.6,184.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AiSBBIAJj1ICwBxIBsD4g");
	this.shape_21.setTransform(470.4,184.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#444444").p("AiTBAIAIj2ICvB1IBsD4g");
	this.shape_22.setTransform(470.7,184.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AiRBAIAIj2ICvB1IBsD4g");
	this.shape_23.setTransform(470.5,184.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#444444").p("AiSA/IAHj1ICvB1IBrD4g");
	this.shape_24.setTransform(470.8,184.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AiQA/IAHj1ICvB1IBrD4g");
	this.shape_25.setTransform(470.6,184.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#444444").p("AiYBFIAMj2IC1BrIBsD4g");
	this.shape_26.setTransform(470.2,184.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AiWBFIAMj2IC1BrIBsD4g");
	this.shape_27.setTransform(470,184.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#444444").p("AidBKIAQj2IC8BgIBsD4g");
	this.shape_28.setTransform(469.6,185.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AibBKIAPj1IC9BfIBsD5g");
	this.shape_29.setTransform(469.5,185.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#444444").p("AijBQIAVj2IDDBVIBrD4g");
	this.shape_30.setTransform(469.1,185.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AihBQIAUj2IDDBVIBsD4g");
	this.shape_31.setTransform(468.9,185.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#444444").p("AioBVIAZj2IDKBLIBrD4g");
	this.shape_32.setTransform(468.5,186.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AinBVIAZj2IDKBLIBsD4g");
	this.shape_33.setTransform(468.3,186.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#444444").p("AiuBbIAdj3IDRBAIBsD4g");
	this.shape_34.setTransform(467.9,186.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AisBbIAdj3IDRBAIBrD4g");
	this.shape_35.setTransform(467.8,186.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#444444").p("AizBhIAhj3IDYA1IBsD4g");
	this.shape_36.setTransform(467.3,187.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AiyBhIAij3IDXA1IBsD4g");
	this.shape_37.setTransform(467.2,187.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#444444").p("Ai5BmIAmj3IDfArIBrD4g");
	this.shape_38.setTransform(466.8,187.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ai4BmIAmj3IDfArIBsD4g");
	this.shape_39.setTransform(466.7,187.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#444444").p("Ai+BsIAqj4IDmAgIBrD4g");
	this.shape_40.setTransform(466.2,188.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Ai9BsIAqj3IDmAfIBrD4g");
	this.shape_41.setTransform(466.1,188.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#444444").p("AjEBxIAvj3IDsAVIBsD4g");
	this.shape_42.setTransform(465.6,188.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AjDBxIAvj3IDsAVIBsD4g");
	this.shape_43.setTransform(465.5,188.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#444444").p("AjJB3IAzj4IDzALIBsD4g");
	this.shape_44.setTransform(465,189.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AjIB3IAyj4ID0ALIBsD4g");
	this.shape_45.setTransform(465,189.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},575).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(40));

	// moon
	this.instance_2 = new lib.moon();
	this.instance_2.setTransform(467.6,190,0.231,0.231,0,0,0,37.5,39.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({regX:37.6,scaleX:0.95,scaleY:0.95,rotation:-720,guide:{path:[467.5,189.9,437.1,170.7,400,149.3,325.8,106.6,292,95.5,237.6,77.9,197,94.3,195.7,94.8,194.4,95.2]}},166,cjs.Ease.get(1)).to({rotation:-1080,guide:{path:[194.2,95.2,190.8,96.6,187.6,98.3]}},231,cjs.Ease.get(-1)).to({rotation:-1440},162).to({regY:39.5,scaleX:0.18,scaleY:0.18,rotation:-1080,guide:{path:[187.6,98.3,187.7,98.3,187.7,98.3]}},7,cjs.Ease.get(0.5)).to({regX:37.4,scaleX:0.41,scaleY:0.41},4).to({regY:39.4,scaleX:0.13,scaleY:0.13},4).to({_off:true},1).wait(51));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_12 = new cjs.Graphics().p("Eg13gePMBrugBQIsvSgIp5KuIgHD2IEdB2ImeADIh7YVMhQSADsg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_graphics_12,x:256.8,y:180.4}).wait(626));

	// star
	this.instance_3 = new lib.star();
	this.instance_3.setTransform(411.5,219.2,0.693,0.693,0,0,0,88.5,88.5);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:88.6,rotation:-180},360).wait(278));

	// line
	this.instance_4 = new lib.line();
	this.instance_4.setTransform(263.4,75.8,0.041,0.041,116,0,0,18.2,-2);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(158).to({_off:false},0).to({regX:17.5,regY:-1.6,scaleX:0.27,scaleY:0.38,rotation:150.9,x:254.9,y:97.6},45).to({scaleX:0.41,scaleY:0.59,x:250.2,y:122.5},27).to({regY:-1.7,scaleX:0.3,scaleY:0.43,rotation:139.6,x:252.1,y:108.3},29).to({regX:17.4,scaleX:0.58,scaleY:0.42,rotation:150.6,x:254,y:94},29).to({regY:-1.8,scaleX:0.32,scaleY:0.33,rotation:134.4,x:255.7,y:82.7},23).to({regY:-1.7,scaleX:0.51,scaleY:0.37,rotation:123.8,x:256.7,y:75.4},15).to({regY:-1.5,scaleX:0.28,scaleY:0.4,rotation:100.1,x:259,y:58.7},34).to({regX:17.1,regY:-1.4,scaleX:0.67,y:64.1},22).to({regX:17.2,scaleY:0.28,rotation:145.1},35).to({regX:17.1,regY:-1.6,scaleX:0.38,scaleY:0.23,rotation:160.1,y:72.9},22).to({regX:17,regY:-2,scaleX:0.09,scaleY:0.05},36).to({regX:16.8,regY:-1.7,scaleX:0.41,scaleY:0.07,rotation:180.6,y:65.3},36).to({regY:-1.4,scaleX:0.09,scaleY:0.05,rotation:115.1,y:59.4},30).to({_off:true},1).wait(96));

	// shuttle
	this.instance_5 = new lib.shuttle();
	this.instance_5.setTransform(466.3,192,0.172,0.172,15,0,0,50,33.1);
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(42).to({_off:false},0).to({regX:49.6,regY:32.8,scaleX:0.66,scaleY:0.66,rotation:0,x:278.3,y:85.8},119,cjs.Ease.get(1)).to({x:267.1,y:132.4},69,cjs.Ease.get(-0.5)).to({x:275.9,y:70.3},130).to({y:84.3},79).to({y:69.2},102).to({y:69.1},6).to({regX:49.8,scaleX:0.19,scaleY:0.19,x:211.4,y:41.1},13,cjs.Ease.get(1)).to({x:156.4,y:25.1,alpha:0},11,cjs.Ease.get(1)).wait(67));

	// door_close
	this.instance_6 = new lib.door_close();
	this.instance_6.setTransform(464.5,190,1,1,0,0,0,20.8,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(638));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(600.2,282.9,136,122.6);

})(moon_ani = moon_ani||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var moon_ani, images, createjs, ss;