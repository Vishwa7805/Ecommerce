import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import productDetails from './ProductDetails.module.css';
import UserContext from '../Context/UserContext';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { currentUser, isAuthenticated } = useContext(UserContext);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/product-details/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleAddToCart = async () => {
        if (!isAuthenticated) {
            alert("Please login to add items to your cart.");
            return;
        }

        try {
            const response = await axios.post(`http://localhost:8080/cart/add-product=${product.id}`,
                {},
                { withCredentials: true });
            alert("Product added to cart successfully!");
        } catch (error) {
            console.error("Error adding to cart:", error);
            alert("Could not add to cart. Please try again.");
        }
    }

    return (
        <>
            <section className={productDetails.productDetailsContainer}>
                <div className={productDetails.productImageContainer}>
                    <img src={`http://127.0.0.1:8080/product-image/${product.id}`} alt={product.name} className={productDetails.productImage} />
                </div>
                <div className={productDetails.productInfo}>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p style={{ fontWeight: '500', fontSize: '1.8rem', color: 'var(--color3)' }}>{`$${product.price}`}</p>
                    <span style={{ width: '100%', height: '0.5px', backgroundColor: 'var(--color4)' }}></span>
                    <div className={productDetails.actionButtons}>
                        <button style={{ backgroundColor: 'var(--color4)' }} onClick={handleAddToCart}>Add to Cart</button>
                        <button style={{ backgroundColor: 'var(--color1)', color: 'var(--color2)' }}>Buy Now</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails;