<template>
  <div class="page" :style="pageColor">
    <div class="box">
      <span
        v-for="(item, index) in timeArr"
        :key="index"
        :data-text="item"
        :style="spanColor"
        >{{ item }}</span
      >
    </div>
  </div>
</template>

<script>
import { DateUtil } from "../utils/date-util";

export default {
  name: "BtnLabelMove",
  data() {
    return {
      timeArr: ["0", "0", "0", "0", "0", "0"],
      spanColor: "",
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
    this.spanColor = `color:${this.getRadomColor()}`;
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

.box {
  width: 260px;
  height: 60px;
  border: 4px solid white;
  text-align: center;
  font-size: 30px;
  line-height: 60px;
  font-family: sans-serif;
  overflow: hidden;
  span {
    display: inline-block;
    // color: blue;
    transition: 0.5s;
    margin: auto 6px;
  }
  span:nth-child(odd) {
    transform: translateY(-100%);
  }
  span:nth-child(even) {
    transform: translateY(100%);
  }
  span::before {
    content: attr(data-text);
    position: absolute;
    color: white;
  }
  span:nth-child(odd)::before {
    transform: translateY(100%);
  }
  span:nth-child(even)::before {
    transform: translateY(-100%);
  }
}
.box:hover span {
  transform: translateY(0);
}
</style>
