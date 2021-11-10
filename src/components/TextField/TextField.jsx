import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './style';
import './style.css';

const TextField = (props) => {
  const {
    value, error, disabled, inputStyle, heading,
  } = props;

  return(
    <div>
      <h3 style={styles.heading}>{heading}</h3>
      <input style={styles[inputStyle]} name="inputField" type="text" value={value} error={error} disabled={disabled} />
      {error && <p style={styles.errorMessage}>{error}</p>}
    </div>
    // <label htmlFor="name">
    //   <h3>Name</h3>
    //   <input type="text" id="name" name="name" value={value} error={error} onChange={onChange} />
    // </label>
  );
};

// TextField.defaultProps = {
//   error:'',
// };

TextField.propTypes = {
  error: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  disabled: PropTypes.string.isRequired,
  inputStyle: PropTypes.string.isRequired,
  // onChange: PropTypes.func.isRequired,
};

export default TextField;
