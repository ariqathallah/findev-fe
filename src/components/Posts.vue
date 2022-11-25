<script>
import Post from "./Post.vue";
export default {
  name: "Posts",
  components: { Post },
};
</script>

<template>
  <div class="grid grid-cols-3 gap-y-9">
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
  </div>
</template>
