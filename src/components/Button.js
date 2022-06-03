import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, handleClick } = this.props;
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
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  handleClick: () => null,
};
