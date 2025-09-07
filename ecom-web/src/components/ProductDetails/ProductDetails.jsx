import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import productDetails from './ProductDetails.module.css';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

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
                    <span style={{width: '100%', height: '0.5px', backgroundColor: 'var(--color4)' }}></span>
                    <div className={productDetails.actionButtons}>
                        <button style={{backgroundColor: 'var(--color4)'}}>Add to Cart</button>
                        <button style={{backgroundColor: 'var(--color1)', color: 'var(--color2)'}}>Buy Now</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails;