import Header from "../components/header";
import Footer from "../components/footer";
const Heroes = {
    render() {
        return /* html */ `
        <div class="max-w-full mx-auto">
        <header>
            ${Header.render()}
        </header>
        <main>
            <div class="">
               <p>Tâm điểm tướng</p>
            </div>
        </main>
        <footer>
            ${Footer.render()}
        </footer>
    </div>
        `;
    },
};
export default Heroes;