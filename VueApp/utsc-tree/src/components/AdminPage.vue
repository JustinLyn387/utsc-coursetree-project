<template>
  <v-container class="adminContainer">
    <v-row>
      <!-- Left column which holds the page availability and data settings options -->
      <v-col class="leftPanels">
        <!-- Admin page title block -->
        <v-row class="rowSeparators">
          <v-card class="cardStyles">
            <h1> - Admin Panel - </h1>
            <p class="adminSubhead">Manage data, view analytics, and modify users</p>
          </v-card>
        </v-row>
        <!-- Page availability card section -->
        <v-row class="rowSeparators">
          <v-card class="cardStyles">
            <h2>Page Availability</h2>
            <p>Controls to disable or enable certain pages</p>
            <v-row><v-switch v-model="courses" class="mx-2 pageSwitch"></v-switch><p class="switchLabels">Courses</p></v-row>
            <v-row><v-switch v-model="treeview" class="mx-2 pageSwitch"></v-switch><p class="switchLabels">TreeView</p></v-row>
            <v-row><v-switch v-model="infoLinks" class="mx-2 pageSwitch"></v-switch><p class="switchLabels">Info & Quick Links</p></v-row>
          </v-card>
        </v-row>
        <!-- Data settings card section -->
        <v-row class="rowSeparators">
          <v-card class="cardStyles">
            <h2>Data Settings</h2>
            <p>Buttons to refresh or clear stored data</p>
            <div class="buttonCluster">
              <v-btn class="mr-2 dataButtons" color="primary">Reset Analytics</v-btn>
              <v-btn class="my-2 dataButtons" color="warning">Refresh Database</v-btn>
              <v-btn class="mr-2 dataButtons" color="error">Redeploy Website</v-btn>
              <v-btn class="my-2 dataButtons" color="deep-purple lighten-1">Wipe User Data</v-btn>
            </div>
          </v-card>
        </v-row>
      </v-col>

      <!-- Right column is a container with two tabs -->
      <v-col class="rightPanels">
        <v-row class="rowSeparators">
          <v-card class="cardStyles">
            <!-- Tab sections -->
            <v-tabs background-color="transparent" color="primary" grow>
              <v-tab v-on:click="selectedTab('A')"><b>Analytics</b></v-tab>
              <v-tab v-on:click="selectedTab('U')"><b>Users</b></v-tab>
            </v-tabs>
            <!-- If they selected the analytics tab (default) -->
            <v-container class="contentContainer" v-if="this.tab==='A'">
              <v-row class="analyticsHeader">
                <h2>App Analytics</h2>
                <div class="visitButtons">
                  <v-btn small class="mx-1" color="primary">Daily</v-btn>
                  <v-btn small class="mx-1" color="warning">Weekly</v-btn>
                  <v-btn small class="mx-1" color="accent">Monthly</v-btn>
                  <v-btn small class="mx-1" color="error">Yearly</v-btn>
                </div>
              </v-row>
              <v-row>
                <v-col>
                  <h3>Page Visits</h3>
                  <v-row class="chartDivs">
                    <GChart class="charts" type="ColumnChart" :data="visitsData"/>
                  </v-row>
                  <h3>Top Used Quick Links</h3>
                  <v-row class="chartDivs">
                    <GChart class="charts" type="PieChart" :data="popularData"/>
                  </v-row>
                </v-col>
                <v-col>
                  <h3>Most Popular Treeview Courses</h3>
                  <v-row class="chartDivs">
                    <GChart class="charts" type="PieChart" :data="popularData"/>
                  </v-row>
                  <h3>Number of New Users</h3>
                  <v-row class="chartDivs">
                    <GChart class="charts" type="LineChart" :data="visitsData"/>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
            <!-- Else if they want to view the users -->
            <v-container class="contentContainer" v-else>
              <!-- Using a datatable to display the user information -->
              <!-- Able to search the table and default sort is by users name -->
              <v-data-table :headers="userHeaders" :items="users" sort-by="user" :search="search">
                <template v-slot:top>
                  <v-toolbar flat color="white">
                    <!-- Header section with the title and search bar -->
                    <v-toolbar-title><h3>Users</h3></v-toolbar-title>
                    <v-divider class="mx-4" inset vertical/>
                    <v-text-field class="userSearch" v-model="search" label="Search for User" single-line hide-details/>
                    <!-- This is popup for when they want to edit a users details -->
                    <v-dialog v-model="dialog" max-width="500px">
                      <!-- Create the card with all the details and stuff -->
                      <v-card>
                        <v-card-title>
                          <span class="headline">Edit User</span>
                        </v-card-title>
                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.user" label="User Name"></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.lvl" label="Access Level"></v-text-field>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                          <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>

                  </v-toolbar>
                </template>
                <!-- Add in the edit and delete icons for each row in the table -->
                <template v-slot:item.action="{ item }">
                  <a class="mr-2" @click="editItem(item)"><font-awesome-icon :icon="['fa', 'edit']"/></a>
                  <a @click="deleteItem(item)"><font-awesome-icon :icon="['fa', 'trash']" color="red"/></a>
                </template>

              </v-data-table>
            </v-container>

          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: 'AdminPage',
  data: () => ({
    tab: 'A',
    courses: true,
    treeview: true,
    infoLinks: true,
    visitsData: [
      ['Year', 'Sales', 'Expenses', 'Profit'],
      ['2014', 1000, 400, 200],
      ['2015', 1170, 460, 250],
      ['2016', 660, 1120, 300],
      ['2017', 1030, 540, 350]
    ],
    popularData: [
      ['', ''],
      ['CSCA08H3', 40],
      ['MATA37H3', 10],
      ['CSCD58H3', 25],
      ['CSCD27H3', 20],
      ['LINA01H3', 5]
    ],
    dialog: false,
    search: '',
    userHeaders: [
      { text: 'User', align: 'left', value: 'user' },
      { text: 'Access Level', value: 'lvl' },
      { text: 'Last Login', value: 'login' },
      { text: 'Actions', value: 'action', sortable: false }
    ],
    users: [
      { user: 'Justin', lvl: 'Admin', login: 'Jan 1/2020' },
      { user: 'RAHOOOOOOL', lvl: 'Admin', login: 'Jan 2/2020' },
      { user: 'BOB', lvl: 'User', login: 'Jan 4/2020' },
      { user: 'Ashley', lvl: 'User', login: 'Jan 23/2020' },
      { user: 'Test1', lvl: 'Admin', login: 'Jan 5/2020' },
      { user: 'Test2', lvl: 'Admin', login: 'Jan 4/2020' },
      { user: 'Test3', lvl: 'Admin', login: 'Jan 18/2020' },
      { user: 'Test4', lvl: 'Admin', login: 'Jan 22/2020' },
      { user: 'Michael', lvl: 'User', login: 'Jan 3/2020' }
    ],
    editedIndex: -1,
    editedItem: {
      user: '',
      lvl: '',
      login: ''
    },
    defaultItem: {
      user: '',
      lvl: '',
      login: ''
    }
  }),
  methods: {
    // Method to toggle which container to show (Analytics or Users)
    selectedTab (tab) {
      if (tab === 'A') {
        this.tab = 'A'
      } else {
        this.tab = 'U'
      }
    },
    // This method is for when they want to edit a users info. Get the index of user assign new vals and close popup
    editItem (item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    // This method will get the index of desired user and confirm before splicing it out
    // Will have to modify and add an API call for when deleting in the database
    deleteItem (item) {
      const index = this.users.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.users.splice(index, 1)
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    // Saves the modifications made on the user
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], this.editedItem)
      } else {
        this.users.push(this.editedItem)
      }
      this.close()
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  }
}
</script>

<style scoped>
  h1{
    text-align: center;
  }
  .cardStyles{
    padding: 15px;
    width: 100%;
  }
  .leftPanels{
    max-width: 25%;
  }
  .rightPanels{
    max-width: 75%;
    padding-left: 10px;
    padding-right: 10px;
  }
  .rowSeparators{
    padding: 0 10px 20px;
  }
  .chartDivs{
    max-width: 100%;
    height: 300px;
  }
  .charts{
    width: 100%;
    height: 100%;
  }
  .visitButtons{
    margin-left: 20px;
    margin-top: 3px;
  }
  .userSearch{
    max-width: 30%;
    float: right;
  }
  .adminContainer{
    padding: 25px 0 0 0;
    min-width: 95%;
    min-height: 93.5vh;
    background-color: #3b5998;
  }
  .contentContainer{
    padding-bottom: 0;
    padding-top: 20px;
  }
  .analyticsHeader{
    padding-left: 12px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .dataButtons{
    width: 185px;
    color: white;
  }
  .buttonCluster{
    padding-left: 3%;
  }
  .adminSubhead{
    text-align: center;
    font-weight: bold;
  }
  .pageSwitch{
    margin-top: 0;
    padding-left: 10px;
  }
  .switchLabels{
    padding-top: 2px;
    font-size: 13pt;
    font-weight: bold;
  }
</style>
