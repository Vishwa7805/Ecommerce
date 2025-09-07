import login from './Login.module.css';
import googleLogo from '../../assets/google_logo.svg'

const Login = ({ setShowLogin }) => {

    const handleGoogleSignIn = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/google";
    };

    return (
        <main className={login.loginOverlay} onClick={() => setShowLogin(false)}>
            <section className={login.loginContainer} onClick={(e) => e.stopPropagation()}>
                <div className={login.loginHeader}>
                    <h3>Sign in to QuickCart</h3>
                    <p style={{ fontSize: '0.8em' }}>Welcome! Please sign in to continue</p>
                    <div className={login.socialLogin} onClick={handleGoogleSignIn}>
                        <img src={googleLogo} alt="google" style={{ width: '16px', height: '16px' }} />
                        <button className={login.googleButton}>Sign in with Google</button>
                    </div>
                </div>
                <div className={login.loginForm}>
                    <p style={{ color: 'black' }}>Email address</p>
                    <input type="text" placeholder='Enter your email' />
                    <button>Sign in</button>
                </div>
                <p>Don't have an account? Sign up</p>
            </section>
        </main>
    )
}

export default Login;