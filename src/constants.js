
const BASE_URL ="https://billing-backend-ebon.vercel.app";
const API_URLS={
    presentuser: `${BASE_URL}/user/present/`,
    signup: `${BASE_URL}/user/signup/`,
    login: `${BASE_URL}/user/login/`,
    logout: `${BASE_URL}/user/logout/`,
    getproducts: `${BASE_URL}/products/`,
    getproduct: `${BASE_URL}/products/`,
    addproduct: `${BASE_URL}/products/product/`,
    deleteproduct: `${BASE_URL}/products/`,
    updateproduct: `${BASE_URL}/products/`,
    updatequantity: `${BASE_URL}/products/`,
    getcustomer: `${BASE_URL}/customer/`,
    addcustomer: `${BASE_URL}/customer/`,
    deletecustomer: `${BASE_URL}/customer/`,
    updatecustomer: `${BASE_URL}/customer/`,
    updateprofile: `${BASE_URL}/user/`,
    updatecompany: `${BASE_URL}/company/`,
    sendNotify: `${BASE_URL}/customer/notify/`,
    deleteAllUsers: `${BASE_URL}/user/`,
    admin: `${BASE_URL}/admin/login`,
    admindelete: `${BASE_URL}/admin/users/`,
    showAllUsers: `${BASE_URL}/admin/users`,    
}



    
export default API_URLS;
