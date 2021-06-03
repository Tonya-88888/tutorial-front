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
       ref="button"
         class="buttonSide"
          @click="changeTutorial(tutorial._id, $event)"
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
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    changeTutorial(id,e) {
      this.$emit("changeTutorial", id);
      this.isActive = true;

this.$refs.button.removeClass("active");

      e.target.classList.add('active');
    //  this.$refs.button.style.backgroundColor = '#98fb98';
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
.active{
  background-color: whitesmoke;
  margin-top: 3px;
  border: none;
  padding: 10px 0px;
  transition: 0.2s ease;
}
.sidebar {
  height: calc(80% - 1px);
  width: 250px;
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
.buttonSide:hover {
  background-color: whitesmoke;
}
.green1 {
  background-color: #ffff;
}
</style>
