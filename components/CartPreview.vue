<template>
  <div class="cart-preview">
    <div class="cart-header">
      <h2>Cart</h2>
      <hr class="grey-line">
    </div>
    <div v-if="cartItems.length === 0">
      Your cart is empty.
    </div>
    <div v-else>
    <div v-for="(item, index) in cartItems"  v-bind:key="item.id" class="cart-item">
      <img :src="item.product.image" alt="Product image" class="product-image">
      <div class="product-info">
        <p class="product-name">{{ item.product.name }}</p>
        <p class="product-price">$ {{ cartTotal }} x {{item.count}}</p>
      </div>
      <button class="delete-button" @click="removeFromCart(index)">
        <i class="fas fa-trash"></i>
      </button>
      </div>
      <button class="checkout-button" v-if="cartItems.length > 0">Checkout</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations} from "vuex";
export default {
  data() {
    return {}
  }, 
  computed: {
    ...mapState({
      cartItems: state => state.cartItems
    }),
    ...mapGetters([
      'cartTotal',
    ])
  },
  methods: {
    ...mapMutations([
      'removeFromCart'
    ])
  }
}
</script>
