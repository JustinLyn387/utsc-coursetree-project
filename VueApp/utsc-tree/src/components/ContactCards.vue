<template>
  <!-- Container to hold the contact cards -->
  <v-container fluid>
    <v-row dense>
      <!-- Use a for loop to populate the cards in a grid system -->
      <v-col v-for="card in cards"
             :key="card.title"
             :cols="card.flex"
      >
        <!-- Card template where we can set all the information that we want to display --->
        <v-card>
          <v-card-title v-text="card.title" class="display-1 text--primary"/>
          <v-card-subtitle v-text="card.subtitle"/>
          <v-card-text v-text="card.info" class="text--primary" id="lineBreak"/>
          <v-card-actions>
            <v-btn text color="deep-purple accent -4" :href="card.link" target="_blank">
              {{card.website}}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: 'ContactCards',
  data: () => ({
    cards: [
      { title: 'Office of the Registrar',
        subtitle: 'For registration, financial needs, exams, graduation, petitions, TCards, and more.',
        info: 'Location & Hours: Highland Hall (Main Floor)\n\tM,TU,TH: 9:30-4:30 - W: 10:00-4:00 & 5:00-6:45 - F: 9:30-3:00\nTelephone: (416) 287-7001\nEmail: Done through registrar website',
        website: 'Visit Website',
        link: 'https://www.utsc.utoronto.ca/registrar',
        flex: 5 },
      { title: 'Admissions & Recruitment',
        subtitle: 'For information on programs, applications, housing, finances, campus tours, and more.',
        info: 'Location & Hours: Highland Hall (Main Floor)\n\tM,TU,TH: 9:30-4:30 - W: 10:00-4:00 & 5:00-6:45 - F: 9:30-3:00\nTelephone: (416) 287-7529\nEmaill: utsc.admissions@utoronto.ca',
        website: 'Visit Website',
        link: 'https://www.utsc.utoronto.ca/admissions',
        flex: 5 },
      { title: 'Housing & Residence',
        subtitle: 'For any information or inquiries related to facilities, housing, and residence.',
        info: 'Location & Hours: Residence Centre\n\tM-TH: 9:00-7:00 - F: 11:00-5:00\nTelephone: (416) 287-7365\nEmail: residences@utsc.utoronto.ca',
        website: 'Visit Website',
        link: 'https://www.utsc.utoronto.ca/~residences',
        flex: 5 },
      { title: 'IITS Services',
        subtitle: 'IITS provides computing support and voice services to students, faculty and staff through the IITS Service Desk.',
        info: 'Location & Hours: BV487, Library, IC35\n\t*Hours vary per location. Guaranteed across all: M-F: 9:00-5:00\nTelephone: (416) 287-7618\nEmail: student-helpdesk@utsc.utoronto.ca',
        website: 'Visit Website',
        link: 'https://webapps.utsc.utoronto.ca/ccweb',
        flex: 5 }
    ]
  })
}
</script>

<style scoped>
  /* Need this so it creates the new lines and tabs in strings */
  #lineBreak{
    white-space: pre-wrap;
  }

</style>
