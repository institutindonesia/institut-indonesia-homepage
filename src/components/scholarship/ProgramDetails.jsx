import React from "react";
// import { InformationCircleIcon } from "@heroicons/react/solid";

const ProgramDetails = () => {
    return (
        <section className="my-8 p-8 bg-white dark:bg-gray-900 shadow-md rounded-lg">
            <div className="flex items-center mb-4">
                {/* <InformationCircleIcon className="w-8 h-8 mr-2 text-primary-600" /> */}
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Millenials Global Scholarship
                </h2>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-400 mb-4">
                Program ini merupakan program beasiswa dimana peserta program akan
                diberangkatkan ke Malaysia dan Singapura untuk melaksanakan Eduwisata
                selama 5 hari 4 malam dengan berbagai program.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-400 mb-4">
                <strong>Rencana Pelaksanaan:</strong> Estimasi pelaksanaan program ini
                yaitu pada 19 - 23 Februari 2024.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-400 mb-4">
                <strong>Pelaksana:</strong> Program ini dilaksanakan oleh Institut
                Indonesia.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-400 mb-4">
                <strong>Tahap Pelaksanaan:</strong>
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-400 mb-4">
                <strong>Tahap pertama:</strong> Tahap publikasi informasi yang dilakukan
                secara online dan offline (23 Oktober - 30 November 2023).
            </p>
        </section>
    );
};

export default ProgramDetails;
