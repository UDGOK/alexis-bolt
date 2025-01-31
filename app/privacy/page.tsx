'use client'

import { motion } from 'framer-motion'
import { MotionWrapper } from '@/components/motion-wrapper'

export default function PrivacyPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <MotionWrapper
          motionTag="h1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-light tracking-tight mb-12 text-center"
        >
          Privacy Policy
        </MotionWrapper>

        <div className="space-y-8">
          <Section title="Introduction">
            <p>
              Alexis Concrete and Asphalt Inc. ("we", "our", or "us") is committed to protecting the privacy of our clients and website visitors. This Privacy Policy outlines our practices concerning the collection, use, and disclosure of personal information in the construction industry context.
            </p>
          </Section>

          <Section title="Information We Collect">
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Contact information (e.g., name, email address, phone number)</li>
              <li>Project details and specifications</li>
              <li>Site location and property information</li>
              <li>Financial information for billing purposes</li>
              <li>Communication records between you and our team</li>
            </ul>
          </Section>

          <Section title="How We Use Your Information">
            <p>We use the collected information to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Provide and improve our construction services</li>
              <li>Communicate about project progress and updates</li>
              <li>Process payments and maintain financial records</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Analyze and improve our website and services</li>
            </ul>
          </Section>

          <Section title="Data Security">
            <p>
              We implement industry-standard security measures to protect your information, including encryption, access controls, and secure data storage practices. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="Third-Party Disclosure">
            <p>
              We may share your information with trusted third parties, such as subcontractors, suppliers, and regulatory bodies, when necessary for project completion or to comply with legal obligations. We require these parties to maintain the confidentiality and security of your information.
            </p>
          </Section>

          <Section title="Your Rights">
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Access and review your personal information</li>
              <li>Request corrections to your personal information</li>
              <li>Request the deletion of your personal information, subject to legal retention requirements</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </Section>

          <Section title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting a prominent notice on our website or sending you a direct communication.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              If you have any questions or concerns about our Privacy Policy or data practices, please contact us at:
            </p>
            <p className="mt-2">
              Alexis Concrete and Asphalt Inc.<br />
              Email: privacy@alexisconcrete.com<br />
              Phone: 918.861.6776
            </p>
          </Section>
        </div>
      </div>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <MotionWrapper
      motionTag="section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-light mb-4">{title}</h2>
      {children}
    </MotionWrapper>
  )
}