<template>
  <header>
    <nav>
      <ul class="nav-area">
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/tutorials">Мои учебники</router-link></li>
      </ul>
    </nav>
    <div class="row">
      <div class="col">
        <router-link to="/logInForm">вход</router-link>
      </div>
      <div class="col">
        <router-link to="/registerForm">регистрация</router-link>
      </div>
    </div>
  </header>
  <!--- <img class = "logo" src = alt="" >  -->
</template>

<script>
export default {
  name: "NavHeader",
};
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center center;
  height: 100vh;
  font-family: poppins;
  font-weight: 600;
  font-size: 16px;
}

a {
  text-decoration: none;
}
header {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  background: #2d2752;
}
.logo {
  cursor: pointer;
}
.nav-area {
  list-style: none;
  margin: 0.3rem;
}
.nav-area li {
  display: inline-block;
  padding: 0 15px;
  text-transform: uppercase;
}
.nav-area li a {
  transition: all 0.3s ease 0s;
  color: rgb(255, 255, 255);
}
.nav-area li a:hover {
  text-decoration: underline;
}
header .row .col a {
  color: #b3b3b3;
}
.btn-area {
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 10px 30px;
  border-radius: 5px;
  background: #006c87;
}
</style>
