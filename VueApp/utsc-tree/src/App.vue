<template>
  <v-app>

    <v-app-bar app>
      <v-img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1200px-Utoronto_coa.svg.png"
        aspect-ratio="1"
        max-width="50"
        max-height="50"
      />
      <v-toolbar-title class="headline">
        <span>UTSC</span>
        <span class="font-weight-light"> Course Tree</span>
      </v-toolbar-title>

      <v-toolbar-items>
        <navbar/>
      </v-toolbar-items>
      <v-spacer/>
      <v-toolbar-items>
        <v-btn  rounded color="primary" dark v-on:click="openSignIn">Login</v-btn>
        <a class="settingsIcon" v-on:click="methodTest"> <font-awesome-icon :icon="['fas', 'cogs']" size="2x"/></a>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>

    <ModalRoot />

  </v-app>

</template>

<script>

import NavBar from '@/components/NavBar.vue'
import { ModalBus } from './eventBus'
import Login from '@/components/logRegComponents/LoginRegister.vue'
import ModalRoot from '@/components/ModalRoot'

export default {
  name: 'App',
  components: {
    'navbar': NavBar,
    ModalRoot
  },
  methods: {
    openSignIn () {
      ModalBus.$emit('open', { component: Login })
    },
    methodTest () {
      console.log('HAHAHAHAHA')
    }
  },
  data: () => ({
    //
  })
}
</script>

<style scoped>
  .settingsIcon{
    align-self: center;
    padding-left: 18px;
  }
</style>
