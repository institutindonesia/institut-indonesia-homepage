import React from "react";
import { CheckIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PersonCheck, PersonUp, PatchCheck, People, SignTurnRightFill,Reception3 } from 'react-bootstrap-icons';
// import { Card } from "flowbite-react";
// import { Listbox } from "@headlessui/react";

const BenefitLayout = () => {
    return (
        <div className="p-8 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Benefit Bagi Peserta
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-2">
                <li className="flex items-center gap-4">
                    <div className=" text-blue-700">
                        <PersonCheck size={50} />
                    </div>
                    Ilmu dan pengalaman: Peserta akan mendapatkan ilmu dan pengalaman berharga.
                </li>
                <li className="flex items-center gap-4">
                    <div className=" text-blue-700">
                        <PersonUp size={50} />
                    </div>
                    Program pengembangan diri: Peserta dapat mengikuti program pengembangan diri.
                </li>
                <li className="flex items-center gap-4">
                    <div className=" text-blue-700">
                        <PatchCheck size={50} />
                    </div>
                    Berbagai sertifikat: Peserta berkesempatan untuk mendapatkan berbagai sertifikat.
                </li>
                <li className="flex items-center gap-4">
                    <div className=" text-blue-700  ">
                        <People size={50} />
                    </div>
                    Berkesempatan menjadi Tim Institut Indonesia: Bagi peserta yang memenuhi syarat.
                </li>
                <li className="flex items-center gap-4">
                    <div className=" text-blue-600">
                        <SignTurnRightFill size={50} />
                    </div>
                    Kesempatan untuk dapat kuliah di destinasi perjalanan.
                </li>
                <li className="flex items-center gap-4">
                    <div className=" text-blue-700">
                        <Reception3 size={50} />
                    </div>
                    Memperluas relasi, jaringan, dan hubungan yang berharga.
                </li>
            </ul>
        </div>
    );
};

export default BenefitLayout;
