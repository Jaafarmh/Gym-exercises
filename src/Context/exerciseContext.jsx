import { createContext, useState } from "react";

export const ExerciseContext = createContext({
   
   
})

export const ExerciseContextProvider = ({children})=>{
    const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setExercises] = useState([])

    return(
        <ExerciseContext.Provider value={{bodyPart, setBodyPart, exercises, setExercises}}>
            {children}
        </ExerciseContext.Provider>
    )
}

