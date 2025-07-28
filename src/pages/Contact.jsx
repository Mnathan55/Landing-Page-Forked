import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [expanded, setExpanded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    mobile: "",
    company: "",
    service: "",
  });

  const services = [
    "Blockchain Development",
    "AI Development Services",
    "Game Development",
    "Crypto Exchange Development",
    "Web3 Development",
    "Web Design & Development",
    "iOS & Android App Development"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_q02dbtd", "template_ieixe8m", formData, "PFrEH18YugR5WDPtK")
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error.text);
        }
      );

    setClicked(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 -mt-10">
      <div className="max-w-xl w-full text-left transition-all duration-500 ease-in-out">
        <h1 className="text-6xl font-bold text-gray-900 mb-10 text-center">
          Let's Talk!
        </h1>

        <form onSubmit={sendEmail}>
          {/* Name */}
          <div className="mb-6">
            <label className="block text-xl font-semibold text-gray-900 mb-1">
              Hi! I am
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setExpanded(true)}
              placeholder="Your Name"
              className="w-full border-b border-gray-300 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-lg py-2 focus:border-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-xl font-semibold text-gray-900 mb-1">
              Reach me at
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="eg. hello@gmail.com"
              className="w-full border-b border-gray-300 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-lg py-2"
              required
            />
          </div>

          {expanded && (
            <>
              {/* Country */}
              <div className="mb-6">
                <label className="block text-xl font-semibold text-gray-900 mb-1">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="eg. India"
                  className="w-full border-b border-gray-300 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-lg py-2"
                  required
                />
              </div>

              {/* Mobile */}
              <div className="mb-6">
                <label className="block text-xl font-semibold text-gray-900 mb-1">
                  Mobile No.
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold text-lg">+91</span>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="98765 43210"
                    className="flex-1 border-b border-gray-300 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-lg py-2"
                    required
                  />
                </div>
              </div>

              {/* Company */}
              <div className="mb-6">
                <label className="block text-xl font-semibold text-gray-900 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="eg. Daflitech"
                  className="w-full border-b border-gray-300 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-lg py-2"
                  required
                />
              </div>

              {/* Services */}
              <div className="mb-4 font-semibold text-gray-900">Services Needed</div>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <button
                    type="button"
                    key={service}
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, service }))
                    }
                    className={`px-4 py-2 rounded-md border text-sm ${
                      formData.service === service
                        ? "bg-black text-white"
                        : "border-gray-300 text-gray-700 hover:bg-gray-100"
                    } transition`}
                  >
                    {service}
                  </button>
                ))}
              </div>

              {/* Send Button */}
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className={`px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300 ${
                    clicked
                      ? "bg-black text-white"
                      : "bg-white text-black border border-black"
                  }`}
                >
                  Send
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
