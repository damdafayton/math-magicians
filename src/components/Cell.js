import React from 'react';
import PropTypes from 'prop-types';

export default class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { myClass, children } = this.props;
    return <div className={myClass}>{children}</div>;
  }
}

Cell.defaultProps = {
  myClass: '',
  children: '',
};

Cell.propTypes = {
  myClass: PropTypes.string,
  children: PropTypes.string,
};
