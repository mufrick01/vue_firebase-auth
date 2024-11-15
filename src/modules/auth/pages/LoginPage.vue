<template>
  <div class="h-100 d-flex flex-column justify-content-center mt-5 mt-lg-0">
    <h2>LoginPage works</h2>
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <!-- <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div> -->
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <RouterLink :to="{ name: 'register' }">Have no account? register here.</RouterLink>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { signInWithEmailAndPassword, auth } from '@/firebase/firebase-auth'
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');

const router = useRouter();

const login = async () => {

  try {
    const { user } = await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log('logeado con éxito')


    console.log(user.accessToken)
    localStorage.setItem('userToken', user.accessToken)

    router.replace({ name: 'home' })
  } catch (error) {
    alert('Error en login', error.message)
  }
}



</script>
