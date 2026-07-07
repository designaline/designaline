import React from "react";

export const metadata = {
  title: "Cookie Policy | designALine",
  description: "Cookie Policy for designALine Architects.",
};

export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-[#1B6B36]">Cookie Policy</h1>
      <div className="prose prose-lg max-w-none space-y-6">
        <p>
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. What are Cookies?</h2>
        <p>
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
          They are widely used in order to make websites work, or work more efficiently, as well as to provide 
          information to the owners of the site.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Cookies</h2>
        <p>
          We use cookies to understand how you interact with our website and to improve your experience. 
          This includes analytics tracking (such as Google Analytics) to measure website traffic and performance.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Types of Cookies We Use</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
          <li><strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant advertisements.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Managing Cookies</h2>
        <p>
          You can set your browser not to accept cookies. However, in a few cases, some of our website features may 
          not function as a result.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Information</h2>
        <p>
          If you have any questions about our Cookie Policy, please contact us at:
        </p>
        <p className="font-semibold">
          designALine Architects<br/>
          Email: contact@designaline.in
        </p>
      </div>
    </div>
  );
}
