import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { signin } from "../api/user";
import $ from 'jquery';
import validate from 'jquery-validation';
const signIn = {
    render() {
        return /* html */ `
        <style>
		      label.error{
			      color: red;
		      }
	    </style>
            <div class="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <div class="w-full rounded-xl shadow-2xl sm:max-w-md p-5 mx-auto">
              
              <img class="mb-2 text-center w-48 " src="../../images/welcome.png" alt="welcome">
              <form id="formSignin" method="POST">
                <div class="mb-4">
                  <label class="block mb-1" for="email">Email-Address</label>
                  <input required id="email" type="text" name="email" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
                </div>
                <div class="mb-4">
                  <label class="block mb-1" for="password">Password</label>
                  <input required id="password" type="password" name="password" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
                </div>
                <div class="mt-6 flex items-center justify-between">
                  <div class="flex items-center">
                    <input id="remember_me" type="checkbox" class="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
                    <label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900"> Remember me </label>
                  </div>
                  <a href="#" class="text-sm"> Forgot your password? </a>
                </div>
                <div class="mt-6">
                  <button type="submit" class="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Sign In</button>
                </div>
                <div class="mt-6 text-center">
                  <a href="/signup" class="underline">Sign up for an account</a>
                </div>
              </form>
            </div>
          </div>`
    },
    afterRender() {
        const formSignin = document.querySelector("#formSignin");
        formSignin.addEventListener("submit", async(e) => {
            e.preventDefault();
            try {
                // call API login
                const { data } = await signin({
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                // lưu dữ liệu vào localStorage
                localStorage.setItem("user", JSON.stringify(data.user));
                toastr.success("Bạn đã đăng nhập thành công, chờ 3s để chuyển trang");
                setTimeout(() => {
                    // kiểm tra quyền dựa trên ID
                    if (data.user.id === 1) {
                        document.location.href = "/#/admin/";
                    } else {
                        document.location.href = "/#/";
                    }
                }, 3000);
            } catch (error) {
                toastr.error(error.response.data);
                // console.log(error.response.data);
            }
        });



        // Validate form SignIn
        $().ready(function() {
            $("#formSignin").validate({
                onfocusout: false,
                onkeyup: false,
                onclick: false,
                rules: {
                    "email": {
                        required: true,
                        minlength: 10
                    },
                    "password": {
                        required: true,
                        minlength: 8
                    },

                },
                messages: {
                    "email": {
                        required: "Bắt buộc nhập email",
                        maxlength: "Hãy nhập tối đa 10 ký tự"
                    },
                    "password": {
                        required: "Bắt buộc nhập password",
                        minlength: "Hãy nhập ít nhất 8 ký tự"
                    }
                }
            });
        });






    },

};
export default signIn;