
"use client";

import { useState } from "react";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  comments: "",
};

export default function StayConnectedSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Message could not be sent");
      }

      setStatus("Your message has been sent successfully!");
      setForm(initialForm);
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "h-[56px] w-full rounded-[6px] border border-transparent bg-[#f6f7fb] px-6 text-[15px] text-[#222] outline-none transition-all duration-200 placeholder:text-[#8992a3] focus:border-[#fac609] focus:ring-2 focus:ring-[#fac609]/20";

  return (
    <section className="w-full bg-[#f5f8ee] py-12 md:py-16">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">

        {/* HEADING */}
        <div className="mx-auto mb-10 max-w-[740px] text-center">
          <h2 className="text-[36px] font-medium leading-tight tracking-[-0.5px] text-[#151515] sm:text-[46px] lg:text-[54px]">
            Stay Connected{" "}
            <span className="text-[#fac609]">With Us.</span>
          </h2>

          <p className="mt-5 text-[15px] leading-[1.55] text-[#777777] sm:text-[18px]">
            At <strong>Hi-Tech Engineering Solution</strong>, our goal
            is to make communication easy and professional.
            <br />
            Whether you need{" "}
            <strong>installation, technical support, or maintenance</strong>,
            our expert team is ready to help.
          </p>
        </div>

        {/* FORM AND MAP */}
        <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-2">

          {/* CONTACT FORM */}
          <div className="flex min-h-[620px] flex-col justify-end rounded-[11px] bg-[#092120] px-4 pb-4 pt-12 sm:px-5 sm:pb-5 lg:min-h-[630px]">

            <form onSubmit={handleSubmit} className="w-full">

              {/* TWO COLUMN FIELDS */}
              <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-[16px] font-medium text-white"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First name here"
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-[16px] font-medium text-white"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last name here"
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[16px] font-medium text-white"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Add email"
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-[16px] font-medium text-white"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* COMMENTS FIELD */}
              <div className="mt-5">
                <label
                  htmlFor="comments"
                  className="mb-2 block text-[16px] font-medium text-white"
                >
                  Comments / Questions{" "}
                  <span className="text-red-500">*</span>
                </label>

                <textarea
                  id="comments"
                  name="comments"
                  value={form.comments}
                  onChange={handleChange}
                  placeholder="Comments"
                  required
                  className="h-[192px] w-full resize-y rounded-[6px] border border-transparent bg-[#f6f7fb] px-6 py-5 text-[15px] text-[#222] outline-none transition-all duration-200 placeholder:text-[#8992a3] focus:border-[#fac609] focus:ring-2 focus:ring-[#fac609]/20"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="mt-4 inline-flex min-h-[47px] items-center justify-center rounded-[8px] bg-[#fac609] px-8 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#e6b500] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {/* SUBMISSION STATUS */}
              {status && (
                <p role="status" className="mt-3 text-sm text-white">
                  {status}
                </p>
              )}

            </form>
          </div>

          {/* GOOGLE MAP */}
          <div className="relative min-h-[450px] overflow-hidden rounded-[11px] bg-[#e7ece5] lg:min-h-[630px]">
            <iframe
              title="High Tech Engineering location - Islamabad"
              src="https://maps.google.com/maps?q=F-19%20Islamabad%20Pakistan&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

        </div>
      </div>
    </section>
  );
}
