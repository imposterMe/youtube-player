export const Reducer = (videos = [], action) => {
    switch (action.type) {
        case "FETCH_VIDEOS":
            const { payload } = action
            console.log(payload.keyword)
            return videos;
        default:
            return videos

    }
}
