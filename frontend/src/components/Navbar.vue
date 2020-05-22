<template>
  <!-- <div class="w-full p-2 md:p-4">
    <nav class="max-w-xl mx-auto flex justify-between align-baseline">
      <router-link :to="link.to" v-for="link of links" :key="link.to" :exact="link.exact">
        {{ link.name }}
      </router-link>
    </nav>
  </div> -->
  <div>
    <nav class="block w-full flex items-center justify-between sm:hidden">
      <Icon icon="menu" size="8" class="text-gray-900" />
      <div class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 shadow">
        <Icon 
          size="5" 
          class="text-gray-900" 
          :icon="theme === 'dark' ? 'sun' : 'moon'" 
          @click="toggleTheme"
        />
      </div>
    </nav>
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
  setup() {
    const theme = ref('light')
    const toLink = (to, name, exact=false) => ({to, name, exact})
    const links = ref([
      toLink('/', 'home',  true),
      toLink('/about', 'about'),
    ])
    const toggleTheme = () => theme.value = theme.value === 'dark' ? 'light' : 'dark'

    return { links, theme, toggleTheme }
  }
}
</script>