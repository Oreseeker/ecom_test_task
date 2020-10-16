<template>
  <div class="custom-form">
    <substrate>
      <h3>Введите ID сайта</h3>
      <div class="wrapper">
        <input type="text" v-model="inputText" />
        <div class="error-text" v-show="displayError">{{ errorText }}</div>
      </div>
      <submit-button @click="submitId">Войти</submit-button>
    </substrate>
  </div>
</template>

<script>
import SubmitButton from "./SubmitButton.vue";
import Substrate from "./Substrate.vue";
export default {
  components: {
    SubmitButton,
    Substrate
  },
  data() {
    return {
      inputText: "",
      displayError: false,
      errorText: "ID сайта должен содержать 24 символа"
    };
  },
  methods: {
    enableError() {
      this.displayError = true;
    },
    performRequest() {
      const val = this.inputText;
      const request = new XMLHttpRequest();
      request.open("GET", "https://track-api.leadhit.io/client/test_auth");
      request.setRequestHeader(
        "Api-Key",
        "5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo"
      );
      request.setRequestHeader("Leadhit-Site-Id", val);
      request.onreadystatechange = function() {
        if (request.readyState == XMLHttpRequest.DONE) {
          let obj = JSON.parse(request.responseText);
          if (obj.message == "ok") {
            alert("OK");
            window.localStorage['leadhit-site-id'] = val;
            window.location.href="./#/analytics";
          }
        }
      };
      request.send();
    },
    submitId() {
      if (this.inputText.length != 24) {
        this.enableError();
      } else {
        this.performRequest();
      }
    }
  },
  watch: {
    inputText() {
      this.displayError = false;
    }
  }
};
</script>

<style scoped>
.custom-form {
  width: 400px;
}
.submit-button {
  margin: 20px auto;
}
input[type="text"] {
  display: block;
  padding: 5px 10px;
  width: 100%;
  box-sizing: border-box;
}
input[type="text"]:focus {
  outline-color: #42b983;
}
.error-text {
  margin: 10px 0;
  padding: 0 20px;
  color: red;
  box-sizing: border-box;
  text-align: center;
  width: 100%;
  font-size: 14px;
}
.wrapper {
  width: 80%;
  margin: 0 auto;
}
</style>
