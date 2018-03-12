<template>
  <div class="conteiner">
<!--     
<button class="button-back" @click="preview = !preview" v-text="(!preview)? 'Turn on preview' : 'Turn off preview'"></button>  -->


<!-- <router-link to="/create/preview"></router-link> -->
<router-link to="/create/"></router-link>
<!-- <router-link to=""><img src="../assets/eye-off.svg" alt=""></router-link> -->

<router-view :form="newForm"/>


<!-- <div>

    <CreateShow :form ="newForm" class="preview" v-show="preview"/>
    </div> -->
   
</div>
 

</template>

<script>
// import CreateShow from '../components/CreateShow.vue'

export default {
  name: 'Create',
  data () {
    return {
      preview: true,
      // currentPopap:'',
      // bool: false,
      // countRadio: 1,
      newForm:
      {
        title: '',
        discription: '',
        questions:[]
      }
    }
  },
  methods:{
    // changePopap(val){
    //   this.currentPopap = val
    //   console.log(this.currentPopap);
    // },
   
    edit(something){
      
      console.log(something);
      // this.newForm = JSON.parse(JSON.stringify(obj))      
    }
    // createQuestion(type){
    //   this.newForm.questions.push({question: '', options: [], type: this.currentPopap})
    // },

    // createOption(index){
    //   this.newForm.questions[index].options.push("")
    // },

    // removeQuestion(index){
    //   this.newForm.questions.splice(index, 1)
    //   // console.log(index)
    // },

    // removeOption(index, num){
    //   this.newForm.questions[index].options.splice(num, 1)
    // },

    // changeType(index, newType){
    //   this.newForm.questions[index].type = newType
    //   console.log(newType);
    // }
  },

  computed: {
    // actualForms() {
    //   return this.$root.$store.state.forms
    // },

    // showForms() {
    //   let count = this.newForm.questions.length 
    //   if(count){
    //     return 'У вас '  + count + ' вопросов' 
    //   } else return 'You dont have any questions'
    // }

    
  },

  components:{
    // CreateShow
  },
  created: function(id){
    this.$on( 'unbel', function ( id ) {
        alert()
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import './mixins.scss';

 // .default-input{
 //   background: transparent;
 //   border: none;
 //   border-bottom: 3px solid grey;
 //   transition: border 1s;
 //   color: black;
 //   width: 80%;
 //   height: 50px;
 // }
 // .default-input:focus{
 //   border-bottom: 3px solid green;
 // }
 // ::input-placeholder{
 //   color: black;
 // }
 
 // textarea.default-input{
 //   // margin-top: 50px;
 //   width: 200px;
 //   height: 100px;
 //   border: 3px solid grey;
 // }

 // .conteiner{
 //  max-width: 800px;
 //  margin: 0 auto;
 //  text-align: left;
 //  display: flex;
 //  justify-content: center;

 //  }

 //  .button-back{
 //    width: 150px;
 //    height: 40px;
 //    color: white;
 //    background-color: black /*rgba(0, 119, 177, 0.6)*/ ;
 //    border: none;
 //    cursor: pointer;
 //    opacity: 0.8;
 //    margin-left: 5px;
 //  }
 
 //  p:hover{
 //    background-color: green;
 //    cursor: pointer;
 //  }

 //  p:active{
 //    opacity: 0.8;
 //  }

 //  .preview{
 //    overflow: hidden;
 //    max-width: 300px;
 //    margin-left: 50px;
 //  }



// 
</style>
