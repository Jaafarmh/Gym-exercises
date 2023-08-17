
import BodyPart from './bodyPart';


const HorizontalScrollBar = ({data,bodyPart,setBodyPart}) => {
  
    return (
        <div className=' flex w-fit h-fit  '>
        {data.map((item, id)=>
            <BodyPart key={id} item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />               
         )}
        </div>
     
    );
}

export default HorizontalScrollBar;
