import React from 'react'
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='contact'
            className='py-20 bg-dark-100'
        >
            <div className='container mx-auto px-6'>

                {/* HEADING */}
                <h2 className='text-3xl font-bold text-center mb-4'>
                    Get In <span className='text-emerald-400'>Touch</span>
                </h2>


                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>

                    {/* FORM */}
                    <div>
                        <form className='space-y-6'>

                            <div>
                                <label className='block text-gray-400 mb-2'>Your Name</label>
                                <input
                                    className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-emerald-400'
                                    type="text"
                                />
                            </div>

                            <div>
                                <label className='block text-gray-400 mb-2'>Email Address</label>
                                <input
                                    className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-emerald-400'
                                    type="email"
                                />
                            </div>

                            <div>
                                <label className='block text-gray-400 mb-2'>Your Message</label>
                                <textarea
                                    className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-emerald-400'
                                />
                            </div>

                            <button
                                className='bg-emerald-500 hover:bg-emerald-600 active:scale-95 w-full font-bold py-3 px-6 rounded-lg transition-all duration-200'
                                type="submit"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>

                    {/* CONTACT INFO */}
                    <div className='space-y-8'>

                        <div className='flex items-start'>
                            <div className='text-emerald-400 text-2xl mr-4'>
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                                <p className='text-gray-400'>Delhi, Sonia Vihar</p>
                            </div>
                        </div>

                        <div className='flex items-start'>
                            <div className='text-emerald-400 text-2xl mr-4'>
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                                <p className='text-gray-400'>amarmani4282@gmail.com</p>
                            </div>
                        </div>

                        <div className='flex items-start'>
                            <div className='text-emerald-400 text-2xl mr-4'>
                                <FaPhone />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Phone Number</h3>
                                <p className='text-gray-400'>+91 9721468084</p>
                            </div>
                        </div>

                        {/* SOCIAL */}
                        <div className="pt-4">
                            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>

                            <div className="flex space-x-4">

                                <a
                                    href="https://github.com/amarmani28"
                                    target="_blank"
                                    className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-white hover:bg-emerald-500 transition duration-300"
                                >
                                    <FaGithub />
                                </a>

                                <a
                                    href="https://linkedin.com/in/amarmani-tiwari4282"
                                    target="_blank"
                                    className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-white hover:bg-emerald-500 transition duration-300"
                                >
                                    <FaLinkedin />
                                </a>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </motion.div>
    )
}

export default Contact;