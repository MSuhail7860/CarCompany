import { useState } from 'react';
import { motion } from 'framer-motion';
import CarCard from '../components/CarCard';
import { carsData } from '../data/cars';
import './Models.css';

const Models = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Sports', 'Luxury Sedan', 'Electric', 'SUV', 'Hypercar', 'Convertible'];
  
  const filteredCars = selectedCategory === 'All' 
    ? carsData 
    : carsData.filter(car => car.category === selectedCategory);

  return (
    <div className="models-page">
      {/* Hero Section */}
      <section className="models-hero">
        <div className="models-hero-background">
          <div className="models-hero-gradient"></div>
        </div>
        <motion.div
          className="models-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Our Collection</h1>
          <p>Explore the pinnacle of automotive engineering</p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="models-filter section">
        <div className="container">
          <motion.div
            className="filter-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="models-grid-section section">
        <div className="container">
          <motion.div 
            className="models-grid"
            layout
          >
            {filteredCars.map((car, index) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <CarCard car={car} index={index} />
              </motion.div>
            ))}
          </motion.div>

          {filteredCars.length === 0 && (
            <motion.div
              className="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p>No models found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Parallax Gallery Section */}
      <section className="parallax-gallery section section-dark">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Experience Excellence</h2>
            <p>Every detail crafted to perfection</p>
          </motion.div>

          <div className="parallax-grid">
            <motion.div
              className="parallax-item parallax-item-1"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <img src="/cars/detail-1.png" alt="Interior Detail" />
              <div className="parallax-overlay">
                <h3>Luxurious Interiors</h3>
                <p>Handcrafted with premium materials</p>
              </div>
            </motion.div>

            <motion.div
              className="parallax-item parallax-item-2"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="/cars/detail-2.png" alt="Engine Detail" />
              <div className="parallax-overlay">
                <h3>Powerful Performance</h3>
                <p>Engineering excellence under the hood</p>
              </div>
            </motion.div>

            <motion.div
              className="parallax-item parallax-item-3"
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img src="/cars/detail-3.png" alt="Exterior Detail" />
              <div className="parallax-overlay">
                <h3>Stunning Design</h3>
                <p>Aerodynamics meets aesthetics</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Models;
