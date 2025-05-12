import React from 'react';

const Button = ({ label, onClick }) => (
  <button onClick={onClick} style={{ padding: '10px 20px', background: '#007bff', color: '#fff' }}>
    {label}
  </button>
);

export default Button;
