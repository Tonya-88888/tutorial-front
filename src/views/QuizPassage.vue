<template>
  <div>
    <ViewQuiz @nextAnswer="nextAnswer" :currQuiz="allQuiz[currQuizIndex]" v-if="showQuiz"></ViewQuiz>
    <div
      
    >
      <!-- {{allQuiz[currQuizIndex]}} -->
    </div>
    <!-- <button class="next-button" @click="nextAnswer">Ответить</button> -->
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
    this.allQuiz = this.getQuizBySectionId(this.$route.params.sectionId);

  },
  data() {
    return {
      currQuizIndex: 0,
      allQuiz: [],
      currQuiz: {},
      showQuiz: true,
    };
  },
 computed: {
    ...mapGetters(["getQuizBySectionId"]),
 },
  methods: {
    ...mapActions(["fetchQuiz"]),
    nextAnswer() {
       this.currQuizIndex += 1;   
    },
  },
  watch: {
    currQuizIndex(newIndex, oldIndex) {
      if(newIndex ===  this.allQuiz.length)
      this.showQuiz = false;
     
    }
  }
};
</script>
<style>

</style>