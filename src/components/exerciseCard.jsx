import { Link } from "react-router-dom";

const ExerciseCard = ({exercise}) => {
    const {gifUrl, name, bodyPart,id,target} = exercise;
    return (
        <Link className=" sm:w-1/3 lg:w-1/4  overflow-auto exercise-card "  to={`/exercise/${id}`}>
            <img src={gifUrl} alt={name} loading="lazy" />
            <div className=" flex">
            <button className=" bg-[#ffa9a9]  capitalize p-2 m-2 text-[18px] rounded-md ">
            {target}
            </button>
            <button className="  bg-yellow-300  capitalize p-2 m-2 text-[18px] rounded-md ">
            {bodyPart}
            </button>
            </div>        
            <p className=" ml-2 text-xl pb-4 font-bold capitalize ">{name} </p>
           
        </Link>
    );  
}

export default ExerciseCard;
