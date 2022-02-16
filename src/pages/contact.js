import Header from "../components/header";
import Footer from "../components/footer";
const Contact = {
    render() {
        return /* html */ `
        <div class="max-w-full mx-auto">
        <header>
            ${Header.render()}
        </header>
        <main>
            <div class="">
               <p>Liên hệ</p>
            </div>
        </main>
        <footer>
            ${Footer.render()}
        </footer>
         </div>
        `;
    },
};
export default Contact;