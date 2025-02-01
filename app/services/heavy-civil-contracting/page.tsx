'use client';

import React from 'react';
import { ParallaxSection } from '@/components/parallax-section';

const services = [
  { title: "Storm Water Management", description: "Custom-tailored drainage systems, retention ponds, and storm sewers to handle even the most intense rain events. We ensure your property is protected from flooding and compliant with local regulations.", video: "/videos/projects-tulsa-1.mp4" },
  { title: "Sewer Solutions", description: "Expert installation of sewer pipes and infrastructure for new developments, as well as repair and rehabilitation services. We specialize in both trenchless and conventional methods to minimize disruptions.", video: "/videos/projects-tulsa-2.mp4" },
  { title: "Domestic Water Systems", description: "Professional installation of durable, high-performance water distribution systems. We also offer upgrades, replacements, and leak detection services to ensure safe and reliable water infrastructure.", video: "/videos/our-work-1.mp4" },
];

const faqs = [
  { question: "What areas do you serve for heavy civil contracting?", answer: "We provide our heavy civil contracting services throughout Oklahoma, with a focus on major cities and surrounding areas." },
  { question: "How do you ensure compliance with local regulations?", answer: "Our team stays up-to-date with all local Oklahoma regulations and environmental standards. We handle all necessary permits and ensure every project meets or exceeds regulatory requirements." },
  { question: "Can you handle both small-scale and large-scale projects?", answer: "Absolutely! We have the expertise and equipment to manage projects of all sizes, from residential developments to major municipal infrastructure works." },
  { question: "What sets your heavy civil contracting services apart?", answer: "Our local expertise, cutting-edge equipment, highly trained professionals, and commitment to customer satisfaction set us apart. We provide customized solutions tailored to Oklahoma's unique climate and soil conditions." },
  { question: "Do you offer emergency services for sewer or water main issues?", answer: "Yes, we provide emergency response services for unforeseen sewer line issues and water main breaks to ensure public health and safety." },
  { question: "How do you price your services?", answer: "We offer competitive pricing with free, transparent estimates. Our pricing is based on the scope of the project, and we work with you to find solutions that fit your budget without compromising on quality." },
];

export default function HeavyCivilContractingPage() {
  return (
    <div className="overflow-hidden">
      <ParallaxSection
        bgImage="/images/alexis-concrete-footings.jpg"
        height="80vh"
        overlayContent={
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Heavy Civil Contracting Services</h1>
            <p className="text-2xl">Oklahoma & Surrounding Areas</p>
          </div>
        }
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-primary">Premium Civil Services in Oklahoma by Alexis Concrete & Asphalt</h2>
            <p className="text-xl font-normal leading-relaxed mb-6">
              At Alexis Concrete & Asphalt, we take pride in providing robust heavy-duty civil services throughout Oklahoma. Whether you need storm water management systems, sewer construction or repairs, or reliable domestic water infrastructure solutions, our experienced team is committed to delivering high-quality concrete and asphalt work for both commercial and residential projects. With a reputation for precision, efficiency, and safety, we ensure every project meets the rigorous standards of our industry.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-primary">Our Comprehensive Civil Services</h2>
            <div className="grid md:grid-cols-1 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg shadow-sm overflow-hidden"
                >
                  <video
                    src={service.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
                    <p className="text-lg font-normal leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-primary">FAQ Section: Answering Your Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={`faq-${index}`}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-semibold mb-2 text-primary">{faq.question}</h3>
                  <p className="text-lg font-normal leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-primary">Why Choose Alexis Concrete & Asphalt?</h2>
            <ul className="list-disc pl-6 space-y-3 text-lg font-normal leading-relaxed">
              <li><span className="font-semibold">Local Expertise:</span> We understand the unique challenges of Oklahoma's climate, soil conditions, and municipal codes.</li>
              <li><span className="font-semibold">Cutting-Edge Equipment:</span> Our state-of-the-art machinery ensures precision and efficiency, reducing project timelines and minimizing disruptions.</li>
              <li><span className="font-semibold">Highly Trained Professionals:</span> Our skilled teams are continually updated with industry best practices and safety protocols.</li>
              <li><span className="font-semibold">Customer Satisfaction:</span> We pride ourselves on client relationships built on trust, clear communication, and reliable service every step of the way.</li>
              <li><span className="font-semibold">Competitive Pricing:</span> We provide free estimates, transparent pricing, and flexible financing options for both small-scale and large-scale projects.</li>
            </ul>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-semibold mb-6 text-primary">Get in Touch Today!</h2>
            <p className="text-xl font-normal leading-relaxed mb-8">Ready to start your heavy civil contracting project? Contact Alexis Concrete and Asphalt today for a free consultation and estimate. Let us show you why we're a trusted name in Oklahoma for heavy-duty storm, sewer, and domestic water civil projects.</p>
            <button
              className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-dark transition duration-300"
            >
              Call Us at 918.520.3823
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}