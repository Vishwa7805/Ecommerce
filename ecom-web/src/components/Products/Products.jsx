import products from './Products.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {

    const [productsData, setProductsData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/products')
            .then(response => {
                setProductsData(response.data);
            })
            .catch(error => {
                console.error('Error fetching banners:', error);
            })
    }, [])

    const handleBuyNow = (product) => {
        navigate(`/product-details/${product.id}`);
    }

    return (
        <section className={products.productContainer}>
            <h2>Popular products</h2>
            <div className={products.productList}>
                {Array.isArray(productsData) && productsData.map((prd, i) => (
                    <div className={products.product} key={i} onClick={() => handleBuyNow(prd)}>
                        <div className={products.productImgContainer}>
                            <img src={`http://127.0.0.1:8080/product-image/${prd.id}`} alt="" className={products.productImg} />
                        </div>
                        <p style={{ fontWeight: 500 }}>{prd.name}</p>
                        <p style={{color: 'var(--color6)', fontSize: '0.8rem'}}>{prd.description.substring(0, 28)}...</p>
                        <p style={{ fontSize: '0.8rem' }}>4.5</p>
                        <div className={products.priceContainer}>
                            <p style={{ fontWeight: 600 }}>{`$${prd.price}`}</p>
                            <button className={products.buyNowButton}>Buy now</button>
                        </div>
                    </div>
                ))}
            </div>
            <button className={products.seeMore}>See more</button>
        </section>
    )
}

export default Products;