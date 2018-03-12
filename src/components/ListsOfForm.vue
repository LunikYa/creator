<template>
  <div class="conteiner">
    <p>Lists of form (total {{this.$root.$store.state.forms.length}})</p>
    <div v-for="(item, index) in this.$root.$store.state.forms">
      <div @click="item.preview = !item.preview" class="cont-items">
        <p>{{index+1}}. {{item.title}}</p>
        <p>{{!!item.discription ? item.discription : 'Discription is emty'}}</p>
      </div>
      <CreatePreview :form="item" v-show="item.preview"/>
      
    </div>
  </div>
</template>

<script>
import CreatePreview from '../components/CreatePreview.vue'
export default {
  name: 'ListsOfForm',
  data () {
    return {
      showForm: false
    }
  },
  components:{
    CreatePreview
  },
  methods: {
    // goCreate(){
    //   this.$router.push( {path:'/Create'})
    // },
    // goHome(){
    //   this.$router.push( {path:'/'})
    // },

  },
  computed:{
    getArr(){
      return this.$root.$store.state.forms
    }
  },
  created: function(){
    
    this.$root.$store.dispatch('pullForms')
    console.log(this.$root.$store.state.forms);
  }
}
</script>


<style scoped>
  button{
    font-size: 26px;
    line-height: 23px;
    color: white;
    padding: 20px 40px;
    border: 3px solid white;
    border-radius: 10px;
    cursor: pointer;
    background-color: /*transparent*/#000;
    margin-bottom: 30px;
  }

  .conteiner{
    text-align: left;
    width: 800px;
    margin: 0 auto;
  }

  .cont-items{
    margin-bottom: 35px;
  }
</style>
