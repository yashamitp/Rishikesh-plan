import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// Update imports
import { ArrowRight, Users, Calendar, IndianRupee, Shield, Sun } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef();
  const highlightsRef = useRef();
  const featuresRef = useRef();
  const ctaRef = useRef();

  useEffect(() => {
    // Hero animation
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }
    );

    // Highlights animation
    gsap.fromTo(highlightsRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: highlightsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Features animation
    gsap.fromTo(featuresRef.current.children,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // CTA animation
    gsap.fromTo(ctaRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const highlights = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "12 People",
      description: "Perfect itinerary for large families & groups",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "4 Days",
      description: "Well-planned schedule covering all highlights",
      color: "text-green-600 dark:text-green-400"
    },
    {
      icon: <IndianRupee className="w-8 h-8" />,
      title: "Budget Focus",
      description: "Total cost around ₹73,000 for entire trip",
      color: "text-amber-600 dark:text-amber-400"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Family Safe",
      description: "Activities suitable for all ages",
      color: "text-purple-600 dark:text-purple-400"
    }
  ];

  const features = [
    {
      title: "Complete Itinerary",
      description: "Day-by-day plan with timing, activities, and budget",
      link: "/itinerary"
    },
    {
      title: "Budget Stays",
      description: "Family-friendly hotels from ₹800-₹4,500 per night",
      link: "/stays"
    },
    {
      title: "Adventure Activities",
      description: "Rafting, trekking, yoga, and temple visits",
      link: "/activities"
    },
    {
      title: "Vegetarian Food Guide",
      description: "Best budget restaurants with cost per person",
      link: "/food"
    },
    {
      title: "April Travel Tips",
      description: "Beat the heat with our safety guide",
      link: "/tips"
    },
    {
      title: "Total Budget Breakdown",
      description: "Detailed cost analysis for 12 people",
      link: "/itinerary"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585506936727-5b7e724d4d5b?auto=format&fit=crop&w=1920')] opacity-10 dark:opacity-5"></div>
        
        <div ref={heroRef} className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            Rishikesh Family Trip
            <span className="block text-4xl md:text-5xl text-primary-600 dark:text-primary-400 mt-2">
              Planner for 12 People
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Your complete guide to planning a memorable 4-day family trip to Rishikesh 
            in mid-April with detailed itinerary and budget planning.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/itinerary"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              View 4-Day Itinerary
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <Link
              to="/tips"
              className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-bold rounded-full text-lg border-2 border-primary-500 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Sun className="mr-2" />
              April Heat Tips
            </Link>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg">
              <IndianRupee className="text-green-500 mr-2" />
              <span className="font-bold text-lg text-gray-800 dark:text-white">
                Total Estimated Budget: <span className="text-green-600 dark:text-green-400">₹72,900</span>
              </span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Trip Highlights
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Perfectly planned for 12 people traveling in mid-April on a budget
            </p>
          </div>
          
          <div ref={highlightsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-xl transition-shadow"
              >
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${item.color.replace('text', 'bg')}/10 mb-4`}>
                  <div className={item.color}>
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Plan
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Detailed guides covering all aspects of your Rishikesh trip
            </p>
          </div>
          
          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <ArrowRight className="text-gray-400 group-hover:text-primary-500 group-hover:translate-x-2 transition-all" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div ref={ctaRef} className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Plan Your Rishikesh Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get started with our detailed 4-day itinerary perfect for 12 people traveling in mid-April.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/itinerary"
              className="px-8 py-4 bg-white text-primary-600 font-bold rounded-full text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              View Complete Itinerary
            </Link>
            <Link
              to="/tips"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white/10 transition-colors"
            >
              Read Travel Tips
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;