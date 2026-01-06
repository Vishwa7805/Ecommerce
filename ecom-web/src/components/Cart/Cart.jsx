import { useEffect, useState, useContext } from 'react';
import cart from './Cart.module.css';
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import UserContext from '../Context/UserContext.jsx';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const { isAuthenticated } = useContext(UserContext);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.product.price, 0);

const handleDelete = async (cartItemId) => {
    try {
        await axios.delete(`http://localhost:8080/cart/remove/${cartItemId}`, {
            withCredentials: true
        });
        
        setCartItems(prevItems => prevItems.filter(item => item.id !== cartItemId));
    } catch (error) {
        console.error('Error removing item:', error);
        alert("Could not remove item. Please try again.");
    }
};

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/cart/get-products', {
                    withCredentials: true
                })
                setCartItems(response.data);
            }
            catch (error) {
                console.error('Error fetching cart items:', error);
            }
        }

        if (isAuthenticated) {
            fetchCartData();
        }
    }, [isAuthenticated]);

    return (
        <div className={cart.cartContainer}>
            <div className={cart.cartItems}>
                <header className={cart.cartHeader}>
                    <li className={cart.cartHeaderItem} style={{ width: "40%" }}>Product Details</li>
                    <li className={cart.cartHeaderItem} style={{ width: "20%" }}>Price</li>
                    <li className={cart.cartHeaderItem} style={{ width: "20%" }}>Quantity</li>
                    <li className={cart.cartHeaderItem} style={{ width: "20%" }}>Total</li>
                </header>
                <div className={cart.cartItemsList}>
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div className={cart.cartItemRow} key={item.id}>
                                <div style={{ width: "40%", display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <img
                                        src={`http://localhost:8080/product-image/${item.product.id}`}
                                        alt={item.product.name}
                                        className={cart.productImage}
                                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                    />
                                    <span>{item.product.name}</span>
                                </div>
                                <div style={{ width: "20%", textAlign: 'center' }}>${item.product.price.toFixed(2)}</div>
                                <div style={{ width: "20%", textAlign: 'center' }}>1</div>
                                <div style={{ width: "20%", textAlign: 'center' }}>${item.product.price.toFixed(2)}</div>
                                <MdDelete style={{cursor: "pointer"}} onClick={() => handleDelete(item.id)}/>
                            </div>
                        ))
                    ) : (
                        <p style={{ textAlign: 'center', marginTop: '2rem' }}>Your cart is empty.</p>
                    )}
                </div>
            </div>
            <div className={cart.cartSummary}>
                <h2 style={{ fontWeight: "500" }}>Cart Summary</h2>
                <div style={{ borderBottom: "1px solid #eee", height: "25%" }}>

                </div>
                <div style={{ borderBottom: "1px solid #eee", height: "20%", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <p>Price</p>
                        <p>${totalPrice.toFixed(2)}</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <p>Shipping Fee</p>
                        <p>$10</p>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    <h3 style={{ fontWeight: "500", display: "inline" }}>Total</h3>
                    <h3 style={{ fontWeight: "450", display: "inline" }}>${(totalPrice + 10).toFixed(2)}</h3>
                </div>
                <button className={cart.placeOrderButton}>Place Order</button>
            </div>
        </div>
    )
}

export default Cart;