import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Bonga Privacy Policy</h1>
            <Link href="/" className="text-white hover:text-purple-200 transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="px-6 py-8 sm:p-10">
          <div className="prose prose-indigo max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
              <p className="text-gray-600">
                Welcome to Bonga, a Facebook app that provides DM automation services for professional Instagram accounts. This Privacy Policy explains how we collect, use, and share your information when you use our application.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
              <p className="text-gray-600">
                To provide our services, we collect and process the following types of information:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                <li>Your Facebook and Instagram account information</li>
                <li>Direct messages from your Instagram professional account</li>
                <li>Automated responses you set up within our app</li>
                <li>Usage data and analytics related to your use of Bonga</li>
                <li>Any additional information you provide directly to us</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                <li>Provide and improve our DM automation services</li>
                <li>Manage and respond to Instagram direct messages on your behalf</li>
                <li>Analyze usage patterns to enhance our app&apos;s functionality</li>
                <li>Communicate with you about your account and our services</li>
                <li>Ensure compliance with Instagram&apos;s and Facebook&apos;s policies</li>
                <li>Prevent fraud and unauthorized access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-600">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                <li>With Instagram and Facebook, as required for our app&apos;s functionality</li>
                <li>With service providers who help us operate our business</li>
                <li>In response to legal requests or to prevent harm, as required by law</li>
                <li>With your explicit consent for any other purpose</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Data Retention and Deletion</h2>
              <p className="text-gray-600">
                We retain your information for as long as necessary to provide our services and comply with legal obligations. You can request deletion of your data at any time by contacting us or through the app settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Your Rights and Choices</h2>
              <p className="text-gray-600">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                <li>Access and update your personal information</li>
                <li>Control your privacy settings within the app</li>
                <li>Opt-out of certain data collection and use</li>
                <li>Request deletion of your account and associated data</li>
              </ul>
              <p className="text-gray-600 mt-2">
                You can exercise these rights through your account settings or by contacting us directly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Security</h2>
              <p className="text-gray-600">
                We implement appropriate technical and organizational measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="text-gray-600 mt-2">
                Email: privacy@joinbonga.com<br />
                Address: The Alma, Nairobi, 00100, Kenya
              </p>
            </section>
          </div>
        </div>
        <div className="bg-gray-50 px-6 py-4 sm:px-10">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Bonga. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
