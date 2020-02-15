<template>
  <modal class="loginPopup" name="loginPopup" transition="pop-out" :width="400" :height="550">
    <v-container class="popupForm">
      <form>
        <div v-if="completeLogin">
          <h1>Hello there,<br>welcome back</h1>
          <div class="mb-4">
            <div>
              <input v-model="credentials.email" class="input" type="email" placeholder="E-mail">
            </div>
          </div>

          <div>
            <input v-model="credentials.password1" class="input" type="password" placeholder="Password"  v-on:keyup.enter="doStuff">
          </div>
          <div class="text-center">
            <v-btn color="primary" v-on:click="doStuff">Sign In</v-btn>
          </div>

          <div class="registerOp">
            <a class="regText">Don't have an account? </a><a v-on:click="registerUser">  Sign Up!</a>
          </div>
        </div>

        <div v-else>
          <h1>Get on board</h1>
          <div class="mb-3">
            <input v-model="credentials.email" class="input" type="email" placeholder="E-mail">
          </div>
          <div class="mb-3">
            <input v-model="credentials.password1" class="input" type="password" placeholder="Password">
          </div>
          <div>
            <input v-model="credentials.password2" class="input" type="password" placeholder="Confirm Password"  v-on:keyup.enter="doStuff" v-on:keyup="checkValidity">
          </div>

          <div class="text-center">
            <v-btn v-if="validCredentials" color="primary" v-on:click="doStuff">Sign Up</v-btn>
            <v-btn v-else disabled>Sign Up</v-btn>
          </div>
          <div class="registerOp">
            <a class="regText">I already have an account? </a><a v-on:click="registerUser">  Login!</a>
          </div>
        </div>

      </form>
    </v-container>
  </modal>

</template>

<script>

export default {
  name: 'LoginModal',
  data: () => ({
    completeLogin: true,
    validCredentials: false,
    credentials: { email: '', password1: '', password2: '' }
  }),
  methods: {
    registerUser () {
      this.completeLogin = !this.completeLogin
    },
    doStuff () {
      if (this.credentials.password1 !== this.credentials.password2) {
        this.validCredentials = false
        alert("Passwords don't match!")
      } else {
        alert('Email: ' + this.credentials.email + '\nPassword: ' + this.credentials.password1)
      }
    },
    checkValidity () {
      this.validCredentials = this.credentials.password1 === this.credentials.password2
    }
  }
}
</script>

<style scoped>
  h1{
    color: gray;
    padding-bottom: 55px;
    padding-top: 20px;
  }
  label{
    padding-right: 15px;
  }
  .popupForm{
    padding: 30px;
  }
  .loginPopup{
    border-radius: 5px;
  }
  .regText{
    color: black;
  }
  .registerOp{
    text-align: center;
    padding-top: 45px;
  }
  .text-center{
    padding-top: 55px;
  }
  .input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #CCC;
    color: #555;
    font-size: 18px;
    height: 50px;
    top: 50%;
    min-width: 100%;
  }
  input:focus {
    outline: none;
  }

  input::-webkit-input-placeholder {
    color: #AAA;
  }

  input:focus::-webkit-input-placeholder {
    color: dodgerblue;
  }

  .input:focus+.underline {
    transform: scale(1);
  }

</style>
