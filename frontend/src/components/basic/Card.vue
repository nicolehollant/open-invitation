<template>
<div v-on="$listeners" v-bind="$attrs" class="card  rounded-lg shadow-md"
  :class="{'p-1 sm:p-4': padded}"
>
  <slot />
</div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    padded: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="postcss">
.card {
  @apply bg-white
}
.theme-yellow .card {
  @apply bg-yellow-100
}
</style>