<script setup lang="ts">
  import { Boost } from '../types/bosses';

  const { image_url, featured, name } = defineProps<Boost>()
</script>

<template>
  <div class="border-2 w-[100px] h-[115px] p-2 flex flex-col justify-center items-center" :class="featured ? 'border-green-400' : 'border-white'">
    <div>
      <img :src="image_url" :alt="name" class="w-">
    </div>
    
    <p class="text-center truncate w-full" :class="featured ? 'text-green-400' : 'text-white'">{{ name }}</p>
  </div>
</template>