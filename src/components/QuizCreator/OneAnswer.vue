<template>
  <div class="oneAnswer">
    <div class="grid-item question-header">
      <p>Вопрос</p>
      <button class="save-button" @click="saveQuiz">Сохранить вопрос</button>
    </div>
    <div class="grid-item">
      <textarea
        class="question-input"
        placeholder="Введите вопрос"
        rows="4"
        maxlength="350"
        v-model="question"
      ></textarea>
    </div>
    <div class="grid-item answer-header"><p>Варианты ответов</p></div>

    <div class="grid-item answer">
      <div class="answer-header-item">
        <span>верный</span><span>вариант ответа</span>
      </div>
      <hr />
      <div class="answer-item" v-for="(answer, index) in data" :key="answer.id">
        <div class="answer-radio">
          <input
            type="radio"
            :value="answer"
            :checked="answer.isTrue"
            v-model="answerItem"
          />
        </div>
        <div class="answer-div">
          <input
            class="answer-input"
            placeholder="вариант ответа"
            v-model="answer.text"
          />
        </div>
        <div>
          <button class="delete-answer" @click="deleteAnswer(index)">X</button>
        </div>
      </div>
      <button class="add-button" @click="addAnswer">Добавить ответ</button>
    </div>
  </div>
</template>
<script>
import { getQuizBySectionId, addQuiz } from "../../services/quiz.service";
export default {
  name: "OneAnswer",
  data() {
    return {
      question: "",
      data: [{ text: "", isTrue: true }],
      answerItem: {},
    };
  },
  methods: {
    addAnswer() {
      this.data.push({ text: "", isTrue: false });
    },
    deleteAnswer(indexs) {
      if (this.data.length !== 1) {
        this.data.splice(indexs, 1);
      }
    },
    async saveQuiz() {
      let allTextFilled = true;
      for (let i = 0; i < this.data.length; i++) {
        // проверим все ответы на заполненность
        if (this.data[i].text.length === 0) {
          allTextFilled = false;
          break;
        }
      }
      if (
        this.question.length === 0 ||
        Object.keys(this.answerItem).length === 0 ||
        !allTextFilled
      ) {
        alert("НЕ все поля заполнены");
      } else {
        let tmp = {
          type: 2,
          question: this.question,
          answers: this.data,
          id_Section: this.$route.params.sectionId,
        };
        console.log(tmp);
        await addQuiz(tmp).then((result) => {
          console.log(result);
          alert("Вопрос сохранён");
          this.data.length = 0;
          this.question = "";
        });
      }
    },
  },
  watch: {
    answerItem(newAnswer, oldAnswer) {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i] === newAnswer) {
          this.data[i].isTrue = true;
        } else {
          this.data[i].isTrue = false;
        }
      }
    },
  },
};
</script>
<style>
.oneAnswer {
  display: grid;
  grid-auto-flow: row;
  margin: 10px 15px;
  background-color: rgb(255, 255, 255);
}
.add-button {
  padding: 5px;
  margin-top: 15px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 10px;
}
</style>
