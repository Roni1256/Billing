import axios from "axios"
import API_URLS from "../constants"

export const useAuth =async (type,data) => {
    let userData;
   await  axios.post((type==='sigin'?API_URLS.login:API_URLS.signup),data)
    .then((res)=>{
        userData=res.data
    })
    .catch(err=>{ userData=err.res.data})
    .finally(()=>{return userData})
}