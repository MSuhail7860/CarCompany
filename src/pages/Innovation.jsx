import { motion } from 'framer-motion';
import { Zap, Shield, Cpu, Battery, Wifi, Eye } from 'lucide-react';
import './Innovation.css';

const Innovation = () => {
  const innovations = [
    {
      icon: Zap,
      title: 'Electric Powertrain',
      description: 'Next-generation electric motors delivering instant torque and zero emissions',
      features: ['500+ km range', 'Fast charging', 'Regenerative braking']
    },
    {
      icon: Shield,
      title: 'Active Safety Suite',
      description: 'AI-powered safety systems that predict and prevent accidents',
      features: ['Collision avoidance', 'Blind spot monitoring', 'Lane keeping assist']
    },
    {
      icon: Cpu,
      title: 'Autonomous Driving',
      description: 'Level 3 autonomous capabilities for highway and urban driving',
      features: ['Self-parking', 'Traffic jam assist', 'Highway autopilot']
    },
    {
      icon: Battery,
      title: 'Advanced Battery Tech',
      description: 'Solid-state batteries with industry-leading energy density',
      features: ['10-year warranty', '1000+ charge cycles', 'Thermal management']
    },
    {
      icon: Wifi,
      title: 'Connected Services',
      description: 'Always connected with OTA updates and smart features',
      features: ['Remote control', 'Live traffic', 'Voice assistant']
    },
    {
      icon: Eye,
      title: 'AR Head-Up Display',
      description: 'Augmented reality navigation and information display',
      features: ['Navigation overlay', 'Speed display', 'Hazard warnings']
    }
  ];

  return (
    <div className="innovation-page">
      {/* Hero */}
      <section className="innovation-hero">
        <div className="innovation-hero-background">
          <div className="innovation-hero-gradient"></div>
        </div>
        <motion.div
          className="innovation-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Innovation & Technology</h1>
          <p>Pioneering the future of mobility</p>
        </motion.div>
      </section>

      {/* Innovations Grid */}
      <section className="innovations-section section">
        <div className="container">
          <div className="innovations-grid">
            {innovations.map((innovation, index) => (
              <motion.div
                key={index}
                className="innovation-detail-card glass"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="innovation-detail-icon">
                  <innovation.icon size={48} />
                </div>
                <h3>{innovation.title}</h3>
                <p className="innovation-description">{innovation.description}</p>
                <ul className="innovation-features">
                  {innovation.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section section section-dark">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Innovation Timeline</h2>
            <p>Milestones in automotive excellence</p>
          </motion.div>

          <div className="timeline">
            {[
              { year: '2020', title: 'First Electric Model', desc: 'Launched our first fully electric vehicle' },
              { year: '2021', title: 'Autonomous Tech', desc: 'Introduced Level 2 autonomous driving' },
              { year: '2022', title: 'Solid-State Batteries', desc: 'Pioneered solid-state battery technology' },
              { year: '2023', title: 'AR Integration', desc: 'First AR head-up display in production' },
              { year: '2024', title: 'Full Autonomy', desc: 'Achieved Level 3 autonomous certification' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content glass">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Innovation;
