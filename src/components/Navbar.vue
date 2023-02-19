<template>
  <nav class="navbar">
    <div class="nav-logo">
      <h3>Paypay.</h3>
    </div>
    <div class="nav-link-wrapper">
      <router-link :to="link.route" v-for="link of navLinks" :key="link.label">
        <h3>{{ link.label }}</h3>
      </router-link>
    </div>
  </nav>
</template>

<script>
const navLinks = [
  {
    label: "Dashboard",
    route: "/",
  },
  {
    label: "Invoices",
    route: "/invoices",
  },
  {
    label: "Wallet",
    route: "/wallet",
  },
  {
    label: "Activity",
    route: "/activity",
  },
  {
    label: "Help",
    route: "/help",
  },
];
export default {
  data() {
    return {
      navLinks,
    };
  },
  methods: {
    isNavActive(str) {
      return window.location.pathname === str;
    },
  },
};
</script>

<style lang="sass" scoped></style>
