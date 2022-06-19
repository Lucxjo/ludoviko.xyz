<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  titleTemplate: (title) => {
    return title ? `${title} | Ludoviko` : 'Ludoviko'
  },
})
</script>