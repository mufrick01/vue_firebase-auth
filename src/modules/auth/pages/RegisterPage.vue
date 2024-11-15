<template>
  <div class=" h-100 d-flex flex-column justify-content-center mt-5 mt-lg-0">
    <h2 class="text-center">Register</h2>
    <form @submit.prevent="register">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label" :class="emailStyleStatus">Email address</label>
        <input v-model="email" @input="emailChange" type="email" class="form-control" id="exampleInputEmail1"
          aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label" :class="passwordStyleStatus">Password</label>
        <input v-model="password" @input="passwordChange" type="password" class="form-control"
          id="exampleInputPassword1">
      </div>
      <!-- <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">I accept the <a href="#">terms and conditions</a></label>
      </div> -->
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

const emailStyleStatus = ref('');
const passwordStyleStatus = ref('');

const router = useRouter();


const register = async () => {

  try {
    if (email.value.trim() === '' || password.value.trim() === '' || password.value.trim().length < 6) {
      throw Error('invalid fields')
    }

    const userCredentials = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredentials.user;
    console.log(user);
    localStorage.setItem('userToken', user.accessToken)

    router.replace({ name: 'home' });
  } catch (error) {
    alert('invalid fields', error.message);
  }

}


const emailChange = () => {

  if (email.value.trim() === '') {
    return emailStyleStatus.value = ''
  }
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email.value.trim().match(regex)) {
    return emailStyleStatus.value = 'text-success'
  }

  return emailStyleStatus.value = 'text-danger'
}

const passwordChange = () => {


  if (password.value.trim() === '') {
    return passwordStyleStatus.value = ''
  }
  if (password.value.trim().length >= 6) {
    return passwordStyleStatus.value = 'text-success'
  }

  return passwordStyleStatus.value = 'text-danger'
}



</script>
