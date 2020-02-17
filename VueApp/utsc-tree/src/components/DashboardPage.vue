<template>
  <v-container class="dashboardContainer">
    <v-row>
      <v-col class="leftColumn">
        <v-row class="rowSeparator">
          <v-card class="cardStyles">
            <div class="pageHeader">
              <h1> - Dashboard - </h1>
            </div>
          </v-card>
        </v-row>
        <v-row class="rowSeparator">
          <v-card class="cardStyles">
            <h2> - IDK - </h2>
          </v-card>
        </v-row>
      </v-col>
      <v-col class="rightColumn">
        <v-row class="rowSeparator">
          <v-card class="cardStyles">
            <v-tabs background-color="transparent" color="primary" grow>
              <v-tab><b>Overview</b></v-tab>
              <v-tab><b>Grades</b></v-tab>
              <v-tab><b>IDK</b></v-tab>
              <v-tab><b>IDK</b></v-tab>
            </v-tabs>
            <v-container class="mainContent">
              <v-btn class="deleteButton" color="error">Delete Account</v-btn>
            </v-container>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: 'DashboardPage'
}
</script>

<style scoped>
  .dashboardContainer{
    padding: 35px 0 0 0;
    min-width: 95%;
    background-color: cornflowerblue;
    min-height: 93.5vh;
  }
  .pageHeader{
    text-align: center;
  }
  .mainContent{
    padding-top: 52%;
  }
  .cardStyles{
    padding: 15px;
    width: 100%;
  }
  .leftColumn{
    max-width: 22%;
  }
  .rightColumn{
    max-width: 78%;
  }
  .rowSeparator{
    padding: 0 10px 20px;
  }
  .deleteButton{
    width: 100%;
  }

</style>
