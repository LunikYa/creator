<template>
  <div class="conteiner">
    <div class="cont-prev">
      <button class="button-back" @click="sendForm()">SAVE</button><br/>
      <img  src="../assets/eye.svg" 
            alt="preview on"
            v-show="preview"  
            @click="preview=!preview">
      <img  src="../assets/eye-off.svg" 
            alt="preview off" 
            v-show="!preview" 
            @click="preview=!preview">
    </div>

  <CreatePreview :form ="newForm" v-show="preview" key="create"/>

  <div class="conteiner" v-show="!preview">
    <div class="title-group">
      <label>
      <input type="text"
             placeholder="Title for you form" 
             class="default-input"
             v-model="newForm.title"
             @change=""></label>

      <transition-group name="back-log">
        <p v-show="newForm.title!==''" key='1' class="text-under-input">Title for you form</p>
        <p v-show="false" key='2'>error</p><br key=''>
      </transition-group>
    </div>

    <div class="title-group">
      <label>
      <input  type="text" 
              placeholder="Discription for you form" 
              class="default-input"
              v-model="newForm.discription">
      </input></label>

      <transition-group name="back-log">
        <p v-show="newForm.discription!==''" key='1' class="text-under-input">Discription for you form</p>
          <br key=''>        
      </transition-group>
    
      </div>

    <div class="count-forms">{{showCountForms}}</div>
    <!-- <ListsOfForm/> -->
    <div class="wrapp" v-show="errorEmty !='' || success == 'success' " key="wrapp">
    <transition-group name="bounce">
      
        <ErrorPopap :error="errorEmty" v-show="errorEmty !=''" @errorok="errorEmty=''" key="err" class="error-popap"/>
        <SuccessfulPopap v-show="success == 'success'" key="succ" class="succ-popap"/>
    
  </transition-group>
  </div>






    <div class="conteiner-add" >
      <img  src="../assets/add-question.svg"
            class="add-plus" 
            alt="add new questions" 
            @click="bool = !bool">
      <transition name="slide-fade">
      <div v-show="bool" class="type-list">
      
     <p @click="changePopap('short text'), createQuestion(), bool = !bool">
        <img src="../assets/string-type.svg"            
            alt="string-type"
            class="add-type">
        Short text answer
      </p>
      <p @click="changePopap('drop-down'), createQuestion(), bool = !bool">
        <img src="../assets/Drop-down-type.svg"  
            alt="Drop-down-type"
            class="add-type">

        Drop-down
      </p>
      <p @click="changePopap('multiple choice'), createQuestion(), bool = !bool">
        <img src="../assets/multiple-type.svg" 
            alt="multiple-type"
            class="add-type">
        Multiple choice
      </p>
      </div>
      </transition> 
      </div>

<!-- <button class="button-back" @click="test()">SAVE</button> -->

      



      <div v-for="(item, index) in newForm.questions" class="conteiner-questions">
        <div class="conteiner-change-type">

          <div class="change-type" @click="item.change=!item.change">{{item.type}}</div>
            <div v-show="item.change">
              <p @click="changeType(index, 'short text'), item.change=!item.change">short text</p>
              <p @click="changeType(index, 'drop-down'), item.change=!item.change">drop-down</p>
              <p @click="changeType(index, 'multiple choice'), item.change=!item.change">multiple choice</p>
              
            </div>
              
            <img src="../assets/delete-empty.svg" alt="delete" @click="removeQuestion(index)">
  
        </div>
        <label><input   type="text" 
                        placeholder="Question" 
                        v-model="item.question"
                        class="default-input"></label> <br/>
            
        <div v-if="item.type !=='short text'">       
       
        <div v-for="(option, num) in item.options">
         <label><input 
                      type="text" 
                      placeholder="New option" 
                      v-model="item.options[num]" 
                      class="default-input" 
                      @keyup.13 = "createOption(index)">
            <img src="../assets/del.svg" alt="" @click="removeOption(index, num)"/>
            
            
        </label>
        </div>
        <span @click="createOption(index)"><img src="../assets/Add option.svg" alt="" width="30px">Add option</span>
      

      </div> 
       </div>  
</div>
 </div>

</template>

<script>
import ErrorPopap from '../components/ErrorPopap.vue'
import SuccessfulPopap from '../components/SuccessfulPopap.vue'
import CreatePreview from '../components/CreatePreview.vue'

export default {
  name: 'Create',
  data () {
    return {
      preview: false,
      change: false,
      errorEmty: '',
      success: '',
      currentPopap:'',
      bool: false,
      countRadio: 1,
      newForm:
      {
        title: '',
        discription: '',
        questions:[],
        preview: false,
      }
    }

  },
  methods:{
    changePopap(val){
      this.currentPopap = val
      console.log(this.currentPopap);
    },
    isEmty(){
      if(this.newForm.title == ''){
        this.errorEmty = 'Title is emty, please fill it';
        return true
      } if(this.newForm.questions.length < 1){
          this.errorEmty = 'There are no questions, please add it';
          return true
      }
        for(let key of this.newForm.questions){
          if(key.question === ''){
            this.errorEmty = 'Question is emty, please fill it';
            return true
          }
      }
      this.errorEmty ='';
      return false
    },
    sendForm(){

      // this.$root.$store.commit('pullForms',)
      // this.$root.$store.commit('addNewForm', this.newForm)
      if(!this.isEmty()){
        this.success = 'success'
        this.$root.$store.dispatch('pushFormsToData', this.newForm);
        
      }
      
      
      // console.log(this.$root.$store.state.forms);
      // console.log(localStorage.arrayOfForms);
    },

    createQuestion(type){
      this.newForm.questions.push({question: '', options: [], type: this.currentPopap, change: false, error: false})
    },

    createOption(index){
      this.newForm.questions[index].options.push("")
    },

    removeQuestion(index){
      this.newForm.questions.splice(index, 1)
      // console.log(index)
    },

    removeOption(index, num){
      this.newForm.questions[index].options.splice(num, 1)
    },

    changeType(index, newType){
      this.newForm.questions[index].type = newType
      console.log(newType);
    },

    test(){
      alert()
    }
  },

  computed: {
    actualForms() {
      return this.$root.$store.state.forms
    },

    showCountForms() {
      let count = this.newForm.questions.length 
      if(count){
        return 'Total '  + count + ' questions' 
      } else return 'You dont have any questions'
    }

    
  },

  components:{
    CreatePreview,
    ErrorPopap,
    SuccessfulPopap
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import './mixins.scss';

input.default-input::-webkit-input-placeholder{
  font-size: 20px;
  text-align: center;
  color: grey;
  padding-top: 80px;
  // bottom: 0;
}
 .default-input{
   background: transparent;
   border: none;
   font-size: 20px;
   text-align: center;
   font-weight: 600;
   border-bottom: 3px solid grey;
   transition: border 1s;
   color: black;
   width: 600px;
   height: 50px;
 }
 .default-input:focus{
   border-bottom: 3px solid green;
 }
 .cont-prev{
  display: flex;
  justify-content: flex-end;
 }

 .conteiner{
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  }

  .preview{
    overflow: hidden;
    max-width: 300px;
    margin-left: 50px;
  }

  .conteiner-add{
    position: fixed;
    bottom: 50px;
    right: 100px;
    opacity: 0.9;

    img.add-plus{
      width: 80px;
    }

    img.add-type{
      width: 30px;
    }

    .type-list{
    position: fixed;
    bottom: 50px;
    right: 200px;
    text-align: left;
    p{
    opacity: 0.7;
}
    p:hover{
      opacity: 1;
    }
    }
  }
  .conteiner-questions{
    
    margin-top: 30px;
    margin-bottom: 50px;
  }

  .conteiner-questions:hover{
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
.conteiner-change-type{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
  .change-type{
    width: 150px;
    height: 20px;
    background-color: #ebebeb;
  }
  .slide-fade-enter-active, .slide-fade-leave-active  {
    transition: all .8s ease;
  }
  
  .slide-fade-enter, .slide-fade-leave-to{
    transform: translateX(20px);
    opacity: 0;
  }
  .text-under-input{
    opacity: 0.8;
    font-size: 16px;
    position: absolute;
    text-align: center;
  }

  .error-text{
    @extend .text-under-input;
    color: red;
  }
  .back-log-enter-active, .back-log-leave-active  {
    transition: all 1s ease-in-out;
    font-size: 16px;
  }
  
  .back-log-enter, .back-log-leave-to{
    font-size: 20px;
    transform: translate(80px, -40px);
    opacity: 0;
  }
  

  .animate-preview-enter-active, .animate-preview-leave-active  {
    transition: all 1s ease-in-out;

  }
  
  .animate-preview-enter, .animate-preview-log-leave-to{
    transform: translate(0px, -80px);
    opacity: 0;

    // position: absolute;
  }
  .animate-preview{

  }
  .count-forms{
    margin-top: 20px;
    opacity: 0.5;
  }
  .title-group{
    margin-bottom: 20px;
  }
   .button-back{
    width: 150px;
    height: 40px;
    color: white;
    background-color: $main-blue ;
    border: none;
    cursor: pointer;
    opacity: 0.8;
    margin-left: 5px;
  }
.bounce-enter-active {
  animation: bounce-in .5s;
  // transform: translate(-50%, -60%);
  // position: absolute;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
  // transform: translate(-50%, -60%);
}

.wrapp{
  width: 100%;
  height: 100%;
  background-color: grey;
  // opacity: 0.5;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  overflow: hidden;
  }

 .error-popap, .succ-popap{
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 2;
} 
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
  /*  */
</style>
