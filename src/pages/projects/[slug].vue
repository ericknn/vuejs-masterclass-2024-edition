<script setup lang="ts">
usePageStore().pageData.title = 'Project'
const route = useRoute()
</script>


<template>
  <div>
    <h1>Project {{ route.params?.slug }}</h1>
  </div>
</template>
