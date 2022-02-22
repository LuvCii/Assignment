import NavAdmin from "../../../components/navadmin";
import axios from "axios";
import AdminProducts from ".";
import { add } from "../../../api/product";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import $ from 'jquery';
import validate from 'jquery-validation';
// import { reRender } from "../../../utils";

const AdminProductsAdd = {
    render() {
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
                        <a href="/admin/products" class="absolute right-[11%] top-[10%] px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Quay lại
                        </a>
            <main>
              <form class="" id="form-add-pro">
                <div class="bg-indigo-50 min-h-screen md:px-20 pt-6">
                  <div class=" bg-white rounded-md px-6 py-10 max-w-[1000px] mx-auto">
                    <h1 class="text-center text-2xl font-bold text-gray-500 mb-10">ADD PRODUCT</h1>
                    <div class="space-y-4">
                      <div>
                        <label for="title" class="text-lx font-serif">Name:</label>
                        <input id="name" type="text" name="name" placeholder="Name" class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
                      </div>
                      <div>
                        <label for="title" class="text-lx font-serif">Type:</label>
                        <input id="type" type="text" placeholder="Type" name="type" class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
                      </div>
                       <div>
                        <label for="title" class="text-lx font-serif">Price:</label>
                        <input id="price" type="text" placeholder="Price" name="price" class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
                      </div>
                      <div>
                        <label for="description" class="block mb-2 text-lg font-serif">Description:</label>
                        <textarea id="description" name="desc" cols="30" rows="10" placeholder="Mô tả.." class="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"></textarea>
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

                    <img src="" class="mx-auto mt-3 w-52 mb-3 object-cover rounded-md" id="img-preview"/>

                      <button class="mt-4 px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">ADD PRODUCT</button>
                    </div>
                  </div>
                </div>
              </form>
            </main>
        </div>






        `
    },
    afterRender() {
        const formAdd = document.querySelector("#form-add-pro");
        const imgPreview = document.querySelector("#img-preview");
        const imgPro = document.querySelector("#file-upload");
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/di7fl16mp/image/upload";
        const CLOUDINARY_PRESET = "ml_default";

        // Preview image
        imgPro.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });

        formAdd.addEventListener("submit", async function(e) {
            e.preventDefault();
            const file = imgPro.files[0];

            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            // call api cloudinary
            const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                    headers: {
                        "Content-Type": "application/form-data"
                    }
                })
                // call api thêm bài viết
            add({
                name: document.querySelector("#name").value,
                type: document.querySelector("#type").value,
                price: document.querySelector("#price").value,
                img: data.url,
                desc: document.querySelector("#description").value,
            });
            setTimeout(() => {
                if (add) {
                    toastr.success("Thêm sản phẩm mới thành công");
                    window.location.href = "/#/admin/products";
                } else {
                    toastr.success("Thêm sản phẩm không thành công");
                }
            }, 1000);
            reRender(AdminProducts, "#app");
        });

        // Validate form
        $().ready(function() {
            $("#form-add-pro").validate({
                onfocusout: false,
                onkeyup: false,
                onclick: false,
                rules: {
                    "name": {
                        required: true,
                        minlength: 3
                    },
                    "type": {
                        required: true,
                        minlength: 5
                    },
                    "price": {
                        required: true,
                        minlength: 2
                    },
                    "file-upload": {
                        required: true,
                    },
                    "desc": {
                        required: true,
                        minlength: 5
                    }

                },
                messages: {
                    "name": {
                        required: "Bắt buộc nhập tiêu đề",
                        minlength: "Hãy ít nhất 3 ký tự"
                    },
                    "type": {
                        required: "Bắt buộc nhập mô tả ngắn",
                        minlength: "Hãy nhập ít nhất 5 ký tự"
                    },
                    "price": {
                        required: "Bắt buộc nhập giá",
                        minlength: "Hãy nhập ít nhất 2 ký tự"
                    },
                    "file-upload": {
                        required: "Bắt buộc chọn ảnh",
                    },
                    "desc": {
                        required: "Bắt buộc nhập mô tả",
                        minlength: "Hãy nhập ít nhất 5 ký tự"
                    }
                }
            });
        });
    },
}
export default AdminProductsAdd;