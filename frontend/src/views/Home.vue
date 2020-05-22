<template>
  <div class="px-2 py-4 min-h-screen m-auto max-w-5xl">
    <div class="h-full flex flex-col space-y-6">
      <!-- <Navbar /> -->
      <h1 class="text-4xl text-yellow-700">
        Open Invitation
      </h1>
      <h2 class="text-xl font-semibold text-yellow-900">
        Featured Works
      </h2>
      <Carousel :value="works.slice(0, 3)" />
      <h2 class="text-xl font-semibold text-yellow-900">
        Archive
      </h2>
      <Archive :value="works"/>
      <h2 class="text-xl font-semibold text-yellow-900">
        About Us
      </h2>
      <div class="flex flex-col space-y-8 divide-gray-300 my-2 bg-white rounded-xl p-4 shadow-md">
        We are Open Invitation! We do things in theater? Idk really, but Anna and Phil are definitely involved. Other than that? Who's to say!!!
      </div>
      <footer>
        <p class="text-center text-xs font-semibold uppercase text-gray-500">
          <a href="mailto:coleghollant@gmail.com">💞 Cole Hollant</a>
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
import Archive from '@/components/Archive'
import Carousel from '@/components/Carousel'
// import Navbar from '@/components/Navbar'
export default {
  name: 'Home',
  components: {
    // Navbar,
    Carousel,
    Archive 
  },
  setup() {
    const works = require('@/assets/works.json')
    return { works }
  }
}
</script>
