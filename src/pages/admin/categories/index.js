import NavAdmin from "../../../components/navadmin";
import { reRender } from "../../../utils";
// import news from "../../../data";
import { getAll, remove } from "../../../api/category";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const AdminCate = {
        async render() {
            const { data } = await getAll();
            console.log(data)
            return /* html */ `
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                    <h2
                    class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                    >
                    Quản lý Category
                    </h2>
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                    <a href="/admin/categories/add" class="sm:ml-3">
                        <button
                            type="button"
                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Thêm mới
                        </button>
                    </a>
                </div>
                </div>
            </div>
            </header>
            <main>
                <div class="mx-40 mt-10 flex flex-col mx-12">
                ${data.map((cate, index) => /* html */`
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class=" py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="w-12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Stt
                                    </th>
                                     <th scope="col" class="w-[300px] px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                                       Image
                                    </th>
                                    <th scope="col" class="w-2/5 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                       Category
                                    </th>
									<th scope="col" class="w-2/5 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      ID Category
                                    </th>
									
                                    <th scope="col" class=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Active
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                <td class=" px-6 py-4 ">
                                    <div class= "text-sm text-gray-900">${index+1} </div>
                                </td>
                                 <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="  flex-shrink-0 h-44 w-40">
                                            <img class="pb-9 w-36 h-44 object-cover rounded-xl shadow-2xl" src="${cate.img}" alt="" >
                                        </div>
                                    </div>
                                </td>
                                <td class=" px-6 py-4 ">
                                    <div class= "text-xl text-gray-900">${cate.cate}</div>
                                </td>
								 <td class=" px-6 py-4 ">
                                    <div class= "text-sm text-gray-900">${cate.id}</div>
                                </td>
								
                               
                                <td class="px-6 py-4  whitespace-nowrap  text-sm font-medium">
                                    <a href="/admin/categories/${cate.id}/edit" class="text-indigo-600 hover:text-red-600">Edit</a>
                                </td>
                                 <td class="px-6 py-4  whitespace-nowrap text-right text-sm font-medium">
                                    <button data-id="${cate.id}" class="btn btn-remove text-indigo-600 hover:text-red-600"> <div class=" flex-shrink-0 h-10 w-10">
                                            <img class="transition ease-in-out delay-350 hover:-translate-y-1 hover:scale-110 hover: duration-300" src="../../../../images/delete.png" alt="">
                                        </div></button> 
                                </td>
                                </tr>

                                <!-- More people... -->
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    `).join("")}
                </div>
            </main>
        </div>
        `
    },
        afterRender(){
        // lấy danh sách button sau khi render
        const buttons = document.querySelectorAll('.btn');
        // tạo vòng lặp cho nodelist button
        buttons.forEach(btn => {
            // lấy ID từ thuộc tính data-id của button
            const id = btn.dataset.id;
            btn.addEventListener('click', () => {
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa danh mục này không?");
                if(confirm){
                     // gọi hàm delete trong folder API và bắn id vào hàm
                    remove(id).then(() => {
                        console.log('Da xoa thanh cong');
                        reRender(AdminCate, "#app");
                    })
                }
            })
        });
    }
}
export default AdminCate;