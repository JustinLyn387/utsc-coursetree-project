<template>
  <form  class="mb-4">
    <div v-if="completeLogin">
      <div  class="mb-4">
        <h1>LOGIN</h1>
        <label>Username:</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
          type="text" placeholder="Username">
      </div>
      <div class="mb-6">
        <label>Password:</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
          type="password" placeholder="Password">
      </div>
      <div class="flex items-center justify-between">
        <v-btn text>Sign In</v-btn>
      </div>
    </div>
    <div v-else>
      <h1>REGISTER</h1>
      <div  class="mb-4">
        <label>Email:</label>
        <input
          class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:shadow-outline"
          type="text" placeholder="Email...">
      </div>
      <div class="mb-6">
        <label>Password:</label>
        <input
          class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:shadow-outline"
          type="password" placeholder="Password">
      </div>
      <div class="flex items-center justify-between">
        <v-btn text>Register</v-btn>
      </div>
    </div>
    <div class="registerOp">
      <a class="regText">Don't have an account? </a><a v-on:click="registerUser">  Register</a>
    </div>
  </form>

</template>

<script>
export default {
  data: () => ({
    completeLogin: true
  }),
  methods: {
    registerUser () {
      console.log('Switch to register')
      this.completeLogin = false
    }
  }
}
</script>

<style scoped>
  h1{
    color: gray;
    padding-bottom: 15px;
  }
  label{
    padding-right: 15px;
  }
  .regText{
    color: black;
  }
  .registerOp{
    text-align: center;
    padding-top: 25px;
  }
</style>
