<template>
  <div class="conteiner">
    <p class="caption-lists">Lists of form</p>
    <div v-for="(item, index) in getArr">
      
      <div @click="item.preview = !item.preview" class="cont-items">
        <p class="form-title">{{index+1}}. {{item.title}}</p>
        <p class="dicription">{{!!item.discription ? item.discription : 'Discription is emty'}}</p>
        <p class="total-questions">Total {{item.questions.length}} questions</p>
      </div>
      
      <transition name="preview">
          <CreatePreview :form="item" class="preview" v-show="item['preview']"/>
      </transition>
    
    </div>
  </div>
</template>

<script>

import CreatePreview from '../components/CreatePreview.vue'

export default {
  name: 'ListsOfForm',
  data () {
    return {
      copyForms: [],
      userId: '',
    }
  },
  components:{
    CreatePreview
  },
  methods: {
    invertBool(val){
      return val = !val
    }
  },
  computed:{
    getArr(){
      return this.$root.$store.state.forms
    }    
  },
  created: function(){
    this.$root.$store.dispatch('pullForms')
    this.copyForms = JSON.parse(JSON.stringify(this.$root.$store.state.forms))   
  }
}
</script>

<style lang="scss" scoped>
@import './mixins.scss';

  .conteiner{
    text-align: left;
    width: 800px;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: -2.5px 5px 15px rgba(0,0,0,0.3);
    margin-top: 90px;
  }

  .caption-lists{
    text-align: center;
    font-size: 30px;
    font-weight: 600;
  }

  .cont-items{
    margin-left: 20px;
    padding: 10px 0px 10px 10px;
  }

  .cont-items:hover{
    transition: all 2s;
    transform: scale(1.1) translateX(20px);
    box-shadow: -2.5px 5px 40px rgba(0,0,0,0.3);
    cursor: pointer;
    overflow: hidden;
  }

  .form-title{
    font-size: 20px;
    font-weight: 600;
  }

  .dicription{
    font-size: 16px;
    font-style: italic;
  }

  .total-questions{
    font-size: 14px;
  }

  .button-to-lists{
    height: 100%;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 16px;
    font-wieght: 600px;
    transition: all 2s;
    text-align: center;
    width: 80px;
  }

  .button-to-lists:hover{
    background-color: $main-dark-grey;
  }

  .preview-enter-active{
    animation: tran 1s ease-in-out;
  }

  .preview-leave-active{
    animation: tran 1s ease-in-out reverse;
  }

  @keyframes tran {
  0% {
    transform: translateX(1000px);
  } 
  100% {
    transform: translateX(0);
  }
  }


@media(max-width: 768px){
  .conteiner{
    width: auto;
  }
}

@media(max-width: 500px){
  .cont-items:hover{
    transform: none;
  }
}

</style>
