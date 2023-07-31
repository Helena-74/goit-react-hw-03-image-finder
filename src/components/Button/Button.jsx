import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick }) => (
  <button type="button" className={styles.Button} onClick={onClick}>
    Load more
  </button>
);

export default Button;

// import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './Button.module.css';

// Button.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

// export default Button;