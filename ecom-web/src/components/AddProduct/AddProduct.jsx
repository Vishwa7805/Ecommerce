import addProduct from './AddProduct.module.css';
import banEdit from '../BannerEdit/BannerEdit.module.css';
import { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {

    const [productDetails, setProductDetails] = useState({
        name: '',
        description: '',
        category: '',
        price: '',
    })

    const [image, setImage] = useState(null);

    const handleProductChange = (e) => {
        setProductDetails({
            ...productDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleImageUpload = (e) => {
        setImage(e.target.files[0]);
    }

    const handleProductSubmit = async (e) => {
        e.preventDefault();
        if (!image)
            console.error("No image uploaded")
        const formData = new FormData();
        formData.append(
            'product',
            new Blob([JSON.stringify(productDetails)], { type: 'application/json' })
        );
        formData.append('image', image);
        try {
            await axios.post("http://127.0.0.1:8080/add-products", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        }
        catch (error) {
            console.error('Error submitting product  data:', error);
        }

        setProductDetails({
            name: '',
            description: '',
            category: '',
            price: '',
        })
        setImage(null);
    }

    return (
        <form className={banEdit.bannerEditForm} onSubmit={handleProductSubmit}>
            <label htmlFor="">Product Name</label>
            <input type="text" placeholder='Enter Name' name="name" value={productDetails.name} className={banEdit.formInput} onChange={handleProductChange} />
            <label htmlFor="">Description</label>
            <textarea type="text" placeholder='Description' name="description" value={productDetails.description} className={banEdit.formInput} onChange={handleProductChange} />
            <div className={addProduct.pricing}>
                <div>
                    <label htmlFor="">Category</label>
                    <select name="category" id="" value={productDetails.category} className={banEdit.formInput} onChange={handleProductChange}>
                        <option value="earphone">Earphone</option>
                        <option value="headphone">Headphone</option>
                        <option value="watch">Watch</option>
                        <option value="laptop">Laptop</option>
                        <option value="camera">Camera</option>
                        <option value="mobile">Mobile</option>
                        <option value="accessories">Accessories</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Price</label>
                    <input type="number" placeholder='Price' name="price" value={productDetails.price} className={banEdit.formInput} onChange={handleProductChange} />
                </div>
            </div>
            <label htmlFor="">Upload Image</label>
            <input type="file" className={banEdit.formInput} onChange={handleImageUpload} />
            <button type="submit" className={banEdit.addButton}>Add</button>
        </form>
    )
}

export default AddProduct;