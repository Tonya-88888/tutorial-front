<template>
  <div class="sidebar">
    <div>
      <!-- <button class="builderButton" @click="createQuiz">
        Создать новое
      </button> -->
    </div>
    <div class="title1">Задания:</div>
    <div class="item1" v-for="item in list" :key="item._id">
      <div class="link-container1">
        <button
          class="buttonSide"
          @click="changeQuiz(item._id)"
          @click.right="rightButtonClick($event, item._id)"
        >
          {{ item.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarQuiz",
  props: ["list"],
  methods: {
    changeQuiz(id) {
      this.$emit("changeQuiz", id);
    },
    createQuiz() {
      this.$emit("createQuiz");
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
.buttonSide:hover {
  background-color: whitesmoke;
}
.green1 {
  background-color: #ffff;
}
</style>
