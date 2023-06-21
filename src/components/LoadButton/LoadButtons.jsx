import PropTypes from 'prop-types'; 

export const PageUpBtn = ({ onUp }) => {
  return (
    <button type="submit" onClick={onUp}>
      Page up
    </button>
  );
};

export const PageDownBtn = ({ onDown }) => {
  return (
    <button type="submit" onClick={onDown}>
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