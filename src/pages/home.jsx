import { Box } from "@mui/material";
import HeroBanner from '../components/heroBanner'
import SearchExercises from '../components/searchExercises'
import Exercises from '../components/exercises'
import { useState } from "react";

const Home = () => {
    const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setExercises] = useState([])

    console.log(bodyPart)

    return (
       <Box>
        <HeroBanner />
        <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
         />
        <Exercises 
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
         />
       </Box>
       
    );
}

export default Home;
