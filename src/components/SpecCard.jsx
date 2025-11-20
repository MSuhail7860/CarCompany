import { motion } from 'framer-motion';
import './SpecCard.css';

const SpecCard = ({ icon: Icon, label, value, index = 0 }) => {
  return (
    <motion.div
      className="spec-card glass"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="spec-icon">
        {Icon && <Icon size={24} />}
      </div>
      <div className="spec-info">
        <span className="spec-label">{label}</span>
        <span className="spec-value">{value}</span>
      </div>
    </motion.div>
  );
};

export default SpecCard;
