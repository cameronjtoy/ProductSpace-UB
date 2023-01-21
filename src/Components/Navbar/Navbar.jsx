import logo from '../../Assets/logo2.png';

export const Navbar = () => {
    return(
        <nav class="bg-white text-jost">
            
            <div class = "max-w-6xl ">
                <div class="flex justify-between"> 
                    <div class="flex ">
                        <div class="flex space-x-4 ">
                            <a href="http://localhost:3000/" class="py-4 px-2" >
                                <img src={logo} alt="Logo" class="pl-4" />
                            </a>
                        </div>

                        <div class="flex items-center space-x-3 text-gray-700 font-semibold">
                            <a href="http://localhost:3000/" class="py-4 px-3 hover:text-blue-600 hover:transition-all">Home</a>
                            <a href="http://localhost:3000/" class="py-4 px-3 hover:text-blue-600">About</a>
                            <a href="http://localhost:3000/" class="py-4 px-3 hover:text-blue-600">Students</a>
                            <a href="http://localhost:3000/" class="py-4 px-3 hover:text-blue-600">Companies</a>
                            <a href="http://localhost:3000/" class="py-4 px-3 hover:text-blue-600">Careers</a>
                            <a href="http://localhost:3000/" class="py-4 px-3 hover:text-blue-600 hover:underline decoration-2 underline-offset-8 ">Apply</a>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </nav>
    )
}


