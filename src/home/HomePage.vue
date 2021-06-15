<template>
    <div>
        <h1>Hi {{account.user.username}}!</h1>
        
        <h3>Products</h3>
        <em v-if="products.loading">Loading products...</em>
        <span v-if="products.error" class="text-danger">ERROR: {{products.error}}</span>
        <ul v-if="products.items">
            <li v-for="p in products.items" :key="p.productId">
                {{p.name}}
                 
            </li>
        </ul>
        <p>
            <router-link to="/login">Logout</router-link>
        </p>
         <p>
            <router-link to="/addProduct">New Product</router-link>
        </p>
    </div>
    
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState({
            account: state => state.account,
            products: state => state.products.all
        })
    },
    created () {
        this.getAllProducts();
    },
    methods: {
        ...mapActions('products', {
            getAllProducts: 'getAllProducts',
            deleteProduct: 'delete'
        })
    }
};
</script>