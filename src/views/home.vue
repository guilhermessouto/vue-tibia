<script setup lang="ts">
  import CardDescription from '../components/card/description.vue'
  import CardContent from '../components/card/content.vue';
  import CardHeader from '../components/card/header.vue';
  import CardTitle from '../components/card/title.vue';
  import CardWrapper from '../components/card/wrapper.vue';
  import Header from '../components/header.vue';
  import NewsTicker from '../components/news-ticker.vue';
  import Section from '../components/section.vue'

  import fetchData from '../composables/fetch-data';
  import { BossesDataResponse } from '../types/bosses';
  import { CreaturesDataResponse } from '../types/creatures';
  import { NewsDataResponse } from '../types/news';

  const { data: news_data, isLoading: isLoadingNews } = fetchData<NewsDataResponse>({
    key: 'news', 
    url: '/news/archive/3'
  })

  const { data: bosses_data, isLoading: isLoadingBosses } = fetchData<BossesDataResponse>({
    key: 'bosses',
    url: '/boostablebosses'
  })

  const { data: creatures_data, isLoading: isLoadingCreatures } = fetchData<CreaturesDataResponse>({
    key: 'creatures',
    url: '/creatures'
  })
</script>

<template>
  <Header />
  
  <main class="w-full py-5 m-auto md:w-3/4 gap space-y-4">
    <div v-if="isLoadingBosses && isLoadingNews && isLoadingCreatures">
      <p>Carregando...</p>
    </div>

    <div v-else>
       <!-- news -->
      <Section>
        <h2 class="font-bold text-2xl text-white">News Ticker</h2>

        <!-- deco -->
        <div class="w-full h-0.5 my-3 bg-white"></div>

        <ul class="gap space-y-3">
          <li v-for="item in news_data?.news" :key="item.id">
            <NewsTicker 
              :content="item.news"
              :url="item.url"
              :date="item.date"
            />
          </li>
        </ul>
      </Section>

      <!-- boostable bosses -->
      <Section>
        <CardWrapper>
          <CardHeader>
              <CardTitle title="Boosted Boss"/>
              <RouterLink to="/boostablebosses" class="text-white underline">More</RouterLink>
          </CardHeader>

          <CardContent>
            <CardDescription>
              <p class="text-white">Today's boosted boss: <span>{{ bosses_data?.boostable_bosses.boosted.name }}</span></p>
              <p class="text-white">Defeating a boosted boss is extra lucrative. Boosted bosses contain more loot and count more kills for your Bosstiary.</p>
            </CardDescription>
            <div>
              <img 
                :alt="bosses_data?.boostable_bosses.boosted.name"
                :src="bosses_data?.boostable_bosses.boosted.image_url"
              >
            </div>
          </CardContent>
        </CardWrapper>
      </Section>

      <!-- creatures -->
      <Section>
        <CardWrapper>
          <CardHeader>
              <CardTitle title="Boosted Creature"/>
              <RouterLink to="/creatures" class="text-white underline">More</RouterLink>
          </CardHeader>

          <CardContent>
            <CardDescription>
              <p class="text-white">
                Today's boosted creature:
                <span>
                  <RouterLink class="underline":to="`/${creatures_data?.creatures.boosted.race}`">{{ creatures_data?.creatures.boosted.race }}</RouterLink>
                </span>
              </p>

              <p class="text-white">To avoid that always the same creature types are hunted and so eventually exterminated, the Tibian gods came up with the idea of the boosted creature. Every day one creature is chosen which is particularly rewarding for this day. This way adventurers from all over Tibia should be attracted to hunt a larger variety of monsters.</p>

              <p class="text-white">Hunting a boosted creature is extra lucrative. Boosted creatures contain more loot and yield more experience points. Moreover, they spawn at a faster rate.</p>

              <p class="text-white" >Good hunting!</p> 
            </CardDescription>

            <div>
              <img 
                :alt="creatures_data?.creatures.boosted.name"
                :src="creatures_data?.creatures.boosted.image_url"
                class="w-[75px] h-[75px]"
              >
            </div>
          </CardContent>
        </CardWrapper>
      </Section>

      <!-- spells -->
      <Section>
        <CardWrapper>
          <CardHeader>
              <CardTitle title="Spells" />
              <RouterLink to="/spells" class="text-white underline">More</RouterLink>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <p class="text-white">Here you can see the list of all available spells in Tibia. Click on any spell name to get detailed information. Please adjust the search criteria below if you want to see just certain spells. Also, you can sort the spell list by any column of your choice.</p>
            </CardDescription>
          </CardContent>
        </CardWrapper>
      </Section>
    </div>
  </main>
</template>
