<!-- This is the login view. Users can login by entering a correct email and password -->
<template>
  <div class="container">
    <div class="row justify-content-center align-items-center">
      <div class="col-md-4">
        <form @submit.prevent="login">
          <h2 class="text-center">Login</h2>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="text" v-model="email" class="form-control" id="email" placeholder="Enter Email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="form-control" id="password" placeholder="Enter password">
          </div>
          <button type="submit" class="btn btn-primary btn-block ">Login</button>
          <p id="status_display"></p>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        // Send a POST request to your login API with email and password
        const response = await axios.post(import.meta.env.VITE_ROOT_API+ '/login', {
          email: this.email,
          password: this.password,
        });
          // Assuming your API responds with a token upon successful login
        const token = response.data.token;
          const user = response.data.user;

        // Store the token in local storage or a Vuex store for authentication
        localStorage.setItem('token', token);
         localStorage.setItem('user',JSON.stringify(user));

        if(user.role == 'employee')
        // Redirect to HomeView.vue or any other route
          this.$router.push('/');
        else{
           const statusDisplay = document.getElementById('status_display');
        statusDisplay.textContent = 'Should be redirected to admin page';
        }


        
      } catch (error) {
        // Handle login error
        console.error('Login failed:', error);
        const statusDisplay = document.getElementById('status_display');
        statusDisplay.textContent = error.response.data.message;
        // You can display an error message to the user if needed
      }
    },
  },
};
</script>


<style scoped>
.container{
  padding-top: 150px;
}

.form-group{
  margin-bottom: 20px;
}

</style>
