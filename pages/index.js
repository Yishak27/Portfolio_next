import { Separator } from "@radix-ui/themes";
import NavBar from "../components/page/NavBar";
import { HomePage } from "../components/page/HomePage";
import { Divider } from "@mui/material";
import { FooterPage } from "../components/page/FooterPage";
import SkillsPage from "../components/page/SkillsPage";
import ContactPage from "../components/page/ContactPage";
import { useEffect, useState } from 'react';
import { lazy, Suspense } from "react";
import Head from 'next/head';

const ProjectsPage = lazy(() => import("../components/page/ProjectsPage"));
const ExperiencePage = lazy(() => import("../components/page/ExperiencePage"));

export default function Home() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Ermiyas Damte Haile</title>
        <meta name="description"
          content="My name is Ermiyas damte haile am a software engineer | Developer | UI/UX designer." />
        <meta name="author" content="Ermiyas Damte" />
        <meta name="creator" content="Ermiyas Damte" />
        <meta name="keywords" content="ermiyas, ermiyas damte, yishak, yishak27, ermi, ermiyas.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Ermiyas Damte Haile" />
        <meta property="og:description"
          content="My name is Ermiyas damte haile am a software engineer | Developer | UI/UX designer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ermiyas.dev" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ermiyas Damte Haile" />
        <meta name="twitter:description"
          content="My name is Ermiyas damte haile am a software engineer | Developer | UI/UX designer." />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <link rel="canonical" href="https://ermiyas.dev" />
        <link rel="author" href="https://www.linkedin.com/in/ermiyas-damte/" />

        {/* Social Media and Portfolio Links */}
        <link rel="me" href="https://github.com/ermiyas-damte" />
        <link rel="me" href="https://ermiyas.dev" />
        <link rel="me" href="https://t.me/ermiyas_damte" />
        <link rel="me" href="https://dribbble.com/ermiyas_damte" />
        <link rel="me" href="https://instagram.com/ermiyas_damte" />
        <link rel="me" href="https://www.linkedin.com/in/ermiyas-damte/" />

        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="google" content="notranslate" />
      </Head>
      <div onContextMenu={(e) => e.preventDefault()} className="App">
        <h1 className="visually-hidden hidden">Ermiyas Damte Haile - Software Engineer & UI/UX Designer</h1>
        <NavBar />
        <Divider />
        <HomePage />
        <Suspense fallback={<div className="text-center text-[var(--color-primary)]">Loading...</div>}>
          <ExperiencePage />
        </Suspense>
        <SkillsPage />
        <Suspense fallback={<div className="text-center text-[var(--color-primary)]">Loading...</div>}>
          <ProjectsPage />
        </Suspense>
        <ContactPage />
        {showTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 p-3 rounded-full shadow-lg bg-[var(--color-botton)] transition-colors"
            aria-label="Back to top"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 15l-6-6-6 6" /></svg>
          </button>
        )}
        <Separator style={{ width: "100%" }} mt={{ lg: "3", md: "2", sm: "2", xs: "2", xl: "4" }} />
        <FooterPage />
      </div>
    </>
  );
}