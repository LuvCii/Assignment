import { getAll } from "../api/product";
const List = {
        async render() {
            const { data } = await getAll();
            return /* html */ `
        <div class="max-w-full mx-auto">
        <main class="my-6">
            <div class="flex">
                
                </div>

                <main class=" min-h-screen w-full">
                <h1 class="text-2xl text-center uppercase font-semibold">Tất cả sản phẩm</h1>
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
    </div>
        `;
    },
     afterRender() {
        const searchBtn = document.querySelector(".search-input");
        const search = document.querySelector(".search");
        search.addEventListener("submit",(e)=>{
            e.preventDefault();
            document.location.href = `/#/search/${searchBtn.value}`;
        });
        
    },
};

export default List;