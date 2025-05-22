import React, { useState, useEffect } from 'react';
import { ChevronDown, Star, Shield, Gem, Clock, Award, Instagram, Facebook, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import Image1 from './assets/1.avif';
import Image2 from './assets/2.avif';
import Image5 from './assets/5.jpg';
import Image6 from './assets/6.avif';
import Image8 from './assets/8.avif';
import Image9 from './assets/9.avif';
import Image10 from './assets/10.avif';
import Image11 from './assets/11.avif';
import Image12 from './assets/12.avif';
const ChronosElite = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsNavbarScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (targetId) => {
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const watches = [
    {
      name: "Elite Perpetual",
      description: "A masterpiece of horological excellence featuring perpetual calendar complications and hand-engraved 18k rose gold case.",
      image: Image8,
      price: "From $125,000"
    },
    {
      name: "Elite Chronograph",
      description: "Precision-engineered chronograph with in-house movement, sapphire crystal, and titanium construction.",
      image: Image1,
      price: "From $85,000"
    },
    {
      name: "Elite Heritage",
      description: "Classic dress watch with ultra-thin movement, handcrafted dial, and crocodile leather strap.",
      image: Image6,
      price: "From $65,000"
    }
  ];

  const craftFeatures = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Swiss Movement",
      description: "In-house manufactured movements with over 500 components, assembled by master horologists."
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Premium Materials",
      description: "18k gold, platinum cases with genuine crocodile leather straps and sapphire crystal glass."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Lifetime Warranty",
      description: "Comprehensive lifetime service guarantee with annual maintenance by certified technicians."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Master Crafted",
      description: "Each timepiece requires 6 months of meticulous handcrafting by our most skilled artisans."
    }
  ];

  return (
    <div className="bg-black text-white font-light overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isNavbarScrolled 
          ? 'bg-black bg-opacity-95 backdrop-blur-xl py-4' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="text-2xl font-extralight tracking-wider text-yellow-400">
            CHRONOS ELITE
          </div>
          <div className="hidden md:flex space-x-12 text-sm tracking-widest">
            {['HOME', 'HERITAGE', 'COLLECTION', 'CRAFT', 'CONTACT'].map((item, index) => (
              <button
                key={item}
                onClick={() => smoothScroll(item.toLowerCase())}
                className="hover:text-yellow-400 transition-colors duration-500 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow-400 group-hover:w-full transition-all duration-500"></span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {/* <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"
          style={{
            backgroundImage: `url(${Image12})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="relative z-10 text-center px-8 max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-extralight mb-6 tracking-wider leading-tight">
            TIMELESS
            <span className="block text-yellow-400 font-thin">LUXURY</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Where centuries of Swiss craftsmanship meet modern innovation
          </p>
          <button 
            onClick={() => smoothScroll('collection')}
            className="group relative inline-flex items-center px-12 py-4 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-700 tracking-widest text-sm"
          >
            DISCOVER COLLECTION
            <ChevronDown className="ml-3 w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
        
        {/* Scroll Indicator 
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-yellow-400 to-transparent animate-pulse"></div>
        </div>
      </section> 
      */}
  <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${Image12})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        {/* Multiple Overlay Layers for Better Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/60"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-8 max-w-5xl">
          {/* Enhanced Text with Shadow and Backdrop */}
          <div className="relative">
            <div className="absolute inset-0 bg-black/40 blur-xl rounded-3xl transform scale-110"></div>
            <h1 className="relative text-6xl md:text-8xl font-extralight mb-6 tracking-wider leading-tight drop-shadow-2xl">
              <span className="text-white drop-shadow-lg">TIMELESS</span>
              <span className="block text-yellow-400 font-thin drop-shadow-lg filter brightness-110">LUXURY</span>
            </h1>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-black/30 blur-lg rounded-2xl transform scale-105"></div>
            <p className="relative text-xl md:text-2xl font-light mb-12 text-gray-100 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              Where centuries of Swiss craftsmanship meet modern innovation
            </p>
          </div>
          
          <div className="relative">
            <button 
              onClick={() => smoothScroll('collection')}
              className="group relative inline-flex items-center px-12 py-4 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-700 tracking-widest text-sm backdrop-blur-sm bg-black/20 shadow-2xl hover:shadow-yellow-400/30"
            >
              DISCOVER COLLECTION
              <ChevronDown className="ml-3 w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-yellow-400 to-transparent animate-pulse drop-shadow-lg"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs text-yellow-400 -mt-6 tracking-widest opacity-75 animate-bounce">
              SCROLL
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-8 w-1 h-32 bg-gradient-to-b from-yellow-400/60 to-transparent"></div>
        <div className="absolute top-1/4 right-8 w-1 h-32 bg-gradient-to-b from-yellow-400/60 to-transparent"></div>
      </section>
      {/* Heritage Section */}
      <section id="heritage" className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-extralight tracking-wider">
                Heritage & 
                <span className="block text-yellow-400">Innovation</span>
              </h2>
              <div className="w-24 h-px bg-yellow-400"></div>
              <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                <p>
                  Since 1875, Chronos Elite has been the epitome of Swiss horological excellence. 
                  Each timepiece represents a marriage of time-honored traditions and cutting-edge innovation.
                </p>
                <p>
                  Our master watchmakers, trained in the ancient art of haute horlogerie, dedicate 
                  months to perfecting every detail, ensuring each watch becomes a cherished heirloom.
                </p>
                <p>
                  From our atelier in the Swiss Alps to the world's most prestigious collections, 
                  we create timepieces that transcend mere functionality to become works of art.
                </p>
              </div>
              <div className="flex space-x-12 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-light text-yellow-400">150+</div>
                  <div className="text-sm tracking-wider text-gray-400">YEARS OF CRAFT</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-yellow-400">500+</div>
                  <div className="text-sm tracking-wider text-gray-400">COMPONENTS</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-yellow-400">6</div>
                  <div className="text-sm tracking-wider text-gray-400">MONTHS TO CRAFT</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-20 blur-3xl transform rotate-6"></div>
              <img 
                src={Image11} 
                alt="Master Craftsman" 
                className="relative z-10 w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extralight tracking-wider mb-6">
              Signature 
              <span className="text-yellow-400"> Collection</span>
            </h2>
            <div className="w-24 h-px bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {watches.map((watch, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-b from-gray-900 to-black rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-700 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={watch.image} 
                    alt={watch.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-light mb-3 text-yellow-400 tracking-wide">
                    {watch.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                    {watch.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-light text-white">
                      {watch.price}
                    </span>
                    <button className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm tracking-wider">
                      LEARN MORE →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section id="craft" className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extralight tracking-wider mb-6">
              Unparalleled
              <span className="block text-yellow-400">Craftsmanship</span>
            </h2>
            <div className="w-24 h-px bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {craftFeatures.map((feature, index) => (
              <div 
                key={index}
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-6 text-black group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-light mb-4 text-yellow-400 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Premium Features Grid */}
          <div className="mt-24 grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700">
              <Star className="w-8 h-8 text-yellow-400 mb-4" />
              <h4 className="text-lg font-light mb-3 text-yellow-400">Exclusive Editions</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Limited production runs ensure exclusivity, with only 50-100 pieces per model annually.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700">
              <Shield className="w-8 h-8 text-yellow-400 mb-4" />
              <h4 className="text-lg font-light mb-3 text-yellow-400">Authentication</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Every timepiece includes a certificate of authenticity and detailed provenance documentation.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700">
              <Award className="w-8 h-8 text-yellow-400 mb-4" />
              <h4 className="text-lg font-light mb-3 text-yellow-400">Concierge Service</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Personal watch specialist for maintenance, customization, and collection advisory services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-extralight tracking-wider text-yellow-400 mb-4">
              RECOGNIZED EXCELLENCE
            </h3>
            <div className="w-16 h-px bg-yellow-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {['LUXURY TIMES', 'HOROLOGICAL REVIEW', 'SWISS WATCH', 'TIMEPIECE WEEKLY'].map((brand, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-light tracking-widest text-gray-400 hover:text-yellow-400 transition-colors duration-300 cursor-default">
                  {brand}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-extralight tracking-wider mb-8">
            Experience
            <span className="block text-yellow-400">Timeless Luxury</span>
          </h2>
          <div className="w-24 h-px bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto">
            Join an exclusive circle of connoisseurs who appreciate the finest expressions of horological art. 
            Schedule a private viewing in our boutique.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-4 bg-yellow-400 text-black hover:bg-yellow-500 transition-all duration-300 tracking-widest text-sm font-medium">
              REQUEST PRIVATE VIEWING
            </button>
            <button className="px-12 py-4 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 tracking-widest text-sm">
              JOIN WAITLIST
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-5 gap-12 mb-16"> {/* changed from 4 to 5 columns */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-extralight tracking-wider text-yellow-400 mb-6">
                CHRONOS ELITE
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8 max-w-md">
                Swiss luxury timepieces crafted with uncompromising attention to detail and heritage spanning over a century.
              </p>
              <div className="flex space-x-6">
                {[Instagram, Facebook, Twitter, Linkedin].map((Icon, index) => (
                  <button key={index} className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400 transition-all duration-300">
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-light text-yellow-400 mb-6 tracking-wider">CONTACT</h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm">+1 (212) 555-0123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm">concierge@chronoselite.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm">Fifth Avenue, New York</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-light text-yellow-400 mb-6 tracking-wider">SERVICES</h4>
              <div className="space-y-3 text-gray-300">
                {['Private Viewings', 'Bespoke Timepieces', 'Maintenance & Repair', 'Authentication', 'Collection Advisory'].map((service, index) => (
                  <button key={index} className="block text-sm hover:text-yellow-400 transition-colors duration-300 text-left">
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Developer Credit Section */}
            <div>
              <h4 className="text-lg font-light text-yellow-400 mb-6 tracking-wider">DEVELOPER</h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center space-x-3">
                  <span className="text-sm">Sufiyan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm">sksufiyan9860@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2025 Chronos Elite. All rights reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <button className="hover:text-yellow-400 transition-colors">Privacy Policy</button>
              <button className="hover:text-yellow-400 transition-colors">Terms of Service</button>
              <button className="hover:text-yellow-400 transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChronosElite;