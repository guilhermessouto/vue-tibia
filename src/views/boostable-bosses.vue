<script setup lang="ts">
  import CardContent from '../components/card/content.vue';
  import CardHeader from '../components/card/header.vue';
  import CardTitle from '../components/card/title.vue';
  import CardWrapper from '../components/card/wrapper.vue';
  import CharacterTile from '../components/character-tile.vue';

  import fetchData from '../composables/fetch-data';
  import { BossesDataResponse } from '../types/bosses';

  const { data } = fetchData<BossesDataResponse>({
    key: 'bosses',
    url: '/boostablebosses'
  })
</script>

<template>
  <main>
    <CardWrapper>
      <CardHeader>
        <CardTitle title="Boosted Boss"/>
      </CardHeader>
      <CardContent>
        <div class="bg-background">
          <ul class="flex flex-wrap items-center justify-center">
            <li class="m-2" v-for="item in data?.boostable_bosses.boostable_boss_list">
              <CharacterTile 
                :featured="item.featured"
                :image_url="item.image_url"
                :name="item.name"
              />
            </li>
          </ul>
        </div>
      </CardContent>
    </CardWrapper>
  </main>
</template>