import { YOUTUBE_API_KEY, YOUTUBE_URL } from '../../Config'
import axios from 'axios'

export const fetchList = async (keyword) => {
    try {
        const result = await axios.get(`${YOUTUBE_URL}?part=snippet&q=${keyword}&type=video&key=${YOUTUBE_API_KEY}&maxResults=20`)
        const { items } = result.data

        return items;
    } catch (error) {
        console.log('error: ', error)
    }
}