import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HotelCard from '../components/HotelCard';
import { hotelsData } from '../data/hotelsData';
// Update imports
import { Filter, MapPin, IndianRupee, Users, Star, Phone, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Stays = () => {
  const [filter, setFilter] = useState('all');
  const [priceRange, setPriceRange] = useState(5000);
  const titleRef = useRef();
  const filterRef = useRef();
  const hotelsRef = useRef();

  useEffect(() => {
    // Title animation
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }
    );

    // Filter animation
    gsap.fromTo(filterRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: filterRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Hotels animation
    gsap.fromTo(hotelsRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: hotelsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const filteredHotels = hotelsData.filter(hotel => {
    // Parse price range
    const priceMatch = hotel.priceRange.match(/(\d+)/g);
    const maxPrice = priceMatch ? Math.max(...priceMatch.map(Number)) : 0;
    
    if (filter === 'budget' && maxPrice > 2000) return false;
    if (filter === 'premium' && maxPrice <= 2000) return false;
    if (filter === 'family' && !hotel.familyFriendly) return false;
    if (maxPrice > priceRange) return false;
    
    return true;
  });

  const areaStats = hotelsData.reduce((acc, hotel) => {
    acc[hotel.area] = (acc[hotel.area] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Budget Stays & Hotels
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
            Family-friendly accommodations near Laxman Jhula & Tapovan for your April trip
          </p>
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full px-6 py-3">
            <IndianRupee />
            <span className="font-bold">Price Range: ₹600 - ₹4,500 per night</span>
          </div>
        </div>

        {/* Stats & Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <IndianRupee className="text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">₹1,800</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Avg. Price/Night</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <Users className="text-green-600 dark:text-green-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">5/6</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Family Friendly</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <MapPin className="text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">4</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Areas Covered</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                <Star className="text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">4.1</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Avg. Rating</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div
          ref={filterRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <Filter className="text-primary-500 mr-2" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Filter Hotels</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Hotel Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {['all', 'budget', 'premium', 'family'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setFilter(type)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        filter === type
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Max Price: ₹{priceRange}
                </label>
                <input
                  type="range"
                  min="600"
                  max="4500"
                  step="100"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹600</span>
                  <span>₹4,500</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Areas
                </label>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(areaStats).map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                    >
                      {area} ({areaStats[area]})
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Quick Tips
                </label>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <p>• Book 2+ rooms for 15% discount</p>
                  <p>• April rates are 20% lower than peak</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hotels Grid */}
        <div ref={hotelsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>

        {/* Booking Tips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl border border-blue-200 dark:border-blue-800"
        >
          <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-400 mb-4">
            🏨 April Booking Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Best Areas</h4>
              <ul className="space-y-1 text-blue-800 dark:text-blue-400">
                <li>• Laxman Jhula: Central, near everything</li>
                <li>• Tapovan: Peaceful, yoga centers</li>
                <li>• Swarg Ashram: Spiritual atmosphere</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Cost Saving</h4>
              <ul className="space-y-1 text-blue-800 dark:text-blue-400">
                <li>• Book directly for 10-15% discount</li>
                <li>• Ask for family packages</li>
                <li>• Negotiate for 12 people group</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">For Families</h4>
              <ul className="space-y-1 text-blue-800 dark:text-blue-400">
                <li>• Request interconnecting rooms</li>
                <li>• Check for extra bed charges</li>
                <li>• Confirm AC availability</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Stays;