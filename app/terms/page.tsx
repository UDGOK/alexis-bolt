'use client'

import { MotionWrapper } from "components/MotionWrapper"

export default function TermsPage() {
  return (
    <MotionWrapper
      motionTag="main"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="pt-32 pb-16 min-h-screen"
    >
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Terms and Conditions
        </h1>
        <div className="prose prose-invert max-w-4xl mx-auto">
          <p>
            Welcome to Alexis Concrete and Asphalt! These terms and conditions outline the rules and regulations for the use of our website and services.
          </p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Alexis Concrete and Asphalt's website if you do not accept all of the terms and conditions stated on this page.
          </p>

          <h2>2. Services</h2>
          <p>
            We provide concrete and asphalt services including but not limited to installation, repair, and maintenance. All services are subject to availability and our standard terms of service.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            Unless otherwise stated, Alexis Concrete and Asphalt and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.
          </p>

          <h2>4. Limitation of Liability</h2>
          <p>
            In no event shall Alexis Concrete and Asphalt, nor any of its officers, directors and employees, be liable for anything arising out of or in any way connected with your use of this website.
          </p>

          <h2>5. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the State of Oklahoma and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </div>
      </div>
    </MotionWrapper>
  )
}
