<template>
    <div class="canvasArea">
        <canvas id="bgCanvas"></canvas>
        <canvas id="symCanvas"></canvas>
        <canvas id="starCanvas"></canvas>
        <div class="wave "></div>
        <div class="wave wave-2"></div>
        <div class="wave wave-3"></div>
        <div class="btn">
            <a class="startBtn" href="javascript:;">Start Game</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "canvas",
    data() {
        return {
            isStart: false
        }
    }
}
</script>

<style lang="scss">
.btn {
  z-index: 6;
  margin-top: 100px;
  a {
    padding: 8px 32px;
    text-decoration: none;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 20px;
    transition: all 0.3s ease;
    &:hover {
      color: #001d2e;
      background-color: #fff;
    }
  }
}
.wave {
  width: 328px;
  height: 328px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 18%;
  left: 50%;
  margin-left: -165px;
  text-align: center;
  animation: wave 3s linear infinite;
  opacity: 0;
  z-index: 4;
}
.wave-2 {
  -webkit-animation-delay: 750ms;
  animation-delay: 750ms;
}
.wave-3 {
  -webkit-animation-delay: 1500ms;
  animation-delay: 1500ms;
}
@keyframes wave {
  0% {
    transform: scale();
    opacity: 1;
    filter: alpha(opacity=100) \9;
  }
  100% {
    transform: scale(2);
    opacity: 0;
    filter: alpha(opacity=0) \9;
  }
}
</style>
