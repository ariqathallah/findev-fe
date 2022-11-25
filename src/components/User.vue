<script>
export default {
  name: "User",
};
</script>

<template>
  <div class="border border-gray-300 bg-gray-50 rounded-md p-8 mx-8">
    <div class="flex flex-col items-center gap-y-2">
      <!-- Profile Photo -->
      <img
        src="./../assets/avatar.jpg"
        alt=""
        class="w-20 h-20 rounded-full border-radius: 50%;"
      />
      <!-- Fullname -->
      <div>
        <p class="text-lg mb-2">Full Name</p>
        <input
          placeholder="El Mundo"
          type="text"
          id="title"
          class="bg-white text-gray-800 outline-none w-96 py-2 px-4 mb-2 border border-gray-300 rounded focus:ring-blue-base focus:border-blue-base placeholder-gray-700"
        />
      </div>
      <!-- Email -->
      <div>
        <p class="text-lg mb-2">Email</p>
        <input
          placeholder="elmundo@gmail.com"
          type="email"
          id="title"
          class="bg-white text-gray-800 outline-none w-96 py-2 px-4 mb-2 border border-gray-300 rounded focus:ring-blue-base focus:border-blue-base placeholder-gray-700"
        />
      </div>

      <!-- Password -->
      <div>
        <p class="text-lg mb-2">Password</p>
        <input
          placeholder="•••••••••"
          type="password"
          id="title"
          class="bg-white text-gray-800 outline-none w-96 py-2 px-4 mb-2 border border-gray-300 rounded focus:ring-blue-base focus:border-blue-base placeholder-gray-700"
        />
      </div>

      <!-- Phone Number -->
      <div>
        <p class="text-lg mb-2">Phone Number</p>
        <input
          placeholder="0812-3456-7890"
          type="text"
          id="title"
          class="bg-white text-gray-800 outline-none w-96 py-2 px-4 mb-2 border border-gray-300 rounded focus:ring-blue-base focus:border-blue-base placeholder-gray-700"
        />
      </div>
      <!-- Stack -->
      <div>
        <p class="text-lg mb-2">Stack</p>
        <input
          placeholder="Go, React, MongoDB"
          type="text"
          id="title"
          class="bg-white text-gray-800 outline-none w-96 py-2 px-4 mb-2 border border-gray-300 rounded focus:ring-blue-base focus:border-blue-base placeholder-gray-700"
        />
      </div>

      <!-- Save Changes -->
      <button
        type="submit"
        class="bg-blue-base w-fit text-gray-800 text-md mt-2 py-2 px-4 rounded hover:bg-blue-600 transition-colors hover:text-white"
      >
        Save Changes
      </button>
    </div>
  </div>
</template>
