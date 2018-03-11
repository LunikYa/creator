<template>
  <div>
    <h1 v-text="form.title"></h1>
    <p v-text="form.discription"></p>
     <form v-for="(item, index) in form.questions">
        <div v-if="item.type == 'string'">
          <h2 v-text="index+1 +'. ' + item.question"></h2>
          <input type="text" placeholder="Введите пожалуйста ответ">
       </div>

       <div v-if="item.type == 'select'">
          <h2 v-text="index+1 +'. ' + item.question"></h2> 
          <select name="questions" id="" value="">
           <option value="answer" v-for="option in item.options">{{option}}</option>
         </select>
       </div>

       <div v-if="item.type == 'radio'">
          <h2 v-text="index+1 +'. ' + item.question"></h2> 
          <form v-for="option in item.options">
          <label for="">
          <input type="radio" name="answer">{{option}}</label>
          </form>
       </div>
      
     </form>
  </div>
</template>

<script>
export default {
  name: 'CreateShow',
  props: ['form'],
  data () {
    return {
      
    }
  },
  methods: {
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
