export default function Reducer (state, action) {
    const { payload } = action
    switch (action.type) {
        case "FETCH_VIDEOS":
            const { videos } = payload
            state.videos = videos;
            return {...state};
        default:
            return state
    }
}
