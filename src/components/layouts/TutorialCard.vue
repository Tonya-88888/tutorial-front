<template>
  <div class="tutorialCard" @click="moveToTutorial(data.id)">
    <div class="tutorialName">{{ data.name }}</div>
    <div class="authorName">Автор:{{ data.authorName }}</div>

  </div>
</template>
<script>
export default {
  name: "TutorialCard",
  props: ["data"],
  async mounted() {},
  methods: {
    moveToTutorial(tutorialId){
      //this.$emit("moveToTutorial", tutorialId)
       this.$router.push({name: "Learning", params: { tutorialId: tutorialId }});
      
    }
  },
  data() {
    return {};
  },
  computed: {},
};
</script>
<style>
.tutorialCard {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
cursor: pointer;
  padding: 15px;
  background-color: #b3fab3;
  margin: 5px 3px;
  box-shadow: 0 0 5px;
  width: 250px;
  height: 100px;
}
.tutorialName {
  font-size: 16px;
}
.authorName {
  font-size: 14px;
}
.viewTutorial {
  border-radius: 10px;
  background-color: #ffff;
  padding: 5px;
  margin-top: 10px;
  margin-left: 40px;
}
</style>
