import React from "react";
import { Card, Timeline, Alert } from 'flowbite-react';

const ApplicationProcess = () => {
    return (
        <section className="my-8">
            <div className="px-10">
                <Card className="bg-white dark:bg-gray-900 shadow-md rounded-lg">
                    <div className="p-8">
                        <h2 size="2xl" className="text-gray-800 dark:text-white mb-4">
                            Application Process
                        </h2>
                        <div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                            <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
                        </div>
                        <div className="space-y-4 text-gray-700 dark:text-gray-400">
                            <div className="flex items-center">
                                <p>
                                    Nama Program: <strong>Millenials Global Scholarship</strong>
                                </p>
                            </div>
                            <p>
                                Deskripsi: Program ini merupakan program beasiswa di mana peserta program akan diberangkatkan ke Malaysia dan Singapura untuk melaksanakan Eduwisata selama 5 hari 4 malam dengan berbagai program.
                            </p>
                            <p>
                                Rencana Pelaksanaan: Estimasi pelaksanaan program ini yaitu pada 19 - 23 Februari 2024.
                            </p>
                            <p>
                                Pelaksana: Program ini dilaksanakan oleh Institut Indonesia.
                            </p>
                            <p>
                                Tahap Pelaksanaan:
                            </p>
                            
                            <ol class="items-center grid md:grid-cols-3">
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
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.0</h3>
                                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 23, 2021</time>
                                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
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
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.3.0</h3>
                                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 5, 2022</time>
                                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
                                    </div>
                                </li>
                            </ol>
                            <Timeline horizontal className="flex" >
                                <Timeline.Item>
                                    {/* <Timeline.Point icon={HiCalendar} /> */}
                                    <Timeline.Content>
                                        <Timeline.Title>
                                            Tahap pertama 
                                        </Timeline.Title>
                                        <Timeline.Time>
                                            23 Oktober - 30 November 2023
                                        </Timeline.Time>
                                        <Timeline.Body>
                                            Tahap pertama yaitu tahap publikasi informasi yang dilakukan secara online dan offline (23 Oktober - 30 November 2023).
                                        </Timeline.Body>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    {/* <Timeline.Point icon={HiCalendar} /> */}
                                    <Timeline.Content>
                                        <Timeline.Title>
                                            Tahap kedua
                                        </Timeline.Title>
                                        <Timeline.Time>
                                            23 Oktober - 10 Desember 2023
                                        </Timeline.Time>
                                        <Timeline.Body>
                                            Tahap kedua yaitu tahap pendaftaran peserta. Pada tahap ini, calon peserta diwajibkan untuk memposting foto (twibbon program) dilengkapi dengan caption yang diberikan oleh panitia di media sosial serta peserta dengan menandai Instagram Institut Indonesia dan Instagram Millennial Global Scholarship. Selain memposting di Instagram, calon peserta diwajibakan membagikan info program ini ke minimal 3 group WA, kemudian bukti pembagian nya wajib dikirimkan ke panitia sebagai bukti verifikasi (23 Oktober - 10 Desember 2023).
                                        </Timeline.Body>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    {/* <Timeline.Point icon={HiCalendar} /> */}
                                    <Timeline.Content>
                                        <Timeline.Title>
                                            Tahap verifikasi
                                        </Timeline.Title>
                                        <Timeline.Time>
                                            23 Oktober - 10 Desember 2023
                                        </Timeline.Time>
                                        <Timeline.Body>
                                            Bagi peserta yang dinyatakan lolos verifikasi, maka selanjutnya akan dimasukkan ke dalam group peserta (Group WhatsApp). Target peserta yang lolos sampai pada tahap ini yaitu 5,000 Peserta.
                                        </Timeline.Body>
                                    </Timeline.Content>
                                </Timeline.Item>
                            </Timeline>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default ApplicationProcess;
