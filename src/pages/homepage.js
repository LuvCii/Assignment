import Banner from "../components/banner";
import News from "../components/news";
import Header from "../components/header";
import Footer from "../components/footer";

const HomePage = {
    async render() {
        return /* html */ `
        <div class="max-w-full mx-auto">
        <header id="header">
            ${Header.render()}
        </header>
        <main>
            <div class="banner">
                ${Banner.render()}
            </div>
            <div class="news">
                ${await News.render()}
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