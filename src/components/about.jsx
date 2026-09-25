import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import { aboutInfo } from '../assets/assets';

const about = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='about'
            className='py-20 bg-dark-300'
        >
            <div className='container mx-0 px-6'>

                <h2 className='text-3xl font-bold text-center mb-4'>
                    About <span className='text-emerald-400'>Me</span>
                </h2>

                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
                    Get to know more about my background and passion for development
                </p>

                <div className='flex flex-col md:flex-row items-center gap-12'>

                    <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.2 }}
                            className='w-full h-180 object-cover'
                            src={assets.profile}
                            alt="Profile"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='md:w-1/2'
                    >
                        <div className='rounded-2xl p-8'>

                            <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>

                            <p className='text-gray-300 mb-4'>
                                I am a BCA student and aspiring software developer with a strong interest in full-stack development.
                            </p>

                            <p className='text-gray-300 mb-12'>
                                I enjoy learning through projects and hands-on practice. I’m currently working with Java, Spring Boot, and React, and looking for an opportunity to learn and grow as a developer.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {
                                    aboutInfo.map((data, index) => (
                                        <div
                                            key={index}
                                            className="bg-dark-400 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                                        >
                                            <div className="text-emerald-400 text-4xl mb-4">
                                                <data.icon />
                                            </div>
                                            <h3 className="text-xl font-semibold mb-3">
                                                {data.title}
                                            </h3>
                                            <p className="text-gray-400">
                                                {data.description}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </motion.div>
    )
}

export default about;