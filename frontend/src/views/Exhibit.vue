<template>
  <div class="p-4 min-h-screen m-auto max-w-5xl">
    <div class="h-full flex flex-col space-y-16">
      <div class="space-y-4">
        <!-- <h1 class="text-xl text-yellow-900">
          <router-link to="/" class="rounded-lg hover:underline focus:outline-none focus:shadow-outline focus:underline">
            Open Invitation
          </router-link>
        </h1> -->
        <Navbar :title="state.entry.title" />
        <!-- <h2 class="serif text-4xl font-semibold text-yellow-700">
          {{ state.entry.title }}
        </h2> -->

        <p class="text-2xl text-center font-medium text-blue-900">
          {{ state.entry.authors.join(', ') }}
        </p>
      </div>

      <div class="bg-yellow-100 p-1 sm:p-4 rounded-lg shadow-md" id="media-container">
        <div v-if="state.entry.type === 'video'">
          <video controls class="w-full" frameborder="0" :poster="state.entry.poster">
            <source :src="state.entry.src" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <div v-else-if="state.entry.type === 'iframe'">
          <div class="aspect-ratio" v-html="state.entry.iframe"></div>
        </div>
        <div v-else-if="state.entry.type === 'pdf'" class="relative">
          <div id="content"
            :style="isFullscreen ? 'height: 100vh': 'height: 80vh'"
          >
            <div class="aspect-ratio-pdf" :style="isFullscreen ? 'height: 100vh': 'height: 80vh'">
              <pdf :src="state.entry.src" />
            </div>
          </div>
          <button class="absolute right-0 bottom-0 -m-2 p-2 bg-yellow-700 rounded-full shadow focus:outline-none focus:shadow-outline" @click="() => fullscreen('#content')">
            <Icon icon="fullscreen" size="8" class="text-white" />
          </button>
        </div>
        <div v-else>
          <p>hm, unknown media type</p>
        </div>
      </div>


      <div class="bg-yellow-100 space-y-16 p-4 rounded-lg shadow-md">

        <div class="flex flex-col-reverse sm:grid sm:grid-cols-2 sm:gap-6 sm:items-center">
          <div class="space-y-2">
            <h3 class="serif text-xl font-semibold text-yellow-900">
              About <span class="italic">{{ state.entry.title }}</span>
            </h3>
            <p class="text-gray-800 text-lg font-light leading-snug" v-html="state.entry.description" />
          </div>
          <img 
            class="block w-full object-cover h-16 sm:h-full shadow-md rounded-lg mb-6 sm:mb-0"
            style="min-height: 16rem"
            :src="state.entry.banner" 
            :alt="[state.entry.title, 'banner image'].join(' ')"
          >
        </div>

        <div class="flex flex-col sm:grid sm:grid-cols-2 space-y-6 sm:space-y-0 sm:gap-6 sm:items-center">
          <img 
            class="block w-full object-cover h-16 sm:h-full shadow-md rounded-lg"
            style="min-height: 16rem" 
            src="https://assets.website-files.com/5bff8886c3964a992e90d465/5c00fa3ad82b40e853c9952f_hero-3.svg" 
            alt="picture of the authors"
          >
          <div class="space-y-2">
            <h3 class="serif text-xl font-semibold text-yellow-900">
              Meet {{ getAuthors(state.entry.authors) }}
            </h3>
            <p class="text-gray-800 text-lg font-light leading-snug" v-html="state.entry.bio" />
          </div>
        </div>

        <div v-if="state.entry.other" class="flex justify-center">
          <div class="text-gray-700 text-center leading-relaxed" v-html="state.entry.other"></div>
        </div>
      </div>
      
      <AppFooter />
    </div>
  </div>
</template>

<script>
import { useFullscreen } from '@/composables/useFullscreen'
import useRoot from '@/composables/useRoot'
import pdf from '@/components/PDF'
import { Icon } from '@/components/basic'
import { reactive, watch, onMounted } from '@vue/composition-api'
export default {
  name: "Exhibit",
  components: {
    Icon,
    pdf
  },
  setup() {
    const { isFullscreen } = useFullscreen()
    const { injectRoot } = useRoot()
    const { $router, $route } = injectRoot()
    
    const works = require('@/assets/works.json')
    const state = reactive({ 
      entry: {},
      pdfSrc: '',
      numPages: undefined,
    })

    const redirect = () => $router.push('/')

    const loadExhibit = (r = $route.params) => {
      const slug = r.slug
      if (!slug) redirect()
      const entry = works.find(a => a.slug === slug)
      if (!entry) redirect()
      state.entry = entry
      // if(state.entry.type === 'pdf') {
      //   state.pdfSrc = pdf.createLoadingTask(state.entry.src)
      //   state.pdfSrc.promise.then(pdf => {
      //     state.numPages = pdf.numPages
      //   })
      // }
    }

    watch(
      () => $route,
      (r) => {
        loadExhibit(r.params)
      }
    )
    loadExhibit()

    const fullscreen = (querySelector) => {
      document.querySelector(querySelector).requestFullscreen()
    }

    const getAuthors = (authors, short=true) => {
      if (short) authors = authors.map(a => a.split(' ')[0])
      if (authors.length === 0) return 'the author'
      if (authors.length === 1) return authors[0]
      if (authors.length === 2) return authors.join(' and ')
      authors[authors.length - 1] = 'and ' + authors[authors.length - 1]
      return authors.join(', ')
    }

    onMounted(() => {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    })

    return { state, works, getAuthors, fullscreen, isFullscreen }
  }
}
</script>

<style lang="postcss">
.aspect-ratio {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* The height of the item will now be 56.25% of the width. */
}
.aspect-ratio-pdf {
  position: relative;
  margin: auto;
  width: 100%;
}
.aspect-ratio-pdf iframe, .aspect-ratio iframe {
  position: absolute; width: 100%; height: 100%; left: 0; top: 0;
}
.aspect-ratio-pdf >>> iframe, .aspect-ratio >>> iframe {
  position: absolute; width: 100%; height: 100%; left: 0; top: 0;
}

 /* purgecss ignore */
video[poster] {
  object-fit: cover;
}

.snap-y {
  scroll-snap-type: y proximity;
}
.snap-start {
  scroll-snap-align: start;
}
.snap-center {
  scroll-snap-align: center;
}
</style>