import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        if (formData.name && formData.email && formData.message) {
            alert(`Thank you, ${formData.name}! Your message has been sent.`);
            setFormData({ name: '', email: '', message: '' });
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div>
            <Navbar />

            {/* Page header */}
            <div className="hero-section">
                <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-xl text-gray-200">We would love to hear from you</p>
            </div>

            {/* Introduction */}
            <div className="section">
                <h2 className="text-4xl font-bold text-[#003366] mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Whether you have questions about our app, want to get involved, or need support, we are here to help. Fill out the form below or reach out to us through our contact information.
                </p>
            </div>

            {/* Contact form and info */}
            <div className="section bg-gray-50">
                <div className="w-full flex gap-8 flex-wrap items-start">
                    {/* Contact form */}
                    <div className="flex-1 flex flex-col gap-4" style={{ minWidth: '350px' }}>
                        <h3 className="text-3xl font-bold text-[#003366] mb-4">Send Us a Message</h3>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
                        />

                        <textarea
                            name="message"
                            placeholder="Tell us how we can help you..."
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
                            style={{ minHeight: '150px' }}
                        />

                        <button onClick={handleSubmit} className="btn-primary">
                            Send Message
                        </button>
                    </div>

                    {/* Contact information */}
                    <div className="flex-1 flex flex-col gap-6" style={{ minWidth: '300px' }}>
                        <h3 className="text-3xl font-bold text-[#003366] mb-4">Contact Information</h3>

                        <div className="card">
                            <h4 className="text-xl font-semibold text-[#0066cc] mb-2">Email</h4>
                            <p className="text-gray-700">support@deafcantalk.org</p>
                            <p className="text-gray-700">info@deafcantalk.org</p>
                        </div>

                        <div className="card">
                            <h4 className="text-xl font-semibold text-[#0066cc] mb-2">Phone</h4>
                            <p className="text-gray-700">+1 (555) 123-4567</p>
                            <p className="text-sm text-gray-600">Monday - Friday: 9am - 5pm EST</p>
                        </div>

                        <div className="card">
                            <h4 className="text-xl font-semibold text-[#0066cc] mb-2">Address</h4>
                            <p className="text-gray-700">123 Accessibility Lane</p>
                            <p className="text-gray-700">Suite 456</p>
                            <p className="text-gray-700">San Francisco, CA 94102</p>
                            <p className="text-gray-700">United States</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social media section */}
            <div className="section">
                <h2 className="text-3xl font-bold text-[#003366] mb-6 text-center">Connect With Us</h2>
                <p className="text-lg text-gray-700 text-center mb-6">
                    Follow us on social media to stay updated on our latest news and events.
                </p>
                <div className="flex gap-6 justify-center flex-wrap">
                    <div className="card" style={{ flex: '0 1 200px', textAlign: 'center' }}>
                        <img
                            src="/assets/communication.png"
                            alt="Facebook"
                            className="rounded-lg shadow-md mx-auto"
                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                        <h4 className="text-xl font-semibold text-[#0066cc] mb-2">Facebook</h4>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-[#0066cc]"
                        >
                            Follow Us
                        </a>
                    </div>

                    <div className="card" style={{ flex: '0 1 200px', textAlign: 'center' }}>
                        <img
                            src="/assets/twitter.png"
                            alt="Twitter"
                            className="rounded-lg shadow-md mx-auto"
                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                        <h4 className="text-xl font-semibold text-[#0066cc] mb-2">Twitter</h4>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-[#0066cc]"
                        >
                            Follow Us
                        </a>
                    </div>

                    <div className="card" style={{ flex: '0 1 200px', textAlign: 'center' }}>
                        <img
                            src="/assets/instagram.png"
                            alt="Instagram"
                            className="rounded-lg shadow-md mx-auto"
                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                        <h4 className="text-xl font-semibold text-[#0066cc] mb-2">Instagram</h4>
                        <a
                            href="https://www.instagram.com/deafcantalk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-[#0066cc]"
                        >
                            Follow Us
                        </a>
                    </div>

                    <div className="card" style={{ flex: '0 1 200px', textAlign: 'center' }}>
                        <img
                            src="/assets/linkedin.png"
                            alt="LinkedIn"
                            className="rounded-lg shadow-md mx-auto"
                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                        <h4 className="text-xl font-semibold text-[#0066cc] mb-2">LinkedIn</h4>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-[#0066cc]"
                        >
                            Follow Us
                        </a>
                    </div>
                </div>
            </div>

            {/* Map section */}
            <div className="section bg-gray-50">
                <h2 className="text-3xl font-bold text-[#003366] mb-6 text-center">Visit Our Office</h2>
                <div
                    className="w-full rounded-xl flex items-center justify-center"
                    style={{
                        height: '400px',
                        background: 'linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%)',
                        borderRadius: '12px'
                    }}
                >
                    <span className="text-4xl text-gray-500">Map Location</span>
                </div>
                <p className="text-sm text-gray-600 text-center mt-4">
                    Interactive map showing our office location would be displayed here.
                </p>
            </div>

            {/* FAQ section */}
            <div className="section">
                <h2 className="text-3xl font-bold text-[#003366] mb-6">Frequently Asked Questions</h2>
                <div className="flex flex-col gap-4">
                    <div className="card">
                        <h4 className="text-xl font-semibold text-[#0066cc] mb-2">
                            How can I download the DeafCanTalk app?
                        </h4>
                        <p className="text-gray-700">
                            The DeafCanTalk app is available for download on both the Apple App Store and Google Play Store. Simply search for "DeafCanTalk" and click install.
                        </p>
                    </div>

                    <div className="card">
                        <h4 className="text-xl font-semibold text-[#0066cc] mb-2">
                            Is the app free to use?
                        </h4>
                        <p className="text-gray-700">
                            Yes, the basic version of DeafCanTalk is completely free. We also offer a premium subscription with additional features for those who want to support our mission.
                        </p>
                    </div>

                    <div className="card">
                        <h4 className="text-xl font-semibold text-[#0066cc] mb-2">
                            How can I get involved with the DeafCanTalk community?
                        </h4>
                        <p className="text-gray-700">
                            There are many ways to get involved! You can volunteer at our events, contribute to our blog, or join our online community forums. Contact us to learn more about volunteer opportunities.
                        </p>
                    </div>

                    <div className="card">
                        <h4 className="text-xl font-semibold text-[#0066cc] mb-2">
                            Do you offer sign language classes?
                        </h4>
                        <p className="text-gray-700">
                            While we do not currently offer formal classes, our Education page provides comprehensive resources, video tutorials, and downloadable guides to help you learn sign language at your own pace.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
