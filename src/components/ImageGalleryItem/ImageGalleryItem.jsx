import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onImageClick }) => (
  <li className={styles.ImageGalleryItem} onClick={() => onImageClick(image.largeImageURL)}>
    <img src={image.webformatURL} alt="" className={styles.ImageGalleryItemImage} />
  </li>
);

export default ImageGalleryItem;

// import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './ImageGalleryItem.module.css';

// const ImageGalleryItem = ({ webformatURL, onClick }) => {
//   return (
//     <li className={styles.galleryItem}>
//       <img
//         src={webformatURL}
//         alt=""
//         className={styles.image}
//         onClick={onClick}
//       />
//     </li>
//   );
// };

// ImageGalleryItem.propTypes = {
//   webformatURL: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

// export default ImageGalleryItem;