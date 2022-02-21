import Header from "../../components/header";
import Footer from "../../components/footer";
import instance from "../../api/config";
import { getAll } from "../../api/product";
const Search = {
        async render(key) {
            const { data } = await instance.get(`/products?q=${key}`);
            return /* html */ `
        <div class="max-w-full mx-auto">
        <header id="header">
            ${Header.render()}
        </header>
        <main class="my-6">
            <div class="flex">
                <div class="ml-8 mr-4 rounded-3xl flex w-2/5 md:w-1/4 h-[1200px] bg-blue-600">
                    <div class="mx-auto py-10">
                    <img class="w-28 mx-auto" src="../../../images/new.png" alt="new">
                    <nav class="px-4 flex justify-between py-6 mt-[20px]">
                     <form class="search">
                    <div class="flex items-center bg-gray-100 px-2 py-2 rounded-md space-x-3 w-64">
                        <input type="text" name="keyword" placeholder="search" class="search-input bg-gray-100 outline-none w-full" />
                        <button><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg></button>
                    </div>
                     </form>
                    </nav>
                    <ul class="">
                        <li class="ml-5">
                        <a href="" class="flex space-x-2 mt-10 cursor-pointer  hover:text-white duration-150">
                            <img class="w-12 mr-2" src="../../../images/fist.png" alt="fist">
                        <span class="mt-2 text-xl font-semibold">Đấu sĩ</span>
                        </a>
                        </li>
                    <li class="ml-5">
                    <a href="" class="flex space-x-2 mt-10 cursor-pointer  hover:text-white duration-150">
                            <img class="w-10 mr-3" src="../../../images/sword.png" alt="sword">
                        <span class="mt-2 text-xl font-semibold">Sát thủ</span>
                        </a>
                        </li>
                        <li class="ml-5">
                        <a href="" class="flex space-x-2 mt-10 cursor-pointer  hover:text-white duration-150">
                            <img class="w-10  mr-3" src="../../../images/shield.png" alt="shield">
                        <span class="mt-2 text-xl font-semibold">Đỡ đòn</span>
                        </a>
                        </li>
                    <li class="ml-5"> 
                    <a href="" class="flex space-x-2 mt-10 cursor-pointer hover:text-white duration-150">
                            <img class="w-10  mr-3" src="../../../images/magic.png" alt="magic">
                        <span class="mt-2 text-xl font-semibold">Pháp sư</span>
                        </a>
                        </li>
                    <li class="ml-5">
                    <a href="" class="flex space-x-2 mt-10 cursor-pointer hover:text-white duration-150">
                            <img class="w-10 mr-3" src="../../../images/support.png" alt="support">
                        <span class="mt-2 text-xl font-semibold">Trợ thủ</span>
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>

                <main class=" min-h-screen w-full">
                <h1 class="text-2xl text-center uppercase font-semibold">Sản phẩm: ${key}</h1>
                    <div class="mt-5 bg-gray-100 flex flex-wrap  items-center">
                         ${data.map((product) => /*html */ `
                            <a href="/products/${product.id}">
                                <div class="mt-4 mx-3 w-[340px] p-6 bg-white hover:bg-slate-400 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
                                    <img class=" w-72 h-44 object-cover rounded-t-md" src="${product.img}" alt="heroes" />
                                    <div class="mt-3">
                                        <h1 class="text-2xl font-bold text-gray-700">${product.name}</h1>
                                        <p class="text-sm mt-2 text-gray-700">${product.type}</p>
                                        <div class="mt-4 mb-2 flex justify-between  pr-2">
                                            <button class="block text-xl font-semibold text-gray-700 cursor-auto">${product.price} VNĐ</button>
                                            <button class="transition ease-in-out delay-350 hover:-translate-y-1 hover:scale-110 hover: duration-300 text-lg block font-semibold py-2 px-9 text-green-100 hover:text-white bg-blue-600 hover:bg-blue-800 rounded-lg shadow hover:shadow-md transition duration-300">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            

                             `).join("")}
                    </div>

                </main>
                </div>

                
        </main>
        <footer>
            ${Footer.render()}
        </footer>
    </div>
        `;
    },
    afterRender() {
        Search.afterRender();
        const searchBtn = document.querySelector(".search-input");
        const search = document.querySelector(".search");
        search.addEventListener("submit",(e)=>{
            e.preventDefault();
            document.location.href = `/#/search/${searchBtn.value}`;
        });
        
    },
}
export default Search;