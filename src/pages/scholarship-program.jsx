import React from 'react'
import Layout from "../components/layout";
import ProgramDetails from "../components/scholarship/ProgramDetails";
import ApplicationProcess from "../components/scholarship/applicationProcess";
import TeamMembers from "../components/scholarship/teamMembers";
import Hero from "../components/scholarship/Hero";
import BenefitLayout from "../components/scholarship/BenefitLayout";

import Header from '../components/Header';
import Footer from '../components/footer';
const ScholarshipProgram = () => {
  return (
   <>
      <Header  />
        <main className='bg-white '>
          {/* di tambah hitung mundur hero */}
          <Hero />
          <BenefitLayout />
          <ProgramDetails />
          <ApplicationProcess />
        </main>
      <Footer/>
   </>
  )
}

export default ScholarshipProgram