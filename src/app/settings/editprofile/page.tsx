"use client";

import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import LabelInputPair from "@/components/common/LabelInputPair/LabelInputPair";
import Image from "next/image";
import { useState } from "react";
import { RiEditCircleFill } from "react-icons/ri";

const EditProfile = () => {

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
                    </div>
                </div>
            </div>
            <div className="p-6 flex justify-end w-full">
                <Button text={"Save"} type="submit" onClick={() => {}} />
            </div>
        </form>
    )
}

export default EditProfile;