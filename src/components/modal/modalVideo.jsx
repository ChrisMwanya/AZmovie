import ModalVideos from 'react-modal-video'
import './../../../node_modules/react-modal-video/scss/modal-video.scss';

const ModalVideo = (props) => {
    console.log(props.videoId)
    return (
        <ModalVideos
            channel="youtube"
            isOpen={props.isOpen}
            videoId={props.videoId}
            onClose={props.isClose}
        />
    )
}

export default ModalVideo;