<template>
    <div>
        <h2>New Product</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" v-model="product.name" v-validate="'required'" name="name" class="form-control" :class="{ 'is-invalid': submitted && errors.has('firstName') }" />
                <div v-if="submitted && errors.has('name')" class="invalid-feedback">{{ errors.first('name') }}</div>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <input type="text" v-model="product.description" v-validate="'required'" name="description" class="form-control" :class="{ 'is-invalid': submitted && errors.has('lastName') }" />
                <div v-if="submitted && errors.has('description')" class="invalid-feedback">{{ errors.first('description') }}</div>
            </div>
            <div class="form-group">
                <label for="imgName">Imge</label>
                <input type="text" v-model="product.imgName" v-validate="'required'" name="imgName" class="form-control" :class="{ 'is-invalid': submitted && errors.has('username') }" />
                <div v-if="submitted && errors.has('imgName')" class="invalid-feedback">{{ errors.first('imgName') }}</div>
            </div>
          
            <div class="form-group">
                <button class="btn btn-primary" >save</button>
                <!-- <img v-show="status.add" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" /> -->
                <router-link to="/" class="btn btn-link">Cancel</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
            product: {
                name: '',
                description: '',
                imgName: '',
               
            },
            submitted: false
        }
    },
    // computed: {
    //     ...mapState({ products: state => state.status.add})
    // },
    methods: {
        ...mapActions('products', ['addProduct']),
        handleSubmit(e) {
            this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.addProduct(this.product);
                }
            });
        }
    }
};
</script>