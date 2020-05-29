<template>
  <div 
    @click="$router.push(`/exhibit/${slug}`)"
    @keydown.space="$router.push(`/exhibit/${slug}`)"
    @keydown.enter="$router.push(`/exhibit/${slug}`)"
    tabindex="0"
    class="cursor-pointer group m-4 sm:m-2 lg:m-4 rounded-xl bg-yellow-100 overflow-hidden shadow-md focus:shadow-outline focus:outline-none"
  >
    <img 
      class="sepia w-full object-cover h-64 transition-all duration-500" 
      :src="banner" 
      :alt="[title, 'banner image'].join(' ')"
    >
    <div class="space-y-2 p-4">
      <h3 class="serif text-xl font-bold text-orange-700 group-hover:text-blue-700 group-focus:text-blue-700 leading-tight">
        {{ title }}
      </h3>
      <p class="text-sm font-medium text-gray-700 leading-tight">{{ authors.join(', ') }}</p>
      <p class="text-gray-800 font-light leading-snug clamp-10">{{ description }}</p>
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
      type: {
        type: String,
        required: true
      },
      iframe: {
        type: String,
        default: ''
      },
      slug: {
        type: String,
        required: true
      },
      bio: {
        type: String,
        required: true
      },
      banner: {
        type: String,
        required: true
      },
      other: {
        type: String,
        default: ''
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
.group:focus .sepia {
  filter: unset;
}
</style>