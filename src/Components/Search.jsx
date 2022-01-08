import { useState } from "react";
import SearchInput from "./SearchInput";
import axios from 'axios'
import Results from "./Results";
export default function Search() {
    const baseURL= process.env.REACT_APP_BASE_URL
    const [data,setData]= useState(null)
    const getData=(query)=>{
        axios.get(baseURL+query)
        .then((res)=>{
            console.log(res.data.meals)
            setData(res.data.meals)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return(
        <div>
            <SearchInput getData={getData}/>
            {data && data.map((item)=>{
                return <Results key={item.idMeal} image={item.strMealThumb} name={item.strMeal} category={item.strCategory} link={item.strYoutube} />
            })}
        </div>
    )
}