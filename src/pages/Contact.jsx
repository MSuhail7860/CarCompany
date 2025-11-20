import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-background">
          <div className="contact-hero-gradient"></div>
        </div>
        <motion.div
          className="contact-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you</p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2>Contact Information</h2>
              <p className="contact-intro">
                Reach out to us for inquiries, test drives, or any questions about our vehicles.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item glass">
                  <div className="contact-detail-icon">
                    <Phone size={24} />
                  </div>
                  <div className="contact-detail-text">
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                    <p>Mon-Fri: 9AM - 6PM</p>
                  </div>
                </div>

                <div className="contact-detail-item glass">
                  <div className="contact-detail-icon">
                    <Mail size={24} />
                  </div>
                  <div className="contact-detail-text">
                    <h4>Email</h4>
                    <p>info@apexmotors.com</p>
                    <p>sales@apexmotors.com</p>
                  </div>
                </div>

                <div className="contact-detail-item glass">
                  <div className="contact-detail-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-detail-text">
                    <h4>Headquarters</h4>
                    <p>123 Luxury Drive</p>
                    <p>Detroit, MI 48201</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form className="contact-form glass" onSubmit={handleSubmit}>
                <h3>Send us a Message</h3>

                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Test Drive Request"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="locations-section section section-dark">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Locations</h2>
            <p>Visit our showrooms worldwide</p>
          </motion.div>

          <div className="locations-grid">
            {[
              { city: 'Detroit', address: '123 Luxury Drive, MI 48201', phone: '+1 (555) 123-4567' },
              { city: 'Los Angeles', address: '456 Sunset Blvd, CA 90028', phone: '+1 (555) 234-5678' },
              { city: 'New York', address: '789 Park Avenue, NY 10021', phone: '+1 (555) 345-6789' },
              { city: 'Miami', address: '321 Ocean Drive, FL 33139', phone: '+1 (555) 456-7890' }
            ].map((location, index) => (
              <motion.div
                key={index}
                className="location-card glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h4>{location.city}</h4>
                <p>{location.address}</p>
                <p className="location-phone">{location.phone}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
