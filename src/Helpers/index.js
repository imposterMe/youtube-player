import { useContext } from 'react'
import MainContext from '../Context'

const { state } = useContext(MainContext)

export const findVideo = (videoId) => {
    const { videos } = state;

    return videos.filter( video => video.id.videoId === videoId )
}