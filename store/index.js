import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default () => new Vuex.Store({
    state: {
        product: {
            id: 1,
            name: 'Fall Limited Edition Sneakers',
            image: require('@/assets/product/img1.webp'),
            price: 250.00,
            discount: 50,
            quantity: 10
        },
        cart: 0,
        cartItems: [],
        showCartPreview: false,
        productCount: 1,
    },
    getters: { 
        discountedPrice(state) {
            return Number((state.product.price * (1 - (state.product.discount / 100))).toFixed(2));
            // console.log(typeof total); 
        },
        cartTotal(state, getters) {
            let total = 0;
            for (let i = 0; i < state.cartItems.length; i++) {
              const item = state.cartItems[i];
              if (item.product.discount > 0 ) {
                total += getters.discountedPrice * item.count;
                return Number(total);
              } else {
                total += item.product.price * item.count;
                return Number(total);
              }
            }
        },
    },
    mutations: {
        updateCart(state, cartItem) {
            const existingItem = state.cartItems.find(item => item.product === cartItem.product);
        
            if (existingItem) {
              existingItem.count += cartItem.count;
            } else {
              state.cartItems.push(cartItem);
            }
            state.cart += cartItem.count;
        },
        increamentProduct(state) {
            state.productCount++
        },
        decreamentProduct(state) {
            if (state.productCount > 1 ) {
                state.productCount--
            }
        },
        setShowCartPreview(state, value) {
            state.showCartPreview = value;
        },
        removeFromCart(state, cartItem) {
            state.cart -= cartItem.count;
            state.cartItems.splice(state.cartItems.indexOf(cartItem), 1);
        }
    },
    actions: {
        asyncIncrement(context) {
              context.commit('increamentProduct')
          },
          asyncDecrement(context) {
              context.commit('decreamentProduct')
          }
    }    
});