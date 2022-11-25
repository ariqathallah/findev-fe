<script>
export default {
  name: "Create",
};
</script>

<template>
  <div class="border border-gray-300 bg-gray-50 rounded-md p-6 mx-8">
    <form class="flex justify-between">
      <div class="flex flex-col w-1/2 mr-6">
        <!-- Title -->
        <label for="title" class="text-gray-800 text-xl mb-1">Title</label>
        <input
          type="text"
          id="title"
          required
          class="bg-white text-gray-800 outline-none p-2 mb-6 border border-gray-300 rounded focus:ring-blue-base focus:border-blue-base"
        />
        <!-- Description -->
        <label for="description" class="text-gray-800 text-xl mb-1"
          >Description</label
        >
        <textarea
          id="description"
          required
          class="h-72 bg-white text-gray-800 outline-none p-2 mb-6 border border-gray-300 rounded focus:ring-blue-base focus:border-blue-base"
        ></textarea>
        <!-- Post Image -->
        <label for="postImage" class="text-gray-800 text-xl mb-1"
          >Post Image</label
        >
        <input
          type="file"
          id="postImage"
          class="bg-white text-gray-800 outline-none p-2 mb-6 border border-gray-300 rounded focus:ring-blue-base focus:border-blue-base"
        />
      </div>

      <div class="flex flex-col w-1/2 ml-6">
        <!-- Member -->
        <label for="member" class="text-gray-800 text-xl mb-1">Member</label>
        <input
          type="text"
          id="member"
          class="bg-white text-gray-800 outline-none p-2 mb-6 border border-gray-300 rounded focus:ring-blue-base focus:border-blue-base"
        />
        <!-- Stack -->
        <label for="stack" class="text-gray-800 text-xl mb-1">Stack</label>
        <input
          type="text"
          id="stack"
          required
          class="bg-white text-gray-800 outline-none p-2 mb-6 border border-gray-300 rounded focus:ring-blue-base focus:border-blue-base"
        />
        <!-- Deadline -->
        <label for="deadline" class="text-gray-800 text-xl mb-1"
          >Deadline</label
        >
        <input
          type="date"
          id="deadline"
          required
          class="bg-white text-gray-800 outline-none p-2 mb-6 border border-gray-300 rounded focus:ring-blue-base focus:border-blue-base"
        />

        <!-- Publish Button -->
        <button
          type="submit"
          class="bg-blue-base w-28 text-gray-800 text-md py-2 rounded hover:bg-blue-600 transition-colors hover:text-white"
        >
          Publish
        </button>
      </div>
    </form>
  </div>
</template>
