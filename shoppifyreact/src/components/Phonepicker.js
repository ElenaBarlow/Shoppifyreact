import './Phonepicker.css';
import PhoneInput from 'react-phone-number-input';
import { useState } from 'react';
import './Phonepicker.css';
const Phonepicker = () => {
  const [value, setValue] = useState(); 
  return (
    
    
    <div className='phone'>
      <PhoneInput
        value={value}
        onChange={setValue}
        maxLength={15}
      />
    </div>
  );
};

export default Phonepicker;