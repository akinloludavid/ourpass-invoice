<template>
  <nav class="navbar">
    <div class="nav-logo">
      <h3>Paypay.</h3>
      <div class="hamburger">
        <q-btn flat round dense icon="menu" @click="toggle" />
        <!-- <div class="md-menu" /> -->
      </div>
    </div>
    <div class="nav-link-wrapper">
      <router-link :to="link.route" v-for="link of navLinks" :key="link.label">
        <h3>{{ link.label }}</h3>
      </router-link>
    </div>
    <div class="fixed mobile-menu" v-if="isMenu">
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
      isMenu: false,
    };
  },
  methods: {
    toggle() {
      this.isMenu = !this.isMenu;
    },
  },
};
</script>

<style lang="sass" scoped></style>
