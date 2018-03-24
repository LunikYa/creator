<template>
  <div class="wrapp">
    <p class="welcome">Welcome to Creator</p>
    
    <div v-if="!!currentUser.email">
        <button @click="goLogin" class="button-create">LOG IN</button>
        <button @click="goRegister"  class="button-lists">REGISTER</button>
    </div>
    <div v-else> 
      <button @click="goCreate" class="button-create">Create new form</button>
      <button @click="goLists" class="button-lists">Go to lists</button>   
    </div>
  </div> 
</template>

<script>
window.currentUser = {
      email: ''
     }
export default {
  name: 'home',
  data() {
    return {
     currentUser: {
      email: ''
     }
    }
  },
  methods:{    
    goCreate(){
      this.$router.push( {path:'/create'})
    },
    goLists(){
      this.$router.push( {path:'/lists'})
    },
    goLogin(){
      this.$router.push( {path:'/login'})
    },
    goRegister(){
      this.$router.push( {path:'/register'})
    },
   },
  computed: {
    showButtons(){
      return this.$route.name == 'Home';
    }
  },
  mounted(){

  } 
}
</script>

<style lang="scss" scoped>
@import './mixins.scss';

  .button-create{
    font-size: 32px;
    height: 80px;
    width: 300px;
    color: #fff;
    border: none;
    cursor: pointer;
    background-color: $main-red;
    margin-bottom: 30px;
    transition: all 1s;
    box-shadow: -2.5px 5px 10px rgba(0,0,0,0.3);    
    margin-top: 80px;
    opacity: 0.9; 
}

.button-create:hover{
  background-color: $main-red-active;
  opacity: 1;

}

.button-lists{
  @extend .button-create;
  background-color: $main-dark-grey;
  color: white; 
  margin-left: 40px;
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

.button-lists:hover{
  background-color: #404040; 
}

.welcome{
  font-size: 80px;
  font-weigth: 600px;
  margin-top: 200px;
}

@media (max-width: 720px){
  .welcome{
    font-size: 60px;
  }

  .button-lists{
    margin: 10px 0;
  }
}

@media (max-width: 560px){
  .welcome{
    margin-top: 150px;
    font-size: 55px;
  }

  .button-create{
    font-size: 26px;
    height: 60px;
    width: 250px;
  }
}
</style>
