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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <p class="ml-4">Home</p>
        </router-link>

        <!-- My Projects -->
        <router-link
          to="/my-projects"
          class="text-lg bg-white border border-gray-300 w-full rounded-md mb-8 px-6 py-3 text-center cursor-pointer hover:bg-blue-base hover:border-blue-base active:bg-blue-base flex justify-start items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
            />
          </svg>
          <p class="ml-4">My Projects</p>
        </router-link>

        <!-- Create -->
        <router-link
          to="/create"
          class="text-lg bg-white border border-gray-300 w-full rounded-md mb-8 px-6 py-3 text-center cursor-pointer hover:bg-blue-base hover:border-blue-base active:bg-blue-base flex justify-start items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p class="ml-4">Create</p>
        </router-link>
      </div>

      <!-- Logout -->
      <a
        href="/login"
        class="text-lg bg-white border border-gray-300 w-full rounded-md px-6 py-3 text-center cursor-pointer hover:bg-blue-base hover:border-blue-base active:bg-blue-base flex justify-center items-center"
      >
        <p>Logout</p>
      </a>
    </nav>
  </div>
</template>
