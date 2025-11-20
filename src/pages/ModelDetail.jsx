import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Gauge, Wind, Fuel, Settings, Disc, CheckCircle } from 'lucide-react';
import SpecCard from '../components/SpecCard';
import CarCard from '../components/CarCard';
import { getCarById, carsData } from '../data/cars';
import './ModelDetail.css';

const ModelDetail = () => {
  const { id } = useParams();
  const car = getCarById(id);

  if (!car) {
    return (
      <div className="model-not-found">
        <h2>Model not found</h2>
        <Link to="/models" className="btn btn-primary">Back to Models</Link>
      </div>
    );
  }

  const relatedCars = carsData.filter(c => c.id !== car.id && c.category === car.category).slice(0, 2);

  const specIcons = {
    engine: Settings,
    horsepower: Zap,
    torque: Gauge,
    acceleration: Wind,
    topSpeed: Gauge,
    transmission: Settings,
    drivetrain: Disc,
    fuelType: Fuel
  };

  return (
    <div className="model-detail">
      {/* Hero Section */}
      <section className="detail-hero">
        <Link to="/models" className="back-button">
          <ArrowLeft size={20} />
          <span>Back to Models</span>
        </Link>

        <motion.div
          className="detail-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="detail-category">{car.category}</div>
          <h1>{car.name}</h1>
          <p className="detail-tagline">{car.tagline}</p>
        </motion.div>

        <motion.div
          className="detail-hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img src={car.image} alt={car.name} />
          <div className="detail-price-tag glass">
            <span className="price-label">Starting at</span>
            <span className="price-value">{car.price}</span>
          </div>
        </motion.div>
      </section>

      {/* Description Section */}
      <section className="detail-description section">
        <div className="container">
          <motion.div
            className="description-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Overview</h2>
            <p>{car.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="detail-specs section section-dark">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Technical Specifications</h2>
            <p>Performance that speaks for itself</p>
          </motion.div>

          <div className="specs-grid">
            {Object.entries(car.specs).map(([key, value], index) => {
              const Icon = specIcons[key] || Settings;
              const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
              return (
                <SpecCard
                  key={key}
                  icon={Icon}
                  label={label}
                  value={value}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="detail-features section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Premium Features</h2>
            <p>Luxury and technology in perfect harmony</p>
          </motion.div>

          <div className="features-grid">
            {car.features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-item glass"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <CheckCircle size={24} className="feature-icon" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className="detail-colors section section-dark">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Available Colors</h2>
            <p>Choose your perfect finish</p>
          </motion.div>

          <div className="colors-grid">
            {car.colors.map((color, index) => (
              <motion.div
                key={index}
                className="color-item glass"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="color-swatch"></div>
                <span>{color}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="detail-cta section">
        <div className="container">
          <motion.div
            className="cta-content glass"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Experience {car.name}?</h2>
            <p>Schedule a test drive or configure your dream car today</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Schedule Test Drive</Link>
              <button className="btn btn-accent">Configure Now</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Models */}
      {relatedCars.length > 0 && (
        <section className="related-models section section-dark">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>You Might Also Like</h2>
              <p>Explore similar models</p>
            </motion.div>

            <div className="related-grid">
              {relatedCars.map((relatedCar, index) => (
                <CarCard key={relatedCar.id} car={relatedCar} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ModelDetail;
