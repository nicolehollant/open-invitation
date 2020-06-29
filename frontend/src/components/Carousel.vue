<template>
<transition
  appear
  enter-active-class="transition-all transform duration-300 ease-out"
  leave-active-class="transition-all transform duration-200 ease-in"
  enter-class="opacity-50 scale-90"
  enter-to-class="opacity-100 scale-100 translate-x-0"
  leave-class="opacity-100 scale-100 translate-x-0"
  leave-to-class="opacity-0 scale-0 translate-x-1/3"
>
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
</transition>
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