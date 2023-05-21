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
              <div class="m-2">
                <input
                  class="input"
                  type="text"
                  placeholder="Job Title"
                  v-model="jobTitle"
                />
              </div>
              <p class="details">Details</p>
              <div class="m-2">
                <input
                  class="input"
                  type="text"
                  placeholder="Email"
                  v-model="email"
                />
              </div>
              <div class="m-2">
                <input
                  class="input"
                  type="text"
                  placeholder="Phone"
                  v-model="phone"
                />
              </div>
              <div class="m-2">
                <input
                  class="input"
                  type="text"
                  placeholder="Country"
                  v-model="country"
                />
              </div>
              <div class="m-2">
                <input
                  class="input"
                  type="text"
                  placeholder="City"
                  v-model="city"
                />
              </div>
              <p class="details">Links</p>
              <div class="m-2">
                <input
                  class="input"
                  type="text"
                  placeholder="Linkedin"
                  v-model="linkedin"
                />
              </div>
              <div class="m-2">
                <input
                  class="input"
                  type="text"
                  placeholder="Github"
                  v-model="github"
                />
              </div>
              <div class="m-2">
                <input
                  class="input"
                  type="text"
                  placeholder="Portfolio"
                  v-model="portfolio"
                />
              </div>
              <div class="m-2">
                <input
                  class="input"
                  type="text"
                  placeholder="Website"
                  v-model="website"
                />
              </div>
              <div>
                <br>
                <span class="details">Skills</span>
                <span class="button is-dark is-pulled-right is-small is-rounded" @click="addInputElement">Add skill</span>
                <div v-for="(input, index) in skills" :key="index">
                  <div class="m-2 columns">
                    <input class="input is-small column is-offset-0" v-model="input.value" :placeholder="input.placeholder">
                    <button class="button is-small is-danger is-pulled-right" @click="removeInput(index)">Remove</button>
                  </div>
                </div>
              </div>
              <br>
              <div class="panel my-5 mx-2">
                <div
                  class="panel-heading has-background-link-light"
                  v-on:click="profileController == 1 ? (profileController = 0) : (profileController = 1)"
                >
                  Profile
                </div>
                <div class="panel-block" v-show="profileController == 1">
                  <textarea class="textarea" v-model="profile" rows="10" />
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
                  <textarea class="input" v-model="profile"  @click="convertLineBreaks"/>
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
              :imageData="selectedImage"
              :name="name"
              :jobTitle="jobTitle"
              :email="email"
              :phone="phone"
              :country="country"
              :city="city"
              :linkedin="linkedin"
              :github="github"
              :portfolio="portfolio"
              :website="website"
              :skills="skills"
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
const inputText = ref("")
const name = ref("");
const jobTitle = ref("")
const email = ref("")
const phone = ref("")
const country = ref("")
const city = ref("")
const linkedin = ref("")
const github = ref("")
const portfolio = ref("")
const website = ref("")
const skills = ref([]);
const profile = ref("");
const profileController = ref(0);
const firstController = ref(0);
const secondController = ref(0);
const thirdController = ref(0);
const firstControllerEd = ref(0);
const secondControllerEd = ref(0);
const thirdControllerEd = ref(0);
const palceholder = ref();

function addInputElement() {
  skills.value.push({
    value: '',
    placeholder: 'Enter Skill...'
  });
}

const removeInput = (index) => {
  skills.value.splice(index, 1);
};

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
.details {
  margin: 15px;
  font-size: 18px;
  font-weight: bold;
}
</style>
