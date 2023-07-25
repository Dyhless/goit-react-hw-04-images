import React, { useState, useEffect } from 'react';
import * as API from './getImages';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';

export const App = () => {
  const [searchText, setSearchText] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    addImages();
  }, [searchText, currentPage]);

  const loadMore = () => {
    setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
  };

  const handleSubmit = query => {
    setSearchText(query);
    setImages([]);
    setCurrentPage(1);
  };

  const addImages = async () => {
    try {
      setIsLoading(true);
      const data = await API.getImages(searchText, currentPage);

      if (data.hits.length === 0) {
        return alert('No such images');
      }

      const imagesFormattedToList = data.hits.map(
        ({ id, tags, webformatURL, largeImageURL }) => ({
          id,
          tags,
          webformatURL,
          largeImageURL,
        })
      );

      setImages(prevImages => [...prevImages, ...imagesFormattedToList]);
      setError('');
      setTotalPages(Math.ceil(data.totalHits / 12));
    } catch (error) {
      setError('Sorry, some error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {images.length > 0 && totalPages !== currentPage && !isLoading && (
        <Button onClick={loadMore} />
      )}
    </>
  );
};
