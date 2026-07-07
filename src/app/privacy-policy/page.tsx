import React from "react";

export const metadata = {
  title: "Privacy Policy | Design A'Line",
  description: "Privacy Policy for Design A'Line.",
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-[#1B6B36]">Privacy Policy</h1>
      <div className="prose prose-lg max-w-none space-y-6">
        <p className="font-medium">
          Effective Date: July 2026
        </p>
        
        <p>
          At Design A&apos;Line, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect the information you provide through our website and Google Ads lead forms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
        <p>
          We may collect the following information when you contact us or submit a lead form:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Full Name</li>
          <li>Phone Number</li>
          <li>Email Address</li>
          <li>Project Details</li>
          <li>Location (if provided)</li>
          <li>Any additional information you choose to share</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
        <p>
          The information collected is used to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Contact you regarding your inquiry.</li>
          <li>Provide architectural and interior design consultation.</li>
          <li>Prepare quotations and project proposals.</li>
          <li>Improve our services and customer experience.</li>
          <li>Respond to your questions and support requests.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information Sharing</h2>
        <p>
          We do not sell, rent, or trade your personal information.
        </p>
        <p>
          Your information may only be shared with trusted service providers when necessary to deliver our services or comply with legal obligations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
        <p>
          We take appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies</h2>
        <p>
          Our website may use cookies and similar technologies to improve your browsing experience and analyze website traffic.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
        <p>
          Our website may use services such as:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Google Ads</li>
          <li>Google Analytics</li>
          <li>Google Maps</li>
          <li>Meta (Facebook & Instagram)</li>
        </ul>
        <p>
          These services may collect anonymous usage data according to their own privacy policies.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
        <p>
          You may request to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access your personal information.</li>
          <li>Correct inaccurate information.</li>
          <li>Delete your personal information.</li>
          <li>Withdraw your consent for future communications.</li>
        </ul>
        <p>
          To make a request, please contact us using the details below.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <div className="space-y-2">
          <p className="font-semibold text-lg">Design A&apos;Line</p>
          <p>📍 Visakhapatnam, Andhra Pradesh, India</p>
          <p>📞 <a href="tel:+918333857444" className="hover:text-[#1B6B36] transition-colors">+91 83338 57444</a></p>
          <p>📧 <a href="mailto:designaline.advt@gmail.com" className="hover:text-[#1B6B36] transition-colors">designaline.advt@gmail.com</a></p>
          <p>🌐 <a href="https://www.designaline.com" className="hover:text-[#1B6B36] transition-colors">https://www.designaline.com</a></p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.
        </p>
      </div>
    </div>
  );
}
