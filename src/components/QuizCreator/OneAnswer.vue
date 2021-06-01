<template>
  <div class="oneAnswer">
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
        :key="answer.id"
      >
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
import { mapActions } from "vuex";
export default {
  name: "OneAnswer",
  props: ["quizData"],
  mounted() {
    if (this.quizData === "") {  
      this.answers  = [
        { text: "", isTrue: false },
       
      ];
    } else {
      this.updateButton = true;
      this.question =this.quizData.question;
      this.answers = this.quizData.answers;
    }
  }
  
  ,
  data() {
    return {
      question: "",
      answers: "",
      answerItem: {},
      updateButton: false,
    };
  },
  methods: {
    ...mapActions(["fetchQuiz", "updateQuiz"]),
    addAnswer() {
      this.answers.push({ text: "", isTrue: false });
    },
    deleteAnswer(indexs) {
      if (this.answers.length !== 1) {
        this.answers.splice(indexs, 1);
      }
    },
    async saveQuiz() {
      let allTextFilled = true;
      for (let i = 0; i < this.answers.length; i++) {
        // проверим все ответы на заполненность
        if (this.answers[i].text.length === 0) {
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
          answers: this.answers,
          id_Section: this.$route.params.sectionId,
        };

        await addQuiz(tmp).then((result) => {
          alert("Вопрос сохранён");
          this.answers.length = 0;
          this.question = "";
        });
        this.fetchQuiz();
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
          type: 2,
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
  },
  watch: {
      quizData: {
      handler: function (val, oldVal) {
        if (val === "") {
           this.updateButton = false;
          this.answers = [
            { text: "", isTrue: false },
           
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
