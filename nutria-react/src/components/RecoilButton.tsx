import React, { useState } from 'react';
import { Button } from '@heroui/react';

const RecoilButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleButton = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <Button onClick={toggleButton} color={isOn ? "primary" : "danger"}>
      {isOn ? 'ON' : 'OFF'}
    </Button>
  );
};

export default RecoilButton;
