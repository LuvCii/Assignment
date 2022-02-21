import {get } from "../../api/post";
import Header from "../../components/header";
import Footer from "../../components/footer";

const DetailNews = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
        <header>
          ${Header.render() } 
        </header>
        <main>
            <div class="min-h-screen min-w-screen bg-gray-100 flex items-center justify-center">
  <div>
    <div class="flex flex-col w-[1200px] bg-white px-8 py-6 rounded-xl space-y-5 items-center">
      <h3 class="font-serif font-bold text-gray-900 text-xl">${data.title}</h3>
      <img class="w-full rounded-md" src="${data.img}" alt="motivation" />
      <p class="text-center leading-relaxed">${data.desc}</p>
    </div>
  </div>
</div>
        </main>
        <footer>
             ${Footer.render() } 
        </footer>
        `
    }
};
export default DetailNews;