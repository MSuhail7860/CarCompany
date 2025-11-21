import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './CarCard.css';

const CarCard = ({ car, index = 0 }) => {
  console.log("Car object:", car);
  console.log("car.image =", car?.image);
  console.log("Final URL =", `/cars/${car?.image}`);

  return (
    <motion.div
      className="car-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/model/${car.id}`} className="car-card-link">
        <div className="car-card-image-wrapper">
          <img src={car ? `${car.image}` : "/cars/default.png"} alt={car?.name} />
          <div className="car-card-overlay"></div>
          <div className="car-card-category">{car.category}</div>
        </div>
        
        <div className="car-card-content">
          <h3 className="car-card-title">{car.name}</h3>
          <p className="car-card-tagline">{car.tagline}</p>
          
          <div className="car-card-specs">
            <div className="spec-item">
              <span className="spec-label">Power</span>
              <span className="spec-value">{car.specs.horsepower}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">0-100</span>
              <span className="spec-value">{car.specs.acceleration}</span>
            </div>
          </div>
          
          <div className="car-card-footer">
            <span className="car-card-price">{car.price}</span>
            <div className="car-card-cta">
              <span>Explore</span>
              <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CarCard;
