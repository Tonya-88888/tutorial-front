<template>
  <div class="builder">
    <SidebarBuilder
      :sections="getSection"
      
      @chooseSection="chooseSection"
      @rightButtonClick="ctxMenuProcessing"
      @newSectionClick="vieModal = true"
      @newQuizClick="createQuiz"
    >
    </SidebarBuilder>
    <ContextMenu :display="showContextMenu" ref="menu">
      <ul class="context-ul">
        <li @click="deleteClick">удалить</li>
        <li @click="addQuiz">добавить задание</li>
      </ul>
    </ContextMenu>
    <div class="">
      <QuillEditor 
      class="builderContent"
        ref="header"
        :content="contentValue"
        contentType="html"
        theme="snow"
        toolbar="full"
        scrollingContainer: true
      >
      </QuillEditor>
    </div>
    <PopUp
    
      v-if="vieModal"
      @PopUpClickOK="PopUpClickOK"
      @closePopUp="vieModal = false"
    >
      <p>Введите название нового параграфа</p>
    </PopUp>
    <!-- <button @click="getText">сохранить</button> -->
  </div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import SidebarBuilder from "../components/layouts/SidebarBuilder.vue";
import { mapGetters, mapActions } from "vuex";
import PopUp from "../components/layouts/PopUp.vue";
import ContextMenu from "../components/layouts/ContextMenu.vue";
import { getAllSection, addSection } from "../services/section.service";

export default {
  name: "BuilderTutorial",
  components: {
    QuillEditor,
    SidebarBuilder,
    PopUp,
    ContextMenu,
  },
  data() {
    return {
      contentValue: "",
      vieModal: false,
      currSectionpre: "",
      currSection: "",
      showContextMenu: false,
      editElid: "",
    };
  },
  computed: mapGetters([
    "getSection",
    "getCurrSectionId",
    "getCurrSection",
    "getSectionLen",
  ]),
  async mounted() {
    //window.setInterval( console.log, 3000, "3000"); таймер
    this.fetchSection(this.$route.params.tutorialId);
  },

  methods: {
    ...mapActions([
      "fetchSection",
      "createSection",
      "updateSection",
      "deletelSection",
    ]),
    getText() {
      updateSection(this.currSection, {
        content: this.$refs.header.getHTML(),
      }).then((result) => {
        this.fetchSection(this.$route.params.tutorialId);
      });
    },
    async chooseSection(sectionId) {
      if (this.currSection == "") {
        this.currSection = sectionId;
        this.currSectionpre = sectionId;
        let currContent = this.getCurrSection(sectionId).content; //установка контента
        this.$refs.header.setContents(currContent);
      }

      let dbContent = this.getCurrSection(this.currSection).content;
      let currSectionContent = this.$refs.header.getHTML();

      if (dbContent != currSectionContent) {
        await this.updateSection({
          id: this.currSection,
          content: currSectionContent,
        }).then((result) => {});
        await this.fetchSection(this.$route.params.tutorialId);
      }
      this.currSection = sectionId;
      let currContent = this.getCurrSection(sectionId).content; //установка контента
      this.$refs.header.setContents(currContent);
    },
    async PopUpClickOK(SectionName) {
      if (this.currSection !== "") {
        let currSectionContent = this.$refs.header.getHTML(); //сохраняем текущий параграф
        await this.updateSection({
          id: this.currSection,
          content: currSectionContent,
        }).then((result) => {});
      }
      await this.fetchSection(this.$route.params.tutorialId);

      await this.createSection({
        // создаем новый параграф
        name: SectionName,
        id_Tutorial: { _id: this.$route.params.tutorialId },
      });
      this.currSection = this.getCurrSectionId;
      this.vieModal = false;
      this.$refs.header.setContents(""); // текущий контент - пустая строка
    },
    createQuiz(){
     
      this.$router.push({name: "BuilderQuiz", params: { sectionId: this.currSection }});

    },
    ctxMenuProcessing(e, sectionId) {
     
      this.$refs.menu.open(e);
      this.editElid = sectionId;
    },
    async deleteClick() {
      this.$refs.menu.close();
      await this.deletelSection(this.editElid);
      await this.fetchSection(this.$route.params.tutorialId);
      this.currSection = this.currSectionpre;
      let currContent = this.getCurrSection(this.currSection).content; //установка контента
      this.$refs.header.setContents(currContent);
    },
  },
};
</script>

<style lang="css">
.builder {
  display: grid;
  grid-template-columns: 1fr 5fr;
  height: 85vh;
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
.builderContent {
  padding-left: 10px;
  overflow-y: auto;
  height: 72vh;
}
.context-ul {
  list-style-type: none;
    margin-left: 0; /* Отступ слева в браузере IE и Opera */
    padding-left: 0; /* Отступ слева в браузере Firefox, Safari, Chrome */
   }
</style>
