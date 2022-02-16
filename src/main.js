import Navigo from "navigo";
import DetailPage from "./pages/detail";
import HomePage from "./pages/homepage";
import Heroes from "./pages/heroes";
import Products from "./pages/products";
import Contact from "./pages/contact";
import signIn from "./pages/signin";
import signUp from "./pages/signup";
import AdminNews from "./pages/admin/news";
import AdminNewsAdd from "./pages/admin/news/add";
import AdminNewsEdit from "./pages/admin/news/edit";
import AdminDashboard from "./pages/admin";
import AdminUser from "./pages/admin/users";
import Profile from "./pages/profile";
import DetailProduct from "./pages/products/detail";


const router = new Navigo("/", { linksSelector: "a" });

const print = async(content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) {
        content.afterRender(id)
    }
};



router.on('/admin/*/', () => {}, {
    before(done, match) {
        if (localStorage.getItem('user')) {
            const userId = JSON.parse(localStorage.getItem('user')).email;
            if (userId === "dung@gmail.com") {
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
    "/tuyensinh": () => print(TuyenSinh),
    "/heroes": () => print(Heroes),
    "/product": () => print(Products),
    "/products/:id": ({ data }) => print(DetailProduct, data.id),
    "/contact": () => print(Contact),
    "/signin": () => print(signIn),
    "/signup": () => print(signUp),
    "/products": () => print(Products),
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailPage.render(id));
    },
    "/admin/news/:id/edit": ({ data }) => {
        // console.log(data);
        const { id } = data;
        print(AdminNewsEdit.render(id));
    },
    "/admin": () => print(AdminDashboard),
    // "/admin/dashboard": () => console.log("admin product"),
    "/admin/news": () => print(AdminNews),
    "/admin/news/add": () => print(AdminNewsAdd),
    "/admin/users": () => print(AdminUser)



});

router.resolve();