<template>
  <div class="sidebarBuilder">
    <div class="title">Содержание:</div>
    <div class="item" v-for="item in sections" :key="item.id">
      <button class="buttonSection">{{ item.name }}</button>
    </div>
    <div> <button class="buttonNew">добавить параграф</button></div>
  </div>
</template>

<script>
export default {
  name: "SidebarBuilder",
  props: ["sections"],
};
</script>

<style lang="css">
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
