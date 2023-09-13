import styles from './../styles/HeroSection.module.css';
import globalStyles from './../styles/Global.module.css';
import HorizontalLine from './HorizontalLine';

const HeroSection = () => {
    return (
        <>
            <header className={styles['hero-section']}>
                <div className={globalStyles['page-padding']} >
                    <div className={styles['hero-component']} >
                        <div className={styles['hero-text-wrapper']} >
                            <h1 className={styles['hero-heading']}>
                                <div className={styles['line-parent']} >
                                    <div className={styles['line-child']}>
                                        Building the
                                    </div>
                                </div>
                                <div className={styles['line-parent']} >
                                    <div className={styles['line-child']}>
                                        future with
                                    </div>
                                </div>
                                <div className={styles['line-parent']} >
                                    <div className={styles['line-child']}>
                                        distinction
                                    </div>
                                </div>
                            </h1>
                            <div className={styles['hero-small-text-wrapper']}>
                                <div className={styles['hero-small-text']}>
                                    We level up real estate for your luxury experience.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <HorizontalLine />
        </>
    )
}

export default HeroSection