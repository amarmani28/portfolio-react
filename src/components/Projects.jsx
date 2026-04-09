import React from 'react'
import { motion } from 'framer-motion';
import { projects } from '../assets/assets';
import ProjectCart from './ProjectCart';
import { FaArrowRight } from 'react-icons/fa';

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            id='projects'
            className='py-20 bg-dark-300'
        >

            <div className='container mx-auto px-6'>

                {/* HEADING */}
                <h2 className='text-3xl font-bold text-center mb-4'>
                    My <span className='text-emerald-400'>Projects</span>
                </h2>

                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
                    A selection of my recent work
                </p>

                {/* PROJECT GRID */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                    {
                        projects.map((project, index) => (
                            <ProjectCart key={index} {...project} />
                        ))
                    }
                </div>

                {/* VIEW MORE BUTTON */}
                <div className='text-center mt-12'>
                    <a
                        href="#"
                        className='inline-flex items-center gap-2 px-6 py-3 
                        border border-emerald-400 rounded-lg font-medium 
                        hover:bg-emerald-400/20 active:scale-95 
                        transition-all duration-200'
                    >
                        <span>View More Projects</span>
                        <FaArrowRight />
                    </a>
                </div>

            </div>

        </motion.div >
    )
}

export default Projects;