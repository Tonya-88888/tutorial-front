<template>
  <div>
    <!-- <ViewQuiz :currQuiz="currQuiz"></ViewQuiz> -->
    <div
      
    >
      {{ currQuiz.type}}
    </div>
    <button @click="nextAnswer">acasc</button>
  </div>
</template>
<script>
import ViewQuiz from "../components/layouts/ViewQuiz.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "QuizPassage",

  components: {
    ViewQuiz,
  },
  async mounted() {
    await this.fetchQuiz();

   // console.log(this.getQuizBySectionId(this.$route.params.sectionId));
    // this.allQuiz = this.getQuizBySectionId(this.$route.params.sectionId);
    // console.log(this.allQuiz[0].question)
  },
  data() {
    return {
      currQuizIndex: 0,
     // allQuiz: "",
    };
  },
  computed: {
    ...mapGetters(["getQuizBySectionId"]),
    currQuiz() {
 
if( typeof this.getQuizBySectionId(this.$route.params.sectionId)[this.currQuizIndex] !== "undefined"){
    console.log(this.getQuizBySectionId(this.$route.params.sectionId)[this.currQuizIndex]);
     return this.getQuizBySectionId(this.$route.params.sectionId)[this.currQuizIndex];
}
     
    },
  },

  methods: {
    ...mapActions(["fetchQuiz"]),
    nextAnswer() {
       this.currQuizIndex += 1;
     
    },
  },
};
</script>
