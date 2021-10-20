import React from 'react';
import { Math } from '../../components';

const customTemp = (obj) => {
    if (obj.operator === '+'){
        return `Mutilply of ${obj.first} and ${obj.second} is ${obj.result}`;
    }
    if (obj.operator === '-'){
        return `Divison of ${obj.first} and ${obj.second} is ${obj.result}`;
    }
    if (obj.operator === '*'){
        return `Mutilply of ${obj.first} and ${obj.second} is ${obj.result}`;
    }
    if (obj.operator === '/'){
        return `Mutilply of ${obj.first} and ${obj.second} is ${obj.result}`;
    }
}
const ChildrenDemo = () => (
    <>
    <Math first = {7} second = {4} operator='+'/>
    <Math first = {7} second = {4} operator='+'>
        {customTemp}
    </Math>
    </>
);
export default ChildrenDemo;