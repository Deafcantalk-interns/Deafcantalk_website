import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            alert(`Thank you, ${formData.name}! Your message has been sent.`);
            setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
            alert('Please fill in all required fields.');
        }
    };

    return (
        <div className="bg-white">
            <Navbar />

            {/* Hero Section */}
            <div className="w-full bg-gradient-to-br from-gray-50 to-white pt-32 pb-20 px-4 sm:px-6 md:px-10">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>
            </div>

            {/* Contact Options Grid */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {/* Sales */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                        <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: '#0D5364' }}>
                            <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-black mb-3">Sales</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Learn how DeafCanTalk can help your institution or organization.
                        </p>
                        <a href="mailto:contact@deafcantalk.com" className="text-base font-semibold inline-flex items-center gap-2" style={{ color: '#0D5364' }}>
                            Contact sales →
                        </a>
                    </div>

                    {/* Help & Support */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                        <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: '#1E88A8' }}>
                            <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-black mb-3">Help & Support</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Get assistance from our support team with any technical issues.
                        </p>
                        <a href="mailto:contact@deafcantalk.com" className="text-base font-semibold inline-flex items-center gap-2" style={{ color: '#1E88A8' }}>
                            Get help →
                        </a>
                    </div>

                    {/* Media & Press */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                        <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 bg-purple-600">
                            <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
                                <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h3v7h-4v2z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-black mb-3">Media & Press</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Press inquiries and media kit requests.
                        </p>
                        <a href="mailto:contact@deafcantalk.com" className="text-base font-semibold inline-flex items-center gap-2 text-purple-600">
                            Contact press →
                        </a>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Form */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Send us a message</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Fill out the form below and we'll get back to you within 24 hours.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-gray-800 focus:ring-2 focus:ring-gray-100 transition-all text-base"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="your.email@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-gray-800 focus:ring-2 focus:ring-gray-100 transition-all text-base"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="How can we help?"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-gray-800 focus:ring-2 focus:ring-gray-100 transition-all text-base"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                                <textarea
                                    name="message"
                                    placeholder="Tell us more about your inquiry..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-gray-800 focus:ring-2 focus:ring-gray-100 transition-all text-base resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-4 rounded-lg font-semibold text-white text-lg transition-all hover:opacity-90 shadow-lg"
                                style={{ backgroundColor: '#0D5364' }}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        {/* Contact Details */}
                        <div className="bg-gray-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-black mb-6">Get in touch</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#0D5364' }}>
                                        <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-black mb-1">Email</h4>
                                        <a href="mailto:contact@deafcantalk.com" className="text-gray-600 hover:text-gray-800">contact@deafcantalk.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#1E88A8' }}>
                                        <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-black mb-1">Phone</h4>
                                        <p className="text-gray-600">+233 53 363 4102</p>
                                        <p className="text-sm text-gray-500">Mon-Fri, 9am-5pm GMT</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-purple-600">
                                        <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-black mb-1">Office</h4>
                                        <p className="text-gray-600">Accra, Ghana</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] sm:h-[450px] md:h-[500px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.0327917096579!2d-0.21185057218524694!3d5.703665500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9dc3ff920f0d%3A0xa50d22898a5f7675!2sAshongman%20Station!5e0!3m2!1sen!2sgh!4v1762196019585!5m2!1sen!2sgh"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="DeafCanTalk Office Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="w-full bg-gray-50 py-20 px-4 sm:px-6 md:px-10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 text-center">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600 mb-12 text-center">
                        Quick answers to questions you may have
                    </p>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="text-xl font-bold text-black mb-3">
                                How can I download the DeafCanTalk app?
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                                The DeafCanTalk app is available for download on both the Apple App Store and Google Play Store. Simply search for "DeafCanTalk" and click install.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="text-xl font-bold text-black mb-3">
                                Is the app free to use?
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                                Yes, the basic version of DeafCanTalk is completely free. We also offer a premium subscription with additional features for those who want to support our mission.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="text-xl font-bold text-black mb-3">
                                How can I get involved with the DeafCanTalk community?
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                                There are many ways to get involved! You can volunteer at our events, contribute to our blog, or join our online community forums. Contact us to learn more about volunteer opportunities.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="text-xl font-bold text-black mb-3">
                                Do you offer sign language classes?
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                                While we do not currently offer formal classes, our Education page provides comprehensive resources, video tutorials, and downloadable guides to help you learn sign language at your own pace.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
