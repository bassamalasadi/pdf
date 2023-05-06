<template>
  <div class="">
    <br>
    <h1>Sign In</h1>
    <br>
    <div class="field">
        <input class="input is-rounded" type="email" placeholder="Email" v-model="email">
        <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
        </span>
    </div>
    <div class="field">
        <input class="input is-rounded" type="password" placeholder="Password" v-model="password">
        <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
        </span>
    </div>
    <p v-if="errMsg">{{ errMsg }}</p>
    <p><button class="button is-link mt-1" @click="signIn">Submit</button></p>
    <br>
    <div class="">
        <h1>Sign In with Google</h1>
        <p><button class="button is-link mt-1" @click="signInWithGoogle">Sign In With Google</button></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();
const signIn = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      router.push("/feed");
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
          break;
      }
    });
};

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            router.push("/feed")
        })
        .catch((error) => {

        })
};

</script>

<style>

</style>
