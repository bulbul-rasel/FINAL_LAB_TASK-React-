import React from 'react'
import Diary from './Diary'
import useFetch from './useFetch'
const Diaries = ({diaries,url,setDiaries}) => {

    useFetch({setDiaries,url});
    
    return (
        <>
            
            {diaries.map((diary,index)=>
            <Diary key={index} diary={diary} url={url} setDiaries={setDiaries} diaries={diaries}/>
            )}
        </>
    )
}

export default Diaries