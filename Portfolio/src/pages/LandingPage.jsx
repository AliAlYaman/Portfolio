import React, { lazy, Suspense } from 'react';
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { FeaturedProjects } from '../components/Projects';
import { About } from '../components/About';

const Contact = lazy(() => import("../components/Contact").then(module => ({default: module.Contact})))
export const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col mx-24">
        <Navbar />
        <HeroSection />
        <FeaturedProjects/>
        <About/>
        <Suspense fallback={<div>Loading Sections...</div>}>
            <Contact />
        </Suspense>
      </div>
    </>
  );
};
