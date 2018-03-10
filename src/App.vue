<template>
  <div id="app">
    <TopLine/>
    <Home/>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Home from './components/Home.vue'
import TopLine from './components/TopLine.vue'
export default {
  name: 'App',
  components: {
    Home,
    TopLine
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  outline: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}

body{
    // background: url("./assets/body-bg.jpg")no-repeat top / cover;
}

</style>
