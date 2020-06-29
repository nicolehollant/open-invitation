<template>
<div>
  <header class="w-full flex items-center justify-between">
    <router-link to="/" class="rounded-xl focus:bg-yellow-200 focus:outline-none focus:shadow-outline">
      <img 
        src="@/assets/logo.png" 
        alt="Open Invitation Arts Festival Logo" 
        class="w-24 h-24 sm:w-32 sm:h-32"
      >
    </router-link>
    <h2 class="hidden serif sm:block text-3xl lg:text-4xl font-semibold text-blue-600 text-center break-words">
      {{ title }}
    </h2>
    <div class="relative" v-on-click-outside="close">
      <div class="w-32 flex justify-end">
        <Icon 
          @click="toggleNav" 
          @keydown.enter="toggleNav" 
          @keydown.space="toggleNav" 
          icon="menu" 
          size="8" 
          class="text-blue-700 rounded-lg overflow-visible focus:bg-yellow-200 focus:outline-none focus:shadow-outline" 
          tabindex="0"
        />
      </div>
      <transition
        enter-active-class="transition-all transform duration-300 ease-out"
        leave-active-class="transition-all transform duration-200 ease-in"
        enter-class="opacity-0 scale-50 -translate-y-6"
        enter-to-class="opacity-100 scale-100 translate-y-0"
        leave-class="opacity-100 scale-100 translate-y-0"
        leave-to-class="opacity-0 scale-0 -translate-y-6"
      >
        <nav class="origin-top-right absolute z-50 right-0 p-1 mr-1 mt-1 w-max flex flex-col space-y-4 align-start bg-yellow-100 rounded-md shadow-xl border border-blue-400" v-if="menuUp">
          <router-link 
            v-for="link of links" 
            :key="link.to" 
            :to="link.to" 
            :exact="link.exact"
            class="block rounded px-2 sm:px-4 py-1 font-semibold text-right text-gray-700 hover:text-blue-600 focus:outline-none focus:bg-yellow-300 focus:text-yellow-900"
          >
            {{ link.name }}
          </router-link>
        </nav>
      </transition>
    </div>
  </header>
  <h2 class="serif sm:hidden text-2xl font-semibold text-blue-600 text-center">
    {{ title }}
  </h2>
</div>
</template>

<script>
import { Icon } from '@/components/basic'
import { ref } from '@vue/composition-api'
export default {
  name: 'Navbar',
  components: {
    Icon
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup() {
    const menuUp = ref(false)
    const toggleNav = () => menuUp.value = !menuUp.value
    const close = () => menuUp.value = false

    const toLink = (to, name, exact=false) => ({to, name, exact})
    const links = ref([
      toLink('/', 'Featured',  true),
      toLink('/archive', 'Archive'),
      toLink('/about', 'About Us'),
      toLink('/get-involved', 'Get Involved!'),
    ])

    return { 
      links,
      menuUp,
      toggleNav,
      close,
    }
  }
}
</script>

<style lang="postcss">
.router-link-exact-active {
  @apply text-blue-700 underline font-black
}

</style>