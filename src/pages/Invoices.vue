<template>
  <div class="main-container invoice">
    <div class="invoice-title">
      <h4>Invoices</h4>
      /
      <p>edit invoice (INV-2022-010)</p>
    </div>

    <div class="invoice-detail">
      <div class="flex client-detail">
        <div class="contact">
          <h3>Dipa Inhouse</h3>
          <p>hello@dipainhouse.com</p>
        </div>
        <div class="address">
          <p>Ijen Boulevard Street 101</p>
          <p>Malang city 65115</p>
          <p>East Java Indonesia</p>
        </div>
      </div>
      <div class="invoice-info">
        <div class="invoice-info-detail">
          <h4>Invoice Number</h4>
          <p>INV-2022-010</p>
          <div class="flex justify-start">
            <p>Issued Date:</p>
            <p class="text-bold">11 Jan 2022</p>
          </div>
          <div class="flex justify-start">
            <p>Dued Date:</p>
            <p>18 Jan 2022</p>
          </div>
        </div>
        <div class="billed-to">
          <h4>Billed to</h4>
          <p>Zaky Grizzly</p>
          <p>MonLight Agency LTD</p>
          <p>New York, USA</p>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div>
          <h4>Item Detail</h4>
          <p>Type Item for Hours item</p>
        </div>
        <button class="btn">Customize</button>
      </div>
      <hr />
      <div class="item-details-grid">
        <div class="grid-item1">
          <p>Item Name</p>
        </div>
        <div class="grid-item2">
          <p>Hours</p>
        </div>
        <div class="grid-item3">
          <p>Rate/hr</p>
        </div>
        <div class="grid-item4">
          <p>Tax</p>
        </div>
        <div class="grid-item5">
          <p>Line Total</p>
        </div>
        <div></div>
        <hr style="grid-column: 1/9" />
        <div class="grid-item1">
          <input type="text" placeholder="Item name" />
        </div>
        <div class="grid-item2">
          <input type="text" placeholder="Hour" />
        </div>
        <div class="grid-item3">
          <input type="text" placeholder="Rate" />
        </div>
        <div class="grid-item4">
          <input type="text" disabled placeholder="Tax" />
        </div>
        <div class="grid-item5">
          <input type="text" placeholder="Line Total" />
        </div>
        <div class="grid-item6">
          <div class="plus-icon">+</div>
        </div>
        <div class="grid-item1">
          <input type="text" placeholder="Description" />
        </div>
      </div>
      <div class="flex justify-between payment-section">
        <div class="payment">
          <div class="flex justify-between items-center">
            <h3>Payment Method</h3>
            <h4>Select Payment</h4>
          </div>
          <div class="account-details">
            <div class="flex justify-between items-center heading">
              <h3>Wire Transfer</h3>
              <img
                src="../../src/assets/wize-logo.png"
                alt=""
                :width="150"
                :height="30"
              />
            </div>

            <div class="flex justify-start">
              <p>Account Name:</p>
              <p class="text-bold">Barly Vallenditor</p>
            </div>
            <div class="flex justify-start">
              <p>Account Number:</p>
              <p class="text-bold">9700002342002900</p>
            </div>
            <div class="flex justify-start">
              <p>Routing Number:</p>
              <p class="text-bold">0840009519</p>
            </div>
          </div>
        </div>
        <div class="amount flex flex-col">
          <div class="flex justify-between items-center">
            <h4>Sub Total</h4>
            <h4 class="sub-total">$4800.00</h4>
          </div>
          <div class="flex justify-between items-center">
            <p>Discount</p>
            <h4 class="sub-total">$0</h4>
          </div>
          <div class="flex justify-between items-center">
            <p>Total Tax</p>
            <h4 class="sub-total">$0</h4>
          </div>
          <hr />
          <div class="flex justify-between items-center">
            <p>Total Amount</p>
            <h4 class="sub-total">$4800.00</h4>
          </div>
        </div>
      </div>
    </div>
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
  background-color: #fff;
  border-radius: 10px;
  padding: 10px 20px;
}
.client-detail {
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}
.address p {
  margin-bottom: 10px;
}
.invoice-info {
  border-radius: 25px;
  background-color: #504aa5;
  padding: 20px;
  display: flex;
  color: white;
  justify-content: space-between;
  margin-bottom: 25px;
}
.invoice-info h4 {
  margin-bottom: 10px;
}
.invoice-info-detail .flex {
  gap: 8px;
}
.billed-to {
  text-align: right;
}
.invoice-info p {
  color: #fff;
}

.item-details-grid {
  margin-top: 15px;
  display: grid;
  gap: 20px;

  grid-template-columns: repeat(9, 1fr);
}
.item-details-grid p {
  font-size: 18px;
}
.grid-item1 {
  grid-column: 1/5;
}
.grid-item6 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.plus-icon {
  width: 32px;
  height: 32px;
  background-color: #504aa5;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin: auto;
}
.payment-section {
  margin-top: 40px;
}
.account-details {
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  border-radius: 16px;
  background-color: #f3f3f3;
  padding: 20px;
}
.account-details > .heading {
  margin-bottom: 20px;
}
.account-details > .flex {
  gap: 10px;
  font-size: 24px;
}
.account-details p {
  font-size: 18px;
}
.account-details .text-bold {
  color: #030303;
  font-size: 18px;
}
.payment > .flex {
  gap: 40px;
}
.payment > .flex > h4 {
  color: #504aa5;
}
.amount.flex-col {
  gap: 30px;
}
.amount > .flex {
  gap: 200px;
}
.amount > .flex > p {
  margin: auto 0;
  font-weight: 600;
  font-size: 18px;
}
.sub-total h4 {
  text-align: right;
}
</style>
