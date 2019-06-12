import React, { useState, useContext } from 'react'
import Input from './Input'
import Button from './Button'
import { MainContext } from '../Context'

function Search() {

    const [keyword, setKeyword] = useState("")
    const { dispatch } = useContext(MainContext)

    const inputHandler = e => {
        setKeyword(e.target.value)
    }

    const buttonHandler = e => {
        e.preventDefault()
        const payload = {
            keyword
        }
        dispatch({ type: 'FETCH_VIDEOS', payload })
    }

    return (
        <div id="searchBar">
            <div className="row">
                <div className="col-md-10">
                    <Input
                        type="text"
                        name="search"
                        placeholder="Type Keyword"
                        onKeyUp={inputHandler}
                    />
                </div>
                <div className="col-md-2">
                    <Button
                        className="btn btn-success"
                        text="Search"
                        onClick={buttonHandler}
                    />
                </div>
            </div>
        </div>
    )
}

export default Search;