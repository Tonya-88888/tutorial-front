<template>
  <div class="sidebar">

    <div class="title1">Задания:</div>
    <div class="item1" v-for="item in list" :key="item._id">
      <div class="link-container1">
        <button
          class="buttonCh"
          @click="changeQuiz(item)"
          @click.right="rightButtonClick($event, item._id)"
        >
          {{ item.question}} 
        </button>
      </div>
    </div>
    <button class="fa fa-plus fa-2x builderQuizButton" @click="createQuiz"></button>
  </div>
</template>

<script>
export default {
  name: "SidebarQuiz",
  props: ["list"],
  methods: {
    changeQuiz(quiz) {
      this.$emit("changeQuiz", quiz);

    },
    createQuiz() {
      this.$emit("createQuiz");
    },
    rightButtonClick(e, quizId) {

      this.$emit("rightButtonClick", e, quizId);
    },
  },
};
</script>

<style lang="css">
.sidebar {
    overflow: auto;
   

}
.builderQuizButton {
  border: none;
  outline: none;
 
  padding: 5px;
  margin-top: 10px;
  margin-left: 100px;
  color: #2d2752;
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
.buttonCh {

    background-color: #aaaaaa;
    width: 215px;
    margin-top: 3px;
    border: none;
    padding: 10px 0px;
    transition: 0.2s ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

}

.green1 {
  background-color: #ffff;
}

</style>
