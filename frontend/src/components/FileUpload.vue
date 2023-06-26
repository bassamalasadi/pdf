<template>
  <div>
    <div class="file">
      <label class="file-label">
        <input class="file-input" type="file" name="resume" @change="handleImageUpload">
        <span class="file-cta">
          <span class="file-icon">
            <i class="fas fa-upload"></i>
          </span>
          <span class="file-label">
            Choose a Picture
          </span>
        </span>
      </label>
    </div>
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
