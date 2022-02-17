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
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">${data.title}</h1>
            <img alt="ecommerce" class="" src="${data.img}">
        </main>
        <footer>
             ${Footer.render() } 
        </footer>
        `
    }
};
export default DetailNews;