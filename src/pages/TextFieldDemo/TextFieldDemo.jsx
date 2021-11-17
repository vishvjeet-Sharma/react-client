import React from 'react';
import { Slider, TextField1 } from '../../components/index';
import { BANNERS, DEFAULT_BANNER_IMAGE } from '../../configs/constants';


const TextFieldDemo = () => (
  <div> 
    <div id ="slider" >   
      <Slider altText="Default Banner" defaultBanner={DEFAULT_BANNER_IMAGE} banners={BANNERS} height="250" random />
    </div>
    <div>
      <TextField1 heading="This is a disabled Input" value="Disabled Input" inputStyle="disabledInput" disabled />
      <TextField1 heading="A Valid Input" value="Accessible" inputStyle="validInput" />
      <TextField1 heading="An Input with errors" value="101" error="Could not be greater than" inputStyle="inputWithErrors" />
    </div>
  </div>
);

export default TextFieldDemo;