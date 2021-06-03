<template>
  <div class="popup">
    <div class="popup-inner">
      <slot></slot>

      <input
        class="popUpInput"
        type="text"
        v-model.trim="popUpInput"
        id="popUpInput"
        @keyup.enter="clickOK"
      />
      <div class="button-pop">
        <button class="popup-btn" :disabled="OkDisabled" @click="clickOK">
          готово
        </button>
        <button class="popup-btn" @click="closePopUp">отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopUp",
  props: [],
  data() {
    return {
      popUpInput: "",
    };
  },
  methods: {
    closePopUp() {
      this.$emit("closePopUp");
    },
    clickOK() {
      if (this.popUpInput.length !== 0)
        this.$emit("PopUpClickOK", this.popUpInput);
    },
  },
  computed: {
    OkDisabled() {
      return this.popUpInput.length === 0;
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
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
}
.popup-inner {
  background: rgb(255, 255, 255);
  padding: 32px;
  border-radius: 10px;
}
.popup-btn {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  padding: 2px;
  height: 30px;
  width: 70px;
  border: none;
  border-radius: 10px;
}
.button-pop {
  text-align: end;
}
.popUpInput {
  width: 100%;
  border: 1px solid rgb(126, 126, 126);
  border-radius: 10px;
  padding: 3px;
}
</style>
