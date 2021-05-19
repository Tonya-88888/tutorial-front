<template>
  <div class="vieTutorial">
    <div class="vieSidebar">
      <div class="titleSection">Содержание:</div>
      <div class="itemSection" v-for="item in sections" :key="item._id">
       
          <button @click="editSection(item.content)">
            {{ item.name }}
          </button>
        
      </div>
    </div>
  <div class= "contentVieTutorial" v-html="contentTuto"></div> 
  </div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
  name: "VieTutorial",
  props: ["sections"],
    components: {
    QuillEditor,
  },
  data() {
    return {
      contentTuto: "",
    };
  },
  methods: {
    editSection(contentTuto) {
      this.contentTuto = contentTuto;
    },
  },
};
</script>

<style lang="css">
.vieTutorial {
  display: grid;
  grid-template-columns: 1fr 5fr;
  position: fixed;
}
.contentVieTutorial{

    box-sizing: border-box;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    padding: 12px 15px;
    -o-tab-size: 4;
    tab-size: 4;
    -moz-tab-size: 4;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
}
.vieSidebar {
  border-radius: 10px;
  background-color: #ffff;
  padding: 5px;
  margin-top: 10px;
  margin-left: 40px;
}
.titleSection {
  color: black;
  font-size: 16px;
  margin: 10px;
}
.itemSection {
  display: flex;
  flex-direction: column;
}
.link-container25 {
  display: flex;
  flex-direction: column;
}
</style>
