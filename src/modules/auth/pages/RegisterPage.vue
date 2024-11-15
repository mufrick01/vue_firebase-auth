<template>
  <div class=" h-100 d-flex flex-column justify-content-center mt-5 mt-lg-0">
    <h2>RegisterPage works</h2>
    <form @submit.prevent="register">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">I accept the <a href="#">terms and conditions</a></label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <RouterLink :to="{ name: 'login' }">have account? login here</RouterLink>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { createUserWithEmailAndPassword, auth } from '@/firebase/firebase-auth'
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();


const register = async () => {

  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredentials.user;
    console.log(user);
    localStorage.setItem('userToken', user.accessToken)

    router.replace({ name: 'home' });
  } catch (error) {
    alert('error al registrar usuario', error.message);
  }

}
</script>
