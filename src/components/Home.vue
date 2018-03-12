<template>
  <div>
    <!-- <button @click="goCreate">Create new form</button> -->
    <p class="welcome">Welcome</p>
    <div v-show="showButtons"> 
      <button @click="goCreate" class="button-create">Create new form</button>      
    </div>

    <ListsOfForm/>
    <!-- <router-view/> -->
  </div>
  
</template>

<script>
// import CreateShow from '../components/CreateShow.vue'
import ListsOfForm from '../components/ListsOfForm.vue'
export default {

  name: 'home',
  data () {
    return {
      
    }
  },
  components:{
    // CreateShow,
    ListsOfForm
  },
  methods:{
 goCreate(){
      console.log(this.$router)
      this.$router.push( {path:'/create'})
    }
   },
  computed: {
    showButtons(){
      return this.$route.name == 'Home';
    }
  },
  created(){
    console.log(this.$route.name)
  }
}
</script>


<style lang="scss" scoped>
@import './mixins.scss';
  .button-create{
  font-size: 26px;
  line-height: 23px;
  color: #000;
  padding: 20px 40px;
  border: 3px solid black;
  border-radius: 10px;
  cursor: pointer;
  background-color: transparent;
  margin-bottom: 30px;
  transition: all 1s;

}

.button-create:hover{
  background-color: $main-blue;
  color: white;
  border: 3px solid $main-blue;

}

.welcome{
  font-size: 100px;
  margin: 100px 0 100px 0;
}
</style>
