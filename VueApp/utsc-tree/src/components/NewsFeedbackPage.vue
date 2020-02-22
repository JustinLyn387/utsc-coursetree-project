<template>
  <v-container class="mainContainer">
    <v-row class="mainRow">
      <!-- Left column for the feeback section and news feed from developers -->
      <v-col class="newsCol">
        <v-row class="newsSubRows">
          <v-card class="newsCard">
            <v-row class="innerNewsRows">
              <h2>Leave Feedback</h2>
              <p>If you have any feedback or feature requests, let us know by clicking the button and filling out the form!</p>
              <v-btn color="green accent-3">Feedback Form</v-btn>
            </v-row>
          </v-card>
        </v-row>
        <!-- News feed row -->
        <v-row class="newsSubRows">
          <v-card class="newsCard">
            <v-row class="innerNewsRows">
              <v-col>
                <h2>Developer Messages</h2>
                <v-row class="newsFeed">
                  <!-- Loop through the array to populate the feed and create the list items -->
                  <v-list two-line class="feedList">
                    <v-list-item-group>
                      <template v-for="(item, index) in newsItems">
                        <v-list-item :key="item.title">
                          <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                            <v-list-item-subtitle class="text--primary" v-text="item.info"></v-list-item-subtitle>
                            <v-list-item-subtitle v-text="item.date"></v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider v-if="index + 1 < newsItems.length" :key="index"></v-divider>
                      </template>
                    </v-list-item-group>
                  </v-list>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-row>
      </v-col>
      <!-- Right column which has the timeline of the website (updates and releases) -->
      <v-col class="timelineCol">
        <h2>Updates & Releases</h2>
        <v-timeline :dense="$vuetify.breakpoint.smAndDown">
          <!-- Use a loop to create the timeline -->
          <v-timeline-item v-for="(item, i) in releaseItems" :key="i" :color="item.color" fill-dot :left="item.side" :small="item.size" >
            <template v-slot:opposite>
              <span>{{ item.date }}</span>
            </template>
            <v-card>
              <v-card-title :class="item.color">
                <h3>{{ item.title }}</h3>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12" md="10">
                    {{ item.message }}
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>

    </v-row>
  </v-container>

</template>

<script>
export default {
  name: 'NewsFeedbackPage',
  data: () => ({
    side: true,
    // TEMP DATA (Will need to populate on creation and create watchers because admin panel will have the ability to add new things live
    releaseItems: [
      { side: false, size: false, color: 'primary', title: 'Test 1: Launch', message: 'Test 1 Body', date: 'Jan 12/2020' },
      { side: true, size: true, color: 'warning', title: 'Test 2: New Features', message: 'Test 2 Body', date: 'Feb 22/2020' },
      { side: false, size: false, color: 'error', title: 'Test 3: Bug Fix', message: 'Test 3 Body', date: 'March 23/2020' },
      { side: true, size: true, color: 'purple', title: 'Test 4: Bug Fix', message: 'Test 4 Body', date: 'June 23/2020' },
      { side: false, size: false, color: 'grey', title: 'Test 5: Bug Fix', message: 'Test 5 Body', date: 'November 23/2020' },
      { side: true, size: true, color: 'red', title: 'Test 6: Bug Fix', message: 'Test 6 Body', date: 'December 25/2020' }
    ],
    newsItems: [
      { title: 'Message 1: A', info: 'Test 1 Body', date: 'January 12/2020' },
      { title: 'Message 2: B', info: 'Test 2 Body', date: 'February 12/2020' },
      { title: 'Message 3: C', info: 'Test  Body', date: 'March 12/2020' },
      { title: 'Message 4: D', info: 'Test 4 Body', date: 'April 12/2020' },
      { title: 'Message 5: E', info: 'Test 5 Body', date: 'May 12/2020' },
      { title: 'Message 6: F', info: 'Test 6 Body', date: 'June 12/2020' },
      { title: 'Message 7: G', info: 'Test 7 Body', date: 'July 12/2020' },
      { title: 'Message 8: H', info: 'Test 8 Body', date: 'July 12/2020' },
      { title: 'Message 9: I', info: 'Test 9 Body', date: 'July 12/2020' },
      { title: 'Message 10: J', info: 'Test 10 Body', date: 'July 12/2020' },
      { title: 'Message 11: K', info: 'Test 11 Body', date: 'July 12/2020' },
      { title: 'Message 12: L', info: 'Test 12 Body', date: 'July 12/2020' },
      { title: 'Message 13: M', info: 'Test 13 Body', date: 'July 12/2020' }
    ]
  })
}
</script>

<style scoped>
  h3{
    color:white;
  }
  h2{
    padding-bottom: 10px;
    text-align: center;
  }
  .mainContainer{
    max-width: 100%;
    padding-top: 25px;
    background-color: #E3F2FD;
  }
  .mainRow{
    justify-content: center;
    padding: 0;
  }
  .newsSubRows{
    padding-bottom: 20px;
  }
  .innerNewsRows{
    padding: 15px;
    justify-content: center;
  }
  .timelineCol{
    padding-right: 45px;
    padding-left: 35px;
    min-width: 65%;
  }
  .newsCol{
    padding-left: 60px;
    min-width: 35%;
    padding-right: 20px;
  }
  .newsCard{
    padding-right: 20px;
    padding-left: 20px;
    max-height: 925px;
    min-width: 100%;
    overflow-y: hidden;
  }
  .newsFeed{
    max-height: 84vh;
    min-width: 100%;
    overflow-y: auto;
  }
  .feedList{
    width: 100%;
  }

</style>
