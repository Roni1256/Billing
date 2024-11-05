import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Billing from "./pages/Billing";
import Stocks from "./pages/Stocks";
import axios from "axios";
import API_URLS from "./constants";
import Loader from "./components/General Components/Loader";
import Details from "./pages/Details";
import Templates from "./pages/Templates";
import Customers from "./pages/Customers";
import Admin from "./pages/Admin";
import NotFound from "./pages/404";

const App = () => {
  const navigate = useNavigate();
  const [isAuth, setAuth] = useState(false);
  const [userData, setData] = useState({});
  const [isLoading, setLoading] = useState(false);

  const getCurrentUser = async () => {
    setLoading(true);
    await axios
      .get(API_URLS.presentuser + localStorage.getItem("token"))
      .then((res) => {
        setData(res.data);
        setAuth(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuth(true);
      getCurrentUser();
      navigate("/dashboard");
    }
  }, []);

  useEffect(() => {
    if (isAuth) {
      getCurrentUser();
    }
  }, [window.location.pathname]);

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
    <div className="transition-all duration-700 ease-in-out bg-gray-100 text-slate-800 dark:text-white dark:bg-gradient-to-br from-slate-800 to-black">
      <Nav isAuth={isAuth} setAuth={setAuth} />

      <Routes>
        {!isAuth && (
          <>
            <Route path="/" element={<Home />} />
            <Route
              path="/auth"
              element={
                <Auth
                  user={setData}
                  isAuth={isAuth}
                  setAuth={setAuth}
                  isLoading={isLoading}
                />
              }
            />
          </>
        )}

        {isAuth && (
          <>
    
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  data={userData}
                  isLoading={isLoading}
                  isAuth={isAuth}
                  setAuth={setAuth}
                />
              }
            >
              <Route
                path=""
                element={
                  <Profile
                    data={userData}
                    isLoading={isLoading}
                    updates={getCurrentUser}
                  />
                }
              />
              <Route
                path="templates"
                element={<Templates updates={getCurrentUser} />}
              />

              <Route
                path="details"
                element={
                  <Details
                    data={userData}
                    isLoading={isLoading}
                    updates={getCurrentUser}
                  />
                }
              />
              <Route
                path="customer-management"
                element={
                  <Customers
                    data={userData}
                    isLoading={isLoading}
                    updates={getCurrentUser}
                  />
                }
              />
              <Route
                path="billing"
                element={
                  <Billing
                    data={userData}
                    isLoading={isLoading}
                    updates={getCurrentUser}
                  />
                }
              />
              <Route
                path="stocks"
                element={
                  <Stocks
                    data={userData}
                    isLoading={isLoading}
                    updates={getCurrentUser}
                  />
                }
              />
            </Route>
          </>
        )}
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className=" text-sm   text-center  font-sans dark:text-white bg-transparent py-3">
        <p>
          Created by <b>Roniwilliams</b>
        </p>
      </footer>
    </div>
  );
};

export default App;
