"use client";

// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import {useSearchParams} from 'next/navigation';
import Link from "next/link";
// @ts-expect-error TS(2307): Cannot find module '@/app/components/email' or its... Remove this comment to see the full error message
import Modal from "@/app/components/email"
// @ts-expect-error TS(6142): Module './dark-mode-toggle-button' was resolved to... Remove this comment to see the full error message
import DarkModeToggleButton from "./dark-mode-toggle-button"

export default function Header() {
    const searchParams = useSearchParams();
    const show = searchParams.get('show');
    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <header className="text-gray-600 body-font">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round"
                         strokeLinejoin="round" strokeWidth="2"
                         className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </svg>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <span className={`ml-3 text-xl text-gray-900 dark:text-gray-50`}>Jiyeon's Portfolio</span>
                </Link>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Link href="/" className="mr-5 hover:text-gray-900">
                        Home
                    </Link>

                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Link href="/projects" className="mr-5 hover:text-gray-900">
                        Projects
                    </Link>

                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Link href="/?show=true" className="mr-5 hover:text-gray-900">
                        Contact
                    </Link>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    {show && <Modal/>}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </nav>
                {/*{dark-mode-toggle-button}*/}
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <DarkModeToggleButton/>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </header>
    );
}
