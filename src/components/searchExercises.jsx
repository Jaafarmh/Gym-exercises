import { useEffect, useRef, useState } from "react";
import { fetchData ,exerciseOptions} from "../Utils/fetchData";
import HorizontalScrollBar from "./horizontalScrollBar";
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'

const SearchExercises = ({bodyPart, setBodyPart, setExercises}) => {

    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])

    useEffect(()=>{
        const fetchExercisesData = async ()=>{
         const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)


         setBodyParts(['all', ...bodyPartsData])
         
        }
        fetchExercisesData()
    },[])

    
    const handleSearch =async ()=>{
                    if(search){
                        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

                        const searchedExercises = exercisesData.filter(
                            (item) => item.name.toLowerCase().includes(search)
                                   || item.target.toLowerCase().includes(search)
                                   || item.equipment.toLowerCase().includes(search)
                                   || item.bodyPart.toLowerCase().includes(search),
                          );        
                             setSearch('');
                            setExercises(searchedExercises);
        }
    }
    const slider = useRef();

    const slideLeft = ()=> slider.current.scrollLeft -= 500;
    const slideRight = ()=> slider.current.scrollLeft += 500;

        
    
    return (
        <div className=" mt-[60px] p-[20px] flex flex-col justify-center items-center"
         >
           <p className=" text-3xl font-bold mb-8 text-blue-400 " >
                Awesome Exercises You Should Know
           </p>

        <div className=" relative flex items-center justify-center w-full">
            <input className=" w-screen md:w-1/2  h-12 p-2 outline-none border-2 border-blue-400 rounded-l-md  "
            placeholder="Search Exercises"
            type="text"
            value={search}
            onChange={(e) =>setSearch(e.target.value.toLocaleLowerCase())}
            />
           
            <button 
            className=" h-12 bg-blue-400 px-2 text-xl text-white  hover:bg-blue-600 rounded-r-md"
            onClick={handleSearch}>
                Search
            </button>
        </div>

        <div  className="relative flex items-center w-full mt-4 group  " >
             <MdChevronLeft onClick={slideLeft} size={40} className=" bg-blue-400 opacity-60 rounded-full absolute hidden  group-hover:block hover:opacity-100 left-0 cursor-pointer  z-10" />

            <div ref={slider} className=" overflow-x-scroll scroll-smooth">
            <HorizontalScrollBar  data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </div>
               
             <MdChevronRight onClick={slideRight} size={40} className=" bg-blue-400 opacity-60 rounded-full absolute hidden group-hover:block hover:opacity-100 cursor-pointer right-0 z-10 " />
           </div>
    </div>
    );
}

export default SearchExercises; 