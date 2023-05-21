<template>
    <div class="product">
        <ImageGallery/>
        <div class="product-details">
            <ProductDescription/>
            <!-- <product-description :product="product" :discounted-price="discountedPrice"></product-description> -->
            <div class="cart-details">
                <div> <button class="minus-buttun" v-on:click="asyncDecrementCount">-</button> </div>
                <div class="count"> <p id="text">{{productCount}}</p> </div>
                <div> <button class="pluss-buttun" v-on:click="asyncIncrementCount">+</button> </div>
                <div> 
                    <button 
                    class="cart-button" 
                    :class="product.quantity === 0 ? 'disabled-button' : ''"
                    v-on:click="addToCart"> <i class="fa-solid fa-cart-shopping"></i> add to cart
                    </button> 
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
export default {
    data() {
        return {
            //count: 1,
        }
    },
    computed: {
        ...mapState({
            product: state => state.product,
            productCount: state => state.productCount
        })
    // ...mapState(["product"])
    },
    methods: {
        ...mapMutations([
            'updateCart',
            'increamentProduct',
            'decreamentProduct'
        ]),
        addToCart() {
            const cartItem = {
                product: this.product,
                count: this.productCount
            };
            this.$store.commit("updateCart", cartItem);
        },
        asyncIncrementCount() {
            this.$store.dispatch('asyncIncrement')
        },
        asyncDecrementCount() {
            this.$store.dispatch('asyncDecrement')
        }
    },
}
</script>
