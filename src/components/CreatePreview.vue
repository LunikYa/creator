<template>
  <div class="conteiner">
    <h1 v-text="form.title"></h1>
    <p v-text="form.discription" ></p>
     <form v-for="(item, index) in form.questions">
        <div v-if="item.type == 'short text'" class="conteiner-questions">
          <h2 v-text="index+1 +'. ' + item.question"></h2>
          <input type="text" placeholder="Введите пожалуйста ответ" class="default-input">
       </div>

       <div v-if="item.type == 'drop-down'" class="conteiner-questions">
          <h2 v-text="index+1 +'. ' + item.question"></h2> 
          <select name="questions" id="" value="">
           <option value="answer" v-for="option in item.options">{{option}}</option>
         </select>
       </div>

       <div v-if="item.type == 'multiple choice'" class="conteiner-questions">
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
  name: 'CreatePreview',
  props: ['form'],
  data () {
    return {
      
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  h1{
    font-size: 40px;
    margin-bottom: 0px;
    text-align: center 
  }

  h2{
    font-size: 25px;
    text-align: left;
  }

  .conteiner{
  max-width: 500px;
  margin: 0 auto;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: stretch;

  }

  .conteiner-questions{
    text-align: left;
  }

.default-input{
   background: transparent;
   border: none;
   font-size: 20px;
   text-align: center;
   font-weight: 600px;
   border-bottom: 3px solid grey;
   transition: border 1s;
   color: black;
   width: 600px;
   height: 50px;
   outline: none;
   margin-top: -20px;
 }

</style>
