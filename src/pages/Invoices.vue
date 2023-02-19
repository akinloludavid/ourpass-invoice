<template>
  <div class="main-container invoice">
    <div class="invoice-title">
      <h4>Invoices</h4>
      /
      <p>edit invoice (INV-2022-010)</p>
    </div>

    <div class="invoice-detail"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.invoice-title {
  display: flex;
  align-items: center;
  padding: 20px 0;
  gap: 5px;
}
.invoice-title h4 {
  font-size: 18px;
  color: #504aa5;
  font-weight: 600;
}
.invoice-title p {
  margin: auto 0;
  font-weight: 500;
  color: #888;
}
.invoice-detail {
}
</style>
