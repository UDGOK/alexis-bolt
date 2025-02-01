'use client';

import React from 'react';
import Image from 'next/image';
import { ParallaxSection } from '@/components/parallax-section';

const services = [
  { title: "Land Clearing & Site Preparation", description: "Preparing your land for construction or landscaping is our specialty. We remove trees, debris, and obstacles to create a clean slate for your project in Tulsa and surrounding areas.", image: "/images/alexis-concrete-footings.jpg" },
  { title: "Grading & Leveling", description: "Proper grading ensures a stable foundation for your construction project. We use advanced equipment to level your site with precision, considering Tulsa's unique soil conditions.", image: "/images/concrete-retention-pond.jpg" },
  { title: "Utility Trenching", description: "Need trenches for water, gas, or electrical lines? Our team ensures accurate and safe trenching for all your utility needs, adhering to Tulsa's local regulations.", image: "/images/alexis-concrete-pours2.jpg" },
  { title: "Foundation Excavation", description: "From residential homes to commercial buildings in Tulsa, Bixby, and Jenks, we dig foundations that are ready for construction, ensuring stability in Oklahoma's diverse soil types.", image: "/images/alexis-concrete-footings3.jpg" },
  { title: "Dirt Removal & Hauling", description: "We handle the heavy lifting, removing excess dirt and debris from your site to keep your project on track. Our efficient hauling services cover the entire Tulsa metro area.", image: "/images/alexis-concrete-splash.jpg" },
  { title: "Custom Excavation Projects", description: "Have a unique project in Tulsa or Oklahoma City? We're happy to tailor our services to meet your specific requirements, no matter how complex.", image: "/images/building-erection-1.jpg" },
  { title: "Moisture Conditioning", description: "We optimize soil moisture content for your Tulsa area project, ensuring proper compaction and stability. This is crucial for Oklahoma's varying weather conditions.", image: "/images/alexis-concrete-splash.jpg" },
  { title: "Sub Grade Preparation", description: "Our expert team prepares a solid sub grade foundation for your construction project, tailored to withstand Tulsa's unique soil and climate challenges.", image: "/images/alexis-concrete-footings.jpg" },
  { title: "Material Haul Off", description: "Efficient removal of excess materials from your Tulsa job site. We ensure proper disposal and recycling, adhering to local environmental regulations.", image: "/images/alexis-concrete-pours2.jpg" },
  { title: "Lime Stabilization", description: "We use lime stabilization techniques to improve soil stability in Tulsa's clay-rich areas, enhancing the longevity and performance of your construction project.", image: "/images/concrete-retention-pond.jpg" },
];

const faqs = [
  { question: "What is excavation, and why is it important?", answer: "Excavation is the process of removing soil, rock, or other materials to prepare a site for construction or landscaping. It's crucial for creating a stable foundation, installing utilities, and ensuring proper drainage." },
  { question: "How much does excavation cost in Tulsa, OK?", answer: "The cost of excavation depends on factors like the size of the project, soil type, and specific services required. Contact us for a free estimate tailored to your needs." },
  { question: "Do you handle residential and commercial projects?", answer: "Yes! We provide excavation services for both residential and commercial clients, from small backyard projects to large-scale construction sites in Tulsa and surrounding areas." },
  { question: "How long does an excavation project take?", answer: "Project timelines vary based on the scope of work. A small residential project may take a day or two, while larger commercial jobs can take weeks. We'll provide a clear timeline during your consultation." },
  { question: "Are you licensed and insured?", answer: "Absolutely. We are fully licensed and insured, giving you peace of mind that your project is in safe hands." },
  { question: "What additional excavation services do you offer?", answer: "In addition to our core excavation services, we offer moisture conditioning, sub grade preparation, material haul off, and lime stabilization. These services are crucial for ensuring the stability and longevity of construction projects in the Tulsa area, considering our unique soil and climate conditions." },
];

export default function ExcavationServices() {
  return (
    <div className="overflow-hidden">
      <ParallaxSection
        bgImage="/images/alexis-concrete-footings.jpg"
        height="80vh"
        overlayContent={
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Excavation Services</h1>
            <p className="text-2xl">Tulsa, Oklahoma & Surrounding Areas</p>
          </div>
        }
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-primary">Professional Excavation Services You Can Trust</h2>
            <p className="text-xl font-normal leading-relaxed mb-6">
              Looking for reliable excavation services in Tulsa, Oklahoma, or nearby areas like Bixby, Jenks, and Oklahoma City? Whether you're preparing land for construction, clearing a site, or need precise digging for utilities, we've got you covered. At Alexis Concrete and Asphalt, we combine cutting-edge equipment, skilled operators, and a commitment to excellence to deliver results that exceed expectations. Our comprehensive services now include moisture conditioning, sub grade preparation, material haul off, and lime stabilization, ensuring we meet all your excavation needs with expertise tailored to Tulsa's unique soil and climate conditions.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-primary">Our Excavation Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg shadow-sm overflow-hidden"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={300}
                    style={{ objectFit: "cover" }}
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
            <h2 className="text-3xl font-semibold mb-6 text-primary">Why Choose Us for Excavation Services in Tulsa & Beyond?</h2>
            <ul className="list-disc pl-6 space-y-3 text-lg font-normal leading-relaxed">
              <li><span className="font-semibold">Local Expertise:</span> We understand the unique soil and terrain challenges in Tulsa, Bixby, Jenks, and Oklahoma City.</li>
              <li><span className="font-semibold">State-of-the-Art Equipment:</span> Our modern machinery ensures precision and efficiency.</li>
              <li><span className="font-semibold">Experienced Team:</span> With years of experience, our operators are skilled in handling projects of all sizes.</li>
              <li><span className="font-semibold">Customer-Centric Approach:</span> Your satisfaction is our priority. We work closely with you to ensure your project is completed on time and within budget.</li>
              <li><span className="font-semibold">Competitive Pricing:</span> Quality services at prices that won't break the bank.</li>
            </ul>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-semibold mb-6 text-primary">Let's Get Started on Your Project Today!</h2>
            <p className="text-xl font-normal leading-relaxed mb-8">Ready to break ground on your next project? Contact Alexis Concrete and Asphalt today for a free consultation and estimate. Whether you're in Tulsa, Bixby, Jenks, or Oklahoma City, we're here to provide the excavation services you need to get the job done right.</p>
            <button
              className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-dark transition duration-300"
            >
              Get Your Free Estimate Today!
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}