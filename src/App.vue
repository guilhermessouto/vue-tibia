<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="bg-foreground max-w-[1750px] m-auto">
    <nav class="flex justify-between items-center py-4 px-5 md:px-20 bg-background">
      <div>
        <RouterLink to="/" class="text-2xl uppercase font-semibold text-white">Tibia</RouterLink>
      </div>

      <ul class='flex items-center gap space-x-4'>
        <li class="text-white hover:underline">
          <RouterLink to="/fansites">Fansites</RouterLink>
        </li>
        <li class="text-white hover:underline">
          <RouterLink to="/worlds">Worlds</RouterLink>
        </li>
      </ul>
    </nav>

    <RouterView />
  </div>
</template>