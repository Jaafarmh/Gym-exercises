import { useEffect, useState } from "react";
import Detail from "../components/detail";
import ExerciseVideos from "../components/exerciseVideos";
import { useParams } from "react-router-dom";
import { fetchData , exerciseOptions, youtubeOptions} from "../Utils/fetchData";

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail]= useState({})
    const [exerciseVideos, setExerciseVideos]= useState({})
    const {id} = useParams()

    useEffect(()=>{
        const fetchExercisesDetails = async ()=>{
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com/exercises'
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercise/${id}`, exerciseOptions)
            setExerciseDetail(exerciseDetailData)
            console.log(exerciseDetailData)
            
            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${
                exerciseDetailData.name}`, youtubeOptions)
            setExerciseVideos(exerciseVideosData.contents)
            console.log(exerciseVideosData)
        }
        fetchExercisesDetails()
    },[id])
    
    return (
        <div>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
                      
        </div>
    );
}

export default ExerciseDetail;
