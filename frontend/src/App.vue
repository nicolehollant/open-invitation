<template>
  <div id="app" :class="theme">
    <button class="fixed bottom-0 right-0 m-8 focus:outline-none focus:shadow-outline rounded-full" @click="toggleTheme">
      <Icon :icon="theme==='theme-yellow' ? 'sun' : 'moon'" size="6" />
    </button>
    <router-view/>
  </div>
</template>

<script>
import useRoot from '@/composables/useRoot'
import { ref, onMounted } from '@vue/composition-api'

export default {
  setup(props, context) {
    const theme = ref('theme-yellow')
    const { provideRoot } = useRoot()
    provideRoot(context.root)

    function toggleTheme() {
      theme.value = theme.value === 'theme-yellow' ? 'theme-gray' : 'theme-yellow'
      updateTheme()
    }

    function updateTheme() {
      if(theme.value === 'theme-gray') {
        document.body.style.backgroundColor = '#f7fafc'
      } else {
        document.body.style.backgroundColor = '#faf089'
      }
    }

    onMounted(() => {
      updateTheme()
    })

    return { theme, toggleTheme, updateTheme }
  }
}
</script>

<style lang="postcss">
/* @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');
.serif {
  font-family: 'Roboto Slab', 'EB Garimond', Georgia, 'Times New Roman', Times, serif;
}
html {
  @apply bg-blue-300
}
body {
  @apply min-h-screen
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply min-h-screen border-t-4 border-blue-400 text-gray-900
}
</style>
