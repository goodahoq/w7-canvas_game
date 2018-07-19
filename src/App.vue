<template>
  <div id="app">
        <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  line-height: 1;
  list-style: none;
}
html,
body {
  width: 50%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bbbbbb;
}
.canvasArea {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 10px;
  box-shadow: 10px 10px 20px #cccccc;
  background-color: #001d2e;
  width: 640px;
  height: 480px;
  padding: 10px 5px;
}
#bgCanvas,
#symCanvas,
#starCanvas,
#gameCanvas {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
#gameCanvas {
  z-index: 5;
}
#bgCanvas {
  z-index: 5;
}
#symCanvas {
  z-index: 2;
}
#starCanvas {
  z-index: 1;
}
</style>
