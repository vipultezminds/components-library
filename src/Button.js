import React from 'react';

/**
 * @param {{ children: React.ReactNode, onClick: () => void, disabled?: boolean }} props
 */


const Button = ({ children, onClick, disabled }) => {
  return (
    <button disabled={disabled} onClick={onClick} style={{ padding: '10px', fontSize: '16px' }}>
      {children}
    </button>
  );
};

export default Button;
