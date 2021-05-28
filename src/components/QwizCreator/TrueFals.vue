<template>
  <div class="trueFalse">
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
      <div class="answer-item" v-for="answer in data" :key="answer.id">
        <div class="answer-radio">
          <input type="radio" :checked="answer.isTrue" :value="answer" v-model="answerItem" />
          <!-- <input type="checkbox" v-model="answer.isTrue" :true-value="true" :false-value="false" @change="changeCheck()"/> -->
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
import { getQwizBySectionId, addQwiz } from "../../services/qwiz.service";
export default {
  name: "TrueFalse",
  data() {
    return {
      question: "",
      answerItem: {},
      data: [
        { text: "верно", isTrue: false },
        { text: "не верно", isTrue: false },
      ],
    };
  },
  watch: {
    answerItem(newAnswer, oldAnswer) {
      for (let i=0; i < this.data.length; i++) {
        if(this.data[i] === newAnswer){         
          this.data[i].isTrue = true;    
          console.log("true this.data[i]", this.data[i])     
        }
        else{
            this.data[i].isTrue = false;
            console.log("false this.data[i]", this.data[i])
        }
      }
    },
  },
   methods: {
   async saveQwiz() {
      if (this.question.length === 0 || Object.keys(this.answerItem).length === 0) {
        alert("НЕ все поля заполнены");
      } else {
        let tmp = {
          type: 1,
          question: this.question,
          answers: this.data,
          id_Section: this.$route.params.sectionId,
        };
        console.log(tmp);
        await addQwiz(tmp).then((result) => {
          console.log(result);
          alert("Вопрос сохранён")
        });
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
