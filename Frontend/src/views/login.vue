<!-- This is the login view. Users can login by entering a correct username and password -->
<template>
  <div class="container">
    <div class="row justify-content-center align-items-center">
      <div class="col-md-4">
        <form @submit.prevent="login">
          <h2 class="text-center">Login</h2>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" v-model="username" class="form-control" id="username" placeholder="Enter username">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="form-control" id="password" placeholder="Enter password">
          </div>
          <button type="submit" class="btn btn-primary btn-block ">Login</button>
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
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        // Send a POST request to your login API with username and password
        //const response = await axios.post('your_login_api_url', {
        //  username: this.username,
        //  password: this.password,
       // });

        // Assuming your API responds with a token upon successful login
        //const token = response.data.token;

        // Store the token in local storage or a Vuex store for authentication

        // Redirect to HomeView.vue or any other route
        this.$router.push('/');
      } catch (error) {
        // Handle login error
        console.error('Login failed:', error);
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
