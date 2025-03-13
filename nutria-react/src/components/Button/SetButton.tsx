import React, { useState } from 'react';
import { Button, ButtonProps } from '@heroui/react';

const SetButton = (props: ButtonProps) => {

  return (
    <Button onPress={props.onPress} color={props.color || "danger"}>
      SET
    </Button>
  );
};

export default SetButton;
