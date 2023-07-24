import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import { ImgItem, Item } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { image } = this.props;

    return (
      <Item>
        <ImgItem
          src={image?.webformatURL}
          alt={image?.tags}
          onClick={this.toggleModal}
        />
        {showModal && (
          <Modal
            largeImageURL={image?.largeImageURL}
            tags={image?.tags}
            onClose={this.toggleModal}
          />
        )}
      </Item>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
