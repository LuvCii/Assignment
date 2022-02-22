import Banner from "../components/banner";
import Header from "../components/header";
import Footer from "../components/footer";
import { getAll } from "../api/product";
import News from "./news/index";
// import { getAll } from "../api/category";

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
            <div class="products mb-10 mt-16 font-bold text-4xl">
                <h2 class="text-center">Sản phẩm</h2>
                 <div class="mt-5 bg-gray-100 flex flex-wrap justify-center items-center">
                    ${data.map((product) => /*html */ `
                            <a href="/products/${product.id}">
                                <div class="mt-10 h-[430px] mx-5 w-[390px] p-6 bg-white hover:bg-slate-300 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
                                    <img class=" w-[340px] h-60 object-cover rounded-t-md" src="${product.img}" alt="heroes" />
                                    <div class="mt-3">
                                        <h1 class="text-2xl font-bold text-gray-700">${product.name}</h1>
                                        <p class="text-sm mt-2 text-gray-700">${product.type}</p>
                                        <div class="mt-4 mb-2 flex justify-between  pr-2">
                                            <button class="block text-xl font-semibold text-gray-700 cursor-auto">${product.price} VNĐ</button>
                                            <button class="transition ease-in-out delay-350 hover:-translate-y-1 hover:scale-110 hover: duration-300 text-lg block font-semibold py-2 px-9 text-green-100 hover:text-white bg-blue-600 hover:bg-blue-800 rounded-lg shadow hover:shadow-md transition duration-300">Chi tiết</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            `).join("")}
                </div>
                <div class="text-center mt-12">
                    <a href="/products" class="border-2 bg-blue-600 hover:bg-blue-900 transition-all transform duration-500 text-white rounded-md px-7 py-4 text-lg">Xem thêm</a>
                </div>
            </div>
            <div class="my-24">${await News.render()}</div>
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