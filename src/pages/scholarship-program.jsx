import React from 'react'
import Layout from "../components/layout";
import ProgramDetails from "../components/scholarship/ProgramDetails";
import ApplicationProcess from "../components/scholarship/applicationProcess";
import TeamMembers from "../components/scholarship/teamMembers";
import Hero from "../components/scholarship/Hero";
import BenefitLayout from "../components/scholarship/BenefitLayout";


const ScholarshipProgram = () => {
  return (
    <Layout  >
      <main className='bg-white '>
        {/* di tambah hitung mundur hero */}
        <Hero />
        <BenefitLayout />
        <ProgramDetails />
        <ApplicationProcess />
      </main>
    </Layout>
  )
}

export default ScholarshipProgram