<template>
  <div class="viewQuiz">
    <div class="item-grid question-header"></div>
    <div class="item-grid question-div">
      <span class="question-span">{{ question }}</span>
    </div>
    <div class="item-grid answer-header">
      <span class="header-span">Варианты ответов</span>
    </div>
    <div class="item-grid answer">
      <hr />
      <div class="answer-item" v-for="answer in answers" :key="answer._id">
        <div v-if="type == 2 || type == 1" class="answer-radio">
          <input type="radio" :value="answer" v-model="answerItem" />
        </div>
        <div v-if="type == 3" class="answer-radio">
          <input
            type="checkbox"
            v-model="answerItem"
            :true-value="true"
            :false-value="false"
          />
        </div>
        <div class="answer-div">
          <span class="answer-span">{{ answer.text }}</span>
          <!-- <input class="answer-input" readonly="true" v-model="answer.text" /> -->
        </div>
      </div>
    </div>
    <div class="item-grid">
      <button class="next-button" @click="nextAnswer">Ответить</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ViewQuiz",
  props: ["currQuiz"],
  mounted() {
    console.log(this.currQuiz);
    if (typeof this.currQuiz !== "undefined") {
      this.question = this.currQuiz.question;
      this.answers = this.currQuiz.answers;
      this.type = this.currQuiz.type;
    }
  },
  data() {
    return {
      answerItem: [],
      question: "",
      answers: "",
      type: 3,
    };
  },
  watch: {
    currQuiz: {
      handler: function (val, oldVal) {
        if (val !== "") {
          this.updateButton = true;
        }

        this.question = val.question;
        this.answers = val.answers;
        this.type = val.type;
      },
    },
  },
  methods: {
    nextAnswer(){
      this.$emit("nextAnswer");
    }
  }
};
</script>
<style>
.viewQuiz {
  margin: 80px;
  border: none;
  border-radius: 20px;
  background-color: rgb(241, 240, 240);
  padding: 20px;
  box-shadow: 0 0 8px;
  padding-bottom: 60px;
}

.question-span {
  font-weight: 400;
  font-style: normal;
}
.header-span {
  font-weight: 200;
  font-style: italic;
  color: rgb(99, 99, 99);
}

.item-grid {
  padding: 0 20px;
  margin-top: 20px;
}

.quiz-header {
  display: flex;
  flex-direction: row;
}

.next-button {
  border-radius: 10px;
  background-color: #ffff;
  padding: 5px;
  margin-top: 10px;
  margin-left: 40px;
}

.question-div {
  height: 100px;
  border: 1px solid rgb(185 185 185);
  padding: 10px;
  margin-top: 20px;
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 10px;
  background-color: rgb(224, 223, 223);
}

.answer-item {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgb(119, 119, 119);
  width: 90%;
}

.answer-radio {
  margin-left: 12px;
  margin-right: 15px;
  margin-top: 4px;
}
.answer-div {
  flex-basis: 100%;
}
.answer-span {
  font-weight: 400;
  font-style: normal;

  width: 90%;
  padding: 3px;
  border: none;
  outline: none;
}

button:hover {
  background-color: rgb(197, 197, 197);
}
.question-header {
  display: flex;
  justify-content: space-between;
}
.next-button {
  border: 1px solid black;
  border-radius: 10px;
  background-color: #ffff;
  padding: 8px;
  margin-top: 10px;
  margin-left: 40px;
  float: right;
  font-weight: 700;
}
</style>
