import React from 'react'
import Layout from "../components/layout";
import ProgramDetails from "../components/scholarship/ProgramDetails";
import ApplicationProcess from "../components/scholarship/applicationProcess";
import TeamMembers from "../components/scholarship/teamMembers";
import Hero from "../components/scholarship/Hero";


const ScholarshipProgram = () => {
  return (
    <Layout  >
      <main className='bg-white '>
        <Hero />
        <ProgramDetails />
        <ApplicationProcess />
        <TeamMembers />
      </main>
    </Layout>
  )
}

export default ScholarshipProgram