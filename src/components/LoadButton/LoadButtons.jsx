import PropTypes from 'prop-types'; 
import css from './LoadButton.module.css';

export const PageUpBtn = ({ onUp }) => {
  return (
    <button type="submit" className={css.paginationBtn} onClick={onUp}>
      Page up
    </button>
  );
};

export const PageDownBtn = ({ onDown }) => {
  return (
    <button type="submit" className={css.paginationBtn} onClick={onDown}>
      Page down
    </button>
  );
};

PageUpBtn.propTypes = {
  onUp: PropTypes.func.isRequired,
}
PageDownBtn.propTypes = {
  onDown: PropTypes.func.isRequired,
}