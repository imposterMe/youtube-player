import React from 'react'

export default React.memo((props) => {
    const { video } = props
    const { snippet, snippet: { thumbnails } } = video;
   
    return (
        <>
            {
                <div
                {...props}
                className='col-md-4 videoItem'>
                    <div className="videoTitle">
                        <h5>
                            {snippet.title}
                        </h5>
                    </div>

                    <img
                        src={thumbnails.medium.url}
                        height={`${thumbnails.medium.height}px`}
                        width={`${thumbnails.medium.width}px`}
                    />
                    <p>
                        Description
                    </p>
                </div>
            }

        </>
    )
});