import React from 'react';
import { PropTypes } from 'prop-types';
;

const RadioGroup = (props) => {
    const {
        error, value, onChange, options,
    } = props;
    return (
        <>
            <h3>What you do?</h3>
            {options.map((items) => {
                const { value: selectedvalue, label } = items;
                return (
                    <div value={value} onChange={onChange} key={selectedvalue} error={error}>
                        <input type="radio" id={selectedvalue} name="sports" value={selectedvalue} />
                        <label htmlFor="role">{label}</label>
                    </div>
                );
            })}
        </>
    );
};
RadioGroup.defaultProps = {
    error:'',
    options:[],
};

RadioGroup.propTypes = {
    error: PropTypes.string, value: PropTypes.string.isRequired, onchange: PropTypes.func.isRequired, option: PropTypes.arrayOf(PropTypes.string),
};

export default RadioGroup;