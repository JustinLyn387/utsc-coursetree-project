<template>
  <v-container class="mainContainer">
    <v-row class="mainRow">
      <v-col class="mainCol">
        <v-card shaped class="feedbackCard">
          <v-row>
            <v-col class="innerColumn">
              <v-container class="pa-0">
                <v-col>
                  <v-row class="innerRow">
                    <h2>- Leave Feedback -</h2>
                    <p class="feedbackSection">Let us know how your experience was, we'd love to know!
                      If you have any feedback or feature requests, let us know by clicking the button below and filling out the form!
                      <br><br>Don't have time? Leave a quick rating for now
                    </p>
                  </v-row>
                  <v-row class="innerRow">
                    <v-rating class="ratingStars" v-model="rating" color="yellow darken-3" background-color="grey darken-1" empty-icon="$ratingFull"
                              half-increments hover medium>
                    </v-rating>
                  </v-row>
                  <v-row class="text-md-center pt-2">
                    <v-flex>
                      <!--- v-flex is centered now, but we need to center button inside v-flex -->
                      <div class="text-xs-center">
                        <v-btn class="mr-3" color="green accent-3">Feedback Form</v-btn>
                        <v-btn class="ml-3" color="primary">Submit Rating</v-btn>
                      </div>
                    </v-flex>
                  </v-row>
                </v-col>

              </v-container>
            </v-col>
            <v-divider vertical/>
            <v-col class="innerColumn">
              <v-container class="pa-0">
                <v-col>
                  <v-row class="innerRow pb-2">
                    <h2>- Developer Messages -</h2>
                  </v-row>
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
              </v-container>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mainRow">
      <v-col class="mainCol">
        <v-card shaped class="px-8">
          <h2 class="sectionHeaders">- Updates & Releases -</h2>
          <v-timeline>
            <!-- Use a loop to create the timeline -->
            <v-timeline-item v-for="(item, i) in releaseItems.slice().reverse()" :key="i" :color="item.color" small>
              <template v-slot:opposite>
                <span :class="`headline font-weight-light ${item.color}--text`" v-text="item.date"></span>
              </template>
              <div class="py-4">
                <h2 :class="`headline font-weight-bold mb-4 ${item.color}--text`">{{ item.title }}</h2>
                <div>
                  {{ item.message }}
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card>
      </v-col>
    </v-row>

  </v-container>

</template>

<script>
export default {
  name: 'NewsFeedbackPage',
  data: () => ({
    side: true,
    rating: 4.5,
    // TEMP DATA (Will need to populate on creation and create watchers because admin panel will have the ability to add new things live
    releaseItems: [
      { size: false, color: 'green', title: 'Test 1: Launch', message: 'Test 1 Body Test 1 Body Test 1 Body Test 1 Body Test 1 Body Test 1 Body Test 1 Body Test 1 Body Test 1 Body', date: 'Jan 2020' },
      { size: true, color: 'cyan', title: 'Test 2: New Features', message: 'Test 2 Body Test 2 Body Test 2 Body Test 2 Body Test 2 Body Test 2 Body Test 2 Body Test 2 Body Test 2 Body', date: 'Feb 2020' },
      { size: false, color: 'red', title: 'Test 3: Bug Fix', message: 'Test 3 Body Test 3 Body Test 3 Body Test 3 Body Test 3 Body Test 3 Body Test 3 Body Test 3 Body Test 3 Body', date: 'Mar 2020' },
      { size: true, color: 'red', title: 'Test 4: Bug Fix', message: 'Test 4 Body Test 4 Body Test 4 Body Test 4 Body Test 4 Body Test 4 Body Test 4 Body Test 4 Body Test 4 Body', date: 'Jun 2020' },
      { size: false, color: 'primary', title: 'Test 5: New Features', message: 'Test 5 Body Test 5 Body Test 5 Body Test 5 Body Test 5 Body Test 5 Body Test 5 Body Test 5 Body Test 5 Body', date: 'Nov 2020' },
      { size: true, color: 'pink', title: 'Test 6: Bug Fix', message: 'Test 6 Body Test 6 Body Test 6 Body Test 6 Body Test 6 Body Test 6 Body Test 6 Body Test 6 Body Test 6 Body', date: 'Dec 2020' }
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
  }),
  filters: {

    reverse: function (arr) {
      return arr.reverse()
    }

  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  h3{
    color:white;
  }
  h2{
    font-family: 'Montserrat';
  }
  .sectionHeaders {
    padding-top: 20px;
    padding-bottom: 10px;
    text-align: center;
  }
  .mainContainer{
    max-width: 90%;
    padding-top: 25px;
    background-color: #E3F2FD;
  }
  .mainRow{
    justify-content: center;
    padding-bottom: 20px;
  }
  .innerRow{
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;
  }
  .mainCol{
    max-width: 80%;
  }
  .innerColumn{
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 5px;
  }
  .newsFeed{
    max-height: 400px;
    padding-left: 10px;
    padding-right: 10px;
    overflow-y: auto;
  }
  .feedList{
    width: 100%;
  }
  .feedbackSection{
    text-align: center;
    font-size: 14pt;
    padding: 40px 20px 5px;
  }
  .feedbackCard{
    padding-left: 10px;
    padding-right: 10px;
  }
  .ratingStars{
    padding-bottom: 40px;
  }

</style>
