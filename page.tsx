'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Expert NEET Counselling for Your Medical Future
              </h1>
              <p className="text-lg mb-8 text-blue-100">
                Get personalized guidance from medical experts to secure your seat in top medical colleges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-700 hover:bg-blue-600 px-6 py-3 rounded-md font-medium transition-colors">
                  Start Your Journey
                </button>
                <button className="border border-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-md font-medium transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image 
                src="/hero-doctor-student.png" 
                alt="Doctor and Student" 
                width={500} 
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Medico Pilot Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Why Choose Medico Pilot?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '/icon-expert-guidance.png', title: 'Expert Guidance', description: 'Personalized counseling from experienced medical professionals' },
              { icon: '/icon-college-selection.png', title: 'College Selection', description: 'Help in choosing the right medical college based on your rank' },
              { icon: '/icon-documentation.png', title: 'Documentation Support', description: 'Complete assistance with all required documentation' },
              { icon: '/icon-interview-prep.png', title: 'Interview Preparation', description: 'Mock interviews and tips to ace the counseling process' },
              { icon: '/icon-alumni-network.png', title: 'Alumni Network', description: 'Connect with successful medical professionals' },
              { icon: '/icon-scholarship.png', title: 'Scholarship Assistance', description: 'Guidance on available scholarships and financial aid' }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="mb-4 flex justify-center">
                  <Image 
                    src={feature.icon} 
                    alt={feature.title} 
                    width={60} 
                    height={60}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our NEET Stars Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Meet Our NEET Stars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Priya Sharma', rank: 'AIR 124', college: 'AIIMS Delhi', image: '/student-female-1.png' },
              { name: 'Rahul Kumar', rank: 'AIR 256', college: 'MAMC Delhi', image: '/student-male-1.png' },
              { name: 'Anjali Patel', rank: 'AIR 412', college: 'KMC Manipal', image: '/student-female-2.png' },
              { name: 'Vikram Singh', rank: 'AIR 589', college: 'JIPMER Puducherry', image: '/student-male-2.png' }
            ].map((student, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <Image 
                    src={student.image} 
                    alt={student.name} 
                    width={200} 
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-900">{student.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">Rank: {student.rank}</p>
                  <p className="text-sm text-gray-700">{student.college}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Medical Career Paths Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Explore Medical Career Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'General Medicine', icon: '/career-general-medicine.png' },
              { title: 'Surgery', icon: '/career-surgery.png' },
              { title: 'Pediatrics', icon: '/career-pediatrics.png' },
              { title: 'Cardiology', icon: '/career-cardiology.png' },
              { title: 'Neurology', icon: '/career-neurology.png' },
              { title: 'Oncology', icon: '/career-oncology.png' },
              { title: 'Psychiatry', icon: '/career-psychiatry.png' },
              { title: 'Radiology', icon: '/career-radiology.png' }
            ].map((career, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                <div className="h-20 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <Image 
                    src={career.icon} 
                    alt={career.title} 
                    width={80} 
                    height={80}
                  />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 text-center">{career.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missed Our Webinar Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Missed Our Webinar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'NEET 2023 Strategy', thumbnail: '/webinar-thumbnail-1.png', duration: '45:32' },
              { title: 'MBBS Admission Process', thumbnail: '/webinar-thumbnail-2.png', duration: '52:18' },
              { title: 'Career Options After MBBS', thumbnail: '/webinar-thumbnail-3.png', duration: '38:45' }
            ].map((webinar, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <Image 
                    src={webinar.thumbnail} 
                    alt={webinar.title} 
                    width={400} 
                    height={225}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 rounded-full p-3 cursor-pointer hover:bg-opacity-100 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {webinar.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-900">{webinar.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Arjun Verma', role: 'Parent', content: 'Medico Pilot provided excellent guidance for my daughter\'s NEET counseling. Their experts helped her secure a seat in a top medical college.', image: '/testimonial-parent-1.png' },
              { name: 'Sneha Reddy', role: 'Student', content: 'I was confused about which college to choose based on my rank. The team at Medico Pilot helped me make an informed decision.', image: '/testimonial-student-1.png' },
              { name: 'Rajesh Kumar', role: 'Parent', content: 'The documentation process was so smooth with Medico Pilot\'s assistance. They handled everything professionally.', image: '/testimonial-parent-2.png' }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    width={60} 
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-blue-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Experts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Dr. Anand Sharma', title: 'MBBS, MD (Medicine)', experience: '15+ Years', image: '/expert-male-1.png' },
              { name: 'Dr. Priya Nair', title: 'MBBS, MS (Surgery)', experience: '12+ Years', image: '/expert-female-1.png' },
              { name: 'Dr. Rajiv Kumar', title: 'MBBS, DM (Cardiology)', experience: '18+ Years', image: '/expert-male-2.png' },
              { name: 'Dr. Meera Patel', title: 'MBBS, MD (Pediatrics)', experience: '10+ Years', image: '/expert-female-2.png' }
            ].map((expert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <Image 
                    src={expert.image} 
                    alt={expert.name} 
                    width={250} 
                    height={250}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-900">{expert.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{expert.title}</p>
                  <p className="text-sm text-gray-700">Experience: {expert.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: 'What is NEET counseling?',
                answer: 'NEET counseling is the process through which seats are allotted to eligible candidates in medical and dental colleges across India based on their NEET rank.'
              },
              {
                question: 'When does NEET counseling start?',
                answer: 'NEET counseling typically starts a few weeks after the NEET results are declared. The exact dates are announced by the Medical Counselling Committee (MCC).'
              },
              {
                question: 'How many rounds of counseling are there in NEET?',
                answer: 'NEET counseling generally consists of two rounds followed by a mop-up round for vacant seats. A stray vacancy round may also be conducted if seats remain unfilled.'
              },
              {
                question: 'Can I change my college after the first round of counseling?',
                answer: 'Yes, candidates can participate in the second round of counseling for upgradation if they are not satisfied with the college allotted in the first round.'
              },
              {
                question: 'What documents are required for NEET counseling?',
                answer: 'Documents required for NEET counseling include NEET admit card, result, rank letter, Class 10 and 12 mark sheets, domicile certificate, category certificate (if applicable), and other relevant documents.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-lg font-semibold text-blue-900">{faq.question}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-blue-900 transform transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${activeAccordion === index ? 'max-h-40 py-4' : 'max-h-0'}`}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image 
                  src="/logo-placeholder.png" 
                  alt="Medico Pilot Logo" 
                  width={40} 
                  height={40}
                  className="rounded mr-2"
                />
                <span className="text-xl font-bold">Medico Pilot</span>
              </div>
              <p className="text-blue-200">
                Your trusted partner for NEET counseling and medical career guidance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-blue-200">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  123 Medical Complex, Delhi, India
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 9876543210
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@medicopilot.com
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>
                <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-4 py-2 rounded-l-md text-gray-900 flex-grow"
                  />
                  <button className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-r-md transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-200">
            <p>&copy; {new Date().getFullYear()} Medico Pilot. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}