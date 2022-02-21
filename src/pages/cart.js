import { reRender } from "../utils";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Header from "../components/header";
import Footer from "../components/footer";

const CartPage = {
        render() {
            let cart = [];
            if (localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'));
            }
            return /*html */ `
            <div class="flex items-center justify-center py-8">
                </div>
                <div class="w-full h-full bg-blue-500  bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
                <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
                <div class="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                    <div class="flex items-center lg:flex-row flex-col justify-center my-6 " id="cart">
                    <div class=" lg:w-1/2 rounded-xl shadow-2xl mr-6 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-slate-100 overflow-y-hidden overflow-x-hidden lg:h-screen h-auto" id="scroll">
                        <div class="mt-[-45px] mb-4 flex items-center text-gray-500 hover:text-gray-600 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="15 6 9 12 15 18" />
                        </svg>
                        <a href="/" class=""><img src="../../images/undo.png" alt="product" class="h-10  hover:scale-125 transition-all transform duration-300" /> </a>
                        </div>
                        <marquee width="100%" behavior="scroll" direction="right">   
                           <img src="../../images/truck.png" alt="product" class="h-20" />
                        </marquee>

                         ${cart.map(item => /*html*/ `
                        <div class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-400">

                        <div class="md:w-4/12 2xl:w-1/4 w-full">
                            <img src="${item.img}" alt="product" class="h-full object-center rounded-xl object-cover" />
                        </div>
                        <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                            <p class="text-xs leading-3 text-gray-800 md:pt-0 pt-4">${item.type}</p>
                            <div class="flex items-center justify-between w-full pt-1">
                            <p class="text-base font-black leading-none text-gray-800">${item.name}</p>
                            <div>
                                <button data-id="${item.id}" class="btn btn-decrease mr-14"><img src="../../images/subtract.png" alt="product" class="w-10" /></button>
                                <input type="number"  value="${item.quantity}" min="1" class="py-2 w-10 border-gray-200 absolute right-[40%] focus:outline-none dark:bg-gray-400 dark:text-white" />
                                <button data-id="${item.id}" class="btn btn-increase"><img src="../../images/plus.png" alt="product" class="w-10" /></button>
                            </div>
                            </div>
                            <p class="text-xs leading-3 text-gray-600 pt-2">${item.desc}</p>
                            <div class="flex items-center justify-between pt-5">
                            <p class="text-base font-black leading-none text-gray-800">${item.price}</p>
                            <button data-id="${item.id}" class="btn btn-remove mr-6"><img src="../../images/deleteCart.png" alt="product" class="h-14" /></button>
                            </div>
                        </div>
                        </div>
                     `).join("")}

                        
                        
                        
                    </div>
                    <div class="lg:w-96 md:w-8/12 w-full rounded-xl bg-slate-100 h-full">
                        <div class="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
                        <div>
                            <p class="lg:text-4xl text-3xl font-black leading-9 text-gray-800">Summary</p>
                            <div class="flex items-center justify-between pt-16">
                            <p class="text-base leading-none text-gray-800 ">Subtotal</p>
                            <p class="text-base leading-none text-gray-800 ">18,000</p>
                            </div>
                            <div class="flex items-center justify-between pt-5">
                            <p class="text-base leading-none text-gray-800 ">Shipping</p>
                            <p class="text-base leading-none text-gray-800">300</p>
                            </div>
                            <div class="flex items-center justify-between pt-5">
                            <p class="text-base leading-none text-gray-800 ">Tax</p>
                            <p class="text-base leading-none text-gray-800 "></p>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                            <p class="text-2xl leading-normal text-gray-800 dark:text-black">Total</p>
                            <p class="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-black">26,240</p>
                            </div>
                            <button onclick="checkoutHandler1(true)" class="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700">Checkout</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                </div>

        
        `
    },

    afterRender() {
        Header.afterRender();
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                if (btn.classList.contains("btn-increase")) {
                    increaseQuantity(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Tăng số lượng thành công");
                    });
                } else if (btn.classList.contains("btn-decrease")) {
                    decreaseQuantity(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Giảm số lượng thành công");
                    });
                } else if (btn.classList.contains("btn-remove")) {
                   removeItemInCart(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Xóa sản phẩm thành công");
                    });
                }
            });
        });
    }

}
export default CartPage;