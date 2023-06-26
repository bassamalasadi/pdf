<template>
  <br />
  <div class="">
    <div class="card">
      <br />
      <div class="columns m-2">
        <div class="column is-half scrollable-container">
          <div class="card has-background-success-light p-2">
            <div class="field m-2">
              <div class="m-2">
                <FileUpload @image-selected="selectedImage = $event"/>
              </div>
              <br>
              <div class="panel">
                <p
                  class="panel-heading"
                   @click="userInfoController == 1 ? (userInfoController = 0) : (userInfoController = 1)"
                >User Information</p>
                <div class="panel-block"  v-show="userInfoController == 1">
                  <input
                    class="input"
                    type="text"
                    placeholder="Name"
                    v-model="name"
                  />
                  <input
                    class="input"
                    type="text"
                    placeholder="Job Title"
                    v-model="jobTitle"
                  />
                </div>
              </div>
              <div class="panel">
                <p
                  class="panel-heading"
                  @click="detailController == 1 ? (detailController = 0) : (detailController = 1)"
                >Details</p>
                <div
                  class="panel-block"
                  v-show="detailController == 1"
                >
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
                </div>
              </div>
              <div class="panel">
                <p
                  class="panel-heading"
                  @click="linkController == 1 ? (linkController = 0) : (linkController = 1)"
                >Websites & Social Links</p>
                <div
                  class="panel-block"
                  v-show="linkController == 1"
                >
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
                </div>
              </div>
              <div class="panel">
                <div
                  class="panel-heading"
                  v-on:click="profileController == 1 ? (profileController = 0) : (profileController = 1)"
                >
                  Profile
                </div>
                <div class="panel-block" v-show="profileController == 1">
                  <textarea class="textarea" v-model="profile" rows="10" />
                </div>
              </div>
              <hr class="has-background-black-ter" />
              <br>
              <div class="card p-5 has-background-light">
                <span class="details">Skills</span>
                <span class="button is-dark is-pulled-right is-small is-rounded" @click="addInputSkill">Add</span>
                <hr class="has-background-black-ter" />
                <div v-for="(input, index) in skills" :key="index">
                  <div class="m-2 columns">
                    <input class="input is-small column is-offset-0" v-model="input.value" :placeholder="input.placeholder">
                    <button class="button is-small is-danger is-pulled-right" @click="removeSkill(index)">Remove</button>
                  </div>
                </div>
              </div>
              <br>
              <div class="card p-5 has-background-light">
                <span class="details">Employment History</span>
                <span class="button is-dark is-small is-pulled-right is-rounded" @click="addInputHistory">Add</span>
                <hr class="has-background-black-ter" />
                <br>
                <div v-for="(input, index) in employmentHistory" :key="index">
                  <button class="button is-small is-danger is-pulled-right" @click="removeHistory(index)">X</button>
                  <div class="my-1 mr-5 pr-5">
                    <input class="input is-small column is-offset-0" v-model="input.title" :placeholder="input.titlePlaceHolder">
                    <span>Start Date</span>
                    <input type="date" v-model="input.selectedStartDate">
                    <span>End Date</span>
                    <input type="date" v-model="input.selectedEndDate">
                    <textarea
                      class="textarea is-small column is-offset-0"
                      v-model="input.value"
                      :placeholder="input.placeholder"
                      @click="convertLineBreaks"
                      row="10"
                    />
                    <br>
                    <hr class="has-background-black-ter" />
                    <br>
                  </div>
                </div>
              </div>
              <br>
              <div class="card p-5 has-background-light">
                <span class="details">Education</span>
                <span class="button is-dark is-small is-pulled-right is-rounded" @click="addInputEducation">Add</span>
                <hr class="has-background-black-ter" />
                <br>
                <div v-for="(input, index) in education" :key="index">
                  <button class="button is-small is-danger is-pulled-right" @click="removeEducation(index)">X</button>
                  <div class="my-1 mr-5 pr-5">
                    <input class="input is-small column is-offset-0" v-model="input.school" placeholder="School">
                    <input class="input is-small column is-offset-0" v-model="input.degree" placeholder="Degree">
                    <input class="input is-small column is-offset-0" v-model="input.city" placeholder="City">
                    <span>Start Date</span>
                    <input type="date" v-model="input.selectedStartDate">
                    <span>End Date</span>
                    <input type="date" v-model="input.selectedEndDate">
                    <textarea
                      class="textarea is-small column is-offset-0"
                      v-model="input.description"
                      placeholder="Enter education History..."
                      @click="convertLineBreaks"
                      row="10"
                    />
                    <br>
                    <hr class="has-background-black-ter" />
                    <br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column card has-background-link-light">
          <div class="">
            <BlueTemplate
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
              :employmentHistory="employmentHistory"
              :education="education"
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
const employmentHistory = ref([]);
const education = ref([]);
const profile = ref("");
const profileController = ref(0);
const userInfoController = ref(0);
const detailController = ref(0);
const linkController = ref(0);
const firstController = ref(0);
const secondController = ref(0);
const thirdController = ref(0);
const firstControllerEd = ref(0);
const secondControllerEd = ref(0);
const thirdControllerEd = ref(0);
const palceholder = ref();

function addInputSkill() {
  skills.value.push({
    value: '',
    placeholder: 'Enter Skill...'
  });
}

function addInputHistory() {
  employmentHistory.value.push({
    title: '',
    selectedStartDate: null,
    selectedEndDate: null,
    value: '',
    titlePlaceHolder: 'Enter Title',
    placeholder: 'Enter Employment History...',
  })
}

function addInputEducation() {
  education.value.push({
    school: '',
    degree: '',
    city: '',
    description: '',
    selectedStartDate: null,
    selectedEndDate: null,
  })
}

const removeSkill = (index) => {
  skills.value.splice(index, 1);
};

const removeHistory = (index) => {
  employmentHistory.value.splice(index, 1);
};

const removeEducation = (index) => {
  education.value.splice(index, 1);
};
const selectedImage = computed(() => {
  return store.state.selectedImage
})
</script>

<script>
import { inject } from 'vue';
import FileUpload from '../../components/FileUpload.vue';
import BlueTemplate from "../templates/BlueTemplate.vue";

export default {
  components: {
    FileUpload,
    BlueTemplate,
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