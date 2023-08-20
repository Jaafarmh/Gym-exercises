
import backIcon from '../assets/icons/back1.webp'
import cardioIcon from '../assets/icons/cardio.png'
import chestIcon from '../assets/icons/chest.jpeg'
import forearmsIcon from '../assets/icons/forearms.webp'
import neckIcon from '../assets/icons/neck.webp'
import shouldersIcon from '../assets/icons/shoulders.webp'
import upperarmsIcon from '../assets/icons/upperarms.jpg'
import upperlegsIcon from '../assets/icons/upperlegs1.webp'
import lowerlegsIcon from '../assets/icons/lowerlegs.webp'
import allIcon from '../assets/icons/all.png'
import { useContext } from 'react'
import { ExerciseContext } from '../Context/exerciseContext'

const BodyPart = ({item}) => {
    const {bodyPart,setBodyPart} = useContext(ExerciseContext)
    const imageSources = {
        
        back: backIcon,
        cardio: cardioIcon,
        chest: chestIcon,
        lower_arms: forearmsIcon,
        upper_arms  : upperarmsIcon,
        neck: neckIcon,
        shoulders: shouldersIcon,
        upper_legs: upperlegsIcon,
        lower_legs: lowerlegsIcon,
        all: allIcon,
    };


    const itemKey = item.replace(' ', '_').toLowerCase();
    const custom = item === 'waist' ? 'hidden' : ''
    return (
        <div className={`  bodyPart-card cursor-pointer flex flex-col items-center justify-center my-2 mx-2 h-[120px] w-[150px] bg-gray-100 rounded-md ${custom}
        border-t-4 ${bodyPart === item ? 'border-t-blue-600    ': ' ' }
         `}
         onClick={()=>{
            setBodyPart(item)
            console.log(item)
         }} > 
         
            <img 
            src={imageSources[itemKey]} alt={`${item}`}
            className= {`w-24 h-16 my-2 `} />
            <p className={`pb-2 capitalize`} >{item} </p>
     
        </div>  
        
    );
}

export default BodyPart;
