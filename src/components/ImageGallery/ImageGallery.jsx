import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

const ImageGallery = ({ images }) => {
  return (
    <List>
      {images.map(
        image => image && <ImageGalleryItem key={image.id} image={image} />
      )}
    </List>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;
