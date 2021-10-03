import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, onClick }) => (
    <li className="ImageGalleryItem">
        <img
            src={webformatURL}
            alt={tags}
            className="ImageGalleryItem-image"
            onClick={() => onClick(largeImageURL)}
        />
    </li>
);

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
