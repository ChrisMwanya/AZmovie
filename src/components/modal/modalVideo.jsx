import ModalVideos from 'react-modal-video'
import './../../../node_modules/react-modal-video/scss/modal-video.scss';

const ModalVideo = (props) => {
    
    return (
      
         <ModalVideos
            channel="youtube"
            isOpen={props.isOpen}
            videoId={props.videoId ? props.videoId.key : 'video'}
            onClose={props.isClose}
        />
     

       
    )
}

export default ModalVideo;