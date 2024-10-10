"use client"

import Link from "next/link";
import { SVGProps } from 'react';

export default function Footer(props: SVGProps<SVGSVGElement>) {
    return (
        <footer className="text-gray-600 body-font">
            <div className="bg-gray-100 dark:bg-slate-800">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <Link href="/"
                          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <span className="ml-3 text-xl dark:text-gray-50">Jiyeon&apos;s Portfolio</span>
                    </Link>
                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2024 Jiyeon&apos;s Portfolio
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a href="https://github.com/Jiyeon-Kang" target="_blank" className="ml-3 text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px"
                               viewBox="0 0 24 24" {...props}>
                              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></path>
                                  <path d="M14.333 19v-1.863c.025-.31-.018-.62-.126-.913a2.2 2.2 0 0 0-.5-.781c2.093-.227 4.293-1 4.293-4.544a3.48 3.48 0 0 0-1-2.434a3.2 3.2 0 0 0-.06-2.448s-.787-.227-2.607.961a9.15 9.15 0 0 0-4.666 0c-1.82-1.188-2.607-.96-2.607-.96A3.2 3.2 0 0 0 7 8.464a3.48 3.48 0 0 0-1 2.453c0 3.519 2.2 4.291 4.293 4.544a2.2 2.2 0 0 0-.496.773a2.1 2.1 0 0 0-.13.902V19"></path>
                                  <path d="M9.667 17.702c-2 .631-3.667 0-4.667-1.948"></path>
                              </g>
                          </svg>
                        </a>
                  </span>
                </div>
            </div>
        </footer>
    );
}