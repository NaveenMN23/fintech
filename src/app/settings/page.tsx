"use client";

import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import Card from "@/components/common/Card/Card";
import LabelInputPair from "@/components/common/LabelInputPair/LabelInputPair";
import Image from "next/image";
import { useState } from "react";
import { RiEditCircleFill } from "react-icons/ri";

const navmenus = [{
    name: 'Edit Profile',
    id:1
  },{
    name: 'Preferences',
    id:2
  },{
    name: 'Security',
    id:3
  }]

const Settings = () => {

     const [activeIdx, setActiveIdx] = useState(1);
    
      const activeTab = (id: number) => {
        setActiveIdx(id);
      }

      const [profilePic, setProfilePic] = useState<string | null>(null);

      const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          const fileURL = URL.createObjectURL(file);
          setProfilePic(fileURL);
        }
      };

    const fields = [
        { label: "Your Name", name: "name", type: "text", value: "", minLength:1, maxLength:30, required: true, placeholder: "Charlene Reed" },
        { label: "User Name", name: "username", type: "text", value: "", minLength:1, maxLength:20, required: true, placeholder: "Charlene Reed" },
        { label: "Email", name: "email", type: "email", value: "", minLength:1, maxLength:30, required: true, placeholder: "charlenereed@gmail.com" },
        { label: "Password", name: "password", type: "password", value: "", minLength:1, maxLength:30, required: true, placeholder: "**********" },
        { label: "Date of Birth", name: "dob", type: "date", value: "", required: true, placeholder: "25 January 1990" },
        { label: "Present Address", name: "present_address", type: "text", value: "", minLength:1, maxLength:100, required: false, placeholder: "San Jose, California, USA" },
        { label: "Permanent Address", name: "permanent_address", type: "text", value: "", minLength:1, maxLength:100, required: true, placeholder: "San Jose, California, USA" },
        { label: "City", name: "city", type: "text", value: "", minLength:1, maxLength:20, required: true, placeholder: "San Jose" },
        { label: "Postal Code", name: "postal_code", type: "number", minLength:100000, maxLength:999999, value: "", required: true, placeholder: "45962" },
        { label: "Country", name: "country", type: "text", value: "", minLength:1, maxLength:20, required: true, placeholder: "USA" },
      ];

      const [formData, setFormData] = useState<Record<string, string>>(
        fields.reduce((acc, field) => {
          acc[field.name] = field.value || "";
          return acc;
        }, {} as Record<string, string>)
      );
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(e, formData);
      };

    return(
        <div>
            <Card>
                <div className="px-6 pt-6">
                    <ul className="flex flex-row">
                        {
                            navmenus.map((menu) => (
                                <li key={menu.id} className="w-[8rem]">
                                    <div className={`flex flex-col justify-left items-center cursor-pointer hover:text-appBlack ${activeIdx === menu.id ? "text-appBlack" : "text-appLightGray"}`} onClick={() => activeTab(menu.id)}>
                                        <div className='pb-1'>{menu.name}</div>
                                        <span className={`w-full px-[2rem] h-[0.3rem] rounded-tr-[0.375rem] rounded-tl-[0.375rem] hover:bg-appBlack ${activeIdx === menu.id ? "bg-appBlack" : "text-appLightGray"}`}></span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <div className={`h-px bg-[#F4F5F7] border-0`}></div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4">
                        <div className="col-span-1 flex flex-col gap-4">
                            <div className="flex flex-row">
                                <div>
                                    <Image src={'/profile/profilepic.svg'} alt="" width={90} height={90} className="max-w-full"/>
                                </div>
                                <label className="flex items-end -ml-6 cursor-pointer">
                                    <RiEditCircleFill size={30}/>
                                    <Input
                                        type={"file"}
                                        id={"upload"}
                                        name={"fileupload"}
                                        value={""}
                                        placeholder={""}
                                        className={`hidden`}
                                        required={false}
                                        onChange={handleFileUpload}     
                                    />
                                    {/* <input
                                        id="upload"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileUpload}
                                        className="hidden"
                                        mi
                                        /> */}
                                </label>
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col gap-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {fields.map((field,i) => (
                                <div key={i} className="col-span-1 flex flex-col gap-4">
                                    <LabelInputPair
                                    className="flex flex-col gap-3"
                                    key={field.name}
                                    label={field.label}
                                    htmlFor={field.name}
                                    type={field.type}
                                    name={field.name}
                                    value={formData[field.name]}
                                    placeholder={field.placeholder}
                                    required={field.required}
                                    onChange={handleChange}
                                    minLength={field.minLength}
                                    maxLength={field.maxLength}
                                    min={field.minLength}
                                    max={field.maxLength}
                                    />
                                </div>
                            ))}
                                {/* <div className="col-span-1 flex flex-col gap-4">
                                    <div className="text-[1rem] text-appBlack">Your Name</div>
                                    <input className="border-[1px] border-solid border-cardLightBorder rounded-xl p-3 text-appSubBlue" type="text"/>
                                </div>
                                <div className="col-span-1 flex flex-col gap-4">
                                    <div className="text-[1rem] text-appBlack">Your Name</div>
                                    <input className="border-[1px] border-solid border-cardLightBorder rounded-xl p-3 text-appSubBlue" type="text"/>
                                </div> */}
                            </div>
                            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-1 flex flex-col gap-4">
                                    <div className="text-[1rem] text-appBlack">Your Name</div>
                                    <input className="border-[1px] border-solid border-cardLightBorder rounded-xl p-3 text-appSubBlue" type="text"/>
                                </div>
                                <div className="col-span-1 flex flex-col gap-4">
                                    <div className="text-[1rem] text-appBlack">Your Name</div>
                                    <input className="border-[1px] border-solid border-cardLightBorder rounded-xl p-3 text-appSubBlue" type="text"/>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="p-6 flex justify-end w-full">
                        <Button text={"Save"} type="submit" onClick={() => {}} />
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default Settings;