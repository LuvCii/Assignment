import news from "../data";
import Header from "../components/header";
import Footer from "../components/footer";

const DetailPage = {
    render(id) {
        const result = news.find((post) => post.id === id);
        return /* html */ `
            <div class="max-w-7xl mx-auto">
                <header>
                    ${Header.render()}
                </header>
                <main>
                    <h1>${result.title}</h1>
                    <img src="${result.img}" />
                    <p>${result.desc}</p>
                </main>
                <footer>
                    ${Footer.render()}
                </footer>
            </div>
        `;
    },
};
export default DetailPage;