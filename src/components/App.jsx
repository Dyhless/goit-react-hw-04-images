import React, { useState, useEffect, useCallback } from 'react';
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
  const [totalPages, setTotalPages] = useState(0);

  const addImages = useCallback(async () => {
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
      setTotalPages(Math.ceil(data.totalHits / 12));
    } catch (error) {
      console.error('Sorry, some error', error);
    } finally {
      setIsLoading(false);
    }
  }, [searchText, currentPage]);

  useEffect(() => {
    addImages();
  }, [addImages]);

  const loadMore = () => {
    setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
  };

  const handleSubmit = query => {
    setSearchText(query);
    setImages([]);
    setCurrentPage(1);
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
