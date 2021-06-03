<template>
  <div Class="learning">
<div> <VieTutorial :sections="getSection" @editSection="editSection"></VieTutorial></div>
   
    <button class="move-to-quiq-button" v-if="currSectionId !== ''"  @click="moveToQuiz"> выполнить задание</button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import VieTutorial from "../components/layouts/ViewTutorial.vue";
export default {
  name: "Learning",
  props: ["sections"],
  components: {
      VieTutorial,
  },
  async mounted() {
    await this.fetchSection(this.$route.params.tutorialId);
    await this.fetchQuiz();
  },
  data() {
    return {
      vieContent: "",
      shouButtonQuiz: false,
      currSectionId: ''
    };
  },
  methods: {
    ...mapActions(["fetchSection", " fetchQuiz"]),
    moveToQuiz(){
this.$router.push({name: "QuizPassage", params: { sectionId: this.currSectionId }});
    },
    editSection(sectionId){
this.currSectionId = sectionId;
    }
     
  },
  computed: mapGetters(["getSection"]),
};
</script>

<style>
.learning{
   display: flex;
  flex-direction: column;
}
.move-to-quiq-button{
border: 1px solid black;
    border-radius: 10px;
    background-color: #ffff;
    padding: 8px;
    margin-top: 511px;
    margin-left: 233px;
    margin-right: 15px;
    float: right;
    font-weight: 500;
}
</style>