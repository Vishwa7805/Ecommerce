import subscription from './Subscription.module.css';

const Subscription = () => {
    return (
        <section className={subscription.subscriptionContainer}>
            <section className={subscription.subBanner}>
                <img src="/src/assets/jbl_soundbox_image.png" alt="" className={subscription.subImage} style={{ objectFit: 'contain' }}/>
                <div className={subscription.subText}>
                    <h1>Level Up Your <br /> Gaming Experience</h1>
                    <p>From immersive sound to precise controls everything you need to win</p>
                    <button>Buy Now</button>
                </div>
                <img src="/src/assets/sm_controller_image.png" alt="" className={subscription.subImage}/>
            </section>
            <section className={subscription.subForm}>
                <h1>Subscribe now & get 20% off</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className={subscription.subInput}>
                    <input type="text" placeholder='Enter your email'/>
                    <button>Subscribe</button>
                </div>
            </section>
        </section>
    )
}

export default Subscription;