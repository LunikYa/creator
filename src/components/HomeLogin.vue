<template>
  <div class="login">
    <h2>Log In</h2>
    <img src="../assets/favicon.png" height="32" width="32" alt="">
    <form action="" @submit.prevent="login">
      <input type="email" placeholder="Enter you mail" v-model="user.email">
      <input type="password" placeholder="Enter you password" v-model="user.password">
      <p v-show="err">{{msgError}}</p>     
      <button type="submit" class="button-save">LOGIN</button>
    </form>
  </div>
</template>

<script>
// var firebase = require("firebase/app");
export default {
  name: 'HomeLogin',
  data () {
    return {
      user: {
        email: '',
        password: '',
      },

      err: false,
      msgError: ''
    }
  },
  methods: {
    login(){
      firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
      .then(resolve =>{
        console.log(resolve);
        this.$router.push( {path:'/'})
      },
        reject =>{
          this.err = true;
          console.log(reject);
          this.msgError = reject.code
        })
      .catch(function(error) {
        // console.log(this);
            // Handle Errors here.
            // var errorCode = error.code;
            this.msgError = error.message;
            this.error = true;
            // ...
      });
  },
  validPass(){

  }
  },
   created(){
      this.$root.$store.dispatch('getCurrentId');
      console.log('');
    }
}
</script>

<style lang="scss" scoped>
@import './mixins.scss';

  .login{
    width: 400px;
    height: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -60%);
  }
  h2{
    color: #fff;
    margin-bottom: 20px;
  }
  input{
    width: 280px;
    height: 40px;
    outline: none;
    margin-bottom: 30px;
    padding-left: 50px;
    border: 1px solid black;
    background: url(https://png.icons8.com/ultraviolet/1600/login-as-user.png) no-repeat 3px 1px rgba(246, 243, 246, 0.7);
    background-size: auto 90%;
  }
  .box-input{
    text-align: left;
  }

  .button-save{
    width: 180px;
    height: 50px;
    border: none;
    cursor: pointer;
    background-color: $main-red;
    color: white;
    font-weight: 600;
    font-size: 16px;
    transition: all 1s;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.3);
  }

</style>