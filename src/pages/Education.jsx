import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Education = () => {
    return (
        <div>
            <Navbar />

            {/* Page header */}
            <div className="hero-section">
                <h1 className="text-5xl font-bold mb-4">Educational Resources</h1>
                <p className="text-xl text-gray-200">Learn sign language and improve your communication skills</p>
            </div>

            {/* Introduction */}
            <div className="section">
                <h2 className="text-4xl font-bold text-[#003366] mb-6">Welcome to Our Learning Center</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Whether you are new to sign language or looking to enhance your skills, our comprehensive educational resources are designed to help you communicate effectively with the deaf and hard-of-hearing community. Explore video tutorials, downloadable guides, and interactive learning tools.
                </p>
            </div>

            {/* Video tutorials section */}
            <div className="section bg-gray-50">
                <h2 className="text-4xl font-bold text-[#003366] mb-6">Video Tutorials</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Watch our step-by-step video tutorials to learn essential sign language phrases and communication techniques.
                </p>
                <div className="w-full flex gap-6 flex-wrap justify-center">
                    <div className="card" style={{ flex: 1, minWidth: '280px', maxWidth: '350px' }}>
                        <img src="/assets/yk7rAbMNoHMn.jpg" alt="ASL Introduction" className="rounded-lg w-full mb-4" />
                        <h3 className="text-xl font-semibold text-[#0066cc] mb-2">Introduction to ASL</h3>
                        <p className="text-gray-700 mb-3">
                            Learn the basics of American Sign Language, including the alphabet and common greetings.
                        </p>
                        <button onClick={() => alert('Opening tutorial...')} className="btn-secondary">
                            Watch Tutorial
                        </button>
                    </div>

                    <div className="card" style={{ flex: 1, minWidth: '280px', maxWidth: '350px' }}>
                        <img src="/assets/6f4b6mSodwg3.jpg" alt="Everyday Conversations" className="rounded-lg w-full mb-4" />
                        <h3 className="text-xl font-semibold text-[#0066cc] mb-2">Everyday Conversations</h3>
                        <p className="text-gray-700 mb-3">
                            Master common phrases used in daily conversations, from introductions to asking questions.
                        </p>
                        <button onClick={() => alert('Opening tutorial...')} className="btn-secondary">
                            Watch Tutorial
                        </button>
                    </div>

                    <div className="card" style={{ flex: 1, minWidth: '280px', maxWidth: '350px' }}>
                        <img src="/assets/WKSKB1WSQYkZ.jpg" alt="Advanced Techniques" className="rounded-lg w-full mb-4" />
                        <h3 className="text-xl font-semibold text-[#0066cc] mb-2">Advanced Techniques</h3>
                        <p className="text-gray-700 mb-3">
                            Explore advanced signing techniques and learn how to express complex ideas and emotions.
                        </p>
                        <button onClick={() => alert('Opening tutorial...')} className="btn-secondary">
                            Watch Tutorial
                        </button>
                    </div>
                </div>
            </div>

            {/* Downloadable resources */}
            <div className="section">
                <h2 className="text-4xl font-bold text-[#003366] mb-6">Downloadable Resources</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Access our library of PDF guides, worksheets, and visual learning aids to support your learning journey.
                </p>
                <div className="w-full flex gap-6 flex-wrap">
                    <div className="card" style={{ flex: 1, minWidth: '250px' }}>
                        <h3 className="text-xl font-semibold text-[#0066cc] mb-2">ASL Alphabet Guide</h3>
                        <p className="text-gray-700 mb-3">
                            A comprehensive PDF guide to the American Sign Language alphabet with illustrations.
                        </p>
                        <button onClick={() => alert('Downloading...')} className="btn-primary">
                            Download PDF
                        </button>
                    </div>

                    <div className="card" style={{ flex: 1, minWidth: '250px' }}>
                        <h3 className="text-xl font-semibold text-[#0066cc] mb-2">Common Phrases Workbook</h3>
                        <p className="text-gray-700 mb-3">
                            Practice common sign language phrases with our interactive workbook and exercises.
                        </p>
                        <button onClick={() => alert('Downloading...')} className="btn-primary">
                            Download PDF
                        </button>
                    </div>

                    <div className="card" style={{ flex: 1, minWidth: '250px' }}>
                        <h3 className="text-xl font-semibold text-[#0066cc] mb-2">Communication Etiquette Guide</h3>
                        <p className="text-gray-700 mb-3">
                            Learn best practices for communicating respectfully with deaf and hard-of-hearing individuals.
                        </p>
                        <button onClick={() => alert('Downloading...')} className="btn-primary">
                            Download PDF
                        </button>
                    </div>
                </div>
            </div>

            {/* Interactive section - Common phrases */}
            <div className="section bg-gray-50">
                <h2 className="text-4xl font-bold text-[#003366] mb-6 text-center">
                    Learn Common Sign Language Phrases
                </h2>
                <p className="text-lg text-gray-700 text-center mb-6">
                    Click on each phrase to see the sign language demonstration.
                </p>
                <div className="w-full flex gap-4 flex-wrap justify-center">
                    <button onClick={() => alert('Showing sign for "Hello"')} className="btn-secondary" style={{ minWidth: '150px' }}>
                        Hello
                    </button>
                    <button onClick={() => alert('Showing sign for "Thank You"')} className="btn-secondary" style={{ minWidth: '150px' }}>
                        Thank You
                    </button>
                    <button onClick={() => alert('Showing sign for "Please"')} className="btn-secondary" style={{ minWidth: '150px' }}>
                        Please
                    </button>
                    <button onClick={() => alert('Showing sign for "Sorry"')} className="btn-secondary" style={{ minWidth: '150px' }}>
                        Sorry
                    </button>
                    <button onClick={() => alert('Showing sign for "Help"')} className="btn-secondary" style={{ minWidth: '150px' }}>
                        Help
                    </button>
                    <button onClick={() => alert('Showing sign for "Yes"')} className="btn-secondary" style={{ minWidth: '150px' }}>
                        Yes
                    </button>
                    <button onClick={() => alert('Showing sign for "No"')} className="btn-secondary" style={{ minWidth: '150px' }}>
                        No
                    </button>
                    <button onClick={() => alert('Showing sign for "Goodbye"')} className="btn-secondary" style={{ minWidth: '150px' }}>
                        Goodbye
                    </button>
                </div>
            </div>

            {/* Learning tips */}
            <div className="section">
                <h2 className="text-4xl font-bold text-[#003366] mb-6">Tips for Learning Sign Language</h2>
                <div className="flex flex-col gap-4">
                    <div className="card">
                        <h3 className="text-xl font-semibold text-[#0066cc] mb-2">1. Practice Regularly</h3>
                        <p className="text-gray-700">
                            Consistency is key. Set aside time each day to practice signs and review what you have learned.
                        </p>
                    </div>

                    <div className="card">
                        <h3 className="text-xl font-semibold text-[#0066cc] mb-2">2. Engage with the Community</h3>
                        <p className="text-gray-700">
                            Join local deaf community events or online forums to practice your skills with native signers.
                        </p>
                    </div>

                    <div className="card">
                        <h3 className="text-xl font-semibold text-[#0066cc] mb-2">3. Use Visual Learning Aids</h3>
                        <p className="text-gray-700">
                            Watch videos, use flashcards, and observe how signs are formed to improve your understanding.
                        </p>
                    </div>

                    <div className="card">
                        <h3 className="text-xl font-semibold text-[#0066cc] mb-2">4. Be Patient and Respectful</h3>
                        <p className="text-gray-700">
                            Learning a new language takes time. Be patient with yourself and always approach communication with respect.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Education;
