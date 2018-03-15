<template>
  <div class="wrapp">
    <p class="welcome">Welcome to Creator</p>
    <div v-show="showButtons"> 
      <button @click="goCreate" class="button-create">Create new form</button>
      <button @click="goLists" class="button-lists">Go to lists</button>   
    </div>
    
  </div> 
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
     
    }
  },
  methods:{    
    goCreate(){
      this.$router.push( {path:'/create'})
    },
    goLists(){
      this.$router.push( {path:'/lists'})
    }
   },
  computed: {
    showButtons(){
      return this.$route.name == 'Home';
    }
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
