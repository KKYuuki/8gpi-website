import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

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
    // Carousel state for projects
    const [projectsPerPage, setProjectsPerPage] = useState(3)
    const [curProjects, setCurProjects] = useState(projects)
    const [nextProjDir, setNextProjDir] = useState(1)

    function handleNextProject(direction: number) {
        if (direction === 1) {
            // Move top to bottom
            setCurProjects([...curProjects.slice(1), curProjects[0]])
            setNextProjDir(1)
        } else if (direction === -1) {
            // Move bottom to top
            setCurProjects([
                curProjects[curProjects.length - 1],
                ...curProjects.slice(0, curProjects.length - 1),
            ])
            setNextProjDir(-1)
        }
    }

    const animVariants = {
        enter: (nextProjDir: number) => {
            return {
                opacity: 0,
                x:
                    projectsPerPage !== 1
                        ? "0%"
                        : nextProjDir === 1
                        ? "100%"
                        : "-100%",
            }
        },
        center: {
            zIndex: 1,
            opacity: 1,
            x: '0%',
        },
        exit: (nextProjDir: number) => {
            return {
                zIndex: 0,
                opacity: 0,
                x:
                    projectsPerPage !== 1
                        ? "0%"
                        : nextProjDir === 1
                        ? "-100%"
                        : "100%",
            }
        },
    }

    useEffect(() => {
        if (window.innerWidth < 768) {
            setProjectsPerPage(1)
        } else {
            setProjectsPerPage(3)
        }
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setProjectsPerPage(1)
            } else {
                setProjectsPerPage(3)
            }
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <section className='py-20'>
            <div className='max-w-7xl mx-auto px-6 lg:px-8'>
                <div className='text-center mb-12'>
                    <h2 className='text-2xl md:text-3xl text-gray-600'>
                        See Our Work in Action
                    </h2>
                    <p className='text-lg md:text-2xl text-gray-600'>
                        Designed. Installed. Delivered with impact
                    </p>
                </div>

                <div className='relative'>
                    {/* Navigation Arrows */}
                    <button
                        onClick={() => handleNextProject(-1)}
                        className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 md:-translate-x-12 z-10 bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer'
                        aria-label='Previous projects'
                    >
                        <FiChevronLeft className='w-6 h-6 text-gray-700' />
                    </button>

                    <div className='relative w-full'>
                        <motion.div
                            layout
                            className='flex w-full'
                        >
                            <AnimatePresence
                                mode='popLayout'
                                custom={nextProjDir}
                                initial={false}
                            >
                                {curProjects
                                    .slice(0, projectsPerPage)
                                    .map((project) => (
                                        <motion.div
                                            key={project.description}
                                            className='w-full md:w-1/3 flex-shrink-0 px-3 mb-8'
                                            custom={nextProjDir}
                                            variants={animVariants}
                                            initial='enter'
                                            animate='center'
                                            exit='exit'
                                            layout
                                            transition={{
                                                ease: "circInOut",
                                            }}
                                        >
                                            <div className='group flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full border border-gray-100'>
                                                <div className='relative h-64 w-full overflow-hidden'>
                                                    <Image
                                                        src={project.image}
                                                        alt={`${project.title} - Solar Panel Installation Cebu | Cost of Solar Power Bacolod | Solar Maintenance Services Cebu City - facebook.com/8GenPower`}
                                                        fill
                                                        className='object-cover group-hover:scale-105 transition-transform duration-500'
                                                    />
                                                </div>
                                                <div className='p-6 flex flex-col flex-grow'>
                                                    <div className='flex justify-between items-start mb-3'>
                                                        <div className='flex items-center text-sm text-gray-500 rounded'>
                                                            <p>
                                                                📍{" "}
                                                                {
                                                                    project.location
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='mb-4'>
                                                        <p className='text-gray-600'>
                                                            {
                                                                project.description
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>

                    <button
                        onClick={() => handleNextProject(1)}
                        className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 md:translate-x-12 z-10 bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer'
                        aria-label='Next projects'
                    >
                        <FiChevronRight className='w-6 h-6 text-gray-700' />
                    </button>
                </div>
            </div>
        </section>
    )
}
