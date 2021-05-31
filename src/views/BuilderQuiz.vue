<template>
  <div class="builder-quiz">
    <div class="quiz-sidebar">
      <SidebarQuiz :list="Quiz" @createQuiz="addClick"> </SidebarQuiz>
    </div>
    <div class="builder-content">
      <div class="grid">
        <div class="grid-item">
          <div class="quiz-header">
            <div>
              <p>Выберите тип вопроса</p>
              <select class="select" v-model="questionType">
                <option value="1">Верно/неверно</option>
                <option value="2">Выбор одного ответа</option>
                <option value="3">Выбор нескольких ответов</option>
                <option value="4">Краткий ответ</option>
                <option value="5">Последовательность</option>
                <option value="6">Выбор области</option>
              </select>
            </div>
          </div>
        </div>
        <TrueFalse v-if="questionType == 1"></TrueFalse>
        <OneAnswer v-if="questionType == 2"></OneAnswer>
        <ManyAnswer v-if="questionType == 3"></ManyAnswer>
        <Sequence v-if="questionType == 5"></Sequence>
        <DefineArea v-if="questionType == 6"></DefineArea>

        <div class="grid-item feedback-header"><p>Обратная связь</p></div>
        <div class="grid-item feedback"></div>
      </div>
    </div>
  </div>
</template>
<script>
import SidebarQuiz from "../components/layouts/SidebarQuiz.vue";
import TrueFalse from "../components/QuizCreator/TrueFals.vue";
import OneAnswer from "../components/QuizCreator/OneAnswer.vue";
import ManyAnswer from "../components/QuizCreator/ManyAnswer.vue";
import Sequence from "../components/QuizCreator/Sequence.vue";
import DefineArea from "../components/QuizCreator/DefineArea.vue";

export default {
  name: "BuilderQuiz",
  components: {
    SidebarQuiz,
    TrueFalse,
    OneAnswer,
    ManyAnswer,
    Sequence,
    DefineArea,
  },
  data() {
    return {
      trueAnswer: "",
      questionType: "",

      quiz: [{ name: "Задание 1", _id: 1 }],
    };
  },
  methods: {
    addClick() {
      let id = this.quiz.length + 1;
      this.quiz.push({ name: `Задание ${id}`, _id: id });
    },
    saveQuiz() {
      let id = this.quiz.length + 1;
      this.quiz.push({ name: `Задание ${id}`, _id: id });
    },
  },
  computed: {
    OkDisabled() {
      // return this.popUpInput.length === 0;
    },
  },
};
</script>

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
.grid-item {
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
