<template>
  <div class="ui middle aligned center aligned grid">
    <div class="column">
      <h2 class="ui blue image header">
        <div class="content">
          Log in to your account
        </div>
      </h2>
      <form class="ui large form" @submit.prevent="onSubmit" :class="{ error }">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" v-model="email" placeholder="E-mail address">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" v-model="password" placeholder="Password">
            </div>
          </div>
          <button type="submit" class="ui fluid large blue submit button ">Login
          </button>
        </div>

        <div class="ui error message">Oops, we couldn't log you in!</div>

      </form>

    </div>
  </div>
</template>

<script>
import authAPI from '../auth';

export default {
  name: 'Login',
  data: () => ({
    email: null,
    password: null,
    error: false,
  }),
  methods: {
    onSubmit() {
      authAPI.login(this.email, this.password)
        .then(() => this.$router.push('/users/1'))
        .catch(() => { this.error = true; });
    },
  },
};
</script>
  <style type="text/css">
    body {
      background-color: #DADADA;
    }
    body > .grid {
      height: 100%;
    }
    .image {
      margin-top: -100px;
    }
    .column {
      max-width: 450px;
    }
  </style>