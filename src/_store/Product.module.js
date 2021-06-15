 import { productService } from '../_services/ProductService';
const user = JSON.parse(localStorage.getItem('user'));
const state = user
    ? { status: { loggedIn: true }, user }
    : { status: {}, user: null };

    
    const actions = {
        getAllProducts({ commit }) {
            commit('getAllRequest');
    debugger;
            productService.getAllProducts()
                   .then(
                    products => commit('getAllSuccess', products),
                    error => commit('getAllFailure', error)
                );    
        },
        addProduct({ dispatch, commit }, product) {
            commit('addProductRequest', product);
        
            productService.addProduct(product)
                .then(
                    product => {
                        commit('addProductSuccess', product);
                        router.push('/');
                        setTimeout(() => {
                            // display success message after route change completes
                            dispatch('alert/success', 'Registration successful', { root: true });
                        })
                    },
                    error => {
                        commit('addProductFailure', error);
                        dispatch('alert/error', error, { root: true });
                    }
                );
        }
       /*  delete({ commit }, id) {
            commit('deleteRequest', id);
    
            userService.delete(id)
                .then(
                    user => commit('deleteSuccess', id),
                    error => commit('deleteFailure', { id, error: error.toString() })
                );
        } */
    };
    
    const mutations = {
        getAllRequest(state) {
            state.all = { loading: true };
        },
        getAllSuccess(state, products) {
           state.all = {items:products };
           
        },
        getAllFailure(state, error) {
            state.all = { error };
        },
        addProductRequest(state, product) {
            state.status = { add: true };
        },
        addProductSuccess(state, product) {
            state.status = {};
        },
        addProductFailure(state, error) {
            state.status = {};
        }
        /* deleteRequest(state, id) {
            // add 'deleting:true' property to user being deleted
            state.all.items = state.all.items.map(user =>
                user.id === id
                    ? { ...user, deleting: true }
                    : user
            )
        },
        deleteSuccess(state, id) {
            // remove deleted user from state
            state.all.items = state.all.items.filter(user => user.id !== id)
        },
        deleteFailure(state, { id, error }) {
            // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
            state.all.items = state.items.map(user => {
                if (user.id === id) {
                    // make copy of user without 'deleting:true' property
                    const { deleting, ...userCopy } = user;
                    // return copy of user with 'deleteError:[error]' property
                    return { ...userCopy, deleteError: error };
                }
    
                return user;
            })
        } */
    };
    
    export const products = {
        namespaced: true,
        state,
        actions,
        mutations
    };