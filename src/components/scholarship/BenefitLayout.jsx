import React from "react";
import { PersonCheck, PersonUp, PatchCheck, People, SignTurnRightFill, Reception3 } from 'react-bootstrap-icons';

const BenefitLayout = () => {
    const benefits = [
        {
            icon: <PersonCheck size={30} />,
            title: "Ilmu dan pengalaman",
            description: "Peserta akan mendapatkan ilmu dan pengalaman berharga.",
        },
        {
            icon: <PersonUp size={30} />,
            title: "Program pengembangan diri",
            description: "Peserta dapat mengikuti program pengembangan diri.",
        },
        {
            icon: <PatchCheck size={30} />,
            title: "Berbagai sertifikat",
            description: "Peserta berkesempatan untuk mendapatkan berbagai sertifikat.",
        },
        {
            icon: <People size={30} />,
            title: "Berkesempatan menjadi Tim Institut Indonesia",
            description: "Bagi peserta yang memenuhi syarat.",
        },
        {
            icon: <SignTurnRightFill size={30} />,
            title: "Kesempatan untuk dapat kuliah di destinasi perjalanan",
            description: "Explore new educational opportunities.",
        },
        {
            icon: <Reception3 size={30} />,
            title: "Memperluas relasi, jaringan, dan hubungan yang berharga",
            description: "Connect and expand your valuable network.",
        },
    ];

    return (
        <div className="p-8 shadow-md rounded-lg bg-white dark:bg-gray-800">
            <h2 className="text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-6">
                Benefit Bagi Peserta
            </h2>
            <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-4">
                        <div className="p-4 flex items-center justify-center rounded-full bg-blue-700 text-white">
                            {benefit.icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {benefit.description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BenefitLayout;
