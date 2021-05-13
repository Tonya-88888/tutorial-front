<template>
  <div class="tutorials">
    <div>
      <Sidebar
        :tutorials="getTutorial"
        @changeTutorial="edit"
        @createTutorial="modalUp"
      >
      </Sidebar>
    </div>
    <div class="contentTutorial">
      <VieTutorial v-if="vieContent" :sections="getSection"></VieTutorial>
    </div>
    <PopUp v-if="vieModal" @closePopUp="vieModal=false"></PopUp>
  </div>
</template>

<script>
import Sidebar from "../components/layouts/SidebarTutorials.vue";
import VieTutorial from "../components/layouts/VieTutorial.vue";
import PopUp from "../components/layouts/PopUp.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Tutorials",
  components: {
    Sidebar,
    VieTutorial,
    PopUp,
  },
  computed: mapGetters(["getTutorial", "getSection"]),
  methods: {
    ...mapActions(["fetchTutorial", "fetchSection"]),
    edit(data) {
      console.log(data);
      this.curentTutorial = data;
      this.fetchSection(this.curentTutorial);
      this.vieContent = true;
    },
    modalUp() {
      this.vieContent = true;
      console.log("Создать новый учебник");
    },

  },
  async mounted() {
    this.fetchTutorial();
    this.fetchSection();
  },
  data() {
    return {
      vieContent: false,
      vieModal: false,
      curentTutorial: "",
    };
  },
};
</script>

<style lang="css">
.tutorials {
  display: grid;
  grid-template-columns: 1fr 5fr;
  height: 79vh;
  width: 90vw;
  position: fixed;
}
.contentTutorial {
  background: rgb(248, 248, 248);
  outline: 2px solid rgb(197, 197, 197);
  width: 800px;
  height: 450px;
  margin: 0px;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
</style>
