<template>
  <div>
    <input type="file" @change="handleImageUpload" />
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';
const store = inject('store');

function handleImageUpload(event) {
  const file = event.target.files[0];
  store.state.selectedImage = (URL.createObjectURL(file));
}

</script>
