<template>
  <div class="defineArea">
    <div class="grid-item question-header"><p>Вопрос</p></div>
    <div class="grid-item">
      <textarea
        class="question-input"
        placeholder="Введите вопрос"
        rows="4"
        maxlength="350"
      ></textarea>
    </div>
    <div class="grid-item answer-header"><p>области</p></div>

    <div class="grid-item answer">
      <div class="area">
        <div class="answer-header-item">
          <span>верный</span><span>область</span>
        </div>
        <hr />
        <div class="answer-item" v-for="answer in data" :key="answer.id">
          <div class="answer-radio">
            <input type="radio" :value="answer.answer" v-model="trueAnswer" />
          </div>
          <div class="answer-div">
            <input
              class="answer-input"
              placeholder="название области"
              :value="answer.answer"
              readonly="true"
            />
          </div>
        </div>
      </div>
      <div class="picture">
        картинка
        <label></label>
     
<img :src="base64Img" >
        <button @click="submitFile()">Submit</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DefineArea",
  data() {
    return {
      data: [
        { answer: "верно", isTrue: true },
        { answer: "не верно", isTrue: false },
      ],
      trueAnswer: "",
      file: "",
      base64Img: "",
    };
  },
  methods: {
    handleFileUpload(){
       this.file = this.$refs.file.files[0];
       this.encodeImage(this.file)
    }, 
    submitFile(){
      let formData = new FormData();
      formData.append('file', this.file);
    },
    encodeImage (input) {
      if (input) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.base64Img = e.target.result
        }
        reader.readAsDataURL(input)
      }
    }
  }
};
</script>
<style>
.defineArea {
  display: grid;
  grid-auto-flow: row;
  margin: 10px 15px;
  background-color: rgb(255, 255, 255);
}
</style>
