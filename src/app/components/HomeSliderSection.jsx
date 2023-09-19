import styles from './../styles/HomeSliderSection.module.css'
import globalStyles from './../styles/Global.module.css'
import Link from 'next/link'
import HorizontalLine from './HorizontalLine'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import Image from 'next/image'
import { useRef, useState } from 'react'

const projects = [
    {
        title: 'Project 1',
        location: 'Location 1',
        releaseDate: 'Release Date 1'
    },
    {
        title: 'Project 2',
        location: 'Location 2',
        releaseDate: 'Release Date 2'
    },
    {
        title: 'Project 3',
        location: 'Location 3',
        releaseDate: 'Release Date 3'
    },
]

const HomeSliderSection = () => {

    const [currentProject, setCurrentProject] = useState(0);
    const carousel = useRef(null);
    const firstCard = useRef(null);

    const handleLeft = (e) => {
        carousel.current.scrollLeft += -firstCard.current.offsetWidth;
        setCurrentProject((prev) => Math.max(0, prev - 1));
    }

    const handleRight = (e) => {
        carousel.current.scrollLeft += firstCard.current.offsetWidth;
        setCurrentProject((prev) => Math.min(projects.length - 1, prev + 1));
    }

    return (
        <>
            <div className={globalStyles['page-padding']}>
                <div className={globalStyles['padding-vertical-small']}>
                    <div className={styles['home-slider-component']}>
                        <div className={styles['home-slider-left']}>
                            <div className={styles['home-slider-left-padding']}>
                                <div className={styles['home-slider-left-component']}>
                                    <div className={styles['home-slider-left-top']}>
                                        <div className={styles['aktiv-10']}>Featured Projects</div>
                                        <div className={styles['home-slider-left-heading-margin']}>
                                            <div className={globalStyles['overflow-hidden']}>
                                                <Link href="/about" className={globalStyles['w-inline-block']}>
                                                    <h2 className={styles['reckless-26']}>
                                                        {projects[currentProject].title.toUpperCase()}
                                                    </h2>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles['home-slider-left-bottom']}>
                                        <div className={styles['home-slider-left-bottom-top']}>
                                            <div className={styles['home-slider-left-bottom-top-left']}>
                                                <div className={styles['aktiv-10']}>Location</div>
                                                <div className={styles['home-slider-left-bottom-top-left-margin']}>
                                                    <div className={styles['aktiv-13']}>
                                                        {projects[currentProject].location.toUpperCase()}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles['home-slider-left-bottom-top-right']}>
                                                <div className={styles['aktiv-10']}>RELEASE DATE</div>
                                                <div className={styles['home-slider-left-bottom-top-left-margin']}>
                                                    <div className={styles['aktiv-13']}>{projects[currentProject].releaseDate.toUpperCase()}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles['home-slider-left-bottom-bottom']}>
                                            <div className={styles['home-slider-arrow-component']}>
                                                <div className={styles['slide-control-left']} onClick={handleLeft}>
                                                    <div className={styles['slide-arrow-wrapper']} >
                                                        <BiLeftArrowAlt />
                                                    </div>
                                                </div>
                                                <div className={styles['slide-control-right']} onClick={handleRight}>
                                                    <div className={styles['slide-arrow-wrapper']} >
                                                        <BiRightArrowAlt />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={globalStyles['vertical-line']} />
                        <div className={styles['home-slider-right']}>
                            <div className={styles['carousel-wrapper']}>
                                <div className={styles['carousel']} ref={carousel}>
                                    <div ref={firstCard} className={styles['card']}>
                                        <Image className={styles['image']} src={'https://images.unsplash.com/photo-1474696100102-01b8519f06f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'} width={2070} height={1380} alt={'project-1'} />
                                    </div>
                                    <div className={styles['card']}>
                                        <Image className={styles['image']} src={'https://images.unsplash.com/photo-1503951458645-643d53bfd90f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'} width={2070} height={1380} alt='image-2' />
                                    </div>
                                    <div className={styles['card']}>
                                        <Image className={styles['image']} src={'https://images.unsplash.com/photo-1479520997871-76c75ea2b67a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'} width={2069} height={1381} alt='image-2' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HorizontalLine />
        </>
    )
}

export default HomeSliderSection