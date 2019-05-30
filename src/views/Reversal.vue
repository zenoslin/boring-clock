<template>
  <div class="page" :style="pageColor">
    <div class="border"></div>
    <div class="box">
      <span v-for="(item, index) in timeArr" :key="index">{{ item }}</span>
    </div>
  </div>
</template>

<script>
import { DateUtil } from "../utils/date-util";

export default {
  name: "Reversal",
  data() {
    return {
      timeArr: ["0", "0", "0", "0", "0", "0"],
      pageColor: ""
    };
  },
  methods: {
    setClock() {
      const time = new DateUtil();
      this.timeArr = time.formatHMS().split("");
      setTimeout(this.setClock, 1000);
    },
    getRadomColor() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      return `rgb(${r},${g},${b})`;
    }
  },
  mounted() {
    this.setClock();
    this.pageColor = `background-color: ${this.getRadomColor()};`;
  }
};
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: papayawhip;
}
.border {
  width: 260px;
  height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 4px solid white;
  animation: rotating linear infinite;
  animation-duration: 8s;
}
.box {
  width: 260px;
  height: 60px;
  text-align: center;
  font-size: 30px;
  line-height: 60px;
  font-family: sans-serif;
  overflow: hidden;
  animation: rotating linear infinite;
  animation-duration: 4s;
  span {
    display: inline-block;
    color: white;
    transition: 0.5s;
    margin: auto 6px;
  }
}

@keyframes rotating {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
</style>
