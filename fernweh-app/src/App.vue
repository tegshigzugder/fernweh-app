<script setup lang="ts">
import MockCard from './mocks/MockCard.vue'
let placesview = '/placesview'
</script>

<template>
  <base-card>
    <h1>👋</h1>
    <base-button :to="placesview">Places</base-button>
  </base-card>
  <MockCard />
  <router-view></router-view>
</template>

<style scoped></style>
