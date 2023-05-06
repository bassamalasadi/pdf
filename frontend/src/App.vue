<template>
  <div>
    <div>
      <nav>
        <router-link to="/" class="navs">Home</router-link>
        <router-link to="/register" class="navs" v-if="!isLoggedIn">Register</router-link>
        <router-link to="/sign-in" class="navs" v-if="!isLoggedIn">SingIn</router-link>
        <router-link to="/feed" class="navs">Feed</router-link>
        <button class="button is-success is-inverted is-pulled-right" @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<script setup>
import { onMounted, ref} from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  })
})
const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  })
}

</script>

<style>
@import "bulma/css/bulma-rtl.min.css";

.app {

  margin: 0 auto;
}
.navs { 
  padding: 0px 10px;
}
</style>
