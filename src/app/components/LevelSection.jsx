import styles from './../styles/LevelSection.module.css'
import globalStyles from './../styles/Global.module.css'
import HorizontalLine from './HorizontalLine'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Link from 'next/link'

const LevelSection = () => {
    return (
        <section className={styles['level-section']}>
            <div className={globalStyles['page-padding']}>
                <div className={globalStyles['padding-vertical-small']}>
                    <div className={styles['level-component']}>
                        <div className={styles['level-left']}>
                            <div className={styles['level-left-text']}>
                                <div className={styles['active']}>
                                    <div className={styles['line-parent']}>
                                        <div className={styles['line-child']}>
                                            HIGH STANDARDS,
                                        </div>
                                    </div>
                                    <div className={styles['line-parent']}>
                                        <div className={styles['line-child']}>
                                            GREAT RESULTS
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['vertical-line']}></div>
                        </div>
                        <div className={styles['level-right']}>
                            <div className={styles['level-right-top-text']}>
                                <p className={styles['reckless-20']}>
                                    VARINO is a reference on the real estate sector, which stands out for bold, avant-garde architecture projects in privileged locations, and for its uncompromising efforts to provide personalized service and follow-up to its clients.
                                </p>
                            </div>
                            <Link href='/' className={styles['button']} > <div className={styles['active-10']}> Get to know Varino </div><div className={styles['seta-buton-wrapper']}><AiOutlineArrowRight /></div></Link>
                        </div>
                    </div>
                </div>
            </div>
            <HorizontalLine />
        </section>
    )
}

export default LevelSection