<template>
    <div class="columns">
        <div class="column is-one-third side">
            <img :src="imageData" class="profile-image">
            <p class="name">{{ name }}</p>
            <hr class="custom-hr">
        </div>
        <div class="column has-background-white-bis">

        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    imageData: String,
    name: String,
    profile: String,
})

</script>

<style scoped>
.side {
    background-color: rgb(73, 73, 111);
    height:1000px;
    color:white;
}
.name {
    text-align: center;
    top:10px;
    font-family: 'Libre Baskerville', serif;
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
    width: 70%;
    margin-left: auto;
    margin-right: auto;
}
</style>