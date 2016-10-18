(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.flower_ani2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kettle
	this.instance = new lib.kettle();
	this.instance.setTransform(94.1,137.6,0.131,0.131,0,0,0,52.4,37.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(158).to({_off:false},0).to({regY:37.7,scaleX:1,scaleY:1,x:111.3,y:137.2},6).to({scaleX:0.88,scaleY:0.88,x:109,y:137.6},2).to({scaleX:1,scaleY:1,x:109.6,y:137.2},2).to({rotation:-44.8,x:121.8,y:82.1},13,cjs.Ease.get(0.5)).wait(22).to({regX:52.5,scaleX:0.23,scaleY:0.23,rotation:0,x:104.3,y:138.9},5).to({regX:52.4,scaleX:0.37,scaleY:0.37,x:109.3,y:139.2},4).to({regY:37.6,scaleX:0.16,scaleY:0.16,x:104.3,y:138.9},4).to({_off:true},1).wait(119));

	// shovel
	this.instance_1 = new lib.shovel();
	this.instance_1.setTransform(139.7,139.6,0.128,0.128,105,0,0,39.3,2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({_off:false},0).to({regX:39,regY:1.9,scaleX:1,scaleY:1,rotation:0,x:159.8,y:128.8},7,cjs.Ease.get(0.54)).to({rotation:6.5,x:160.6,y:130.9},2).to({rotation:0,x:159.8,y:128.8},2).wait(4).to({regX:39.1,regY:1.8,rotation:-14.8,x:128.3,y:60.3},12,cjs.Ease.get(0.5)).to({_off:true},1).wait(239));

	// pot
	this.instance_2 = new lib.pot2();
	this.instance_2.setTransform(44.1,140.5,1,1,0,0,0,14.9,26.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({regY:26.7,rotation:-14.8,x:44,y:140.4},3).to({regY:26.8,rotation:0,x:44.1,y:140.5},3).to({rotation:6.5,x:44},3).to({rotation:0,x:44.1},3).to({regY:26.7,rotation:-4.5,y:140.4},3).to({regY:26.8,rotation:0,y:140.5},3).to({regX:14.8,rotation:5,x:44},4).to({regX:14.9,rotation:0,x:44.1},4).wait(253).to({regY:26.7,scaleX:0.2,scaleY:0.2,x:40.3,y:121.3},5,cjs.Ease.get(1)).to({scaleX:0.32,scaleY:0.32,x:40.9,y:124.3},2).to({scaleX:0.2,scaleY:0.2,x:40.3,y:119.3},2).to({_off:true},1).wait(18));

	// sun
	this.instance_3 = new lib.sun();
	this.instance_3.setTransform(110.5,41.3,0.335,0.335,0,0,0,23.4,23.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(203).to({_off:false},0).to({scaleX:0.59,scaleY:0.59,rotation:-359.9,x:43.7,y:51.3},15,cjs.Ease.get(1)).to({scaleX:0.53,scaleY:0.53},2).to({scaleX:0.59,scaleY:0.59},2).to({rotation:-719.9},86).to({scaleX:0.09,scaleY:0.09,x:41.2,y:108},5).to({_off:true},1).wait(22));

	// flower04
	this.instance_4 = new lib.flower04();
	this.instance_4.setTransform(28.9,79.6,0.499,0.499,0,0,0,6.6,6.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(269).to({_off:false},0).to({regY:6.7,scaleX:1.53,scaleY:1.53},6).to({scaleX:1.25,scaleY:1.25},2).to({scaleX:1.53,scaleY:1.53},2).wait(29).to({regX:6.7,regY:6.5,scaleX:0.3,scaleY:0.3,x:37.3,y:109.4},5,cjs.Ease.get(1)).to({regX:6.8,scaleX:0.49,scaleY:0.49,x:36,y:104.7},2).to({regX:6.7,scaleX:0.3,scaleY:0.3,x:37.3,y:107.4},2).to({_off:true},1).wait(18));

	// flower03
	this.instance_5 = new lib.flower03();
	this.instance_5.setTransform(40.6,114.1,0.129,0.109,0,0,0,7.4,24.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(255).to({_off:false},0).to({regX:7.3,regY:24.3,scaleX:1.3,scaleY:1.3},10,cjs.Ease.get(1)).to({scaleX:1.25,scaleY:1.25,y:114.2},2).to({scaleX:1.42,scaleY:1.42,y:114.1},2).wait(39).to({regX:7.2,regY:24.4,scaleX:0.28,scaleY:0.28,x:39.6,y:116.2},5,cjs.Ease.get(1)).to({scaleX:0.46,scaleY:0.46,x:39.7,y:115.9},2).to({scaleX:0.28,scaleY:0.28,x:39.6,y:114.2},2).to({_off:true},1).wait(18));

	// flower02
	this.instance_6 = new lib.flower02();
	this.instance_6.setTransform(48.9,91.7,0.259,0.259,0,0,0,6.8,6.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(241).to({_off:false},0).to({scaleX:1.82,scaleY:1.82,x:48.8,y:80.9},8,cjs.Ease.get(1)).to({regY:6.9,scaleX:1.23,scaleY:1.23,x:48.7,y:84.3},3).to({regY:6.8,scaleX:1.5,scaleY:1.5,y:82.7},3).wait(53).to({regX:6.9,regY:6.7,scaleX:0.29,scaleY:0.29,x:41.2,y:110},5,cjs.Ease.get(1)).to({regX:6.8,scaleX:0.48,scaleY:0.48,x:42.4,y:105.7},2).to({regX:6.9,scaleX:0.29,scaleY:0.29,x:41.2,y:108},2).to({_off:true},1).wait(18));

	// flower01
	this.instance_7 = new lib.flower01();
	this.instance_7.setTransform(48.9,114.1,0.2,0.2,0,0,0,8.3,22.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(231).to({_off:false},0).to({regY:22.4,scaleX:1,scaleY:1},10).wait(67).to({regX:8.4,regY:22.3,scaleX:0.2,scaleY:0.2,x:41.2,y:116.2},5,cjs.Ease.get(1)).to({regY:22.4,scaleX:0.32,scaleY:0.32,x:42.4,y:115.8},2).to({regY:22.3,scaleX:0.2,scaleY:0.2,x:41.2,y:114.2},2).to({_off:true},1).wait(18));

	// grass
	this.instance_8 = new lib.grass();
	this.instance_8.setTransform(44.2,115.6,0.148,0.148,0,0,0,24.9,20.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(218).to({_off:false},0).to({regY:20.1,scaleX:1,scaleY:1},7,cjs.Ease.get(1)).to({scaleX:0.79,scaleY:0.79},3).to({scaleX:1,scaleY:1},3).to({scaleX:0.83,scaleY:0.83,rotation:15},10).to({regX:25,scaleX:0.95,scaleY:0.95,rotation:0},16).to({regX:24.9,regY:20.2,scaleX:0.93,scaleY:0.93,rotation:-7.3,x:44.3,y:115.7},17).to({regX:25,regY:20.1,scaleX:0.95,scaleY:0.95,rotation:0,x:44.2,y:115.6},16).wait(18).to({regX:24.8,regY:20.2,scaleX:0.19,scaleY:0.19,x:40.3,y:116.5},5,cjs.Ease.get(1)).to({regY:20.3,scaleX:0.31,scaleY:0.31,x:40.9,y:116.3},2).to({regY:20.2,scaleX:0.19,scaleY:0.19,x:40.3,y:114.5},2).to({_off:true},1).wait(18));

	// water
	this.instance_9 = new lib.water();
	this.instance_9.setTransform(62.8,89.3,0.063,0.063,30,0,0,75.5,4.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(179).to({_off:false},0).to({regX:75,regY:5,scaleX:0.39,scaleY:0.39,rotation:0},10,cjs.Ease.get(1)).to({regY:5.2,scaleX:0.26,scaleY:0.26,rotation:-40.5,x:46.2,y:114.2},14).to({_off:true},1).wait(132));

	// 圖層 23 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_97 = new cjs.Graphics().p("AqVPKQnOlqqfsvQjfkPi/j/QiljdAOAHUAAZAANAjigA0QRugbRsgcICbaEQ3Ymqivg2ImDgPQgPALgHADQgFACgCgCIgIgHQgBAAALAjQALAtgCAwQgMEOACDBQiaB6jBBcQjRBiibAAQiFAAhchIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(97).to({graphics:mask_graphics_97,x:40,y:66.3}).wait(239));

	// soil3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AhJA4QgJgKADgSIAJgbIAJgaQAFgQAIgHQAIgGAQgEQAggJAVALQARAJALAUQAHANAKAZQALAdgHAIQgEAFgMABIgSAAQgyAAgeAHIgTACQgMAAgGgHg");
	this.shape.setTransform(53.5,82.2,1,1,-14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AhBBOQgEAAgEgFQgCgCgCgEIgBgIIAAgBIAAgLIACgUIAAgBIABgVIAAgJIAEgQIAEgMQAHgLAOgKIADgBIARgOQAJgGAHgCQAFAAAEgCIABAAQAEAAAEABIAQAEQAHADAGAFIAAAAIAMAKQAFAEAFAGIAHALIADAEIADAFQADADAAAEIADAKQADAIgEAFIgBACQgFAEgIADIgCABIgOAFIgEACIgJADQgSAHgQAJQgSAKgOAMIgBAAQgMAIgEAEIAAAAIgNAEIgDgBg");
	this.shape_1.setTransform(53.7,84.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AhIBZQgDAAgCgEIgBgKIAAAAIAAgNIACgVIAAgCIABgWIABgMIAEgRIAFgNQAHgNANgMIACgCQAJgIAHgKQAIgJAHgDQAFAAADgFIACgBQACgCADABIASABQAIABAHAFIAAAAIAOAJQAHAEAFAFIAIAMIADAEIAEAGQACADgBAFQAAAIABADQABAKgGAGIgBABIgOAGIgCABIgPAGIgFACIgIAEQgUAJgNAMQgTANgNAQIgBACQgLAJgDAGIAAAAQgHADgEAGIgCAAIgEABIgEgBg");
	this.shape_2.setTransform(53,86.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444444").s().p("AhOBmIgCgLIAAAAIABgNIABgYIAAgCIABgYIACgNIAFgTIAGgPQAHgPALgOIADgDQAIgIAGgOQAHgMAHgDQAEgBACgHIACgCQADgEAEAAQAGAAAKgCQAKAAAIAEIAAAAIAQAIQAJADAFAGQAEAFAFAHIADAGIAEAGQACADgCAGQgCAIABAEQAAAKgIAFIgCACIgPAIIgCABIgQAHIgFACIgJADQgUALgNARQgTAPgMAVIAAACQgKAKgDAJIAAAAQgGAEgCAJIgBACQgDAFgFAAIgCAAQgDAAgBgDg");
	this.shape_3.setTransform(52.4,88.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#444444").s().p("AhQB3IgCgMIAAAAIABgOQABgMAAgOIAAgCQAAgTACgHIACgOIAGgXIAFgOQAIgRAKgRIADgDQAHgJAFgRQAGgPAHgFQADgBACgJIACgDQACgFADgBQAHgBAMgFQAKgCAJAEIAAAAIASAHQAMADAEAGQAFAFAEAIIAEAGIAEAHQADADgDAHQgEAJAAADQgBALgKAFIgCACIgRAIIgCABQgJAFgIADIgFADIgKAGQgSALgPAUQgSASgLAZIAAADQgJAMgDALIAAAAQgEAEgBANIgBAEQgBAIgFABIgFABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAg");
	this.shape_4.setTransform(51.9,89.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444444").s().p("AhSCIIgCgMIAAgBQgBgDACgMQABgMAAgPIAAgCQAAgWACgHIACgPIAHgZIAGgPQAIgTAKgTIACgEQAGgKAFgUQAFgSAGgGQADgCABgMIABgDQACgHADgBQAIgCAMgHQALgEAKADIAAAAIAVAGQANAEAFAGQAFAFAEAIIAEAHIAFAHQACAEgEAHQgGALAAACQgDALgLAGIgCABQgMAEgHAEIgCABQgKAHgHACIgGAEIgLAHQgSAPgPAVQgQAVgLAdIAAAEQgIAOgDANIAAABQgDAEABARIAAAEQAAAMgGADQgEACgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_5.setTransform(51.4,91.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#444444").s().p("AhVCZIgCgNIAAAAQAAgEABgMQADgOgBgQIAAgCQAAgYACgGIADgRIAHgbIAHgSIARgpIACgEQAGgLADgYQAEgUAFgHQADgCAAgOIABgFQABgIAEgCQAIgDANgKQAMgFALACIABAAIAWAGQAPADAFAGQAFAFAFAJIAEAHIAFAIQADAEgGAIIgIAOQgEALgNAGIgDABQgOAEgGAFIgCABQgLAHgHADIgGAEIgKAIQgUARgQAZQgOAYgKAhIgBAEQgFAQgEAPIAAABQgBAEADAVIAAAHQABAOgHAFQgFADgDAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_6.setTransform(50.9,93.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444444").s().p("Ah7CXIABgOQABgFAFgLQAGgOAEgQQAHgbADgGQAGgOASgcIArg8QAHgLAKgZQAJgWAFgGQADgDAEgQQAEgOAEgBQAJgCATgHQAQgEAKAFIAXALQAPAHAEAHQAEAHACAKIAFASQACAFgIAHIgOALQgKAMgSAAQgQAAgHADIgYAHIgVAIQgXAMgXAZQgUAVgSAiIgTAlQgBABgCAdQgCAYgLAFQgGADgDAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_7.setTransform(49.7,94.4,1,1,-14.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#444444").s().p("AhTCvIgDgOQgBgFACgKIAAgDQADgLAAgNIAAgIQAAgbABgJQACgNAHgYIADgLIAYhHIACgJQAEgMACgSQAEgXAFgJIABgBQABgFAAgNQABgPAEgDIAKgHIAMgLQAGgDAGgCQAIgCAGABIADABIARADIAFACIAFABIAKAGIAFAEQAEAFACAIIABABQAEAMADAEIABADQABAEgFAGIgHAKIgEAFQgEAKgJAGIgKAFIgCABIgKAFQgFACgEADIgNAKIgHAEIgOAOIgBABQgGAGgGAJQgMAPgKATIgEALQgIAQgFASIgDAPIgBAGQgDAPgCARIgBAJQgBAEAFAbIAAAGQABARgJAEIAAAAQgFADgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAg");
	this.shape_8.setTransform(49.9,96.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444444").s().p("AhQCzIgDgOQgBgFACgKIABgDQACgMAAgNIAAgIQAAgaACgLQACgOAGgYIADgLQAMgnALgiIADgJQADgNADgSQAEgXAFgJIABgBQACgGAAgNQACgOAEgEIAKgHIALgLQAGgFAGgBQAHgCAGABIAEABIARADIAFACIAEACIAKAHQADACABADQADAEABAIIAAACQACALADAEIABADQABADgFAIIgHAKIgEAFQgEAJgJAIIgJAGIgCABIgKAFIgIAGIgOALIgGAFQgBACgMANIgBABQgFAGgFAKQgLARgKATIgFAKQgIASgEARIgCAPIAAAHQgDAPgBASIgBAJIADAfIAAAHQAAAQgJAAIgBAAQgEACgCAAQgEAAgBgDg");
	this.shape_9.setTransform(49.4,97.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#444444").s().p("AhBC6IgBgBQgIADgDgFIgDgPQgBgEACgLIABgDQACgMAAgNIAAgJQABgYACgOQABgPAHgYIACgLQALgpALgiIADgIQAEgOADgSQAFgWAFgLIAAgBQADgGABgMQABgOAFgFIAJgIIALgLQAGgFAGgCQAHgCAGABIAEABIARAEIAFACIAEADQAEAFAFADQADACAAADQACAEAAAIIAAABQAAALACAFIABACQABAEgFAIIgHAKIgEAGQgEAJgJAIIgIAHIgCABIgJAHIgJAGIgNAMIgGAGQgBADgLANIAAABQgFAGgEALQgKAPgKAWIgFALQgJASgCARIgCAQIAAAHQgCAOAAAUIgBAIIADAgIAAAHQgCANgHAAIgDgBg");
	this.shape_10.setTransform(48.9,98.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#444444").s().p("Ag+C/IgBgBQgHABgDgGIgEgOQgBgFACgLIABgDQACgMAAgOIAAgJQABgXACgQQACgPAGgZIACgLQALgsAKghIADgIQAEgOAEgTQAFgVAFgMIABgBQACgGABgMQADgOAEgFIAHgJIANgMQAGgFAFgCQAIgCAGABIADABQALADAHABIAFADIADADQAEAGAEAEQADACAAADQABAEgCAHIAAACQgCALACAFIABACQABADgFAIIgHAMIgEAFQgFAJgIAJQgDABgFAHIgCABIgJAIIgIAHIgNAMQgDACgCAFQgCAEgJANIAAACQgEAGgDALIgTAoIgFAKQgKAUgCAQIAAAPIAAAIQgBAOAAAVIAAAJIADAgIgBAHQgDAKgFAAQgDAAgDgCg");
	this.shape_11.setTransform(48.4,99.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#444444").s().p("Ag9DDIgBgBQgHgBgDgFIgFgPQAAgFACgLIABgEQACgMAAgOIAAgJQABgWACgSQACgQAGgZIACgLQAKgvAKggIADgIIAIghQAGgVAFgNIABgBQADgHABgLQADgNAFgHIAGgJIAMgMQAHgGAFgCQAHgDAHABIADABQAMAFAGAAQADABACACIADAEQACAHAFAEQACACAAAEQAAAEgDAHIgBABQgEALACAFIAAACQACADgFAJIgHALIgEAGQgFAJgJAKQgCABgFAIIgBABIgJAJIgIAHIgNAOIgFAHQgBAFgIAOIAAABQgDAGgDANIgSAoIgFALQgKAVgBAQIAAAPIABAJQgBANACAWIAAAJQACAOAAATIgBAHQgDAHgFAAQgDAAgFgEg");
	this.shape_12.setTransform(48.1,100.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#444444").s().p("Ag9DHIgBgBQgGgDgEgFQgDgJgBgHQgBgEADgMIAAgDQADgNAAgOIAAgJQABgVACgUIAHgqIADgMQAJgxAKggIACgIIAKghQAFgUAGgOIAAgBQAEgIACgKQADgOAFgGIAGgKIAMgNQAGgGAFgDQAIgCAGABIADABIASAFQAEABABADIACAEQACAIAFAEQACADgBADQAAAEgFAHIgBABQgHAKACAGIABACQABACgFAKIgHAMIgEAFQgFAKgIAKQgCABgFAJIgBACIgIAKIgIAIIgNAOIgCAIQgCAGgIAOIAAACQgDAFgCAOQgGASgLAYIgEALQgLAWAAAPIABAPIAAAJQAAAOADAXIABAJQACARAAAQIgDAHQgCAGgFAAQgEAAgHgHg");
	this.shape_13.setTransform(47.8,101.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#444444").s().p("Ag8DLIgBgBQgHgFgDgGQgEgJgBgGQgBgEADgNIABgDQADgNAAgPIAAgJQABgTACgXIAHgrIACgLQAJg0AJgfIADgIIAKgiIAMgjIAAgBIAGgSQAEgNAFgHIAFgLIAMgNQAGgHAFgCQAIgDAGABIADABIATAGQADABACADQABACAAADQABAJAFAEQACACgCAEQgBAFgGAGIgBABQgJAKABAFIABACQACADgFAKIgIAMIgDAGIgOAVQgBAAgFALIgBABQgEAHgEAEIgIAJIgKAPIgEAJIgJAVIAAACQgBAFgBANQgGAVgKAYIgFALQgMAXABAPIACAPIABAKIAEAlIABAKQADATgBAPQgBAEgCACQgDAFgEAAQgFAAgIgKg");
	this.shape_14.setTransform(47.6,103.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#444444").s().p("Ag8DPIgBgCQgGgGgDgGQgFgJgBgGQAAgFADgNIAAgDQADgOAAgOIAAgJIAEgsIAGgsIADgLQAIg2AJgfIACgIIALgiIANgkIAAgBIAHgRIAHgVIAHgLIALgPQAHgHAEgCQAIgDAGABIADABIATAHQAEAAABAEQABACAAAEQAAAKAFADQACADgCAEQgCAFgIAGIgCABQgLAJACAGIAAACQACACgFAKIgHANIgEAGIgOAWQgBAAgEAMIgBACQgEAHgDAEIgIAKIgLAQIgDAJIgHAXIAAACIgBATQgFAWgKAYIgFALQgMAZACAOIACAPIABALIAGAmIACAJQADAWgCANQgBAEgDACQgCAEgEAAQgHAAgJgNg");
	this.shape_15.setTransform(47.3,104.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#444444").s().p("AhyC8QgIgXABgMQAAgEAHgMQAIgOAEgRQAHgbAchBQAehFASgcIApg/QAXgfANgMQASgQAJgCQALgCAGAFIARAMQAGADgEAJQgEAKADAGQAEAGgUAHQgUAGADAHQACAFgTASIgZAXIgJANQgGAIgEADIgaAUIgPAfIgGAVQgLAbgXAaQgTAVAAAOIgBAQQgBACgEAwQgDAtgLAFIgEABQgJAAgHgVg");
	this.shape_16.setTransform(47.3,105.5,1,1,-14.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#444444").s().p("AgnDBQgGgEgJgMIgDgDQgLgOgBgNQAAgEADgHIABgGIABgDQADgKgCgHIAAgIIAAgDQABgRAJgfQADgRAHgTIAEgLQAIgYAHgTIAHgTIAEgMIALgdQADgOABgOIACgKQAGgZAFgGIAFgHIAGgHIAFgGQAIgFAHABQAOAEACAAQAGAAgBAHQgBAHADAGQAEAFgQANIgBABIgDABQgMAKADAEQADAGgMAUIgLAaIgBACIgCAKIAAAAQgCAHgEAEIgEAHIgNAUIgFAJIgGAQIAAAAIABAWQgBAOgFARQgDANgGAOQgHASgCALIgBAIIABALIAAAJQAAAHAEAUIAAAEIADAOQACAPgFACIgEABIgDAAg");
	this.shape_17.setTransform(46.2,108.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#444444").s().p("AgjCfIgOgPIgDgDQgLgLABgPQAAgEADgGIACgGIACgDQADgLgDgEIgCgFIAAgDQACgQANgcQAFgOAKgPIAFgHQAMgVAKgOIAHgQQADgHABAAIAHgPQAEgOgCgMIAAgJQAAgWADgBQACgEgBgBIADgEIAFgGQAGgGAGAAQAMACACgCQAEgBAAAFQgBADACAGQACAGgOANIgBABIgCACQgLAJABAEQADAIgJASIgGAXIgBACIABAGIAAAAQgBAFgEAGIgEAGQgKAPgFAEIgDAHIgIAJIAAABIACAVQgBAOgDAQQgCAOgEANIgJAdIgCAGIgBAIQAAAAAAAAQAAAAgBABQAAABAAABQAAABAAABQgDADADAOIAAACQABAGACABQACAKgEgBIgBAAIgFgBg");
	this.shape_18.setTransform(45.3,110.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#444444").s().p("AgaCBIAAAAIAAAAIABACIgBgCgAgcCAIACABIgBABIgBgCgAgeB+QgDgGgKgIIgEgCQgLgIADgSQABgEADgGIADgFIABgDQAEgMgFgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAgCQADgOASgaQAFgKAOgLIAHgGQANgPANgJIAFgHIABAJIAAABIADADIABAAQgBAEgEAGIgDAGQgKAPgFAEIgHACQgCAAgEADIAAABIACAXQAAANgCAQQAAAOgDANQgEATgEAIIgDAGIgEAEQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgFgBABAHIAAABIAAAAIgCgCgAAcg+QAGgQgBgJQAAgBACgEIADAIQAFALgCAOQgBAAAAAAQAAgBgBABQAAAAgBAAQgBABAAAAQgBgEgDAFIgGAHIABgMgAAjhcIgFgPQABgDgCABQgBABAAAAQAAAAAAAAQAAAAAAgBQAAAAABgBIAEgHQAFgGAEgCQAKgBABgDQABgBABAAQAAAAABAAQAAAAAAAAQABABAAAAIgBAHQABAGgLAOIgBABIgDABIgHAIIAAAAgAAehrIAAAAQgBgBABABg");
	this.shape_19.setTransform(44.4,112.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#444444").s().p("AgVBwQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgHgHAAACIgBgCIADgFQACgBgBgGIgDgFQgCgIgKgGIgEgBQgLgGAFgUQABgEAEgFIADgFIABgCQAFgOgIADQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIABgDQAEgMAWgVQAHgJARgHIAHgEIAMgGQABAPAFABIAAABIAGAAIABAAQAAACgEAIIgDAGQgJAMgGADQgDACgFgBQgCgCgFAAIAAABIADAXIAAAcQABAOgCAMQgCAUgFAHQgCAEgCAAIgDABIgDAAgAASgvQAEgNgBgLQABgCAJgLIACgBIABAAIABgCQADACAGAIIAGAHIADAFIAAAAIgNAMIgWAIIAAgCgAA4gvIAAABIAAgBgAA1hBQADgCAAAIQABADgBAJQABgKgEgIgAAYhSIADgHQAEgGADgEQAHgEABgEIACgDIAAAEQgBAGgIANQgBAAgBAAQAAAAgBAAQAAABgBAAQAAABAAABQAAgBgBAAQAAAAAAAAQgBAAAAABQgBABgBAAIgDADIAAgCgAAfhUIgBABIABgBgAAthuIgBAAQABAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAABg");
	this.shape_20.setTransform(44.2,116);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#444444").s().p("AgeBiIgFgFQgJgMgCgEIgBgDIADgMQACgGAAgKIgBgGQgBgKgKgDIgEgCQgMgCAHgWQABgCAFgFIADgEIACgDQAFgOgJAFQgEACgBAAQgBAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAFgKAbgUQAIgHAUgDIAEgBIgDADIAAAYQABASAKgDIAAABIAJgEIABAAQABABgEAIIgDAGQgJANgGACQgCACgFgEIgKgGIAAABIADAVIADAbQACAPgBALQAAAUgGAGQgCADgDAAIgBABQgEAAgEgEgAA0g+IgIgGIAAAAIAEAAQAFgBAKgJQAEAAgBANQAAAIgDASQABgNgMgKgAAKg7IACgGIAJgBIgFAEIgFAEIgBgBgAAKhJIACgBIABAAQAHgPACgGQADgKAAAIIgDAGQgBAGgEAHIgFAMIAAABIgEAAIgFABIAHgJgAAWhCIAAAAIAAAAIAAAAgAAWhCIgBAAIABAAgAAshEIgWACQAFgOARAMg");
	this.shape_21.setTransform(44.8,119.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#444444").s().p("AhMBDQgIgWABgMQABgFAGgMQAIgOAEgOQAEgOgOgCQgLgCAPgWQACgEAGgCQAFgCADgEQAJgMgNAFQgKADAEgDQAIgIAjgIQAMgDAeAMQAYAJATAKQAFADAOgFQAGAEgaAzQAEgQgVgQQgVgQgLASQAAgCgKAGQgJAGABgDIARgtQAGgRgVAjIgCAAQgKAIgEABQgNAsAXgFIAMgEQADABgKALQgTAVgHgSIgHgOQgBACgEAvQgEAsgKAFIgEABQgJAAgIgVgAgJgyIACgCIAAAAIgCACIAAAAg");
	this.shape_22.setTransform(46.5,122.4,1,1,-14.9);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},121).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[]},1).wait(192));

	// soil2
	/* Layers with classic tweens must contain only a single symbol instance. */

	// shovel
	this.instance_10 = new lib.shovel();
	this.instance_10.setTransform(128.3,60.3,1,1,-14.9,0,0,39.1,1.8);
	this.instance_10._off = true;

	this.instance_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(97).to({_off:false},0).to({regY:1.9,rotation:-29.8,x:109,y:69.1},5).to({regY:1.8,rotation:-4.9,x:92.9,y:53.7},10,cjs.Ease.get(0.5)).to({regX:39.2,regY:1.7,rotation:-28.3,x:77.2,y:67.9},9).wait(22).to({regX:39.1,regY:1.8,scaleX:0.26,scaleY:0.26,rotation:46.5,x:94.5,y:133.9},8).to({regX:38.3,regY:2,scaleX:0.25,scaleY:0.25,rotation:46.5,x:90.6,y:134.3},3).to({regX:39.1,regY:1.9,scaleX:0.21,scaleY:0.21,x:92.2,y:138.4},3).to({_off:true},1).wait(178));

	// soil
	this.instance_11 = new lib.soil();
	this.instance_11.setTransform(89.7,138.6,0.069,0.069,0,0,0,25.5,65.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(65).to({_off:false},0).to({scaleX:1,scaleY:1},5).to({scaleX:0.86,scaleY:0.86,y:138.1},2).to({scaleX:1,scaleY:1,y:138.6},2).to({y:138.1},2).to({y:138.6},2).wait(69).to({regY:65.7,scaleX:0.08,scaleY:0.08},6,cjs.Ease.get(1)).to({regX:25.7,scaleX:0.16,scaleY:0.16},2).to({regX:25.5,scaleX:0.08,scaleY:0.08},2).to({_off:true},1).wait(178));

	// seed
	this.instance_12 = new lib.seed();
	this.instance_12.setTransform(39.6,85.1,1,1,0,0,0,2.4,2.4);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(57).to({_off:false},0).to({y:119.1,alpha:1},10,cjs.Ease.get(-0.49)).to({_off:true},1).wait(268));

	// seed
	this.instance_13 = new lib.seed();
	this.instance_13.setTransform(48.6,80.6,1,1,0,0,0,2.4,2.4);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(49).to({_off:false},0).to({y:119.1,alpha:1},11,cjs.Ease.get(-0.49)).to({_off:true},1).wait(275));

	// pot
	this.instance_14 = new lib.pot();
	this.instance_14.setTransform(108.7,38.5,0.15,0.15,128.8,0,0,14.9,13.8);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(11).to({_off:false},0).to({regY:13.4,scaleX:1,scaleY:1,rotation:0,guide:{path:[108.6,38.3,105.3,38.1,101,38.5,88.5,39.7,78,45.8,44.9,65.2,44.7,127]}},17,cjs.Ease.get(-0.99)).to({_off:true},1).wait(307));

	// 把手
	this.instance_15 = new lib.把手();
	this.instance_15.setTransform(105.8,39,1,1,0,0,0,1.2,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({scaleX:0.67,x:117.6},17).wait(259).to({scaleX:1,x:105.8},14).wait(46));

	// door_open
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#444444").ss(1,0,1).p("AhbD2IC4g0IAAmXIi4ggg");
	this.shape_23.setTransform(111.5,38.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ahbj0IC3AfIAAGXIi3A0g");
	this.shape_24.setTransform(111.5,38.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#444444").ss(1,0,1).p("AhXj2ICvAgIAAGXIivA2IAAnt");
	this.shape_25.setTransform(112,38.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhXj2ICvAhIAAGWIivA2g");
	this.shape_26.setTransform(112,38.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#444444").ss(1,0,1).p("AhSj4IClAiIAAGWIilA5IAAnx");
	this.shape_27.setTransform(112.4,38.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhSj4IClAiIAAGXIilA4g");
	this.shape_28.setTransform(112.4,38.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#444444").ss(1,0,1).p("AhOj6ICdAjIAAGXIicA7IgBn1");
	this.shape_29.setTransform(112.9,39);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhOj6ICdAkIAAGWIicA7g");
	this.shape_30.setTransform(112.9,39);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#444444").ss(1,0,1).p("AhJj8ICTAlIAAGWIiSA+IgBn5");
	this.shape_31.setTransform(113.3,39);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhJj8ICTAlIAAGXIiSA9g");
	this.shape_32.setTransform(113.3,39);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#444444").ss(1,0,1).p("AhFj+ICLAmIAAGXIiKA/IgBn8");
	this.shape_33.setTransform(113.8,39.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhFj+ICLAnIAAGWIiKBAg");
	this.shape_34.setTransform(113.8,39.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#444444").ss(1,0,1).p("AhAj/ICBAnIAAGWIiABCIgBn/");
	this.shape_35.setTransform(114.2,39.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhAj/ICBAnIAAGXIiABBg");
	this.shape_36.setTransform(114.2,39.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#444444").ss(1,0,1).p("Ag8kBIB5AoIAAGXIh3BEIgCoD");
	this.shape_37.setTransform(114.7,39.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Ag8kBIB5ApIAAGWIh3BEg");
	this.shape_38.setTransform(114.7,39.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#444444").ss(1,0,1).p("Ag1EEIBthGIAAmXIhvgqg");
	this.shape_39.setTransform(115.1,39.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Ag3kDIBvAqIAAGXIhtBGg");
	this.shape_40.setTransform(115.1,39.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#444444").ss(1,0,1).p("Ag0kEIBpAqIAAGXIhnBIIgCoJ");
	this.shape_41.setTransform(115.4,39.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Ag0kEIBpAqIAAGXIhnBIg");
	this.shape_42.setTransform(115.4,39.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#444444").ss(1,0,1).p("AgxkFIBjArIAAGWIhhBJIgCoK");
	this.shape_43.setTransform(115.8,39.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgxkFIBjArIAAGWIhhBKg");
	this.shape_44.setTransform(115.8,39.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#444444").ss(1,0,1).p("AgukGIBdArIAAGXIhbBKIgCoM");
	this.shape_45.setTransform(116.1,39.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgukFIBdAqIAAGXIhbBLg");
	this.shape_46.setTransform(116.1,39.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#444444").ss(1,0,1).p("AgqkHIBVAsIAAGWIhUBMIgBoO");
	this.shape_47.setTransform(116.4,39.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgqkGIBVArIAAGWIhUBMg");
	this.shape_48.setTransform(116.4,39.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#444444").ss(1,0,1).p("AgnkHIBPArIAAGWIhNBOIgCoP");
	this.shape_49.setTransform(116.7,39.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgnkHIBPArIAAGXIhNBNg");
	this.shape_50.setTransform(116.7,39.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#444444").ss(1,0,1).p("AgkkIIBJArIAAGXIhHBPIgCoR");
	this.shape_51.setTransform(117.1,39.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgkkIIBJAsIAAGWIhHBPg");
	this.shape_52.setTransform(117.1,39.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#444444").ss(1,0,1).p("AghkJIBDAsIAAGWIhBBQIgCoS");
	this.shape_53.setTransform(117.4,39.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AghkJIBDAsIAAGXIhBBQg");
	this.shape_54.setTransform(117.4,39.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#444444").ss(1,0,1).p("AgdkKIA7AsIAAGXIg6BRIgBoU");
	this.shape_55.setTransform(117.7,39.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgdkKIA7AtIAAGWIg6BSg");
	this.shape_56.setTransform(117.7,39.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#444444").ss(1,0,1).p("AgakLIABIXIA0hTIAAmXg");
	this.shape_57.setTransform(118,39.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgakLIA1AtIAAGXIg0BSg");
	this.shape_58.setTransform(118,39.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#444444").ss(1,0,1).p("AgfkKIA/AsIAAGXIg+BRIgBoU");
	this.shape_59.setTransform(117.5,39.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgfkJIA/AsIAAGWIg+BRg");
	this.shape_60.setTransform(117.5,39.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#444444").ss(1,0,1).p("AgpkHIBTArIAAGXIhRBMIgCoO");
	this.shape_61.setTransform(116.6,39.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgpkHIBTAsIAAGWIhRBNg");
	this.shape_62.setTransform(116.6,39.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#444444").ss(1,0,1).p("AgykEIBlAqIAAGWIhkBJIgBoJ");
	this.shape_63.setTransform(115.6,39.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgykEIBlAqIAAGXIhkBIg");
	this.shape_64.setTransform(115.6,39.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23}]}).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},259).to({state:[{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).wait(46));

	// dooor_close
	this.instance_16 = new lib.door_close();
	this.instance_16.setTransform(111.5,38.5,1,1,0,0,0,9.3,24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16}]}).wait(336));

	// Layer 1
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#33CCCC").s().p("AvnPnIAA/OIfOAAIAAfOg");
	this.shape_65.setTransform(100,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65}]}).wait(336));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


// symbols:
(lib.補間動畫2 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AhJA4QgJgKADgSIAJgbIAJgaQAFgQAIgHQAIgGAQgEQAggJAVALQARAJALAUQAHANAKAZQALAdgHAIQgEAFgMABIgSAAQgyAAgeAHIgTACQgMAAgGgHg");
	this.shape.setTransform(-1,-1,1,1,-29.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8,-7.5,16.2,15.2);


(lib.補間動畫1 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AhJA4QgJgKADgSIAJgbIAJgaQAFgQAIgHQAIgGAQgEQAggJAVALQARAJALAUQAHANAKAZQALAdgHAIQgEAFgMABIgSAAQgyAAgeAHIgTACQgMAAgGgHg");
	this.shape.setTransform(-1,-1,1,1,-29.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8,-7.5,16.2,15.2);


(lib.把手 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(0.5).p("AgHgJQgEAEAAAFQAAAGAEAEQADAFAEAAQAFAAADgFQAEgEAAgGQAAgFgEgEQgDgFgFAAQgEAAgDAFg");
	this.shape.setTransform(1.2,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAKQgEgEAAgGQAAgFAEgEQAEgEADAAQAEAAAEAEQADAEAAAFQAAAGgDAEQgEAFgEgBQgDABgEgFg");
	this.shape_1.setTransform(1.2,1.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2.4,3);


(lib.water = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AkVE0IAAgLQAAgEAFAAQAFAAAAAFIAAAKQAAAFgFAAQgFAAAAgFgAkPEHQgFgBABgFQABgUADgUQABgEAFAAQAEABAAAFQgDATgBAUQgBAFgEAAgAkEC4QgFgCABgEIAKgnQACgGAFACQAEABgBAFIgKAnQgBAEgEAAgAjuBrQgFgCACgFQAKgZAGgMQACgEAFACQAEACgCAFIgPAkQgCADgDAAgAjNAiQgEgCACgFIAVggQADgEAEADQAFACgDAEIgVAgQgBADgDAAgAihgfQgEgDADgEIAZgfQAEgEADADQAEAEgDAEIgZAeQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAgAhthbQgEgEAEgEIAdgbQAEgDADADQAEAEgEADIgdAcQgBAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAgAgyiRQgDgDAEgEIAggYQAEgEADAFQADAEgEADQgVAOgLAKIgDABQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBAAgAANjAQgDgDAEgDIAjgVQAEgDADAEQACAFgEACIgiAVIgDABQgDAAgBgDgABSjoQgCgEAEgDIAkgSQAFgCACAFQACAEgEADIgkARIgCABQgDAAgCgDgACbkKQgCgFAEgCIAmgOQAFgCABAEQACAFgFACIglAOIgCABQgDAAgBgDgADmkmQgCgFAFgCQAkgLADAAQAFgBABAFQABAFgFABIgnALQgEAAgBgDg");
	this.shape.setTransform(47.5,36.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgEAJIAAgRQABgFADgBQAFAAgBAGIAAARQAAAFgEABQgEgBAAgFg");
	this.shape_1.setTransform(10.3,65.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AkjEfQgFAAABgFQADgcACgNQABgFAFABQAFABgBAEQgEAXgBASQgBAEgEAAgAkWDOQgEgBABgFIALgoQACgEAFABQAFACgCAEIgMAnQgBAEgDAAgAj8CAQgFgCACgFQAHgSALgUQACgEAEACQAFACgDAFIgRAlQgBADgDAAgAjXA2QgFgDADgEQAJgOAOgUQADgEAEACQAEAEgDADQgLAPgLATQgCADgDAAgAiogLQgDgEADgDIAcgfQADgEAEAEQADADgDAEIgcAeQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAIgEgBgAhvhHQgDgEADgDIAggcQAEgCADADQAEAEgFADQgRAOgOANIgDABQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAgAgvh8QgDgEAEgDIAigXQAEgCADAEQADADgEADQgMAHgWAQIgDABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgAAUipQgDgEAEgDIAlgUQAEgCADAEQACAFgFACIgjAUIgDABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBgABdjQQgDgEAFgDIAmgRQAFgCABAFQACAFgEABIgmARIgCABQgDAAgBgDgACtjuQgDAAgCgDQgCgEAFgCIAngPQAFgBACAFQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIgDACIgnAOgAD7kJQgDAAgCgDQgBgEAFgCIAogMQAFgBABAFQABAFgFABIgnALg");
	this.shape_2.setTransform(39.7,32.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444444").s().p("AgNADQgBgDAFgBIARgEQAFgBABAFQABADgFABIgRADIgBABQgEAAgBgEg");
	this.shape_3.setTransform(73.9,2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#444444").s().p("AAAAPQgDgBAAgFIAAgRQAAgFADgBQAEABABAFIAAARQAAAFgFABg");
	this.shape_4.setTransform(35.9,66.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444444").s().p("AiqEAIACgnQABgEAFAAQAFABgBAEIgCAmQAAAFgFAAQgFgBAAgEgAifC5QgFgBABgFIAGgmQABgFAFABQAFABgBAFIgGAlQgBAFgEAAgAiRBtQgFgBABgFIAKglQACgFAEACQAGABgCAFIgKAlQgBADgEAAgAh7AkQgFgCACgFQAHgTAIgOQACgFAEACQAFACgCAFIgPAhQgBADgEAAgAhcggQgEgCACgFIAUghQADgEAEADQAEADgDADIgTAhQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAgAgzhhQgEgDAEgEQALgPAOgOQADgEAEADQADAEgDADIgZAeQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgEgBgAAAiaQgDgDADgEQAOgOAOgKQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAEAFgFACIgcAZIgEABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBgAA6jJQgCgFAEgCIAhgUQAEgCADAEQACAEgEADIghATIgCABQgDAAgCgCgAB9jvQgCgEAFgCQAUgJAQgGQAEgCACAFQACAFgFACQgOAEgVAKIgCAAQgDAAgCgDg");
	this.shape_5.setTransform(52.6,35.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#444444").s().p("AgNADQgBgDAFgBIASgEQAEgBABAFQABADgFABIgRADIgBABQgEAAgBgEg");
	this.shape_6.setTransform(73.9,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444444").s().p("AgEAKIABgTQAAgEADgBQAFAAAAAGIgBASQAAAEgEAAQgEAAAAgEg");
	this.shape_7.setTransform(0.5,67.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#444444").s().p("AlTE4QgGAAABgFIAEgpQAAgFAFABQAGAAgBAGIgEAnQgBAFgEAAgAlKDoQgFgBABgFIAIgnQABgFAGABQAEABgBAFIgJAnQABAEgFAAgAk3CaQgFgBABgFQAFgTAJgTQACgFAEACQAEACgBAEIgOAmQAAADgEAAgAkbBPQgFgCADgFIASgkQACgEAEACQAFADgCAEQgKAQgIAUQgDADgCAAgAj1AJQgFgDAEgEIAXgfQAEgFADAEQAEACgDAFIgXAeQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAgAjFg2QgDgDADgEQAMgNAPgQQAEgEADAEQAEADgEAEIgbAdQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAgAiMhvQgEgDAFgEQAPgOAPgLQAFgDACAEQAEAEgEADIgfAZIgEABQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAhNigQgCgDAEgDQASgNAQgJQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAABABQAAAAAAAAQABABAAAAQAAAAAAABQAEAFgFABIgiAWIgDABQgDAAgBgDgAgIjJQgCgFAEgCQARgKASgIQAEgCACAFQACAEgFACQgTAJgOAJIgCABQgDAAgCgDgAA/jrQgCgFAFgCIAlgOQAFgCACAFQABAFgEABIgmAOIgCABQgDAAgBgDgACLkHQgCgFAFgBIAngLQAEgCABAFQACAFgFABIgoAMQgDAAgBgEgADYkcQgBgFAFgBIAngJQAGgBAAAFQABAFgEABIgoAIIgBABQgEAAgBgEgAEnksQAAgEAFgBIAngGQAFgBABAGQABAEgGABIgnAFIgBABQgEAAgBgFg");
	this.shape_8.setTransform(34.8,31.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444444").s().p("AgJAFQgDAAgBgFQAAgDAEAAIASgBQAGAAgBAEQABAEgGAAIgRABg");
	this.shape_9.setTransform(73.9,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#444444").s().p("AgEAJIAAgRQABgFADgBQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAgBABIAAARQAAAFgEABQgEgBAAgFg");
	this.shape_10.setTransform(47.9,65.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#444444").s().p("AhsDkQgEgBAAgEIADgoQAAgEAGAAQAEABAAAEIgDAnQAAAFgFAAgAhjCWQgFgBABgFIAHgnQABgFAFABQAFABgBAFIgIAmQAAAFgEAAgAhTBIQgFgBACgFIALgmQACgFAFACQAEACgBAFIgMAlQgBAEgEAAgAg6AAQgEgCACgFQAHgRAJgTQADgFAEADQAEACgCAEQgIARgIATQgBADgEAAgAgXhHQgEgDACgEIAWgiQADgDACACQAEADgDAEIgTAhQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAgAAUiIQgEgEADgDQAKgNAQgRQAEgEAEAEQAEADgEAEIgaAdQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAgABKjCQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAIAfgZQAEgDADAEQADAFgEACIgeAZIgDABQgBAAAAAAQgBgBgBAAQAAAAAAAAQgBAAAAgBg");
	this.shape_11.setTransform(58.9,38.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#444444").s().p("AgMAHQgCgEAEgDQAOgIACAAQAFgCACAFQACAFgFAAIgPAIIgCABQgDAAgCgCg");
	this.shape_12.setTransform(74,13.3);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,75.4,69);


(lib.sun = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(2,1).p("AANgVIgZAs");
	this.shape.setTransform(33.8,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#444444").ss(2,1).p("AANgWIgZAt");
	this.shape_1.setTransform(13.1,41.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#444444").ss(2,1).p("AAXgMIgtAZ");
	this.shape_2.setTransform(41.4,13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#444444").ss(2,1).p("AAXgMIgtAZ");
	this.shape_3.setTransform(5.5,33.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#444444").ss(2,1).p("AAaAAIgzAA");
	this.shape_4.setTransform(44.2,23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#444444").ss(2,1).p("AAaAAIgzAA");
	this.shape_5.setTransform(2.7,23.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#444444").ss(2,1).p("AAXANIgtgZ");
	this.shape_6.setTransform(41.4,33.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#444444").ss(2,1).p("AAXANIgtgZ");
	this.shape_7.setTransform(5.5,13.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#444444").ss(2,1).p("AANAXIgZgt");
	this.shape_8.setTransform(33.8,41.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#444444").ss(2,1).p("AANAXIgZgs");
	this.shape_9.setTransform(13.1,5.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#444444").ss(2,1).p("AAAAaIAAgz");
	this.shape_10.setTransform(23.5,44.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#444444").ss(2,1).p("AAAAaIAAgz");
	this.shape_11.setTransform(23.5,2.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#444444").ss(1,0,1).p("AhhhhQgoApAAA4QAAA5AoAoQApApA4AAQA5AAApgpQAogoAAg5QAAg4gogpQgpgog5AAQg4AAgpAog");
	this.shape_12.setTransform(23.4,23.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhhBhQgogoAAg5QAAg4AogpQApgoA4AAQA5AAApAoQAoApAAA4QAAA5goAoQgpApg5AAQg4AAgpgpg");
	this.shape_13.setTransform(23.4,23.5);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46.9,46.9);


(lib.soil = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AiwAQQgDABgNAGIgLAGQgFAAgDgCQgHgEAEgHIAKgQQAGgLAFgCQAHgDASgMIGBA5g");
	this.shape.setTransform(24.3,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AAAAJQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBIADgLQAAgBAAAAQAAgBAAAAQAAAAAAAAQABAAABABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABIgDAJQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAg");
	this.shape_1.setTransform(46.5,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AgEAKQgDgCACgDIAFgGIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQABgBAAAAQAEgEAEABIADABIgBADQgDAHgDAHQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAg");
	this.shape_2.setTransform(43.8,14.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBgEQABgDADABQgCAGgDAHg");
	this.shape_3.setTransform(43.8,14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#444444").s().p("AgBANQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBIgDgKIAAgEQABgHAGAAQAFgBADAHQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBABQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIABADIABAJQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAABg");
	this.shape_4.setTransform(8.8,13.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAAIAAgDQABgEADgBQADAAACAEIgGANg");
	this.shape_5.setTransform(8.8,13.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#444444").s().p("AhPAWQgOgCgFgFIgDgCIACgDQAIgHAJgCQABAAAAAAQABAAAAABQABAAAAAAQABABAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQgGABgEADQAFACAIABQBfAPA/gaQAGgDACgBQACgDAAgHQABgLAFgEQACgCADACQAAABABABQAAAAAAABQAAAAgBABQAAAAgBABQgDADAAAIQgBAJgCACQgEAFgIADQgqARg2AAQgcAAglgFg");
	this.shape_6.setTransform(36.3,64.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhPATQgNgCgFgEQAGgHAJgCIC0gbQgEADgBAJQgBAKgCABQgCAEgHADQgqARg2AAQgeAAgigFg");
	this.shape_7.setTransform(36.4,64.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#444444").s().p("AgRAMQgDgCACgDQANgPAUgDIACAAIACACQADAGgFAEIgFAEQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAIgVADIAPgJQAGgCABgBQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAgBQgOADgMAMQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAg");
	this.shape_8.setTransform(14.4,64);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAQgIQACAFgEADQgCACgGADIADAAIgYAEQANgOASgDg");
	this.shape_9.setTransform(14.4,64);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#444444").s().p("AgHARQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIADgYIABgDIAEgDQAIgCADAEQADADgBAIIgEANQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAEgNQABgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQgBgBgDACIAAAAIAAAAIgDAYQAAAAgBABQAAABgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_10.setTransform(8.6,63.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDgJIAAgCIACgBQAFgDADADQACADgCAGIgDANIgLAFg");
	this.shape_11.setTransform(8.6,63.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#444444").s().p("AghACIghgCIhvgHIgEgBID4AJIA6ADIA5AFg");
	this.shape_12.setTransform(26.8,11.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDAXIAAgtIAHAAIAAAtg");
	this.shape_13.setTransform(31.5,42);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDAXIAAggIAHAAIAAAggAgCgNQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_14.setTransform(30,42);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAGgFQAFgFAFAAQAEAAAEACIAHAGQACAFAAADQAAAFgCADQgDAFgEABQgDADgFAAQgGAAgFgFgAgFgFQgCADgBACQABAEACACQACADADAAQAEAAACgDQADgCgBgEQABgDgDgCQgCgEgEAAQgCAAgDAEg");
	this.shape_15.setTransform(27.2,42.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgLAMIAGgHQAAABABABQAAAAABAAQAAABABAAQAAAAAAAAIACABIACAAIABgCQABgCgEgCIgBgBQgIgCAAgHQAAgEADgCQAEgDACAAIAGACQACAAADADIgGAGQgCgEgDAAIAAABIgBABIABACIADADQAFACACABQABACAAADQAAAFgDADQgDADgFAAQgGAAgFgFg");
	this.shape_16.setTransform(23.8,42.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgDAWIAAgYIgEAAIAAgHIAEAAIAAgMIAGAAIAAAMIAFAAIAAAHIgFAAIAAAYg");
	this.shape_17.setTransform(37.2,36.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgHAFgEQAEgFAHAAIAEABIAEADIAAgDIAJAAIAAAfIgJAAIAAgEIgEAEIgEABQgGAAgFgFgAgFgFQgCABAAAEQAAAEACACQADAEACAAQADAAADgEQADgCAAgEQAAgDgDgCQgDgDgDAAQgCAAgDADg");
	this.shape_18.setTransform(34,36.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEAXIAAgYIgDAAIAAgHIADAAIAAgIQAAgDADgCQABgBACAAIAGABIAAAGIgDAAIgDAAIAAACIAAAFIAGAAIAAAHIgGAAIAAAYg");
	this.shape_19.setTransform(31.2,36);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgHAJQAAAAgBgBQAAAAAAAAQgBgBAAgBQAAAAAAgBIABgDIAEgCQgDgDAAgCQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABIgBACIgCADIADADIADgCIACADIgBABIgBABIAEAEIgGAAIgBgBQgDACgCAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAgEAFIAAABIACABIACgBIgCgEQAAAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAgAgCgGIAAABIABADIABgDIAAgBIgBAAg");
	this.shape_20.setTransform(28.2,37.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgDAWIAAgYIgEAAIAAgHIAEAAIAAgMIAGAAIAAAMIAFAAIAAAHIgFAAIAAAYg");
	this.shape_21.setTransform(24.4,36.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEAXIAAgYIgDAAIAAgHIADAAIAAgIQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABgBQABgBACAAIAGABIAAAGIgDAAIgCAAIgBACIAAAFIAGAAIAAAHIgGAAIAAAYg");
	this.shape_22.setTransform(22.5,36);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgLAMQgFgGAAgGQAAgGAGgGQAEgEAGAAQAEAAAFACIAGAHQACADAAAEQAAAEgCAFIgGAGQgFACgEAAQgGAAgFgFgAgFgFQgCADAAACQAAAEACACQADAEACAAQAEAAACgEQADgDAAgDQAAgDgDgCQgCgDgEAAQgCAAgDADg");
	this.shape_23.setTransform(19.6,36.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgKALIAFgGQAAABABABQAAAAAAABQABAAAAAAQABAAAAABIACABIACgBIABgCQAAgCgDgCIgBgBQgIgCAAgGQAAgFADgDQADgCADAAIAGACQACAAADADIgFAGQgEgDgCAAIAAAAIgBACIAAABIAEADQAFACACABQABADAAACQAAAFgDADQgDADgFAAQgGAAgEgGg");
	this.shape_24.setTransform(16.2,36.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgCB6IijgEIgJgBIADgIQAHgXAFgcQAKg3gKgYQgNgfAEggQADgUAEgHQACgEAEgBQAGgBAXgCQAcgCApgBQBPgBA3AEQBKAFAJASQABACAHA5IAHA3QAAAHgDAoIgEAvQgBAGgMACQgRADg8AAgAhfhrQgrACgMACQgMAmAPAnQAQAngZBcQBlADBXABQBqACARgEQACgNACgjQADgiAAgGIgOhuQgFgFgXgFQgogHhQgBIgSAAQgnAAgmACg");
	this.shape_25.setTransform(26.6,37.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#444444").s().p("AimBvQAHgXAFgdQAKg5gLgaQgLgcADgdQACgRAFgLQADgICTABQCUABALAVIAOBwQAAAHgDAmIgEAwQgBAGhSAAQhQAAijgGg");
	this.shape_26.setTransform(26.8,37.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#444444").s().p("AgWEvIgYgDQgJgBgSABQg7ABgcgDQgrgFgPgPQgIgHAAgLQAAgHABgCIAAgBQADgXgCgpIgBgfQACgogBgoQgBgxABhVIAChPIAFg5QgBgGgLgqQgMgpgDgIIAAAAIgGgJIA8gIQAPgCC+AEIDIAGIABAAQAHABAEAIQAIAOgHAQQAAACAEANQAKAiAFAfQAHA3gHBDQgGA6gGDnQAGASAEAFQADACgBAGQgCAIgTAHQgjAkhkAAQglAAhMgIgAgUEhQBMAJAvgBQBWgCAcgeIABgBIACgBQAIgCAFgEQgEgGgHgTIAAgBIAAgCQAGjlAGg+QAHhAgHg2QgEgdgLgiQgGgTADgGQAEgHgEgKIgCgDQl5gMgZAEIgpAGIAQA2QAJAjAAAGIgEA6IgCBRQgCBSABAxQABAxgBAgIAAAdQADAlgEAeIgBAFIAAADQAAAFAFAEQAMAMAvAEQAaACAyAAg");
	this.shape_27.setTransform(25.9,39.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("ABNEwIh+gKQg7ACgogDQhKgFAAgcIABgIQAEgegDgkQgBgLABgYQABghgBgrQgBgxABhVIAChOIAFg6QAAgFgNguQgMgtgDgEIAxgHQAPgCDEAEIDCAGQAGABACALQACAKgEAIQgCAFAPAxQAPBCgJBUQgGA8gGDmIAEAMQAFAMADADQAFAFgYAIQggAihjAAIgLAAg");
	this.shape_28.setTransform(26.2,39.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#444444").s().p("AC2AxQgEgFAEgFQAMgNAAgIIgCAAQgHgBgIgEQgGgCgEAAIgGABQgFACgGAAIgVgCIgWgCQgRgBkjgtQgGgBABgGQACgHAGABQEiAvAQAAIAXACIATABIAHgBQAMgCANADIANAEQANACAAALQAAALgQATQgCACgDAAIgFgBg");
	this.shape_29.setTransform(29.4,5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AjHgrQEiAtAQABIAYACIATACIAMgCQAHgCAKAEIARAEQAFABgBAGQAAAKgNAQg");
	this.shape_30.setTransform(29.5,5.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#444444").s().p("AgCAxQgDgCgHAAQgOAAgMgFQgHgDgBgIQgCgOAWgYQAHgKASgRQAMgNAQgCQAJgBAGACQAHABgCAHQgCAHgHgCQgEgBgGABQgMABgKAJQgPAQgMAOQgNARABAHIABABQAJAEALAAQALAAADADQAGACgDAHQgBAEgEAAg");
	this.shape_31.setTransform(4.7,5.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgOApQgLAAgKgFQgLgFARgZQANgRASgSQAMgLAOgCQAHgBAFACIgoBUQgDgCgLAAg");
	this.shape_32.setTransform(4.7,5.1);

	this.addChild(this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51.1,70.3);


(lib.shovel = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgBAFQgHgCACgGIACgCQgBAFAFABQAEACADgDIAAABQgCAFgFAAIgBgBg");
	this.shape.setTransform(39.1,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAHQgDAAgBgEQgCgDACgCQABgEADAAQACgCACACQAEAAACAEQABACgBADQgBAEgEAAIgDABIgCgBg");
	this.shape_1.setTransform(39.2,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhHAMIABgDICKgXQABAAABAAQABAAABAAQAAAAAAAAQAAABgBAAIiLAcQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_2.setTransform(32.6,4.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAJIASgOIATgGQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAgBAAIgIACQgIAEgDACIgSAPQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAABgBg");
	this.shape_3.setTransform(20.7,7.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhTADICggGIAHAEIijADg");
	this.shape_4.setTransform(10,8.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhQAXQgDgDAOgKQAZgOB+gUIgCAOQgCAMABAEQgTgDgdABQg4ABgxATIgCABQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBAAAAg");
	this.shape_5.setTransform(9.1,5.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhPAAQCMAAANgCIAGACQgcABghACIgfAAQgrAAgYgDg");
	this.shape_6.setTransform(12,10.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444444").s().p("AhIAoQgcgEgJgJQgDgDgCgHQgBgEAFgIQAHgLAPgHQAOgIAxgJIA2gJQAOgDAUgBIABAAQAAAAABABQAAAAAAAAQAAABAAAAQABABAAAAIABAkIABAEQABABADAAQAFABALgGIAWgLQADAAABAFQACAEgBABIgLAEQgKABgDADQgSAOABACIAFAHIAFAGIAFAEQABABAAAAQABABAAABQAAAAAAABQAAAAgBAAQg8AEgnAAQgpAAgWgEg");
	this.shape_7.setTransform(11.5,6.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGAAIAJgBIACABQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAgBAAIgKACIgCgCg");
	this.shape_8.setTransform(23.7,4.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDgCIAGAAQACACgBACIgIABg");
	this.shape_9.setTransform(24.2,6.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAAAIgDgNQALARgGAJQABgCgDgLg");
	this.shape_10.setTransform(23.2,5.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#444444").s().p("AgKACQAAgPABAAIAMgDIABAAIADAEQACAFABAGIAAAPIgMADQgHgEgBgLg");
	this.shape_11.setTransform(23.8,5.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#444444").s().p("AhKAVQgBgOgGgFIgBgBQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAICMggIAJAAQAKADADANQAEAPgNAEQgMAFiCAYIgFABIAAgMg");
	this.shape_12.setTransform(32.7,3.4);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41,11.3);


(lib.seed = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
	this.shape.setTransform(2.4,2.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.8,4.8);


(lib.pot2 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AhfAAQABgCAJAAIC2AAIjAAGQAAgBgBAAQAAgBAAAAQAAgBAAgBQABAAAAAAg");
	this.shape.setTransform(15.3,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgyCFQgNAAgKgIQgKgJgCgNIgXiSQgBgGgGAAIgHAAQgLAAgGgHQgIgIAAgKIAAghQAAgKAIgIQAGgHALAAID1AAQAKAAAIAHQAHAIAAAKIAAAhQAAAZgRAAIgJAAQgGAAgCAGIgZCTQgCANgKAIQgKAIgNAAgAiGh3QgFAFAAAHIAAAhQAAAHAFAFQAFAFAHAAIAHAAQAGAAAFAEQAEADAAAGIAXCSQACAKAHAGQAIAHAKAAIBoAAQAKAAAHgHQAIgGACgKIAZiSQABgGAFgEQAFgDAFAAIAJAAQAGAAACgFQABgDAAgJIAAghQAAgHgFgFQgFgFgHAAIj1AAQgHAAgFAFg");
	this.shape_1.setTransform(14.9,13.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgyCBQgMAAgJgIQgIgHgCgMIgWiRQgBgFgDgCQgDgDgFAAIgHAAQgIgBgHgGQgGgGAAgJIAAggQAAgJAGgGQAHgGAIAAID1AAQAIAAAHAGQAGAGAAAJIAAAgQAAALgCAEQgDAGgIABIgJAAQgKAAgBAKIgaCRQgCAMgIAHQgKAIgLAAg");
	this.shape_2.setTransform(14.9,13.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.7,26.8);


(lib.pot = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AhfAAQABgCAJAAIC2AAIjAAGQAAgBgBAAQAAgBAAAAQAAgBAAgBQABAAAAAAg");
	this.shape.setTransform(15.3,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgyCFQgNAAgKgIQgKgJgCgNIgXiSQgBgGgGAAIgHAAQgLAAgGgHQgIgIAAgKIAAghQAAgKAIgIQAGgHALAAID1AAQAKAAAIAHQAHAIAAAKIAAAhQAAAZgRAAIgJAAQgGAAgCAGIgZCTQgCANgKAIQgKAIgNAAgAiGh3QgFAFAAAHIAAAhQAAAHAFAFQAFAFAHAAIAHAAQAGAAAFAEQAEADAAAGIAXCSQACAKAHAGQAIAHAKAAIBoAAQAKAAAHgHQAIgGACgKIAZiSQABgGAFgEQAFgDAFAAIAJAAQAGAAACgFQABgDAAgJIAAghQAAgHgFgFQgFgFgHAAIj1AAQgHAAgFAFg");
	this.shape_1.setTransform(14.9,13.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgyCBQgMAAgJgIQgIgHgCgMIgWiRQgBgFgDgCQgDgDgFAAIgHAAQgIgBgHgGQgGgGAAgJIAAggQAAgJAGgGQAHgGAIAAID1AAQAIAAAHAGQAGAGAAAJIAAAgQAAALgCAEQgDAGgIABIgJAAQgKAAgBAKIgaCRQgCAMgIAHQgKAIgLAAg");
	this.shape_2.setTransform(14.9,13.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.7,26.8);


(lib.kettle = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaAIQgVgagqgLIAAgEIAlAQQAmAUAAAgQgBgMgLgPg");
	this.shape.setTransform(56.5,20.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgNgCIAIABQAIAAALgDQgRAHgIACg");
	this.shape_1.setTransform(53.7,34.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AgkBcQAOgEAOgJIAPgMQAJgJAFgIQAGgIADgNIABgFIABgPIAAgDIAAgDIgBgDIAAgBIgBgFIgBgDIAAgDIgBgDQgEgKgHgIQgGgHgJgGQgFgEgJgDQgNgFgNgBIgKgBIAAAAIABgiIABAAIANADQAPADASAIQAJAGAJAHQALAKAHALQAHAJAEARIACAOIAAALIAAABIAAAEIgCAKIgEAOQgFANgIAKQgHAIgLAIQgKAHgHAEQgOAGgQADIgMACg");
	this.shape_2.setTransform(56.3,25.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhIhpICQC6IAAAZg");
	this.shape_3.setTransform(17.1,20.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhbiXIC2EbIABAUg");
	this.shape_4.setTransform(15.2,20.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444444").s().p("AA8gHQgCACAEAFIAEAGIiDACQAmgOBXgBg");
	this.shape_5.setTransform(30.6,9.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#444444").s().p("AgBAAQABgEADADIgEAFQgDgDADgBg");
	this.shape_6.setTransform(0.8,4.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444444").s().p("AgBgBQACgDADADIgFAEQgDgDADgBg");
	this.shape_7.setTransform(1.7,3.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#444444").s().p("AgBgBQACgDADADIgFAEQgDgDADgBg");
	this.shape_8.setTransform(2.9,2.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444444").s().p("AAAgBQABgCADADIgGADQgDgDAFgBg");
	this.shape_9.setTransform(3.9,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#444444").s().p("AAAgBQACgCACADIgGADQgCgDAEgBg");
	this.shape_10.setTransform(5.2,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#444444").s().p("AAAgBQACgCACADIgHADQgBgDAEgBg");
	this.shape_11.setTransform(6.4,0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#444444").s().p("AgoAcQAAgCALgMQANgNANgIQAJgJATgGIAQgFIgpAXQgmAggCAAIAAAAg");
	this.shape_12.setTransform(4.2,2.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#444444").s().p("AgmAZQAXgWAPgJQAMgHAOgHIANgHIgNAnIgXAQg");
	this.shape_13.setTransform(4.7,3.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJCLIgBkWIANAAIAIEWIgLABIgJgBg");
	this.shape_14.setTransform(39.4,26.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTCGIgCkQIAfAAQABELALALQgegDgLgDg");
	this.shape_15.setTransform(28.6,26.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgViKQAlABADgCIACEOIgnAJg");
	this.shape_16.setTransform(48.2,26);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#444444").s().p("AiOAAIEdgBIiKADg");
	this.shape_17.setTransform(38.2,10.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#444444").s().p("AgSC3IgcgFIgBgcIi8k5IAEgZICwDeQABACADgBQAEgBAAgDIgBiAQAAgIAHAAIEMgCQADAAACADQACACAAADIACETQgIADgWADQgsAGhHAAIgLABQg+AAgkgGg");
	this.shape_18.setTransform(29.1,22.1);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61.3,41);


(lib.grass = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AAUAdIgDgKQgHgNgIgLQgJgQgMgFIgJgGIAKAEQAOAHAJAOQAIAIAKAQIAFAJIABAFIgIACg");
	this.shape.setTransform(13.8,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AACBeIADgBIABgCIACgBQAGgHACgNQABgGAAgKIgHg8IgKgpIgGgTIgJgQQgGgLgIgLIgHgIIAIAHQAJAKAIALIARAiIAQApIAGAUIAIAqIABAUQgBAKgDAHQgCAHgEAHIgHAIIgCABg");
	this.shape_1.setTransform(15.8,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AA9BSQgEgLgHgPQgJgSgLgRIgdglQgQgVgOgNQgTgQgPgJQgPgJgMgEIgLgEIALACQAMADARAGQAUAHATAOQATAMAUASIAkAiQAPARAMASQAKAOAHAOIAFALIgmAPg");
	this.shape_2.setTransform(10.3,10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444444").s().p("AAXA6IgDgPQgGgZgJgUQgJgXgNgUIgOgSIAPARQAOASAKAYQALAUAHAZIAGAXIgJABg");
	this.shape_3.setTransform(18.5,13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#444444").s().p("AAABbIgBgWQgCgigIgjQgIgggOgmIgNgeIAFAIQAIAHAHAMQAWAgAOAhQAPAdANAoIAJAhIgvAHg");
	this.shape_4.setTransform(22.1,10.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444444").s().p("AgIAwIABgPQABgQAEgRIAGghIAEgPIgDAQQgDANgCATQAAALAAAWIAAAPg");
	this.shape_5.setTransform(27.2,14.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#444444").s().p("Ag0BhIABgJIADgbQAHgrASgfQAKgUANgRQAKgPANgLQAPgMAGgEIAJgFIgIAGQgGAFgNAMQgMAOgJAPQgJARgIATQgMAegDAqIgBAjg");
	this.shape_6.setTransform(34.1,10.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444444").s().p("Ag2AzIAOgXQAOgWAWgUQASgVAWgRIATgOIgPATQgRAVgNAYQgNAagGAUIgIAYg");
	this.shape_7.setTransform(35.8,13.9);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.4,23.7);


(lib.flower04 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgLAuQgOAPgHgEQgGgEAFgTQgTAFgEgGQgEgHAPgOQgUgFAAgHQAAgFAUgGQgPgOAEgHQAEgFATAEQgFgUAGgDQAHgDAOAOQAGgUAFAAQAHAAAFAUQAOgOAHADQAGADgGAUQAVgEADAFQADAHgOAOQAUAGAAAFQAAAIgUAEQAOAOgDAHQgEAGgUgFQAGATgGAEQgHADgOgOQgFAUgHAAQgFAAgGgUgAgDgGIgCABIgBADIgBACIAAAAIAAACIABABIABADIACABIACABIADAAIACgBIACgBIABgDIABgBIAAgCIAAAAIgBgCIgBgDIgCgBIgCgBIgCAAIgBAAg");
	this.shape.setTransform(6.6,6.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13.3,13.3);


(lib.flower03 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgDApIgVhkQgIgigJgbIAAgBIAEgEIgEAFIAAgBIAAABIAAAAQANAaAKAiIAfBoIAdBLIgWAIg");
	this.shape.setTransform(4.3,12.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,8.6,25.4);


(lib.flower02 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgPA+QgJAAgIgEQgIgFgEgIQgIgEgFgIQgFgHABgKQgFgIAAgIQAAgHAFgIQgBgKAFgIQAFgHAIgEQADgIAJgFQAIgFAJACQAIgGAHAAQAIAAAIAGQAJgCAIAFQAJAFADAIQAIAEAFAHQAFAJgCAJQAGAHAAAIQAAAIgGAIQACAJgFAIQgFAIgIAEQgEAIgIAFQgIAEgJAAQgIAFgIAAQgHAAgIgFgAADALIACgCIADgBIABgDIACgDIAAgCIAAgCIgCgCIgBgDIgFgDIgFAAIgFADIgBADIgCACIAAACIAAACIACADIABADIADABIACACIACgBg");
	this.shape.setTransform(6.8,6.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13.6,13.5);


(lib.flower01 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AAGAQIgUgXQgIgIgKgDIgIAAQAogHAXARQANAIAFAIQgLANgLAAQgGAAgHgFg");
	this.shape.setTransform(4.1,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgYAAQALgXAbADQAQACgBADQAAADgMAFQgkAQgJAMQgBgMAFgJg");
	this.shape_1.setTransform(13.5,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AgQBqIAJghQAHgiAEgnQAFgogBgkIgCgjIAFAjQAFAhABArQAAAjgFApIgGAkg");
	this.shape_2.setTransform(7.9,11.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.5,22.4);


(lib.door_close = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").p("ABcjVIi4ggIAAHqIC4g0g");
	this.shape.setTransform(9.3,24.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("Ahcj0IC4AfIAAGXIi4A0g");
	this.shape_1.setTransform(9.3,24.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18.6,49.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;