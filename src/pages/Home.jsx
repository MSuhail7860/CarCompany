import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Zap, Shield, Cpu } from 'lucide-react';
import CarCard from '../components/CarCard';
import { featuredCars } from '../data/cars';
import './Home.css';

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Transform values based on scroll
  const carY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const carScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 0.8]);
  const carOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="home">
      {/* Hero Section with Scroll Animation */}
      <section className="hero" ref={heroRef}>
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-grid"></div>
        </div>

        <motion.div 
          className="hero-content"
          style={{ y: textY, opacity: textOpacity }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            REDEFINING
            <br />
            <span className="text-gradient">LUXURY</span>
          </motion.h1>
          
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the future of automotive excellence
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#featured" className="btn btn-primary">Explore Models</a>
            <a href="#innovation" className="btn btn-secondary">Our Technology</a>
          </motion.div>
        </motion.div>

        {/* Animated Car */}
        <motion.div
          className="hero-car"
          style={{ 
            y: carY, 
            scale: carScale, 
            opacity: carOpacity 
          }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img src="/cars/hero-car-placeholder.svg" alt="Luxury Car" />
          <div className="car-glow"></div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <span>Scroll to explore</span>
          <ArrowDown className="scroll-arrow" />
        </motion.div>
      </section>

      {/* Featured Models Section */}
      <section id="featured" className="featured-section section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Featured Models</h2>
            <p>Discover our most iconic vehicles</p>
          </motion.div>

          <div className="featured-grid">
            {featuredCars.map((car, index) => (
              <CarCard key={car.id} car={car} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Highlights */}
      <section id="innovation" className="innovation-section section section-dark">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Innovation at Core</h2>
            <p>Cutting-edge technology meets timeless design</p>
          </motion.div>

          <div className="innovation-grid">
            <motion.div
              className="innovation-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="innovation-icon">
                <Zap size={40} />
              </div>
              <h3>Electric Power</h3>
              <p>Sustainable performance with zero emissions and instant torque delivery</p>
            </motion.div>

            <motion.div
              className="innovation-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="innovation-icon">
                <Shield size={40} />
              </div>
              <h3>Advanced Safety</h3>
              <p>AI-powered safety systems protecting what matters most</p>
            </motion.div>

            <motion.div
              className="innovation-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="innovation-icon">
                <Cpu size={40} />
              </div>
              <h3>Smart Technology</h3>
              <p>Seamless connectivity and autonomous driving capabilities</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section section">
        <div className="container">
          <div className="stats-grid">
            <motion.div
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Years of Excellence</p>
            </motion.div>

            <motion.div
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="stat-number">200K+</h3>
              <p className="stat-label">Vehicles Delivered</p>
            </motion.div>

            <motion.div
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="stat-number">150+</h3>
              <p className="stat-label">Global Dealerships</p>
            </motion.div>

            <motion.div
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="stat-number">98%</h3>
              <p className="stat-label">Customer Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
