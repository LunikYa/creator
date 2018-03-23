<template>
  <div class="top-line">
    <div class="conteiner-go-home" @click="goHome" v-show="showButtons">
      <img src="../assets/back-home.svg" alt="go home">
      <span>Home</span>
    </div>
    <h1 class="logo">MegaCreator</h1>
    <!-- <div class="box-button">
      
      <button @click="out">Выйти</button>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'TopLine',
  data () {
    return {

    }
  },
  methods: {
     goHome(){
      // console.log(this.$route.name)
      this.$router.push( {path:'/'})
    },
    // goLogin(){
    //   this.$router.push( {path:'/login'})
    // },
    // goRegister(){
    //   this.$router.push( {path:'/register'})
    // },
    out(){
     console.log(5); 
    }
  },
  computed:{
    showButtons(){
      return this.$route.name !== 'Home';
    }
  }
}
</script>

<style lang="scss" scoped>
 @import './mixins.scss';
  .top-line{
    width: 100%;
    height: 80px;
    background-color: $main-black;
    color: white;
    position: fixed;
    z-index: 999;
    top:0;
    left: 0;
  }

  h1.logo{
    font-size: 25px;
    font-weight: 600px;
    margin-top: 20px;
  }

  .conteiner-go-home{
    float: left;
    vertical-align: middle;
    // position: absolute;
    margin-top: 20px;
    width: 100px;
    opacity: 0.8;

    img{
      width: 30px;
      height: 30px;
    }
  }

  .conteiner-go-home:hover{
    opacity: 1;
    cursor: pointer;
  }

 .button-login{
  padding: 15px 40px;
  border: 1px solid #fff;
  barder-radius: 5px;
  background: transparent;
  float: right;
  margin-top: -40px;
  margin-right: 20px;
  color: #fff;
 }
.button-login:hover{
  cursor: pointer;
  background: $main-red;
  border: 1px solid $main-red;
}
</style>
