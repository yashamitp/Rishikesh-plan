import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Globe, Heart, Calendar, Users } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/itinerary', label: '4-Day Itinerary', icon: <Calendar size={14} /> },
    { path: '/stays', label: 'Budget Hotels', icon: '🏨' },
    { path: '/activities', label: 'Adventure Activities', icon: '🚣‍♂️' },
    { path: '/food', label: 'Vegetarian Food Guide', icon: '🍽️' },
    { path: '/tips', label: 'April Travel Tips', icon: '🌡️' },
  ];

  const contactInfo = [
    { icon: <MapPin size={16} />, text: 'Tapovan, Rishikesh, Uttarakhand 249192' },
    { icon: <Phone size={16} />, text: '+91 9161907138' },
    { icon: <Mail size={16} />, text: 'yashprajapati.9769@gmail.com' },
    { icon: <Globe size={16} />, text: 'www.rishikeshtripplanner.com' },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 pt-16 pb-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-3 rounded-xl">
                <span className="text-2xl">🕉️</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Rishikesh Family Trip
                </h2>
                <p className="text-teal-400 font-medium">Planner for 12 People</p>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed max-w-lg">
              Your ultimate guide to planning a perfect 4-day family trip to Rishikesh 
              in mid-April. We provide detailed itineraries, budget stays, activities, 
              and travel tips tailored for 12 people.
            </p>
            
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-lg">
                <Users size={16} className="text-blue-400" />
                <span className="text-sm font-medium">12 People</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-lg">
                <Calendar size={16} className="text-green-400" />
                <span className="text-sm font-medium">4 Days</span>
              </div>
            </div>
          </div>

          {/* Right Column - Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 pb-2 border-b border-gray-800">
                Quick Navigation
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="flex items-center space-x-3 text-gray-400 hover:text-white hover:bg-gray-800/50 p-2 rounded-lg transition-all duration-300 group"
                    >
                      <span className="text-lg">{link.icon}</span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 pb-2 border-b border-gray-800">
                Contact Us
              </h3>
              <ul className="space-y-4">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="mt-1 text-blue-400 flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-gray-400 hover:text-white transition-colors">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Newsletter */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-6 pb-2 border-b border-gray-800">
                  Follow Us
                </h3>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-600 rounded-lg text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">
                  Get Trip Updates
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  Subscribe for exclusive travel tips and budget guides.
                </p>
                <form className="space-y-3">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                  >
                    Contact Us
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-500">
                &copy; {currentYear} Rishikesh Family Trip Planner. All rights reserved.
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Designed with <Heart size={14} className="inline text-red-400" /> for families traveling to Rishikesh
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/" className="text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/" className="text-gray-500 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Trip Stats */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-gray-800/30 rounded-lg">
                <div className="text-2xl font-bold text-white">4</div>
                <div className="text-sm text-gray-400">Days Itinerary</div>
              </div>
              <div className="p-4 bg-gray-800/30 rounded-lg">
                <div className="text-2xl font-bold text-white">12</div>
                <div className="text-sm text-gray-400">People Capacity</div>
              </div>
              <div className="p-4 bg-gray-800/30 rounded-lg">
                <div className="text-2xl font-bold text-white">₹72.9K</div>
                <div className="text-sm text-gray-400">Total Budget</div>
              </div>
              <div className="p-4 bg-gray-800/30 rounded-lg">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-gray-400">Vegetarian Focus</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      
    </footer>
  );
};

export default Footer;