import products from './Products.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Products = () => {

    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8080/products')
            .then(response => {
                setProductsData(response.data);
            })
            .catch(error => {
                console.error('Error fetching banners:', error);
            })
    }, [])

    return (
        <section className={products.productContainer}>
            <h2>Popular products</h2>
            <div className={products.productList}>
                {productsData.map((prd, i) => (
                    <div className={products.product} key={i}>
                        <div className={products.productImgContainer}>
                            <img src={`http://127.0.0.1:8080/products/${prd.id}`} alt="" className={products.productImg} />
                        </div>
                        <p style={{ fontWeight: 600 }}>{prd.name}</p>
                        <p style={{ fontSize: '0.8rem' }}>4.5</p>
                        <div className={products.priceContainer}>
                            <p style={{ fontWeight: 600 }}>{`$${prd.price}`}</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                ))}
            </div>
            <button className={products.seeMore}>See more</button>
        </section>
    )
}

export default Products;