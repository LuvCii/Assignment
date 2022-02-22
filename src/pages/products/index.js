import Header from "../../components/header";
import Footer from "../../components/footer";
// import { getAll } from "../../api/product";
import List from "../listpro";
import { getCategory } from "../../api/category";
const Products = {
        async render(id) {
            const dataCate = (await getCategory(id)).data;
            console.log(dataCate)
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
                     <form class="search" method="">
                    <div class="flex items-center bg-gray-100 px-2 py-2 rounded-md space-x-3 w-64">
                        <input type="text" placeholder="search" class="search-input bg-gray-100 outline-none w-full" />
                        <button><svg xmlns="http://www.w3.org/2000/svg" class="search-input h-5 w-5 cursor-pointer text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg></button>
                   
                    </div>
                     </form>
                    </nav>
                     ${dataCate.map((item) => /* html */`
                    <ul class="">
                        <li class="ml-5">
                        <a href="/#/category/${item.id}" class="flex space-x-2 mt-10 cursor-pointer  hover:text-white duration-150">
                            <img class="w-12 mr-2" src="${item.img}" alt="fist">
                        <span class="mt-2 text-xl font-semibold">${item.cate}</span>
                        </a>
                        </li>
                    
                    </ul>
                      `).join("")}
                    </div>
                </div>

                <main class=" min-h-screen w-full">
                      ${await List.render()}
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
        // Header.afterRender();
        // const searchBtn = document.querySelector(".search-input");
        // const search = document.querySelector(".search");
        // search.addEventListener("submit", (e) => {
        //     e.preventDefault();
        //     document.location.href = `/#/search/${searchBtn.value}`;
        // });

    },
};

export default Products;