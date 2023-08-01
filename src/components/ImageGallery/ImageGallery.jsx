import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  const uniqueImages = images.filter((image, index, self) => {
    return index === self.findIndex((img) => img.id === image.id);
  });

  return (
    <ul className={styles.ImageGallery}>
      {uniqueImages.map((image) => (
        <ImageGalleryItem key={image.id} image={image} onImageClick={onImageClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;

// import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './ImageGallery.module.css';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

// const ImageGallery = ({ images, onClick }) => {
//   return (
//     <ul className={styles.gallery}>
//       {images.map(image => (
//         <ImageGalleryItem
//           key={image.id}
//           webformatURL={image.webformatURL}
//           largeImageURL={image.largeImageURL}
//           onClick={() => onClick(image.largeImageURL)}
//         />
//       ))}
//     </ul>
//   );
// };

// ImageGallery.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       webformatURL: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onClick: PropTypes.func.isRequired,
// };

// export default ImageGallery;