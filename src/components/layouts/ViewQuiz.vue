<template>
  <div class="oneAnswer">
    <div class="grid-item question-header"></div>
    <div class="grid-item">
      <span class="question-div">{{ question }}</span>
      <!-- <textarea
        class="question-input"
        rows="4"
        maxlength="350"
        v-model="question"
      ></textarea> -->
    </div>
    <div class="grid-item answer-header"><p>Варианты ответов</p></div>
    <div class="grid-item answer">
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
          <span class="answer-input">{{ answer.text }}</span>
          <!-- <input class="answer-input" readonly="true" v-model="answer.text" /> -->
        </div>
      </div>
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
      // answerItem(newAnswer, oldAnswer) {
      //   for (let i = 0; i < this.answers.length; i++) {
      //     if (this.answers[i] === newAnswer) {
      //       this.answers[i].isTrue = true;
      //     } else {
      //       this.answers[i].isTrue = false;
      //     }
      //   }
      // },
    },
  },
};
</script >
<style>
.builder-quiz {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: 100%;
  width: 100%;
  margin-right: 10px;
}
.quiz-sidebar {
  flex-basis: 20%;
  overflow: auto;
}
.builder-content {
  flex-basis: 80%;
  background-color: rgb(241, 240, 240);
}
.grid {
  display: grid;
  grid-auto-flow: row;
  margin: 10px 15px;
  background-color: rgb(255, 255, 255);
}
.grid-item2 {
  width: 100%;
  padding: 0 20px;

}
.quiz-header {
  display: flex;
  flex-direction: row;
}
.select {
  padding: 5px;
  border: 1px solid #000;
  border-radius: 10px;
  outline: none;
}
.save-button {
  padding: 5px;
  margin-top: 5px;
  margin-left: 50px;
  margin-bottom: 10px;
  margin-right: 100px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 10px;
}
.add-button {
  padding: 5px;
  margin-top: 15px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 10px;
}
.question-input {
  width: 90%;
  padding: 3px;
  resize: none;
}
.question-div{
  border: 1px solid black;
  padding: 10px;
  margin-top: 20px;
}
.answer-header-item {
  display: flex;
  flex-direction: row;
  font-size: 12px;
  color: rgb(197, 197, 197);
  font-weight: 250;
}
.answer-header-item span {
  margin-right: 5px;
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
.answer-input {
  width: 90%;
  padding: 3px;
  border: none;
  outline: none;
}
.delete-answer {
  border-radius: 50%;
  background-color: #fff;
  width: 30px;
  border: 1px solid black;
}
button:hover {
  background-color: rgb(197, 197, 197);
}
.question-header {
  display: flex;
  justify-content: space-between;
}
</style>
