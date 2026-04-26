import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pas-forest text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <div className="h-8 w-8 overflow-hidden rounded-md ring-1 ring-white/20">
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Plan Apply Systems logo"
                  className="h-full w-full object-cover" />
              </div>
              <h3 className="text-lg font-bold">Plan Apply Systems</h3>
            </div>
            <p className="text-green-200 text-sm">
              Expert consultancy for processing plant design, maintenance, and quality assurance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-pas-lime">Services</h4>
            <ul className="space-y-2 text-green-200 text-sm">
              <li><a href="#" className="hover:text-pas-lime transition">Plant Design & Build</a></li>
              <li><a href="#" className="hover:text-pas-lime transition">Maintenance Programs</a></li>
              <li><a href="#" className="hover:text-pas-lime transition">QA & Compliance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-pas-lime">Company</h4>
            <ul className="space-y-2 text-green-200 text-sm">
              <li><a href="#" className="hover:text-pas-lime transition">About Us</a></li>
              <li><a href="#" className="hover:text-pas-lime transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-pas-lime">Industries</h4>
            <ul className="space-y-2 text-green-200 text-sm">
              <li>Food & Beverage</li>
              <li>Chemical & Pharmaceutical</li>
              <li>Industrial Manufacturing</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-200 mb-4 md:mb-0 text-sm">
            © {currentYear} Plan Apply Systems. All rights reserved.
          </p>
          <a href="mailto:hello@planapplysystems.com"
            className="text-green-200 hover:text-pas-lime transition text-sm">
            hello@planapplysystems.com
          </a>
        </div>
      </div>
    </footer>
  );
}
