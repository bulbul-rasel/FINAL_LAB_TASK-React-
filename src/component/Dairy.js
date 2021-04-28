import React from 'react'
import {Link} from 'react-router-dom'
const Diary = ({diary,url,setDiaries,diaries}) => {

    const onclick = async()=>{
        await fetch(`${url}/${diary.id}`,
        {method:'DELETE',
        })
        setDiaries(diaries.filter((item)=>item.id!=diary.id))

    }

    return (
        <div>
            <h1>Id: {diary.id} </h1>
            <h4>Event: {diary.event}</h4>
            <h4>Experience: {diary.experience}</h4>
            <h4>Thought: {diary.thought}</h4>

            <h4>Last Modification: {diary.last_modification}</h4>
            <Link to={`/view/${diary.id}`}><button style={{margin:'5px'}}>View</button></Link> 

            <button style={{margin:'5px'}} onClick={onclick}>Delete</button>
            <hr/>
        </div>
    )
}

export default Diary