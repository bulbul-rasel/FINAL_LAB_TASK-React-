import React from 'react'
import Diary from './Diary'

const Diaries = ({diaries,url,setDiaries}) => {
    return (
        <>
            {diaries.map((diary,index)=>
            <Diary key={index} diary={diary} url={url} setDiaries={setDiaries} diaries={diaries}/>
            )}
        </>
    )
}

export default Diaries