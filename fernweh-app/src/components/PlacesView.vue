<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import type { PlacesList } from '@/models/PlacesList'

defineProps<{
  msg: string
}>()

const responseData = ref<PlacesList | null>(null)

onMounted(async () => {
  try {
    const response = await axios.get<PlacesList>('http://localhost:5262/Mock')
    responseData.value = response.data
    console.log(response)
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <div>
    <h1>Results</h1>
    <div>{{ responseData }}</div>
  </div>
</template>

<style scoped></style>
