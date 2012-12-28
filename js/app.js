/*
 * app.js
 */

window.onload = function()
{

  var stage = new Kinetic.Stage({
    container: 'container',
    width: 1200,
    height: 400
  });

  var layer = new Kinetic.Layer();

  // 3.1.1 HTML5 Canvas KineticJS Rect Tutorial
  var rect = new Kinetic.Rect({
    lineJoin: 'round',
    lineCap: 'round',
    x: 31,
    y: 5,
    width: 64,
    height: 64,
    fill: 'green',
    stroke: 'black',
    strokeWidth: 4,
    rotationDeg: 22
  });
  layer.add(rect);

  // 3.1.2 HTML5 Canvas KineticJS Circle Tutorial
  var mycircle = new Kinetic.Circle({
    x: 159,
    y: 78,
    radius: 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4
  });
  layer.add(mycircle);

  // 3.1.3 HTML5 Canvas KineticJS Ellipse
  var oval = new Kinetic.Ellipse({
    x: 105,
    y: 124,
    radius: {
      x: 100,
      y: 50
    },
    fill: 'yellow',
    stroke: 'black',
    strokeWidth: 4
  });
  layer.add(oval);

  // 3.1.4 HTML5 Canvas KineticJS Image Tutorial
  var imageObj = new Image();
  var yX = 236;
  var yXDelta = 110;
  imageObj.onload = function()
  {
    var yoda = new Kinetic.Image({

      x: 236,
      y: 9,
      image: imageObj,
      width: 106,
      height: 118
    });
    layer.add(yoda);
    yoda.moveToBottom();

    var filteredYoda1 = new Kinetic.Image({
      x: yX+=yXDelta,
      y: 9,
      image: imageObj,
      width: 106,
      height: 118
    });
    layer.add(filteredYoda1);
    filteredYoda1.applyFilter(Kinetic.Filters.Grayscale,null, function() {
      layer.draw();
    });
    filteredYoda1.moveToBottom();

    var filteredYoda2 = new Kinetic.Image({
      x: yX+=yXDelta,
      y: 9,
      image: imageObj,
      width: 106,
      height: 118
    });
    layer.add(filteredYoda2); // Can't get this to work
    filteredYoda2.applyFilter(Kinetic.Filters.Brighten,[128,128,128], function() {
      layer.draw();
    });
    filteredYoda2.moveToBottom();

    var filteredYoda3 = new Kinetic.Image({
      x: yX+=yXDelta,
      y: 9,
      image: imageObj,
      width: 106,
      height: 118
    });
    layer.add(filteredYoda3);
    filteredYoda3.applyFilter(Kinetic.Filters.Invert,null, function() {
      layer.draw();
    });
    filteredYoda3.moveToBottom();

  };

  imageObj.src = 'img/yoda.jpg';

  // 3.1.5 HTML5 Canvas KineticJS Sprite Tutorial
  var animations = {
    idle: [{
      x: 2,
      y: 2,
      width: 70,
      height: 119
    }, {
      x: 71,
      y: 2,
      width: 74,
      height: 119
    }, {
      x: 146,
      y: 2,
      width: 81,
      height: 119
    }, {
      x: 226,
      y: 2,
      width: 76,
      height: 119
    }],
    punch: [{
      x: 2,
      y: 138,
      width: 74,
      height: 122
    }, {
      x: 76,
      y: 138,
      width: 84,
      height: 122
    }, {
      x: 346,
      y: 138,
      width: 120,
      height: 122
    }]
  };

  var imageObjSprite = new Image();
  imageObjSprite.onload = function(){
    var blob = new Kinetic.Sprite({
      x: 664,
      y: 31,
      image: imageObjSprite,
      animation: 'idle',
      animations: animations,
      frameRate: 7
    });
    blob.on('mouseover', function() {
      blob.setAnimation('punch');
      blob.afterFrame(2, function() {
        blob.setAnimation('idle');
      });

    });
    blob.on('mouseout', function() {
      blob.setAnimation('idle');
    });
    layer.add(blob);
    blob.start();
  };
  imageObjSprite.src = "img/blob-sprite.png";

  // 3.1.6 HTML5 Canvas KineticJS Text Tutorial
  var simpleText = new Kinetic.Text({
    x:  220,
    y: 139,
    text: 'http://www.html5canvastutorials.com/',
    fontSize: 30,
    fontFamily: 'Calibri',
    textFill: 'black'
  });
  layer.add(simpleText);

  // 3.1.6 HTML5 Canvas KineticJS Text Tutorial
  var complexText = new Kinetic.Text({
    x: 741,
    y: 9,
    stroke: '#F00',
    strokeWidth: 3,
    fill: '#ddd',
    text: 'COMPLEX TEXT\n\nAll the world\'s a',
    fontSize: 14,
    fontFamily: 'Calibri',
    textFill: '#555',
    //width: 190,
    padding: 20,
    align: 'center',
    fontStyle: 'italic',
    shadow: {
      color: 'black',
      blur: 10,
      offset: [10, 10],
      opacity: 0.2
    },
    cornerRadius: 10
  });
  layer.add(complexText);

  // 3.1.7 HTML5 Canvas KineticJS Line Tutorial
  var redLine = new Kinetic.Line({
    points: [73, 70, 340, 23, 450, 60, 500, 20],
    stroke: 'red',
    strokeWidth: 15,
    lineCap: 'round',
    lineJoin: 'round'
  });

  // dashed line
  var greenLine = new Kinetic.Line({
    points: [73, 70, 340, 23, 450, 60, 500, 20],
    stroke: 'green',
    strokeWidth: 2,
    lineJoin: 'round'
    /*
     * line segments with a length of 33px
     * with a gap of 10px
     */
//    dashArray: [33, 10] spamming me with warning in firefox
  });

  // complex dashed and dotted line
  var blueLine = new Kinetic.Line({
    points: [73, 70, 340, 23, 450, 60, 500, 20],
    stroke: 'blue',
    strokeWidth: 10,
    lineCap: 'round',
    lineJoin: 'round'
    /*
     * line segments with a length of 29px with a gap
     * of 20px followed by a line segment of 0.001px (a dot)
     * followed by a gap of 20px
     */
//    dashArray: [29, 20, 0.001, 20]
  });

  /*
   * since each line has the same point array, we can
   * adjust the position of each one using the
   * move() method
   */
  redLine.move(0, 90);
  greenLine.move(0, 115);
  blueLine.move(0, 140);
  // Kinetic warning: Could not apply dash array because your browser does not support it.
  // ... to much spam so commenting these out
//  layer.add(redLine);
//  layer.add(greenLine);
//  layer.add(blueLine);

  // 3.1.8 HTML5 Canvas KineticJS Polygon
  var poly = new Kinetic.Polygon({
    points: [73, 192, 73, 160, 340, 23, 500, 109, 499, 139, 342, 93],
    fill: '#00D2FF',
    stroke: 'black',
    strokeWidth: 5,
    opacity:.25
  });
  layer.add(poly);

  // 3.1.9 HTML5 Canvas KineticJS Regular Polygon Tutorial
  var hexagon = new Kinetic.RegularPolygon({
    opacity:.25,
    x: 563,
    y: 89,
    sides: 6,
    radius: 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4
  });
  layer.add(hexagon);

  // 3.1.10 HTML5 Canvas KineticJS SVG Path Tutorial
  var path = new Kinetic.Path({
    x: -1,
    y: 162,
    data: 'M12.582,9.551C3.251,16.237,0.921,29.021,7.08,38.564l-2.36,1.689l4.893,2.262l4.893,2.262l-0.568-5.36l-0.567-5.359l-2.365,1.694c-4.657-7.375-2.83-17.185,4.352-22.33c7.451-5.338,17.817-3.625,23.156,3.824c5.337,7.449,3.625,17.813-3.821,23.152l2.857,3.988c9.617-6.893,11.827-20.277,4.935-29.896C35.591,4.87,22.204,2.658,12.582,9.551z',
    fill: 'green',
    scale: 2
  });
  layer.add(path);

  //3.1.11 HTML5 Canvas KineticJS Star Tutorial
  var star = new Kinetic.Star({
    x: 202,
    y: 207,
    numPoints: 6,
    innerRadius: 40,
    outerRadius: 70,
    fill: '#FFAF00',
    stroke: 'black',
    strokeWidth: 4
  });
  layer.add(star);

  // 3.1.12 HTML5 Canvas KineticJS Wedge Tutorial
  var acircle = new Kinetic.Wedge({
    x: 286,
    y: 268,
    radius: 70,
    angleDeg: 60,
    fill: '#00FF7F',
    stroke: 'black',
    strokeWidth: 4,
    rotationDeg: -120
  });
  layer.add(acircle);

  // 3.1.13 HTML5 Canvas KineticJS Custom Shape Tutorial
  /*
   * create a triangle shape by defining a
   * drawing function which draws a triangle
   */
  //noinspection JSUnusedGlobalSymbols
  var triangle = new Kinetic.Shape({
    drawFunc: function(canvas) {
      var pushX = 110;
      var pushY = 120;
      var context = canvas.getContext();
      context.beginPath();
      context.moveTo(pushX+200, pushY+50);
      context.lineTo(pushX+420, pushY+80);
      context.quadraticCurveTo(pushX+300, pushY+100, pushX+260, pushY+170);
      context.closePath();
      canvas.fillStroke(this);
    },
    stroke: 'black',
    fill: '#00D2FF',
    strokeWidth: 4
  });
  layer.add(triangle);

  // 3.1.14 HTML5 Canvas Groups with KineticJS

  /*
   * create a group which will be used to combine
   * multiple simple shapes.  Transforming the group will
   * transform all of the simple shapes together as
   * one unit
   */
  var group = new Kinetic.Group({
    x: 560,
    y: 169,
    rotationDeg: 20
  });

  var colors = ['red', 'orange', 'yellow'];

  for(var n = 0; n < 3; n++) {
    // anonymous function to induce scope
    (function() {
      var box = new Kinetic.Rect({
        x: n * 30,
        y: n * 18,
        width: 100,
        height: 50,
        name: colors[n],
        fill: colors[n],
        stroke: 'black',
        strokeWidth: 4
      });
      group.add(box);
    })();
  }
  layer.add(group);

  /// 3.2.1 HTML5 Canvas Shape Events with KineticJS
  var triangle2 = new Kinetic.RegularPolygon({
    draggable: true,
    x: 790,
    y: 255,
    sides: 3,
    radius: 80,
    fill: '#00D2FF',
    stroke: 'black',
    strokeWidth: 4
  });
  triangle2.on('mouseover', function(event) {
    console.log("SDSDSD");
    document.body.style.cursor = 'pointer';
    console.log("mouseover x=" + this.getAbsolutePosition().x + ", y=" + this.getAbsolutePosition().y);
  });
  triangle2.on('mouseout', function(event) {
    document.body.style.cursor = 'default';
    console.log("mouseout x=" + this.getAbsolutePosition().x + ", y=" + this.getAbsolutePosition().y);
  });
  layer.add(triangle2);


// draggable: true,
//  blob.on('mouseover', function(event) {
//    document.body.style.cursor = 'pointer';
//    console.log("mouseover x=" + this.getAbsolutePosition().x + ", y=" + this.getAbsolutePosition().y);
//  });
//  blob.on('mouseout', function(event) {
//    document.body.style.cursor = 'default';
//    console.log("mouseout x=" + this.getAbsolutePosition().x + ", y=" + this.getAbsolutePosition().y);
//  });

  // Cleanup
  simpleText.moveToTop();


  // Add layer to stage
  stage.add(layer);
};
