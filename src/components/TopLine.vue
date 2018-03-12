<template>
  <div class="top-line">
    <div class="conteiner-go-home" @click="goHome" v-show="showButtons">
      <img src="../assets/back-home.svg" alt="" >
      <span>Home</span>
    </div>
    <!-- <button >Home</button> -->
    <h1>MegaCreator</h1>
  </div>
</template>

<script>
export default {
  name: 'TopLine',
  data () {
    return {
      it: ''
    }
  },
  methods: {
     goHome(){
      console.log(this.$route.name)
      this.$router.push( {path:'/'})
    }
  },
  computed:{
    showButtons(){
      return this.$route.name !== 'Home';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
 @import './mixins.scss';
  .top-line{
    width: 100%;
    height: 50px;
    background-color: $main-blue;
    color: white;
    position: fixed;
    z-index: 999;
    top:0;
    left: 0;

  }

  h1{
    font-size: 18px;
    font-family: Arial;
    font-weight: 600px;
    margin-top: 10px;
  }

 

  .conteiner-go-home{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    margin-top: 7px;
    width: 100px;
    opacity: 0.8;

    img{
      width: 30px;
      height: 30px;
      // margin-top: 7px;
    }

    span{

    }
  }
  .conteiner-go-home:hover{
    opacity: 1;
    cursor: pointer;
  }
</style>
