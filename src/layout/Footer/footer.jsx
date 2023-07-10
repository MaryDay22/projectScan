import css from './footer.module.css'
import logo from './assets/footer-logo.png'
const Footer = () => {
return <footer className={css.footer}>
    <img src={logo} alt="logo" />
    <div className={css.info}>
        <address>г.Москва, Цветной б-р,40</address>
        <a href="tel:+74957712111">+7 495 771 21 11</a>
        <br />
        <a href="mailto:info@skan.ru">info@skan.ru</a>
        <br />
        <br />
        <small>Copyright. 2022</small>
    </div>
</footer>   
}
export default Footer;