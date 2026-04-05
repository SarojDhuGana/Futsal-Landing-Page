"use client";

import { useState } from "react";
import { z } from "zod";
import * as Toast from "@radix-ui/react-toast";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import SchoolIcon from "@mui/icons-material/School";
import SaveIcon from "@mui/icons-material/Save";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";
import gallery9 from "@/app/assets/gallery/gallery9.jpeg";
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone must be exactly 10 digits"),
  education: z.string().min(2, "Education is required"),
});
type Contact = z.infer<typeof contactSchema>;
export default function ContactForm() {
  const [form, setForm] = useState<Contact>({
    name: "",
    address: "",
    phone: "",
    education: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Contact, string>>>(
    {},
  );

  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openToast, setOpenToast] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof Contact, string>> = {};
    }
    setIsSubmitting(true);
    setContacts((prev) => [...prev, form]);
    setForm({
      name: "",
      address: "",
      phone: "",
      education: "",
    });
    setIsSubmitting(false);
    setOpenToast(true);
  };

  return (
    <Toast.Provider swipeDirection="left">
      <div className="min-h-screen bg-gray-50 p-6 text-white flex-1 items-center justify-center">
        <div className="text-center mb-12">
          <h1
            id="blog-heading"
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Latest Make a Connection
          </h1>
          <div
            className="w-24 h-1 bg-green-600 mx-auto mb-6"
            aria-hidden="true"
          ></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert insights, training tips, and academy
          </p>
        </div>
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 px-10 ">
          <div className="bg-white/10 rounded-2xl p-8 border-2 border-gray-200 shadow-xl w-full">
            <h2 className="text-2xl text-center  font-normal mb-6 text-gray-500">
              Contact For More Info
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <InputField
                icon={<PersonIcon fontSize="small" />}
                name="name"
                placeholder="Full Name"
                value={form.name}
                error={errors.name}
                onChange={handleChange}
              />

              <InputField
                icon={<LocationOnIcon fontSize="small" />}
                name="address"
                placeholder="Address"
                value={form.address}
                error={errors.address}
                onChange={handleChange}
              />

              <InputField
                icon={<PhoneIcon fontSize="small" />}
                name="phone"
                placeholder="98XXXXXXXX"
                value={form.phone}
                error={errors.phone}
                onChange={handleChange}
              />

              <InputField
                icon={<SchoolIcon fontSize="small" />}
                name="education"
                placeholder="Education"
                value={form.education}
                error={errors.education}
                onChange={handleChange}
              />
              <div className="flex justify-end items-center">
                <button
                  disabled={isSubmitting}
                  className="w-45 bg-linear-to-r from-green-500 to-emerald-600 py-3 rounded-xl font-semibold gap-2 hover:scale-[1.02] active:scale-95 transition disabled:opacity-60"
                >
                  {isSubmitting ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>

          <div className="rounded-b-full flex items-center justify-center text-gray-300">
            <Image
              src={gallery9}
              width={500}
              height={399}
              alt="contact image"
              priority
              className="rounded-b-full shadow-2xl shadow-amber-200"
            />
          </div>
        </div>
      </div>
      <Toast.Root
        open={openToast}
        onOpenChange={setOpenToast}
        className="bg-green-600 text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3"
        duration={2500}
      >
        <CheckCircleIcon fontSize="small" />
        Contact saved successfully!
      </Toast.Root>

      <Toast.Viewport className="fixed bottom-5 top-30 right-4 flex flex-col gap-2 w-80 max-w-[100vw] outline-none" />
    </Toast.Provider>
  );
}

type InputProps = {
  icon: React.ReactNode;
  name: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function InputField({
  icon,
  name,
  placeholder,
  value,
  error,
  onChange,
}: InputProps) {
  return (
    <div>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-green-400">
          {icon}
        </div>
        <input
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full pl-10 px-4 py-3 rounded-xl text-black bg-white/5 border outline-none transition focus:ring-2 ${
            error
              ? "border-red-400 focus:ring-red-400"
              : "border-gray-400/30 focus:ring-green-400"
          }`}
        />
      </div>
      {error && <p className="text-red-300 text-xs mt-1">{error}</p>}
    </div>
  );
}
