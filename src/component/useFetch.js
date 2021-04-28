import {useEffect} from 'react'

const useFetch = ({setDiaries,url}) => {

    const getDiaries = async () =>{
        const response = await fetch(url);
        const data = await response.json();
        setDiaries(data);
    }

    useEffect(()=>{
        getDiaries()
    },[url])
}

export default useFetch