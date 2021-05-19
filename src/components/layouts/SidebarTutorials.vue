<template>
  <div class="sidebar">
    <div>
      <button class="builderButton" @click="createTutorial">
        Создать новый
      </button>
    </div>
    <div class="title1">Учебники:</div>
    <div class="item1" v-for="tutorial in tutorials" :key="tutorial._id">
      <div class="link-container1">
        <button
          class="buttonSide"
          @click="changeTutorial(tutorial._id)"
          @click.right="rightButtonClick($event, tutorial._id)"
        >
          {{ tutorial.name }}
        </button>
   
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tutorials"],
  methods: {
    changeTutorial(id) {
      this.$emit("changeTutorial", id);
    },
    createTutorial() {
      this.$emit("createTutorial");
    },
    rightButtonClick(e, sectionId) {
      this.$emit("rightButtonClick", e, sectionId);
    },
  },
};
</script>

<style lang="css">
.sidebar {
  overflow: auto;
}
.builderButton {
  border-radius: 10px;
  background-color: #ffff;
  padding: 5px;
  margin-top: 10px;
  margin-left: 40px;
}
.title1 {
  color: black;
  font-size: 23px;
  margin: 10px;
}
.item1 {
  display: flex;
  flex-direction: column;
}
.link-container1 {
  display: flex;
  flex-direction: column;
}
.buttonSide {
  background-color: #98fb98;
  margin-top: 3px;
  border: none;
  padding: 10px 0px;
  transition: 0.2s ease;
}
.buttonSide:hover{
background-color:whitesmoke;
}
.green1 {
  background-color: #ffff;
}
</style>
