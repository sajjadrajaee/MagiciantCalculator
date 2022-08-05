import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line react/prefer-stateless-function
class TempButton extends React.Component {
  render() {
    const {
      firstButton, secondButton, thirdButton, fourthButton, updateObj
    } = this.props;
    return (
      <div className="row">
        {firstButton ? <button type="button" className="calcButton" onClick={updateObj} buttonName={firstButton}>{firstButton}</button> : null}
        {firstButton ? <button type="button" className="calcButton" onClick={updateObj} buttonName={secondButton}>{secondButton}</button> : <button type="button" className="zeroButton" onClick={updateObj} buttonName={secondButton}>{secondButton}</button>}
        <button type="button" className="calcButton" onClick={updateObj} buttonName={thirdButton}>{thirdButton}</button>
        <button type="button" className="calcButtonColor" onClick={updateObj} buttonName={thirdButton}>{fourthButton}</button>
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
  updateObj: PropTypes.func.isRequired,
};

export default TempButton;
