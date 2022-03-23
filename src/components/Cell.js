import React from 'react';
import PropTypes from 'prop-types';

export default class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      myClass, children, handleClick, id,
    } = this.props;
    return (
      <span
        role="presentation"
        className={myClass}
        id={id}
        onKeyDown={handleClick}
        onClick={handleClick}
      >
        {children}
      </span>
    );
  }
}

Cell.defaultProps = {
  myClass: '',
  id: '',
  children: '',
  handleClick: () => { },
};

Cell.propTypes = {
  id: PropTypes.string,
  myClass: PropTypes.string,
  children: PropTypes.string,
  handleClick: PropTypes.func,
};
