<template>
    <div>
        <ol>
            <li v-for="student in students"><span v-html="student"></span></li>
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
          section302: [
            '<a target="_blank" href="https://projects.invisionapp.com/boards/K33SHF2YUAS/">Rachel Backs</a>',
            '<a target="_blank" href="https://projects.invisionapp.com/boards/XD3SHF78UEJ/">Mitchell Banning</a>',
            '<a target="_blank" href="https://projects.invisionapp.com/boards/MB3SHF1GJ97/">Katelyn Betz</a>',
            '<a target="_blank" href="https://projects.invisionapp.com/boards/NE3SAX3PVUQ/">Zachary Boyd</a>',
            '<a target="_blank" href="https://projects.invisionapp.com/boards/BD3SHFFQVYK/">Jess Christensen</a>',
            '<a target="_blank" href="https://projects.invisionapp.com/boards/E23S9PSW8D7/">Olina Einarsdottir</a>',
            '<a target="_blank" href="https://projects.invisionapp.com/boards/9M3SHFDTAQR/">Kathryn Garbee</a>',
            '<a target="_blank" href="https://projects.invisionapp.com/boards/3G3SBXU2YPW/">Brittany Godat</a>',
            '<a target="_blank" href="https://projects.invisionapp.com/boards/FK3S9QL8J5U/">Samantha Harris</a>',
            '<a target="_blank" href="https://projects.invisionapp.com/boards/ND3SHF3RFQU/">Mikaylah Jones</a>',
            '<a target="_blank" href="https://projects.invisionapp.com/boards/V33SARN4SYT/">Shannon Kelly</a>',
            '<a target="_blank" href="https://projects.invisionapp.com/boards/6V3SHFA27U8/">Lauren Luebbert</a>',
            '<a target="_blank" href="https://projects.invisionapp.com/boards/AJ3SHFB7GSF/">Emily Moreno</a>',
            '<a target="_blank" href="https://projects.invisionapp.com/boards/QB3SHF9GVX2/">Eric Spratt</a>',
            '<a target="_blank" href="https://projects.invisionapp.com/boards/BC3SHGR28X6/">Caleb Stafford</a>',
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