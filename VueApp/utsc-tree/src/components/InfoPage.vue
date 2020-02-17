<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <!-- This row will house the contact info cards-->
        <v-row>
          <h3>Contacts</h3>
          <v-container class="contactCard">
            <ContactCards/>
          </v-container>
        </v-row>
        <!-- This row will contain all the quick links -->
        <v-row>
          <h3>Quick Links</h3>
          <v-container class="quickCard">
            <v-card class="card">
              <ul class="tripleList">
                <li class="qlink"><a href="https://www.utsc.utoronto.ca/registrar/dates-and-deadlines" target="_blank">Dates & Deadlines</a></li>
                <li class="qlink"><a href="https://www.utsc.utoronto.ca/regoffice/timetable/timetable.php" target="_blank">Course Timetable</a></li>
                <li class="qlink"><a href="https://www.utsc.utoronto.ca/registrar/examination-schedule" target="_blank">Exam Schedules</a></li>
                <li class="qlink"><a href="https://www.acorn.utoronto.ca" target="_blank">ACORN</a></li>
                <li class="qlink"><a href="https://idpz.utorauth.utoronto.ca/idp/profile/SAML2/Redirect/SSO;jsessionid=EDDE3B46C59D5DF90611387C8058AEA6?execution=e1s1" target="_blank">Quercus</a></li>
                <li class="qlink"><a href="https://idpz.utorauth.utoronto.ca/idp/profile/SAML2/Redirect/SSO?execution=e2s1" target="_blank">WebOption</a></li>
                <li class="qlink"><a href="https://intranet.utsc.utoronto.ca/home.php?login=1" target="_blank">Intranet</a></li>
                <li class="qlink"><a href="https://weblogin.utoronto.ca/index.cgi" target="_blank">WebMail</a></li>
                <li class="qlink"><a href="https://utsc-utoronto-csm.symplicity.com/students/?signin_tab=0&signin_tab=0" target="_blank">CSM</a></li>
                <li class="qlink"><a href="https://www.utsc.utoronto.ca/regoffice/eservice/student/index.php" target="_blank">eService</a></li>
                <li class="qlink"><a href="https://www.utsc.utoronto.ca/home/" target="_blank">UTSC Home</a></li>
                <li class="qlink"><a href="https://utsc.calendar.utoronto.ca" target="_blank">UTSC Calendar</a></li>
              </ul>
            </v-card>
          </v-container>
        </v-row>
      </v-col>

      <v-divider vertical/>
      <!-- Right column will hold quick info about UTSC -->
      <v-col class="rightColumn">
        <v-container class="rightContainer">
          <h3>UTSC Quick Info</h3>
          <!-- This row will hold the utsc Google map -->
          <v-row>
            <GoogleMaps/>
          </v-row>
          <!-- Text and link info -->
          <h3>Address & Contact Information</h3>
          <div class="utscInfo">
            <p><b>Address: </b>1265 Military Trail, Scarborough, ON M1C 1A4 <br>
              <b>Phone: </b>(416) 287-8872 <br>
              <b>Campus Police (EMERGENCY!): </b>(416) 978-2222 <br>
              <b>Campus Police (General): </b>(416) 287-7398</p>
          </div>
          <h3>Campus Map & Parking Info</h3>
          <ul class="utscList">
            <li><a href="https://www.utsc.utoronto.ca/home/sites/utsc.utoronto.ca.home/files/docs/UTSC_Campus_Map_2015.pdf" target="_blank">Campus Map</a></li>
            <li><a href="https://www.utsc.utoronto.ca/parking/dailyvisitor-parking-rates" target="_blank">Parking Information</a></li>
          </ul>
          <h3>Social Media</h3>
          <a class="twitterIcon" href='https://twitter.com/UTSC?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' target="_blank"> <font-awesome-icon :icon="['fab', 'twitter']" size="2x"/></a>
          <a class="facebookIcon" href='https://www.facebook.com/UofTScarborough/' target="_blank"> <font-awesome-icon :icon="['fab', 'facebook-square']" size="2x"/></a>
          <a class="instagramIcon" href='https://www.instagram.com/utsc/' target="_blank"><img src="../assets/instaIcon.png" height="28.5" width="28.5"/></a>
          <a class="linkedinIcon" href='https://www.linkedin.com/school/university-of-toronto/' target="_blank"> <font-awesome-icon :icon="['fab', 'linkedin-in']" size="2x"/></a>

        </v-container>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import ContactCards from './ContactCards'
import GoogleMaps from './GoogleMaps'
export default {
  name: 'InfoPage',
  components: {
    GoogleMaps,
    ContactCards
  }
}
</script>

<style scoped>
  li{
    padding-top: 15px;
    font-size: 14pt;
  }
  a:hover {
  color: skyblue;
  }
  a:link{
    text-decoration: none;
  }
  .rightColumn{
    max-width: 37%;
  }
  .rightContainer{
    padding-top: 0;
    padding-left: 40px;
  }
  .quickCard{
    padding-right: 6%;
    padding-left: 2%;
    align-content: center;
  }
  .card{
    background-color: white;
  }
  .contactCard{
    padding-right: 5%;
  }
  .tripleList{
    width: auto;
    overflow: hidden;
    margin-top: 10px;
    margin-bottom: 10px;
    list-style: circle;
    padding-top: 2px;
    padding-bottom: 15px;
  }
  .tripleList li{
    width: 33.333%;
  }
  .qlink{
    padding-top: 15px;
    float: left;
    display: inline;
    text-align: -webkit-match-parent;
    font-weight: bold;
  }
  .utscInfo{
    padding-top: 10px;
    padding-left: 20px;
  }
  .utscList{
    padding-left: 20px;
    list-style: none;
    padding-bottom: 20px;
  }
  .instagramIcon{
    padding-top: 5px;
  }
  .instagramIcon :hover{
    color: skyblue;
    padding-top: 5px;
  }
  .twitterIcon{
    padding-left: 20px;
    padding-right: 15px;
    color: #55acee;
  }
  .facebookIcon{
    padding-right: 15px;
    color: #3b5998;
  }
  .linkedinIcon{
    padding-left: 15px;
    color: #0976b4;
  }

</style>
