import Image from 'next/image';
import styles from './../styles/Navbar.module.css';
import Link from 'next/link';
import globalStyles from './../styles/Global.module.css';
import HorizontalLine from './HorizontalLine';
import SideNav from './SideNav';

const Navbar = ({ open, setOpen }) => {

    return (
        <>
            <nav className={styles['nav']}>
                <div className={globalStyles['page-padding']} >
                    <div className={styles['nav-component']} >
                        <div className={styles['nav-menu']} onClick={() => { setOpen(prev => !prev) }} >
                            <div className={styles['nav-menu-link']}>
                                <div className={styles['menu-burger-component']} >
                                    <div className={styles['menu-burger-wrapper']} >
                                        <div className={styles['menu-burger-line']} ></div>
                                        <div className={styles['menu-burger-line']} ></div>
                                        <div className={styles['menu-burger-line']} ></div>
                                    </div>
                                </div>
                                <div className={styles['nav-text']} >Menu</div>
                            </div>
                        </div>
                        <div className={styles['nav-logo-position']} >
                            <Link href='/' className={styles['nav-logo-link']} >
                                <img src="https://assets.website-files.com/63034bfa82bc95d18246e3e3/63775393b256ce7a936dc2ab_logo.svg" loading="lazy" alt="" className={styles['nav-logo-image']} />
                            </Link>
                        </div>
                        <div className={styles['nav-client-wrapper']} >
                            <div className={`${styles['nav-client-link']} ${styles['inquire-link']}`} >
                                <div className={styles['footer-links-hover']} >
                                    <div className={styles['nav-text']} >Inquire</div>
                                    <div className={`${styles['footer-link-hover-line']} ${styles['background-color-darkgrey']}`}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HorizontalLine />
            </nav>
            <SideNav open={open} setOpen={setOpen} />
        </>
    )
}

export default Navbar;