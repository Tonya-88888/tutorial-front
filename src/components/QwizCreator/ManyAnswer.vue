<template>
  <div class="manyAnswer">
    <div class="grid-item question-header">
      <p>Вопрос</p>
      <button class="save-button" @click="saveQwiz">Сохранить вопрос</button>
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
      <div
        class="answer-item"
        v-for="(answer, index) in data"
        :key="answer._id"
      >
        <div class="answer-radio">
          <input
            type="checkbox"
            v-model="answer.isTrue"
            :true-value="true"
            :false-value="false"
            @change="changeCheck()"
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
          <button @click="deleteAnswer(index)" class="delete-answer">X</button>
        </div>
      </div>
      <button class="add-button" @click="addAnswer">Добавить ответ</button>
    </div>
  </div>
</template>
<script>
import { getQwizBySectionId, addQwiz } from "../../services/qwiz.service";
export default {
  name: "ManyAnswer",
  data() {
    return {
      question: "",
      manyAnswer: "",
      data: [{ text: "", isTrue: false }],
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
    changeCheck() {},
    async saveQwiz() {
      let allTextFilled = true;
      let answerSelected = false;
      // проверим все ответы на заполненность
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].text.length === 0) {
          allTextFilled = false;
          break;
        }
      }
      // проверим выбран ли хотя бы 1 вариант
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].isTrue) {
          answerSelected = true;
          break;
        }
      }
      if (
        this.question.length === 0 ||
        !allTextFilled || !answerSelected
      ) {
        alert("НЕ все поля заполнены");
      } else {
         console.log("Все поля заполнены");
        let tmp = {
          type: 3,
          question: this.question,
          answers: this.data,
          id_Section: this.$route.params.sectionId,
        };
        console.log(tmp);
        await addQwiz(tmp).then((result) => {
          console.log(result);
          alert("Вопрос сохранён");
          this.data.length = 0;
          this.question = "";
        });
      }
    },
  },
};
</script>
<style>
.manyAnswer {
  display: grid;
  grid-auto-flow: row;
  margin: 10px 15px;
  background-color: rgb(255, 255, 255);
}
</style>
