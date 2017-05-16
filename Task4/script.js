(function () {

  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  canvas.width = 1000;
  canvas.height = 500;
  context.fillStyle = "#ffffff";
  context.shadowColor = '#111111';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.globalAlpha = 1;

  var Drawing;
  var blur = 0;
  var strokeWidth = 10;
  var strokeColor = 'black';
  var radiusBlur = document.getElementById('radiusBlur');
  var radTextBlur = document.getElementById('radTextBlur');
  var radiusPoint = document.getElementById('radiusPoint');
  var radTextRaduis = document.getElementById('radTextRaduis');
  var selectColors = document.getElementById('selectColors');
  var valueOpacity = document.getElementById('valueOpacity');
  var radTextOpacity = document.getElementById('radTextOpacity');
  var reset = document.getElementById('reset');

  canvas.addEventListener("mousedown", start, false);
  canvas.addEventListener("mousemove", draw, false);
  canvas.addEventListener("mouseup", stop, false);
  canvas.addEventListener("mouseout", stop, false);

  function start(event) {
    Drawing = true;
    context.beginPath();
    context.moveTo(getX(event), getY(event));
    event.preventDefault();
  }

  function draw(event) {
    valueOpacity.addEventListener('input', function () {
      radTextOpacity.innerHTML = valueOpacity.value;
      setOpacity(this.value);
    });

    if (Drawing) {
      canvas.style.cursor = ' pointer';
      context.lineTo(getX(event), getY(event));
      context.strokeStyle = strokeColor;
      context.lineWidth = strokeWidth;
      context.lineCap = "round";
      context.lineJoin = "round";
      context.stroke();
      console.log(context.globalAlpha);
    }
    event.preventDefault();
  }

  function stop(event) {
    if (Drawing) {
      canvas.style.cursor = 'default';
      context.stroke();
      context.closePath();
      Drawing = false;
    }
    event.preventDefault();
  }

  function getY(event) {
    if (event.pageY == undefined) {
      return event.targetTouches[0].pageY - canvas.offsetTop
    }
    else {
      return event.pageY - canvas.offsetTop
    }
  }

  function getX(event) {
    if (event.pageX == undefined) {
      return event.targetTouches[0].pageX - canvas.offsetLeft
    }
    else {
      return event.pageX - canvas.offsetLeft
    }
  }

  var setRadiusPoint = function (newRadius) {
    strokeWidth = newRadius;
  };

  var setRadiusBlur = function (newBlur) {
    blur = newBlur;
    context.shadowBlur = blur;
    context.shadowColor = strokeColor;
  };

  var setColors = function (newColor) {
    strokeColor = newColor;
    context.shadowColor = newColor;
  };

  var setOpacity = function (newOpacity) {
    context.globalAlpha = newOpacity / 10;
    console.log(newOpacity);
  };

  selectColors.addEventListener('input', function () {
    setColors(this.value);
  });

  radiusPoint.addEventListener('input', function () {
    radTextRaduis.innerHTML = radiusPoint.value;
    setRadiusPoint(this.value);
  });

  radiusBlur.addEventListener('input', function () {
    radTextBlur.innerHTML = radiusBlur.value;
    setRadiusBlur(this.value);
  });

  reset.onclick = function () {
    context.fillStyle = "#fffff";
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

})();
