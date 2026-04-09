import React from 'react'
import { motion as Motion } from 'framer-motion';
import { assets } from '../assets/assets';

const Hero = () => {
    return (
        <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='home'
            className="min-h-screen flex items-center pt-20 pb-16 bg-linear-to-r from-dark-100 via-dark-300 to-dark-100"
        >

            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

                {/* LEFT */}
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Hi, I'm <span className="text-emerald-400">Amarmani Tiwari</span>
                    </h1>

                    <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter ">
                        Software Developer
                    </h2>

                    <p className="text-lg text-gray-300 mb-8">
                        I build software that solves real problems, focusing on clean and reliable code.
                    </p>

                    <div className="flex space-x-4">
                        <a
                            href="#projects"
                            className="px-6 py-3 bg-emerald-500 rounded-lg font-medium hover:bg-emerald-600 transition duration-300"
                        >
                            View Work
                        </a>

                        <a
                            href="#contact"
                            className="px-6 py-3 border border-emerald-400 rounded-lg font-medium hover:bg-emerald-400/20 transition duration-300"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">

                        {/* SIMPLE BACKGROUND (no glow) */}
                        <div className="absolute inset-0 rounded-full bg-linear-to-r from-emerald-400 to-cyan-400 opacity-30"></div>

                        <Motion.img
                            src={assets.profile}
                            alt="Profile"
                            className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>
                </div>

            </div>
        </Motion.div>
    )
}

export default Hero;