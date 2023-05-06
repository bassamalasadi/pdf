<template>
  <div>
    <br>
    <h1>Create an Account</h1>
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
    <p><button class="button is-link mt-1" @click="register">Submit</button></p>
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
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const router = useRouter();
const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      router.push("/feed");
    })
    .catch((error) => {
      alert(error.message);
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
