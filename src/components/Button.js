import { PropTypes } from 'prop-types';

export default function Button({ value, handleClick }) {
  return (
    <button
      type="button"
      className={`btn ${['÷', 'x', '-', '+', '='].includes(value) ? 'orange' : ''} ${value === '0' ? 'double' : ''}`}
      onClick={() => handleClick(value)}
    >
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  handleClick: () => null,
};
