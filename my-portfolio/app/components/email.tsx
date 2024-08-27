import Link from "next/link";
import "../styles/globals.css";

export default function Modal() {

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center ㅋ
        z-10">
            <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900">Contact</h3>
                    <div className="mt-2 px-7 py-3">
                        <a href="mailto:info@mailgo.dev"
                           className="text-lg text-gray-500 hover:underline hover:text-blue-400">kang158632@gmail.com</a>
                    </div>
                    <div className="flex justify-center mt-4">
                        <Link
                            href="/"
                            className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        >
                            // @ts-expect-error TS(2304): Cannot find name 'Close'.
                            Close
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}