<template>
  <div class="vieTutorial">
    <div class="vieSidebar">
      <div class="titleSection">Содержание:</div>
      <div class="itemSection" v-for="item in sections" :key="item._id">
       
          <button @click="editSection(item.content)">
            {{ item.name }}
          </button>
        
      </div>
    </div>
    <div class="contentVieTutorial" v-html="content"></div>
  </div>
</template>

<script>
export default {
  name: "VieTutorial",
  props: ["sections"],
  data() {
    return {
      content: "",
    };
  },
  methods: {
    editSection(content) {
      this.content = content;
    },
  },
};
</script>

<style lang="css">
.vieTutorial {
  display: grid;
  grid-template-columns: 1fr 4fr;
  position: fixed;
}
.vieSidebar {
  border-radius: 10px;
  background-color: #ffff;
  padding: 5px;
  margin-top: 10px;
  margin-left: 40px;
}
.titleSection {
  color: black;
  font-size: 16px;
  margin: 10px;
}
.itemSection {
  display: flex;
  flex-direction: column;
}
.link-container25 {
  display: flex;
  flex-direction: column;
}
</style>
