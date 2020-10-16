<template>
  <div class="submit-button" @click="$emit('click')">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.submit-button {
    background-color: #42b983; 
    color: white;
    cursor: pointer;
    padding: 10px 20px;
    width: max-content;
}
</style>