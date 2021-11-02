import React from 'react';
import { Math } from '../../components';

const customTemp = (obj) => {
    if (obj.operator === '+'){
        return `Sum of ${obj.first} and ${obj.second} is ${obj.result}`;
    }
    if (obj.operator === '-'){
        return `Subtraction of ${obj.first} and ${obj.second} is ${obj.result}`;
    }
    if (obj.operator === '*'){
        return `Mutilplication of ${obj.first} and ${obj.second} is ${obj.result}`;
    }
    if (obj.operator === '/'){
        return `Divide of ${obj.first} and ${obj.second} is ${obj.result}`;
    }
}
const ChildrenDemo = () => (
    <>
    <Math first = {7} second = {3} operator='+'/>
    <Math first = {7} second = {3} operator='-'>
        {customTemp}
    </Math>
    </>
);
export default ChildrenDemo;