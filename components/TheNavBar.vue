<template>
    <div class="navbar">
        <NuxtLink to="/" id="logo">Sneakers</NuxtLink>
        <NuxtLink to="/collections">Collections</NuxtLink>
        <NuxtLink to="/men">Men</NuxtLink>
        <NuxtLink to="/women">Women</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
        <div class="cart-icon"
        @mouseover="setShowCartPreview(true)"
        @mouseleave="setShowCartPreview(false)"> 
            <a href="#cart"><i class="fas fa-shopping-cart fa-lg" style="color: grey;"></i></a>
            <CartPreview v-if="showCartPreview"/> 
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return{}
    },
    computed: {
        ...mapState({
            showCartPreview: state => state.showCartPreview,
        })
    }, 
    methods: {
        ...mapMutations(['setShowCartPreview']),
    }
}
</script>
