<template>
    <div class="columns">
        <div class="column has-background-white-bis ">

        </div>
        <div class="column is-one-quarter side">

        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    image: String,
    name: String,
    profile: String,
})
</script>

<style scoped>
.side {
    background-color: rgb(15, 15, 141);
    height:100%;
}
</style>