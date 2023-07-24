// import { Component } from 'react';
// import * as API from './getImages';
// import ImageGallery from './ImageGallery/ImageGallery';
// import Button from './Button/Button';
// import Loader from './Loader/Loader';
// import Searchbar from './Searchbar/Searchbar';

// export class App extends Component {
//   state = {
//     searchText: '',
//     images: [],
//     currentPage: 1,
//     isLoading: false,
//     error: null,
//     totalPages: 0,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (
//       prevState.searchText !== this.state.searchText ||
//       prevState.currentPage !== this.state.currentPage
//     ) {
//       this.addImages();
//     }
//   }

//   loadMore = () => {
//     this.setState(prevState => ({
//       currentPage: prevState.currentPage + 1,
//     }));
//   };

//   handleSubmit = query => {
//     this.setState({
//       searchText: query,
//       images: [],
//       currentPage: 1,
//     });
//   };

//   addImages = async () => {
//     const { searchText, currentPage } = this.state;
//     try {
//       this.setState({ isLoading: true });
//       const data = await API.getImages(searchText, currentPage);

//       if (data.hits.length === 0) {
//         return alert('No such images');
//       }

//       const imagesFormatedtoList = data.hits.map(
//         ({ id, tags, webformatURL, largeImageURL }) => ({
//           id,
//           tags,
//           webformatURL,
//           largeImageURL,
//         })
//       );

//       this.setState(state => ({
//         images: [...state.images, ...imagesFormatedtoList],
//         error: '',
//         totalPages: Math.ceil(data.totalHits / 12),
//       }));
//     } catch (error) {
//       this.setState({ error: 'Sorry, some error' });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };

//   render() {
//     const { images, isLoading, currentPage, totalPages } = this.state;

//     return (
//       <>
//         <Searchbar onSubmit={this.handleSubmit} />
//         {images.length > 0 && <ImageGallery images={images} />}
//         {isLoading && <Loader />}
//         {images.length > 0 && totalPages !== currentPage && !isLoading && (
//           <Button onClick={this.loadMore} />
//         )}
//       </>
//     );
//   }
// }
