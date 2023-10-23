import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Logo from "../../assets/logoFull.inline.svg";

const Hero = () => {
    return (
        <section className="relative bg-white dark:bg-gray-900">
            {/* Background image */}
            <StaticImage
                src="../../images/scholarship/hero.avif"
                className="absolute inset-0 w-full h-full z-0"
                imgStyle={{ objectFit: "cover" }}
                alt="Background"
                placeholder="none"
            />

            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 relative z-20">
                <Link className="logo" to="/">
                    <Logo className="logo-image" />
                </Link>
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl text-white">
                    Millenials Global Scholarship
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-100 lg:text-xl sm:px-16 xl:px-48 ">
                    Program ini merupakan program beasiswa dimana peserta program akan
                    diberangkatkan ke Malaysia dan Singapura untuk melaksanakan Eduwisata
                    selama 5 hari 4 malam dengan berbagai program.
                </p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 text-gray-100 items-center">
                    <a
                        href="#"
                        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center bg-blue-800 text-white rounded-lg  hover:bg-blue-900 focus:ring-4 hover:text-white w-fit  focus:ring-blue-300 dark:focus:ring-blue-900"
                    >
                        Learn more
                        <svg
                            className="ml-2 -mr-1 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
