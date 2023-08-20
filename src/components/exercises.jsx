import { Pagination } from "@mui/material";
import ExerciseCard from "./exerciseCard";
import { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../Utils/fetchData";
import { useContext } from "react";
import { ExerciseContext } from "../Context/exerciseContext";

const Exercises = () => {
    const {bodyPart,exercises,setExercises} = useContext(ExerciseContext)
    
    const [currentPage, setCurrentPage ] = useState(1)
    const exercisesPerPage = 9
    const indexOfLastExercise = currentPage * exercisesPerPage
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage 

    const currentExercises = exercises?.slice(indexOfFirstExercise, indexOfLastExercise)

    const paginate = (e, value)=>{
            setCurrentPage(value)
            window.scrollTo({top: 1300, behavior:'smooth'})
    }

    useEffect(()=>{
        console.log(bodyPart)
        const fetchExercisesData = async ()=>{
            let exercisesData = []
            if(bodyPart === 'all'){
                exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
            } else {
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions)
              
            }
            console.log(exercisesData)
            setExercises(exercisesData)
        }
        fetchExercisesData()
    },[bodyPart])

    return (
        <div id='exercises' className=' p-20 mt-[20px] md:mt-[80px]  '>  
            <p className=' text-4xl mb-4 p-2 '>Shwoing Results</p>
            <div className=' flex  justify-center flex-wrap gap-[50px] lg:gap-[110px] '>
                {currentExercises?.map((exercise, index)=>(
                   <ExerciseCard key={index} exercise={exercise} />
                ))}
            </div>
            <div className=" flex mt-16 justify-center items-center">
                {exercises?.length > 9 && (
                    <Pagination
                    color="standard"
                    shape="rounded"
                    count={Math.round(exercises.length/exercisesPerPage)}
                    page={currentPage}
                    onChange={paginate}
                    size="large"
                     />
                )
                }
            </div>
        </div>
    );
}

export default Exercises;
