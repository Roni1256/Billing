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
        <section className="flex flex-col md:flex-row">

          <Sidepanel openpanel={openPanel} toggle={toggleOpenPanel}/>
        
          <div className="w-full p-4 md:p-10 h-screen overflow-scroll scrollbar-none">
            <div className="w-full max-w-7xl mx-auto">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center justify-between w-full gap-3">
                  <span className="text-2xl md:text-3xl font-bold">Dashboard</span>
                  <button className="z-10 flex items-center justify-start p-2 md:p-3 hover:bg-slate-200 dark:hover:bg-gray-700 rounded-lg transition-colors md:hidden" onClick={toggleOpenPanel}>
                      {openPanel ? (
                          <GoSidebarExpand
                          className="w-5 h-5 md:w-7 md:h-7"
                          onClick={toggleOpenPanel}
                          />
                      ) : (
                          <GoSidebarCollapse
                          className="w-5 h-5 md:w-7 md:h-7"
                          onClick={toggleOpenPanel}
                          />
                      )}
                  </button>
                </div>
                <div className="flex items-center gap-2 md:gap-5">
                  <button className='flex items-center justify-start p-1.5 md:p-3 hover:bg-slate-200 dark:hover:bg-gray-700 rounded-lg transition-colors' onClick={handlelogout}>
                        <BiLogOut className="w-5 h-5 md:w-7 md:h-7"/>
                  </button>
                  <button className='flex items-center justify-start p-1.5 md:p-3 hover:bg-slate-200 dark:hover:bg-gray-700 rounded-lg transition-colors' onClick={handleDark}>
                    {isDark?
                    <MdDarkMode className="w-5 h-5 md:w-7 md:h-7" />:<MdLightMode className="w-5 h-5 md:w-7 md:h-7"/>}
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
