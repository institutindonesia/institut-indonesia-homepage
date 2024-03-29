import React from "react";
// import { Card, Timeline, Alert } from 'flowbite-react';

const ApplicationProcess = () => {
    return (
        <section className="my-8">
            <div className="">
                <div className="bg-white dark:bg-gray-900  rounded-lg">
                    <div className="p-8">
                        <h2 className="text-gray-800 dark:text-white mb-4 text-2xl">
                            Proses Pendaftaran
                        </h2>
                        <div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                            <span class="font-medium">Info alert!</span> Daftar Segera Sebelum Berakhir
                        </div>
                        <div className="space-y-4 text-gray-700 dark:text-gray-400">

                            <p>
                                Rencana Pelaksanaan: Estimasi pelaksanaan program ini yaitu pada 19 - 23 Februari 2024.
                            </p>
                            <p>
                                Pelaksana: Program ini dilaksanakan oleh Institut Indonesia.
                            </p>
                            <p>
                                Tahap Pelaksanaan:
                            </p>

                            <ol class="items-center flex flex-col md:grid md:grid-cols-3">
                                <li class="relative mb-6 sm:mb-0">
                                    <div class="flex items-center">
                                        <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                            </svg>
                                        </div>
                                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                    </div>
                                    <div class="mt-3 sm:pr-8">
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> Tahap pertama </h3>
                                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">23 Oktober - 30 November 2023</time>
                                        <p class="text-base font-normal text-gray-500 dark:text-gray-400"> Tahap pertama yaitu tahap publikasi informasi yang dilakukan secara online dan offline (23 Oktober - 30 November 2023).</p>
                                    </div>
                                </li>
                                <li class="relative mb-6 sm:mb-0">
                                    <div class="flex items-center">
                                        <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                            </svg>
                                        </div>
                                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                    </div>
                                    <div class="mt-3 sm:pr-8">
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Tahap kedua</h3>
                                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">December 23, 2021</time>
                                        <p class="text-base font-normal text-gray-500 dark:text-gray-400 ">
                                            <ul className="list-disc list-outside  dark:text-gray-400 space-y-2 ">

                                                Calon peserta diwajibkan untuk:

                                                <div className="pl-4 py-2">
                                                    <li>
                                                        Memposting foto (twibbon program) dilengkapi dengan caption yang diberikan oleh panitia di media sosial.
                                                    </li>
                                                    <li>
                                                        Menandai Instagram Institut Indonesia dan Instagram Millennial Global Scholarship.
                                                    </li>
                                                    <li>
                                                        Membagikan info program ini ke minimal 3 group WA.
                                                    </li>
                                                    <li>
                                                        Mengirimkan bukti pembagian ke panitia sebagai bukti verifikasi (23 Oktober - 10 Desember 2023).
                                                    </li>
                                               </div>

                                            </ul>
                                        </p>
                                    </div>
                                </li>
                                <li class="relative mb-6 sm:mb-0">
                                    <div class="flex items-center">
                                        <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                            </svg>
                                        </div>
                                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                    </div>
                                    <div class="mt-3 sm:pr-8">
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Tahap verifikasi</h3>
                                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">23 Oktober - 30 November 2023</time>
                                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Bagi peserta yang dinyatakan lolos verifikasi, maka selanjutnya akan dimasukkan ke dalam group peserta (Group WhatsApp). Target peserta yang lolos sampai pada tahap ini yaitu 5,000 Peserta.</p>
                                    </div>
                                </li>
                            </ol>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApplicationProcess;
