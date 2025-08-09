import React, { useState } from 'react';
import Link from 'next/link';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from '../themes/ThemeContext';

export default function NavBar() {
    const { theme, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full flex justify-center items-center py-2 bg-transparent">
            <div className="w-full max-w-3xl flex justify-between items-center relative px-4">
                <div className="flex-shrink-0">
                    <h1 className="font-bold text-2xl md:text-3xl">Ermiyas.dev</h1>
                </div>
                <button
                    className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Open menu"
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
                </button>
                <div className={`absolute md:static top-12 left-0 w-full md:w-auto bg-[var(--color-background-2)] md:bg-transparent shadow-md md:shadow-none rounded-b-md md:rounded-none z-20 transition-all duration-200 ${menuOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-center md:gap-8`}> 
                    <ul className="flex flex-col md:flex-row md:gap-8 gap-2 md:items-center md:justify-center px-4 md:px-0 py-2 md:py-0">
                        <li>
                            <a href="/Ermiyas Damte CV.pdf"
                            aria-label='Resume' target='_blank' className="nav-link py-2 md:py-0 text-sm hover:text-[var(--color-primary)]">
                            <h2 className="">Resume</h2>
                            </a>
                        </li>
                        <li>
                            <Link href="/support"
                             aria-label='Support' className="nav-link py-2 md:py-0 text-sm hover:text-[var(--color-primary)]">
                            <h2 className="">Support</h2>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact"
                             aria-label='Contact' className="nav-link py-2 md:py-0 text-sm hover:text-[var(--color-primary)]">
                            <h2 className="">Contact</h2>
                            </Link>
                        </li>
                    </ul>
                </div>            
                <button
                    className="ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                </button>
            </div>
        </nav>
    );
}