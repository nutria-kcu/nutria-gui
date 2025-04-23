import React from 'react';
import SlidableSet from '../../components/SlidableSet/SlidableSet';
import { MainProps } from './@types/main';
import { SliderConfig } from '../../components/SlidableSet/@types/sliderConfig';
import ToggleCheckBox from '../../components/ToggleCheckBox/ToggleCheckBox';
import { toggleProps } from '../../components/ToggleCheckBox/@types/toggleConfig';

const MainPage = ({ slider, toggle }: MainProps) => {
  
    return (
      <div className="w-full flex flex-col items-center space-y-4">
          {slider?.map((sliderConfig: SliderConfig, index: React.Key) => (
            <SlidableSet key={index} {...sliderConfig} />
          ))}
          {toggle?.map((toggleConfig: toggleProps, index: React.Key) => (
            <ToggleCheckBox key={index} {...toggleConfig} />
          ))}
      </div>
    );
  }
  
  export default MainPage;