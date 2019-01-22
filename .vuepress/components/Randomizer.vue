<template>
    <div>
        <ol>
            <li v-for="student in students">{{student}}</li>
        </ol>
        <button type="button" v-on:click="sortStudents">Sort</button>
    </div>
</template>

<script>

export default {
  props: {
    section: {
        type: String,
        default: '301',
    },
  },
  data: function() {
      return {
          students: [],
          section301: ['yo', 'what', 'rick', 'larry', 'sally', 'patricia'],
          section302: ['Rachel Backs',
            'Mitchell Banning',
            'Katelyn Betz',
            'Zachary Boyd',
            'Jess Christensen',
            'Olina Einarsdottir',
            'Kathryn Garbee',
            'Brittany Godat',
            'Samantha Harris',
            'Mikaylah Jones',
            'Shannon Kelly',
            'Lauren Luebbert',
            'Emily Moreno',
            'Eric Spratt',
            'Caleb Stafford'
          ]
      }
  },
  methods: {
    randomList: function(array){

        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;

    },
    sortStudents: function() {
        this.students = []
      if (this.section === '301') {
          this.students = this.randomList(this.section301)
      }
      else if (this.section === '302') {
          this.students = this.randomList(this.section302)
      }
      else {
          console.error('Unrecognized Section')
      }
    }
  },
  created: function() {
      this.sortStudents();
  }
}

</script>