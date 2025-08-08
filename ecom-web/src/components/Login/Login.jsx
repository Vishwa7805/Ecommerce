import login from './Login.module.css';
import { FaGoogle } from "react-icons/fa";

const Login = ({setShowLogin}) => {
    return (
        <main className={login.loginOverlay} onClick={() => setShowLogin(false)}>
            <section className={login.loginContainer}>
                <div className={login.loginHeader}>
                    <h3>Sign in to QuickCart</h3>
                    <p>Welcome! Please sign in to continue</p>
                    <div className={login.socialLogin}>
                        <FaGoogle />
                        <button className={login.googleButton}>Sign in with Google</button>
                    </div>
                </div>
                <div className={login.loginForm}>
                    <p>Email address</p>
                    <input type="text" placeholder='Enter your email' />
                    <button>Sign in</button>
                </div>
                <p>Don't have an account? Sign up</p>
            </section>
        </main>
    )
}

export default Login;