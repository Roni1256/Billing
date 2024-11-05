import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import Button from "./General Components/Button";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import axios from "axios";
import API_URLS from "../constants";

const Nav = ({ isAuth, setAuth }) => {
  const navigate = useNavigate();
  const [isDark, setDark] = useState(false);
  const handleDark = () => {
    setDark(!isDark);
    localStorage.setItem("dark", isDark);
    isDark
      ? document.getElementById("root").classList.toggle("dark")
      : document.getElementById("root").classList.remove("dark");
  };
  const handlelogout = async () => {
    await axios
      .post(API_URLS.logout)
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        localStorage.removeItem("token");
        setAuth(false);
        navigate("/");
      });
  };

  useEffect(() => {
    if (localStorage.getItem("dark") === "true") {
      setDark(true);
      document.getElementById("root").classList.add("dark");
    }
  }, []);

  return (
    <>
      <nav
        className={`w-full  flex items-center justify-between lg:px-32 px-5 py-7  md:flex-row gap-5  ${
          !isAuth ? "dark:bg-transparent " : "dark:bg-black/40 hidden"
        } `}
      >
        <Link className="text-2xl  font-bold w-full text-left " to={"/"}>
          Billings
        </Link>
        <div className="w-full flex  justify-end   gap-8">
          {isAuth && (
            <Link to={"/dashboard"} className=" font-bold hover:underline">
              Dashboard
            </Link>
          )}
        </div>
        <div className="flex w-full lg:flex items-center justify-end gap-10">
          {!isAuth && (
            <Button
              label={"Get Started"}
              click={() => {
                navigate("/auth");
              }}
            />
          )}
          {isAuth && (
            <button
              className=" p-2 rounded-full ring-2 ring-slate-400 "
              onClick={handlelogout}
            >
              <BiLogOut size={20} />
            </button>
          )}
        </div>
        <button
          className=" p-2 rounded-full ring-2 ring-slate-400 "
          onClick={handleDark}
        >
          {isDark ? <MdDarkMode /> : <MdLightMode />}
        </button>
      </nav>
    </>
  );
};

export default Nav;
