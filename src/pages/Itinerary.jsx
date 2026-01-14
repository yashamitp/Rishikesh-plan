import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DayCard from '../components/DayCard';
import { itineraryData, totalBudget } from '../data/itineraryData';
// Update imports
import { Calendar, Users, IndianRupee, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Itinerary = () => {
  const titleRef = useRef();
  const budgetRef = useRef();
  const daysRef = useRef();

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

    // Budget section animation
    gsap.fromTo(budgetRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: budgetRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Days animation
    gsap.fromTo(daysRef.current.children,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: daysRef.current,
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
            4-Day Rishikesh Itinerary
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            Perfectly planned for 12 people traveling in mid-April
          </p>
          <div className="inline-flex items-center space-x-6 bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg">
            <div className="flex items-center space-x-2">
              <Calendar className="text-primary-500" />
              <span className="font-medium">April 15-18, 2024</span>
            </div>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-700"></div>
            <div className="flex items-center space-x-2">
              <Users className="text-primary-500" />
              <span className="font-medium">12 People</span>
            </div>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-700"></div>
            <div className="flex items-center space-x-2">
              <MapPin className="text-primary-500" />
              <span className="font-medium">Rishikesh, Uttarakhand</span>
            </div>
          </div>
        </div>

        {/* Total Budget Card */}
        <motion.div
          ref={budgetRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 text-white">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Total Trip Budget</h2>
                  <p className="text-primary-100">For 12 people, 4 days in mid-April</p>
                </div>
                <div className="text-right">
                  <div className="text-5xl font-bold">₹72,900</div>
                  <p className="text-primary-200">≈ ₹6,075 per person</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(totalBudget).map(([key, value]) => (
                  <div key={key} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-sm text-primary-200 mb-1 capitalize">{key}</div>
                    <div className="text-xl font-bold">{value}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center">
                  <IndianRupee className="mr-2" />
                  <span className="text-sm">
                    *All prices are estimates. Book in advance for better rates.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Days Itinerary */}
        <div ref={daysRef} className="space-y-8">
          {itineraryData.map((day) => (
            <DayCard key={day.id} day={day} />
          ))}
        </div>

        {/* Additional Tips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl border border-amber-200 dark:border-amber-800"
        >
          <h3 className="text-2xl font-bold text-amber-800 dark:text-amber-400 mb-4">
            💡 April-Specific Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Beat the Heat</h4>
              <ul className="space-y-1 text-amber-800 dark:text-amber-400">
                <li>• Plan outdoor activities before 11 AM or after 4 PM</li>
                <li>• Carry 2-liter water bottles per person</li>
                <li>• Wear light-colored, loose cotton clothing</li>
                <li>• Use umbrellas or hats for sun protection</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Budget Saving</h4>
              <ul className="space-y-1 text-amber-800 dark:text-amber-400">
                <li>• Book rafting as group for 20% discount</li>
                <li>• Choose hotels with complimentary breakfast</li>
                <li>• Share meals (portions are large)</li>
                <li>• Use local buses for short distances</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Itinerary;