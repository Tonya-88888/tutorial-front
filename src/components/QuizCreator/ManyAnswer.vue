<template>
  <div class="manyAnswer">
    <div class="grid-item question-header">
      <p>Вопрос</p>
      <button class="save-button" v-if="!updateButton" @click="saveQuiz">
        Сохранить задание
      </button>
      <button
        class="save-button"
        v-if="updateButton"
        @click="updateQuizBtnClick(quizData._id)"
      >
        Обновить задание
      </button>
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
        v-for="(answer, index) in answers"
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
import { addQuiz } from "../../services/quiz.service";
import { mapActions } from "vuex";
export default {
  name: "ManyAnswer",
  props: ["quizData"],
  mounted() {
    if (this.quizData === "") {
      this.answers = [{ text: "", isTrue: false }];
    } else {
      this.updateButton = true;
      this.question = this.quizData.question;
      this.answers = this.quizData.answers;
    }
  },
  data() {
    return {
      question: "",
      manyAnswer: "",
      answers: "",
      updateButton: false,
    };
  },
  methods: {
    ...mapActions(["fetchQuiz", "updateQuiz"]),
    addAnswer() {
      this.answers.push({ text: "", isTrue: false });
    },
    async updateQuizBtnClick(id) {
      let allTextFilled = true;
      let answerSelected = false;
      // проверим все ответы на заполненность
      for (let i = 0; i < this.answers.length; i++) {
        if (this.answers[i].text.length === 0) {
          allTextFilled = false;
          break;
        }
      }
      // проверим выбран ли хотя бы 1 вариант
      for (let i = 0; i < this.answers.length; i++) {
        if (this.answers[i].isTrue) {
          answerSelected = true;
          break;
        }
      }
      if (this.question.length === 0 || !allTextFilled || !answerSelected) {
        alert("НЕ все поля заполнены");
      } else {
        console.log("Все поля заполнены");
        let tmp = {
          type: 3,
          question: this.question,
          answers: this.answers,
          id_Section: this.$route.params.sectionId,
        };
        console.log(tmp);
        await this.updateQuiz({ id: id, value: tmp }).then((result) => {
          alert("Вопрос обновлен");
          console.log(result);
        });
        await this.fetchQuiz();
      }
    },
    deleteAnswer(indexs) {
      if (this.answers.length !== 1) {
        this.answers.splice(indexs, 1);
      }
    },
    changeCheck() {},
    async saveQuiz() {
      let allTextFilled = true;
      let answerSelected = false;
      // проверим все ответы на заполненность
      for (let i = 0; i < this.answers.length; i++) {
        if (this.answers[i].text.length === 0) {
          allTextFilled = false;
          break;
        }
      }
      // проверим выбран ли хотя бы 1 вариант
      for (let i = 0; i < this.answers.length; i++) {
        if (this.answers[i].isTrue) {
          answerSelected = true;
          break;
        }
      }
      if (this.question.length === 0 || !allTextFilled || !answerSelected) {
        alert("НЕ все поля заполнены");
      } else {
        console.log("Все поля заполнены");
        let tmp = {
          type: 3,
          question: this.question,
          answers: this.answers,
          id_Section: this.$route.params.sectionId,
        };
        console.log(tmp);
        await addQuiz(tmp).then((result) => {
          console.log(result);
          alert("Вопрос сохранён");
          this.answers.length = 0;
          this.question = "";
        });
      await  this.fetchQuiz();
      }
    },
  },
  watch: {
    quizData: {
      handler: function (val, oldVal) {
        if (val === "") {
          this.answers = [{ text: "", isTrue: false }];
        } else {
          this.updateButton = true;
        }
        this.question = val.question;
        this.answers = val.answers;
      },
    // deep: true,
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
