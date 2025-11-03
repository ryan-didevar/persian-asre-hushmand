"use client";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import InputField from "../components/InputField";
import CheckBox from "../components/CheckBox";
import TextArea from "../components/TextArea";
import { useCallback, useState } from "react";
export interface FormSectionProps {
  name: string;
  email: string;
  phone: string;
  services: string[];
  description: string;
}
const serviceOptions = [
  { label: "خدمات سئو", value: "seo" },
  { label: "طراحی وب سایت", value: "design" },
  { label: "اتوماسیون و بازاریابی", value: "marketing" },
  { label: "کمپین‌های بازاریابی و تبلیغاتی", value: "campaigns" },
  { label: "خدمات تولید محتوا", value: "production" },
];
const FormSection = () => {
  const [formData, setFormData] = useState<FormSectionProps>({
    name: "",
    email: "",
    phone: "",
    services: [],
    description: "",
  });
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );
  const handleCheckboxChange = useCallback((value: string) => {
    setFormData((prev) => {
      const currentServices = prev.services;
      if ((currentServices || []).includes(value)) {
        return {
          ...prev,
          services: (currentServices || []).filter(
            (service) => service !== value
          ),
        };
      } else {
        return {
          ...prev,
          services: [...(currentServices || []), value],
        };
      }
    });
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("FORM SUBMITTED:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      services: [],
      description: "",
    });
  };
  return (
    <div className="min-h-screen bg-gray-50 flex w-full items-center justify-center p-4">
      <div className="w-full bg-gray-50">
        {/* Header Section */}
        <header className="text-center mb-10 w-full">
          <h1 className="text-[20px] font-bold text-black-900 mb-6">
            فرم دریافت مشاوره
          </h1>
          <p className="text-black-900 text-base ">
            برای ارتقای بیزینس خود به دنبال فرصتی ناب هستید؟ فرم زیر را تکمیل
            کنید تا مشاوران ما به صورت کاملان رایگان شمارا راهنمایی کنند.
          </p>
        </header>

        {/* Form Container */}
        <form
          onSubmit={onSubmit}
          className="space-y-8 lg:mx-32 p-10 bg-white border border-gray-200 rounded-lg"
        >
          {/* Row 1: Name, Email, Phone - using flex for responsive layout */}
          <div className="flex flex-wrap gap-4 justify-between">
            <InputField
              label="نام و نام خانوادگی خود را وارد کنید"
              placeholder="نام و نام خانوادگی"
              icon={HiOutlineUserCircle}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <InputField
              label="آدرس ایمیل خود را وارد کنید"
              placeholder="مثلا email@mail.com"
              icon={CiMail}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputField
              label="شماره تماس خود را وارد کنید"
              placeholder="مثلا091212345678"
              icon={LuPhone}
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Row 2: Service Selection */}
          <section className="space-y-4">
            <h2 className="text-sm font-bold text-black-900">
              نوع سرویس(های) مورد نظر خود را انتخاب کنید.
            </h2>
            <div
              className="flex flex-wrap gap-3"
              role="group"
              aria-label="انتخاب سرویس"
            >
              {serviceOptions.map((option) => (
                <CheckBox
                  key={option.value}
                  label={option.label}
                  value={option.value}
                  checkedValues={formData.services.includes(option.value)}
                  onChange={handleCheckboxChange}
                />
              ))}
            </div>
          </section>

          <TextArea value={formData.description} onChange={handleChange} />

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="w-full md:w-auto px-12 py-3 bg-black-500 text-white font-bold text-lg rounded-lg  hover:bg-gray-700 focus:outline-none transition duration-150 ease-in-out"
            >
              ثبت درخواست
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
