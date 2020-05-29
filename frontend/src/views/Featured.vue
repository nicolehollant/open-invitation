<template>
  <div class="px-2 py-4 h-full m-auto max-w-5xl">
    <div class="h-full flex flex-col space-y-6">
      <Navbar title="Featured Works" />
      
      <Carousel :value="works.slice(0, 4)" />
      
      <AppFooter />
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
export default {
  name: 'Featured',
  components: {
    Carousel,
  },
  setup() {
    const works = require('@/assets/works.json')
    return { works }
  }
}
</script>
