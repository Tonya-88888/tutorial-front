<template>
  <div class="container">
    
    <div class="header">
      <h2>Регистрация</h2>
    </div>
    <form @submit.prevent="sendData" id="form" class="form">
      <div class="form-control">
        <label for="username">Фамилия</label>
        <input type="text" v-model.trim="username" id="username" />
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-exclamation-circle"></i>
        <small>Error message</small>
      </div>
      <div class="form-control">
        <label for="name1">Имя</label>
        <input type="text" v-model.trim="name1" id="name1" />
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-exclamation-circle"></i>
        <small>Error message</small>
      </div>
      <div class="form-control">
        <label for="email">Адрес электронной почты</label>
        <input type="email" v-model.trim="email" id="email" />
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-exclamation-circle"></i>
        <small>Error message</small>
      </div>
      <div class="form-control">
        <label for="password">Пароль</label>
        <input type="password" v-model.trim="password" id="password" />
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-exclamation-circle"></i>
        <small>Error message</small>
      </div>
      <div class="form-control">
        <label for="passwordConfirm">Подтвердите пароль</label>
        <input
          type="password"
          v-model.trim="passwordConfirm"
          id="passwordConfirm"
        />
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-exclamation-circle"></i>
        <small>Error message</small>
      </div>
      <button>Регистрация</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import {addUser,getUser } from "../services/user.service";
import { getAllSection } from "../services/section.service";
export default {
  data() {
    return {
      username: "",
      name1: "",
      email: "",
      password: "",
      passwordConfirm: "",
    };
  },
  methods: {
    async sendData() {

      this.checkInputs();


// const tmp = getAllSection("609a5b1bb4f03920388c0172").then(
//     result => {
//   console.log(result); // result - аргумент resolve
//     })
   // console.log(tmp);

const tmp = addUser({
      name: this.name,
            email: this.email,
            surname: this.surname,
            password: this.password,
      }).then(
    result => {
      // первая функция-обработчик - запустится при вызове resolve
      console.log(result); // result - аргумент resolve
    })




      // console.log(
      //   await axios({
      //     url: "http://localhost:3000/api/v1/sections/tutorial/609a5b1bb4f03920388c0172",
      //     method: "get",
      //   })
      // );
    },
    checkInputs() {
      // trim to remove the whitespaces
      const usernameValue = this.username;
      const nameValue = this.name1;
      const emailValue = this.email;
      const passwordValue = this.password;
      const password2Value = this.passwordConfirm;

      if (usernameValue === "") {
        this.setErrorFor(username, "Обязательное поле для заполнения");
      } else {
        this.setSuccessFor(username);
      }
      if (nameValue === "") {
        this.setErrorFor(name1, "Обязательное поле для заполнения");
      } else {
        this.setSuccessFor(name1);
      }

      if (emailValue === "") {
        this.setErrorFor(email, "Обязательное поле для заполнения");
      } else if (!this.isEmail(emailValue)) {
        setErrorFor(email, "Not a valid email");
      } else {
        this.setSuccessFor(email);
      }

      if (passwordValue === "") {
        this.setErrorFor(password, " Обязательное поле для заполнения");
      } else if (passwordValue.length < 6) {
        this.setErrorFor(password, " Пароль не может быть менее 6 символов");
      } else {
        this.setSuccessFor(password);
      }

      if (password2Value === "") {
        this.setErrorFor(passwordConfirm, "Обязательное поле для заполнения");
      } else if (passwordValue !== password2Value) {
        this.setErrorFor(passwordConfirm, "Пароли не совпадают");
      } else {
        this.setSuccessFor(passwordConfirm);
      }
    },
    setErrorFor(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector("small");
      formControl.className = "form-control error";
      small.innerText = message;
    },
    setSuccessFor(input) {
      const formControl = input.parentElement;
      formControl.className = "form-control success";
    },

    isEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
    },
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}

.container {
  margin-top: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  width: 400px;
  max-width: 80%;
}

.header {
  border-bottom: 1px solid #f0f0f0;
  background-color: #f7f7f7;
  padding: 10px 40px;
}

.header h2 {
  margin: 0;
  font-size: 16pt;
}

.form {
  padding: 5px 5px;
}

.form-control {
  margin-bottom: 5px;
  padding-bottom: 17px;
  position: relative;
}

.form-control label {
  display: inline-block;
  margin-bottom: 0px;
  font-size: 14px;
}

.form-control input {
  border: 2px solid #f0f0f0;
  border-radius: 4px;
  display: block;
  font-family: inherit;
  font-size: 12px;
  padding: 5px 5px;
  width: 100%;
}

.form-control input:focus {
  outline: 0;
  border-color: #777;
}

.form-control.success input {
  border-color: #2ecc71;
}

.form-control.error input {
  border-color: #e74c3c;
}

.form-control i {
  visibility: hidden;
  position: absolute;
  top: 40px;
  right: 10px;
}

.form-control.success i.fa-check-circle {
  color: #2ecc71;
  visibility: visible;
}

.form-control.error i.fa-exclamation-circle {
  color: #e74c3c;
  visibility: visible;
}

.form-control small {
  color: #e74c3c;
  position: absolute;
  bottom: 0;
  left: 10px;
  font-size: 12px;
  visibility: hidden;
}

.form-control.error small {
  visibility: visible;
}

.form button {
  background-color: #2d2752;
  border: 2px solid #242041;
  border-radius: 4px;
  color: rgb(255, 255, 255);
  display: block;
  font-family: inherit;
  font-size: 16px;
  padding: 5px;
  margin-top: 10px;
  width: 100%;
}
</style>
