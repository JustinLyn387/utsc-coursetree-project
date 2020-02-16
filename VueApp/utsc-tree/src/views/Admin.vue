<template>
  <div>
    <h1>Admin Panel</h1>
    <AdminPage></AdminPage>
  </div>

</template>

<script>
import AdminPage from '@/components/AdminPage.vue'
export default {
  name: 'Admin',
  components: {
    AdminPage
  }
}
</script>

<style scoped>
  h1{
    padding-top: 15px;
    padding-left: 20px;
  }

</style>
