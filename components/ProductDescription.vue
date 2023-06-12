<template>
    <div id="product-name" class="w-5/6 sm:mx-4 sm:m-0 md:ml-10 xl:mt-0">
        <h1 class="barnd-name pb-4 text-orange-500 font-light  md:font-normal lg:mt-0 mt-2">SNEAKER COMPANY</h1>
        <h1 class="w-full text-3xl md:text-5xl font-light md:font-normal pb-7">{{ product.name }}</h1>
        <p class="text-gray-500">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        <p id="text" v-if="product.quantity === 0">Out of Stock!!!</p> 
        <div class="flex flex-row space-x-10 mb-4 md:mb-0 md:space-x-0 md:flex-row md:text-start md:my-3 lg:flex-col items-center md:items-start">
            <p class="basis-1/4" :class="product.discount > 0 ? 'on-sale' : ''">$ {{ product.price }}</p>
            <div class="discount-badge basis-1/4 w-1/6 my-3 md:text-start text-center" v-if="product.discount > 0">
                    {{ product.discount }}% OFF
            </div>
            <p v-if="product.discount > 0" class="discounted-price basis-1/2 mt-3 md:mb-5 text-center md:ml-0 ml-8">$ {{ discountedPrice }}</p>
            <p class="mt-3 mb-5 text-center" v-else v-show="product.discount > 0">$ {{ product.price }}</p> 
        </div>
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
