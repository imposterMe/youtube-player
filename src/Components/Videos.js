import React, { useContext, useState } from 'react'
import YTPlayer from './YTPlayer'
import Video from './Video'
import uniqid from 'uniqid'
import MainContext from '../Context'

export default React.memo(() => {

    const { state } = useContext(MainContext)

    const { videos } = state;
    const [current, setCurrent] = useState({})
   
console.log(videos)

    return (
        <div id="videosList" className="row">
            {
                videos.map(video => (
                    (current.id && current.id === video.id.videoId) ? <YTPlayer 
                    width="640" 
                    height="360"
                    frameborder="0"
                    src={`https://www.youtube.com/embed/${current.id}?autoplay=1&mute=0`} /> 
                    : <Video
                    key={uniqid(video.id.videoId)}
                    video={video}
                    onClick={() => {
                        setCurrent({
                            id: video.id.videoId
                        })
                    }}
                />
            )    
                )
            }
        </div>
    )
});