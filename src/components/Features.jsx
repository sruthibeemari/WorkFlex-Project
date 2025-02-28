import React from 'react';

const Features = () => {
  return (
    <div style={styles.features}>
      <h2 style={styles.heading}>Why Choose Us?</h2>
      <div style={styles.featureList}>
        <div style={styles.feature}>
          <h3>Flexible Workspace Options</h3>
          <p>Choose from a variety of workspaces to suit your needs.</p>
        </div>
        <div style={styles.feature}>
          <h3>Real-Time Availability</h3>
          <p>Check workspace availability in real-time.</p>
        </div>
        <div style={styles.feature}>
          <h3>Easy Booking System</h3>
          <p>Book your workspace with just a few clicks.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  features: {
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: 'black',
     color:'white'
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '2rem',
    color:'white'
  },
  featureList: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  feature: {
    width: '30%',
  },
};

export default Features;