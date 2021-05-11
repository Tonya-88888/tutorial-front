<template>
  <div class="container">
    <div class="header">
      <h2>Вход</h2>
    </div>
    <form @submit.prevent="sendData" id="form" class="form">
    
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
      <span>Еще не зарегистированны? <router-link to="/registerForm">Pегистрация</router-link> </span>
      <button>Войти</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
      email: "",
      password: "",

    };
  },
  methods: {
     async sendData() {
      this.checkInputs();    
      // if(!this.v$.userForm.name.required.message)
      //console.log(this.v$.userForm.name.required.message = "Обязательное поле");
      //  console.log(this.userForm.surname, this.userForm.name, this.userForm.email, this.userForm.password, this.userForm.passwordConfirm);
      // console.log(
      //   await axios({
      //     url: "http://localhost:3000/api/v1/users",
      //     method: "post",
      //     data: {
      //       name: this.name,
      //       email: this.email,
      //       surname: this.surname,
      //       password: this.password,
      //     },
      //   })
      // );
  
    },
    checkInputs() {
      // trim to remove the whitespaces
      const emailValue = this.email;
      const passwordValue = this.password;

    

      if (emailValue === "") {
        this.setErrorFor(email, "Обязательное поле для заполнения");
      } else if (!this.isEmail(emailValue)) {
        setErrorFor(email, "Not a valid email");
      } else {
        this.setSuccessFor(email);
      }

      if (passwordValue === "") {
        this.setErrorFor(password, " Обязательное поле для заполнения");
      } else {
        this.setSuccessFor(password);
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
  background-color:#98FB98;
  border: 2px solid #92ff92;
  border-radius: 4px;
  color: black;
  display: block;
  font-family: inherit;
  font-size: 16px;
  padding: 5px;
  margin-top: 10px;
  width: 100%;
}
</style>
