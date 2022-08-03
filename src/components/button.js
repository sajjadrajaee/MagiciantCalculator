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
        {firstButton ? <button type="button" className="calcButton">{firstButton}</button> : null}
        {firstButton ? <button type="button" className="calcButton">{secondButton}</button> : <button type="button" className="zeroButton">{secondButton}</button>}
        <button type="button" className="calcButton">{thirdButton}</button>
        <button type="button" className="calcButtonColor">{fourthButton}</button>
      </div>
    );
  }
}

TempButton.defaultProps = {
  firstButton: '',
};

TempButton.propTypes = {
  firstButton: PropTypes.string,
  secondButton: PropTypes.string.isRequired,
  thirdButton: PropTypes.string.isRequired,
  fourthButton: PropTypes.string.isRequired,

};

export default TempButton;
