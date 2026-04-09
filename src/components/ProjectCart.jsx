import React from 'react'

const ProjectCart = ({ title, description, image, tech, demo, code }) => {
    return (
        <div className='bg-dark-400 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-lg hover:shadow-emerald-500/20 transition duration-300 cursor-pointer'>

            <img src={image} alt={title} className='w-full h-60 object-cover' />

            <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2'>{title}</h3>
                <p className='text-gray-400 mb-4'>{description}</p>

                <div className='flex flex-wrap gap-2 mb-4'>
                    {tech.map((item, index) => (
                        <span
                            key={index}
                            className='px-3 py-1 bg-dark-400 rounded-full text-sm hover:bg-emerald-400/20 transition'
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            <div className='flex gap-2 p-4'>
                <a
                    href={demo}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 text-center px-4 py-2 bg-emerald-500 rounded-lg font-medium 
                    hover:bg-emerald-600 active:scale-95 
                    transition-all duration-200 shadow-md hover:shadow-emerald-500/30'
                >
                    View Demo
                </a>

                <a
                    href={code}
                    target='_blank'
                    rel='noopener noreferrer'
                    className="flex-1 text-center px-4 py-2 border border-emerald-400 font-medium rounded-lg 
                    hover:bg-emerald-400/20 active:scale-95 
                    transition-all duration-200"
                >
                    Code
                </a>
            </div>

        </div>
    );
};

export default ProjectCart;