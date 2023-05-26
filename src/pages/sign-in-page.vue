<template>
  <div class="login-page">
    <div class="login-box">
      <div class="login-logo">
        <router-link to="/"><b>Kino</b>CMS</router-link>
      </div>
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">Увійдіть, щоб почати сеанс</p>

          <form @submit.prevent="Login">
            <div class="input-email mb-2">
              <div class="input-group email">
                <input type="text" class="form-control" placeholder="Email" v-model="email" autocomplete="username">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
            <div class="input-password mb-2">
              <div class="input-group ">
                <input type="password" class="form-control" placeholder="Password" v-model="password" autocomplete="current-password">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
            <p class="error-msg" v-if="error">{{ error }}</p>
            <div class="row">
              <div class="col-8">
              </div>
              <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">Ввійти</button>
              </div>
            </div>
          </form>
          <p class="mb-1">
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { email, required, minLength, helpers } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

export default {
  name: 'login-page',
  setup () { return { v$: useVuelidate() } },
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  validations () {
    return {
      email: { required: helpers.withMessage('*Введіть електронну пошту', required), email: helpers.withMessage('*Недійсна адреса електронної пошти', email) },
      password: {
        required: helpers.withMessage('*Введіть пароль', required),
        minLength: helpers.withMessage('*Пароль повинен містити не менше 6 символів', minLength(6))
      }
    }
  },
  methods: {
    async Login () {
      try {
        const isForm = await this.v$.$validate()
        if (isForm) {
          await signInWithEmailAndPassword(
            getAuth(),
            this.email,
            this.password
          )
          this.email = ''
          this.password = ''
          this.v$.$reset()
          this.$router.push('/')
        }
      } catch (error) {
        switch (error.code) {
          case 'auth/wrong-password' || 'auth/user-not-found':
            this.error = '*Неправильний пароль або пошта'
            break
          case 'auth/too-many-requests':
            this.error = '*Заблоковано через забагато спроб'
            break
          case 'auth/invalid-email':
            this.error = '*Неправильний формат електронної пошти'
            break
          default:
            this.error = '*Помилка Firebase'
            break
        }
      }
    }
  },
  created () {
    document.title = 'Вхід'
  }
}
</script>
<style lang="scss" scoped>
.error-msg {
    color: red;
  }
</style>
