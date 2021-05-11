<template>
  <div class="sidebar">
    <router-link to="/builder">
      <div><button class="builder">Создать новый</button></div>
    </router-link>
    <div class="title">Учебники:</div>
    <div class="item">
      <router-link to="/tutorials" active-class="active">
        <div class="link-container">
          <button class="green">Математика</button>
        </div>
      </router-link>
      <router-link to="/" active-class="active">
        <div class="link-container"><button>Физика</button></div>
      </router-link>
      <router-link to="/" active-class="active">
        <div class="link-container"><button>Русский язык</button></div>
      </router-link>
      <router-link to="/">
        <div class="link-container">
          <button>Информатика</button>
        </div></router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css">
button.active {
  background-color: #98fb98;
  color: #ffff;
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
button {
  background-color: #98fb98;
  margin-top: 3px;
  border: none;
  padding: 10px 0px;
}
.green {
  background-color: #ffff;
}
</style>
