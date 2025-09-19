import UserContext from '../Context/UserContext'
import PageNotFound from '../PageNotFound/PageNotFound'
import SellerDashboard from '../SellerDashboard/SellerDashboard'
import Header from '../Header/Header'
import { useContext } from 'react'

const SellerWrapper = ({ setShowLogin }) => {
    const { currentUser } = useContext(UserContext);
    const isSeller = currentUser?.role?.includes('SELLER');

    return (
        <>
            {isSeller ?
                <>
                    <Header setShowLogin={setShowLogin} />
                    <SellerDashboard />
                </> : <PageNotFound />}
        </>
    )
}

export default SellerWrapper