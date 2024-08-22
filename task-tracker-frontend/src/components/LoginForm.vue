<!-- src/components/LoginForm.vue -->
<template>
  <div>
    <nav>
      <h2>Task - Tracker</h2>
    </nav>
   
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username</label>
        <input type="text" v-model="username"  required />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>
    <p>Don't have an account? <router-link to="/signup">Signup</router-link></p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(
          'http://localhost:3000/auth/login-user',
          {
            username: this.username,
            password: this.password,
          },
        );
        localStorage.setItem('token', response.data.token);
        this.$router.push('/tasks');
      } catch (error) {
        this.errorMessage = 'Invalid Credentials';
      }
    },
  },
};
</script>

<style scoped>
nav {
  padding: 8px;
  border: 5px;
  background-color: #28a745;
  width: 100%;
  height: 50px;
  margin: 10px;
}
nav h2 {
  color: aliceblue;
  font-size: 25px;
}

p {
  text-align: center;
  margin-top: 1rem;
  color: black
} 
label{
  color: black;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 1rem;
}
</style>