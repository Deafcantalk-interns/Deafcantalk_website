import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import celImage from '../assets/cvs.jpg';
import ikeImage from '../assets/ike.jpg';
import bejalImage from '../assets/bejal.jpg';
import victorImage from '../assets/victor.jpg';

const About = () => {
  return (
    <div>
      <Navbar />
      
      {/* Page header */}
      <div className="hero-section">
        <h1 className="text-5xl text-white font-bold mb-4">About DeafCanTalk</h1>
        <p className="text-xl text-white">Our mission is to empower the deaf and hard-of-hearing community</p>
      </div>
      
      {/* Mission section */}
      <div className="section">
        <h2 className="text-4xl font-bold text-[#003366] mb-6 text-center">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          DeafCanTalk was founded with a simple yet powerful vision: to create a world where communication barriers no longer exist for the deaf and hard-of-hearing community. We believe that everyone deserves to be heard, understood, and included in every conversation.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our mobile app leverages cutting-edge technology to provide real-time sign language translation, educational resources, and a supportive community platform. We are committed to breaking down barriers and fostering a more inclusive society where deaf individuals can thrive.
        </p>
      </div>
      
      {/* History section */}
      <div className="section bg-gray-50">
        <div className="w-full flex items-center gap-8 flex-wrap">
          <div className="flex-1 flex flex-col">
            <img 
              src={celImage}
              alt="Our Story" 
              className="rounded-lg shadow-lg w-full" 
              style={{ maxWidth: '500px' }}
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-4xl font-bold text-[#003366]">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              DeafCanTalk began in 2020 when a group of passionate developers, educators, and deaf community advocates came together with a shared goal: to revolutionize communication for the deaf and hard-of-hearing.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              What started as a small project has grown into a comprehensive platform serving thousands of users worldwide. Our team has worked tirelessly to develop innovative features that truly meet the needs of our community.
            </p>
          </div>
        </div>
      </div>
      
      {/* Vision section */}
      <div className="section">
        <h2 className="text-4xl font-bold text-[#003366] mb-6 text-center">Our Vision</h2>
        <div className="w-full flex gap-6 flex-wrap justify-center">
          {/* Vision 1 */}
          <div className="card" style={{ flex: 1, minWidth: '280px', maxWidth: '350px' }}>
            <h3 className="text-2xl font-semibold text-[#0066cc] mb-3">Global Accessibility</h3>
            <p className="text-gray-700">
              We envision a world where sign language is universally recognized and accessible technology empowers every deaf individual to communicate effortlessly.
            </p>
          </div>
          
          {/* Vision 2 */}
          <div className="card" style={{ flex: 1, minWidth: '280px', maxWidth: '350px' }}>
            <h3 className="text-2xl font-semibold text-[#0066cc] mb-3">Education for All</h3>
            <p className="text-gray-700">
              We aim to provide comprehensive educational resources that enable both deaf individuals and hearing people to learn and understand sign language.
            </p>
          </div>
          
          {/* Vision 3 */}
          <div className="card" style={{ flex: 1, minWidth: '280px', maxWidth: '350px' }}>
            <h3 className="text-2xl font-semibold text-[#0066cc] mb-3">Innovation & Advocacy</h3>
            <p className="text-gray-700">
              We are committed to continuous innovation and advocacy, pushing for policies and technologies that promote inclusiveness and equality.
            </p>
          </div>
        </div>
      </div>
      
      {/* Team section */}
      <div className="section bg-gray-50 w-full">
        <h2 className="text-4xl font-bold text-[#003366] mb-6 text-center">Meet Our Team</h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          Our diverse team brings together expertise in technology, education, and deaf advocacy to create meaningful impact.
        </p>
        <div className="w-full flex gap-6 flex-wrap justify-center">
          {/* Team member 1 */}
          <div className="card" style={{ flex: 1, minWidth: '250px', maxWidth: '300px', textAlign: 'center' }}>
            <img src={ikeImage} alt="Ike Agyei Menah" />
            <h3 className="text-xl font-bold text-[#003366] mb-2">Ike Agyei Menah</h3>
            <p className="text-md text-[#0066cc] mb-3">Founder & CEO</p>
            <p className="text-sm text-gray-700">
              Passionate advocate for deaf rights with 15 years of experience in accessibility technology.
            </p>
          </div>
          
          {/* Team member 2 */}
          <div className="card" style={{ flex: 1, minWidth: '250px', maxWidth: '300px', textAlign: 'center' }}>
            <img src={bejalImage} alt="Bejal Joshi" />
            <h3 className="text-xl font-bold text-[#003366] mb-2">Bejal Joshi</h3>
            <p className="text-md text-[#0066cc] mb-3">COO & Cofounder</p>
            <p className="text-sm text-gray-700">
              Expert in AI and machine learning, specializing in sign language recognition systems.
            </p>
          </div>
          
          {/* Team member 3 */}
          <div className="card" style={{ flex: 1, minWidth: '250px', maxWidth: '300px', textAlign: 'center' }}>
            <img src={victorImage} alt="Victor Wealth-Adankai" />
            <h3 className="text-xl font-bold text-[#003366] mb-2">Victor Wealth-Adankai</h3>
            <p className="text-md text-[#0066cc] mb-3">CTO & Cofounder</p>
            <p className="text-sm text-gray-700">
              Certified ASL interpreter and educator dedicated to creating accessible learning materials.
            </p>
          </div>
        </div>
      </div>
      
      {/* Community impact */}
      <div className="section">
        <h2 className="text-4xl font-bold text-[#003366] mb-6 text-center">Our Community Impact</h2>
        <div className="w-full flex gap-8 flex-wrap justify-center items-center">
          <div className="card" style={{ flex: 1, minWidth: '200px', maxWidth: '250px', textAlign: 'center' }}>
            <p className="text-5xl font-bold text-blue-500 mb-2">50,000+</p>
            <p className="text-lg text-gray-700">Active Users</p>
          </div>
          
          <div className="card" style={{ flex: 1, minWidth: '200px', maxWidth: '250px', textAlign: 'center' }}>
            <p className="text-5xl font-bold text-blue-600 mb-2">100+</p>
            <p className="text-lg text-gray-700">Educational Resources</p>
          </div>
          
          <div className="card" style={{ flex: 1, minWidth: '200px', maxWidth: '250px', textAlign: 'center' }}>
            <p className="text-5xl font-bold text-blue-800 mb-2">25</p>
            <p className="text-lg text-gray-700">Countries Reached</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
