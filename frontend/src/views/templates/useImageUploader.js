import { ref } from 'vue';

export default function useImageUploader() {
  const selectedImage = ref(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    selectedImage.value = URL.createObjectURL(file);
  };

  return {
    selectedImage,
    handleImageUpload,
  };
}