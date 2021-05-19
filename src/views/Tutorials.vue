<template>
  <div class="tutorials">
    <div>
      <Sidebar
        :tutorials="getTutorial"
        @changeTutorial="changeTutorial"
        @createTutorial="vieModal = true"
        @rightButtonClick="ctxMenuProcessing"
      >
      </Sidebar>
          <ContextMenu :display="showContextMenu" ref="menu">
      <ul>
        <li @click="editClick">редактировать</li>
        <li @click="deleteClick">удалить</li>
      </ul>
    </ContextMenu>
    </div>
    <div class="contentTutorial">
      <VieTutorial v-if="vieContent" :sections="getSection"></VieTutorial>
      <PopUp
        v-if="vieModal"
        @PopUpClickOK="PopUpClickOK"
        @closePopUp="vieModal = false"
      >
        <p>Введите название нового учебника</p>
      </PopUp>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/layouts/SidebarTutorials.vue";
import VieTutorial from "../components/layouts/VieTutorial.vue";
import PopUp from "../components/layouts/PopUp.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";
import ContextMenu from "../components/layouts/ContextMenu.vue";
export default {
  name: "Tutorials",
  components: {
    Sidebar,
    VieTutorial,
    PopUp,
    ContextMenu,
  },
  computed: mapGetters(["getTutorial", "getSection","getTutorialId","GetFirsTutorial"]),
    data() {
    return {
      vieContent: false,
      vieModal: false,
      curentTutorialId: "",
      curentTutorialIdpre : "",
      editElid: '',
      showContextMenu: false,
    };
  },
  methods: {
    ...mapActions(["fetchTutorial", "fetchSection", "createTutorial","deleteTutorial"]),
    //...mapMutations(["createTutorial"]),
    changeTutorial(id) {
      this.curentTutorialId = id;
      if(this.curentTutorialId == "") this.curentTutorialIdpre = id;
      this.fetchSection(this.curentTutorialId);

      this.vieContent = true;
    },
    async PopUpClickOK(tutorialName){
           await this.createTutorial({name: tutorialName, id_User:{_id: "6078a30cef50ff28340d88c5"}})
        this.vieModal = false;
      this.$router.push({name: "BuilderTutorial", params: { tutorialId: this.getTutorialId }});
    },
     ctxMenuProcessing(e, tutorialId) {
      console.log(tutorialId);
      this.$refs.menu.open(e);
      this.editElid = tutorialId;
    },
      async deleteClick() {
      this.$refs.menu.close();
       await this.deleteTutorial(this.editElid);
       await  this.fetchTutorial();
       // получить ид первого в массиве учебников
       console.log(this.GetFirsTutorial)
       if(!this.GetFirsTutorial)
        this.curentTutorialId = this.GetFirsTutorial._id;
        this.fetchSection(this.curentTutorialId);
  
       this.vieContent = false;
      //******* */
      // let currContent = this.getCurrSection(this.currSection).content; //установка контента
      // this.$refs.header.setContents(currContent);
    
    },
    async editClick() {
      this.$refs.menu.close();
        this.$router.push({name: "BuilderTutorial", params: { tutorialId:  this.editElid }});
    },
  },
  async mounted() {
    this.fetchTutorial();
    this.fetchSection();
  },

};
</script>

<style lang="css">
.tutorials {
  display: grid;
  grid-template-columns: 1fr 5fr;
  height: 79%;
  width: 95%;
  position: fixed;
  margin-top: 10px;
}
.contentTutorial {
  background: rgb(248, 248, 248);
  outline: 2px solid rgb(197, 197, 197);
  width: 100%;
  height: 100%;
  margin: 0px;
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
</style>
