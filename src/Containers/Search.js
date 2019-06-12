import React, { useState, useContext } from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
import MainContext from '../Context'
import { fetchList } from '../Api/Youtube/V3'

export default React.memo(() => {

    const [keyword, setKeyword] = useState("")
    const { state, dispatch } = useContext(MainContext)

    const inputHandler = e => {
        setKeyword(e.target.value)
    }

    const formSubmitHandler = async e => {
        e.preventDefault()
        if (!keyword)
            return false;

        const videos = await fetchList(keyword);

        const payload = {
            videos
        }

        dispatch({ type: 'FETCH_VIDEOS', payload })

    }

    return (
        <div className="row" id="searchBar">
            <form onSubmit={formSubmitHandler}>
               <div className='row'>
               <div className="col-md-10">
                    <Input
                        type="text"
                        name="search"
                        className="form-control"
                        placeholder="Type Keyword"
                        onKeyUp={inputHandler}
                    />
                </div>
                <div className="col-md-2">
                    <Button
                        className="btn btn-success"
                        text="Search"
                    />
                </div>
               </div>
            </form>
        </div>
    )
})