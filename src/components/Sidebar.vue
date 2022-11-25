<script>
export default {};
</script>

<template>
  <div class="h-screen w-64 px-9 bg-gray-50 sticky top-0">
    <!-- Logo -->
    <div class="text-center items-center mt-6 mb-16">
      <router-link to="/" class="text-4xl font-bold text-gray-800">
        <!-- <h1 class="text-4xl font-bold text-gray-800">FinDev</h1> -->
        FinDev
      </router-link>
    </div>

    <!-- Nav -->
    <nav class="flex flex-col h-4/5 justify-between">
      <div>
        <!-- Home -->
        <router-link
          to="/"
          class="text-lg bg-white border border-gray-300 w-full rounded-md mb-8 px-6 py-3 text-center cursor-pointer hover:bg-blue-base hover:border-blue-base active:bg-blue-base flex justify-start items-center"
        >
          <span class="material-symbols-outlined"> home </span>
          <div class="ml-2">Home</div>
        </router-link>

        <!-- My Projects -->
        <router-link
          to="/my-projects"
          class="text-lg bg-white border border-gray-300 w-full rounded-md mb-8 px-6 py-3 text-center cursor-pointer hover:bg-blue-base hover:border-blue-base active:bg-blue-base flex justify-start items-center"
        >
          <span class="material-symbols-outlined"> grid_view </span>
          <p class="ml-2">My Projects</p>
        </router-link>

        <!-- Create -->
        <router-link
          to="/create"
          class="text-lg bg-white border border-gray-300 w-full rounded-md mb-8 px-6 py-3 text-center cursor-pointer hover:bg-blue-base hover:border-blue-base active:bg-blue-base flex justify-start items-center"
        >
          <span class="material-symbols-outlined"> add_box </span>
          <p class="ml-2">Create</p>
        </router-link>
      </div>

      <!-- Logout -->
      <router-link
        to="/login"
        class="text-lg bg-white border border-gray-300 w-full rounded-md mb-8 px-6 py-3 text-center cursor-pointer hover:bg-blue-base hover:border-blue-base active:bg-blue-base flex justify-start items-center"
      >
        <span class="material-symbols-outlined"> logout </span>
        <p class="ml-2">Logout</p>
      </router-link>
    </nav>
  </div>
</template>
