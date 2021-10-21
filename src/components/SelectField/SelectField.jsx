import React from 'react';
import { PropTypes } from 'prop-types';
import './style.css';


const Selectfield = (props) => {
    const {
        error, value, options, defaultText, onChange,
    } = props;
    return (
        <label htmlFor="sport">
            <h3>Select the game you play.</h3>
            <select className="sport" id="sport" name="sport" value={value} onChange={onChange} error={error}>
                <option className="sport" value="">{defaultText}</option>
                {options.map((sport) => {
                    const { value: selectvalue, label } = sport;
                    return <option className="sport" key={selectvalue} value={selectvalue}>{label}</option>;
                })}
            </select>
        </label>
    );
};

Selectfield.defaultProps = {
    error: '', defaultText: 'Select', options: [],
};

Selectfield.propTypes = {
    error: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    option: PropTypes.arrayOf(PropTypes.object),
    defaultText: PropTypes.string,

};

export default Selectfield;