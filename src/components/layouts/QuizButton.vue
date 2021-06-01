<template>
 
    <button class="buttonQuiz" v-if="isQ !== 0" @click="quizButtonClick(id)">задания</button>
  
</template>

<script>
import { getQuizBySectionId } from "../../services/quiz.service";
export default {
  name: "QuizButton",
  props: ["section"],
  async mounted() {
    await getQuizBySectionId(this.id).then((result) => {
          this.isQ = result.length;
    });
  },
  data() {
    return {
      id: this.section._id,
      isQ: "",
    };
  },
  methods: {
    quizButtonClick(sectionId){
      this.$emit("quizButtonClick", sectionId)
    }
  },
};
</script>
<style>
.buttonQuiz{
  background-color: #cfd4cf;
  margin-top: 3px;
  border: none;
  padding: 5px 0px;
  height: 30px;
}
</style>
