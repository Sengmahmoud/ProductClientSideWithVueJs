import config from 'config';
import { authHeader } from '../_helpers';

export const productService = {
   getAllProducts,
   addProduct
};

function getAllProducts() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch("https://localhost:44324/api/Products",requestOptions).then(handleResponse)       
}

/* function logout() {
 //   remove user from local storage to log user out
   localStorage.removeItem('user');
} */

function addProduct(product) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    };

    return fetch("https://localhost:44324/api/Products", requestOptions).then(handleResponse);
}




function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/User/${id}`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/User/${user.id}`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/User/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
console.log(data)
        return data;
    });
}