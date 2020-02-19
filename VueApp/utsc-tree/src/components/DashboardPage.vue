<template>
  <v-container class="dashboardContainer">
    <TextSampleModal/>
    <v-row>
      <v-col class="leftColumn">
        <v-row class="rowSeparator">
          <v-card class="cardStyles">
            <div class="pageHeader">
              <h1> - Dashboard - </h1>
              <p class="dashSubhead">User overview, manage taken courses, and ...</p>
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
              <v-tab v-on:click="switchTab('O')"><b>Overview</b></v-tab>
              <v-tab v-on:click="switchTab('TC')"><b>Taken Courses</b></v-tab>
              <v-tab><b>IDK</b></v-tab>
              <v-tab><b>IDK</b></v-tab>
            </v-tabs>
            <v-container v-if="this.tab === 'Overview'" class="mainContent">
              <v-btn class="deleteButton" color="error">Delete Account</v-btn>
            </v-container>
            <v-container v-else-if="this.tab === 'Taken'" class="mainContent">
              <h2>Taken Courses</h2>
              <p>In this section you can view the courses that you have completed thus far in your studies. Additionally, the courses inputted will be used to better display TreeView diagrams and courses remaining to take the desired course. To populate the table simply upload a text file of your transcript.</P>
              <v-row>
                <v-col class="infoPopColumn">
                  <font-awesome-icon v-on:click="$modal.show('textSamplePopup')" class="infoIcon" :icon="['fas', 'info-circle']"/>
                </v-col>
                <v-col class="pb-0">
                  <p><b> Instructions:</b> ACORN > Academic History > Complete Academic History > Copy and paste transcript section into a text file<br><b>Note:</b> You can filter the table by clicking on any of the column names!</p>
                </v-col>
              </v-row>
              <v-file-input show-size counter accept="text/*" label="Upload Transcript Text File ..."></v-file-input>
              <v-data-table :headers="courseHeaders" :items="courses" sort-by="date"/>
            </v-container>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import TextSampleModal from './TextSampleModal'
export default {
  name: 'DashboardPage',
  components: {
    TextSampleModal
  },
  data: () => ({
    tab: 'Overview',
    courseHeaders: [
      { text: 'Course Code', align: 'left', value: 'code' },
      { text: 'Course Title', value: 'title' },
      { text: 'Completion Date', value: 'date' }
    ],
    courses: [
      { code: 'CSCA08H3', title: 'Computer Science', date: '2019 Fall' },
      { code: 'MATA37H3', title: 'Calculus', date: '2020 Winter' },
      { code: 'CSCD58H3', title: 'Some Computer Science Course', date: '2018 Summer' },
      { code: 'CSCD27H3', title: 'Another Computer Science Course', date: '2019 Fall' },
      { code: 'LINA01H3', title: 'Linguistics', date: '2018 Summer' },
      { code: 'CSCA08H3', title: 'Computer Science', date: '2020 Winter' },
      { code: 'CSCD58H3', title: 'Same Computer Science', date: '2020 Winter' },
      { code: 'LINA01H3', title: 'More Linguistics', date: '2019 Fall' },
      { code: 'CSCA08H3', title: 'Computer Science', date: '2018 Summer' }
    ]
  }),
  methods: {
    switchTab (tab) {
      if (tab === 'O') {
        this.tab = 'Overview'
      } else if (tab === 'TC') {
        this.tab = 'Taken'
      }
    }
  }
}
</script>

<style scoped>
  .dashboardContainer{
    padding: 25px 0 0 0;
    min-width: 95%;
    background-color: cornflowerblue;
    min-height: 93.5vh;
  }
  .pageHeader{
    text-align: center;
  }
  .mainContent{
    padding-top: 20px;
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
  .infoIcon{
    color: cornflowerblue;
  }
  .infoPopColumn{
    max-width: 16px;
  }
  .dashSubhead{
    text-align: center;
    font-weight: bold;
  }

</style>
