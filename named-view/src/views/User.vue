<template>
  <div class="user">
    <div class="left">
      <router-view></router-view>
    </div>
    <div class="con">
      <router-view name="con"></router-view>
    </div>
    <div class="foo">
      <router-view name="foo"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "user"
};
</script>

<style lang="scss" scoped>
.user {
  text-align: left;
  .left,
  .con {
    height: 400px;
    display: inline-block;
  }
  .left {
    width: 20%;
    background-color: #ccc;
  }
  .con {
    width: 80%;
    background-color: #42b983;
  }
  .foo {
    background-color: #000;
    height: 55px;
  }
}
</style>
