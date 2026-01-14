import React, { useState } from 'react';
// Update imports
import { Clock, IndianRupee, Users, AlertTriangle, Calendar, CheckCircle, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const ActivityCard = ({ activity, category }) => {
  const [showSafety, setShowSafety] = useState(false);

  const getCategoryColor = (cat) => {
    switch (cat) {
      case 'adventure': return 'from-red-500 to-orange-500';
      case 'spiritual': return 'from-purple-500 to-indigo-500';
      case 'nature': return 'from-green-500 to-emerald-500';
      default: return 'from-blue-500 to-cyan-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
    >
      {/* Activity Header */}
      <div className={`relative h-2 bg-gradient-to-r ${getCategoryColor(category)}`}></div>
      
      <div className="p-6">
        {/* Title & Category */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
              {activity.name}
            </h3>
            <div className="flex items-center space-x-4 text-sm">
              <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
              <span className={`px-3 py-1 rounded-full ${
                activity.familyFriendly 
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                  : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
              }`}>
                {activity.familyFriendly ? 'Family Friendly' : 'Adults Only'}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {activity.description}
        </p>

        {/* Quick Info Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <Clock size={18} className="text-gray-500" />
            <div>
              <div className="text-sm text-gray-500">Duration</div>
              <div className="font-medium text-gray-700 dark:text-gray-300">{activity.duration}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <IndianRupee size={18} className="text-gray-500" />
            <div>
              <div className="text-sm text-gray-500">Price</div>
              <div className="font-medium text-gray-700 dark:text-gray-300">{activity.price}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar size={18} className="text-gray-500" />
            <div>
              <div className="text-sm text-gray-500">Best Time</div>
              <div className="font-medium text-gray-700 dark:text-gray-300">{activity.bestTime}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Users size={18} className="text-gray-500" />
            <div>
              <div className="text-sm text-gray-500">Age Limit</div>
              <div className="font-medium text-gray-700 dark:text-gray-300">{activity.ageLimit}</div>
            </div>
          </div>
        </div>

        {/* Safety & Booking */}
        <div className="space-y-3">
          {activity.safety && (
            <button
              onClick={() => setShowSafety(!showSafety)}
              className="w-full flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg text-left"
            >
              <div className="flex items-center space-x-2">
                <AlertTriangle className="text-red-500" />
                <span className="font-medium text-red-700 dark:text-red-400">Safety Information</span>
              </div>
              <ChevronDown
                className={`text-red-500 transition-transform ${showSafety ? 'rotate-180' : ''}`}
              />
            </button>
          )}

          {showSafety && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg text-sm text-red-700 dark:text-red-400"
            >
              {activity.safety}
            </motion.div>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {activity.bookingRequired ? (
                <div className="flex items-center">
                  <CheckCircle size={14} className="mr-1 text-green-500" />
                  Booking required
                </div>
              ) : 'Walk-in available'}
            </div>
            <button className="px-6 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ActivityCard;