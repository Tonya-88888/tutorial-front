<template>
  <div class="builder">
    <SidebarBuilder />

    <div class="content">
      <div class="curentSlide">
        <QuillEditor
          ref="header"
          :content="contentValue"
          contentType="html"
          theme="snow"
          toolbar="full"
        >
        </QuillEditor>
      </div>
    </div>
  </div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import SidebarBuilder from "../components/layouts/SidebarBuilder.vue";

export default {
  name: "BuilderTutorial",
  components: {
    QuillEditor,
    SidebarBuilder,
  },
  data() {
    return { contentValue: "да " };
  },

  methods: {
    getText: function () {
      // this.contentValue =  "<p>Ну привет! работает!!!!</p>" ;

      // let tmp =
      this.$refs.header.setContents(
        `<p><img src="data:image/png;base64,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">да</p>`
      );
      console.log(tmp);
    },
    mounted: function () // для автосохр-ия вызывает console.log по прошествию 3000мс, "3000" - параметр ф-ции
     {window.setInterval( console.log, 3000, "3000");

    },
   
  },
};
</script>

<style lang="css">
.builder {
  display: grid;
  grid-template-columns: 1fr 5fr;

  height: 79vh;
  width: 90vw;
}
.editor {
  background: rgb(255, 255, 255);
}
.curentSlide {
  background: rgb(248, 248, 248);
  outline: 2px solid rgb(197, 197, 197);
  width: 800px;
  height: 450px;
  margin: 0px auto;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
</style>
