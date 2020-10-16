<template>
  <div class="authorization">
    <h1>LeadHit</h1>
    <custom-form/>
  </div>
</template>

<script>
import CustomForm from "../components/CustomForm.vue";

export default {
  components: {
    CustomForm
  }
};
</script>

<style scoped>
.custom-form {
  margin: 0 auto;
}
</style>
