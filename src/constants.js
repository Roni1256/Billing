import { updatecompany } from "../../backend/controller/company.controller";

const API_URLS={
    presentuser: "http://localhost:5000/user/present/",
    signup: "http://localhost:5000/user/signup/",
    login: "http://localhost:5000/user/login/",
    logout: "http://localhost:5000/user/logout/",
    getproducts: "http://localhost:5000/products/",
    getproduct: "http://localhost:5000/products/",
    addproduct: "http://localhost:5000/products/product/",
    deleteproduct: "http://localhost:5000/products/",
    updateproduct: "http://localhost:5000/products/",
    updatequantity: "http://localhost:5000/products/",
    getcustomer: "http://localhost:5000/customer/",
    addcustomer: "http://localhost:5000/customer/",
    deletecustomer: "http://localhost:5000/customer/",
    updatecustomer: "http://localhost:5000/customer/",
    updateprofile:"http://localhost:5000/user/",
    updatecompany: "http://localhost:5000/company/",
    sendNotify: "http://localhost:5000/customer/notify/",
    deleteAllUsers: "http://localhost:5000/user/",
    admin:"http://localhost:5000/admin/login",
    admindelete:"http://localhost:5000/admin/users/",
    showAllUsers:"http://localhost:5000/admin/users",
    
}



    
export default API_URLS;