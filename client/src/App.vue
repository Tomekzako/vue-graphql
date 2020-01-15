<template>
  <v-app>
    <v-app-bar absolute dense dark color="primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title class="hidden-xs-only">
        <router-link to="/" tag="span" style="cursor: pointer"
          >VueShare</router-link
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        prepend-icon="mdi-magnify"
        placeholder="Search posts"
        color="secondary"
        single-line
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          text
          v-for="item in horizontalNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-icon left class="hidden-sm-only">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <main>
      <v-container class="mt-12">
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  computed: {
    horizontalNavItems() {
      return [
        { icon: "mdi-message-text-outline", title: "Posts", link: "/posts" },
        { icon: "mdi-lock-open-outline", title: "Sign In", link: "/signin" },
        { icon: "mdi-pencil-outline", title: "Sign Up", link: "/signup" }
      ];
    }
  },
  data() {
    return {};
  }
};
</script>
