<template>
  <div class="popup">
    <div class="popup-inner">
      <p>Введите название нового учебника</p>
      <input
        class="popUpInput"
        type="text"
        v-model.trim="popUpInput"
        id="popUpInput"
      />
      <div class="button-pop">
        <button class="popup-close">готово</button>
        <button class="popup-close" @click="closePopUp">отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopUp",
  props: ["popUpText", "popUpInput"],
  methods: {
    closePopUp() {
      this.$emit("closePopUp");
    },
  },
};
</script>

<style lang="css">
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
}
.popup-inner {
  background: #fff;
  padding: 32px;
}
.popup-close {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  padding: 2px;
  height: 30px;
  width: 70px;
  border: none;
}
.button-pop {
  text-align: end;
}
.popUpInput {
  width: 100%;
}
</style>
