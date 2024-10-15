import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, Star } from 'lucide-react';
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";

const CoolBreezeLanding = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const clients = [
    { name: "TechPark One", image: "/images/clients/techpark_one.jpg" },
    { name: "Oberoi Crest Tower", image: "/images/clients/oberoi.jpg" },
    { name: "Daffodil Society", image: "/images/clients/daffodil.jpg" },
    { name: "SeaView Heights", image: "/images/clients/seaview.jpg" },
    { name: "Blue Horizon IT Park", image: "/images/clients/blue_horizon.jpg" },
    { name: "Viman Nagar Business Plaza", image: "/images/clients/viman_nagar.jpg" },
    { name: "Golden Gate", image: "/images/clients/golden_gate.jpg" },
    { name: "Hotel Trident", image: "/images/clients/trident.jpg" }
  ];

  const products = [
    { name: 'Split AC', image: '/images/ac-types/split.jpg' },
    { name: 'Window AC', image: '/images/ac-types/window.jpg' },
    { name: 'Portable AC', image: '/images/ac-types/portable.jpg' },
    { name: 'Cassette AC', image: '/images/ac-types/cassette.jpg' },
    { name: 'Tower AC', image: '/images/ac-types/tower.jpg' },
    { name: 'Hybrid AC', image: '/images/ac-types/hybrid.jpg' },
    { name: 'Inverter AC', image: '/images/ac-types/inverter.jpg' },
    { name: 'Central AC', image: '/images/ac-types/central.jpg' }
  ];

  const createCarousel = () => {
    const autoplay = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 }, [autoplay.current]);

    return { emblaRef, emblaApi };
  };

  const { emblaRef: productsRef, emblaApi: productsApi } = createCarousel();
  const { emblaRef: clientsRef, emblaApi: clientsApi } = createCarousel();

  useEffect(() => {
    if (productsApi) {
      productsApi.reInit();
    }
    if (clientsApi) {
      clientsApi.reInit();
    }
  }, [productsApi, clientsApi]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-100">
      {/* Navbar */}
      <nav className="bg-teal-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">CoolBreeze Solutions</h1>
          <ul className="flex space-x-4">
            <li><a href="#about" className="text-white hover:text-cyan-300 transition duration-300">About</a></li>
            <li><a href="#services" className="text-white hover:text-cyan-300 transition duration-300">Services</a></li>
            <li><a href="#products" className="text-white hover:text-cyan-300 transition duration-300">Products</a></li>
            <li><a href="#contact" className="text-white hover:text-cyan-300 transition duration-300">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-teal-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Cool with CoolBreeze</h2>
          <p className="text-xl mb-8">A One-Stop Solution for All Your AC Needs</p>
          <a href="#contact" className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-teal-100 transition duration-300">Get a Quote</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">About Us!</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            At CoolBreeze Solutions, we're committed to providing top-notch air conditioning services for both residential and commercial spaces. Our mission is to ensure your comfort through innovative cooling solutions and exceptional customer service.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'AC Servicing', description: 'Regular maintenance to keep your AC running efficiently.' },
              { title: 'Repairs', description: 'Quick and reliable repairs for all AC brands and models.' },
              { title: 'AMC Services', description: 'Annual Maintenance Contracts for worry-free AC care.' },
              { title: 'HVAC Solutions', description: 'Comprehensive centralized AC solutions for entire buildings.' },
              { title: 'Installation', description: 'Expert installation services for new AC units.' },
              { title: 'Consultation', description: 'Professional advice on choosing the right AC for your space.' },
            ].map((service, index) => (
              <div key={index} className="bg-teal-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-700 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">Our Products</h2>
          <div className="overflow-hidden" ref={productsRef}>
            <div className="flex">
              {products.map((product, index) => (
                <div key={index} className="flex-[0_0_33.33%] min-w-0 px-2">
                  <Card className="bg-white p-4 rounded-lg shadow-md text-center">
                    <div className="bg-teal-100 h-40 mb-4 rounded flex items-center justify-center">
                      <img src={product.image} alt={product.name} className="h-full object-contain rounded" />
                    </div>
                    <h3 className="text-lg font-semibold text-teal-700">{product.name}</h3>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button onClick={() => productsApi?.scrollPrev()} className="bg-teal-500 text-white px-4 py-2 rounded-l-full hover:bg-teal-600">
              ← Previous
            </button>
            <button onClick={() => productsApi?.scrollNext()} className="bg-teal-500 text-white px-4 py-2 rounded-r-full hover:bg-teal-600">
              Next →
            </button>
          </div>
        </div>
      </section>

      {/* Brand Partnerships */}
      <section className="bg-teal-50 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">Our Brand Partners</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[1, 2, 3, 4, 5, 6].map((brand) => (
              <div key={brand} className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-3xl text-teal-400">Brand {brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients and Projects */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">Our Clients</h2>
          <div className="overflow-hidden" ref={clientsRef}>
            <div className="flex">
              {clients.map((client, index) => (
                <div key={index} className="flex-[0_0_33.33%] min-w-0 px-2">
                  <Card className="bg-white border border-teal-200 shadow-sm">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="w-full h-40 mb-4 overflow-hidden rounded">
                        <img
                          src={client.image}
                          alt={client.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-center text-teal-800 font-semibold">{client.name}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button onClick={() => clientsApi?.scrollPrev()} className="bg-teal-500 text-white px-4 py-2 rounded-l-full hover:bg-teal-600">
              ← Previous
            </button>
            <button onClick={() => clientsApi?.scrollNext()} className="bg-teal-500 text-white px-4 py-2 rounded-r-full hover:bg-teal-600">
              Next →
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-teal-600 text-white py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Aarav S. - SeaView Heights', comment: 'Excellent service! My ACs have never worked better.' },
              { name: 'Meera P. - TechPark One', comment: 'Professional work and quick response time. Highly recommended!' },
              { name: 'Rohit I. - Hotel Trident', comment: 'CoolBreeze Solutions saved us from the heatwave. Thank you!' },
            ].map((testimonial, index) => (
              <div key={index} className="bg-teal-700 p-6 rounded-lg shadow-md">
                <p className="mb-4">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-teal-500 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-xl">👤</span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">Our Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((img) => (
              <div key={img} className="bg-teal-100 h-48 rounded-lg flex items-center justify-center">
                <span className="text-teal-600 text-4xl">📷</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-teal-50 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">Get in Touch</h2>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center">
                <Phone className="text-teal-600 mr-2" />
                <span className="text-teal-600">+91 1234567890</span>
            </div>
            <div className="flex items-center">
                <Mail className="text-teal-600 mr-2" />
                <span className="text-teal-600">info@coolbreeze.com</span>
            </div>
            <div className="flex items-center">
                <MapPin className="text-teal-600 mr-2" />
                <span className="text-teal-600">Zone 3, EON Business Park, Pune - 411014</span>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <Input 
              type="text" 
              placeholder="Your Name" 
              className="w-full mb-4 p-2 rounded border border-teal-300 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
              required 
            />
            <Input 
              type="email" 
              placeholder="Your Email" 
              className="w-full mb-4 p-2 rounded border border-teal-300 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-teal-500" 
              required 
            />
            <Textarea 
              placeholder="Your Message" 
              rows={4} 
              className="w-full mb-4 p-2 rounded border border-teal-300 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-teal-500" 
              required 
            />
            <button type="submit" 
            className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition duration-300">Send Message</button>
          </form>
          {formSubmitted && (
            <p className="text-teal-600 text-center mt-4">Thanks for submitting, we'll get back to you soon!</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default CoolBreezeLanding;