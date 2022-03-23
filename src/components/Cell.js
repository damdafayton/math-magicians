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
    return <div id={id} role="presentation" onKeyDown={handleClick} onClick={handleClick} className={myClass}>{children}</div>;
  }
}

Cell.defaultProps = {
  id: '',
  myClass: '',
  children: '',
  handleClick: () => { },
};

Cell.propTypes = {
  id: PropTypes.string,
  myClass: PropTypes.string,
  children: PropTypes.string,
  handleClick: PropTypes.func,
};
