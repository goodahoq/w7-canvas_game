// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
var pi = Math.PI

var ww = 640
var wh = 480

var canvasBg = document.getElementById('bgCanvas')
var ctx1 = canvasBg.getContext('2d')
canvasBg.width = ww
canvasBg.height = wh

var canvasSym = document.getElementById('symCanvas')
var ctx3 = canvasSym.getContext('2d')
canvasSym.width = ww
canvasSym.height = wh

var canvasStar = document.getElementById('starCanvas')
var ctx2 = canvasStar.getContext('2d')
canvasStar.width = ww
canvasStar.height = wh
var time = 0

function drawSymbol() {

  ctx3.clearRect(0, 0, ww, wh)
  ctx3.translate(ww / 2, wh / 2)
  //不使用save restore 配合setInterval就能一直轉
  ctx3.rotate(0.02, 0.02)
  ctx3.translate(-ww / 2, -wh / 2)

  //右上圈圈
  ctx3.beginPath()
  ctx3.arc(560, 100, 25, 0, 2 * pi)
  ctx3.closePath();
  ctx3.fillStyle = "rgb(244, 174, 94)";
  ctx3.fill();

  // 右下的藍色三角形
  ctx3.beginPath();
  ctx3.moveTo(476.1, 330.2);
  ctx3.lineTo(441.0, 381.6);
  ctx3.lineTo(502.7, 387.6);
  ctx3.lineTo(476.1, 330.2);
  ctx3.closePath();
  ctx3.fillStyle = "rgb(53, 117, 186)";
  ctx3.fill();

  // 右上的紅寶石
  ctx3.beginPath();
  ctx3.moveTo(97.9, 121.2);
  ctx3.lineTo(67.8, 131.3);
  ctx3.lineTo(81.0, 160.8);
  ctx3.lineTo(112.5, 171.9);
  ctx3.lineTo(113.9, 172.3);
  ctx3.lineTo(127.4, 150.1);
  ctx3.lineTo(125.1, 131.5);
  ctx3.lineTo(97.9, 121.2);
  ctx3.closePath();
  ctx3.fillStyle = "rgb(230, 69, 92)";
  ctx3.fill();
}

function drawBackground() {

  time++
  //BG
  // Radio Defense
  ctx1.font = "Bold 16px 'Arial'";
  ctx1.fillStyle = "rgb(255, 255, 255)";
  ctx1.fillText("Radio Defense", 270, 243);
  // R字
  ctx1.beginPath();
  ctx1.moveTo(348.6, 190.1);
  ctx1.bezierCurveTo(348.6, 192.0, 348.1, 193.8, 347.1, 195.5);
  ctx1.bezierCurveTo(346.1, 197.2, 344.6, 198.7, 342.6, 199.9);
  ctx1.bezierCurveTo(343.5, 200.3, 344.4, 200.8, 345.1, 201.4);
  ctx1.bezierCurveTo(345.8, 202.0, 346.3, 202.7, 346.8, 203.5);
  ctx1.bezierCurveTo(347.2, 204.3, 347.5, 205.2, 347.7, 206.0);
  ctx1.bezierCurveTo(348.0, 206.9, 348.1, 207.8, 348.1, 208.7);
  ctx1.lineTo(348.1, 215.1);
  ctx1.bezierCurveTo(348.1, 215.9, 348.3, 216.8, 348.6, 217.9);
  ctx1.bezierCurveTo(349.0, 219.0, 349.6, 220.1, 350.2, 221.2);
  ctx1.lineTo(342.1, 221.2);
  ctx1.bezierCurveTo(341.8, 220.7, 341.5, 220.2, 341.3, 219.6);
  ctx1.bezierCurveTo(341.1, 219.1, 341.0, 218.6, 340.9, 218.0);
  ctx1.bezierCurveTo(340.8, 217.5, 340.7, 217.0, 340.7, 216.5);
  ctx1.bezierCurveTo(340.7, 216.1, 340.6, 215.7, 340.6, 215.3);
  ctx1.lineTo(340.6, 208.6);
  ctx1.bezierCurveTo(340.6, 208.0, 340.5, 207.3, 340.3, 206.7);
  ctx1.bezierCurveTo(340.1, 206.0, 336.7, 207.8, 336.2, 207.3);
  ctx1.bezierCurveTo(335.7, 206.7, 338.1, 204.0, 337.3, 203.6);
  ctx1.bezierCurveTo(336.5, 203.3, 335.6, 203.2, 334.4, 203.2);
  ctx1.lineTo(323.2, 203.2);
  ctx1.lineTo(323.2, 221.2);
  ctx1.lineTo(315.7, 221.2);
  ctx1.lineTo(315.7, 177.2);
  ctx1.lineTo(334.4, 177.2);
  ctx1.bezierCurveTo(336.7, 177.2, 338.7, 177.6, 340.5, 178.3);
  ctx1.bezierCurveTo(342.2, 179.1, 343.7, 180.1, 344.9, 181.3);
  ctx1.bezierCurveTo(346.2, 182.5, 347.1, 183.9, 347.7, 185.4);
  ctx1.bezierCurveTo(348.3, 187.0, 348.6, 188.5, 348.6, 190.1);
  ctx1.moveTo(323.2, 196.9);
  ctx1.lineTo(334.4, 196.9);
  ctx1.bezierCurveTo(335.3, 196.9, 336.2, 196.7, 337.0, 196.4);
  ctx1.bezierCurveTo(337.8, 196.1, 338.5, 195.6, 339.1, 195.1);
  ctx1.bezierCurveTo(339.8, 194.5, 340.2, 193.8, 340.6, 193.0);
  ctx1.bezierCurveTo(341.0, 192.1, 341.1, 191.2, 341.1, 190.2);
  ctx1.bezierCurveTo(341.1, 189.3, 341.0, 188.4, 340.6, 187.5);
  ctx1.bezierCurveTo(340.3, 186.7, 339.8, 186.0, 339.2, 185.4);
  ctx1.bezierCurveTo(338.6, 184.8, 337.9, 184.3, 337.1, 184.0);
  ctx1.bezierCurveTo(336.3, 183.6, 335.4, 183.5, 334.4, 183.5);
  ctx1.lineTo(323.2, 183.5);
  ctx1.lineTo(323.2, 196.9);
  ctx1.closePath();
  ctx1.fill();

  //   // 裡面的圈圈
  //   ctx1.beginPath();
  //   ctx1.arc(325, 235, 120, 0, Math.PI * 2);
  //   ctx1.closePath();
  //   ctx1.lineWidth = 3;
  //   ctx1.strokeStyle = "rgba(255,255,255,1)";
  //   ctx1.stroke();

  //   // 外面的圈圈
  //   ctx1.beginPath();
  //   ctx1.arc(325, 235, 160, 0, Math.PI * 2);
  //   ctx1.closePath();
  //   ctx1.lineWidth = 1;
  //   ctx1.strokeStyle = "rgba(255,255,255,0.27)";
  //   ctx1.stroke();

  // 電池身體
  ctx1.beginPath();
  ctx1.moveTo(306.8, 216.5);
  ctx1.lineTo(290.7, 216.5);
  ctx1.lineTo(290.7, 188.9);
  ctx1.lineTo(306.8, 188.9);
  ctx1.lineTo(306.8, 216.5);
  ctx1.closePath();
  ctx1.fillStyle = "rgb(244, 174, 94)";
  ctx1.fill();

  // 電池閃電標誌
  ctx1.beginPath();
  ctx1.moveTo(299.9, 195.2);
  ctx1.bezierCurveTo(299.9, 195.9, 294.5, 203.7, 294.5, 203.7);
  ctx1.lineTo(299.7, 203.7);
  ctx1.lineTo(298.9, 210.2);
  ctx1.lineTo(303.9, 201.5);
  ctx1.lineTo(298.0, 201.5);
  ctx1.lineTo(299.9, 195.2);
  ctx1.closePath();
  ctx1.fillStyle = "white";
  ctx1.fill();

  // 電池的頭
  ctx1.beginPath();
  ctx1.moveTo(302.3, 188.9);
  ctx1.lineTo(295.3, 188.9);
  ctx1.lineTo(295.3, 186.7);
  ctx1.lineTo(302.3, 186.7);
  ctx1.lineTo(302.3, 188.9);
  ctx1.closePath();
  ctx1.fill();

  // 電池底部
  ctx1.beginPath();
  ctx1.moveTo(306.8, 218.3);
  ctx1.lineTo(290.7, 218.3);
  ctx1.lineTo(290.7, 220.6);
  ctx1.lineTo(306.8, 220.6);
  ctx1.lineTo(306.8, 218.3);
  ctx1.closePath();
  ctx1.fillStyle = "rgb(244, 174, 94)";
  ctx1.fill();

  // 左下的內容區
  ctx1.font = "16px '微軟正黑體'";
  ctx1.fillStyle = "rgb(255, 255, 255)";
  ctx1.fillText("你身負著運送能量電池的任務", 50, 410);
  ctx1.fillText("卻遭到幾何星人的埋伏", 50, 430);
  ctx1.fillText("請協助從他們的手中奪回能量電池", 50, 450);
}

drawBackground()
setInterval(drawSymbol, 30) //製造旋轉


//----star Area ----------------

window.requestAnimFrame = (function () {
  return window.requestAnimationFrame;
})()

//star var 
var numStars = 2000 //星星數
var radius = `0.${Math.floor(Math.random()*9)+1}`
var focalLength = canvasStar.width * 2
var warp = 0
var centerX
var centerY
var stars = []
var star
var i = 0
var animate = true

initializeStars(); //初始化單顆星星
function executeFrame() {
  if (animate) requestAnimFrame(executeFrame)
  moveStars()
  drawStars()
}

function initializeStars() {
  //初始化星星
  centerX = canvasStar.width / 2
  centerY = canvasStar.height / 2

  stars = []
  for (i = 0; i < numStars; i++) {
    star = {
      x: Math.random() * canvasStar.width,
      y: Math.random() * canvasStar.height,
      z: Math.random() * canvasStar.width,
      o: Number("0." + Math.floor(Math.random() * 99) + 1)
    }
    stars.push(star)
  }
}

function moveStars() {
  for (i = 0; i < numStars; i++) {
    star = stars[i]
    star.z--

      if (star.z <= 0) {
        star.z = canvasStar.width
      }
  }
}

function drawStars() {
  var pixelX, pixelY, pixelRadius;
  if (warp == 0) {
    ctx2.fillStyle = "#001D2E"
    ctx2.fillRect(0, 0, canvasStar.width, canvasStar.height)
  }
  ctx2.fillStyle = `rgba(251,251,251,${radius})`
  for (i = 0; i < numStars; i++) {
    star = stars[i]
    pixelX = (star.x - centerX) * (focalLength / star.z);
    pixelX += centerX;
    pixelY = (star.y - centerY) * (focalLength / star.z);
    pixelY += centerY;
    pixelRadius = 0.4 * (focalLength / star.z);

    ctx2.fillRect(pixelX, pixelY, pixelRadius, pixelRadius)
    ctx2.fillStyle = `rgba(251,251,251,${star.o})`
  }
}


executeFrame()

//------------------------------
