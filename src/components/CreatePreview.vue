<template>
  <div class="conteiner">    
    <div class="content">
      <h1 v-text="form.title"></h1>
      <p  v-text="form.discription" class="discription"></p>   
      <form action="#" @submit.prevent="" >
        <div v-for="(item, index) in form.questions">
          <div v-if="item.type == 'short text'" class="conteiner-questions">
            <h2 v-text="index+1 +'. ' + item.question"></h2>
            <input type="text" placeholder="Please type answer" class="default-input">
          </div>
          <div v-if="item.type == 'drop-down'" class="conteiner-questions">
            <h2 v-text="index+1 +'. ' + item.question"></h2> 
            <select name="questions" value="option">
              <option value="option" v-for="option in item.options">{{option}}</option>
            </select>
          </div>
          <div v-if="item.type == 'multiple choice'" class="conteiner-questions">
            <h2 v-text="index+1 +'. ' + item.question"></h2> 
            <div v-for="option in item.options">
              <label>
              <input type="radio" :name="index" value="option">{{option}}</label>
            </div>
         </div>
        </div>
     </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreatePreview',
  props: ['form'],
  data () {
    return {
      myname: '',
    }
  },
  computed:{

  },
  methods: {
    names(item){
      this.myname = item.questions
    }
  }
}
</script>

<style lang="scss" scoped>
@import './mixins.scss';
  h1{
    font-size: 40px;
    margin-top: 20px;
    margin-bottom: 0px;
    text-align: center;
  }

  h2{
    font-size: 25px;
    text-align: left;
  }

  .conteiner{
    max-width: 600px;
    hieght: 100%;
    margin: 0 auto;
    top: -50%;
    overflow: hidden;
    text-align: left;
    // margin-top: 90px;
  }
  .content{
    margin-left: 20px;
    margin-bottom: 80px;

  }

  .conteiner-questions{
    margin-bottom: 10px;
  }
  .discription{
    text-align: center;
    font-style: italic;
  }

  .button-submit{
    width: 200px;
    height: 50px;
    border: none;
    background-color: $main-red;
    font-weight: 600;
    color: white;
    font-size: 18px;
    transform: translate(50%, 50%);
    right: 50%;
    top: 70%;
    position: absolute;
    // margin-left: 170px;
    margin-top: 10px;
    z-index: 999999;
  }

  .button-submit:hover{
    background-color: $main-red-active;
  }

  .button-submit:active{
    opacity: 0.8;
  }
  
  form{
    margin-top: 10px;
    margin-bottom: -20px;
  }
  
 .default-input{
   background: transparent;
   border: none;
   font-size: 20px;
   text-align: center;
   font-weight: 300;
   border-bottom: 1px solid grey;
   transition: border 1s;
   color: black;
  width: 600px;
   height: 50px;
 }

 @media(max-width: 640px){
  .default-input{
    width: 100%;
  }
}

</style>
