<template>
  <div>
    
  <CreateProcessTopBar :CountForms = "showCountForms" :prev="preview"/>

  <CreatePreview :form ="newForm" v-show="preview" key="create"/>
  <div class="wrapp" v-show="errorEmty !='' || success == 'success' " key="wrapp">
        <transition-group name="bounce">      
          <ErrorPopap :error="errorEmty" v-show="errorEmty !=''" @errorok="errorEmty=''" key="err" class="error-popap"/>
          <SuccessfulPopap v-show="success == 'success'" key="succ" class="succ-popap"/>
        </transition-group>
      </div>
  
  <div class="conteiner" v-show="!preview">
    
      <div class="title-group">
        <label><input type="text" placeholder="Title for you form" class="default-input-title" v-model="newForm.title" @change=""></label>
        <transition-group name="back-log">
          <p v-show="newForm.title!==''" key='1' class="text-under-input">Title for you form</p>
          <p v-show="false" key='2'>error</p><br key=''>
        </transition-group>
      </div>

    <div class="title-group">
      <label><input type="text" placeholder="Description for you form" class="default-input" v-model="newForm.discription"></input></label>
      <transition-group name="back-log">
        <p v-show="newForm.discription!==''" key='1' class="text-under-input">Description for you form</p>     
      </transition-group>
    </div>      
 
     <CreateProcessAddQuestions :form="newForm"/>
     
  </div>
  <div class="conteiner-add" >     
    <transition name="slide-fade">
      <div v-show="bool" class="type-list">      
      <span @click="changePopap('short text'), createQuestion(), bool = !bool">
        <img src="../assets/string-type.svg" alt="string-type" class="add-type string">
        Short text answer
      </span>
      <span @click="changePopap('drop-down'), createQuestion(), bool = !bool"> 
        <img src="../assets/Drop-down-type.svg" alt="Drop-down-type" class="add-type select">
        Drop-down
      </span>
      <span @click="changePopap('multiple choice'), createQuestion(), bool = !bool">
        <img src="../assets/multiple-type.svg" alt="multiple-type" class="add-type radio">
        Multiple choice
      </span>
      </div>
    </transition>
    <button class="add-plus" @click="bool = !bool"><span class="plus">+ </span> New question</button> 
  </div>
</div>
</template>

<script>

import ErrorPopap                 from '../components/ErrorPopap.vue'
import SuccessfulPopap            from '../components/SuccessfulPopap.vue'
import CreatePreview              from '../components/CreatePreview.vue'
import CreateProcessTopBar        from '../components/CreateProcessTopBar.vue'
import CreateProcessAddQuestions  from '../components/CreateProcessAddQuestions.vue'

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
        uid: ''
      }
    }
  },
  methods:{
    changePopap(val){
      this.currentPopap = val
    },
    isEmty(){
      if(this.newForm.title == ''){
        this.errorEmty = 'Title is emty, please fill it';
        return true
      } if(this.newForm.questions.length < 1){
          this.errorEmty = 'There are no questions, please add it';
          return true
      } for(let key of this.newForm.questions){
          if(key.question === ''){
            this.errorEmty = 'Question is emty, please fill it';
            return true
          }
        }
      this.errorEmty ='';
      return false
    },
    invert(){
      this.preview = !this.preview
    },
    sendForm(){
      if(!this.isEmty()){
        this.success = 'success'
        this.$root.$store.dispatch('pushFormsToData', this.newForm);        
      }
    },
    createQuestion(type){
      this.newForm.questions.push({question: '', options: [], type: this.currentPopap, change: false, error: false, preview: true})
    },
    createOption(index){
      this.newForm.questions[index].options.push("")
    },
    removeQuestion(index){
      this.newForm.questions.splice(index, 1)
    },
    removeOption(index, num){
      this.newForm.questions[index].options.splice(num, 1)
    },
    changeType(index, newType){
      this.newForm.questions[index].type = newType
    }
  },
  computed: {
    actualForms(){
      return this.$root.$store.state.user.forms
    },
    showCountForms(){
      let count = this.newForm.questions.length 
      if(count){
        return 'Total '  + count + ' questions' 
      } else return 'You dont have any questions'
    }    
  },

  components:{
      CreatePreview,
      ErrorPopap,
      SuccessfulPopap,
      CreateProcessTopBar,
      CreateProcessAddQuestions
    },
    created(){
      this.$root.$store.dispatch('getCurrentId');       
      this.$root.$store.dispatch('pullForms')
    }
}

</script>

<style lang="scss" scoped>
  @import './mixins.scss';
  @import './createProcessStyle.scss';
</style>
