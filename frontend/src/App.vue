<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import useRoot from '@/composables/useRoot'

export default {
  setup(props, context) {
    const { provideRoot } = useRoot()
    provideRoot(context.root)
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
  @apply bg-gray-200
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
