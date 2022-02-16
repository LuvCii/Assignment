import { reRender } from "../utils";
import { getAll } from "../api/user";
const Profile = {
        render() {
            return /* html */ `
       <div class="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-800">
   <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-sm">
     <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src="../../images/hacker.png" alt="product designer">
      ${localStorage.getItem('user') ? `
            <h1 class="text-xl text-gray-700"  id="accountInfo">Username</h1>
     <h3 class="text-base text-gray-400 " id="accountEmail" >Email</h3>
     <p class="text-xs text-gray-400 mt-4 mb-8"> Quá tuyệt vời luôn đó aaaaaaaaaaaaaaaaaaaaaaa </p>
            `: ""}
     <hr class="mb-3 md:my-6 border-gray-400" />
     <div class="flex flex-col ">
     <a href="" class="px-4 transition ease-in-out delay-350 hover:-translate-y-1 hover:scale-110 hover: duration-300 hover:bg-red-400 bg-indigo-600 px-10 py-2 rounded-3xl text-gray-100 font-semibold tracking-wide">Edit profile</a>
     <a href="/admin" class="transition ease-in-out delay-350 hover:-translate-y-1 hover:scale-110 hover: duration-300 hover:bg-stone-600 bg-indigo-600 px-8 py-2 mt-4 rounded-3xl text-gray-100 font-semibold tracking-wide">Dashboard</a>
     </div>
     
   </div>
 </div>
        `;
    },
    afterRender() {
        // lấy thông tin username từ localStorage và hiển thị ra ngoài
        const username = JSON.parse(localStorage.getItem("user")).username;
        document.querySelector('#accountInfo').innerHTML = username;
         const email = JSON.parse(localStorage.getItem("user")).email;
        document.querySelector('#accountEmail').innerHTML = email;
    }
};
export default Profile;