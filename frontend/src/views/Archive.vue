<template>
<div class="px-2 py-4 h-full m-auto max-w-5xl">
  <div class="h-full flex flex-col space-y-6">
    <Navbar title="Archive" />
    
    <Archive :value="works"/>
    
    <AppFooter />
  </div>
</div>
</template>

<script>
import Archive from '@/components/Archive'

export default {
  name: 'GetInvolved',
  components: {
    Archive 
  },
  setup() {
    const works = require('@/assets/works.json')
    return { works }
  }
}
</script>