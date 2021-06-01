<template>
  <div>
<button v-if="currSectionId !== ''"  @click="moveToQuiz"> выполнить задание</button>
    <VieTutorial :sections="getSection" @editSection="editSection"></VieTutorial>
   
 
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
  },
  data() {
    return {
      vieContent: "",
      shouButtonQuiz: false,
      currSectionId: ''
    };
  },
  methods: {
    ...mapActions(["fetchSection"]),
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
