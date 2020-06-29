<template>
  <div>
    <Card>
      <ul class="flex flex-col space-y-4 sm:space-y-8 divide-gray-300">
        <li 
          v-for="item in value" 
          :key="item.title"
          class="space-y-1 group rounded-lg p-2 hover:bg-gray-200 focus:bg-gray-200 transition-all duration-200 cursor-pointer focus:outline-none focus:shadow-outline"
          @click="$router.push(`/exhibit/${item.slug}`)"
          @keydown.space="$router.push(`/exhibit/${item.slug}`)"
          @keydown.enter="$router.push(`/exhibit/${item.slug}`)"
          tabindex="0"
        >
          <h4 class="serif text-lg font-medium leading-tight text-gray-800 group-hover:underline group-hover:text-orange-700 group-focus:underline group-focus:text-orange-700">
            {{item.title}}
          </h4>
          <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900 group-focus:text-gray-900">
            {{item.authors.join(', ')}}
          </p>
          <p class="text-gray-800 font-light leading-snug clamp-3 group-hover:text-black group-focus:text-black">
            {{item.description}}
          </p>
        </li>
      </ul>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'Archive',
  props: {
    value: {
      type: Array,
      default: () => []
    }
  }
}
</script>