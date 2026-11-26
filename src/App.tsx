/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { ClinicsSection } from './components/ClinicsSection';
import { PatientsSection } from './components/PatientsSection';
import { OralHealthSection } from './components/OralHealthSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#142B45]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ClinicsSection />
        <PatientsSection />
        <OralHealthSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
