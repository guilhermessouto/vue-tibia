<script setup lang="ts">
  interface Props {
    title: string
  }

  const { title } = defineProps<Props>()
</script>
  
<template>
  <h3 class='text-white'>
    {{ title }}
  </h3>
</template>