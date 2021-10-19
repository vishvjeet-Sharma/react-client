import React from 'react';
import { Slider, TextField } from '../../components/index';
import { BANNER, DEFAULT_BANNER_IMAGE } from '../../configs/constants';

const TextFieldDemo = () => (
  <div>
    <div>
      <Slider altText="Default Banner" defaultBanner={DEFAULT_BANNER_IMAGE} banners={BANNER} height="200" random />
    </div>
    <div>
    <TextField heading="This is a Disabld Input" value="Disabled Input" disabled inputStyle="disabledInput" />
    <TextField heading="A Valid Input" value="Accessible" inputStyle="validInput" />
    <TextField heading="An Input with error" value="101" error="Could not be greater than" inputStyle="inputWithErrors" />
    </div>
  </div>
);

export default TextFieldDemo;

