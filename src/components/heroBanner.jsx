import HeroBannerImage from '../assets/images/banner.jpg'

const HeroBanner = () => {
    return (
        <div className=' relative  flex flex-col items-center md:items-start' >
           <div className=' flex flex-col gap-y-4 mb-4 ml-2 mt-4  md:mt-60 '>
           <p  className='  text-blue-400 text-5xl font-semibold '>
                Fitness Club
            </p>   
            <p className='text-2xl font-bold  capitalize'>
                no pain, no gain
            </p>   
            <p className=' text-2xl font-bold '>
                Check out the most effective exercises
            </p>
           </div>
                      
            <a className=' bg-blue-400 hover:bg-blue-600 p-2 ml-2 rounded-md text-lg text-white mt-4 ' 
            href='#exercises'>
            Explore Exercises
            </a>
         
            <img src={HeroBannerImage} alt="banner" className=' hidden md:block absolute top-0 h-[500px] w-screen opacity-70 -z-10 '/>
        </div>
    );
}

export default HeroBanner;
