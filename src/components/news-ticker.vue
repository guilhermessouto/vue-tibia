<script setup lang="ts">
  import DateFormat from '../utils/date-format';

  interface Props {
    url: string
    content: string
    date: string
  }

  const { content, url, date } = defineProps<Props>()
</script>

<template>
  <div class="flex">
    <span class="text-white">{{ DateFormat(date) }} |</span>
    
    <div class="ml-4">
      <a :href="url" class="text-white underline font-semibold" target="_blank">
        {{ content }}
      </a>
    </div>
  </div>
</template>