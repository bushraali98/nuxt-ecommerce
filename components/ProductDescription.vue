<template>
    <div id="product-name">
        <h1 class="barnd-name">SNEAKER COMPANY</h1>
        <h1>{{ product.name }}</h1>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        <p id="text" v-if="product.quantity === 0">Out of Stock!!!</p> 
        <p :class="product.discount > 0 ? 'on-sale' : ''">$ {{ product.price }}</p>
        <div class="discount-badge" v-if="product.discount > 0">
                {{ product.discount }}% OFF
        </div>
        <p v-if="product.discount > 0" class="discounted-price">$ {{ discountedPrice }}</p>
        <p v-else v-show="product.discount > 0">$ {{ product.price }}</p> 
    </div>
</template>
<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
export default {
    data() {
        return {}
    },
    computed: {
        ...mapState({
            product: state => state.product
        }),
        ...mapGetters([
            'discountedPrice'
        ])
        
    }
}
</script>
