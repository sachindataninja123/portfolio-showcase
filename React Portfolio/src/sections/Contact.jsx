import React, { useState } from "react";
import ParticleBackground from "../components/ParticleBackground";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Astra from "../assets/Astra.png";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    idea: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = () => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: " " }));
  };

  const formValidate = () => {
    const required = ["name", "email", "service", "idea"];
    const newErrors = {};
    required.forEach(
      (f) => !formData[f].trim() && (newErrors[f] = "Fill this field"),
    );
    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formValidate()) return;
    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...formData,
          from_name: formData.name,
          reply_to: formData.email,
        },
        PUBLIC_KEY,
      );
      setStatus("Success");
      setFormData({
        name: "",
        email: "",
        service: "",
        idea: "",
      });
    } catch (err) {
      console.log("EmailJS Error : ", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-black overflow-hidden text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
    >
      <ParticleBackground />
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-10">
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={Astra}
            alt="astra"
            className="w-72 md:w-140 rounded-2xl shadow-lg object-cover"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* right side start */}

        <motion.div
          className="w-full md:w-1/2 bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Your Name"
                onChange={handleChange}
                className={`p-3 rounded-md bg-white/10 border ${errors.name ? "bg-red-500" : "border-gray-500"} text-white focus:outline-none focus:border-blue-500`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="mb-1">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Your Email"
                onChange={handleChange}
                className={`p-3 rounded-md bg-white/10 border ${errors.email ? "bg-red-500" : "border-gray-500"} text-white focus:outline-none focus:border-blue-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="mb-1">
                Services Needed<span className="text-red-500">*</span>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`p-3 rounded-md bg-white/10 border ${
                  errors.service ? "border-red-500" : "border-gray-500"
                } text-white focus:outline-none focus:border-blue-500`}
              >
                <option value="" disabled>
                  Something in mind?
                </option>
                <option value="Frontend developer" className="text-black">
                  Frontend Development
                </option>
                <option value="web development" className="text-black">
                  Web Development
                </option>
                <option value="others" className="text-black">
                  Others
                </option>
              </select>

              {errors.service && (
                <p className="text-red-500 text-xs">{errors.service}</p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
