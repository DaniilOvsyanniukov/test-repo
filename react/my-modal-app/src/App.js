import React, { useState } from 'react';
import MyModal from './MyModal';
import CensoredText from './CensoredText';



const SomeComponent = () => {
  const [open, setOpen] = useState(false);
  const badWords = ['test', 'someBadWord'];
  const someText = 'Very long text who contains someBadWord and testWord';
  

return (
  <>
    <div>
      <CensoredText badWords={badWords}>{someText}</CensoredText>
    </div>
    <div style={{ height: '2000px' }}>Content outside modal, scroll down to find the button </div>
    <button onClick={() => setOpen(true)}>Open Modal</button>
    <MyModal open={open} disableGlobalScroll={true}>
      <div>
        <h1>Some content</h1>
        <button onClick={() => setOpen(false)}>Close</button>
      </div>
    </MyModal>
  </>
);
};

export default SomeComponent;
