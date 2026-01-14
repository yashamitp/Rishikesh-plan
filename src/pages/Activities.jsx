import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ActivityCard from '../components/ActivityCard';
import { activitiesData, safetyNotes } from '../data/activitiesData';
// Update imports
import { AlertTriangle, Shield, Clock, Thermometer } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Activities = () => {
  const [activeCategory, setActiveCategory] = useState('adventure');
  const titleRef = useRef();
  const safetyRef = useRef();
  const categoriesRef = useRef();

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

    // Safety animation
    gsap.fromTo(safetyRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: safetyRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Categories animation
    gsap.fromTo(categoriesRef.current.children,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: categoriesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const categories = [
    { key: 'adventure', name: 'Adventure Sports', count: activitiesData.adventure.length },
    { key: 'spiritual', name: 'Spiritual', count: activitiesData.spiritual.length },
    { key: 'nature', name: 'Nature & Wildlife', count: activitiesData.nature.length },
  ];

  const currentActivities = activitiesData[activeCategory];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Activities & Experiences
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
            Adventure, spiritual, and nature activities perfect for families in April
          </p>
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full px-6 py-3">
            <Thermometer />
            <span className="font-bold">April Heat-Adjusted Timings Included</span>
          </div>
        </div>

        {/* Activity Categories */}
        <div ref={categoriesRef} className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`relative p-6 rounded-2xl text-left transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.key
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-2xl'
                    : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-3xl ${
                    activeCategory === category.key ? 'text-white' : 'text-primary-500'
                  }`}>
                    {category.key === 'adventure' && '🏄‍♂️'}
                    {category.key === 'spiritual' && '🕉️'}
                    {category.key === 'nature' && '🌿'}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    activeCategory === category.key
                      ? 'bg-white/20'
                      : 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                  }`}>
                    {category.count} activities
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className={`text-sm ${
                  activeCategory === category.key ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {category.key === 'adventure' && 'River rafting, bungee jumping, flying fox'}
                  {category.key === 'spiritual' && 'Ganga Aarti, yoga classes, ashram visits'}
                  {category.key === 'nature' && 'Waterfall treks, safari, beach camping'}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {currentActivities.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              category={activeCategory}
            />
          ))}
        </div>

        {/* Safety Section */}
        <motion.div
          ref={safetyRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl border border-red-200 dark:border-red-800 p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg mr-4">
                <Shield className="text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-800 dark:text-red-400">
                  April Safety Guidelines
                </h3>
                <p className="text-red-700 dark:text-red-300">
                  Special precautions needed for mid-April heat
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3 flex items-center">
                  <AlertTriangle className="mr-2" />
                  General Safety Notes
                </h4>
                <ul className="space-y-2">
                  {safetyNotes.map((note, index) => (
                    <li key={index} className="flex items-start space-x-2 text-red-800 dark:text-red-400">
                      <span className="mt-1">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3 flex items-center">
                  <Clock className="mr-2" />
                  April Timing Tips
                </h4>
                <ul className="space-y-3 text-red-800 dark:text-red-400">
                  <li className="p-3 bg-white/50 dark:bg-red-900/30 rounded-lg">
                    <div className="font-medium">Water Activities</div>
                    <div className="text-sm">Best: 9 AM - 12 PM | Avoid: 1 PM - 4 PM</div>
                  </li>
                  <li className="p-3 bg-white/50 dark:bg-red-900/30 rounded-lg">
                    <div className="font-medium">Trekking & Walking</div>
                    <div className="text-sm">Best: 6 AM - 10 AM | Evening: 4 PM - 7 PM</div>
                  </li>
                  <li className="p-3 bg-white/50 dark:bg-red-900/30 rounded-lg">
                    <div className="font-medium">Temple Visits</div>
                    <div className="text-sm">Best: 8 AM - 11 AM | Evening: 5 PM - 8 PM</div>
                  </li>
                  <li className="p-3 bg-white/50 dark:bg-red-900/30 rounded-lg">
                    <div className="font-medium">Rest Period</div>
                    <div className="text-sm">Essential: 12 PM - 3 PM (hottest hours)</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Family Tips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="p-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200 dark:border-green-800"
        >
          <h3 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-4">
            👨‍👩‍👧‍👦 Family-Specific Activity Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/50 dark:bg-green-900/30 p-4 rounded-xl">
              <div className="font-semibold text-green-700 dark:text-green-300 mb-2">
                Age-Appropriate Activities
              </div>
              <div className="text-sm text-green-800 dark:text-green-400">
                • Kids (5-12): Waterfalls, Ganga Aarti, short treks<br/>
                • Teens: Rafting, flying fox, Beatles Ashram<br/>
                • Elders: Yoga, temple visits, river view cafes
              </div>
            </div>

            <div className="bg-white/50 dark:bg-green-900/30 p-4 rounded-xl">
              <div className="font-semibold text-green-700 dark:text-green-300 mb-2">
                Group Discounts
              </div>
              <div className="text-sm text-green-800 dark:text-green-400">
                • 12 people: 20-25% off on rafting<br/>
                • Family packages available<br/>
                • Bulk booking discounts<br/>
                • Advance booking benefits
              </div>
            </div>

            <div className="bg-white/50 dark:bg-green-900/30 p-4 rounded-xl">
              <div className="font-semibold text-green-700 dark:text-green-300 mb-2">
                Hydration Schedule
              </div>
              <div className="text-sm text-green-800 dark:text-green-400">
                • Every hour: 200ml water<br/>
                • Carry ORS packets<br/>
                • Coconut water breaks<br/>
                • Avoid sugary drinks
              </div>
            </div>

            <div className="bg-white/50 dark:bg-green-900/30 p-4 rounded-xl">
              <div className="font-semibold text-green-700 dark:text-green-300 mb-2">
                Emergency Prep
              </div>
              <div className="text-sm text-green-800 dark:text-green-400">
                • Keep group together<br/>
                • Designate meeting points<br/>
                • Share emergency contacts<br/>
                • Basic first aid kit
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Activities;