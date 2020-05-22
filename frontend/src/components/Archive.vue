<template>
  <div>
    <ul class="flex flex-col space-y-8 divide-gray-300 my-2 bg-white rounded-xl p-2 shadow-md">
      <li 
        v-for="item in value" 
        :key="item.title"
        class="space-y-1 group rounded-lg p-2 hover:bg-gray-200 transition-all duration-200 cursor-pointer"
      >
        <h4 class="serif text-lg font-medium leading-tight text-gray-800 group-hover:underline group-hover:text-orange-700">
          {{item.title}}
        </h4>
        <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">
          {{item.authors.join(', ')}}
        </p>
        <p class="text-gray-800 font-light leading-snug group-hover:text-black">
          {{item.description}}
        </p>
      </li>
    </ul>
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

<style lang="scss" scoped>

</style>