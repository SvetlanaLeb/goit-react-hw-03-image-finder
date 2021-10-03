import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';

const ImageGallery = ({ data, onImageClick }) => (
    <ul className="ImageGallery">
        {data &&
            data.map(({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    tags={tags}
                    onClick={onImageClick}
                />
            ))}
    </ul>
);

ImageGallery.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                webformatURL: PropTypes.string.isRequired,
                largeImageURL: PropTypes.string.isRequired,
                tags: PropTypes.string.isRequired,
            }),
        ),
        PropTypes.array,
    ]),
    onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
