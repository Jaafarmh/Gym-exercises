import { TextField } from "@mui/material";
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
        <div className=" mt-[50px] p-[20px] flex flex-col justify-center items-center"
         >
           <p className=" text-3xl font-bold mb-8" >
                Awesome Exercises You Should Know
           </p>

        <div position='relative' mb='70px'>
            <TextField 
            sx={{
                input:{ border:'none', borderColor:'yellow'},
                width:{lg:'1100px',md:'600px', xs:'350px'},
                backgroundColor:'#fff'
            }}
           
            height='80px'
            value={search}
            onChange={(e) =>setSearch(e.target.value.toLocaleLowerCase())}
            placeholder="Search Exercises"
            type="text"
            />
            
            <button 
            className=" bg-[#ff2625] h-14 p-4  text-xl text-white rounded-md  hover:bg-red-600"
            onClick={handleSearch}>
                Search
            </button>
        </div>

        <div  className="relative flex items-center w-full mt-4  group  " >
             <MdChevronLeft onClick={slideLeft} size={40} className=" bg-[#ff2625] opacity-50 rounded-full absolute hidden  group-hover:block left-0 cursor-pointer hover:opacity-100 z-10" />

            <div ref={slider} className=" overflow-x-scroll scroll-smooth">
            <HorizontalScrollBar  data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </div>
               
             <MdChevronRight onClick={slideRight} size={40} className=" bg-[#ff2625] opacity-50 rounded-full absolute hidden group-hover:block  hover:opacity-100 cursor-pointer right-0 z-10 " />
           </div>
    </div>
    );
}

export default SearchExercises; 