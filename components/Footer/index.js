import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a
                href="https://www.collidinglines.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Colliding Lines - All Rights Reserved &#169;
            </a>
        </footer>
    )
}

export default Footer;
