<template>
  <div>
    <ul>
      <li v-for="event in events">
        {{ event.start.date }}
        {{ event.summary }}
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
  data: function() {
    return {
      url: 'https://www.googleapis.com/calendar/v3/calendars/buncuq6n9adeuvap19g0o32u7s%40group.calendar.google.com/events?showDeleted=false&key=AIzaSyCDDbbwlEYHKgv6JJTLiObQyQRnGkB1nYg&timeMax=2019-06-03T10%3A00%3A00-07%3A00&timeMin=2011-06-03T10%3A00%3A00-07%3A00',
      // events: [''],
      events: [],
      apiIP: false,
      counter: 1,
    }
  },
  beforeMount () {
    this.getEvents();
  },
  mounted () {
    console.log('events', this.events)
  },
  methods: {
    getEvents() {
      axios.get(this.url)
      .then(response => {
        console.log('response', response);
        this.$data.events = response.data.items
      })
      .catch(error => {
          console.log(error);
      })
    },
  }
}

</script>
