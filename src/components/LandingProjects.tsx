import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState, useCallback } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const CARD_WIDTH = 350 // Fixed width for each card in pixels

export default function LandingProjects({
    projects,
}: {
    projects: {
        id: number
        title: string
        description: string
        image: string
        location: string
    }[]
}) {
    const [projectsPerPage, setProjectsPerPage] = useState(3)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    // Calculate the number of projects to show based on screen width
    const updateProjectsPerPage = useCallback(() => {
        setProjectsPerPage(window.innerWidth < 768 ? 1 : 3)
    }, [])

    // Handle window resize
    useEffect(() => {
        updateProjectsPerPage()
        window.addEventListener("resize", updateProjectsPerPage)
        return () => window.removeEventListener("resize", updateProjectsPerPage)
    }, [updateProjectsPerPage])

    // Handle navigation with infinite loop
    const handleNextProject = useCallback((direction: number) => {
        if (isAnimating) return;
        
        setIsAnimating(true);
        setCurrentIndex(prev => {
            const totalProjects = projects.length;
            let nextIndex = prev + (direction * projectsPerPage);
            
            // Handle infinite scroll
            if (nextIndex >= totalProjects) {
                return 0; // Loop back to start
            } else if (nextIndex < 0) {
                // Calculate the start index of the last complete page
                const lastPageStart = totalProjects - (totalProjects % projectsPerPage || projectsPerPage);
                return Math.max(0, lastPageStart);
            }
            
            return nextIndex;
        });
        
        // Reset animation flag after transition
        setTimeout(() => setIsAnimating(false), 500);
    }, [isAnimating, projects.length, projectsPerPage]);
    
    // Auto-advance to next set of projects
    useEffect(() => {
        if (projects.length <= projectsPerPage) return;
        
        const timer = setInterval(() => {
            handleNextProject(1);
        }, 5000); // Change slide every 5 seconds
        
        return () => clearInterval(timer);
    }, [handleNextProject, projects.length, projectsPerPage]);

    // Calculate visible projects based on current index
    const getVisibleProjects = useCallback(() => {
        const totalProjects = projects.length;
        let endIndex = currentIndex + projectsPerPage;
        
        // Handle wrapping around the array
        if (endIndex > totalProjects) {
            const overflow = endIndex - totalProjects;
            return [
                ...projects.slice(currentIndex, totalProjects),
                ...projects.slice(0, overflow)
            ];
        }
        
        return projects.slice(currentIndex, endIndex);
    }, [currentIndex, projects, projectsPerPage]);


    return (
        <section className='py-20 overflow-hidden'>
            <div className='max-w-7xl mx-auto px-6 lg:px-8'>
                <div className='text-center mb-12'>
                    <h2 className='text-2xl md:text-3xl text-gray-600'>
                        See Our Work in Action
                    </h2>
                    <p className='text-lg md:text-2xl text-gray-600'>
                        Designed. Installed. Delivered with impact
                    </p>
                </div>

                <div className='relative px-12 md:px-16'>
                    {/* Navigation Arrows */}
                    <button
                        onClick={() => handleNextProject(-1)}
                        className='absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md flex items-center justify-center transition-colors focus:outline-none bg-white hover:bg-gray-100 cursor-pointer'
                        aria-label='Previous projects'
                    >
                        <FiChevronLeft className='w-5 h-5 md:w-6 md:h-6 text-gray-700' />
                    </button>

                    <div className='relative w-full overflow-hidden'>
                        <div className='w-full flex justify-center'>
                            <AnimatePresence mode='popLayout' initial={false} custom={1}>
                                <motion.div 
                                    key={currentIndex}
                                    className='flex gap-6 py-4 px-2'
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    custom={1}
                                    variants={{
                                        enter: { opacity: 0 },
                                        center: { 
                                            opacity: 1,
                                            transition: { 
                                                staggerChildren: 0.1,
                                                delayChildren: 0.1
                                            } 
                                        },
                                        exit: { opacity: 0 }
                                    }}
                                >
                                    {getVisibleProjects().map((project, index) => (
                                        <motion.div
                                            key={`${project.id}-${currentIndex}-${index}`}
                                            className='flex-shrink-0'
                                            style={{
                                                width: `${CARD_WIDTH}px`,
                                                maxWidth: 'calc(100vw - 6rem)'
                                            }}
                                            custom={index}
                                            variants={{
                                                enter: { opacity: 0, x: 100 },
                                                center: { 
                                                    opacity: 1, 
                                                    x: 0,
                                                    transition: { 
                                                        type: 'spring',
                                                        stiffness: 300,
                                                        damping: 30
                                                    }
                                                },
                                                exit: { opacity: 0, x: -100 }
                                            }}
                                        >
                                            <div className='group flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full border border-gray-100 mx-auto'>
                                                <div className='relative h-64 w-full overflow-hidden'>
                                                    <Image
                                                        src={project.image}
                                                        alt={`${project.title} - Solar Panel Installation Cebu | Cost of Solar Power Bacolod | Solar Maintenance Services Cebu City - facebook.com/8GenPower`}
                                                        fill
                                                        className='object-cover group-hover:scale-105 transition-transform duration-500'
                                                        sizes='(max-width: 768px) 90vw, 33vw'
                                                        priority={index < 3}
                                                    />
                                                </div>
                                                <div className='p-6 flex flex-col flex-grow'>
                                                    <div className='flex justify-between items-start mb-3'>
                                                        <div className='flex items-center text-sm text-gray-500 rounded'>
                                                            <p>📍 {project.location}</p>
                                                        </div>
                                                    </div>
                                                    <div className='mb-4'>
                                                        <h3 className='text-lg font-semibold text-gray-800 mb-1'>{project.title}</h3>
                                                        <p className='text-gray-600 text-sm'>{project.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    <button
                        onClick={() => handleNextProject(1)}
                        className='absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md flex items-center justify-center transition-colors focus:outline-none bg-white hover:bg-gray-100 cursor-pointer'
                        aria-label='Next projects'
                    >
                        <FiChevronRight className='w-5 h-5 md:w-6 md:h-6 text-gray-700' />
                    </button>
                </div>
            </div>
        </section>
    )
}
