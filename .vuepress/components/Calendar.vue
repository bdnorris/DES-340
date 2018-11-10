<template>
  <div>
    <!-- <p>cal start: {{ calStart }}</p> -->
    <ul>
      <li v-for="event in events">
        <span>{{ parseDate(event.start.date) }}</span>
        <strong>{{ event.summary }}</strong>
      </li>
    </ul>
    <div>
      <!-- <iframe src="https://calendar.google.com/calendar/embed?showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=buncuq6n9adeuvap19g0o32u7s%40group.calendar.google.com&amp;color=%238C500B&amp;ctz=America%2FChicago" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe> -->
    </div>
  </div>
</template>

<script>
const axios = require('axios')  
export default {
  props: {
    calId: String
  },
  data: function() {
    return {
      baseUrl: 'https://www.googleapis.com/calendar/v3/calendars/',
      // calId: 'buncuq6n9adeuvap19g0o32u7s%40',
      calKey: 'AIzaSyCDDbbwlEYHKgv6JJTLiObQyQRnGkB1nYg',
      calStart: '',
      // events: [''],
      events: [],
      apiIP: false,
      counter: 1,
    }
  },
  beforeMount () {
    let now = new Date();
    // this.calStart = this.now.getFullYear()+this.now.getMonth()+this.now.getDate()+'2017-08-22T10%3A00%3A00-07%3A00';
    this.calStart = now.getFullYear() + '-' + ('0' + (now.getMonth()+1)).slice(-2) + '-' + ('0' + now.getDate()).slice(-2) + 'T10%3A00%3A00-07%3A00';
    
    this.getEvents();
  },
  mounted () {
    console.log('events', this.events)
  },
  methods: {
    getEvents() {
      axios.get(this.baseUrl + this.calId + 'group.calendar.google.com/events?showDeleted=false&key='+this.calKey+'&timeMax=2019-06-30T10%3A00%3A00-07%3A00&timeMin='+this.calStart)
      .then(response => {
        console.log('response', response);
        this.$data.events = response.data.items
      })
      .catch(error => {
          console.log(error);
      })
    },
    parseDate(date) {
      let month = date.substring(5, 7);
      let dateS = date.substring(8, 10);
      const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      console.log(parseInt(month));
      let monthName = monthNames[parseInt(month)-1];
      return monthName + ' ' + dateS;
    }
  },
  // computed: {
  //   now: function () {
  //     return Date.now()
  //   }
  // }
}

</script>
