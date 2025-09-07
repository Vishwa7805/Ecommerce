import banEdit from './BannerEdit.module.css';
import { useState } from 'react';
import axios from 'axios';

const BannerEdit = () => {

    const [bannerData, setBannerData] = useState({
        productName: "",
        title: "",
        subtitle: ""
    });

    const [image, setImage] = useState(null)

    const handleBannerChange = (e) => {
        setBannerData({
            ...bannerData,
            [e.target.name]: e.target.value
        })
    }

    const handleImageUpload = (e) => {
        setImage(e.target.files[0]);
    }

    const handleBannerSubmit = async (e) => {
        e.preventDefault();
        if (!image)
            console.log("No image uploaded");

        const formData = new FormData();
        formData.append(
            'banner',
            new Blob([JSON.stringify(bannerData)], { type: 'application/json' })
        );
        formData.append('image', image);

        try {
            await axios.post("http://127.0.0.1:8080/seller", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        }
        catch (error) {
            console.error('Error submitting banner data:', error);
        }
        setBannerData({
            productName: "",
            title: "",
            subtitle: ""
        });
        setImage(null);
    }

    return (
        <form className={banEdit.bannerEditForm} onSubmit={handleBannerSubmit}>
            <label htmlFor="">Title</label>
            <input type="text" placeholder='Enter Title' name="title" className={banEdit.formInput} value={bannerData.title} onChange={handleBannerChange} />
            <label htmlFor="">Sub Title</label>
            <input type="text" placeholder='Enter Sub Title' name="subtitle" className={banEdit.formInput} value={bannerData.subtitle} onChange={handleBannerChange} />
            <label htmlFor="">Upload Image</label>
            <input type="file" className={banEdit.formInput} onChange={handleImageUpload} />
            <button type="submit" className={banEdit.addButton}>Add</button>
        </form>
    )
}

export default BannerEdit;