import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Whatsapp } from 'react-bootstrap-icons';
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
              <div className="flex flex-col gap-2 items-center py-12">
                    {/* <Link className="logo" to="/">
                        <Logo className="logo-image" />
                    </Link> */}
                    <div className="w-44 justify-center flex">
                        <StaticImage
                            src="../../images/scholarship/logoputih-MGS.png"
                            className="w-full h-full"
                            imgStyle={{ objectFit: "contain" }}
                            alt="Background"
                            placeholder="none"
                        />
                    </div>
              </div>
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
                        href="https://wa.me/6287842337112"
                        className="inline-flex justify-center items-center py-3 px-5 text-base gap-2 text-center bg-yellow-400 text-white rounded-lg font-bold hover:bg-yellow-500 focus:ring-4 hover:text-white w-fit  focus:ring-yellow-300 dark:focus:ring-yellow-600"
                    >
                        Hubungi
                        <Whatsapp />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
