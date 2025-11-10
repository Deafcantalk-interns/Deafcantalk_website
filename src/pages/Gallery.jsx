import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import signLanguageWorkshop from '../assets/cvv.jpeg';
import youthEducationProgram from '../assets/can.jpeg';
import deafAwarenessWeek from '../assets/deat.jpg';
import aslTrainingSession from '../assets/cnd.jpeg';
import communityGathering from '../assets/defff.webp';
import technologyDemonstration from '../assets/tech.png';

const Gallery = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />

            {/* Page header */}
            <div className="hero-section">
                <h1 className="text-5xl font-bold mb-4">Our Gallery</h1>
                <p className="text-xl text-gray-200">
                    Moments from our community programs, workshops, and events
                </p>
            </div>

            {/* Introduction */}
            <div className="section">
                <h2 className="text-4xl font-bold text-[#003366] mb-6">Celebrating Our Community</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Explore our collection of photos and videos that capture the spirit of the DeafCanTalk community. From educational workshops to advocacy events, these images tell the story of our journey toward a more inclusive world.
                </p>
            </div>

            {/* Photo gallery */}
            <div className="section bg-gray-50">
                <h2 className="text-3xl font-bold text-[#003366] mb-6">Photo Gallery</h2>
                <div className="w-full flex gap-4 flex-wrap justify-center">
                    <div className="card" style={{ flex: '0 1 calc(33.333% - 1rem)', minWidth: '280px' }}>
                        <img
                            src={signLanguageWorkshop}
                            alt="Sign Language Workshop"
                            className="rounded-lg w-full mb-3"
                            style={{ height: '250px', objectFit: 'cover' }}
                        />
                        <h3 className="text-lg font-semibold text-[#0066cc] mb-2">Sign Language Workshop</h3>
                        <p className="text-sm text-gray-700">
                            Community members learning sign language at our monthly workshop.
                        </p>
                    </div>

                    <div className="card" style={{ flex: '0 1 calc(33.333% - 1rem)', minWidth: '280px' }}>
                        <img
                            src={youthEducationProgram}
                            alt="Youth Education Program"
                            className="rounded-lg w-full mb-3"
                            style={{ height: '250px', objectFit: 'cover' }}
                        />
                        <h3 className="text-lg font-semibold text-[#0066cc] mb-2">Youth Education Program</h3>
                        <p className="text-sm text-gray-700">
                            Young students practicing sign language communication skills.
                        </p>
                    </div>

                    <div className="card" style={{ flex: '0 1 calc(33.333% - 1rem)', minWidth: '280px' }}>
                        <img
                            src={deafAwarenessWeek}
                            alt="Deaf Awareness Week"
                            className="rounded-lg w-full mb-3"
                            style={{ height: '250px', objectFit: 'cover' }}
                        />
                        <h3 className="text-lg font-semibold text-[#0066cc] mb-2">Deaf Awareness Week</h3>
                        <p className="text-sm text-gray-700">
                            Celebrating Deaf Awareness Week with community events and activities.
                        </p>
                    </div>

                    <div className="card" style={{ flex: '0 1 calc(33.333% - 1rem)', minWidth: '280px' }}>
                        <img
                            src={aslTrainingSession}
                            alt="GSL Training Session"
                            className="rounded-lg w-full mb-3"
                            style={{ height: '250px', objectFit: 'cover' }}
                        />
                        <h3 className="text-lg font-semibold text-[#0066cc] mb-2">GSL Training Session</h3>
                        <p className="text-sm text-gray-700">
                            Professional GSL training for educators and interpreters.
                        </p>
                    </div>

                    <div className="card" style={{ flex: '0 1 calc(33.333% - 1rem)', minWidth: '280px' }}>
                        <img
                            src={communityGathering}
                            alt="Community Gathering"
                            className="rounded-lg w-full mb-3"
                            style={{ height: '250px', objectFit: 'cover' }}
                        />
                        <h3 className="text-lg font-semibold text-[#0066cc] mb-2">Community Gathering</h3>
                        <p className="text-sm text-gray-700">
                            Members of the deaf community coming together to share experiences.
                        </p>
                    </div>

                    <div className="card" style={{ flex: '0 1 calc(33.333% - 1rem)', minWidth: '280px' }}>
                        <img
                            src={technologyDemonstration}
                            alt="Technology Demonstration"
                            className="rounded-lg w-full mb-3"
                            style={{ height: '250px', objectFit: 'cover' }}
                        />
                        <h3 className="text-lg font-semibold text-[#0066cc] mb-2">Technology Demonstration</h3>
                        <p className="text-sm text-gray-700">
                            Showcasing the latest assistive technology for the deaf community.
                        </p>
                    </div>
                </div>
            </div>

            {/* Video section */}
            <div className="section">
                <h2 className="text-3xl font-bold text-[#003366] mb-6">Featured Videos</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Watch highlights from our events, user testimonials, and educational content.
                </p>
                <div className="w-full flex gap-6 flex-wrap justify-center">
                    <div className="card" style={{ flex: 1, minWidth: '350px', maxWidth: '500px' }}>
                        <div
                            className="bg-gray-300 rounded-lg mb-4 flex items-center justify-center"
                            style={{ width: '100%', height: '280px' }}
                        >
                            <span className="text-3xl text-gray-600">Video Player</span>
                        </div>
                        <h3 className="text-xl font-semibold text-[#0066cc] mb-2">DeafCanTalk App Overview</h3>
                        <p className="text-gray-700 mb-3">
                            Learn about the features and benefits of the DeafCanTalk mobile app.
                        </p>
                        <button onClick={() => alert('Playing video...')} className="btn-primary">
                            Watch Video
                        </button>
                    </div>

                    <div className="card" style={{ flex: 1, minWidth: '350px', maxWidth: '500px' }}>
                        <div
                            className="bg-gray-300 rounded-lg mb-4 flex items-center justify-center"
                            style={{ width: '100%', height: '280px' }}
                        >
                            <span className="text-3xl text-gray-600">Video Player</span>
                        </div>
                        <h3 className="text-xl font-semibold text-[#0066cc] mb-2">User Testimonials</h3>
                        <p className="text-gray-700 mb-3">
                            Hear from users about how DeafCanTalk has impacted their lives.
                        </p>
                        <button onClick={() => alert('Playing video...')} className="btn-primary">
                            Watch Video
                        </button>
                    </div>
                </div>
            </div>

            {/* User stories section */}
            <div className="section bg-gray-50">
                <h2 className="text-3xl font-bold text-[#003366] mb-6 text-center">User Stories</h2>
                <p className="text-lg text-gray-700 text-center mb-8">
                    Real stories from real people in our community.
                </p>
                <div className="w-full flex gap-6 flex-wrap justify-center">
                    <div className="card" style={{ flex: 1, minWidth: '300px', maxWidth: '400px' }}>
                        <p className="text-lg text-gray-700 italic mb-4">
                            "DeafCanTalk has changed my life. I can now communicate with my family and friends more easily than ever before."
                        </p>
                        <p className="text-md font-semibold text-[#0066cc]">- Maria S., California</p>
                    </div>

                    <div className="card" style={{ flex: 1, minWidth: '300px', maxWidth: '400px' }}>
                        <p className="text-lg text-gray-700 italic mb-4">
                            "As a teacher, this app has been invaluable in helping me connect with my deaf students. The educational resources are excellent."
                        </p>
                        <p className="text-md font-semibold text-[#0066cc]">- James T., New York</p>
                    </div>

                    <div className="card" style={{ flex: 1, minWidth: '300px', maxWidth: '400px' }}>
                        <p className="text-lg text-gray-700 italic mb-4">
                            "The community support I have found through DeafCanTalk is amazing. I no longer feel isolated."
                        </p>
                        <p className="text-md font-semibold text-[#0066cc]">- David L., Texas</p>
                    </div>
                </div>
            </div>

            {/* Call to action */}
            <div className="section">
                <div className="w-full flex flex-col items-center gap-4">
                    <h2 className="text-3xl font-bold text-[#003366] text-center">Share Your Story</h2>
                    <p className="text-lg text-gray-700 text-center">
                        We would love to feature your story in our gallery. Contact us to share your experience.
                    </p>
                    <button onClick={() => navigate('/contact')} className="btn-primary">
                        Contact Us
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Gallery;
