import Navigo from "navigo";
import DetailPage from "./pages/detail";
import HomePage from "./pages/homepage";
import Heroes from "./pages/heroes";
import Products from "./pages/products";
import Search from "./pages/products/searchPage";
import News from "./pages/news";
import List from "./pages/listpro";
import Contact from "./pages/contact";
import signIn from "./pages/signin";
import signUp from "./pages/signup";
import CartPage from "./pages/cart";
import AdminProducts from "./pages/admin/products";
import AdminProductsAdd from "./pages/admin/products/add";
import AdminProductsEdit from "./pages/admin/products/edit";
import AdminNews from "./pages/admin/news";
import AdminCate from "./pages/admin/categories";
import AdminNewsAdd from "./pages/admin/news/add";
import AdminCateAdd from "./pages/admin/categories/add";
import AdminCateEdit from "./pages/admin/categories/edit";
import AdminNewsEdit from "./pages/admin/news/edit";
import AdminDashboard from "./pages/admin";
import AdminUser from "./pages/admin/users";
import Profile from "./pages/profile";
import DetailProduct from "./pages/products/detail";
import DetailNews from "./pages/news/detail";
import Category from "./pages/categoryPage";


const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async(component, id) => {
    document.querySelector("#app").innerHTML = await component.render(id);
    if (component.afterRender) await component.afterRender(id);
};



router.on('/admin/*/', () => {}, {
    before(done, match) {
        if (localStorage.getItem('user')) {
            const userId = JSON.parse(localStorage.getItem('user')).email;
            if (userId === "dungtmph16743@fpt.edu.vn") {
                // render dựa trên router
                done();
            } else {
                document.location.href = "/"
            }
        } else {
            document.location.href = "/"
        }

    }
});



router.on({
    "/": () => print(HomePage),
    "/profile": () => print(Profile),
    "/heroes": () => print(Heroes),
    "/listpro": () => print(List),
    "/news": () => print(News),
    "/products": () => print(Products),
    "/news/:id": ({ data }) => print(DetailNews, data.id),
    "/products/:id": ({ data }) => print(Products, data.id),
    "/category/:id": ({ data }) => print(Category, data.id),
    "/Search": () => print(Search),
    "/search/:key": ({ data }) => {
        const { key } = data;
        print(Search, key);
    },
    "/products/:id": ({ data }) => print(DetailProduct, data.id),
    "/cart": () => print(CartPage),
    "/contact": () => print(Contact),
    "/signin": () => print(signIn),
    "/signup": () => print(signUp),
    "/admin": () => print(AdminDashboard),
    "/admin/products/add": () => print(AdminProductsAdd),
    "/admin/products": () => print(AdminProducts),
    "/admin/products/:id/edit": ({ data }) => print(AdminProductsEdit, data.id),
    // "/admin/dashboard": () => console.log("admin product"),
    "/admin/news": () => print(AdminNews),
    "/admin/news/add": () => print(AdminNewsAdd),
    "/admin/news/:id/edit": ({ data }) => print(AdminNewsEdit, data.id),
    "/admin/users": () => print(AdminUser),
    "/admin/categories": () => print(AdminCate),
    "/admin/categories/add": () => print(AdminCateAdd),
    "/admin/categories/:id/edit": ({ data }) => print(AdminCateEdit, data.id),



});

router.resolve();