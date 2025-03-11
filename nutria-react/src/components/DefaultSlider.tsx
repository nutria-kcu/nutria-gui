import React, { useState } from "react";

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
}

const Slider: React.FC<SliderProps> = (props) => {
  const [sliderValue, setSliderValue] = useState<number>(props.value || 0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setSliderValue(newValue);
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  return (
    <div className="slider-container">
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={sliderValue}
        onChange={handleChange}
        className="slider"
      />
      <span>{sliderValue}</span>
    </div>
  );
};

export default Slider;
