import { reactive } from 'vue';

// Create a reactive state object
const state = reactive({
  selectedImage: '',
});


// Export the store object
export const store = {
  state,
};