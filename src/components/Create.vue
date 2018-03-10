<template>
  <div class="conteiner">

    <label>Title
      <input type="text" placeholder="Title for u form" class="default-input"></label><br>

    <label>Discription
      <textarea type="text" placeholder="Title for u form" class="default-input"></textarea></label>
    <div class="conteiner-add" >
      <img src="../assets/icon-add.png" height="32" width="32" alt="">
      <span @click="bool=!bool">Add new questions</span>
    </div>
    <CreateTypePop v-show="bool">
   <!-- <button class="button-back" @click="changePopap('cancel')">CANCEL</button> -->
    </CreateTypePop>

  </div>

</template>

<script>
import CreateTypePop from '../components/CreateTypePop.vue'

export default {
  name: 'Create',
  data () {
    return {
      currentPopap:'',
      bool: false
    }
  },
  methods:{
    changePopap(val){
      this.currentPopap = val
    }
  },
  components:{
    CreateTypePop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .conteiner{
    text-align: left;
  }
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
    margin-top: 50px;
    width: 200px;
    height: 100px;
  }

  .conteiner-add{
    cursor: pointer;
  }
  
 

</style>
