<template>
  <div class="vieTutorial">
    <div class="vieSidebar">
      <div class="titleSection">Содержание:</div>
      <div class="itemSection" v-for="item in sections" :key="item._id">
        <button @click="editSection(item.content,item._id )">
          {{ item.name }}
        </button>
      </div>
    </div>
<div class="contentVieTutorial" ref="content" @scroll="scrollContent">
      <QuillEditor
      @scroll="scrollContent"
        ref="view"
        :content="contentTuto"
        contentType="html"
        theme="bubble"
        readOnly=true
        enable=false
        scrollingContainer: true
      ></QuillEditor>
   </div>
  </div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
import e from 'cors';

export default {
  name: "ViewTutorial",
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
    editSection(contentTuto, id) {
      this.contentTuto = contentTuto;
      this.$refs.view.setContents(contentTuto);
      this.$emit("editSection",id )
    },
    scrollContent(){
      
      console.log(
    "↓↑ end:", this.$refs.content.scrollHeight === this.$refs.content.scrollTop + this.$refs.content.clientHeight,

    this.$refs.content.scrollHeight, this.$refs.content.scrollTop, this.$refs.content.clientHeight
  );
    
    }
  },
};
</script>

<style lang="css">
.vieTutorial {
    display: grid;
    grid-template-columns: 1fr 5fr;
    position: fixed;
   background-color: #c9c9c9;
    border-radius: 20px;
    width: 100%;
}
.contentVieTutorial {
  border-color: black;
    margin: 10px 10px 10px 10px;
    /* border: 1px solid black; */
    background-color: white;
    border-radius: 10px;
  padding-left: 10px;
  overflow-y: auto;
  height: 78vh;
      width: 97%;
}
.vieSidebar {
  border-radius: 10px;
  background-color: #c9c9c9;
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
