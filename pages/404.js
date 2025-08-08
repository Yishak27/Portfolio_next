import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found - Ermiyas Damte Haile</title>
        <meta name="description" content="Page not found" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="App">
        <section className="w-full min-h-[60vh] flex flex-col items-center justify-center px-4 py-12">
          <div className="flex flex-col items-center gap-6 bg-gradient-to-br from-[var(--color-background-2)] rounded-2xl shadow p-10 max-w-lg">
            <h1 className="text-3xl font-bold text-[var(--color-primary)]">404 - Page Not Found</h1>
            <p className="text-lg text-gray-400 text-center">Sorry, the page you are looking for does not exist or has been moved.</p>
            <Link href="/" className="px-6 py-3 rounded-lg bg-[var(--color-primary)] text-[var(--color-secondary)] font-semibold hover:bg-[var(--color-botton)] transition-colors mt-4">Go Home</Link>
          </div>
        </section>
      </div>
    </>
  );
}