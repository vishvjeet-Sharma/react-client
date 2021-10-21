import React, { useState, useEffect } from 'react';
import { OPTIONS, OPTIONS_CRICKET, OPTIONS_FOOTBALL } from '../../configs/constants';
import { SelectField, TextField, RadioGroup } from '../../components/index';
import './style.css';

const InputDemo = () => {
  const [name, setName] = useState('');
  const [sport, setSport] = useState('');
  const [role, setRole] = useState({
    cricket: '',
    football: '',
  });

  useEffect(() => {
    const { cricket, football } = role;
    console.log({
      name, sport, cricket, football,
    });
  }, [name, sport, role]);
  const handleNameChange = (event) => {
    const { value } = event.target;
    if (value.length <= 10) {
      setName(value);
    }
  };
  const handleSportChange = (event) => {
    const { value } = event.target;
    console.log(
      event.target, 'this is our spots'
    )
    setSport(value);
  };
  const handleRoleChange = (event) => {
    const { value } = event.target;
    if (sport === 'cricket') {
      setRole({ ...setRole, cricket: value });
    } else {
      setRole({ ...setRole, football: value });
    }
  };
  return (
    <div className="container">
      <form>
      <TextField value={name} onChange={handleNameChange} defaultValue={name} />
      <SelectField value={sport} onChange={handleSportChange} options={OPTIONS} />
      {sport && (
        <RadioGroup
          options={sport === 'cricket' ? OPTIONS_CRICKET : OPTIONS_FOOTBALL}
          onChange={handleRoleChange}
          value={role}
        />
      )}
      </form>
    </div>
    
  );
};

export default InputDemo;