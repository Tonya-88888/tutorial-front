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

        <!--  <input
          type="file"
          ref="file"
          id="file"
          accept="image/*,image/jpeg"
          @change="handleFileUpload()"
        />

        <img src="../../assets/unnamed.png" alt="здесь картинка" /> 
        -->
        <canvas ref="canvas"  
    @mousedown="start"
    @mouseup="finish"
    @mousemove="draw"
    ></canvas>
        <button @click="submitFile($event)">Submit</button>
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
      color: "red",
       ctx: null,
    painting: false,
    };
  },
   mounted() {
    this.ctx = this.$refs.canvas.getContext('2d');
    this.ctx.lineWidth = 5;
    this.ctx.lineCap = 'round';
    this.ctx.strokeStyle = this.color;
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.encodeImage(this.file);
    },
    submitFile(e) {
      this.ctx = this.$refs.canvas.getContext("2d");

      var background = new Image();
       background.src = "../../assets/unnamed.png";

      background.onload = function (e) {
        this.ctx.drawImage(background, 0, 0);
             console.log("img",background );
      };

           
      console.log("sfef");
      // let formData = new FormData();
      // formData.append("file", this.file);
      // axios
      //   .post("/single-image", formData, {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   })
      //   .then(function () {
      //     console.log("SUCCESS!!");
      //   })
      //   .catch(function () {
      //     console.log("FAILURE!!");
      //   });
    },
    encodeImage(input) {
      if (input) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.base64Img = e.target.result;
        };
        reader.readAsDataURL(input);
      }
      
    },
     start(e) {
      this.painting = true;
      this.ctx.beginPath();
    },
    finish(e) {
      this.stroke(e);
      this.painting = false;
    },
    draw(e) {
      if (this.painting) {
        this.stroke(e);
        this.ctx.beginPath();
        this.ctx.moveTo(e.offsetX, e.offsetY);
      }
    },
    stroke(e) {
      this.ctx.lineTo(e.offsetX, e.offsetY);
      this.ctx.stroke();
    },
  },
};
</script>
<style>
.defineArea {
  display: grid;
  grid-auto-flow: row;
  margin: 10px 15px;
  background-color: rgb(255, 255, 255);
}
.agent {
  opacity: 0;
  position: absolute;
  height: 300px;
  width: 300px;
  padding: 0px;
  margin: 0px;
}
.disguise {
  height: 300px;
  width: 300px;
}
</style>
