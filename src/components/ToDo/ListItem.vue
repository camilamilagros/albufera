<template>
  <p class="p-3 m-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
    {{ name }}
  </p>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    name: String
  },
}
</script>
