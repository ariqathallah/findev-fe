<script>
import MyProject from "./MyProject.vue";
export default {
  name: "MyProjects",
  components: { MyProject },
};
</script>

<template>
  <div class="grid grid-cols-3 gap-y-9">
    <MyProject />
  </div>
</template>
