<template>
  <div id="app">
    <div id="nav">
      <router-link to="/user">User</router-link>
    </div>
    <router-view></router-view>
    <div class="lf">
      <router-view name="lf"></router-view>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .lf {
    background-color: #42b983;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
