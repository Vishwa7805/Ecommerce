import footer from './Footer.module.css';
import img from '../../assets/logo.svg';

const Footer = () => {
    return (
        <footer>
            <section className={footer.footerContainer}>
                <div className={footer.footerContent}>
                    <div>
                        <img src={img} alt="Logo" />
                        <p style={{marginTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br />
                            when an unknown printer took a galley of type and scrambled it to make a <br />
                            type specimen book.</p>
                    </div>
                    <div className={footer.footerLinks}>
                        <h3>Company</h3>
                        <li style={{marginTop: '1em'}}>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </div>
                    <div className={footer.footerLinks}>
                        <h3 >Get in touch</h3>
                        <p style={{marginTop: '1em'}}>+1-234-567-890</p>
                        <p>contact@domain.com</p>
                    </div>
                </div>
            </section>
            <p className={footer.copyRight}>Copyright 2025 © GreatStack.dev All Right Reserved.</p>
        </footer>
    )
}

export default Footer;