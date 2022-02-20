import { signup } from "../api/user";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import $ from 'jquery';
import validate from 'jquery-validation';
const signUp = {
    render() {
        return /*html*/ `
              <style>
                label.error{
                  color: red;
                }
            </style>
          <div class="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <div class="w-full rounded-xl shadow-2xl sm:max-w-md p-5 mx-auto">
              <h2 class="mb-12 text-center text-5xl font-extrabold">Welcome.</h2>
              <form id="formSignup" method="POST">
              <div class="mb-4">
                  <label class="block mb-1" for="email">User Name</label>
                  <input id="user" type="text" name="user" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
                </div>
                <div class="mb-4">
                  <label class="block mb-1" for="email">Email</label>
                  <input id="email" type="text" name="email" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
                </div>
                <div class="mb-4">
                  <label class="block mb-1" for="password">Password</label>
                  <input id="password" type="password" name="password" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
                </div>
              
                <div class="mt-6 flex items-center justify-between">
                  <div class="flex items-center">
                    <input id="remember_me" type="checkbox" class="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
                    <label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900"> Tôi đồng ý với điều khoản </label>
                  </div>
                </div>
                <div class="mt-6">
                  <button type="submit" class="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
         `
    },
    afterRender() {
        const formSignup = document.querySelector("#formSignup");
        console.log(formSignup);
        formSignup.addEventListener("submit", (e) => {
            e.preventDefault();
            console.log('a')
            signup({
                username: document.querySelector("#user").value,
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            });

            // thông báo bạn đăng nhập thành công....
        });


        // Validate form SignIn
        $().ready(function() {
            $("#formSignup").validate({
                onfocusout: false,
                onkeyup: false,
                onclick: false,
                rules: {
                    "user": {
                        required: true,
                        minlength: 6
                    },
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
                    "user": {
                        required: "Bắt buộc nhập username",
                        maxlength: "Hãy nhập ít nhất 6 ký tự"
                    },
                    "email": {
                        required: "Bắt buộc nhập email",
                        maxlength: "Hãy nhập ít nhất 10 ký tự"
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
export default signUp;