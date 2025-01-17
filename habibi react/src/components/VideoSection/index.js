import React from 'react'
import VideoModal from '../ModalVideo/VideoModal';


const VideoSection = (props) => {
    return (
        <section className={`wpo-video-section pb-0 section-padding ${props.vClass}`}>
            <h2 className="hidden">some</h2>
            <div className="container-fluid">
                <div className="video-wrap">
                    <img src={props.vimg} alt="" />
                    <VideoModal />
                </div>
            </div>
        </section>
    )
}

export default VideoSection;