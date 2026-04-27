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
              Engineering intelligent process and automation solutions for modern industry.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-pas-lime">Core Services</h4>
            <ul className="space-y-2 text-green-200 text-sm">
              <li><a href="#services" className="hover:text-pas-lime transition">Process Engineering</a></li>
              <li><a href="#services" className="hover:text-pas-lime transition">Industrial Automation</a></li>
              <li><a href="#services" className="hover:text-pas-lime transition">Digital & Smart Manufacturing</a></li>
              <li><a href="#services" className="hover:text-pas-lime transition">Validation & Compliance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-pas-lime">Company</h4>
            <ul className="space-y-2 text-green-200 text-sm">
              <li><a href="#about" className="hover:text-pas-lime transition">Who We Are</a></li>
              <li><a href="#about" className="hover:text-pas-lime transition">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-pas-lime transition">Let's Work Together</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-pas-lime">Industries</h4>
            <ul className="space-y-2 text-green-200 text-sm">
              <li>Pharmaceuticals</li>
              <li>Oil & Gas</li>
              <li>Manufacturing</li>
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
