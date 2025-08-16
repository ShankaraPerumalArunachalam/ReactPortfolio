import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";
import './RecruiterPage.css';
// A simple SVG icon component for skills section
const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);
const DbIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7s8 4 8 4s8-4 8-4" />
    </svg>
);
const ToolIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const RecruiterPage = ({ setView }) => {
    return (
        <div className="bg-gradient-to-br from-[#1d2b64] to-[#0d0d0d] min-h-screen w-full font-sans p-5 sm:p-10 overflow-auto">
            <div className="max-w-4xl mx-auto p-8 sm:p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">

                <Fade direction="down" triggerOnce>
                    <header className="text-center border-b border-green-500/30 pb-5 mb-8">
                        <img src="https://placehold.co/150x150/0d0d0d/00ff00?text=SP" alt="Shankara Perumal Profile" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-green-500/50" />
                        <h1 className="text-4xl sm:text-5xl font-bold text-green-400 text-shadow">Shankara Perumal Arunachalam</h1>
                        <p className="text-xl text-gray-300 mt-2">Web Developer</p>
                        <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 mt-4 text-sm text-gray-400">
                            <span>idofshankar@gmail.com</span>
                            <span className="hidden sm:inline">|</span>
                            <span>+91-7708830882</span>
                            <span className="hidden sm:inline">|</span>
                            <a href="https://www.linkedin.com/in/shankara-perumal-arunachalam-1b40b6187/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">LinkedIn</a>
                        </div>
                    </header>
                </Fade>

                <main>
                    <Slide direction="up" triggerOnce>
                        <section className="mb-8">
                            <h2 className="text-3xl font-semibold text-green-400 mb-4">Career Objective</h2>
                            <p className="text-gray-300 leading-relaxed">My objective is to use my skills in both front-end and back-end development to create innovative and user-interactive websites, contributing to the growth of a forward-thinking company.</p>
                        </section>
                    </Slide>
                    
                    <Slide direction="up" triggerOnce>
                        <section className="mb-8">
                            <h2 className="text-3xl font-semibold text-green-400 mb-4">Skills</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-green-500/5 p-5 rounded-lg border border-green-500/20">
                                    <CodeIcon />
                                    <h3 className="text-xl font-bold">Front-End</h3>
                                    <p className="text-gray-300 mt-2">ReactJS, Tailwind CSS, HTML5, CSS3, SASS, JavaScript, NodeJS, Bootstrap5</p>
                                </div>
                                <div className="bg-green-500/5 p-5 rounded-lg border border-green-500/20">
                                    <DbIcon />
                                    <h3 className="text-xl font-bold">Back-End & CMS</h3>
                                    <p className="text-gray-300 mt-2">SQLServer, MySQL, Episerver CMS</p>
                                </div>
                                <div className="bg-green-500/5 p-5 rounded-lg border border-green-500/20">
                                    <ToolIcon />
                                    <h3 className="text-xl font-bold">Tools</h3>
                                    <p className="text-gray-300 mt-2">Git, Adobe Photoshop, Adobe XD</p>
                                </div>
                            </div>
                        </section>
                    </Slide>

                    <Slide direction="up" triggerOnce>
                         <section className="mb-8">
                            <h2 className="text-3xl font-semibold text-green-400 mb-4">Work Experience</h2>
                            <div className="mb-6">
                                <h3 className="text-xl font-bold">Front End Developer</h3>
                                <p className="text-gray-400 italic my-1"><strong>Asign, Chennai</strong> | Feb. 2024 - Present</p>
                                <ul className="list-disc list-inside text-gray-300 space-y-1">
                                    <li>Converted a legacy PHP frontend to a modern, component-based React.js architecture.</li>
                                    <li>Built fully responsive designs ensuring optimal user experience across all devices.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Programmer-II</h3>
                                <p className="text-gray-400 italic my-1"><strong>Unique Force Technology Solutions, Chennai</strong> | Jan. 2020 - Nov. 2023</p>
                                <ul className="list-disc list-inside text-gray-300 space-y-1">
                                    <li>Developed UIs using JavaScript, HTML5, CSS3, SASS, and Bootstrap5.</li>
                                    <li>Successfully migrated ~20 websites from DNN CMS to EpiServer CMS.</li>
                                </ul>
                            </div>
                        </section>
                    </Slide>
                </main>

                <Fade direction="up" triggerOnce>
                    <footer className="text-center border-t border-green-500/30 pt-6 mt-8">
                         <button
                            onClick={() => setView('terminal')}
                            className="px-8 py-3 font-semibold text-white bg-white/10 border border-green-500/50 rounded-full shadow-lg hover:bg-green-500/20 hover:scale-105 transform transition-all duration-300"
                        >
                            Back to Terminal
                        </button>
                    </footer>
                </Fade>
            </div>
        </div>
    );
};

export default RecruiterPage;