import React, { useCallback, useState, useEffect } from 'react'
import Layout from "../components/layout";
import ProgramDetails from "../components/scholarship/ProgramDetails";
import ApplicationProcess from "../components/scholarship/applicationProcess";
import TeamMembers from "../components/scholarship/teamMembers";
import Hero from "../components/scholarship/Hero";
import BenefitLayout from "../components/scholarship/BenefitLayout";

import Header from '../components/Header';
import ScholarshipFooter from '../components/scholarship/ScholarshipFooter';
const ScholarshipProgram = () => {
  const [countDownTime, setCountDownTime] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDifference = countDownTime - currentTime;

    if (timeDifference < 0) {
      clearInterval();
      setCountDownTime({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      });
    } else {
      let days = String(Math.floor(timeDifference / (24 * 60 * 60 * 1000))).padStart(2, '0');
      let hours = String(Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))).padStart(2, '0');
      let minutes = String(Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))).padStart(2, '0');
      let seconds = String(Math.floor((timeDifference % (60 * 1000)) / 1000)).padStart(2, '0');

      setCountDownTime({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  };

  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth() + 1,
      customDate.getDate() + 6,
      customDate.getHours(),
      customDate.getMinutes(),
      customDate.getSeconds() + 1
    );

    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, []);

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);

  return (
   <>
      <Header  />
        <main className='bg-white '>
          {/* di tambah hitung mundur hero */}
          <Hero />
          <BenefitLayout />
          <ProgramDetails />
          <ApplicationProcess />
        <div className='px-4 pt-4 py-12'>
          <div className='flex flex-col mb-4 gap-2'>
            <h3 className="text-2xl ">Kunjungi Kantor Kami:</h3>
            <p>Jika Anda ingin mengetahui lebih lanjut tentang program ini, silakan datang ke kantor kami.</p>
         </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7954.569627732937!2d120.31119743664728!3d-4.542669286548554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbde51284b44a99%3A0xde708c5d15eaab30!2sInstitut%20Indonesia!5e0!3m2!1sid!2sid!4v1698121193665!5m2!1sid!2sid"
            className="w-full h-80 md:h-96 aspect-w-16 aspect-h-9"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="fixed bottom-0 flex flex-col gap-4 items-center z-50 left-0 right-0 flex sticky items-center justify-between top-0 w-full z-20 border-b border-[#edf2f9] bg-white/70 px-3 lg:px-10 py-4 backdrop-blur-sm backdrop-saturate-[180%]  text-center justify-center">
          <div className='flex flex-col gap-4 justify-center items-center'>
            <a
              href="https://wa.me/6287842337112" // Replace with your WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 text-stone-50 justify-center items-center w-fit py-3 px-6 rounded-full mt-4 inline-block text-xl font-semibold hover:bg-blue-800"
            >
              Daftar Sekarang!
            </a>
            <div className="mx-3 sm:p-10 p-4 rounded-md flex justify-center flex-col gap-6 shadow-md ">
              {/* <div className="flex flex-col gap-2">
                <h1 className="text-center sm:text-3xl text-xl font-semibold leading-8 text-gray-200">
                  Daftar Segera!
                </h1>
              </div> */}
              <div className="flex justify-between sm:px-4 gap-4">
                <div className="flex flex-col justify-center items-center gap-3">
                  <span className="py-3 px-3 flex justify-center items-center bg-yellow-400 text-stone-50 text-3xl font-semibold rounded-md">
                    {countDownTime?.days}
                  </span>
                  <span className="text-sm text-stone-900 font-bold">
                    {countDownTime?.days === '01' ? 'Hari' : 'Hari'}
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center gap-3">
                  <span className="py-3 px-3 bg-yellow-400 text-stone-50 text-3xl font-semibold rounded-md">
                    {countDownTime?.hours}
                  </span>
                  <span className="text-sm text-stone-900 font-bold">
                    {countDownTime?.hours === '01' ? 'Jam' : 'Jam'}
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center gap-3">
                  <span className="py-3 px-3 bg-yellow-400 text-stone-50 text-3xl font-semibold rounded-md">
                    {countDownTime?.minutes}
                  </span>
                  <span className="text-sm text-stone-900 font-bold">
                    {countDownTime?.minutes === '01' ? 'Menit' : 'Menit'}
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center gap-3">
                  <span className="py-3 px-3 bg-yellow-400 text-stone-50 text-3xl font-semibold rounded-md">
                    {countDownTime?.seconds}
                  </span>
                  <span className="text-sm text-stone-900 font-bold">
                    {countDownTime?.seconds === '01' ? 'Detik' : 'Detik'}
                  </span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        </main>
      <ScholarshipFooter />
   </>
  )
}

export default ScholarshipProgram