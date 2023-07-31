import React, { Component } from 'react';
import styles from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={styles.Overlay} onClick={this.handleOverlayClick}>
        <div className={styles.Modal}>
          <img src={this.props.largeImageUrl} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import styles from './Modal.module.css';

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return (
//       <div className={styles.overlay} onClick={this.handleBackdropClick}>
//         <div className={styles.modal}>
//           <img src={this.props.largeImageURL} alt="" />
//         </div>
//       </div>
//     );
//   }
// }

// Modal.propTypes = {
//   largeImageURL: PropTypes.string.isRequired,
//   onClose: PropTypes.func.isRequired,
// };

// export default Modal;
