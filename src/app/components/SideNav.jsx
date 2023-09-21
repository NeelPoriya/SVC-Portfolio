import styles from './../styles/SideNav.module.css';
import globalStyles from './../styles/Global.module.css';
import Link from 'next/link';
import HorizontalLine from './HorizontalLine';

const SideNav = ({ open, setOpen }) => {
    return (
        <div className={`${styles['nav-menu-open']} ${!open ? styles['close'] : ''}`}>
            <div className={`${styles['nav-open-container']} ${!open ? styles['close'] : ''}`}>
                <div className={`${styles['nav-open-first']} ${!open ? styles['close'] : ''}`}>
                    <div className={styles['nav-open-first-component']}>
                        <div className={styles['nav-open-first-top-wrapper']}>
                            <div className={styles['nav-open-text-space']}>
                                <Link href='/' className={styles['nav-open-text-link']}>
                                    Home
                                </Link>
                            </div>
                            <div className={styles['nav-open-text-space']}>
                                <Link href='/' className={styles['nav-open-text-link']}>
                                    Projects
                                </Link>
                            </div>
                            <div className={styles['nav-open-text-space']}>
                                <Link href='/' className={styles['nav-open-text-link']}>
                                    About us
                                </Link>
                            </div>
                            <div className={styles['nav-open-text-space']}>
                                <Link href='/' className={styles['nav-open-text-link']}>
                                    Contact
                                </Link>
                            </div>
                            <div className={styles['nav-open-text-space']}>
                                <Link href='/' className={styles['nav-open-text-link']}>
                                    Available Projects
                                </Link>
                            </div>
                        </div>
                        <div className={styles['nav-open-first-bottom-wrapper']}>
                            <div className={styles['nav-open-call-wrapper']}>
                                <div className={styles['overflow-hidden']}>
                                    <div className={styles['nav-open-text-label']}>
                                        funchal
                                    </div>
                                </div>
                                <div className={styles['nav-open-call-text-space']}>
                                    <div className={`${styles['is-black']} ${styles['nav-open-text-link']}`}>
                                        +91-70167 20764
                                    </div>
                                    <div className={styles['nav-open-text-label']}>
                                        Dharmesh P. Poriya
                                    </div>
                                </div>
                            </div>
                            <div className={styles['nav-open-social-wrapper']}>
                                <div className={styles['overflow-hidden']}>
                                    <div className={styles['nav-open-text-label']}>
                                        follow us
                                    </div>
                                </div>
                                <div className={styles['nav-open-call-text-space']}>
                                    <Link href='/' className={styles['nav-open-text-link']}>
                                        facebook
                                    </Link>
                                    <Link href='/' className={styles['nav-open-text-link']}>
                                        instagram
                                    </Link>
                                    <Link href='/' className={styles['nav-open-text-link']}>
                                        linkedin
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <HorizontalLine />
                    <div className={styles['nav-open-inquire-component']}>
                    </div>
                </div>
            </div>
            <div className={styles['nav-menu-close']} onClick={() => setOpen(false)}></div>
        </div>
    )
}

export default SideNav