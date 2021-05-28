<template>
  <div class="sidebarBuilder">
    <div class="title">Содержание:</div>
    <div class="item" v-for="item in sections" :key="item.id">
      <button
        class="buttonSection"
        @click="chooseSection(item._id)"
        @click.right="rightButtonClick($event, item._id)"
      >
        {{ item.name }}
      </button>
           <button>тест</button>
    </div>
    <div>
      <button class="buttonNew" @click="newSectionClick">
        добавить параграф
      </button>
            <button class="buttonNew" @click="newQwizClick">
        добавить задание
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarBuilder",
  props: ["sections"],
  methods: {
    newSectionClick() {
      this.$emit("newSectionClick");
    },
        newQwizClick() {
      this.$emit("newQwizClick");
    },
    chooseSection(sectionId) {
      this.$emit("chooseSection", sectionId);
    },
    rightButtonClick(e, sectionId) {
      this.$emit("rightButtonClick", e, sectionId);
    },
  },
};
</script>

<style lang="css">
.sidebarBuilder{
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
  background-color: #eeeeee;
  margin-top: 3px;
  border: none;
  padding: 10px 5px;
  border-radius: 10px;
  margin: 20px;
}
.green {
  background-color: rgb(236, 235, 235);
}
</style>
