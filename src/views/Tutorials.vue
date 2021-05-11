<template>
  <div class="tutorials">
    <Sidebar> </Sidebar>
    <div class="content">
      <div class="contentText" v-for="user in users" :key="user.id" > {{ user.name }}</div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/layouts/SidebarTutorials.vue";
export default {
  name: "Tutorials",
  components: {
    Sidebar,
  },
  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    const res = await fetch("http://localhost:3000/api/v1/users");
    const users = await res.json();
    this.users = users;
  },
};
</script>

<style lang="css">
.tutorials {
  display: grid;
  grid-template-columns: 1fr 5fr;
  background-color: #98fb98;
  height: 87vh;
  width: 100vw;
}
.content {
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  margin: 6px 6px 6px 0px;
  align-content: center;
  padding: 10px; /* Поля вокруг текста */
}
.contentText {
  margin: 20px 20px 20px 20px;
  color: gray;
}
</style>
