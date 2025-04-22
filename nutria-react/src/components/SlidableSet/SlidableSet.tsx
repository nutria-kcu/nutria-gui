import { Slider } from "@heroui/slider";
import SetButton from "../Button/SetButton";
import { SliderConfig } from "./@types/sliderConfig";
import { SetStateAction, useState } from "react";


const SlidableSet = (props: SliderConfig) => {

  const [value, setValue] = useState<number>(props.min);

  const handleChange = (val: number | number[]) => {
    setValue(Array.isArray(val) ? val[0] : val);
  };



  return (
    <div className="w-full flex justify-center items-center gap-4"> {/* Flex container to align slider and button */}
      <Slider
        className="max-w-md"
        isDisabled={props.disabled}
        defaultValue={props.min}
        onChange={handleChange}
        minValue={props.min}
        maxValue={props.max}
        label={props.label}
        showTooltip={true}
        color={props.color || "danger"}
      />
      <SetButton isDisabled={props.disabled} onPress={() => props.onPress?.(value)}/> {/* Button next to slider */}
    </div>
  )
}

export default SlidableSet;
