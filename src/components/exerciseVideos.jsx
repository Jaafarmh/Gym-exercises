import React from 'react';
import Loader from './loader';

const ExerciseVideos = ({exerciseVideos, name}) => {
    if (!exerciseVideos.length) return <Loader />;
    return (
        <div className=' p-4 flex flex-col items-center md:items-start'>

            <div>
            <p className=' text-xl my-4 md:text-3xl'>Watch <span className=' text-[#ff2625] text-xl md:text-3xl '>{name}</span> exercise videos </p>
            </div>

            <div className=' flex flex-wrap justify-center md:gap-x-4 lg:gap-x-6'>
            {
                exerciseVideos?.slice(0,6)?.map((item,index)=>(
                    <a  
                    key={index}
                    className=' exercise-video '
                    href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                    target='_blank'
                    rel='noreferrer'
                    >
                        <img className=' rounded-xl' src={item.video.thumbnails[0].url} alt={item.video.title} />
                        <p className=' bg-black w-fit px-2  text-white py-1 rounded-md'>{item.video.channelName} </p>
                    </a>
                    

                ))
            }
            </div>
        </div>
    );
}

export default ExerciseVideos;
