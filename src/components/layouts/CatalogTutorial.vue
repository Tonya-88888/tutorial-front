<template>
  <div class="catalogTutorial">
    <div class="searchWrapper">
      <select class="selectFilterType" v-model="filterType">
        <option value disabled selected>поиск ...</option>
        <option value="1">по названию</option>
        <option value="2">по автору</option>
      </select>
      <div class="searchDiv">
        <input class="searchInput" type="text" v-model="searchInput" />
        <button class="searchButton fa fa-search" @click="getAuthor"></button>
      </div>
    </div>

    <div class="catalog">
      <div v-for="item in filterTutorials" :key="item._id">
        <TutorialCard :data="item"></TutorialCard>
      </div>
      <div v-if="filterTutorials.length === 0">Учебников не найдено</div>
    </div>
  </div>
</template>
<script>
import TutorialCard from "./TutorialCard";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CatalogTutorial",
  components: {
    TutorialCard,
  },
  async mounted() {
    await this.fetchTutorial();
    await this.fetchUsers();

    for (let i = 0; i < this.getTutorial.length; i++) {
     // console.log(this.getUserById(this.getTutorial[i].id_User));
      let a = {
        id: this.getTutorial[i]._id,
        name: this.getTutorial[i].name,
        authorName:
          this.getUserById(this.getTutorial[i].id_User).name +
          " " +
          this.getUserById(this.getTutorial[i].id_User).surname,
      };
      this.data.push(a);
    }
  },
  data() {
    return {
      searchInput: "",
      filterType: "",
      data: [],
    };
  },
  methods: {
    ...mapActions(["fetchTutorial", "fetchUsers"]),
  },

  computed: {
    ...mapGetters(["getTutorial", "getUsers", "getUserById"]),
    filterTutorials() {
      if (this.filterType == 1) {
        return this.data.filter((tutorial) => {
          return (
            tutorial.name
              .toUpperCase()
              .indexOf(this.searchInput.toUpperCase()) !== -1
          );
        });
      } else if (this.filterType == 2) {
        return this.data.filter((tutorial) => {
          return (
            tutorial.authorName
              .toUpperCase()
              .indexOf(this.searchInput.toUpperCase()) !== -1
          );
        });
      }
      if (this.filterType != 2 && this.filterType != 1) {
        return this.data;
      }
    },
  },
};
</script>
<style>
.catalogTutorial {
  display: grid;
}
.searchWrapper {
  display: flex;
  justify-content: center;
}
.searchDiv {
  justify-self: center;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 2px;
  background-color: white;
    overflow: hidden;
}
.selectFilterType {
  padding: 5px;
  border: 1px solid #000;
  border-radius: 10px;
  outline: none;
  margin-top: 20px;
  margin-right: 10px;
}
.searchInput {
  border: none;
  padding: 3px;
  outline: none;
}
.searchButton {
  border: none;
  color: black;
  background-color: #fff;
  margin-right: 3px;
  height: 100%;
}
.catalog {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 20px 30px;
}
</style>
