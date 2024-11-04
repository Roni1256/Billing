import React, { useEffect, useState } from 'react'
import Button from '../components/General Components/Button'
import axios from 'axios'
import API_URLS from '../constants'
import Form from '../components/General Components/Form'
import { CgCloseR } from 'react-icons/cg'

const Admin = () => {
  const [isAdmin,setAdmin]=useState()
  const [admininfo,setAdmininfo]=useState({
    email: "",
    password: "",
  })
  const [formMsg,setFormMsg]=useState("")
  const handleChange = (e) => {
    setAdmininfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  const formData=[
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Email",
      value: "",
      change: handleChange,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Password",
      value: "",
      change: handleChange,
    }
  ]
  

  const handleSubmit = async(e) => {
    e.preventDefault();
    await axios.post(API_URLS.admin, admininfo)
    .then((res)=>{
      if(res.status===200){
        setAdmin(true)
        setFormMsg({message:"Successfully Logged In",color:"text-green-500"})
      }
      else{
        setAdmin(false)
        setFormMsg({message:"Invalid Credentials",color:"text-red-500"})
      }
    })
    .catch((err)=>{
      console.log(err)
      setAdmin(false)
      setFormMsg({message:"Invalid Credentials",color:"text-red-500"})
    })
  }
  const deleteAllUser=async()=>{
    await axios.delete(API_URLS.deleteAllUsers)
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  const [allUsers,setAllUsers]=useState([])

  const showUsers=async()=>{
    
    await axios.get(API_URLS.showAllUsers)
    .then((res)=>{
      setAllUsers(res.data)
      console.log(res.data);
      
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    showUsers()
  },[])

  const deleteUser=async(id)=>{
    console.log(id);
    await axios.delete(API_URLS.admindelete+id)
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  const [currentView,setCurrentView]=useState({
        _id: "",
        address: "",
        business: "",
        city: "",
        company_email: "",
        company_name: "",
        country: "",
        createdAt: "",
        customers: [],
        description: "",
        email: "",
        facebook_link: "",
        instagram_link: "",
        invoicetype: "",
        linkedin_link: "",
        name: "",
        phone_number: null,
        pincode: null,
        products: [],
        role: "",
        slogan: "",
        state: "",
        totalsales: 0,
        twitter_link: "",
        updatedAt: "",
        website: ""
      }  
)
const [currentUserView,setCurrentUserView]=useState(false)
  const showUser=(id)=>{
    setCurrentUserView(true)
    const findUser=allUsers.find((user)=>user._id===id)
    console.log(findUser);
    setCurrentView(findUser)
  }

if(!isAdmin){
  return (<>
    <div className=' bg-gray-100 flex flex-col items-center gap-5 absolute top-0 left-0 h-screen w-full justify-center dark:bg-slate-800'>
      <Form formTitle={"Admin Login"} data={formData} message={formMsg} submit={handleSubmit} btnLabel={"Login"} style={"max-w-[500px] w-full"}/>
    </div>
  </>
)
}

if(isAdmin){
  return (
    <div className='bg-gray-100 p-10 flex flex-col items-center gap-5 absolute top-0 left-0 w-full  justify-center'>
      <h1 className='text-slate-900 text-2xl font-bold w-full text-left'>Admin Dashboard</h1>
      <Element label="Delete all the Users" btnLabel="Delete" action={deleteAllUser} btnStyle={"bg-red-600 hover:bg-red-700"}/>
      <Element label={"All Users"}  />
      <Table data={allUsers} deleteUser={deleteUser} view={showUser}/>
      {currentUserView && <div className="h-screen text-slate-800 w-full flex justify-center absolute top-0 left-0 items-center p-10 backdrop-blur-md bg-slate-800/20">
      <div className="bg-white w-full max-w-[600px] rounded-md ">
        <h1 className='text-3xl font-bold flex w-full justify-between p-5'>User Details <button className='text-red-600 hover:text-red-800' onClick={()=>{setCurrentUserView(false)}}><CgCloseR size={30} /></button></h1>
        <div className="w-full h-[400px] overflow-auto scrollbar-none">

        {Object.entries(currentView).map(([key, value]) => (
          <>
          <div key={key} className="flex max-w-[600px] w-full bg-white p-5 rounded-lg items-center justify-between gap-10 h-fit">
            <label htmlFor="" className='text-sm font-semibold'>{key}</label>
            <span className='text-md text-bold '>{value ? (Array.isArray(value) ? value.length : value.toString()) : 'N/A'}</span>
          </div>
            <hr />
          </>
        ))}
        </div>
      </div>
      </div>}
    </div>
  )
}
}

export default Admin

function Element({label,btnLabel,action,btnStyle,msg,msgcolor,click}){
  return <>
  <div className="max-w-[900px] w-full flex items-center justify-between p-3 bg-white text-slate-800 font-semibold rounded-lg ring-1 ring-slate-500/40 shadow-md cursor-pointer" onClick={click?click:()=>{}}>
    <h1>{label}</h1>
    {msg && <span className={`text-slate-700 font-bold ${msgcolor}`}>{msg}</span>}
    {btnLabel && <Button label={btnLabel} click={action} style={btnStyle} />}
  </div>
  </>
}

function Table({data,deleteUser,view}){
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState(data || [])

  useEffect(() => {
    const filtered = data?.filter(item => 
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.company?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredData(filtered || [])
  }, [searchTerm, data])

  return (
    <div class="flex flex-col bg-white rounded-md  shadow-md ">
      <div className="p-4">
        <input
          type="text"
          placeholder="Search by name, email or company..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border text-slate-900 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="overflow-hidden">
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-slate-900 uppercase">Name</th>
                  <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-slate-900 uppercase">Email</th>
                  <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-slate-900 uppercase">Company</th>
                  <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-slate-900 uppercase">Delete</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                {filteredData.map((item, index) => (
                  <tr key={index}>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{item.name}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-900">{item.email}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-900">{item.company_name}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium flex gap-5 items-center w-full justify-end">
                      <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none" onClick={()=>view(item._id)}>View</button>
                      <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 focus:outline-none focus:text-red-800 disabled:opacity-50 disabled:pointer-events-none" onClick={() => deleteUser(item._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}