import hero from './HeroSection.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const HeroSection = () => {

    const [banner, setBanner] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/banners')
        .then(response => {
            setBanner(response.data);
        })
        .catch(error => {
            console.error('Error fetching banners:', error);
        })
    }, [])
    return (
        <section className={hero.hero}>
            <section className={hero.heroContainer}>
                <div className={hero.leftContainer}>
                    <p>{banner[0]?.subtitle}</p>
                    <h1>{banner[0]?.title}</h1>
                    <div className={hero.buttonContainer}>
                        <button className={hero.button1}>Buy now</button>
                        <button className={hero.button2}>Learn more</button>
                    </div>
                </div>
                <div className={hero.rightContainer}>
                    <img src={`http://127.0.0.1:8080/banner-image/${banner[0]?.id}`} alt="PlayStation 5"/>
                </div>
            </section>
        </section>
    );
}

export default HeroSection;