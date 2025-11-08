import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import mastercardLogo from '../assets/mastercard-foundation-vector-logo.png';
import unicefLogo from '../assets/UNICEF-logo.jpg';
import mestLogo from '../assets/MEST Logo 1.jpg';

const Home = () => {
    const observerRef = useRef(null);
    const [currentText, setCurrentText] = React.useState('Deaf');
    const textIndexRef = useRef(0);

    useEffect(() => {
        const texts = ['Deaf', 'Hard Of Hearing'];

        // Text switching animation
        const textSwitchInterval = setInterval(() => {
            textIndexRef.current = (textIndexRef.current + 1) % texts.length;
            setCurrentText(texts[textIndexRef.current]);
        }, 5000); // Switch every 3 seconds

        // Bounce animation on load
        const label = document.querySelector('.text-blue-500.cursor-pointer');
        if (label) {
            label.classList.add('animate-bounce-on-tap');
            setTimeout(() => label.classList.remove('animate-bounce-on-tap'), 5000);
        }

        // Intersection Observer for scroll animations
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Observe all elements with scroll-reveal classes
        const revealElements = document.querySelectorAll(
            '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale'
        );
        revealElements.forEach((el) => observerRef.current.observe(el));

        return () => {
            clearInterval(textSwitchInterval);
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    const handleBounce = () => {
        const label = document.querySelector('.text-blue-500.cursor-pointer');
        if (label) {
            label.classList.add('animate-bounce-on-tap');
            setTimeout(() => label.classList.remove('animate-bounce-on-tap'), 1500);
        }
    };

    return (
        <div>
            <style>{`
        @keyframes text-switch {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        15% {
            opacity: 1;
            transform: translateY(0);
        }
        85% {
            opacity: 1;
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateY(-20px);
        }
        }

        .text-switch-animation {
        animation: text-switch 5s ease-in-out;
        display: inline-block;
        }
      `}</style>

            <Navbar />

            {/* HERO SECTION */}
            <div className="w-full min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 py-24 md:py-20 gap-6 md:gap-10 text-center">
                {/* Main Heading */}
                <div className="flex justify-center items-baseline flex-wrap gap-2 px-2 mt-20">
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                        Accessibility For
                    </span>

                    <span
                        key={currentText}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold cursor-pointer text-switch-animation"
                        onClick={handleBounce}
                        style={{
                        display: "inline-block",
                        textAlign: "center",
                        color: "#1E88A8",
                        // Fixed width ensures layout doesn’t jump
                        minWidth: "5ch",
                        transition: "width 5s ease-in-out",
                        }}
                    >
                        {currentText}
                    </span>

                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                        Learners
                    </span>
                    </div>

                {/* Subtext */}
                <p className="text-lg sm:text-xl md:text-2xl text-black font-medium max-w-[90%] md:max-w-[700px] text-center animate-fade-in-up delay-600 px-4">
                    At School. At Work. Everywhere!
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-4 w-full max-w-md sm:max-w-none px-4">
                    <button
                        onClick={() => alert('Getting Started...')}
                        className="text-white px-6 py-3 rounded-lg font-semibold transition btn-animated hover-lift delay-700 animate-fade-in-up text-sm sm:text-base w-full sm:w-auto"
                        style={{ backgroundColor: '#0D5364' }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#093d4a'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#0D5364'}
                    >
                        DOWNLOAD
                    </button>
                    <button
                        onClick={() => alert('Finding your plan...')}
                        className="px-6 py-3 rounded-lg font-semibold transition btn-animated hover-lift delay-800 animate-fade-in-up text-sm sm:text-base w-full sm:w-auto"
                        style={{ border: '2px solid #0D5364', color: '#0D5364', backgroundColor: 'transparent' }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#0D5364';
                            e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = '#0D5364';
                        }}
                    >
                        GET IT ON GOOGLE PLAY
                    </button>
                </div>

                {/* 3D MOBILE PHONE CARD */}
                <div
                    className="mt-8 md:mt-16 animate-scale-in delay-800 px-4"
                    style={{
                        perspective: '1000px',
                        transformStyle: 'preserve-3d'
                    }}
                >
                    <div
                        className="relative w-[280px] sm:w-[320px] md:w-[350px] h-[560px] sm:h-[640px] md:h-[700px] mx-auto"
                        style={{
                            transformStyle: 'preserve-3d',
                            transform: 'rotateY(-5deg) rotateX(5deg)',
                            transition: 'transform 0.5s ease'
                        }}
                        onMouseMove={(e) => {
                            const card = e.currentTarget;
                            const rect = card.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            const centerX = rect.width / 2;
                            const centerY = rect.height / 2;
                            const rotateX = ((y - centerY) / centerY) * -10;
                            const rotateY = ((x - centerX) / centerX) * 10;
                            card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateZ(20px)`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'rotateY(-5deg) rotateX(5deg)';
                        }}
                    >
                        {/* Phone Frame */}
                        <div
                            className="absolute inset-0 rounded-[50px] overflow-hidden"
                            style={{
                                background: 'linear-gradient(145deg, #1a1a1a, #2d2d2d)',
                                boxShadow: `
                                    0 50px 100px rgba(0, 0, 0, 0.5),
                                    0 30px 60px rgba(0, 0, 0, 0.4),
                                    inset 0 0 0 2px rgba(255, 255, 255, 0.1),
                                    inset 0 -10px 20px rgba(0, 0, 0, 0.3)
                                `,
                                border: '8px solid #1a1a1a',
                                transformStyle: 'preserve-3d',
                                transform: 'translateZ(20px)'
                            }}
                        >
                            {/* Screen Glow */}
                            <div
                                className="absolute inset-2 rounded-[42px]"
                                style={{
                                    background: 'linear-gradient(180deg, rgba(13, 83, 100, 0.3), rgba(13, 83, 100, 0.1))',
                                    boxShadow: '0 0 60px rgba(13, 83, 100, 0.6)',
                                    transform: 'translateZ(5px)'
                                }}
                            />

                            {/* Phone Screen Content - Place your image here */}
                            <div
                                className="absolute inset-2 rounded-[42px] overflow-hidden"
                                style={{
                                    background: '#0D5364',
                                    transform: 'translateZ(10px)'
                                }}
                            >
                                {/* Placeholder - Replace with your mobile app image */}
                                <img
                                    src="/assets/deafcann.jpeg"
                                    alt="Mobile App"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Phone Notch */}
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2"
                                style={{
                                    width: '150px',
                                    height: '30px',
                                    background: '#1a1a1a',
                                    borderRadius: '0 0 20px 20px',
                                    transform: 'translateZ(25px) translateX(-50%)',
                                    boxShadow: 'inset 0 -2px 5px rgba(0, 0, 0, 0.5)'
                                }}
                            >
                                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-gray-800 rounded-full" />
                            </div>

                            {/* Side Button Reflections */}
                            <div
                                className="absolute right-0 top-[150px] w-1 h-[60px] bg-gradient-to-r from-transparent to-white opacity-20"
                                style={{ transform: 'translateZ(30px)' }}
                            />
                        </div>

                        {/* 3D Depth Shadow */}
                        <div
                            className="absolute inset-0 rounded-[50px]"
                            style={{
                                background: 'linear-gradient(145deg, transparent, rgba(0, 0, 0, 0.3))',
                                transform: 'translateZ(-10px)',
                                filter: 'blur(20px)',
                                opacity: 0.5
                            }}
                        />
                    </div>
                </div>

                {/* Note Taking Text */}
                <div className="mt-12 animate-fade-in-up delay-900 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-black">
                        Inclusive Learning Through
                    </h2>
                    <h2 className="text-4xl md:text-5xl font-bold text-black mt-2">
                        Integrated Features
                    </h2>
                </div>

                {/* Features Icons Section */}
                <div className="mt-16 flex flex-wrap justify-center gap-12 px-4">
                    {/* Note Taking AI Assistant */}
                    <div className="flex flex-col items-center animate-fade-in-up delay-1000">
                        {/* Note Taking Icon */}
                        <div className="mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="64"
                                height="64"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#0D5364"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="hover-scale"
                            >
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                        </div>
                        {/* Text */}
                        <h3 className="text-sm md:text-base font-medium text-black text-center">
                            A note taking AI Assistant
                        </h3>
                    </div>

                    {/* Library */}
                    <div className="flex flex-col items-center animate-fade-in-up delay-1100">
                        {/* Library Icon - Pile of Books */}
                        <div className="mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="64"
                                height="64"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#0D5364"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="hover-scale"
                            >
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                <path d="M12 3v18"></path>
                            </svg>
                        </div>
                        {/* Text */}
                        <h3 className="text-sm md:text-base font-medium text-black text-center">
                            Library
                        </h3>
                    </div>

                    {/* AI Speech to Text */}
                    <div className="flex flex-col items-center animate-fade-in-up delay-1200">
                        {/* Microphone Icon */}
                        <div className="mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="64"
                                height="64"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#0D5364"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="hover-scale"
                            >
                                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                <line x1="12" y1="19" x2="12" y2="23"></line>
                                <line x1="8" y1="23" x2="16" y2="23"></line>
                            </svg>
                        </div>
                        {/* Text */}
                        <h3 className="text-sm md:text-base font-medium text-black text-center">
                            AI speech to text
                        </h3>
                    </div>

                    {/* DeafCare */}
                    <div className="flex flex-col items-center animate-fade-in-up delay-1300">
                        {/* Heart/Care Icon */}
                        <div className="mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="64"
                                height="64"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#0D5364"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="hover-scale"
                            >
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </div>
                        {/* Text */}
                        <h3 className="text-sm md:text-base font-medium text-black text-center">
                            DeafCare
                        </h3>
                    </div>

                    {/* Book an Interpreter */}
                    <div className="flex flex-col items-center animate-fade-in-up delay-1400">
                        {/* Interpreter/People Icon */}
                        <div className="mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="64"
                                height="64"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#0D5364"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="hover-scale"
                            >
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        {/* Text */}
                        <h3 className="text-sm md:text-base font-medium text-black text-center">
                            Book an interpreter
                        </h3>
                    </div>
                </div>
            </div>

            {/* DETAILED FEATURES SECTION - Slack Style */}
            <div className="w-full bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    {/* Feature 1 - Note Taking AI Assistant */}
                    <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 mb-20 md:mb-32 scroll-reveal">
                        <div className="flex-1 space-y-4 md:space-y-6">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
                                Never miss a moment with AI-powered note taking
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                                Our intelligent AI assistant automatically captures and transcribes lectures, meetings, and conversations in real-time. Get organized summaries, searchable notes, and smart highlights of key points.
                            </p>
                            <ul className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-700">
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl" style={{ color: '#0D5364' }}>✓</span>
                                    <span>Real-time transcription with 95% accuracy</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl" style={{ color: '#0D5364' }}>✓</span>
                                    <span>Automatic organization and smart tagging</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl" style={{ color: '#0D5364' }}>✓</span>
                                    <span>Share notes instantly with classmates</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 shadow-2xl hover-lift">
                                <div className="bg-white rounded-2xl p-6 shadow-lg">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                        <div className="h-6 rounded w-full mt-4" style={{ backgroundColor: '#0D5364' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 - Library */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-32 scroll-reveal">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-5xl font-bold text-black leading-tight">
                                Access a world of knowledge at your fingertips
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Explore our comprehensive library filled with sign language tutorials, educational resources, and deaf culture content. Learn at your own pace with curated materials designed for every skill level.
                            </p>
                            <ul className="space-y-4 text-lg text-gray-700">
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl" style={{ color: '#0D5364' }}>✓</span>
                                    <span>1000+ video tutorials and learning materials</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl" style={{ color: '#0D5364' }}>✓</span>
                                    <span>Personalized learning paths and progress tracking</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl" style={{ color: '#0D5364' }}>✓</span>
                                    <span>Download content for offline learning</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-2xl hover-lift">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white rounded-xl p-4 shadow-md">
                                        <div className="w-full h-24 rounded-lg mb-3" style={{ backgroundColor: '#0D5364' }}></div>
                                        <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 shadow-md">
                                        <div className="w-full h-24 bg-teal-200 rounded-lg mb-3"></div>
                                        <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 shadow-md">
                                        <div className="w-full h-24 bg-blue-200 rounded-lg mb-3"></div>
                                        <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 shadow-md">
                                        <div className="w-full h-24 bg-green-200 rounded-lg mb-3"></div>
                                        <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3 - AI Speech to Text */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 mb-32 scroll-reveal">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-5xl font-bold text-black leading-tight">
                                Break down communication barriers instantly
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Transform spoken words into clear, readable text in real-time. Our advanced AI speech recognition ensures you stay connected in every conversation, meeting, or classroom.
                            </p>
                            <ul className="space-y-4 text-lg text-gray-700">
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl" style={{ color: '#0D5364' }}>✓</span>
                                    <span>Instant speech-to-text with multiple language support</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl" style={{ color: '#0D5364' }}>✓</span>
                                    <span>Works in noisy environments with noise cancellation</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl" style={{ color: '#0D5364' }}>✓</span>
                                    <span>Save and review conversations anytime</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 shadow-2xl hover-lift">
                                <div className="bg-white rounded-2xl p-6 shadow-lg space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0D5364' }}>
                                            <div className="w-6 h-6 rounded-full bg-white animate-pulse"></div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                                            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 rounded-xl p-4 space-y-2">
                                        <div className="h-3 bg-gray-300 rounded w-full"></div>
                                        <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                                        <div className="h-3 bg-gray-300 rounded w-4/6"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 4 & 5 Combined - DeafCare & Book Interpreter */}
                    <div className="grid md:grid-cols-2 gap-12 scroll-reveal">
                        {/* DeafCare */}
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-xl hover-lift">
                            <div className="mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#0D5364"
                                    strokeWidth="2"
                                >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-black mb-4">DeafCare Support</h3>
                            <p className="text-lg text-gray-700 mb-6">
                                Connect with a supportive community and access mental health resources, peer support groups, and professional counseling services tailored for the deaf community.
                            </p>
                            <button className="px-6 py-3 rounded-lg font-semibold text-white transition hover-lift" style={{ backgroundColor: '#0D5364' }}>
                                Learn More
                            </button>
                        </div>

                        {/* Book Interpreter */}
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-xl hover-lift">
                            <div className="mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#0D5364"
                                    strokeWidth="2"
                                >
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-black mb-4">Book an Interpreter</h3>
                            <p className="text-lg text-gray-700 mb-6">
                                Schedule professional sign language interpreters for medical appointments, legal matters, educational settings, or any important event. Available 24/7 with qualified professionals.
                            </p>
                            <button className="px-6 py-3 rounded-lg font-semibold text-white transition hover-lift" style={{ backgroundColor: '#0D5364' }}>
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* PARTNER LOGOS */}
            <div className="w-full bg-gray-50 py-12 md:py-16 px-4 sm:px-6 md:px-10">
                <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 md:gap-8">
                    <h2 className="text-gray-600 text-base sm:text-lg font-semibold uppercase tracking-wider text-center">
                        Our Partners
                    </h2>
                    <div className="flex justify-center items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 flex-wrap">
                        {/* MasterCard Foundation Logo */}
                        <div>
                            <img
                                src={mastercardLogo}
                                alt="Mastercard Foundation"
                                className="h-16 sm:h-20 md:h-24 w-auto object-contain bg-white"
                                style={{ mixBlendMode: 'multiply' }}
                            />
                        </div>

                        {/* UNICEF Logo */}
                        <div>
                            <img
                                src={unicefLogo}
                                alt="UNICEF"
                                className="h-16 sm:h-20 md:h-24 w-auto object-contain bg-white"
                                style={{ mixBlendMode: 'multiply' }}
                            />
                        </div>

                        {/* MEST Africa Logo */}
                        <div>
                            <img
                                src={mestLogo}
                                alt="MEST Africa"
                                className="h-16 sm:h-20 md:h-24 w-auto object-contain bg-white"
                                style={{ mixBlendMode: 'multiply' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
