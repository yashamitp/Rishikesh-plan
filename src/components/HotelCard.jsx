import React, { useState } from 'react';
// Update imports
import { MapPin, Star, Users, Check, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const HotelCard = ({ hotel }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Hotel Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-primary-400 to-secondary-500 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{hotel.name}</h3>
          <div className="flex items-center mt-1">
            <MapPin size={14} />
            <span className="ml-1 text-sm">{hotel.area}</span>
          </div>
        </div>
        {hotel.familyFriendly && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
            <Users size={12} className="mr-1" />
            Family Friendly
          </div>
        )}
      </div>

      {/* Hotel Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${
                  i < Math.floor(hotel.rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
              {hotel.rating}
            </span>
          </div>
          <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
            {hotel.priceRange}
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {hotel.description}
        </p>

        {/* Amenities */}
        <div className="mb-4">
          <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Amenities:
          </div>
          <div className="flex flex-wrap gap-2">
            {hotel.amenities.slice(0, 3).map((amenity, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs flex items-center"
              >
                <Check size={12} className="mr-1" />
                {amenity}
              </span>
            ))}
            {hotel.amenities.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                +{hotel.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Contact & Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Phone size={14} className="mr-1" />
            {hotel.contact}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setExpanded(!expanded)}
              className="px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
            >
              {expanded ? 'Show Less' : 'Details'}
            </button>
            <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors">
              Book Now
            </button>
          </div>
        </div>

        {/* Expanded Details */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <div>
                <span className="font-medium">Distance:</span> {hotel.distance}
              </div>
              <div>
                <span className="font-medium">All Amenities:</span>{' '}
                {hotel.amenities.join(', ')}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500">
                *Prices are for double occupancy. Family rooms available at 30% extra.
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default HotelCard;