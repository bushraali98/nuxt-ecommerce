<template>
    <div class="product flex flex-col sm:justify-center sm:items-center md:flex-col lg:flex-row mx-8 sm:mx-11">
        <ImageGallery/>
        <div class="product-details w-full sm:w-4/5 sm:m-0 md:w-2/3 xl:mt-0 ml-7">
            <ProductDescription/>
            <div class="cart-details w-4/5 flex flex-row md:ml-10 md:my-3">
                <div class="flex flex-col w-full sm:flex-row sm:space-x-12">
                    <div class="flex flex-row w-full sm:w-1/3 mb-8 sm:mb-0">
                        <div class="basis-1/3"> <button class="minus-buttun w-full h-12 sm:w-14 sm:h-10 bg-gray-200 cursor-pointer border-2 border-gray-200 top-1/2 left-1/2 transform text-xl font-bold text-orange-500 rounded-l-xl" v-on:click="asyncDecrementCount">-</button> </div>
                        <div class="count basis-1/3 w-full h-12 sm:h-10 bg-gray-200 text-lg flex  justify-center items-center font-bold m-0"> <p class=" w-8 text-center" id="text">{{productCount}}</p> </div>
                        <div class="basis-1/3"> <button class="pluss-buttun w-full sm:w-14 h-12 sm:h-10 bg-gray-200 cursor-pointer border-2 border-gray-200 top-1/2 left-1/2 transform text-xl font-bold text-orange-500 mr-20 rounded-r-xl" v-on:click="asyncIncrementCount">+</button> </div>
                    </div>
                    <div class="w-full mb-8"> 
                        <button 
                        class="cart-button bg-orange-500 hover:bg-orange-400 text-white text-base font-light h-12 sm:h-10 w-full sm:w-60 sm:py-2 sm:px-12 rounded-lg focus:outline-none focus:shadow-outline" 
                        :class="product.quantity === 0 ? 'disabled-button' : ''"
                        v-on:click="addToCart"> <i class="fa-solid fa-cart-shopping pr-2"></i> add to cart
                        </button> 
                    </div>
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
