const AdminDashboard = {
    render() {
        return /* html */ `

        <div>
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
    
    <div x-data="{ sidebarOpen: false }" class="flex h-screen bg-gray-200">
        <div :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false" class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>
    
        <div :class="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'" class="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
            <div class="flex items-center justify-center mt-8">
                <div class="flex items-center">
                   <img class="h-64 w-full object-cover"
                                src="../../../images/logo-dashboard.png"
                                alt="logo">
                </div>
            </div>
    
            <nav class="mt-10">
                <a class="flex items-center mt-4 py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100" href="/admin">
                   <img class="w-12 object-cover"
                                src="../../../images/dashboard.png"
                                alt="Your avatar">
    
                    <span class="mx-3">Dashboard</span>
                </a>
    
                
    
                <a class="flex items-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                    href="/">
                    <img class="w-12 object-cover"
                                src="../../../images/home.png"
                                alt="Home">
    
                    <span class="mx-3">Back Home</span>
                </a>
            </nav>
        </div>
        <div class="flex-1 flex flex-col overflow-hidden">
            <header class="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
                <div class="flex items-center">
                    <button @click="sidebarOpen = true" class="text-gray-500 focus:outline-none lg:hidden">
                        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg>
                    </button>
    
                    <div class="relative mx-4 lg:mx-0">
                        <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                            <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </span>
    
                        <input class="form-input w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600" type="text"
                            placeholder="Search">
                    </div>
                </div>
    
                <div class="flex items-center">
                    <div x-data="{ notificationOpen: false }" class="relative">
                        <button @click="notificationOpen = ! notificationOpen"
                            class="flex mx-4 text-gray-600 focus:outline-none">
                            <span>abc@gmail.com</span>
                        </button>
    
                        <div x-show="notificationOpen" @click="notificationOpen = false"
                            class="fixed inset-0 h-full w-full z-10" style="display: none;"></div>
    
                        <div x-show="notificationOpen"
                            class="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl overflow-hidden z-10"
                            style="width: 20rem; display: none;">
                        </div>
                    </div>
    
                    <div x-data="{ dropdownOpen: false }" class="relative">
                        <button @click="dropdownOpen = ! dropdownOpen"
                            class="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
                            <img class="h-full w-full object-cover"
                                src=".././../../images/hacker.png"
                                alt="Your avatar">
                        </button>
                    </div>
                </div>
            </header>
            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                <div class="container mx-auto px-6 py-8">
                    <h3 class="text-gray-700 text-3xl mb-20 font-medium">Bảng điều khiển</h3>
    
                    <div class="mt-4">
                        <div class="flex flex-wrap -mx-6">
                            <div class="transition ease-in-out delay-350 hover:-translate-y-1 hover:scale-110 hover: duration-300 w-full px-6 sm:w-1/2 xl:w-1/3">
                                 <a href="/admin/users"><div class="transition ease-in-out hover:bg-slate-100 flex items-center px-5 py-10 shadow-sm rounded-md bg-white">
                                    <div class="transition ease-in-out delay-200 hover:bg-lime-300 p-3 rounded-full bg-indigo-600 bg-opacity-75">
                                         <img class="w-16"src=".././../../images/man.png"alt="Your avatar">
                                    </div>
    
                                    <div class="mx-5">
                                        <h4 class="text-2xl font-semibold text-gray-700">8,282</h4>
                                        <div class="text-gray-500">Quản lý Users</div>
                                    </div>
                                </div></a>
                            </div>
    
                            <div class="transition ease-in-out delay-350 hover:-translate-y-1 hover:scale-110 hover: duration-300 w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                                 <a href="/admin/news"><div class="transition ease-in-out hover:bg-slate-100 flex items-center px-5 py-10 shadow-sm rounded-md bg-white">
                                    <div class="p-3 rounded-full bg-pink-300 bg-opacity-75">
                                          <img class="w-16"src=".././../../images/newspaper.png"alt="Your avatar">
                                    </div>
    
                                    <div class="mx-5">
                                        <h4 class="text-2xl font-semibold text-gray-700">200,521</h4>
                                        <div class="text-gray-500">Quản lý tin tức</div>
                                    </div>
                                </div>
                            </div></a>
                            
                            <div class="transition ease-in-out delay-350 hover:-translate-y-1 hover:scale-110 hover: duration-300 w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                                 <a href="/"><div class="transition ease-in-out hover:bg-slate-100 flex items-center px-5 py-10 shadow-sm rounded-md bg-white">
                                    <div class="p-3 rounded-full bg-orange-600 bg-opacity-75">
                                          <img class="w-16"src=".././../../images/shopping-cart.png"alt="Your avatar">
                                    </div>
    
                                    <div class="mx-5">
                                        <h4 class="text-2xl font-semibold text-gray-700">200,521</h4>
                                        <div class="text-gray-500">Quản lý giỏ hàng</div>
                                    </div>
                                </div></a>
                            </div>

                             <div class="transition ease-in-out delay-350 hover:-translate-y-1 hover:scale-110 hover: duration-300 w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                                 <a href="/"><div class="transition ease-in-out hover:bg-slate-100 mt-16 flex items-center px-5 py-10 shadow-sm rounded-md bg-white">
                                    <div class="p-3 rounded-full bg-blue-400 bg-opacity-75">
                                          <img class="w-16"src=".././../../images/categories.png"alt="Your avatar">
                                    </div>
    
                                    <div class="mx-5">
                                        <h4 class="text-2xl font-semibold text-gray-700">200,521</h4>
                                        <div class="text-gray-500">Quản lý danh mục</div>
                                    </div>
                                </div></a>
                            </div>
    
                            <div class="transition ease-in-out delay-350 hover:-translate-y-1 hover:scale-110 hover: duration-300 w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                                 <a href="/"><div class="transition ease-in-out hover:bg-slate-100 mt-16 flex items-center px-5 py-10 shadow-sm rounded-md bg-white">
                                    <div class="p-3 rounded-full bg-slate-800 bg-opacity-75">
                                        <img class="w-16"src=".././../../images/superhero.png"alt="Your avatar">
                                    </div>
    
                                    <div class="mx-5">
                                        <h4 class="text-2xl font-semibold text-gray-700">215,542</h4>
                                        <div class="text-gray-500">Quản lý sản phẩm</div>
                                    </div>
                                </div></a>
                            </div>
                            
                          
                            <div class="transition ease-in-out delay-350 hover:-translate-y-1 hover:scale-110 hover: duration-300 w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                                 <a href="/"><div class="transition ease-in-out hover:bg-slate-100 mt-16 flex items-center px-5 py-10 shadow-sm rounded-md bg-white">
                                    <div class="p-3 rounded-full bg-red-500 bg-opacity-75">
                                        <img class="w-16"src=".././../../images/video.png"alt="Your avatar">
                                    </div>
    
                                    <div class="mx-5">
                                        <h4 class="text-2xl font-semibold text-gray-700">215,542</h4>
                                        <div class="text-gray-500">Quản lý tâm điểm tướng</div>
                                    </div>
                                </div> </a>
                            </div>
                            
                        </div>
                    </div>
    
                    
    
                   
                </div>
            </main>
        </div>
    </div>
</div>
            `;
    }
}
export default AdminDashboard;