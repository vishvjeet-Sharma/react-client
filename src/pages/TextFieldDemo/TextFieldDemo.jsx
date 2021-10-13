import React from 'react';
import { TextField } from '../../components';

const TextFieldDemo = () => (
  <div>
    <TextField heading="This is a Disabld Input" value="Disabled Input" disabled />
    <TextField heading="A Valid Input" value="Accessible" />
    <TextField heading="An Input with error" value="101" error="Could not be greater than" />
  </div>
);

export default TextFieldDemo; 