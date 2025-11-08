import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import aiImage from '../assets/ai.png';
import childImage from '../assets/childhood.png';
import advocacyImage from '../assets/advocacy.png';
import workplaceImage from '../assets/workplace.png';
import communityImage from '../assets/com-1.png';

const Blog = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />

            {/* Page header */}
            <div className="hero-section">
                <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
                <p className="text-xl text-white">Stories, insights, and updates from the deaf community</p>
            </div>

            {/* Introduction */}
            <div className="section">
                <h2 className="text-4xl font-bold text-[#003366] mb-6">Latest Articles</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Stay informed with our latest articles on deaf awareness, advocacy, technology, and community stories. Our blog features contributions from deaf individuals, educators, and advocates who share their experiences and insights.
                </p>
            </div>

            {/* Category filters */}
            <div className="section bg-gray-50">
                <h3 className="text-2xl font-bold text-[#003366] mb-4">Browse by Category</h3>
                <div className="flex gap-3 flex-wrap">
                    <button onClick={() => alert('Showing all articles')} className="btn-secondary">All</button>
                    <button onClick={() => alert('Filtering by Advocacy')} className="btn-secondary">Advocacy</button>
                    <button onClick={() => alert('Filtering by Technology')} className="btn-secondary">Technology</button>
                    <button onClick={() => alert('Filtering by Education')} className="btn-secondary">Education</button>
                    <button onClick={() => alert('Filtering by Community Stories')} className="btn-secondary">Community Stories</button>
                </div>
            </div>

            {/* Blog posts */}
            <div className="section">
                <div className="w-full flex flex-col gap-8">
                    {/* Blog post 1 */}
                    <div className="card">
                        <div className="w-full flex items-start gap-6 flex-wrap">
                            <img
                                src={aiImage}
                                alt="Technology"
                                className="rounded-lg shadow-md"
                                style={{ width: '300px', height: '250px', objectFit: 'cover' }}
                            />
                            <div className="flex-1 flex flex-col gap-3">
                                <h3 className="text-2xl font-bold text-[#003366]">
                                    Breaking Barriers: How Technology is Transforming Deaf Communication
                                </h3>
                                <p className="text-sm text-gray-500">Technology • March 15, 2025</p>
                                <p className="text-gray-700 leading-relaxed">
                                    Explore how artificial intelligence and machine learning are revolutionizing the way deaf individuals communicate. From real-time sign language translation to innovative assistive devices, technology is opening new doors for accessibility and inclusion.
                                </p>
                                <div className="w-full flex justify-end px-6">
                                <button onClick={() => alert('Opening article...')} className="btn-primary w-1/2 md:w-1/4 lg:w-1/5">
                                    Read More
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Blog post 2 */}
                    <div className="card">
                        <div className="w-full flex items-start gap-6 flex-wrap">
                            <img
                                src={childImage}
                                alt="Child Education"
                                className="rounded-lg shadow-md"
                                style={{ width: '300px', height: '250px', objectFit: 'cover' }}
                            />
                            <div className="flex-1 flex flex-col gap-3">
                                <h3 className="text-2xl font-bold text-[#003366]">
                                    The Importance of Sign Language in Early Childhood Education
                                </h3>
                                <p className="text-sm text-gray-500">Education • March 10, 2025</p>
                                <p className="text-gray-700 leading-relaxed">
                                    Research shows that introducing sign language to young children, both deaf and hearing, can enhance cognitive development, improve communication skills, and foster empathy. Learn why early exposure to sign language matters.
                                </p>
                                <div className="w-full flex justify-end px-6">
                                <button onClick={() => alert('Opening article...')} className="btn-primary w-1/2 md:w-1/4 lg:w-1/5">
                                    Read More
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Blog post 3 */}
                    <div className="card">
                        <div className="w-full flex items-start gap-6 flex-wrap">
                            <img
                                src={advocacyImage}
                                alt="Advocacy"
                                className="rounded-lg shadow-md"
                                style={{ width: '300px', height: '250px', objectFit: 'cover' }}
                            />
                            <div className="flex-1 flex flex-col gap-3">
                                <h3 className="text-2xl font-bold text-[#003366]">
                                    Advocating for Deaf Rights: A Journey of Empowerment
                                </h3>
                                <p className="text-sm text-gray-500">Advocacy • March 5, 2025</p>
                                <p className="text-gray-700 leading-relaxed">
                                    Meet Sarah, a deaf advocate who has dedicated her life to fighting for equal access to education, employment, and healthcare. Her inspiring story reminds us of the importance of advocacy and the power of community support.
                                </p>
                                <div className="w-full flex justify-end px-6">
                                <button onClick={() => alert('Opening article...')} className="btn-primary w-1/2 md:w-1/4 lg:w-1/5">
                                    Read More
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Blog post 4 */}
                    <div className="card">
                        <div className="w-full flex items-start gap-6 flex-wrap">
                            <img
                                src={workplaceImage}
                                alt="Inclusive Workplace"
                                className="rounded-lg shadow-md"
                                style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                            />
                            <div className="flex-1 flex flex-col gap-3">
                                <h3 className="text-2xl font-bold text-[#003366]">
                                    Building Inclusive Workplaces: Best Practices for Employers
                                </h3>
                                <p className="text-sm text-gray-500">Advocacy • February 28, 2025</p>
                                <p className="text-gray-700 leading-relaxed">
                                    Creating an inclusive workplace for deaf employees requires more than just compliance with accessibility laws. Discover practical strategies that employers can implement to foster a supportive and productive environment for all.
                                </p>
                                <div className="w-full flex justify-end px-6">
                                <button onClick={() => alert('Opening article...')} className="btn-primary w-1/2 md:w-1/4 lg:w-1/5">
                                    Read More
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Blog post 5 */}
                    <div className="card">
                        <div className="w-full flex items-start gap-6 flex-wrap">
                            <img
                                src={communityImage}
                                alt="Celebration"
                                className="rounded-lg shadow-md"
                                style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                            />
                            <div className="flex-1 flex flex-col gap-3">
                                <h3 className="text-2xl font-bold text-[#003366]">
                                    Community Spotlight: Celebrating Deaf Culture and Heritage
                                </h3>
                                <p className="text-sm text-gray-500">Community Stories • February 20, 2025</p>
                                <p className="text-gray-700 leading-relaxed">
                                    Deaf culture is rich with history, art, and traditions that deserve recognition and celebration. Join us as we highlight the vibrant contributions of the deaf community to society and explore what makes deaf culture unique.
                                </p>
                                <div className="w-full flex justify-end px-6">
                                    <button onClick={() => alert('Opening article...')} className="btn-primary w-1/2 md:w-1/4 lg:w-1/5">
                                    Read More
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to action */}
            <div className="section bg-gray-50">
                <div className="w-full flex flex-col items-center gap-4">
                    <h2 className="text-3xl font-bold text-[#003366] text-center">Want to Contribute?</h2>
                    <p className="text-lg text-gray-700 text-center">
                        We welcome guest posts and stories from the deaf community. Share your experiences and insights with our readers.
                    </p>
                    <button onClick={() => navigate('/contact')} className="btn-primary">
                        Submit Your Story
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Blog;
