import './index.css'
import ReactPlayer from 'react-player'

const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
        <ReactPlayer url="https://www.youtube.com/watch?v=wOoNLEgQCD8&pp=ygUKcmVhY3QgYXBpcw%3D%3D" />
    </div>
  </div>
)

export default VideoPlayer
