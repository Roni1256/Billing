import React, { useState } from 'react'
import Form from '../components/General Components/Form'
import Button from '../components/General Components/Button'
import axios from 'axios'
import Floats from '../components/General Components/Floats'
import { BiChevronRightCircle, BiLoader } from 'react-icons/bi'
import API_URLS from '../constants'
const business=[
    {label: "Retail", value: "Retail"},
    {label: "Healthcare", value: "Healthcare"},
    {label: "Restaurant", value: "Restaurant"},
    {label: "Hospitality", value: "Hospitality"},
    {label: "Food Services", value: "Food Services"},
    {label: "Grocery", value: "Grocery"},
    {label: "Pharmacy", value: "Pharmacy"},
    {label: "Auto Services", value: "Auto Services"},
    {label: "Professional Services", value: "Professional Services"},
    {label: "Salon & Spa", value: "Salon & Spa"},
    {label: "Electronics", value: "Electronics"},
    {label: "Consulting", value: "Consulting"}
]


const Details = ({data,isLoading,updates}) => {
    const [patchLoad,setPatchLoad]=useState(false)
    const [isSuccess,setSuccess]=useState(false)
    const [updateData,setUpdateData]=useState({
        company_name: data?.company_name || "",
        business: data?.business || "",
        slogan: data?.slogan || "",
        address: data?.address || "",
        city: data?.city || "",
        state: data?.state || "",
        country: data?.country || "",
        pincode: data?.pincode || "",
        phone_number: data?.phone_number || "",
        company_email: data?.company_email || "",
        website: data?.website || "",
        description: data?.description || "",
        facebook_link: data?.facebook_link || "",
        instagram_link: data?.instagram_link || "",
        twitter_link: data?.twitter_link || "",
        linkedin_link: data?.linkedin_link || "",
        invoicetype:data?.invoicetype||"",
    })
    

    const onChange = (e) => {
        const { name, value } = e.target
        setUpdateData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }
    const [formData1] = useState([
        {
            label: "Company Name",
            type: "text",
            name: "company_name",
            value: updateData.company_name,
            placeholder: "Enter company name",
            change: onChange,
        },
        {
            label: "Company Type",
            type: "select",
            options: business,
            name: "business",
            defaultValue:updateData.business,
            value: updateData.business,
            placeholder: "Select business type",
            change: onChange,
        },
        {
            label: "Slogan",
            type: "text",
            name: "slogan",
            value: updateData.slogan,
            placeholder: "Enter slogan",
            change: onChange,
        },
        {
            label: "Address",
            type: "text",
            name: "address",
            value: updateData.address,
            placeholder: "Enter address",
            change: onChange,
        },
        {
            label: "City",
            type: "text",
            name: "city",
            value: updateData.city,
            placeholder: "Enter city",
            change: onChange,
        },
        {
            label: "State",
            type: "text",
            name: "state",
            value: updateData.state,
            placeholder: "Enter state",
            change: onChange,
        },
        {
            label: "Pincode",
            type: "text",
            name: "pincode",
            value: updateData.pincode,
            placeholder: "Enter pincode",
            change: onChange,
        },
        {
            label: "Invoice Type",
            type: "select",
            options: [
                {
                    label: "Invoice",
                    value: "invoice"
                },
                {
                    label: "Bill",
                    value: "Bill"
                }
            ],
            name: "invoicetype",
            defaultValue:updateData.invoicetype,
            value: updateData.invoicetype,
            placeholder: "Select Invoice type",
            change: onChange,
        },
    ])

    const [formData2] = useState([
        {
            label: "Phone Number",
            type: "tel",
            name: "phone_number",
            value: updateData.phone_number,
            placeholder: "Enter phone number",
            change: onChange,
        },
        {
            label: "Company Email",
            type: "email",
            name: "company_email",
            value: updateData.company_email,
            placeholder: "Enter email",
            change: onChange,
        },
        {
            label: "Website",
            type: "url",
            name: "website",
            value: updateData.website,
            placeholder: "Enter website URL",
            change: onChange,
        },
        {
            label: "LinkedIn",
            type: "url",
            name: "linkedin_link",
            value: updateData.linkedin_link,
            placeholder: "Enter LinkedIn URL",
            change: onChange,
        },
        {
            label: "Facebook",
            type: "url",
            name: "facebook_link",
            value: updateData.facebook_link,
            placeholder: "Enter Facebook URL",
            change: onChange,
        },
        {
            label: "Twitter",
            type: "url",
            name: "twitter_link",
            value: updateData.twitter_link,
            placeholder: "Enter Twitter URL",
            change: onChange,
        },
        {
            label: "Instagram",
            type: "url",
            name: "instagram_link",
            value: updateData.instagram_link,
            placeholder: "Enter Instagram URL",
            change: onChange,
        },
    ])
    

    const update = async() => {
        
        setPatchLoad(true)
        await axios.patch(API_URLS.updatecompany+data._id,updateData)
        .then((res)=>{console.log(res.data)})
        .catch((err)=>{console.log(err)})
        .finally(()=>{
            setPatchLoad(false)
            setSuccess(true)
            updates();
        })

    }

    return (
        <div className="w-full rounded-lg backdrop-blur-md my-5 p-3 md:p-7 flex flex-col items-center">
            <h1 className="text-center text-2xl md:text-3xl font-bold text-gray-700 mb-2 dark:text-slate-300">Manage Company Information</h1>
            <hr />
            <div className="w-full max-w-[700px] px-2 sm:px-4">
                <div className="mt-5 flex items-center flex-col justify-center gap-5">
                    <Form data={formData1} formTitle={"Company Information"}/>
                </div>
                <div className="mt-5 flex items-center flex-col justify-center gap-5">
                    <Form data={formData2} formTitle={"Contact Information"}/>
                </div>
                <div className="mt-7 flex items-center justify-center w-full">
                    <Button label={"Update"} click={update} />
                </div>
            </div>
            {patchLoad &&
                <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50">
                    <Floats title={"Loading"} icon={<BiLoader size={40} className="animate-spin" />} className="absolute top-0 right-0" />
                </div>
            }
            {isSuccess &&
                <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50">
                    <Floats title={"Successfully Updated"} icon={<BiChevronRightCircle size={40}  />} className="absolute top-0 right-0" />
                </div>
            }
        </div>
    )
}

export default Details