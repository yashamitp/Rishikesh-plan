import React, { useState, useEffect, useRef } from 'react'; // Added useState here
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { travelTipsData } from '../data/travelTipsData';
import { Thermometer, Briefcase, CheckCircle, XCircle, AlertTriangle, Sun, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TravelTips = () => {
  const titleRef = useRef();
  const sectionsRef = useRef();

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

    // Sections animation
    gsap.fromTo(sectionsRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionsRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            April Travel Tips
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
            Essential advice for a comfortable and safe family trip to Rishikesh in mid-April
          </p>
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full px-6 py-3">
            <Thermometer />
            <span className="font-bold">Special focus on beating the April heat</span>
          </div>
        </div>

        {/* Tips Sections */}
        <div ref={sectionsRef} className="space-y-8">
          {/* Best Time Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                <Sun className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Best Time to Visit in April
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Plan your activities around the temperature
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Early April (1st-15th): Pleasant weather, 25-35°C",
                "Late April (16th-30th): Hotter, 30-40°C",
                "Morning (6 AM - 11 AM): Best for outdoor activities",
                "Evening (5 PM - 8 PM): Comfortable for sightseeing",
                "Avoid afternoon (12 PM - 4 PM): Peak heat hours"
              ].map((point, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Packing List */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">
                <Briefcase className="text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  What to Pack for April
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Pack smart for the April weather
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-4 text-lg">
                  Essentials
                </h4>
                <div className="space-y-3">
                  {[
                    "Light cotton clothes (5-6 sets)",
                    "Comfortable walking shoes",
                    "Sun hat/cap and sunglasses",
                    "Sunscreen (SPF 50+)",
                    "Water bottle (2 liters capacity)"
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg"
                    >
                      <CheckCircle size={16} className="text-purple-600 dark:text-purple-400" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-4 text-lg">
                  Optional but Recommended
                </h4>
                <div className="space-y-3">
                  {[
                    "Swimwear for rafting",
                    "Light jacket for evenings",
                    "Basic first aid kit",
                    "Mosquito repellent",
                    "Waterproof phone case"
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Do's & Don'ts */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg mr-4">
                <CheckCircle className="text-green-600 dark:text-green-400" />
              </div>
              <div className="p-3 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 rounded-lg">
                <XCircle className="text-red-600 dark:text-red-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Do's & Don'ts in Rishikesh
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Cultural and safety guidelines
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-green-700 dark:text-green-400 mb-4 text-lg">
                  Do's
                </h4>
                <div className="space-y-3">
                  {[
                    "Do carry plenty of water",
                    "Do wear comfortable footwear",
                    "Do respect local customs and temples",
                    "Do bargain while shopping",
                    "Do keep emergency contacts handy"
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg"
                    >
                      <CheckCircle size={16} className="text-green-600 dark:text-green-400 mt-0.5" />
                      <span className="text-green-800 dark:text-green-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-red-700 dark:text-red-400 mb-4 text-lg">
                  Don'ts
                </h4>
                <div className="space-y-3">
                  {[
                    "Don't swim in Ganga without supervision",
                    "Don't feed or provoke monkeys",
                    "Don't litter, especially near river",
                    "Don't carry expensive jewelry",
                    "Don't venture alone at night"
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg"
                    >
                      <XCircle size={16} className="text-red-600 dark:text-red-400 mt-0.5" />
                      <span className="text-red-800 dark:text-red-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Heat Safety */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl shadow-lg p-8 border border-red-200 dark:border-red-800"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg mr-4">
                <AlertTriangle className="text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-800 dark:text-red-400">
                  Heat & Safety Tips for April
                </h3>
                <p className="text-red-700 dark:text-red-300">
                  Critical for mid-April travel (temperatures: 30-40°C)
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Drink 3-4 liters of water daily",
                "Carry ORS packets for rehydration",
                "Wear light-colored, loose clothing",
                "Take breaks in shade every 2 hours",
                "Recognize heat exhaustion symptoms",
                "Use umbrellas or hats for sun protection",
                "Eat light, frequent meals",
                "Avoid alcohol during daytime"
              ].map((tip, index) => (
                <div
                  key={index}
                  className="p-4 bg-white/50 dark:bg-red-900/30 rounded-xl"
                >
                  <div className="text-sm text-red-700 dark:text-red-300 mb-2">
                    Tip {index + 1}
                  </div>
                  <div className="text-red-800 dark:text-red-400 font-medium">
                    {tip}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Family Specific Tips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl shadow-lg p-8 border border-blue-200 dark:border-blue-800"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                <Users className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-400">
                  Tips for Family with Children & Elders
                </h3>
                <p className="text-blue-700 dark:text-blue-300">
                  Special considerations for families with children & elders
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Plan shorter activities for elders",
                "Keep children hydrated and in shade",
                "Carry basic medicines (fever, upset stomach)",
                "Choose AC accommodation for afternoon rest",
                "Book activities with minimum walking",
                "Keep family together in crowded places",
                "Have fixed meeting points in case of separation"
              ].map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-blue-900/30 rounded-xl"
                >
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-blue-800 dark:text-blue-400">{tip}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Budget Tips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl shadow-lg p-8 border border-green-200 dark:border-green-800"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                <span className="text-green-600 dark:text-green-400 font-bold text-xl">₹</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800 dark:text-green-400">
                  Budget-Saving Tips
                </h3>
                <p className="text-green-700 dark:text-green-300">
                  Save money on your 12-person trip
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Book rafting as group for 20% discount",
                "Choose hotels with complimentary breakfast",
                "Share meals (portions are large)",
                "Use local buses for short distances",
                "Carry refillable water bottles",
                "Book activities directly, not through agents"
              ].map((tip, index) => (
                <div
                  key={index}
                  className="p-4 bg-white/50 dark:bg-green-900/30 rounded-xl"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                      ₹
                    </div>
                    <div className="font-semibold text-green-700 dark:text-green-300">
                      Save {20 + index * 5}%
                    </div>
                  </div>
                  <div className="text-green-800 dark:text-green-400">
                    {tip}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Emergency Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-8 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-2xl border border-red-200 dark:border-red-800"
        >
          <h3 className="text-2xl font-bold text-red-800 dark:text-red-400 mb-4">
            🚨 Emergency Contacts & Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-white/50 dark:bg-red-900/30 rounded-xl">
              <div className="font-bold text-red-700 dark:text-red-300 mb-2">Police</div>
              <div className="text-red-800 dark:text-red-400">100</div>
              <div className="text-sm text-red-700 dark:text-red-300">Rishikesh Police: +91 135-2432100</div>
            </div>
            
            <div className="p-4 bg-white/50 dark:bg-red-900/30 rounded-xl">
              <div className="font-bold text-red-700 dark:text-red-300 mb-2">Ambulance</div>
              <div className="text-red-800 dark:text-red-400">108 or 102</div>
              <div className="text-sm text-red-700 dark:text-red-300">Max Hospital: +91 135-2444444</div>
            </div>
            
            <div className="p-4 bg-white/50 dark:bg-red-900/30 rounded-xl">
              <div className="font-bold text-red-700 dark:text-red-300 mb-2">Fire</div>
              <div className="text-red-800 dark:text-red-400">101</div>
              <div className="text-sm text-red-700 dark:text-red-300">Fire Station: +91 135-2432222</div>
            </div>
            
            <div className="p-4 bg-white/50 dark:bg-red-900/30 rounded-xl">
              <div className="font-bold text-red-700 dark:text-red-300 mb-2">Tourist Helpline</div>
              <div className="text-red-800 dark:text-red-400">1363</div>
              <div className="text-sm text-red-700 dark:text-red-300">Uttarakhand Tourism: +91 135-2430200</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TravelTips;