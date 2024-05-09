import React from 'react';

const About: React.FC = () => {
  return (
    <div style={{ padding: '10px', lineHeight: '1.6' }}>
      <h1>About</h1>
      <p>Gamble with SUI, endlessly</p>

      <br></br>

      <section>
        <h1>How To Play</h1>
        <p> <li>Download the Ethos Wallet Chrome Extention.</li> </p> 
        <p> <li>Connect your Ethos account and play endless.</li> </p> 
        <p> <li>Start by claiming some SUI tokens.</li> </p>      
      </section>

      <br></br>

      <section className="contact-info">
        <h1>Contact Us</h1>
        <p>Tell us about your experience at abhidel2002@gmail.com</p>
      </section>
    </div>
  );
}

export default About;

