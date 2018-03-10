<template>
  <div class="conteiner">
    <div >

    <label>Title:
      <input 
            type="text"
            placeholder="Title for u form" 
            class="default-input">
    </label><br>

    <label>Discription:<br>
      <textarea 
            type="text" 
            placeholder="Discription for u form" 
            class="default-input">
      </textarea></label>
    <div>You dont have any questions</div>
    <!-- <ListsOfForm/> -->
    <div class="conteiner-add" >
      <img 
            src="../assets/icon-add.png" 
            height="32" 
            width="32" 
            alt="" 
            @click="bool=!bool"> 
      <span @click="bool=!bool">Add new questions</span>
    </div>

    <CreateTypePop v-show="bool">
   <!-- <button class="button-back" @click="changePopap('cancel')">CANCEL</button> -->
    </CreateTypePop>
</div>
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
  max-width: 350px;;
  margin: 0 auto;
  text-align: left;

 }

</style>
