import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const Walogo = () => {
  const whatsappUrl = "https://wa.me/6282111460050"; // Replace with your desired WhatsApp link
  
  return (
    <Link to={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{
      position: 'fixed', // Fix the position to the bottom right
      bottom: '10px', // Adjust the bottom position as needed
      right: '10px', // Adjust the right position as needed
      width: '50px', // Set the logo width
      height: '50px', // Set the logo height
      zIndex: 999, // Ensure the logo stays on top of other elements
    }}>
      <img 
        src="#" 
        alt="WhatsApp Logo" 
        style={{ width: '100%' }} 
    /> 
    </Link>
  );
};

export default Walogo;