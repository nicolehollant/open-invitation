<template>
  <div class="cursor-pointer group m-4 sm:m-2 lg:m-4 rounded-xl bg-white overflow-hidden shadow-md">
    <img 
      class="sepia w-full object-cover h-64 transition-all duration-500" 
      :src="src" 
      :alt="alt"
    >
    <div class="space-y-2 p-4">
      <h3 class="serif text-xl font-bold text-orange-700 leading-tight">
        {{ title }}
      </h3>
      <p class="text-sm font-medium text-gray-700">{{ authors.join(', ') }}</p>
      <p class="text-gray-800 font-light leading-snug">{{ description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ExhibitionCard',
    props: {
      title: {
        type: String,
        required: true
      },
      authors: {
        type: Array,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      src: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        required: true
      },
    }
  }
</script>

<style lang="postcss">
.sepia {
  filter: sepia(0.8) grayscale(0.1) brightness(0.8) saturate(0.8);
}
.group:hover .sepia {
  filter: unset;
}
</style>