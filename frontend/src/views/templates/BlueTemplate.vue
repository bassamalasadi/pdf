<template>
    <div class="columns">
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
                    <p v-if="linkedin"> <a :href="linkedin">Linkedin</a></p>
                    <p v-if="github"> <a :href="github">Github</a></p>
                    <p v-if="portfolio"> <a :href="portfolio">Portfolio</a></p>
                    <p v-if="website"> <a :href="website">Website</a></p>
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
            <br><br><br>
            <div>
                <p class="profile-header">Profile</p>
                <p class="profile-text" v-html="profileText">
                </p>
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
    profile: String,
})
const profileValue = ref(props.profile)
const jobTitleValue = ref(props.jobTitle)
const profileText = computed(() => {
    return profileValue.value.replace(/\n/g, "<br>");
});
const jobTitleToUpperCase = computed(() => {
    return jobTitleValue.value.toUpperCase()
})

watchEffect(() => {
    profileValue.value = props.profile;
    jobTitleValue.value = props.jobTitle;
});
</script>

<style scoped>
.side {
    background-color: rgb(73, 73, 111);
    height:1200px;
    color:white;
}
.name {
    text-align: center;
    top:10px;
    font-size: 22px;
    font-family: 'Libre Baskerville', serif;
}
.jobTitle {
    text-align: center;
    top:10px;
    font-size: 12px;
    font-family: 'Wix Madefor Display', sans-serif;
}
.details-header {
    padding-top: 30px;
    left:20px;
    font-size: 18px;
    font-weight: bold;
    font-family: 'Archivo', sans-serif;
}
.details{
    left:26px;
    font-size: 14px;
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

}
</style>