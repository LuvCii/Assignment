import Banner from "../components/banner";
import Header from "../components/header";
import Footer from "../components/footer";
import { getAll } from "../api/product";

const HomePage = {
        async render() {
            const { data } = await getAll();
            return /* html */ `
        <div class="max-w-full mx-auto">
        <header id="header">
            ${Header.render()}
        </header>
        <main>
            <div class="banner">
                ${Banner.render()}
            </div>
            <div class="products mb-10 mt-14 font-bold text-4xl">
                <h2>Sản phẩm</h2>
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
            </div>
        </main>
        <footer>
            ${Footer.render()}
        </footer>
    </div>
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default HomePage;