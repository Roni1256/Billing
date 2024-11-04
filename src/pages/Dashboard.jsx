import axios from "axios";
import React, { useEffect, useState } from "react";
import {  Outlet } from "react-router-dom";
import API_URLS from "../constants";
import Loader from "../components/General Components/Loader";
import Sidepanel from "../components/Sidepanel";
import useOpenPanel from "../hooks/useOpenPanel";
import { GoSidebarCollapse } from "react-icons/go";
import { GoSidebarExpand } from "react-icons/go";
import "../index.css"
import { BiLogOut } from "react-icons/bi";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ data, isLoading ,setAuth,isAuth }) => {
  const navigate = useNavigate();
  const { openPanel, setOpenPanel, toggleOpenPanel } = useOpenPanel();
  const [isDark,setDark]=useState(false)
  useEffect(()=>{
    if(localStorage.getItem('dark')==='true'){
        setDark(true)
        document.getElementById('root').classList.add('dark');
    }

},[])

    const handleDark=()=>{ 
        setDark(!isDark)
        localStorage.setItem('dark',isDark)
        isDark?document.getElementById('root').classList.toggle('dark'):
        document.getElementById('root').classList.remove('dark');        
    }
    const handlelogout=async()=>{
      await axios.post(API_URLS.logout)
      .catch((err)=>{console.log(err)})
      .finally(()=>{
          localStorage.removeItem("token")
          setAuth(false)
          navigate("/")
      })

  }

  if (isLoading) {
    return (
      <>
        <div className="h-screen absolute top-0 left-0 w-full flex items-center justify-center bg-white">
          <Loader />
        </div>
      </>
    );
  }
  return (
    <>
      <section className="flex ">

        <Sidepanel openpanel={openPanel} toggle={toggleOpenPanel}/>
        
        <div className=" w-full p-10    h-screen overflow-scroll scrollbar-none ">
          <div className="max-w-1/2 mx-auto flex items-center justify-between ">
            <div className=" font-bold flex justify-between items-center w-full ">
              <span className="text-3xl">Dashboard</span> 
              <div className="flex gap-5 ">

                <button className='  flex items-center justify-start p-3 hover:bg-slate-200 dark:hover:bg-gray-700 rounded-lg transition-colors ' onClick={handlelogout}>
                      <BiLogOut size={30}/>
                </button>
                <button className='  flex items-center justify-start p-3 hover:bg-slate-200 dark:hover:bg-gray-700 rounded-lg transition-colors' onClick={handleDark}>
                  {isDark?
                  <MdDarkMode size={30} />:<MdLightMode size={30}/>}
                </button>
                <button className="z-10 flex items-center justify-start p-3 hover:bg-slate-200 dark:hover:bg-gray-700 rounded-lg transition-colors  md:hidden  " onClick={toggleOpenPanel}>
                    {openPanel ? (
                        <GoSidebarExpand
                        size={30}
                        onClick={toggleOpenPanel}
                        />
                    ) : (
                        <GoSidebarCollapse
                        size={30}
                        onClick={toggleOpenPanel}
                        />
                    )}
                
                </button>
              </div>
  
            </div>

                
          </div>
          <Outlet />
        </div>
      </section>

    </>
  );
};
export default Dashboard;
