// import React from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';

// export function Button() {
//   return (
//     <Link to='sign-up'>
//       <button className='btn'>Sign Up</button>
//     </Link>
//   );
// }

import React from 'react';
import './Button2.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button2 = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle2 = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize2 = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/login' className='btn-mobile'>
     <button
        className={`btn ${checkButtonStyle2} ${checkButtonSize2}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
}; 
