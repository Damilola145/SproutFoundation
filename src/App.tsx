/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Programs from './components/Programs';
import Activities from './components/Activities';
import Donate from './components/Donate';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg selection:bg-brand-yellow selection:text-slate-900">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Mission />
        <Programs />
        <Activities />
        <Donate />
      </main>
      <Footer />
    </div>
  );
}
