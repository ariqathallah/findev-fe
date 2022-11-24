<script setup>
import Sidebar from "../components/Sidebar.vue";
import Header from "../components/Header.vue";
</script>

<template>
  <div class="flex min-h-screen w-full bg-white relative">
    <!-- Sidebar -->
    <Sidebar />
    <main class="flex-1 ml-auto">
      <!-- Header -->
      <Header />
      <!-- Content -->
      <div class="py-8">
        <router-view />
      </div>
    </main>
  </div>
</template>
