import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
// dev-73j3qpz7te8eetxj.us.auth0.com
// 7DDntq6OZJBJMgqcwZhKzq74m7xaqouD

ReactDOM.render(
    <Auth0Provider
        domain="dev-73j3qpz7te8eetxj.us.auth0.com"
        clientId="7DDntq6OZJBJMgqcwZhKzq74m7xaqouD"
        redirectUri={window.location.origin}
        cacheLocation='localstorage'
    >
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider>
        </UserProvider>
    </Auth0Provider>,
    document.getElementById('root')
)
