<template>
  <div class="manyAnswer">
    <div class="grid-item question-header"><p>Вопрос</p></div>
    <div class="grid-item">
      <textarea
        class="question-input"
        placeholder="Введите вопрос"
        rows="4"
        maxlength="350"
      ></textarea>
    </div>
    <div class="grid-item answer-header"><p>Варианты ответов</p></div>

    <div class="grid-item answer">
      <div class="answer-header-item">
        <span>верный</span><span>вариант ответа</span>
      </div>
      <hr />
      <div class="answer-item" v-for="(answer, index) in answers" :key="answer.id">
        <div class="answer-radio">
          <input type="checkbox" :value="answer.answer"  v-model="answer.isTrue" />
        </div>
        <div class="answer-div">
          <input
            class="answer-input"
            placeholder="вариант ответа"
            :value="answer.answer"
          />
        </div>
        <div><button @click="deleteAnswer(index)" class="delete-answer">-</button></div>
      </div>
      <button class="add-button" @click="addAnswer">Добавить ответ</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ManyAnswer",
  props: ["data"],
  data() {
    return {
      manyAnswer: "",
      answers: [
        { answer: "верно", isTrue: true },
        { answer: "не верно", isTrue: false },
      ],
    };
  },
  methods: {
      addAnswer(){
          this.answers.push({ answer: "", isTrue: false })
      },
      deleteAnswer(indexs){
          console.log(this.answers.length);
          if(this.answers.length !== 1){this.answers.splice(indexs, 1);}

      }
  }
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
