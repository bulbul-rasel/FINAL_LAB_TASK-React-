import React from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom';
const View = ({diaries}) => {

    const {id} = useParams()

    const diary = diaries.filter((item)=>item.id==id)[0]


    return (
        <div>
            <h1>Id: {diary.id} </h1>
            <h4>Event: {diary.event}</h4>
            <h4>Experience: {diary.experience}</h4>
            <h4>Thought: {diary.thought}</h4>

            
            <h4>Last Modification: {diary.last_modification}</h4>
            <br/><br/>
            <Link to={`/update/${id}`}><button style={{margin:'5px'}}>Edit</button></Link>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default View