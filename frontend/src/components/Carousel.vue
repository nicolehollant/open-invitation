<template>
<div>
  <div class="snap-x flex space-x-8 overflow-x-scroll sm:hidden">
    <ExhibitionCard 
      class="snap-start w-full flex-shrink-0"
      v-for="card in value" 
      :key="card.title"
      :title="card.title"
      :authors="card.authors"
      :description="card.description"
      :src="card.src"
      :alt="card.alt"
      :type="card.type"
      :iframe="card.iframe || null"
      :banner="card.banner"
      :bio="card.bio"
      :slug="card.slug"
    />
  </div>
  <div class="hidden sm:grid grid-cols-2">
    <ExhibitionCard 
      class="flex-shrink-0"
      v-for="card in value" 
      :key="card.title"
      :title="card.title"
      :authors="card.authors"
      :description="card.description"
      :src="card.src"
      :alt="card.alt"
      :type="card.type"
      :iframe="card.iframe || null"
      :banner="card.banner"
      :bio="card.bio"
      :slug="card.slug"
    />
  </div>
</div>
</template>

<script>
import ExhibitionCard from '@/components/ExhibitionCard'
export default {
  name: 'Carousel',
  components: {
    ExhibitionCard
  },
  props: {
    value: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="postcss">
.snap-x {
  scroll-snap-type: x mandatory;
}
.snap-start {
  scroll-snap-align: start;
}
</style>