import React from "react";
import style from "./page.module.css";

const Add = () => {
  return (
    <>
      
        <div className="flex items-center justify-end p-12 absolute left-[10px] top-20">
          <div className={style.incAnotherD}>
            <form
              action="https://project-e-ticket.vercel.app/home"
              method="GET"
            >
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  For Developer
                </label>
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Which action would you like to take?
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Example : Product Detail Page"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  What topic is this problem related to?
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Example : Backend or Frontend"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Urgency
                </label>
                <input
                  type="urgency"
                  name="urgency"
                  id="urgency"
                  placeholder="Example : Very Urgent"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Which developer do you want to send it to?
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Example : XXX - YYY - ZZZ"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Company Name
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter your company name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Message
                </label>
                <textarea
                  rows={1}
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
              </div>
              <div>
                <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="ml-52 w-[500px]">
            BU SAYFADA YAZILAN İÇERİK PROJECT MANAGERLAR TARAFINDAN YAZILDIKTAN
            SONRA BACKEND İŞLEMLERİYLE DEVELOPER HESABINA İLETİLECEK.
          </div>
        </div>
    </>
  );
};

export default Add;
