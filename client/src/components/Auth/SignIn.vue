<template>
  <v-container>
    <v-layout row wrap class="mt-5">
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text-center">Welcome Back!</h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card color="secondary" dark class="mt-6">
          <v-container>
            <v-form @submit.prevent="handleSigninUser">
              <v-layout>
                <v-flex xs12>
                  <v-text-field
                    v-model="username"
                    prepend-icon="mdi-face"
                    label="Username"
                    type="text"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12>
                  <v-text-field
                    v-model="password"
                    prepend-icon="mdi-lock-question"
                    label="Password"
                    type="password"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 class="text-center">
                  <v-btn color="accent mb-3" type="submit">Sign In</v-btn>
                  <h3>
                    Don't have an account?
                    <router-link to="/signup">Sign Up</router-link>
                  </h3>
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleSigninUser() {
      this.$store.dispatch("signinUser", {
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>

<style></style>
