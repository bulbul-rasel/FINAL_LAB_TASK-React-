import {React,useState} from 'react'
import {Link,useParams} from 'react-router-dom'

const Update = ({diaries,setDiaries,url}) => {

    const [newDiary,setnewDiary] = useState({
        'id':'',
        'event':'',
        'experience':'',
        'thought':'',
        'last_modification':'',
    });

    const {id} = useParams();

    const updateUser = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        let diary={...newDiary,[name] : value};
        setnewDiary(diary);
        
    }

    //assync post type and setting setDiaries
    const updateDiary = async(diary)=>{
        const res = await fetch(`${url}/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(diary),
        })
        const data = await res.json()
        setDiaries([...diaries]);
    }


    //submittion
    const onsubmit =(e)=>{
        e.preventDefault();
        const newObj ={
            'id':id,
            'event':newDiary.event,
            'experience':newDiary.experience,
            'thought':newDiary.thought,
            'last_modification':newDiary.last_modification,
        }
        updateDiary(newObj)
        alert('Update Complete. Refresh the page.');
    }

    return (
        <div>
            <form action="" onSubmit={onsubmit}>
            <div>
                    <label htmlFor="">Event</label>
                    <input type="text" name='event' onChange={updateeUser}/>
                </div>
                <br/><br/>

                <div>
                    <label htmlFor="">Experience</label>
                    <input type="text" name='experience' onChange={updateUser}/>
                </div>
                <div>
                    <label htmlFor="">Thought</label>
                    <input type="text" name='thought' onChange={updateUser}/>
                </div>
                <div>
                    <label htmlFor="">Last Modification</label>
                    <input type="date" name='last_modification' onChange={updateUser}/>
                </div>
                <br/><br/>

                <input type="submit" value='Update'/>
            </form>
            <br/><br/>
            <Link to='/diarylist'>Diary List</Link>
            <br/><br/>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default UpdateInfo