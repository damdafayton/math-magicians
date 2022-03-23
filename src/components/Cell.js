import React from 'react';
import PropTypes from 'prop-types';

export default class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { myClass, children, handleClick } = this.props;
    return <div role="presentation" onKeyDown={handleClick} onClick={handleClick} className={myClass}>{children}</div>;
  }
}

Cell.defaultProps = {
  myClass: '',
  children: '',
  handleClick: () => { },
};

Cell.propTypes = {
  myClass: PropTypes.string,
  children: PropTypes.string,
  handleClick: PropTypes.func,
};
