"use client"

import Link from "next/link";

export default function Footer() {
    return (
        // @ts-expect-error TS(2304): Cannot find name 'footer'.
        <footer className="text-gray-600 body-font">
            // @ts-expect-error TS(2304): Cannot find name 'div'.
            <div className="bg-gray-100 dark:bg-slate-800">
                // @ts-expect-error TS(2304): Cannot find name 'div'.
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
                    <Link href="/"
                          // @ts-expect-error TS(2304): Cannot find name 'className'.
                          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        // @ts-expect-error TS(2304): Cannot find name 'span'.
                        <span className="ml-3 text-xl dark:text-gray-50">Jiyeon's Portfolio</span>
                    </Link>
                    // @ts-expect-error TS(2304): Cannot find name 'p'.
                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2024 Jiyeon's Portfolio —
                        // @ts-expect-error TS(2304): Cannot find name 'a'.
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1"
                           // @ts-expect-error TS(2304): Cannot find name 'target'.
                           target="_blank">@knyttneve</a>
                    </p>
                    // @ts-expect-error TS(2304): Cannot find name 'span'.
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        // @ts-expect-error TS(2304): Cannot find name 'a'.
                        <a className="ml-3 text-gray-500">
                          // @ts-expect-error TS(2304): Cannot find name 'svg'.
                          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                               // @ts-expect-error TS(2304): Cannot find name 'strokeWidth'.
                               strokeWidth="2"
                               // @ts-expect-error TS(2304): Cannot find name 'className'.
                               className="w-5 h-5" viewBox="0 0 24 24">
                            // @ts-expect-error TS(2304): Cannot find name 'rect'.
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            // @ts-expect-error TS(2304): Cannot find name 'path'.
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                          </svg>
                        </a>
                        // @ts-expect-error TS(2304): Cannot find name 'a'.
                        <a className="ml-3 text-gray-500">
                          // @ts-expect-error TS(2304): Cannot find name 'svg'.
                          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                               // @ts-expect-error TS(2304): Cannot find name 'strokeWidth'.
                               strokeWidth="0"
                               // @ts-expect-error TS(2304): Cannot find name 'className'.
                               className="w-5 h-5" viewBox="0 0 24 24">
                            // @ts-expect-error TS(2304): Cannot find name 'path'.
                            <path stroke="none"
                                  // @ts-expect-error TS(2304): Cannot find name 'd'.
                                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                            // @ts-expect-error TS(2304): Cannot find name 'circle'.
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                          </svg>
                        </a>
                  </span>
                </div>
            </div>
        </footer>
    );
}