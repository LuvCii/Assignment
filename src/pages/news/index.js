import Header from "../../components/header";
import Footer from "../../components/footer";
import { getAll } from "../../api/post";
const News = {
        async render() {
            const { data } = await getAll();
            return /* html */ `
             <header>
                ${Header.render() } 
            </header>
            <main>
            <h1 class="text-center my-6 text-4xl font-bold">Cốt truyện</h1>
                <div aria-label="group of cards" tabindex="0" class="focus:outline-none py-8 w-full">
            <div class="lg:flex items-center justify-center w-full">
                 ${data.map((post) => /*html */ `
                    <div tabindex="0" aria-label="card 1" class="mx-4  hover:bg-slate-300 hover:shadow-2xl hover:scale-105 transition-all transform duration-500 focus:outline-none w-96 mb-7 bg-white p-6 shadow-lg rounded">
                        <div class="flex items-center border-b border-gray-200 pb-6">
                            <img src="${post.img}" alt="image" class="w-12 h-12  object-cover  rounded-full" />
                            <div class="flex items-start justify-between w-full">
                                <div class="pl-3 w-full">
                                    <p tabindex="0" class="focus:outline-none text-xl font-medium leading-5 text-gray-800">${post.title}</p>
                                    
                                </div>
                                <div role="img" aria-label="bookmark">
                                    <svg  class="focus:outline-none" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="px-2">
                            <p tabindex="0" class="focus:outline-none text-sm leading-5 py-4 text-gray-600">${post.descMini}</p>
                            <a href="/news/${post.id}" class="w-28">
                                <div tabindex="0" class="w-28 focus:outline-none">
                                    <div class=" hover:bg-indigo-700 hover:text-white transition-all transform duration-500 hover:translate-x-4 py-3 px-4 w-28 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">Xem thêm >> </div>
                                </div>
                            </a>
                        </div>
                    </div>
                  `).join("")}





            </div>


            
               
          
            </main>
            <footer>
                ${Footer.render()}
            </footer>
                    
                `;
    },
};
// const News = {
//         render() {
//             const api = "http://localhost:3001/posts";
//             return fetch(api)
//                 .then(response => response.json())
//                 .then((data) => /* html */
//                     `
//                     <h2 class="font-semibold text-blue-900 my-4 uppercase text-2xl">Tin tức học tập</h2>
//                     <div class="grid grid-cols-3 gap-8">
//                         ${data.map((post) => `
//                         <div class="border p-3">
//                             <a href="/news/${post.id}"><img src="${post.img}" alt="" /></a>
//                             <h3 class="my-3"><a href="/news/${post.id}" class="font-semibold text-orange-500 text-lg">${post.title}</a></h3>
//                             <p>${post.desc}</p>
//                         </div>
//                         `).join("")}

//                     </div>

//                     ` );
//     },
// };
export default News;