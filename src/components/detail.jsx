
import BodyPartImg from '../assets/icons/body-part.png'
import EquipmentImg from '../assets/icons/equipment.png'
import TargetImg from '../assets/icons/target.png'

const Detail = ({exerciseDetail}) => {
    const {bodyPart, equipment, gifUrl, name,target} = exerciseDetail

    const extraDetail = [
        {
            icon:BodyPartImg,
            name:bodyPart
        },
        {
            icon:EquipmentImg,
            name:equipment
        },
        {
            icon:TargetImg,
            name:target
        }
    ]
        
    return (
        <div className=' flex flex-col md:flex-row justify-between'>
            <img src={gifUrl}  alt={name} loading='lazy' className=' mx-auto p-4 bg-yellow-20 w-1/2 h-[500px] ' />
            <div className='flex flex-col  p-4 gap-y-6 md:w1/3 md:justify-center'>
                <p className=' text-center text-3xl font-bold '>{name} </p>
                <p className=' italic max-w-md '>
                    Exercises keep you strong. {name}{`  `}
                    is one of the best exercises to taget your {target}
                    It will help you improve your mode and gain energy.
                </p>
                {extraDetail.map((item)=>
                    <div key={item.id} className=' flex gap-x-4 capitalize items-center text-lg ' >
                       <button className='  bg-blue-200 p-[10px] rounded-full'>
                       <img src={item.icon} alt={name} />
                       </button>
                        <p>{item.name} </p>
                    </div>
                )

                }
            </div>

        </div>
    );
}

export default Detail;
