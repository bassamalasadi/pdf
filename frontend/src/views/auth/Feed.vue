<template>
  <br />
  <div class="container">
    <div class="card">
      <br />
      <div class="columns m-2">
        <div class="column is-two-fifths">
          <div class="card has-background-success-light p-2">
            <div class="field m-2">
              <div class="m-2">
                <FileUpload @image-selected="selectedImage = $event"/>
              </div>
              <div class="m-2">
                <input
                  class="input"
                  type="text"
                  placeholder="Name"
                  v-model="name"
                />
              </div>

              <div class="panel my-5 mx-2">
                <div
                  class="panel-heading has-background-link-light"
                  v-on:click="profileController == 1 ? (profileController = 0) : (profileController = 1)"
                >
                  Profile
                </div>
                <div class="panel-block" v-show="profileController == 1">
                  <textarea class="input" v-model="profile" />
                </div>
              </div>
              <br>
              <h1>Employment History</h1>
              <hr class="has-background-black-ter" />

              <div class="panel my-5 mx-2">
                <div
                  class="panel-heading has-background-link-light"
                  v-on:click="firstController == 1 ? (firstController = 0) : (firstController = 1)"
                >
                  First
                </div>
                <div class="panel-block" v-show="firstController == 1">
                  <textarea class="input" v-model="profile" />
                </div>
              </div>

              <div class="panel my-5 mx-2">
                <div
                  class="panel-heading has-background-link-light"
                  v-on:click="secondController == 1 ? (secondController = 0) : (secondController = 1)"
                >
                  Second
                </div>
                <div class="panel-block" v-show="secondController == 1">
                  <textarea class="input" v-model="profile" />
                </div>
              </div>

              <div class="panel my-5 mx-2">
                <div
                  class="panel-heading has-background-link-light"
                  v-on:click="thirdController == 1 ? (thirdController = 0) : (thirdController = 1)"
                >
                  Third
                </div>
                <div class="panel-block" v-show="thirdController == 1">
                  <textarea class="input" v-model="profile" />
                </div>
              </div>
              <br>
              <h1>Education</h1>
              <hr class="has-background-black-ter" />
              <div class="panel my-5 mx-2">
                <div
                  class="panel-heading has-background-link-light"
                  v-on:click="firstControllerEd == 1 ? (firstControllerEd = 0) : (firstControllerEd = 1)"
                >
                  First
                </div>
                <div class="panel-block" v-show="firstControllerEd == 1">
                  <textarea class="input" v-model="profile" />
                </div>
              </div>

              <div class="panel my-5 mx-2">
                <div
                  class="panel-heading has-background-link-light"
                  v-on:click="secondControllerEd == 1 ? (secondControllerEd = 0) : (secondControllerEd = 1)"
                >
                  Second
                </div>
                <div class="panel-block" v-show="secondControllerEd == 1">
                  <textarea class="input" v-model="profile" />
                </div>
              </div>

              <div class="panel my-5 mx-2">
                <div
                  class="panel-heading has-background-link-light"
                  v-on:click="thirdControllerEd == 1 ? (thirdControllerEd = 0) : (thirdControllerEd = 1)"
                >
                  Third
                </div>
                <div class="panel-block" v-show="thirdControllerEd == 1">
                  <textarea class="input" v-model="profile" />
                </div>
              </div>
              <div class="m-5 is-pulled-right">
                <a class="button is-info"> Download </a>
              </div>
            </div>
          </div>
        </div>
        <div class="column card has-background-link-light">
          <div class="">
            <BlueTempalte
              :name="name"
              :imageData="selectedImage"
              :profile="profile"
            />
          </div>
        </div>
      </div>
      <br>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, computed  } from "vue";
const store = inject('store');
const name = ref("");
const profile = ref("");
const profileController = ref(0);
const firstController = ref(0);
const secondController = ref(0);
const thirdController = ref(0);
const firstControllerEd = ref(0);
const secondControllerEd = ref(0);
const thirdControllerEd = ref(0);
const palceholder = ref();


const selectedImage = computed(() => {
  return store.state.selectedImage
})
</script>

<script>
import { inject } from 'vue';
import FileUpload from '../../components/FileUpload.vue';
import BlueTempalte from "../templates/BlueTemplate.vue";

export default {
  components: {
    FileUpload,
    BlueTempalte,
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
