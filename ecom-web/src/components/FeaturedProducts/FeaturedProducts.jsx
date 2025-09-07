import featured from './FeaturedProducts.module.css'

const FeaturedProducts = () => {
    return (
        <section className={featured.featuredContainer}>
            <h1>Featured Products</h1>
            <div className={featured.fProducts}>
                <div className={featured.fprd}>
                    <h3>Unparallel Sound</h3>
                    <p>Experience crystal-clear audio with premium headphones.</p>
                    <button className={featured.buynow}>Buy now</button>
                </div>
                <div className={featured.fprd}>
                    <h3>Unparallel Sound</h3>
                    <p>Experience crystal-clear audio with premium headphones.</p>
                    <button className={featured.buynow}>Buy now</button>
                </div>
                <div className={featured.fprd}>
                    <h3>Unparallel Sound</h3>
                    <p>Experience crystal-clear audio with premium headphones.</p>
                    <button className={featured.buynow}>Buy now</button>
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts;