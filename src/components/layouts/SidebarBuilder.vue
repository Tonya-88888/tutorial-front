<template>
  <div class="sidebarBuilder">
    <div class="title">Содержание:</div>
    <div class="item" v-for="item in sections" :key="item._id">
      <button
        class="buttonSection"
        @click="chooseSection(item._id)"
        @click.right="rightButtonClick($event, item._id)"
      >
        {{ item.name }}
      </button>

      <QuizButton :section="item" @quizButtonClick = "quizButtonClick"></QuizButton>
    </div>
    <div>
      <button class="fa fa-plus fa-2x buttonNew" @click="newSectionClick">
       
      </button>
      <!-- <button class="buttonNew" @click="newQuizClick">добавить задание</button> -->
    </div>
  </div>
</template>

<script>
import { getQuizBySectionId, addQuiz } from "../../services/quiz.service";
import QuizButton from "./QuizButton.vue";
export default {
  name: "SidebarBuilder",
  props: ["sections"],
  components: {
    QuizButton,
  },
  data() {
    return {
      doHaveQuiz: "",
      fetone: false,
      id: "",
    };
  },
  methods: {
    newSectionClick() {
      this.$emit("newSectionClick");
    },
    newQuizClick() {
      this.$emit("newQuizClick");
    },
    chooseSection(sectionId) {
      this.$emit("chooseSection", sectionId);
    },
    rightButtonClick(e, sectionId) {
      this.$emit("rightButtonClick", e, sectionId);
    },

    quizButtonClick(sectionId){
       this.$router.push({name: "BuilderQuiz", params: { sectionId: sectionId }});
    }
  },

};
</script>

<style lang="css">
.sidebarBuilder {
  overflow-y: auto;
}

.builder {
  border-radius: 10px;
  background-color: #ffff;
  padding: 5px;
  margin-top: 10px;
  margin-left: 40px;
}
.title {
  color: black;
  font-size: 23px;
  margin: 10px;
}
.item {
  display: flex;
  flex-direction: column;
}
.link-container {
  display: flex;
  flex-direction: column;
}
.buttonSection {
  background-color: #cfd4cf;
  margin-top: 3px;
  border: none;
  padding: 10px 0px;
}

.buttonNew {
background-color: white;
  margin-top: 3px;
  border: none;
  padding: 10px 5px;
  border-radius: 10px;
  margin: 20px;
  margin-left: 80px;
}
.green {
  background-color: rgb(236, 235, 235);
}
</style>
