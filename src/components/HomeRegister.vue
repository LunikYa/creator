<template>
  <div class="login">
    <h2>Register</h2>
    <img src="../assets/favicon.png" height="32" width="32" alt="">
    <form action="" @submit.prevent="regUser">
      <input type="email" placeholder="Enter you mail" v-model="user.email">
      <input type="password" placeholder="Enter you password" v-model="user.password">
      <input type="password" placeholder="Repeat password" v-model="dblpass">
      <div v-if="error">Ошибка ептить</div>
      <div v-if="success" @click="go">Молодчага зареган норм!</div>
        <ul class="errors">
          <li v-show=" '!validation.name' ">Name cannot be empty.</li>
          <li v-show=" '!validation.email' ">Please provide a valid email address.</li>
        </ul>
      <button type="submit" class="button-save">SIGN IN</button>
    </form>
    <!-- <ul is="transition-group">
    <li v-for="user in users" class="user" :key="user['.key']">
      <span>{{user.name}} - {{user.email}}</span>
      <button v-on:click="removeUser(user)">X</button>
    </li>
      </ul>
      <form id="form" v-on:submit.prevent="addUser">
    <input type="text" v-model="newUser.name" placeholder="Username">
    <input type="email" v-model="newUser.email" placeholder="email@email.com">
    <input type="submit" value="Add User">
      </form>
      <ul class="errors">
    <li v-show=" '!validation.name' ">Name cannot be empty.</li>
    <li v-show=" '!validation.email' ">Please provide a valid email address.</li>
      </ul> -->
  </div>
</template>

<script>
var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// var firebase = require("firebase/app");
export default {
  name: 'HomeRegister',
  data () {
    return {
      dblpass: '',
      user: {
        email: '',
        password: '',
      },
      error: false,
      success: false
    }
  },
  methods: {
    addUser: function () {
      console.log(this.isValid);
      if (this.isValid) {
        // console.log(this.isValid);
        firebase.database().ref('users').push(this.user)
        this.user.name = ''
        this.user.email = ''
      }
    },
    removeUser: function (user) {
      usersRef.child(user['.key']).remove()
    },

    regUser(){  
       if(this.user.password !== this.dblpass){
             this.error = true  
       } else if (this.isValid) {
        // console.log(firebase);

       firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then((resolve) =>{
          // this.$emit('reg','sign-in');
          this.success = true
          this.$router.push( {path:'/login'})
        })
        .catch(error=>{
           this.error= true;
        })

      //   console.log(this.isValid);
      // if (this.isValid) {
      //   // console.log(this.isValid);
      //   firebase.database().ref('users').push(this.user)
      //   this.user.name = ''
      //   this.user.email = ''
      }
    },
    go(){
      this.$router.push( {path:'/login'})
    }
  },
  computed: {
    validation: function () {
// console.log(this.isValid);
      return {

        password: !!this.user.password.trim(),
        email: emailRE.test(this.user.email)
      }
    },
    isValid: function () {
      console.log(this.validation);
      let validation = this.validation
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    }
  },
  created(){
      this.$root.$store.dispatch('getCurrentId');
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
    background: url("../assets/Drop-down-type.svg") no-repeat 3px 1px rgba(246, 243, 246, 0.7);
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


  body {
  font-family: Helvetica, Arial, sans-serif;
}

ul {
  padding: 0;
}

.user {
  height: 30px;
  line-height: 30px;
  padding: 10px;
  border-top: 1px solid #eee;
  overflow: hidden;
  transition: all .40s ease;
}

.user:last-child {
  border-bottom: 1px solid #eee;
}

.v-enter, .v-leave-active {
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
  border-top-width: 0;
  border-bottom-width: 0;
}

.errors {
  color: #f00;
}


</style>
