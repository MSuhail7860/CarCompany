import { motion } from 'framer-motion';
import { Award, Users, Globe, Heart } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-background">
          <div className="about-hero-gradient"></div>
        </div>
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>About Apex Motors</h1>
          <p>Crafting the future of luxury automotive</p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="about-story section">
        <div className="container">
          <motion.div
            className="story-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Story</h2>
            <p>
              Founded in 1970, Apex Motors has been at the forefront of automotive innovation for over five decades. 
              What began as a small workshop with a vision to create the perfect driving machine has evolved into 
              a global leader in luxury and performance vehicles.
            </p>
            <p>
              Our commitment to excellence, sustainability, and cutting-edge technology drives everything we do. 
              Each vehicle we create is a masterpiece of engineering, combining timeless design with the latest 
              innovations in electric powertrains, autonomous driving, and connected services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values section section-dark">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Values</h2>
            <p>The principles that guide us</p>
          </motion.div>

          <div className="values-grid">
            <motion.div
              className="value-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="value-icon">
                <Award size={40} />
              </div>
              <h3>Excellence</h3>
              <p>Uncompromising quality in every detail, from design to delivery</p>
            </motion.div>

            <motion.div
              className="value-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="value-icon">
                <Users size={40} />
              </div>
              <h3>Customer First</h3>
              <p>Building lasting relationships through exceptional service</p>
            </motion.div>

            <motion.div
              className="value-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="value-icon">
                <Globe size={40} />
              </div>
              <h3>Sustainability</h3>
              <p>Committed to a cleaner, greener future for all</p>
            </motion.div>

            <motion.div
              className="value-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="value-icon">
                <Heart size={40} />
              </div>
              <h3>Passion</h3>
              <p>Driven by love for automotive perfection</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="about-achievements section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Awards & Recognition</h2>
            <p>Celebrating excellence</p>
          </motion.div>

          <div className="achievements-grid">
            {[
              { year: '2024', award: 'Car of the Year', model: 'Apex Volt' },
              { year: '2023', award: 'Best Luxury Brand', model: 'Global Awards' },
              { year: '2023', award: 'Innovation Award', model: 'Tech Summit' },
              { year: '2022', award: 'Design Excellence', model: 'Apex Phantom' },
              { year: '2022', award: 'Safety Leader', model: 'IIHS Top Pick' },
              { year: '2021', award: 'Green Car Award', model: 'Apex Volt' }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-card glass"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="achievement-year">{achievement.year}</div>
                <h4>{achievement.award}</h4>
                <p>{achievement.model}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
