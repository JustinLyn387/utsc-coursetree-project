<template>
  <v-app>

    <LoginModal/>

    <v-app-bar app>
      <v-img
        class="logo"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1200px-Utoronto_coa.svg.png"
        aspect-ratio="1"
        max-width="50"
        max-height="50"
        v-on:click="$router.push('/')"
      />
      <v-toolbar-title class="headline" v-on:click="$router.push('/')">
        <span>UTSC</span>
        <span class="font-weight-light"> CourseTree</span>
      </v-toolbar-title>

      <v-toolbar-items>
        <navbar/>
      </v-toolbar-items>
      <v-spacer/>
      <v-toolbar-items>
        <!-- Login Button -->
        <button class="loginButton" v-on:click="$modal.show('loginPopup')">Login</button>
        <!-- Dropdown menu for settings -->
        <v-menu transition="slide-y-transition" :offset-y="true" bottom>
          <template v-slot:activator="{ on }">
            <v-btn class="settingsIcon" v-on:click="methodTest" v-on="on" color="primary"><font-awesome-icon :icon="['fas', 'bars']" size="2x"/></v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, i) in settingsOptions" :key="i" @click="selectedSetting(item.option)">
              <v-list-item-title>{{ item.option }}</v-list-item-title>
            </v-list-item>
          </v-list>

        </v-menu>

      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>

  </v-app>

</template>

<script>

import NavBar from './components/NavBar.vue'
import LoginModal from './components/LoginModal'

export default {
  name: 'App',
  components: {
    LoginModal,
    'navbar': NavBar
  },
  methods: {
    methodTest () {
      console.log('HAHAHAHAHA')
    },
    selectedSetting (setting) {
      alert(setting)
    }
  },
  data: () => ({
    settingsOptions: [ { option: 'A - Apple' }, { option: 'B - Banana' }, { option: 'C - Cherry' } ]
  })
}
</script>

<style scoped>
  .settingsIcon{
    align-self: center;
    padding-left: 18px;
  }
  .loginButton{
    padding-right: 30px;
    font-size: 21px;
    color: royalblue;
    font-weight: bold;
    outline: none;
  }
  .headline:hover{
    cursor: pointer;
  }
  .logo:hover{
    cursor: pointer;
  }
</style>
