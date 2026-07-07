import React from "react";

export const metadata = {
  title: "Terms of Service | designALine",
  description: "Terms of Service for designALine Architects.",
};

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-[#1B6B36]">Terms of Service</h1>
      <div className="prose prose-lg max-w-none space-y-6">
        <p>
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
        <p>
          By accessing our website and using our architectural and interior design services, you agree to be bound by 
          these Terms of Service and all applicable laws and regulations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services</h2>
        <p>
          designALine provides architectural, interior design, and related consultation services. The specific scope of 
          services for each client will be outlined in a separate written agreement or proposal.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Intellectual Property Rights</h2>
        <p>
          Other than the content you own, under these Terms, designALine and/or its licensors own all the intellectual 
          property rights and materials contained in this Website and produced during our services (including blueprints, 
          designs, and 3D models).
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitation of Liability</h2>
        <p>
          In no event shall designALine, nor any of its officers, directors, and employees, be held liable for anything 
          arising out of or in any way connected with your use of this Website or our initial consultations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Governing Law</h2>
        <p>
          These Terms will be governed by and interpreted in accordance with the laws of the jurisdiction in which our 
          business is registered, and you submit to the non-exclusive jurisdiction of the state and federal courts located 
          for the resolution of any disputes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Information</h2>
        <p>
          If you have any inquiries regarding these terms, please reach out to us at:
        </p>
        <p className="font-semibold">
          designALine Architects<br/>
          Email: contact@designaline.in
        </p>
      </div>
    </div>
  );
}
