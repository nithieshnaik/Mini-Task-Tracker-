<!-- src/components/LoginForm.vue -->
<template>
  <div>
    <nav>
      <h2>Task - Tracker</h2>
    </nav>
   
    <h2>Signup</h2>
    <form @submit.prevent="signup" class="form">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="password" required />
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" v-model="confirmPassword" required />
      </div>
     
      <button type="submit" class="btn signup-btn">Signup</button>

      <p>Do have an account? <router-link to="/login">Login</router-link></p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SignupForm',
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    async signup() {
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      try {
        await axios.post('http://localhost:3000/auth/signup-user', {
          username: this.username,
          password: this.password,
        });
        this.$router.push('/login');
      } catch (error) {
        alert('Invalid Credentials');
        console.error('Signup failed', error);
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
  color: black;
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