import { BiDownArrowAlt } from 'react-icons/bi';
import styles from './../styles/ExclusiveAccordion.module.css';
import globalStyles from './../styles/Global.module.css';
import { useState } from 'react';

const ExclusiveAccordion = () => {

    const [display, setDisplay] = useState(false)
    const [rotate, setRotate] = useState(true)
    const toggle = () => setDisplay((prev) => !prev);
    const toggleRotation = () => setRotate(prev => !prev);


    return (
        <div className={`${styles['exclusive-accordion-component']} ${display ? styles['w-dropdown'] : ''}`} onClick={toggleRotation}>
            <div className={`${styles['exclusive-accordion-toggle']} ${display ? styles['w-dropdown-toggle'] : ''}`} onClick={toggle}>
                <div className={`${styles['exclusive-accordion-header-wrapper']}`} >
                    <div className={styles['overflow-hidden']}>
                        <div className={styles['aktiv-26']}>
                            PRIVILAGED LOCATIONS
                        </div>
                    </div>
                </div>
                <div className={`${styles['exclusive-acordion-seta-circulo']} ${rotate ? styles['rotate'] : ''}`}>
                    <div className={styles['accordion-seta-wrapper']}>
                        <BiDownArrowAlt />
                    </div>
                </div>
            </div>
            <nav className={`${styles['exclusive-accordion-dropdown']} ${styles['w-dropdown-list']} ${display ? styles['w--open'] : ''}`}>
                <div className={styles['exclusive-acordion-open-wrapper']}>
                    <div className={styles['exclusive-acordion-open-text-wrapper']}>
                        <div className={styles['reckless-16']}>
                            The sea coastline from north to south, wide mountain views and the most romantic cities. VARINO invests in the most privileged locations in Portugal, such as Funchal and Lisbon, to create transformative projects for the real estate industry itself.
                        </div>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default ExclusiveAccordion