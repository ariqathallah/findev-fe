<script>
export default {
  name: "PostDetail",
};
</script>

<template>
  <div class="border border-gray-300 bg-gray-50 rounded-md p-6 shadow-sm mx-8">
    <div class="flex justify-between">
      <div class="flex">
        <!-- Image -->
        <img
          class="object-cover h-52 w-80 rounded-md mr-4"
          src="https://images.unsplash.com/photo-1609554496796-c345a5335ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />

        <div class="ml-4 flex flex-col justify-between">
          <!-- Title -->
          <h1 class="font-bold text-5xl">Cryptoko</h1>
          <!-- Owner -->
          <div class="flex items-center my-4">
            <img
              src="./../assets/avatar.jpg"
              alt=""
              class="w-12 h-12 rounded-full border border-gray-300 border-radius: 50%;"
            />
            <p class="font-semibold text-xl ml-4">El Mundo</p>
          </div>
          <!-- Stack -->
          <div class="flex justify-between">
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
          </div>
        </div>
      </div>
      <!-- Open/Finished/In Progress -->
      <div class="bg-green-500 text-white rounded-md h-fit w-fit px-3 py-1">
        Open
      </div>
    </div>

    <!-- Description -->
    <div class="my-8">
      <h2 class="font-semibold text-2xl">Description</h2>
      <p class="text-lg my-3 whitespace-pre-line">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. It is a long established fact that a reader will be
        distracted by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here, content
        here', making it look like readable English. Many desktop publishing
        packages and web page editors now use Lorem Ipsum as their default model
        text, and a search for 'lorem ipsum' will uncover many web sites still
        in their infancy. Various versions have evolved over the years,
        sometimes by accident, sometimes on purpose (injected humour and the
        like).
      </p>
    </div>

    <!-- Report post and Join Button -->
    <div class="flex justify-between items-center">
      <button class="flex items-center text-gray-400 hover:text-red-700">
        <p class="border border-gray-300 px-2 rounded-md">R</p>
        <p class="ml-1">Report Post</p>
      </button>
      <button
        type="submit"
        class="bg-blue-base w-fit px-4 py-1 font-medium text-gray-900 text-md rounded-md hover:bg-blue-600 transition-colors hover:text-white"
      >
        Join
      </button>
    </div>
  </div>
</template>
