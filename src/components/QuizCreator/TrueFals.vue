<template>
  <div class="trueFalse">
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
      <div class="answer-item" v-for="answer in answers" :key="answer._id">
        <div class="answer-radio">
          <input
            type="radio"
            :checked="answer.isTrue"
            :value="answer"
            v-model="answerItem"
          />
        </div>
        <div class="answer-div">
          <input
            class="answer-input trueFalse-input"
            placeholder="вариант ответа"
            v-model="answer.text"
            readonly="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getQuizBySectionId,
  addQuiz,
  updateQuiz,
} from "../../services/quiz.service";
import { mapActions } from "vuex";
export default {
  name: "TrueFalse",
  props: ["quizData"],
  mounted() {
    if (this.quizData === "") {
      this.answers = [
        { text: "верно", isTrue: false },
        { text: "не верно", isTrue: false },
      ];
     
    } else {
      this.updateButton = true;
      this.question =this.quizData.question;
      this.answers = this.quizData.answers;
    }
  },
  data() {
    return {
      answerItem: {},
      question: "",
      answers: "",
      updateButton: false,
    };
  },
  watch: {
    quizData: {
      handler: function (val, oldVal) {
        if (val === "") {
           this.updateButton = false;
          this.answers = [
            { text: "верно", isTrue: false },
            { text: "не верно", isTrue: false },
          ];
        } else {
          this.updateButton = true;}
          this.question = val.question;
          this.answers = val.answers;
        
      },
     // deep: true,
    },
    answerItem(newAnswer, oldAnswer) {
      for (let i = 0; i < this.answers.length; i++) {
        if (this.answers[i] === newAnswer) {
          this.answers[i].isTrue = true;
        } else {
          this.answers[i].isTrue = false;
        }
      }
    },
  },
  methods: {
    ...mapActions(["fetchQuiz", "updateQuiz"]),
    async saveQuiz() {
      if (
        this.question.length === 0 ||
        Object.keys(this.answerItem).length === 0
      ) {
        alert("НЕ все поля заполнены");
      } else {
        let tmp = {
          type: 1,
          question: this.question,
          answers: this.answers,
          id_Section: this.$route.params.sectionId,
        };

        await addQuiz(tmp).then((result) => {
          console.log(result);
          alert("Вопрос сохранён");
          this.answers.length = 0;
          this.question = "";
        });
        await this.fetchQuiz();
      }
    },
    async updateQuizBtnClick(id) {
      if (
        this.question.length === 0 ||
        Object.keys(this.answerItem).length === 0
      ) {
        alert("НЕ все поля заполнены");
      } else {
        let tmp = {
          type: 1,
          question: this.question,
          answers: this.answers,
          id_Section: this.$route.params.sectionId,
        };
        await this.updateQuiz({ id: id, value: tmp }).then((result) => {
          alert("Вопрос обновлен");
          console.log(result);
        });

        await this.fetchQuiz();
      }
    },
  },
};
</script>
<style>
.trueFalse {
  display: grid;
  grid-auto-flow: row;
  margin: 10px 15px;
  background-color: rgb(255, 255, 255);
}
</style>
