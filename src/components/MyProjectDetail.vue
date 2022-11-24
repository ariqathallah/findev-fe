<script>
export default {
  name: "MyProjectDetail",
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
                class="bg-white border border-gray-300 rounded-md px-2 py-1 mr-3"
              >
                React
              </div>
              <div
                class="bg-white border border-gray-300 rounded-md px-2 py-1 mr-3"
              >
                Go
              </div>
              <div
                class="bg-white border border-gray-300 rounded-md px-2 py-1 mr-3"
              >
                MongoDB
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Status and Edit & Delete -->
      <div class="flex flex-col justify-between items-end">
        <!-- Status: Open/Finished/In Progress -->
        <div class="bg-green-500 text-white rounded-md h-fit w-fit px-3 py-1">
          Open
        </div>
        <!-- Edit & Delete -->
        <div class="flex flex-col items-end">
          <!-- Edit -->
          <button class="my-1 hover:text-blue-700 flex items-center">
            <p>Edit Project</p>
            <p class="px-2 rounded-md ml-2 border border-blue-500">E</p>
          </button>
          <!-- Delete -->
          <button class="my-1 hover:text-red-700 flex items-center">
            <p>Delete Project</p>
            <p class="px-2 rounded-md ml-2 border border-red-500">X</p>
          </button>
        </div>
      </div>
    </div>

    <!-- Description -->
    <div class="my-8">
      <p class="font-semibold text-2xl">Description</p>
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

    <!-- Member and Request -->
    <div class="flex">
      <!-- Member -->
      <div class="basis-2/3">
        <p class="font-semibold text-2xl mb-4">Member</p>
        <!-- User -->
        <div class="flex items-center mb-3">
          <img
            src="./../assets/avatar.jpg"
            alt=""
            class="w-12 h-12 rounded-full border border-gray-300 border-radius: 50%;"
          />
          <p class="text-xl ml-4">El Mundo</p>
        </div>
        <!-- User -->
        <div class="flex items-center mb-3">
          <img
            src="./../assets/avatar.jpg"
            alt=""
            class="w-12 h-12 rounded-full border border-gray-300 border-radius: 50%;"
          />
          <p class="text-xl ml-4">El Mundo</p>
        </div>
      </div>

      <!-- Requests -->
      <div class="basis-1/3">
        <p class="font-semibold text-2xl mb-4">User Requests</p>
        <!-- Request By a User -->
        <div>
          <!-- User -->
          <div class="flex justify-between items-center mb-3">
            <div class="flex items-center">
              <img
                src="./../assets/avatar.jpg"
                alt=""
                class="w-12 h-12 rounded-full border border-gray-300 border-radius: 50%;"
              />
              <p class="text-xl ml-4">El Mundo</p>
            </div>
            <!-- Accept or Reject Button -->
            <div>
              <button
                class="ml-2 border border-green-500 px-2 py-1 rounded hover:bg-green-500 hover:text-white"
              >
                Accept
              </button>
              <button
                class="ml-2 border border-red-500 px-2 py-1 rounded hover:bg-red-500 hover:text-white"
              >
                Reject
              </button>
            </div>
          </div>
          <!-- User -->
          <div class="flex justify-between items-center mb-3">
            <div class="flex items-center">
              <img
                src="./../assets/avatar.jpg"
                alt=""
                class="w-12 h-12 rounded-full border border-gray-300 border-radius: 50%;"
              />
              <p class="text-xl ml-4">El Mundo</p>
            </div>
            <!-- Accept or Reject Button -->
            <div>
              <button
                class="ml-2 border border-green-500 px-2 py-1 rounded hover:bg-green-500 hover:text-white"
              >
                Accept
              </button>
              <button
                class="ml-2 border border-red-500 px-2 py-1 rounded hover:bg-red-500 hover:text-white"
              >
                Reject
              </button>
            </div>
          </div>
          <!-- User -->
          <div class="flex justify-between items-center mb-3">
            <div class="flex items-center">
              <img
                src="./../assets/avatar.jpg"
                alt=""
                class="w-12 h-12 rounded-full border border-gray-300 border-radius: 50%;"
              />
              <p class="text-xl ml-4">El Mundo</p>
            </div>
            <!-- Accept or Reject Button -->
            <div>
              <button
                class="ml-2 border border-green-500 px-2 py-1 rounded hover:bg-green-500 hover:text-white"
              >
                Accept
              </button>
              <button
                class="ml-2 border border-red-500 px-2 py-1 rounded hover:bg-red-500 hover:text-white"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
