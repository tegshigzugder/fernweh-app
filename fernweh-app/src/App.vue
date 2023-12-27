<script setup lang="ts">
import type PlacesView from './components/PlacesView.vue'

let placesview = '/placesview'
</script>

<template>
  <base-card>
    <h1>👋</h1>
    <base-button :to="placesview">Places</base-button>
  </base-card>
  <router-view></router-view>
</template>

<style scoped></style>
