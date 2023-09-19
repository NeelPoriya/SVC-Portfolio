import styles from './../styles/VideoSection.module.css'
import globalStyles from './../styles/Global.module.css'
import HorizontalLine from './HorizontalLine'

const VideoSection = () => {
    return (
        <>
            <div className={globalStyles['page-padding']} >
                <div className={globalStyles["padding-vertical"]}>
                    <video src={'/promo.mp4'} autoPlay loop muted style={{
                        width: '100%'
                    }} /></div>
            </div>
            <HorizontalLine />
        </>
    )
}

export default VideoSection