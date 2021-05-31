<template>
  <div>
    <button v-if="isQ !== 0" @click="asd">test</button>
  </div>
</template>

<script>
import { getQuizBySectionId, addQuiz } from "../../services/quiz.service";
export default {
  name: "QuizButton",
  props: ["section"],
  async mounted() {
    await getQuizBySectionId(this.id).then((result) => {
      console.log("result", result.length);
      this.isQ = result.length;
    });
  },
  data() {
    return {
      id: this.section._id,
      isQ: "",
    };
  },
  methods: {},
};
</script>
