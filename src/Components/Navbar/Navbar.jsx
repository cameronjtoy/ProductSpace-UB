import logo from '../../Assets/logo2.png';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return(
        <div className="bg-white text-jost">
            
            <div className = "max-w-6xl ">
                <div className="flex justify-between"> 
                    <div class="flex ">
                        <div className="flex space-x-4 ">
                            <Link to="/" className="py-4 px-2" >
                                <img src={logo} alt="Logo" class="pl-4" />
                            </Link>
                        </div>

                        <div class="flex items-center space-x-3 text-gray-700 font-semibold">
                            <nav>
                            <NavLink exact="true" to="/" className="py-4 px-3 hover:text-blue-600 hover:transition-all">Home</NavLink>
                            <NavLink exact="true" to="/about" className="py-4 px-3 hover:text-blue-600">About</NavLink>
                            <NavLink exact="true" to="/students" className="py-4 px-3 hover:text-blue-600">Students</NavLink>
                            <NavLink exact="true" to="/companies" className="py-4 px-3 hover:text-blue-600">Companies</NavLink>
                            <NavLink exact="true" to="/careers" className="py-4 px-3 hover:text-blue-600">Careers</NavLink>
                            <NavLink exact="true" to="/apply" className="py-4 px-3 hover:text-blue-600 hover:underline decoration-2 underline-offset-8 ">Apply</NavLink>
                            </nav>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


