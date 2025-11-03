import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AnimationShowcase = () => {
    const observerRef = useRef(null);

    useEffect(() => {
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

        const revealElements = document.querySelectorAll(
            '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale'
        );
        revealElements.forEach((el) => observerRef.current.observe(el));

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <div>
            <Navbar />

            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-6xl font-extrabold text-center mb-4 text-gradient animate-fade-in-up">
                        🎨 Animation Showcase
                    </h1>
                    <p className="text-center text-gray-600 text-xl mb-16 animate-fade-in-up delay-200">
                        Explore all the animated features available in DeafCanTalk
                    </p>

                    {/* Fade Animations */}
                    <section className="mb-20 scroll-reveal">
                        <h2 className="text-4xl font-bold mb-8 text-blue-600">Fade Animations</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="card animate-fade-in">
                                <h3 className="text-2xl font-bold mb-2">Fade In</h3>
                                <p className="text-gray-600">Smooth fade-in effect</p>
                            </div>
                            <div className="card animate-fade-in-up">
                                <h3 className="text-2xl font-bold mb-2">Fade In Up</h3>
                                <p className="text-gray-600">Fades in from below</p>
                            </div>
                            <div className="card animate-fade-in-left">
                                <h3 className="text-2xl font-bold mb-2">Fade In Left</h3>
                                <p className="text-gray-600">Slides from the left</p>
                            </div>
                        </div>
                    </section>

                    {/* Continuous Animations */}
                    <section className="mb-20 scroll-reveal-left">
                        <h2 className="text-4xl font-bold mb-8 text-purple-600">Continuous Animations</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="card animate-float">
                                <h3 className="text-2xl font-bold mb-2">🎈 Float</h3>
                                <p className="text-gray-600">Gentle floating motion</p>
                            </div>
                            <div className="card animate-pulse">
                                <h3 className="text-2xl font-bold mb-2">💓 Pulse</h3>
                                <p className="text-gray-600">Rhythmic scaling</p>
                            </div>
                            <div className="card animate-bounce">
                                <h3 className="text-2xl font-bold mb-2">🏀 Bounce</h3>
                                <p className="text-gray-600">Bouncing animation</p>
                            </div>
                        </div>
                    </section>

                    {/* Hover Effects */}
                    <section className="mb-20 scroll-reveal-right">
                        <h2 className="text-4xl font-bold mb-8 text-pink-600">Hover Effects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="card hover-lift">
                                <h3 className="text-2xl font-bold mb-2">↑ Hover Lift</h3>
                                <p className="text-gray-600">Lifts up on hover</p>
                            </div>
                            <div className="card hover-scale">
                                <h3 className="text-2xl font-bold mb-2">🔍 Hover Scale</h3>
                                <p className="text-gray-600">Scales up on hover</p>
                            </div>
                            <div className="card hover-glow">
                                <h3 className="text-2xl font-bold mb-2">✨ Hover Glow</h3>
                                <p className="text-gray-600">Glows on hover</p>
                            </div>
                        </div>
                    </section>

                    {/* Button Animations */}
                    <section className="mb-20 scroll-reveal-scale">
                        <h2 className="text-4xl font-bold mb-8 text-green-600">Interactive Buttons</h2>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold btn-animated hover-lift">
                                Animated Button
                            </button>
                            <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-bold btn-animated hover-scale">
                                Scale Button
                            </button>
                            <button className="bg-pink-600 text-white px-8 py-4 rounded-lg font-bold btn-animated hover-glow">
                                Glow Button
                            </button>
                        </div>
                    </section>

                    {/* Text Animations */}
                    <section className="mb-20 scroll-reveal">
                        <h2 className="text-4xl font-bold mb-8 text-orange-600">Text Effects</h2>
                        <div className="card">
                            <h3 className="text-3xl font-bold text-gradient mb-4">
                                Gradient Animated Text
                            </h3>
                            <p className="text-gray-600">
                                This text has an animated gradient that shifts colors continuously.
                            </p>
                        </div>
                    </section>

                    {/* Scroll Reveal Animations */}
                    <section className="mb-20">
                        <h2 className="text-4xl font-bold mb-8 text-indigo-600 text-center">
                            Scroll Reveal Animations
                        </h2>
                        <div className="space-y-8">
                            <div className="card scroll-reveal-left">
                                <h3 className="text-2xl font-bold mb-2">← Scroll Reveal Left</h3>
                                <p className="text-gray-600">This card slides in from the left when you scroll to it</p>
                            </div>
                            <div className="card scroll-reveal-right">
                                <h3 className="text-2xl font-bold mb-2">→ Scroll Reveal Right</h3>
                                <p className="text-gray-600">This card slides in from the right when you scroll to it</p>
                            </div>
                            <div className="card scroll-reveal">
                                <h3 className="text-2xl font-bold mb-2">↑ Scroll Reveal Up</h3>
                                <p className="text-gray-600">This card slides up and fades in when you scroll to it</p>
                            </div>
                            <div className="card scroll-reveal-scale">
                                <h3 className="text-2xl font-bold mb-2">⚡ Scroll Reveal Scale</h3>
                                <p className="text-gray-600">This card scales up when you scroll to it</p>
                            </div>
                        </div>
                    </section>

                    {/* Loading Animation */}
                    <section className="mb-20 scroll-reveal">
                        <h2 className="text-4xl font-bold mb-8 text-red-600">Loading Animation</h2>
                        <div className="card flex items-center justify-center p-12">
                            <div className="spinner"></div>
                        </div>
                    </section>

                    {/* Combination Example */}
                    <section className="mb-20 scroll-reveal-scale">
                        <h2 className="text-4xl font-bold mb-8 text-teal-600 text-center">
                            Combined Effects
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="card hover-lift hover-glow">
                                <div className="animate-float">
                                    <h3 className="text-3xl font-bold text-gradient mb-4">✨ Magic Card</h3>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    This card combines floating animation, hover lift, gradient text, and glow effect!
                                </p>
                                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-bold btn-animated hover-scale">
                                    Click Me
                                </button>
                            </div>
                            <div className="card hover-lift hover-scale">
                                <div className="animate-pulse">
                                    <h3 className="text-3xl font-bold text-gradient mb-4">💫 Dynamic Card</h3>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    This card uses pulse animation with scale and lift hover effects!
                                </p>
                                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-bold btn-animated hover-glow">
                                    Discover
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AnimationShowcase;
