import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import styles from './Styles/styles.module.css';

const API_KEY = '37685879-75fb45f515a39c48fce6291c7';
const BASE_URL = 'https://pixabay.com/api/';
const ITEMS_PER_PAGE = 12;

class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    query: '',
    page: 1,
    showModal: false,
    largeImageUrl: '',
  };

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.fetchImages();
    }
  }

  handleSearchSubmit = (query) => {
    this.setState({ query, page: 1, images: [] });
  };

  fetchImages = () => {
    const { query, page } = this.state;

    this.setState({ loading: true });

    axios
      .get(
        `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${ITEMS_PER_PAGE}`
      )
      .then((response) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...response.data.hits],
          loading: false,
        }));
      })
      .catch((error) => {
        this.setState({ error: 'Failed to load images', loading: false });
      });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  handleImageClick = (largeImageUrl) => {
    this.setState({ largeImageUrl, showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false, largeImageUrl: '' });
  };

  render() {
    const { images, loading, showModal, largeImageUrl } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {loading && <Loader />}
        {images.length > 0 && !loading && (
          <Button onClick={this.handleLoadMore} />
        )}
        {showModal && (
          <Modal largeImageUrl={largeImageUrl} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import axios from 'axios';
// import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';
// import CustomLoader from './Loader/Loader';
// import Button from './Button/Button';
// import Modal from './Modal/Modal';

// const API_KEY = '37685879-75fb45f515a39c48fce6291c7';

// class App extends Component {
//   state = {
//     images: [],
//     isLoading: false,
//     query: '',
//     page: 1,
//     showModal: false,
//     largeImageURL: '',
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.query !== this.state.query) {
//       this.fetchImages();
//     }
//   }

//   handleFormSubmit = query => {
//     this.setState({ query, page: 1, images: [] });
//   };

//   handleLoadMore = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };

//   handleImageClick = largeImageURL => {
//     this.setState({ showModal: true, largeImageURL });
//   };

//   handleModalClose = () => {
//     this.setState({ showModal: false, largeImageURL: '' });
//   };

//   fetchImages = () => {
//     const { query, page } = this.state;
//     const API_URL = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

//     this.setState({ isLoading: true });

//     axios
//       .get(API_URL)
//       .then(response => {
//         const newImages = response.data.hits.map(image => ({
//           id: image.id,
//           webformatURL: image.webformatURL,
//           largeImageURL: image.largeImageURL,
//         }));

//         this.setState(prevState => ({
//           images: [...prevState.images, ...newImages],
//           isLoading: false,
//         }));
//       })
//       .catch(error => {
//         console.error('Error fetching images:', error);
//         this.setState({ isLoading: false });
//       });
//   };

//   render() {
//     const { images, isLoading, showModal, largeImageURL } = this.state;

//     return (
//       <div
//         style={{
//           height: '100vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 40,
//           color: '#010101',
//         }}
//       >
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         <ImageGallery images={images} onClick={this.handleImageClick} />
//         {isLoading && <CustomLoader />}
//         {images.length > 0 && !isLoading && <Button onClick={this.handleLoadMore} />}
//         {showModal && <Modal onClose={this.handleModalClose} largeImageURL={largeImageURL} />}
//       </div>
//     );
//   }
// }

// export default App;