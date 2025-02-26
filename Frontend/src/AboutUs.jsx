import React, { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    // Add animation to stats when they come into view
    const statCards = document.querySelectorAll('.stat-card');

    // Simple animation on load
    statCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        setTimeout(() => {
          card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 100);
      }, index * 200);
    });

    // Lightning effect on CTA button
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseenter', () => {
      ctaButton.style.animation = 'none';
      setTimeout(() => {
        ctaButton.style.animation = 'lightning-sweep 1.5s infinite';
      }, 10);
    });

    // Add extra lightning bolts randomly
    function createLightning() {
      const missionSection = document.querySelector('.mission-section');
      const bolt = document.createElement('div');
      bolt.classList.add('lightning-bolt');

      // Random position
      bolt.style.left = Math.random() * 80 + 10 + '%';
      bolt.style.top = Math.random() * 70 + 15 + '%';
      bolt.style.height = (Math.random() * 100 + 50) + 'px';
      bolt.style.transform = `translateY(-50%) rotate(${Math.random() * 60 - 30}deg)`;

      missionSection.appendChild(bolt);

      // Remove after animation
      setTimeout(() => {
        bolt.remove();
      }, 1000);
    }

    // Create random lightning every few seconds
    setInterval(createLightning, 5000);
  }, []);

  return (
    <div style={styles.body}>
      <div className="hero" style={styles.hero}>
        <div className="hero-content" style={styles.heroContent}>
          <h1 className="lightning-title" style={styles.lightningTitle}>
            Speed <span style={styles.lightningTitleSpan}>Redefines</span> Finance
          </h1>
          <p className="tagline" style={styles.tagline}>
            We're not just another financial service. We're revolutionizing how you access financial solutions through lightning-fast technology and next-gen AI.
          </p>
        </div>
      </div>

      <div className="container stats-container" style={styles.statsContainer}>
        <div className="stat-card" style={styles.statCard}>
          <div className="stat-number" style={styles.statNumber}>750K+</div>
          <div className="stat-label" style={styles.statLabel}>Satisfied Customers</div>
        </div>

        <div className="stat-card" style={styles.statCard}>
          <div className="stat-number" style={styles.statNumber}>₹200Cr+</div>
          <div className="stat-label" style={styles.statLabel}>Finance Delivered</div>
        </div>

        <div className="stat-card" style={styles.statCard}>
          <div className="stat-number" style={styles.statNumber}>3 min</div>
          <div className="stat-label" style={styles.statLabel}>Average Approval</div>
        </div>

        <div className="stat-card" style={styles.statCard}>
          <div className="stat-number" style={styles.statNumber}>4.9/5</div>
          <div className="stat-label" style={styles.statLabel}>Customer Rating</div>
        </div>
      </div>

      <div className="features-section" style={styles.featuresSection}>
        <div className="container">
          <h2 className="section-title" style={styles.sectionTitle}>Why We're Different</h2>

          <div className="features-container" style={styles.featuresContainer}>
            <div className="feature-card" style={styles.featureCard}>
              <div className="feature-icon" style={styles.featureIcon}>⚡</div>
              <div className="feature-content" style={styles.featureContent}>
                <h3 className="feature-title" style={styles.featureTitle}>Lightning Speed Processing</h3>
                <p className="feature-description" style={styles.featureDescription}>
                  Get your financial needs fulfilled in just 3 minutes with our supercharged AI-powered system that processes applications at the speed of light.
                </p>
              </div>
            </div>

            <div className="feature-card" style={styles.featureCard}>
              <div className="feature-icon" style={styles.featureIcon}>🛡️</div>
              <div className="feature-content" style={styles.featureContent}>
                <h3 className="feature-title" style={styles.featureTitle}>Quantum-Level Security</h3>
                <p className="feature-description" style={styles.featureDescription}>
                  Your data is protected with military-grade encryption, blockchain verification, and our proprietary security protocols that move faster than cyberthreats.
                </p>
              </div>
            </div>

            <div className="feature-card" style={styles.featureCard}>
              <div className="feature-icon" style={styles.featureIcon}>🔍</div>
              <div className="feature-content" style={styles.featureContent}>
                <h3 className="feature-title" style={styles.featureTitle}>Velocity Analytics</h3>
                <p className="feature-description" style={styles.featureDescription}>
                  Our Flash AI evaluates thousands of data points in milliseconds to provide you with the most favorable financial options tailored specifically to your profile.
                </p>
              </div>
            </div>

            <div className="feature-card" style={styles.featureCard}>
              <div className="feature-icon" style={styles.featureIcon}>👥</div>
              <div className="feature-content" style={styles.featureContent}>
                <h3 className="feature-title" style={styles.featureTitle}>Speed Force Community</h3>
                <p className="feature-description" style={styles.featureDescription}>
                  Join millions who trust our lightning-fast financial services. Being part of our community means you're always ahead of the curve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mission-section" style={styles.missionSection}>
        <div className="lightning-bg" style={styles.lightningBg}></div>
        <div className="lightning-bolt" style={styles.lightningBolt}></div>
        <div className="lightning-bolt" style={styles.lightningBolt}></div>
        <div className="mission-content" style={styles.missionContent}>
          <h2 className="section-title mission-title" style={styles.sectionTitle}>Our Mission</h2>
          <p className="mission-text" style={styles.missionText}>
            To break the barriers of traditional finance through revolutionary technology. We believe everyone deserves instant, fair, and transparent access to financial services, powered by lightning-fast AI and secure blockchain technology.
          </p>
          <button className="cta-button" style={styles.ctaButton}>Join The Speed Force</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    backgroundColor: '#300000',
    color: 'white',
    overflowX: 'hidden',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  hero: {
    position: 'relative',
    padding: '80px 20px',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #990000, #dc0000)',
    overflow: 'hidden',
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
  },
  lightningTitle: {
    display: 'inline-block',
    position: 'relative',
    fontSize: '3.5rem',
    marginBottom: '20px',
    color: 'white',
  },
  lightningTitleSpan: {
    color: '#ffb800',
    position: 'relative',
  },
  tagline: {
    fontSize: '1.2rem',
    maxWidth: '800px',
    margin: '0 auto 40px',
    color: '#ffffff',
    lineHeight: '1.6',
  },
  statsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    margin: '50px 0',
  },
  statCard: {
    background: '#410000',
    borderRadius: '12px',
    padding: '25px',
    width: '250px',
    textAlign: 'center',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    position: 'relative',
    overflow: 'hidden',
    border: '2px solid transparent',
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#ffb800',
    marginBottom: '10px',
  },
  statLabel: {
    fontSize: '1rem',
    color: '#ffffff',
  },
  featuresSection: {
    padding: '80px 20px',
    background: 'linear-gradient(135deg, #dc0000, #ff3333)',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '50px',
    color: 'white',
    position: 'relative',
    display: 'inline-block',
  },
  featuresContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
  },
  featureCard: {
    background: '#990000',
    borderRadius: '12px',
    padding: '30px',
    width: '100%',
    maxWidth: '500px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s',
    position: 'relative',
    overflow: 'hidden',
  },
  featureIcon: {
    fontSize: '2rem',
    color: '#ffb800',
    transition: 'transform 0.6s, color 0.3s',
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: '1.5rem',
    marginBottom: '15px',
    color: '#ffb800',
  },
  featureDescription: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#ffffff',
  },
  missionSection: {
    padding: '100px 20px',
    textAlign: 'center',
    background: '#300000',
    position: 'relative',
  },
  lightningBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `
      radial-gradient(circle at 30% 20%, #ff3333 0%, transparent 50%),
      radial-gradient(circle at 70% 60%, #ff3333 0%, transparent 50%)
    `,
    opacity: 0.1,
    zIndex: 0,
  },
  lightningBolt: {
    position: 'absolute',
    top: '50%',
    left: '20%',
    width: '3px',
    height: '150px',
    background: '#ffb800',
    opacity: 0,
    transform: 'translateY(-50%) rotate(15deg)',
    boxShadow: '0 0 10px 5px #ffb800',
    zIndex: 0,
    animation: 'lightning-flash 7s infinite',
  },
  missionContent: {
    maxWidth: '900px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  },
  missionText: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    marginBottom: '40px',
    color: '#ffffff',
  },
  ctaButton: {
    display: 'inline-block',
    padding: '15px 30px',
    background: '#ffb800',
    color: '#990000',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    borderRadius: '50px',
    textDecoration: 'none',
    boxShadow: '0 5px 15px rgba(255, 184, 0, 0.3)',
    transition: 'all 0.3s',
    position: 'relative',
    overflow: 'hidden',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default AboutUs;