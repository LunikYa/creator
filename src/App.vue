<template>
  <div id="app">
    <TopLine/>
    <router-view/>
  </div>
</template>

<script>

import Home     from './components/Home.vue'
import TopLine  from './components/TopLine.vue'

export default {
  name: 'App',
  components: {
    Home,
    TopLine
  },
  created(){
    this.$root.$store.dispatch('pullForms')
  }
}
</script>

<style lang="scss" scoped>

@import './components/mixins.scss';

#app {
  font-family: 'roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}

body{
  background: url('./assets/mainbg.png')  top / cover no-repeat;
  height: 100%;
}
</style>
