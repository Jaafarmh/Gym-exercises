import Logo from '../assets/images/fitness.png'

import {AiOutlineArrowUp} from 'react-icons/ai'
const Footer = () => {
    return (
       <div className=" bg-slate-200 gap-x-4 items-center flex rounded-sm p-6 w-screen  ">
                <img className='w-14 h-14' src={Logo} alt="logo" />
                <p className=' text-blue-400 text-2xl font-bold'>Fitness Club</p>
                   <a className=' ms-auto'
                   href="#home">
                      <AiOutlineArrowUp size={40} className=' bg-white hover:bg-blue-300 
                      transform scale-100 transition-all duration-300 hover:scale-125 p-1 rounded-full' />
                   </a>
       </div>
    );
}

export default Footer;  
