import React, { useState } from 'react';
// Update imports
import { ChevronDown, Clock, Thermometer, IndianRupee, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const DayCard = ({ day }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
    >
      {/* Day Header */}
      <div 
        className="relative p-6 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary-500 to-secondary-500"></div>
        <div className="flex items-center justify-between ml-4">
          <div>
            <div className="flex items-center space-x-3">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                  {day.day}
                </span>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {day.title}
                </h3>
              </div>
              <div className="flex items-center px-3 py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                <Calendar size={14} className="text-primary-600 dark:text-primary-400 mr-1" />
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                  {day.date}
                </span>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="text-gray-500" />
          </motion.div>
        </div>
      </div>

      {/* Activities Preview */}
      <div className="px-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex items-start space-x-3">
            <Clock className="text-primary-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-700 dark:text-gray-300">Best Time</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{day.bestTime}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Thermometer className="text-red-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-700 dark:text-gray-300">April Heat Tips</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {day.tips.slice(0, 2).join(', ')}
              </p>
            </div>
          </div>
        </div>

        {/* Budget Summary */}
        <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-700 dark:text-gray-300 flex items-center">
              <IndianRupee size={16} className="mr-1" />
              Daily Budget
            </h4>
            <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
              {day.budget.total}
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {Object.entries(day.budget).map(([key, value]) => (
              key !== 'total' && (
                <div key={key} className="text-center">
                  <div className="text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                  <div className="font-medium text-gray-700 dark:text-gray-300">{value}</div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      <motion.div
        initial={false}
        animate={{ height: expanded ? 'auto' : 0 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700 pt-6">
          {/* Activities List */}
          <div className="mb-6">
            <h4 className="font-bold text-gray-800 dark:text-white mb-3">Activities Schedule</h4>
            <div className="space-y-3">
              {day.activities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 dark:text-primary-400 font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{activity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Tips */}
          <div>
            <h4 className="font-bold text-gray-800 dark:text-white mb-3">Detailed Tips for April</h4>
            <ul className="space-y-2">
              {day.tips.map((tip, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-400">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DayCard;