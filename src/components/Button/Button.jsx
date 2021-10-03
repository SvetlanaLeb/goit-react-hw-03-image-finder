import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ onLoadClick }) => {
    return (
        <button className={s.btnLoadMore} type="button" onClick={onLoadClick}>
            Load more
        </button>
    );
};

Button.propTypes = {
    onLoadClick: PropTypes.func,
};

export default Button;
