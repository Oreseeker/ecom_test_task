<template>
  <div class="substrate">
    <slot></slot>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.substrate {
  background-color: white;
  box-shadow: 0px 0px 7px -3px black; /* #f1f2f2;*/
  padding: 30px;
}
</style>