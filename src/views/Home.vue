<template>
  <div class="home">
    <!-- <p class="name1"> Онлайн-сервис</p>
  <p class="name" >e-Tutorial</p>
      <p>для создания интерактивных электронных учебников</p> -->
    
    <div class="alltutorial">
<CatalogTutorial ></CatalogTutorial>
    </div>
  </div>
</template>

<script>
import CatalogTutorial from "../components/layouts/CatalogTutorial";


export default {
  name: "Home",
  components: {
    CatalogTutorial,
  },
  data(){
    return{
      searchInput: ""
    }
  },
  methods: {
    
  }
  
};
</script>

<style lang="css">
.alltutorial {

 
}
.name1 {
  text-transform: uppercase;
  font-size: 60px;
  font-family: "Verdana";
  padding: 10px;
}
.name {
  text-transform: uppercase;
  font-size: 65px;
  font-family: "Verdana";
  padding: 10px;
  color: #98fb98;
}
</style>
