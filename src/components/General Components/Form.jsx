import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Form = ({ formTitle, data, submit, message, link, btnLabel,style }) => {
  return (
    <>
      <form
        className={`w-full mx-auto p-10 bg-white rounded-lg  dark:bg-black/50     dark:shadow-[0px_0px_5px_1px_#edf2f7] shadow-[0px_0px_6px_2px_#4a5568] ${style}`}
        action="submit"
      >
        {formTitle && (
          <div className="text-xl font-bold text-left pb-10">{formTitle}</div>
        )}
        {data.map((item) => {
          switch (item.type) {
            case 'select':
              return (
                <Options
                  data={item.options}
                  name={item.name}
                  defaultValue={item.defaultValue}
                  label={item.label}
                  change={item.change}
                />
              );
              case 'textarea':
              return (
                <TextArea 
                  name={item.name}
                  value={item.value}
                  change={item.change}
                  label={item.label}
                  placeholder={item.placeholder}
                />
              )
            default:
              return (
                <Input
                  label={item.label}
                  type={item.type}
                  name={item.name}
                  value={item.value}
                  change={item.change}
                  placeholder={item.placeholder}
                  readonly={item.readonly ? true : undefined}
                />
              );
          }
        })}            
          
        {link && (<>
          <a
            className="text-sm text-blue-500 cursor-pointer py-5  "
            onClick={link.click}
          >
            {link.message}
          </a>
        <br /></>
        )}
        {message && (
          <>
            <div className={`text-sm font-bold  ${message.color} my-5  `}>
              {message.message}
            </div>
            <br />
          </>
        )}
        {btnLabel && <div className="mt-3"><Button label={btnLabel} click={submit} type={"submit"} /></div>}
      </form>
    </>
  );
};

function Options({data, name, defaultValue,label,change}) {
  return (
    <div className="mb-5">
      <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <select className="w-full p-2 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-purple-500 dark:focus:border-purple-500 " name={name} onChange={change}>
        <option value={defaultValue}>{defaultValue}</option>
        {
          data.map((item) => (
            <option key={item.value} value={item.value}>{item.label}</option>
          ))
        }
      </select>
    </div>
  )
}

function TextArea({
  name="",
  value="",
  change,
  label="",
  placeholder=""
}) {
  const [isValue, setValue]=useState(value)
  return (
   <div className="w-full">
    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} name={name} value={isValue} onChange={(e)=>{setValue(e.target.value);change(e)}}/>
   </div>

  )
}


export default Form;

