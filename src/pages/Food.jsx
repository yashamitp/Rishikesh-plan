import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { restaurantsData, budgetMealPlan } from '../data/restaurantsData';
// Update imports
import { IndianRupee, Star, Users, Clock, MapPin, Leaf } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Food = () => {
  const titleRef = useRef();
  const budgetRef = useRef();
  const restaurantsRef = useRef();

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

    // Budget animation
    gsap.fromTo(budgetRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: budgetRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Restaurants animation
    gsap.fromTo(restaurantsRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: restaurantsRef.current,
          start: "top 80%",
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
            Food & Cafes Guide
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
            Vegetarian-only restaurants with budget planning for 12 people
          </p>
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full px-6 py-3">
            <Leaf />
            <span className="font-bold">100% Vegetarian • Budget-Friendly</span>
          </div>
        </div>

        {/* Budget Overview */}
        <motion.div
          ref={budgetRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 text-white">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Food Budget Plan</h2>
                  <p className="text-green-100">For 12 people, 4 days in Rishikesh</p>
                </div>
                <div className="text-right">
                  <div className="text-5xl font-bold">₹38,400</div>
                  <p className="text-green-200">Minimum estimate</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {Object.entries(budgetMealPlan).map(([key, value]) => (
                  <div key={key} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-green-200 capitalize">{key}</div>
                      <IndianRupee size={16} />
                    </div>
                    <div className="text-2xl font-bold">{value}</div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/20">
                <div className="text-sm text-green-200">
                  *Based on ₹800-1,300 per person daily. Actual cost may vary based on restaurant choices.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Restaurants Grid */}
        <div ref={restaurantsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {restaurantsData.map((restaurant) => (
            <motion.div
              key={restaurant.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="p-6">
                {/* Restaurant Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {restaurant.name}
                      </h3>
                      {restaurant.familyFriendly && (
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">
                          Family
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {restaurant.area}
                      </span>
                      <span className="flex items-center">
                        <Star size={14} className="mr-1 text-yellow-500" />
                        {restaurant.rating}
                      </span>
                      <span className="flex items-center">
                        <IndianRupee size={14} className="mr-1" />
                        {restaurant.costPerPerson}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description & Cuisine */}
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {restaurant.description}
                </p>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Cuisine: {restaurant.cuisine}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.specialties.map((item, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timing & Contact */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Clock size={14} className="mr-1" />
                      {restaurant.timing}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      Best for: {restaurant.bestFor}
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium rounded-lg text-sm transition-colors">
                    View Menu
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money Saving Tips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="p-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl border border-amber-200 dark:border-amber-800"
        >
          <h3 className="text-2xl font-bold text-amber-800 dark:text-amber-400 mb-4">
            💰 Budget Saving Tips for Families
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-amber-700 dark:text-amber-300">Meal Sharing</h4>
              <ul className="space-y-1 text-amber-800 dark:text-amber-400">
                <li>• Portions are large - share between 2-3 people</li>
                <li>• Order family-style thalis for better value</li>
                <li>• Take advantage of lunch specials</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-amber-700 dark:text-amber-300">Smart Ordering</h4>
              <ul className="space-y-1 text-amber-800 dark:text-amber-400">
                <li>• Avoid bottled water (carry refillable bottles)</li>
                <li>• Local food is cheaper than continental</li>
                <li>• Street food is safe and economical</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-amber-700 dark:text-amber-300">Group Discounts</h4>
              <ul className="space-y-1 text-amber-800 dark:text-amber-400">
                <li>• Ask for group discounts (12 people)</li>
                <li>• Book in advance for special rates</li>
                <li>• Combine orders for bulk pricing</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Food;