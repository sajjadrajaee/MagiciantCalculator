import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line react/prefer-stateless-function
class TempButton extends React.Component {
  render() {
    const {
      firstButton, secondButton, thirdButton, fourthButton, updateObject,
    } = this.props;
    return (
      <div className="row">
        {firstButton ? <button type="button" className="calcButton" onClick={updateObject}>{firstButton}</button> : null}
        {firstButton ? <button type="button" className="calcButton" onClick={updateObject}>{secondButton}</button> : <button type="button" className="zeroButton" onClick={updateObject}>{secondButton}</button>}
        <button type="button" className="calcButton" onClick={updateObject}>{thirdButton}</button>
        <button type="button" className="calcButtonColor" onClick={updateObject}>{fourthButton}</button>
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
  updateObject: PropTypes.func.isRequired,
};

export default TempButton;
