<script>
export default {
  name: "Post",
};
</script>

<template>
  <router-link
    to="/posts/asd"
    class="bg-gray-50 w-96 h-80 mx-auto block rounded-md hover:shadow"
  >
    <!-- Thumbnail -->
    <img
      class="object-cover h-2/5 w-full rounded-t-md"
      src="https://images.unsplash.com/photo-1609554496796-c345a5335ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt=""
    />
    <!-- Post Short Description -->
    <div class="px-4 py-3 flex flex-col justify-between h-3/5">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold">Cryptoko</h1>
        <!-- status -->
        <div
          class="bg-green-500 text-white font-light text-sm rounded-md px-3 py-1"
        >
          Open
        </div>
      </div>
      <p class="py-2">
        Cryptoko adalah tempat termudah untuk membeli dan menjual cryptocurrency
      </p>
      <div class="flex justify-between">
        <!-- stack -->
        <div class="flex">
          <div
            class="bg-white text-sm border border-gray-300 rounded-md px-2 py-1 mr-2"
          >
            React
          </div>
          <div
            class="bg-white text-sm border border-gray-300 rounded-md px-2 py-1 mr-2"
          >
            Go
          </div>
          <div
            class="bg-white text-sm border border-gray-300 rounded-md px-2 py-1 mr-2"
          >
            MongoDB
          </div>
        </div>
        <!-- Applicants -->
        <div class="bg-blue-200 text-sm rounded-md px-2 py-1 ml-2">
          8 applicants
        </div>
      </div>
    </div>
  </router-link>
</template>
