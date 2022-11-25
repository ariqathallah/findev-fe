<script>
export default {
  name: "Login",
};
</script>

<template>
  <div class="flex items-center justify-center h-screen bg-blue-base">
    <form>
      <div class="bg-white w-96 p-6 rounded shadow-sm">
        <!-- Login Text -->
        <div class="flex items-center justify-center mb-8">
          <h1 class="text-4xl font-medium">Login</h1>
        </div>

        <!-- Error Message -->
        <!-- <div class="bg-red-500 px-3 py-2 rounded text-gray-100 mb-3">
          <p>{errors}</p>
        </div> -->

        <!-- Email -->
        <label for="email" class="text-gray-800 text-lg">Email</label>
        <input
          type="email"
          id="email"
          class="w-full py-2 bg-white text-gray-800 px-2 outline-none mb-4 border border-gray-300 rounded focus:ring-blue-base focus:border-blue-base"
        />
        <!-- Password -->
        <label for="password" class="text-gray-800 text-lg">Password</label>
        <input
          type="password"
          id="password"
          class="w-full py-2 bg-white text-gray-800 px-2 outline-none mb-4 border border-gray-300 rounded focus:ring-blue-base focus:border-blue-base"
        />
        <!-- Login Button -->
        <button
          type="submit"
          class="bg-blue-500 w-full text-white text-md py-2 rounded hover:bg-blue-800 transition-colors mt-2 mb-5"
        >
          Login
        </button>

        <p>
          Do not have an account?
          <span class="text-blue-600 underline"
            ><router-link to="/register">Register</router-link></span
          >
        </p>
      </div>
    </form>
  </div>
</template>
