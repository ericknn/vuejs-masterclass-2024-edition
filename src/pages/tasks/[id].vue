<script setup lang="ts">

usePageStore().pageData.title = 'My Task'

const route = useRoute()

</script>


<template>
  <div>
    <h1>Task {{ route.params?.id }}</h1>
  </div>
</template>
