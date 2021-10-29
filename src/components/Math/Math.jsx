import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';


const Math = (props) => {
    const {
        first, second, operator, children,
    } = props;

    const Result = (value1, value2, valueFinal) => {
        if (valueFinal === '+') {
            return value1 + value2;
        }

        if (valueFinal === '-') {
            return value1 - value2;
        }

        if (valueFinal === '*') {
            return value1 * value2;
        }

        if (valueFinal === '/') {
            return value1 * value2;
        }
        return 'Invalid Operator';
    };
    const result = Result(first, second, operator);
     return(
         <Typography>
             {children({
                 first, second, operator, result,
             })}
         </Typography>
     );
    
};

const defaultTemp = (obj) => {
    if (obj.operator === '+'){
        return `${obj.first} + ${obj.second} = ${obj.result}`;
    }
    if (obj.operator === '-'){
        return `${obj.first} - ${obj.second} = ${obj.result}`;
    }
    if (obj.operator === '*'){
        return  `${obj.first} * ${obj.second} = ${obj.result}`;
    }
    if (obj.operator === '/'){
        return  `${obj.first} / ${obj.second} = ${obj.result}`;
    }
    return  `Invalid Operation : ${obj.operator}`;
};
Math.defaultProps = {
    children: defaultTemp,
};
Math.propTypes = {
    first:PropTypes.number.isRequired,
    second:PropTypes.number.isRequired,
    operator:PropTypes.string.isRequired,
    children:PropTypes.func,
};

export default Math;