
import Icon from '../assets/icons/gym.png'

const BodyPart = ({item, bodyPart, setBodyPart}) => {

    return (
        <div className={` bodyPart-card cursor-pointer flex flex-col items-center justify-center my-2 mx-2 h-[120px] w-[150px] bg-gray-100 rounded-md
         border-t-4 ${bodyPart === item ? 'border-t-[#ff2625]': ' ' }
         `}
         onClick={()=>{
            setBodyPart(item)
            
         }} > 
         
        <img
        src={Icon} alt="dumbell"
        className=' w-[40px] h-[50px] my-4' />
        <p className=' capitalize '>{item} </p>
     
        </div>  
        
    );
}

export default BodyPart;
