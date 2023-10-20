<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav class="navbar navbar-expand navbar-light bg-light">
      <!--Main brand for the navbar-->
      <div class="container">
        <router-link to="/"><img src="@/assets/Today's_Vision_Logo.png" alt="..." height="70"></router-link>
      
        <ul class="nav navbar-nav mr-auto">
          <!--Navigation to other features-->
          <li class="nav-item">
            <router-link class="nav-link" to="/newcustomer">New Customer</router-link>
          </li>
          
          <li class="nav-item">
            <router-link class="nav-link" to="/returningcustomers">Returning Customers</router-link>
          </li>
        </ul>
    </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
