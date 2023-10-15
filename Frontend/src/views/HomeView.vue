<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
  <div class="row">
    <div class="text-center" >
      <router-link to="/newcustomer" class="btn btn-primary btn-super-lg m-2 btn-equal-size">New Customer</router-link>
      <router-link to="/returningcustomers" class="btn btn-secondary btn-super-lg m-2 btn-equal-size">Returning Customers</router-link>
    </div>
  </div>
</template>

<style scoped>
.btn-super-lg {
  font-size: 36px; /* Adjust the font size as needed */
  padding: 70px 70px; /* Adjust the padding as needed */
}
.btn-equal-size {
  width: 300px; /* Adjust the width as needed */
}
.text-center {
  margin-top: 200px;
}
</style>
