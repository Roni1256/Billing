import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_URLS from "../constants";
import Form from '../components/General Components/Form'
const Auth = ({ user, setAuth, isLoading, isAuth }) => {
    // ------------------------Declaration ----------------：

    const [isSignin, setSignin] = useState(false);
    const linkSignin = {
      message: "Don't have an account?",
      color: "text-blue-500",
      click: () => setSignin(!isSignin),
    };
    const linkSignup = {
      message: "Already have an account?",
      color: "text-blue-500",
      click: () => setSignin(!isSignin),
    };

  const navigate = useNavigate();
  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
  });
  const dataSignin = [
    {
      label: "Email",
      type: "text",
      name: "email",
      value: signinData.email,
      change: (e) => {
        setFormMessage(formMessages.initial);
        setSigninData({ ...signinData, email: e.target.value.trim() });
      },
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      value: signinData.password,
      change: (e) => {
        setFormMessage(formMessages.initial);
        setSigninData({ ...signinData, password: e.target.value.trim() });
      },
    },
  ];

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    phone:"",
  });
  const dataSignup = [
    {
      label: "Name",
      type: "text",
      name: "name",
      value: signupData.name,
      change: (e) => {
        setFormMessage(formMessages.initial);
        setSignupData({ ...signupData, name: e.target.value.trim() });
      },
    },
    {
      label: "Email",
      type: "text",
      name: "email",
      value: signupData.email,
      change: (e) => {
        setFormMessage(formMessages.initial);
        setSignupData({ ...signupData, email: e.target.value.trim() });
      },
    },
    {
      label:"Phone Number",
      type:"number",
      name:"phone",
      value:signupData.phone,
      change:(e)=>{
        setFormMessage(formMessages.initial);
        setSignupData({...signupData,phone:e.target.value.trim()})
      }
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      value: signupData.password,
      change: (e) => {
        setFormMessage(formMessages.initial);
        setSignupData({ ...signupData, password: e.target.value.trim() });
      },
    }
  ];

  const formMessages = {
    initial: {
      message: "",
      color: "",
    },
    add: {
      message: "Successfully logged in",
      color: "text-green-500",
    },
    emptyField: {
      message: "Please fill all the fields",
      color: "text-red-500",
    },
    invalid: {
      message: "Invalid credentials",
      color: "text-red-500",
    },
  };
  const [formMessage, setFormMessage] = useState("");

  // ------------------------Functions ---------------------------
  const auth = async (data) => {
    
    try {
      const res = await axios.post(isSignin ? API_URLS.login : API_URLS.signup, data);
      if (res.status === 200) {
        localStorage.setItem("token", res.data._id);
        user(res.data);
        setFormMessage(formMessages.add);
        isSignin?navigate("/dashboard"):navigate("/dashboard/details");
        setAuth(true);
      }
      console.log(res.status);
      
    } catch (err) {
      setFormMessage({message:err.response.data.message,color:"text-red-500"});      
    }

  };

  const submition = async (e) => {
    e.preventDefault();
 
    
    if (
      !isSignin &&
      (!signupData.name || !signupData.email || !signupData.password)
    ) {
      setFormMessage(formMessages.emptyField);
      return;
    }
    if (isSignin && (!signinData.email || !signinData.password)) {
      setFormMessage(formMessages.emptyField);
      return;
    }
    if (isSignin) {
      await auth(signinData);
    } else {
      await auth(signupData);
    }

  };

  return (
    <>
      <div className="h-screen bg-white text-slate-800 dark:text-white dark:bg-gradient-to-br from-slate-900 to-slate-800 flex w-full items-center justify-center px-20 absolute top-0   ">
        <div className="max-w-[600px] min-w-[400px] p-10 lg:p-0">
          <Form
            formTitle={isSignin ? "Sign In" : "Sign Up"}
            data={isSignin ? dataSignin : dataSignup}
            submit={submition}
            message={formMessage}
            link={isSignin ? linkSignin : linkSignup}
            linkTitle={isSignin ? "Sign Up" : "Sign In"}
            btnLabel={isSignin ? "Sign In" : "Sign Up"}
          />
        </div>
      </div>
    </>
  );
};

export default Auth;
