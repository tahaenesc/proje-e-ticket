import { CustomerPriceTable } from "@/components/CustomerPriceTable";
import { Checkbox } from "flowbite-react";

export default async function Customer() {
  return (
    <>
      <div className="flex m-16 ">
        <div className="w-[40%]">
          <form action="https://project-e-ticket.vercel.app/home" method="GET">
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                For Customer
              </label>
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Which action would you like to take?
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Example : Product Detail Page or E-trade Website"
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
                placeholder="Example : Very Urgent or 10 day"
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
        <div className="ml-20 w-[500px] mb-[350px]">
          <div className="">
            BU SAYFADA YAZILAN İÇERİK MÜŞTERİLER TARAFINDAN YAZILDIKTAN SONRA
            BACKEND İŞLEMLERİYLE PROJECT MANAGER HESABINA İLETİLECEK.
          </div>
          <div className="mt-10">
            <label className="text-base font-medium text-[#07074D]">
              TERMS OF THE DEAL
            </label>
            <div className="mt-10">
              <Checkbox />
              <label className="text-base font-medium text-[#07074D] ml-5">
                GOOGLE REKLAM EĞİTİMİ
              </label>
            </div>
            <div className="mt-5">
              <Checkbox />
              <label className="text-base font-medium text-[#07074D] ml-5">
                PATCH SONRASI MESAJ BİLDİRİMİ
              </label>
            </div>
            <div className="mt-5">
              <Checkbox />
              <label className="text-base font-medium text-[#07074D] ml-5">
                WEBSİTESİ İÇİN BOT EĞİTİMİ
              </label>
            </div>
            <div className="mt-5">
              
              <label className="text-base font-medium text-[#07074D] ml-5">
                ÜCRETLENDİRME AŞAĞIDAKİ TABLODA BELİRTİLMİŞTİR.
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex m-16 "><CustomerPriceTable/></div>
    </>
  );
}
