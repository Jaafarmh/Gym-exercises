

import BodyPart from './bodyPart';


const HorizontalScrollBar = ({data}) => {
 
    return (
        <div className=' flex w-fit h-fit  '>
        {data.map((item, id)=>
            <BodyPart key={id} item={item}/>               
         )}
        </div>
     
    );
}

export default HorizontalScrollBar;
