import NavAdmin from "../../../components/navadmin";
import AdminNews from ".";
import axios from "axios";
import { reRender } from "../../../utils";
import {get, update } from "../../../api/post";
import $ from 'jquery';
import validate from 'jquery-validation';
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const AdminNewsEdit = {
    async render(id) {
        const { data } = await get(id);
        return /*html*/ `
         <style>
		      label.error{
			      color: red;
		      }
	    </style>
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
            
            </header>
                        <a href="/admin/news" class="absolute right-[11%] top-[15%] px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Quay lại
                        </a>
            <main>
              <form class="" id="form-edit-post">
                <div class="bg-indigo-50 min-h-screen md:px-20 pt-6">
                  <div class=" bg-white rounded-md px-6 py-10 max-w-[1000px] mx-auto">
                    <h1 class="text-center text-2xl font-bold text-gray-500 mb-10">EDIT POST</h1>
                    <div class="space-y-4">
                      <div>
                        <label for="title" class="text-lx font-serif">Title:</label>
                        <input value="${data.title}" type="text" placeholder="title" id="title" class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
                      </div>
                      <div>
                        <label for="title" class="text-lx font-serif">Description mini:</label>
                        <input value="${data.descMini}" type="text" placeholder="title" id="descMini" class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
                      </div>
                      <div>
                        <label for="description" class="block mb-2 text-lg font-serif">Description:</label>
                         <textarea id="desc" name="about" rows="10"
                                                class="shadow-sm bg-indigo-50 outline-none text-xl font-serif mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3">
                                            ${data.desc}</textarea>
                      </div>

                       <div>
                       <label for="description" class="block mb-2 text-lg font-serif">Image</label>
                        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                          <div class="space-y-1 text-center">
                            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div class="flex text-sm text-gray-600">
                              <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" class="sr-only">
                              </label>
                              <p class="pl-1">or drag and drop</p>
                            </div>
                            <p class="text-xs text-gray-500">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                     <img src="${data.img}" class="mx-auto mt-3 w-52 mb-3 object-cover rounded-md" id="img-preview"/>
                      <button class="mt-4 px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">EDIT POST</button>
                    </div>
                  </div>
                </div>
              </form>
            </main>
        </div>
        `
    },

    afterRender(id) {
        const formEdit = document.querySelector("#form-edit-post");
        const imgPreview = document.querySelector("#img-preview");
        const imgPost = document.querySelector("#file-upload");
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/di7fl16mp/image/upload";
        const CLOUDINARY_PRESET = "ml_default";
        let imgLink = "";

        imgPost.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });

        // Submit form
        formEdit.addEventListener("submit", async(e) => {
            e.preventDefault();
            // lấy giá trị input file
            const file = document.querySelector("#file-upload").files[0];
            if (file) {
                // tạo object và gắn giá trị vào các thuộc tính của formData
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_PRESET);

                // call API cloudinary để đẩy ảnh lên
                const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                    headers: {
                        "Content-Type": "application/form-data",
                    },
                });
                imgLink = data.url;
            }

            // call api thêm bài viết
            update({
                id,
                title: document.querySelector("#title").value,
                desMini: document.querySelector("#descMini").value,
                //  Nếu imgLink có giá trị thì sẽ lấy giá trị của imgLink ngược lại thì rỗng
                img: imgLink || imgPreview.src,
                desc: document.querySelector("#desc").value,
            });
            setTimeout(() => {
                if (update) {
                    toastr.success("Sửa bài viết thành công");
                    window.location.href = "/#/admin/news";
                } else {
                    toastr.success("Sửa sản phẩm không thành công");
                }
            }, 1000);
            reRender(AdminNews, "#app");
        });

        // Validate form SignIn
        $().ready(function() {
            $("#form-edit-post").validate({
                onfocusout: false,
                onkeyup: false,
                onclick: false,
                rules: {
                    "title": {
                        required: true,
                        minlength: 10
                    },
                    "descMini": {
                        required: true,
                        minlength: 15
                    },
                    "desc": {
                        required: true,
                        minlength: 15
                    }

                },
                messages: {
                    "title": {
                        required: "Bắt buộc nhập email",
                        maxlength: "Hãy nhập tối đa 10 ký tự"
                    },
                    "descMini": {
                        required: "Bắt buộc nhập password",
                        minlength: "Hãy nhập ít nhất 8 ký tự"
                    },
                    "desc": {
                        required: "Bắt buộc nhập password",
                        minlength: "Hãy nhập ít nhất 8 ký tự"
                    }
                }
            });
        });
    },
}
export default AdminNewsEdit;