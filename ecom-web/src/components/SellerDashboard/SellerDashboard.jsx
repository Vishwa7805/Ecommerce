import seller from './SellerDashboard.module.css';
import { CiSquarePlus } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import { Link, Outlet } from 'react-router-dom';

const SellerDashboard = () => {
    return (
        <main className={seller.sellerMain}>
            <section className={seller.sellerDashboard}>
                <section className={seller.sideBar}>
                    <Link to="." className={seller.bannerEdit}>
                        <CiEdit style={{ fontSize: "2em", color: "var(--color3)" }} />
                        <p>Banner Edit</p>
                    </Link>
                    <Link to="add-products" className={seller.addProduct}>
                        <CiSquarePlus style={{ fontSize: "2em", color: "var(--color3)" }} />
                        <p>Add Product</p>
                    </Link>
                    <Link to="orders" className={seller.orders}>
                        <CiViewList style={{ fontSize: "2em", color: "var(--color3)" }} />
                        <p>Orders</p>
                    </Link>
                </section>
                <Outlet />
            </section>
        </main>
    )
}

export default SellerDashboard;