import { Link } from "react-router-dom";

const ExerciseCard = ({exercise}) => {
    return (
        <Link className=" sm:w-1/3 lg:w-1/4  overflow-auto exercise-card "  to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
            <div className=" flex">
            <button className=" bg-[#ffa9a9]  capitalize p-2 m-2 text-[18px] rounded-md ">
            {exercise.target}
            </button>
            <button className="  bg-yellow-300  capitalize p-2 m-2 text-[18px] rounded-md ">
            {exercise.bodyPart}
            </button>
            </div>        
            <p className=" ml-2 text-xl pb-4 font-bold capitalize ">{exercise.name} </p>
           
        </Link>
    );  
}

export default ExerciseCard;
