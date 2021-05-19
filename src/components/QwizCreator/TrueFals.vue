<template>
    <div class="trueFalse">
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
          <div class="answer-item" v-for="answer in data" :key="answer.id">
            <div class="answer-radio">
              <input type="radio" :value="answer.answer" v-model="trueAnswer" />
            </div>
            <div class="answer-div">
              <input
                class="answer-input trueFalse-input"
                placeholder="вариант ответа"
                :value="answer.answer"
                readonly ="true"
              />
            </div>
           
          </div>
        </div>

    </div>
</template>
<script>

export default {
    name: "TrueFalse",
    data(){
        return{
             data: [
        { answer: "верно", isTrue: true },
        { answer: "не верно", isTrue: false },
      ],
            trueAnswer: '',
        }
    }
}
    
</script>
<style >
.trueFalse{
display: grid;
  grid-auto-flow: row;
  margin: 10px 15px;
  background-color: rgb(255, 255, 255);
}
.trueFalse-input{
   
}
</style>