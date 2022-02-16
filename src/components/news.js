// import news from "../data";
// import axios from "axios";
import { getAll } from "../api/post";
const News = {
        async render() {
            const { data } = await getAll();
            return /* html */ `
            <div class="relative mt-10">
                <h2 class="font-semibold text-blue-900 my-4 uppercase text-2xl">Tin tức học tập</h2>
                <div class="grid grid-cols-3 gap-8">
                    ${data.map((post) => /*html */ `
                    <div class="border p-3">
                        <a href="/news/${post.id}"><img src="${post.img}" alt="" /></a>
                        <h3 class="my-3"><a href="/news/${post.id}" class="font-semibold text-orange-500 text-lg">${post.title}</a></h3>
                        <p>${post.desc}</p>
                    </div>
                    `).join("")}
                    
                </div>
            </div>
                    
                ` ;
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