'use client'

import { MotionWrapper } from '@/components/motion-wrapper'

export default function TermsPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-12">
              Terms
            </h1>
          </MotionWrapper>
        </div>
      </section>

      {/* Terms Content */}
      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-tight">
                1. Terms of Service
              </h2>
              <p className="text-white/70 font-light leading-relaxed">
                By accessing and using the services provided by Alexis Concrete and Asphalt ("AC&A"), you agree to be bound by these Terms of Service. These terms govern your use of our website, services, and any related content or materials.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-tight">
                2. Use License
              </h2>
              <p className="text-white/70 font-light leading-relaxed">
                Permission is granted to temporarily access the materials (information or software) on AC&A's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/70 font-light">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained on AC&A's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-tight">
                3. Disclaimer
              </h2>
              <p className="text-white/70 font-light leading-relaxed">
                The materials on AC&A's website are provided on an 'as is' basis. AC&A makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-tight">
                4. Limitations
              </h2>
              <p className="text-white/70 font-light leading-relaxed">
                In no event shall AC&A or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AC&A's website, even if AC&A or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-tight">
                5. Accuracy of Materials
              </h2>
              <p className="text-white/70 font-light leading-relaxed">
                The materials appearing on AC&A's website could include technical, typographical, or photographic errors. AC&A does not warrant that any of the materials on its website are accurate, complete, or current. AC&A may make changes to the materials contained on its website at any time without notice.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-tight">
                6. Links
              </h2>
              <p className="text-white/70 font-light leading-relaxed">
                AC&A has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by AC&A of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-tight">
                7. Modifications
              </h2>
              <p className="text-white/70 font-light leading-relaxed">
                AC&A may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-tight">
                8. Governing Law
              </h2>
              <p className="text-white/70 font-light leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of [Your State/Country] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-tight">
                Contact Information
              </h2>
              <p className="text-white/70 font-light leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-white/70 font-light leading-relaxed">
                Alexis Concrete and Asphalt<br />
                [Your Address]<br />
                Email: info@alexiscanda.com<br />
                Phone: (555) 123-4567
              </p>
            </div>

            <div className="pt-8">
              <p className="text-white/50 font-light text-sm">
                Last updated: January 1, 2024
              </p>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </main>
  )
}
