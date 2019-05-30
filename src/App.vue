<template>
  <div id="app">
    <router-view />
    <button class="btn-change" @click="getNewClock">CHANGE</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clockNum: 2,
      curClock: 0
    };
  },
  watch: {
    curClock(val) {
      this.$router.push(`/${val}`);
    }
  },
  methods: {
    getRandomNum(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getNewClock() {
      let newNum = this.getRandomNum(1, this.clockNum);
      console.log(newNum);
      if (newNum !== this.curClock) {
        this.curClock = newNum;
      } else {
        this.getNewClock();
      }
    }
  },
  mounted() {
    this.getNewClock();
  }
};
</script>

<style lang="scss">
@import "./scss/mixin.scss";

#app {
  position: relative;
}
.btn-change {
  width: 100px;
  height: 36px;
  @include abs_horizontal_middle();
  border: 2px solid white;
  background-color: transparent;
  bottom: 20%;
  color: white;
}
button:focus {
  outline: none;
}
</style>
