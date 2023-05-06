<template>
  <div class="field is-grouped">
    <p class="control is-expanded">
      <input class="input" type="text" :placeholder="placeholder" />
    </p>
    <p class="control">
      <a class="button is-info"> Search </a>
    </p>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const props = defineProps({
  placeholder: {
    type: String,
    default: '',
  },
})

const placeholder = inject('palceholder')
</script>