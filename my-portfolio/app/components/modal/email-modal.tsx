"use client";

import Link from "next/link";
import {useModal} from '../../context/ModalContext';

export default function Modal() {
    const {isModalOpen, closeModal} = useModal();

    if (!isModalOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-10">
            <div className="p-8 border w-96 shadow-lg rounded-md bg-white dark:bg-slate-800">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Contact</h3>
                    <div className="mt-2 px-7 py-3">
                        <a href="mailto:kang158632@gmail.com"
                           className="text-lg text-gray-500 hover:underline hover:text-blue-400">
                            kang158632@gmail.com
                        </a>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={closeModal}
                            className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
