<template>
  <div>
     <p >
        <img src="../assets/icon-radio.png" height="50" width="50" alt="">
        Short text answer
      </p>
      <p>
        <img src="../assets/icon-radio.png" height="50" width="50" alt="">
        Drop-down
      </p>
      <p >
        <img src="../assets/icon-radio.png" height="50" width="50" alt="">
        Multiple choice
      </p>
      <label for=""> You question
      <input type="text" placeholder="Question"></label>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

/*  .default-input{
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
  }*/
</style>
