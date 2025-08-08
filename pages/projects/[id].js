import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const projectDetails = {
  '1': {
    title: 'Banking App',
    description: 'A modern banking platform with real-time notifications, analytics, and secure transactions. Built with React, Node.js, and PostgreSQL.',
    image: '/logo.jpg',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    links: [
      { label: 'Demo', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
  },
  '2': {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my work, skills, and experience. Built with React and Tailwind CSS.',
    image: '/logo.jpg',
    tech: ['React', 'Tailwind CSS'],
    links: [
      { label: 'Live', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
  },
  '3': {
    title: 'E-commerce Platform',
    description: 'A scalable e-commerce solution with payment integration and admin dashboard. Built with Next.js and MongoDB.',
    image: '/logo.jpg',
    tech: ['Next.js', 'MongoDB', 'Stripe'],
    links: [
      { label: 'Demo', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
  },
  '4': {
    title: 'Mobile Banking App Redesign',
    description: 'Redesigned the mobile banking app for a seamless and modern user experience.',
    image: '/logo.jpg',
    tech: ['Figma', 'Adobe XD', 'User Research'],
    links: [
      { label: 'Figma', url: '#' },
    ],
  },
};

const projectOrder = ['1', '2', '3', '4'];

export default function ProjectDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const project = projectDetails[id];
  const idx = projectOrder.indexOf(id);
  const prevId = idx > 0 ? projectOrder[idx - 1] : null;
  const nextId = idx < projectOrder.length - 1 ? projectOrder[idx + 1] : null;

  if (!project) {
    return (
      <>
        <Head>
          <title>Project Not Found - Ermiyas Damte Haile</title>
        </Head>
        <div className="App">
          <div className="text-center py-20 text-2xl">Project not found.</div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} - Ermiyas Damte Haile</title>
        <meta name="description" content={project.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="App">
        <section className="w-full min-h-[60vh] flex flex-col items-center justify-center px-4 py-12">
          <div className="w-full max-w-3xl bg-gradient-to-br from-[var(--color-background-2)] rounded-2xl shadow-2xl p-0 flex flex-col overflow-hidden">
            {/* Back Button */}
            <button onClick={() => router.back()} className="flex items-center gap-2 px-4 py-2 m-4 rounded-lg bg-[var(--color-primary)] text-[var(--color-secondary)] font-semibold hover:bg-[var(--color-botton)] transition-colors w-fit">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
              Back
            </button>
            {/* Project Image */}
            <img src={project.image} loading='lazy' alt={project.title || 'Project Image'} className="w-full h-64 object-cover" />
            <div className="p-8 flex flex-col gap-4">
              <h2 className="text-3xl font-bold text-[var(--color-primary)]">{project.title}</h2>
              <p className="text-lg text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-[var(--color-botton)] text-white text-xs font-medium shadow">{tech}</span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                {project.links.map((link) => (
                  <a key={link.label}
                  aria-label='Links' href={link.url} target="_blank" rel="noopener noreferrer"
                   className="px-4 py-2 rounded-lg border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors">{link.label}</a>
                ))}
              </div>
              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => prevId && router.push(`/projects/${prevId}`)}
                  disabled={!prevId}
                  className={`px-4 py-2 rounded-lg border-2 font-semibold transition-colors ${prevId ? 'border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white' : 'border-gray-700 text-gray-500 cursor-not-allowed'}`}
                >
                  ← Previous
                </button>
                <button
                  onClick={() => nextId && router.push(`/projects/${nextId}`)}
                  disabled={!nextId}
                  className={`px-4 py-2 rounded-lg border-2 font-semibold transition-colors ${nextId ? 'border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white' : 'border-gray-700 text-gray-500 cursor-not-allowed'}`}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}