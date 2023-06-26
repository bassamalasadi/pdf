<template>
    <br>
    <div>
        <div>
            <button class="button" @click="increaseWidth">+</button>
            <button class="button" @click="decreaseWidth">-</button>
        </div>
        <div :class="['columns cv-page', { 'increased-width': isWidthIncreased , 'decreased-width': isWidthDecreased}]">
            <div class="column is-one-third side">
                <br>
                <br>
                <img :src="imageData" class="profile-image">
                <p class="name">{{ name }}</p>
                <p class="jobTitle">{{ jobTitleToUpperCase }}</p>
                <hr class="custom-hr">
                <div v-if="email || phone || country || city">
                    <p class="details-header">Details</p>
                    <div class="details">
                        <p v-if="email"> {{ email }}</p>
                        <p v-if="phone"> {{ phone }}</p>
                        <p v-if="country"> {{ country }}</p>
                        <p v-if="city"> {{ city }}</p>
                    </div>
                </div>
                <div v-if="linkedin || github || portfolio || website">
                    <p class="details-header">Links</p>
                    <div class="details">
                        <p v-if="linkedin"> <a class="has-text-white" :href="linkedin">Linkedin</a></p>
                        <p v-if="github"> <a class="has-text-white" :href="github">Github</a></p>
                        <p v-if="portfolio"> <a class="has-text-white" :href="portfolio">Portfolio</a></p>
                        <p v-if="website"> <a class="has-text-white" :href="website">Website</a></p>
                    </div>
                </div>
                <div v-if="skills.length > 0">
                    <p class="details-header">Skills</p>
                    <div
                        v-for="skill in skills"
                        class="details"
                    >
                    <p v-if="skill.value.length > 0">
                        {{ skill.value }}
                    </p>
                    </div>
                </div>
            </div>
            <div class="column has-background-white-bis">
                <br>
                <div>
                    <p class="profile-header">Profile</p>
                    <p class="profile-text" v-html="profileText"></p>
                    <br>
                    <div v-if="employmentHistory.length > 0">
                        <p class="profile-header">Employment History</p>
                        <ul v-for="item in employmentHistory" class="">
                            <div v-if="item.title.length > 0">
                                <li class="ml-3 is-size-6">
                                    <p>{{ item.title }}</p>
                                </li>
                                <span class="ml-4 pl-3 is-size-7"> {{ formattedDate(item.selectedStartDate) }}  -  
                                    {{ formattedDate(item.selectedEndDate) ||  PRESENT }}
                                </span>
                                <p v-if="item.value.length > 0" class="ml-5" v-html="convertEnterText(item.value)"></p>
                            </div>
                            <br>    
                        </ul>
                    </div>
                    <br>
                    <div v-if="education.length > 0">
                        <p class="profile-header">Education</p>
                        <ul v-for="item in education" class="">
                            <div v-if="item.school.length > 0 && item.degree.length > 0 && item.city.length > 0">
                                <div class="ml-3 has-text-weight-bold is-size-6">
                                    {{ item.school }} - {{ item.degree }} - {{ item.city }}
                                </div>
                                <span class="ml-5 is-size-7"> {{ formattedDate(item.selectedStartDate) }}  -  
                                    {{ formattedDate(item.selectedEndDate) ||  PRESENT }}
                                </span>
                                <p v-if="item.description.length > 0" class="ml-3 profile-text" v-html="convertEnterText(item.description)"></p>
                            </div>
                            <br>    
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue'
const props = defineProps({
    imageData: String,
    name: String,
    jobTitle: String,
    email: String,
    phone: String,
    country: String,
    city: String,
    linkedin: String,
    github: String,
    portfolio: String,
    website: String,
    skills: Array,
    employmentHistory: Array,
    education: Array,
    profile: String,
})
const profileValue = ref(props.profile)
const jobTitleValue = ref(props.jobTitle)
const isWidthIncreased = ref(false)
const isWidthDecreased = ref(false)

const profileText = computed(() => {
    return profileValue.value.replace(/\n/g, "<br>")
})

const jobTitleToUpperCase = computed(() => {
    return jobTitleValue.value.toUpperCase()
})

const formattedDate = (date) => {
    if (date) {
      const dateObj = new Date(date)
      return dateObj.toISOString().split('T')[0]
    }
    return null
}

const convertEnterText = (item) => {
    return item.replace(/\n/g, "<br>")
}

const increaseWidth = () => {
    isWidthDecreased.value = false;
    isWidthIncreased.value = true;
}

const decreaseWidth = () => {
    isWidthIncreased.value = false
    isWidthDecreased.value = true;
}

watchEffect(() => {
    profileValue.value = props.profile
    jobTitleValue.value = props.jobTitle
})
</script>

<style scoped>
.side {
    background-color: rgb(73, 73, 111);
    color:white;
}
.name {
    text-align: center;
    top:10px;
    font-size: 18px;
    font-family: 'Libre Baskerville', serif;
}
.jobTitle {
    text-align: center;
    top:10px;
    font-size: 10px;
    font-family: 'Wix Madefor Display', sans-serif;
}
.details-header {
    padding-top: 30px;
    left:10px;
    font-size: 14px;
    font-weight: bold;
    font-family: 'Archivo', sans-serif;
}
.details{
    left:16px;
    font-size: 12px;
    font-family: 'Quicksand', sans-serif;

}
.custom-hr {
    width: 30%;
    background-color: rgb(183, 183, 183);
    margin-left: auto;
    margin-right: auto;
}
.profile-image {
    display: block;
    border-radius: 50%;
    width: 40%;
    margin-left: auto;
    margin-right: auto;
}

.profile-header {
    font-size: 20px;
    font-family: 'Archivo', sans-serif;
    font-family: 'Libre Baskerville', serif;
}
.profile-text {
    font-size: 12px;
    font-family: 'Archivo', sans-serif;
}

ul {
    list-style-type: square;
  }

.cv-page {
  /* Set the A4 page size and styling */
  width: 260mm;
  height: 297mm;
  padding: 5mm 30mm;
  transition: width 1.5s ease-in-out;
  opacity: 1;
  /* Add any other desired styling */
}
.increased-width {
  width: 330mm;
}

.decreased-width {
  width: 260mm;
}

</style>