import {Link} from 'react-router-dom'
import Logo from '../assets/images/fitness.png'


const Navbar = () => {
    return (
        <div id='home' className=' flex items-center bg-slate-300 border-2 border-b-blue-400 rounded-sm h-20 gap-x-14 py-2 z-10 ' >
            <Link to='/' >
                <img  src={Logo} alt='logo' className='w-20 p-2' />
            </Link>
            <div className=' flex gap-x-4 text-2xl  ' >
                <Link className=' hover:bg-blue-300 p-2 rounded-md' to='/' >
                    Home
                </Link>
                <a className='hover:bg-blue-300 p-2 rounded-md' href="#exercises">Exercises</a>
            </div>
        </div>
    );
}

export default Navbar;
