import Link from 'next/link';
import styles from './../styles/ExclusiveSection.module.css';
import globalStyles from './../styles/Global.module.css';
import { BiRightArrowAlt } from 'react-icons/bi';
import HorizontalLine from './HorizontalLine';
import ExclusiveAccordion from './ExclusiveAccordion';

const ExclusiveSection = () => {
    return (
        <div className={globalStyles['page-padding']}>
            <div className={globalStyles['padding-vertical']}>
                <div className={styles['exclusive-component']}>
                    <div className={styles['exclusive-left']}>
                        <div className={styles['exclusive-header-wrapper']}>
                            <h3 className={styles['aktiv-62']}>
                                <div className={styles['line-parent']}>
                                    <div className={styles['line-child']}>
                                        EXCLUSICITY
                                    </div>
                                </div>
                            </h3>
                        </div>
                    </div>
                    <div className={styles['exclusive-right']}>
                        <div className={styles['exclusive-paragraph-wrapper']}>
                            <p className={styles['reckless-16']}>
                                Based on an innovative vision, VARINO buildings are developed from a careful selection of materials and equipment, from which result in detail oriented productions of modern and sophisticated design, that combines the highest quality and security.
                            </p>
                        </div>
                        <Link href="/" className={styles['button']}>
                            <div className={styles['aktiv-10']}>
                                SEE PROJECTS
                            </div>
                            <div className={styles['seta-buton-wrapper']}>
                                <BiRightArrowAlt />
                            </div>
                        </Link>
                        <div className={styles['exclusive-acordion-component']}>
                            <div className={styles['exclusive-acordion-wrapper']}>
                                <HorizontalLine />
                                <ExclusiveAccordion />
                            </div>
                            <div className={styles['exclusive-acordion-wrapper']}>
                                <HorizontalLine />
                                <ExclusiveAccordion />
                            </div>
                            <div className={styles['exclusive-acordion-wrapper']}>
                                <HorizontalLine />
                                <ExclusiveAccordion />
                            </div>
                            <div className={styles['exclusive-acordion-wrapper']}>
                                <HorizontalLine />
                                <ExclusiveAccordion />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExclusiveSection