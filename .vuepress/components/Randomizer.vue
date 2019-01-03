<template>
    <div>
        <ul>
            <li v-for="student in students">{{student}}</li>
        </ul>
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
          students = [],
          section301: ['yo', 'what', 'rick', 'larry', 'sally', 'patricia'],
          section302: ['no', 'way']
      }
  },
  mounted: function() {
      if (this.section === '301') {
          this.students = section301
      }
      else if (this.section === '302') {
          this.students = section302
      }
      else {
          console.error('Unrecognized Section')
      }
  }
}