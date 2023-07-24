import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import { ImgItem, Item } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  return (
    <Item>
      <ImgItem
        src={image?.webformatURL}
        alt={image?.tags}
        onClick={toggleModal}
      />
      {showModal && (
        <Modal
          largeImageURL={image?.largeImageURL}
          tags={image?.tags}
          onClose={toggleModal}
        />
      )}
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
