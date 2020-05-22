<template functional>
<svg 
  :class="[
    props.size == '1' ? 'w-1 h-1' :
    props.size == '2' ? 'w-2 h-2' :
    props.size == '3' ? 'w-3 h-3' :
    props.size == '4' ? 'w-4 h-4' :
    props.size == '5' ? 'w-5 h-5' : 
    props.size == '6' ? 'w-6 h-6' : 
    props.size == '8' ? 'w-8 h-8' : '',
    data.class,
    data.staticClass,
  ]"
  v-bind="data.attrs"
  v-on="listeners"
  :style="[data.style, data.staticStyle]"
  :stroke="props.stroke ? 'currentColor' : 'transparent'" 
  :fill="props.stroke ? 'transparent' : 'currentColor'" 
  :viewBox="props.stroke ? '0 0 24 24' : '0 0 20 20'"
>
  <template v-if="props.stroke">
    <!-- some wshit from https://heroicons.dev -->
  </template>
  <template v-else>
    <path 
      v-if="props.icon === 'menu'"
      d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clip-rule="evenodd"
      fill-rule="evenodd"
    />
    <path 
      v-if="props.icon === 'sun'"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" 
      clip-rule="evenodd" 
      fill-rule="evenodd" 
    />
    <path 
      v-if="props.icon === 'moon'"
      d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" 
    />
  </template>
</svg>
</template>

<script>
  export default {
    props: {
      icon: {
        type: String,
        required: true
      },
      stroke: {
        type: Boolean,
        default: false
      },
      size: {
        type: null,
        required: false,
        default: ''
      }
    }
  }
</script>