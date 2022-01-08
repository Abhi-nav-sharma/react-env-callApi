import { useState } from "react";

export default function SearchInput({getData}){
    const [state,setState]= useState('')
    const handleSearch=()=>{
        getData(state)
        setState('')
    }
    return(
        <div>
            <input type='text' placeholder='Enter something' value={state} onChange={(e)=>{setState(e.target.value)}}/>
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}