<template>
  <div class="sidebar">
    <div class="title">Содержание:</div>
    <div class="item">
      <ul>
        <li v-for="item in tutorials" :key=" item.id">
          {{item.name}}
        </li>
      </ul>
      <div class="link-container">добавить параграф</div>
      <!--   <div class="link-container"><button class= "buttonNew">добавить параграф</button></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarBuilder",
  data: () => ({
    tutorials: [
      {
        _id: 1,
        name: "Введение",
      },
      { _id: 2, name: "Глава 1" },
         { _id: 3, name: "Глава 2" },
         { _id: 4, name: "Глава 3" },
    ],
  }),
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
.buttonNew {
  height: 30px;
  width: 30px;
  color: black;
  padding: 2px;
  text-align: center;
  font-size: 16px;
  margin-left: 70px;
  border-radius: 20зч;
}

.green {
  background-color: rgb(236, 235, 235);
}
</style>
