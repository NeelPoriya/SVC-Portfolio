import styles from './../styles/NumbersSection.module.css';
import globalStyles from './../styles/Global.module.css';
import HorizontalLine from './HorizontalLine';

const NumbersSection = () => {
    return (
        <section className={styles['numbers-section']} >
            <div className={globalStyles['page-padding']}>
                <div className={globalStyles['padding-vertical-small']} >
                    <div className={styles['numbers-component']} >
                        <div className={styles['numbers-left']} >
                            <div className={styles['numbers-left-wrap']} >
                                <div className={styles['overflow-hidden']} >
                                    <div className={styles['numbers-title']} >
                                        <h2 className={styles['title-text']}>Current Projects</h2>
                                    </div>
                                </div>
                                <div className={styles['nv-numbers-ordem']} >
                                    <div className={styles['numbers-wrapper']}>
                                        <div className={styles['overflow-hidden']}>
                                            <div className={styles['numbers-letter-wrapper']}>
                                                <div className={styles['nv-home-numbers']}>
                                                    07
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles['home-numbers-wrap-nv']}>
                                            <div className={styles['active']}>
                                                total buildings
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles['numbers-wrapper']}>
                                        <div className={styles['overflow-hidden']}>
                                            <div className={styles['numbers-letter-wrapper']}>
                                                <div className={styles['nv-home-numbers']}>
                                                    51K
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles['home-numbers-wrap-nv']}>
                                            <div className={styles['active']}>
                                                m2 built
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles['numbers-wrapper']}>
                                        <div className={styles['overflow-hidden']}>
                                            <div className={styles['numbers-letter-wrapper']}>
                                                <div className={styles['nv-home-numbers']}>
                                                    248
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles['home-numbers-wrap-nv']}>
                                            <div className={styles['active']}>
                                                total units
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles['numbers-wrapper']}>
                                        <div className={styles['overflow-hidden']}>
                                            <div className={styles['numbers-letter-wrapper']}>
                                                <div className={styles['nv-home-numbers']}>
                                                    145M
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles['home-numbers-wrap-nv']}>
                                            <div className={styles['active']}>
                                                portfolio value
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['vertical-line']}></div>
                        </div>
                        <div className={styles['numbers-right']} >
                            <div className={styles['numbers-left-wrap']} >
                                <div className={styles['overflow-hidden']} >
                                    <div className={styles['numbers-title']} >
                                        <h2 className={styles['title-text']}>Current Projects</h2>
                                    </div>
                                </div>
                                <div className={styles['nv-numbers-ordem']} >
                                    <div className={styles['numbers-wrapper']}>
                                        <div className={styles['overflow-hidden']}>
                                            <div className={styles['numbers-letter-wrapper']}>
                                                <div className={styles['nv-home-numbers']}>
                                                    07
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles['home-numbers-wrap-nv']}>
                                            <div className={styles['active']}>
                                                total buildings
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles['numbers-wrapper']}>
                                        <div className={styles['overflow-hidden']}>
                                            <div className={styles['numbers-letter-wrapper']}>
                                                <div className={styles['nv-home-numbers']}>
                                                    51K
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles['home-numbers-wrap-nv']}>
                                            <div className={styles['active']}>
                                                m2 built
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles['numbers-wrapper']}>
                                        <div className={styles['overflow-hidden']}>
                                            <div className={styles['numbers-letter-wrapper']}>
                                                <div className={styles['nv-home-numbers']}>
                                                    248
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles['home-numbers-wrap-nv']}>
                                            <div className={styles['active']}>
                                                total units
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles['numbers-wrapper']}>
                                        <div className={styles['overflow-hidden']}>
                                            <div className={styles['numbers-letter-wrapper']}>
                                                <div className={styles['nv-home-numbers']}>
                                                    145M
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles['home-numbers-wrap-nv']}>
                                            <div className={styles['active']}>
                                                portfolio value
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HorizontalLine />
        </section>
    )
}

export default NumbersSection