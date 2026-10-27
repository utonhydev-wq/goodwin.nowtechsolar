/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MainAppCard } from './components/MainAppCard';
import { HowToStartSection } from './components/HowToStartSection';
import { SupportSection } from './components/SupportSection';
import { Footer } from './components/Footer';
import { IOSGuideModal } from './components/IOSGuideModal';
import { OfflineIndicator } from './components/OfflineIndicator';
import { PWAInstallBanner } from './components/PWAInstallBanner';

export default function App() {
  const [isIOSGuideOpen, setIsIOSGuideOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
      {/* Clean Top Navigation Bar */}
      <Header />

      {/* Main Content: Direct, simple, and uncluttered */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-3.5 sm:px-6 py-3 sm:py-6 flex flex-col gap-3">
        {/* Important Direct Notice */}
        <HeroSection />

        {/* Central App Access Card */}
        <MainAppCard />

        {/* 3 Direct Steps */}
        <HowToStartSection />

        {/* Direct WhatsApp Support */}
        <SupportSection />
      </main>

      {/* Clean Minimal Footer */}
      <Footer />

      {/* iOS Safari Home Screen Guide Modal */}
      <IOSGuideModal
        isOpen={isIOSGuideOpen}
        onClose={() => setIsIOSGuideOpen(false)}
      />

      {/* PWA Floating Install Prompt */}
      <PWAInstallBanner onOpenIOSGuide={() => setIsIOSGuideOpen(true)} />

      {/* Offline Status Toast */}
      <OfflineIndicator />
    </div>
  );
}
