import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line react/prefer-stateless-function
class TempButton extends React.Component {
  render() {
    const {
      firstButton, secondButton, thirdButton, fourthButton,
    } = this.props;
    return (
      <div className="row">
        <button type="button">{firstButton}</button>
        <button type="button">{secondButton}</button>
        <button type="button">{thirdButton}</button>
        {fourthButton ? <button type="button">{fourthButton}</button> : null}
      </div>
    );
  }
}

TempButton.defaultProps = {
  fourthButton: '',
};

TempButton.propTypes = {
  firstButton: PropTypes.string.isRequired,
  secondButton: PropTypes.string.isRequired,
  thirdButton: PropTypes.string.isRequired,
  fourthButton: PropTypes.string,

};

export default TempButton;
