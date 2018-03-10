<template>
  <div>
      <div class="conteiner">
     <p>
        <img 
            src="../assets/icon-radio.png" 
            height="50" 
            width="50" 
            alt="">
        Short text answer
      </p>
      <p>
        <img 
            src="../assets/icon-radio.png" 
            height="50" 
            width="50" 
            alt="">
        Drop-down
      </p>
      <p>
        <img 
            src="../assets/icon-radio.png" 
            height="50" 
            width="50" 
            alt="">
        Multiple choice
      </p>

      <label for=""> You question
      <input type="text" placeholder="Question"></label>

    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateTypePop',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    changeBackround(){
      // console.log(event.target.tagName)

      // let count = 0;
      // if(event.target.tagName == 'P') {
      //   count = 1;
      //   event.target.style.backgroundColor = "green"
      }
    }
}
</script>

<style scoped>

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

</style>
