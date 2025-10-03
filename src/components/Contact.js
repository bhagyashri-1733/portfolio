import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const formspreeUrl = 'https://formspree.io/f/xanpjkzr';

    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      if (response.ok) {
        alert('Message sent successfully! I will get back to you soon.');
        // Reset form
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Let's Work Together</h2>
        <p className="contact-subtitle">
          Have a project in mind? Let's discuss how I can help bring your ideas to life.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Project Inquiry"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about your project..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-btn" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        <div className="contact-info">
          <div className="contact-item">
            <h4>Email</h4>
            <p>bhagyashrithombre.it@gmail.com</p>
          </div>
          <div className="contact-item">
            <h4>Location</h4>
            <p>Mumbai, India</p>
          </div>
          <div className="contact-item">
            <h4>Social</h4>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/bhagyashri-thombre-27b5051b4/" className="social-link">LinkedIn</a>
              <a href="https://github.com/bhagyashri-1733" className="social-link">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
