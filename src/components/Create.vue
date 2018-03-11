<template>
  <div class="conteiner">
    <div >
<button class="button-back" @click="preview = !preview" v-text="(!preview)? 'Turn on preview' : 'Turn off preview'"></button > 
<button class="button-back" @click="sendForm()">SAVE</button><br/>
    <label>Title:
      <input 
            type="text"
            placeholder="Title for u form" 
            class="default-input"
            v-model="newForm.title">
    </label><br>

    <label>Discription:<br>
      <textarea 
            type="text" 
            placeholder="Discription for u form" 
            class="default-input"
            v-model="newForm.discription">
      </textarea></label>
    <div>{{showForms}}</div>
    <!-- <ListsOfForm/> -->
    <div class="conteiner-add" >
      <img 
            src="../assets/icon-add.png" 
            height="32" 
            width="32" 
            alt="" 
            @click="bool = !bool"> 
      <span @click="bool = !bool">Add new questions</span>
    </div>
<!-- <button class="button-back" @click="test()">SAVE</button> -->

      <div v-show="bool">
      
     <p @click="changePopap('string'), createQuestion(), bool = !bool">
        <img 
            src="../assets/icon-radio.png" 
            height="50" 
            width="50" 
            alt="">
        Short text answer
      </p>
      <p @click="changePopap('select'), createQuestion(), bool = !bool">
        <img 
            src="../assets/icon-radio.png" 
            height="50" 
            width="50" 
            alt="">
        Drop-down
      </p>
      <p @click="changePopap('radio'), createQuestion(), bool = !bool">
        <img 
            src="../assets/icon-radio.png" 
            height="50" 
            width="50" 
            alt="">
        Multiple choice
      </p>
      </div>

      <div v-for="(item, index) in newForm.questions">
        <label for=""> You question
        <input type="text" placeholder="Question" v-model="item.question" class="default-input"></label><br/>
       
        <div v-for="(option, num) in item.options">
         <label > <!-- {{option}}  --> 
            <input type="text" placeholder="New option" v-model="item.options[num]" class="default-input" @keyup.13 = "createOption(index)">
        </label>
        </div>
        <button @click="createOption(index)">Add option</button>
      </div>

</div>

<div>

    <CreateShow :form ="newForm" class="preview" v-show="preview"/>
    </div>
   
</div>
 

</template>

<script>
import CreateShow from '../components/CreateShow.vue'

export default {
  name: 'Create',
  data () {
    return {
      preview: true,
      currentPopap:'',
      bool: false,
      countRadio: 1,
      newForm:
      {
        title: '',
        discription: '',
        questions:[]
      }
    }
  },
  methods:{
    changePopap(val){
      this.currentPopap = val
      console.log(this.currentPopap);
    },
    sendForm(){
      // this.$root.$store.commit('pullForms',)
      this.$root.$store.commit('addNewForm', this.newForm)
      
      console.log(this.$root.$store.state.forms[1]);
      // console.log(localStorage.arrayOfForms);
    },

    createQuestion(type){
      this.newForm.questions.push({question: '', options: [], type: this.currentPopap})
    },

    createOption(index){
      this.newForm.questions[index].options.push("")
    },

    currentType(type){
      return this.newForm.questions
    }
  },

  computed: {
    actualForms() {
      return this.$root.$store.state.forms
    },

    showForms() {
      let count = this.newForm.questions.length 
      if(count){
        return 'У вас '  + count + ' вопросов' 
      } else return 'You dont have any questions'
    }

    
  },

  components:{
    CreateShow
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  
 .default-input{
   background: transparent;
   border: none;
   border-bottom: 3px solid grey;
   transition: border 1s;
   color: black;
 }
 .default-input:focus{
   border-bottom: 3px solid green;
 }
 ::input-placeholder{
   color: black;
 }
 
 textarea.default-input{
   // margin-top: 50px;
   width: 200px;
   height: 100px;
   border: 3px solid grey;
 }

 .conteiner{
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  display: flex;
  justify-content: center;

  }

  .button-back{
    width: 150px;
    height: 40px;
    color: white;
    background-color: black /*rgba(0, 119, 177, 0.6)*/ ;
    border: none;
    cursor: pointer;
    opacity: 0.8;
  }
 
  p:hover{
    background-color: green;
    cursor: pointer;
  }

  p:active{
    opacity: 0.8;
  }

  .preview{
    overflow: hidden;
    max-width: 300px;
    margin-left: 50px;
  }

</style>
