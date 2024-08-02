'use client'

import {useEffect, useRef} from 'react';
import Link from 'next/link';
import animationData from '../../../public/Animation.json';
import Lottie from 'lottie-web'; // Ensure this import is correct

export default function Hero() {
    const animationContainer = useRef(null);

    useEffect(() => {
        // Load animation when component mounts
        const anim = Lottie.loadAnimation({
            container: animationContainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData,
        });

        // Clean up animation when component unmounts
        return () => {
            anim.destroy();
        };
    }, []);

    return (
        <>
            <div
                className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-50
                `}>Hello!
                    <br className="hidden lg:inline-block"/>I am Jiyeon
                </h1>
                <p className="mb-8 leading-relaxed">
                    Copper mug try-hard pitchfork pour-over freegan heirloom
                    neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag
                    selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                </p>
                <div className="flex justify-center">
                    <Link href="/projects" className="mr-5 hover:text-gray-900">
                        <button
                            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Show Projects
                        </button>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <div ref={animationContainer}></div>
            </div>
        </>
    );
}
