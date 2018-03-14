<template>
  <div>
     <div v-for="(item, index) in form.questions" class="conteiner-questions">
        <div class="conteiner-change-type">
          
          <p key='' class="change-type" @click="item.change=!item.change" v-show="!item.change">{{item.type}}</p>
          
            <div key=';;;' v-show="item.change" class="change-type-popap">
              <p @click="$parent.changeType(index, 'short text'), item.change=!item.change">short text</p>
              <p @click="$parent.changeType(index, 'drop-down'), item.change=!item.change">drop-down</p>
              <p @click="$parent.changeType(index, 'multiple choice'), item.change=!item.change">multiple choice</p>
            </div>   
                   
            <img src="../assets/delete-empty.svg" alt="delete" @click="$parent.removeQuestion(index)">  
        </div>
        <label><input type="text" placeholder="Question" v-model="item.question" class="default-input"></label><br/>
            
        <div v-if="item.type !=='short text'">
          <div v-for="(option, num) in item.options" class="option-wrapp">
            <label><input type="text" placeholder="New option" v-model="item.options[num]" class="default-input" @keyup.13 = "createOption(index)">
            <img src="../assets/del.svg" alt="remove" @click="$parent.removeOption(index, num)"/></label>
          </div>
          <div @click="$parent.createOption(index)" class="add-option-wrap">
            <img src="../assets/Add option.svg" alt="add new option">Add option
          </div>
        </div> 
      </div>

  </div>
</template>

<script>

export default {
  name: 'CreateProcessAddQuestions',
  props: ['form'],
  data () {
    return {
      preview: false,
      myform:{},
    }
  },
  methods:{
    invertPreview(bool){
      this.preview = !this.preview
    },
    sendEmitPrev(){
      this.$parent.invert()
    },
    sendForm(){
      this.$parent.sendForm();
    },
    copy(){
      // this.myform = JSON.parse(JSON.stringify(form))
      console.log("ok");
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './mixins.scss';
  @import './createProcessStyle.scss';
</style>